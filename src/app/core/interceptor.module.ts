import { Injectable, NgModule } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { AuthService } from "./auth.service";
import { switchMap, tap, catchError } from "rxjs/operators";
import { Subject } from "rxjs/internal/Subject";
import { throwError } from "rxjs/internal/observable/throwError";

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
  refreshTokenInProgress = false;

  tokenRefreshedSource = new Subject();
  tokenRefreshed$ = this.tokenRefreshedSource.asObservable();

  constructor(private authService: AuthService) {}

  addAuthHeader(request) {
    const authHeader = this.authService.getAccessToken();

    if (authHeader) {
      return request.clone({
        setHeaders: {
          Authorization: `Bearer ${authHeader}`,
        },
      });
    }

    return request;
  }

  refreshToken(): Observable<any> {
    if (this.refreshTokenInProgress) {
      return new Observable((observer) => {
        this.tokenRefreshed$.subscribe(() => {
          observer.next();
          observer.complete();
        });
      });
    } else {
      this.refreshTokenInProgress = true;

      return this.authService.refreshAccessToken().pipe(
        tap((token) => {
          this.authService.saveToken(token);
          this.refreshTokenInProgress = false;
          this.tokenRefreshedSource.next();
        }),
        catchError((err) => {
          this.refreshTokenInProgress = false;
          this.logout();

          return err;
        })
      );
    }
  }

  logout() {
    this.authService.logout();
  }

  handleResponseError(error, request?, next?) {
    // Business error
    if (error.status === 400) {
      // Show message
    }

    // Invalid token error
    else if (error.status === 401) {
      return this.refreshToken().pipe(
        switchMap(() => {
          request = this.addAuthHeader(request);
          return next.handle(request);
        }),
        catchError((e) => {
          if (e.status !== 401) {
            return this.handleResponseError(e);
          } else {
            this.logout();
          }
        })
      );
    }

    // Access denied error
    else if (error.status === 403) {
      // Show message
      // Logout
      this.logout();
    }

    // Server error
    else if (error.status === 500) {
      // Show message
    }

    // Maintenance error
    else if (error.status === 503) {
      // Show message
      // Redirect to the maintenance page
    }

    return throwError(error);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    // Handle request
    request = this.addAuthHeader(request);

    // Handle response
    return next.handle(request).pipe(
      catchError((error) => {
        return this.handleResponseError(error, request, next);
      })
    );
  }
}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
    },
  ],
})
export class Interceptor {}

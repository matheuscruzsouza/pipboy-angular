import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public retrieveToken(username: string, password: string) {
    let params = new HttpParams()
      .append("grant_type", "password")
      .append("username", username)
      .append("password", password)
      .append("client_id", "client-id")
      .append("client_secret", "secret-id");

    return this.http.get(`${environment.BACKEND_API}/oauth/token`, {
      params,
    });
  }

  public refreshAccessToken() {
    let params = new HttpParams()
      .append("grant_type", "refresh_token")
      .append("refresh_token", sessionStorage.getItem("refresh_token"))
      .append("client_id", "client-id")
      .append("client_secret", "secret-id");

    return this.http.get(`${environment.BACKEND_API}/oauth/token`, {
      params,
    });
  }

  public saveToken(token) {
    var expireDate = new Date().getTime() + 1000 * token.expires_in;

    sessionStorage.setItem("access_token", token.access_token);
    sessionStorage.setItem("refresh_token", token.refresh_token);
    sessionStorage.setItem("expire_date", expireDate.toString());
    sessionStorage.setItem(
      "expire_date_string",
      new Date(expireDate).toString()
    );

    console.log(`Obtained Access token `);
  }

  public checkCredentials() {
    const expires_date = sessionStorage.getItem("expire_date");
    const access_token = sessionStorage.getItem("access_token");

    if (access_token && Number(expires_date) > new Date().getTime()) {
      return !!access_token;
    }
    return false;
  }

  public getAccessToken() {
    return sessionStorage.getItem("access_token");
  }

  public logout() {
    sessionStorage.removeItem("access_token");
    // window.location.reload();
  }
}

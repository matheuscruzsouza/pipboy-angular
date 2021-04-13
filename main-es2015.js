(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/map/map.component */ "./src/app/pages/map/map.component.ts");
/* harmony import */ var _pages_stat_stat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/stat/stat.component */ "./src/app/pages/stat/stat.component.ts");
/* harmony import */ var _pages_inv_inv_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/inv/inv.component */ "./src/app/pages/inv/inv.component.ts");
/* harmony import */ var _pages_data_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/data/data.component */ "./src/app/pages/data/data.component.ts");
/* harmony import */ var _pages_radio_radio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/radio/radio.component */ "./src/app/pages/radio/radio.component.ts");









const routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "stat",
    },
    {
        path: "stat",
        component: _pages_stat_stat_component__WEBPACK_IMPORTED_MODULE_3__["StatComponent"],
    },
    {
        path: "inv",
        component: _pages_inv_inv_component__WEBPACK_IMPORTED_MODULE_4__["InvComponent"],
    },
    {
        path: "data",
        component: _pages_data_data_component__WEBPACK_IMPORTED_MODULE_5__["DataComponent"],
    },
    {
        path: "map",
        component: _pages_map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"],
    },
    {
        path: "radio",
        component: _pages_radio_radio_component__WEBPACK_IMPORTED_MODULE_6__["RadioComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_component_video_player_video_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/component/video-player/video.component */ "./src/app/shared/component/video-player/video.component.ts");
/* harmony import */ var _shared_radio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/radio.service */ "./src/app/shared/radio.service.ts");
/* harmony import */ var _shared_component_header_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/component/header/menu/menu.component */ "./src/app/shared/component/header/menu/menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class AppComponent {
    constructor(radioService) {
        this.radioService = radioService;
        this.title = "pipboy";
        this.radio = new Audio();
        this.src = "";
    }
    ngAfterViewInit() {
        this.playAudio(this.radioService.radio.url);
        this.radioService.radio_change.subscribe((radio) => {
            if (radio.url == null) {
                this.radio.pause();
                this.video.stopVideo();
            }
            else if (!radio.youtube) {
                this.playAudio(radio.url);
            }
            else if (radio.youtube) {
                this.playVideo(radio.url);
            }
        });
    }
    playAudio(src) {
        if (src != null) {
            if (this.video && this.videoID != null) {
                this.video.stopVideo();
            }
            this.videoID = null;
            this.radio.src = src;
            this.radio.load();
            this.radio.play();
        }
        else {
            this.radio.pause();
        }
    }
    playVideo(src) {
        if (src != null) {
            if (this.video && this.videoID != null) {
                this.video.changeVideo(src);
            }
            else {
                this.videoID = src;
            }
            this.radio.src = null;
            this.radio.pause();
        }
        else {
            this.video.stopVideo();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_radio_service__WEBPACK_IMPORTED_MODULE_2__["RadioService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_shared_component_video_player_video_component__WEBPACK_IMPORTED_MODULE_1__["VideoComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
    } }, decls: 4, vars: 1, consts: [[1, "screen", "main-screen"], [3, "video_id"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-video", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("video_id", ctx.videoID);
    } }, directives: [_shared_component_header_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _shared_component_video_player_video_component__WEBPACK_IMPORTED_MODULE_1__["VideoComponent"]], styles: ["[_nghost-%COMP%]   .main-screen[_ngcontent-%COMP%] {\n  max-width: 950px;\n  display: block;\n  margin: auto;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhldXMvRG9jdW1lbnRzL1Byb2dyYW1hw6fDo28vUHJvamV0b3MvUGlwYm95LWFuZ3VsYXIvcGlwYm95LWFuZ3VsYXIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3RcbiAgLm1haW4tc2NyZWVuXG4gICAgbWF4LXdpZHRoOiA5NTBweFxuICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgbWFyZ2luOiBhdXRvXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG4iLCI6aG9zdCAubWFpbi1zY3JlZW4ge1xuICBtYXgtd2lkdGg6IDk1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.sass"],
            }]
    }], function () { return [{ type: _shared_radio_service__WEBPACK_IMPORTED_MODULE_2__["RadioService"] }]; }, { video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_shared_component_video_player_video_component__WEBPACK_IMPORTED_MODULE_1__["VideoComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_stat_stat_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/stat/stat.module */ "./src/app/pages/stat/stat.module.ts");
/* harmony import */ var _shared_component_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/component/footer/footer.module */ "./src/app/shared/component/footer/footer.module.ts");
/* harmony import */ var _pages_inv_inv_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/inv/inv.module */ "./src/app/pages/inv/inv.module.ts");
/* harmony import */ var _pages_map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/map/map.component */ "./src/app/pages/map/map.component.ts");
/* harmony import */ var _pages_data_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/data/data.component */ "./src/app/pages/data/data.component.ts");
/* harmony import */ var _pages_radio_radio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/radio/radio.component */ "./src/app/pages/radio/radio.component.ts");
/* harmony import */ var _shared_component_header_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/component/header/menu/menu.component */ "./src/app/shared/component/header/menu/menu.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _core_interceptor_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/interceptor.module */ "./src/app/core/interceptor.module.ts");
/* harmony import */ var _shared_component_video_player_video_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/component/video-player/video.module */ "./src/app/shared/component/video-player/video.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _core_interceptor_module__WEBPACK_IMPORTED_MODULE_12__["Interceptor"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _pages_stat_stat_module__WEBPACK_IMPORTED_MODULE_4__["StatModule"],
            _pages_inv_inv_module__WEBPACK_IMPORTED_MODULE_6__["InvModule"],
            _shared_component_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
            _shared_component_video_player_video_module__WEBPACK_IMPORTED_MODULE_13__["VideoModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _shared_component_header_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
        _pages_map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"],
        _pages_data_data_component__WEBPACK_IMPORTED_MODULE_8__["DataComponent"],
        _pages_radio_radio_component__WEBPACK_IMPORTED_MODULE_9__["RadioComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _core_interceptor_module__WEBPACK_IMPORTED_MODULE_12__["Interceptor"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _pages_stat_stat_module__WEBPACK_IMPORTED_MODULE_4__["StatModule"],
        _pages_inv_inv_module__WEBPACK_IMPORTED_MODULE_6__["InvModule"],
        _shared_component_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
        _shared_component_video_player_video_module__WEBPACK_IMPORTED_MODULE_13__["VideoModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _shared_component_header_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
                    _pages_map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"],
                    _pages_data_data_component__WEBPACK_IMPORTED_MODULE_8__["DataComponent"],
                    _pages_radio_radio_component__WEBPACK_IMPORTED_MODULE_9__["RadioComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _core_interceptor_module__WEBPACK_IMPORTED_MODULE_12__["Interceptor"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                    _pages_stat_stat_module__WEBPACK_IMPORTED_MODULE_4__["StatModule"],
                    _pages_inv_inv_module__WEBPACK_IMPORTED_MODULE_6__["InvModule"],
                    _shared_component_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
                    _shared_component_video_player_video_module__WEBPACK_IMPORTED_MODULE_13__["VideoModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





class AuthService {
    constructor(http) {
        this.http = http;
    }
    retrieveToken(username, password) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .append("grant_type", "password")
            .append("username", username)
            .append("password", password)
            .append("client_id", "client-id")
            .append("client_secret", "secret-id");
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_API}/oauth/token`, {
            params,
        });
    }
    refreshAccessToken() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .append("grant_type", "refresh_token")
            .append("refresh_token", sessionStorage.getItem("refresh_token"))
            .append("client_id", "client-id")
            .append("client_secret", "secret-id");
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_API}/oauth/token`, {
            params,
        });
    }
    saveToken(token) {
        var expireDate = new Date().getTime() + 1000 * token.expires_in;
        sessionStorage.setItem("access_token", token.access_token);
        sessionStorage.setItem("refresh_token", token.refresh_token);
        sessionStorage.setItem("expire_date", expireDate.toString());
        sessionStorage.setItem("expire_date_string", new Date(expireDate).toString());
        console.log(`Obtained Access token `);
    }
    checkCredentials() {
        const expires_date = sessionStorage.getItem("expire_date");
        const access_token = sessionStorage.getItem("access_token");
        if (access_token && Number(expires_date) > new Date().getTime()) {
            return !!access_token;
        }
        return false;
    }
    getAccessToken() {
        return sessionStorage.getItem("access_token");
    }
    logout() {
        sessionStorage.removeItem("access_token");
        // window.location.reload();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/interceptor.module.ts":
/*!********************************************!*\
  !*** ./src/app/core/interceptor.module.ts ***!
  \********************************************/
/*! exports provided: HttpsRequestInterceptor, Interceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpsRequestInterceptor", function() { return HttpsRequestInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interceptor", function() { return Interceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth.service.ts");








class HttpsRequestInterceptor {
    constructor(authService) {
        this.authService = authService;
        this.refreshTokenInProgress = false;
        this.tokenRefreshedSource = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.tokenRefreshed$ = this.tokenRefreshedSource.asObservable();
    }
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
    refreshToken() {
        if (this.refreshTokenInProgress) {
            return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
                this.tokenRefreshed$.subscribe(() => {
                    observer.next();
                    observer.complete();
                });
            });
        }
        else {
            this.refreshTokenInProgress = true;
            return this.authService.refreshAccessToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((token) => {
                this.authService.saveToken(token);
                this.refreshTokenInProgress = false;
                this.tokenRefreshedSource.next();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => {
                this.refreshTokenInProgress = false;
                this.logout();
                return err;
            }));
        }
    }
    logout() {
        this.authService.logout();
    }
    handleResponseError(error, request, next) {
        // Business error
        if (error.status === 400) {
            // Show message
        }
        // Invalid token error
        else if (error.status === 401) {
            return this.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
                request = this.addAuthHeader(request);
                return next.handle(request);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((e) => {
                if (e.status !== 401) {
                    return this.handleResponseError(e);
                }
                else {
                    this.logout();
                }
            }));
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
        return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
    }
    intercept(request, next) {
        // Handle request
        request = this.addAuthHeader(request);
        // Handle response
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            return this.handleResponseError(error, request, next);
        }));
    }
}
HttpsRequestInterceptor.ɵfac = function HttpsRequestInterceptor_Factory(t) { return new (t || HttpsRequestInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
HttpsRequestInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpsRequestInterceptor, factory: HttpsRequestInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpsRequestInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }]; }, null); })();
class Interceptor {
}
Interceptor.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Interceptor });
Interceptor.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Interceptor_Factory(t) { return new (t || Interceptor)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: HttpsRequestInterceptor,
            multi: true,
        },
    ] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Interceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                        useClass: HttpsRequestInterceptor,
                        multi: true,
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/data/data.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/data/data.component.ts ***!
  \**********************************************/
/*! exports provided: DataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataComponent", function() { return DataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DataComponent {
    constructor() { }
    ngOnInit() {
    }
}
DataComponent.ɵfac = function DataComponent_Factory(t) { return new (t || DataComponent)(); };
DataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataComponent, selectors: [["app-data"]], decls: 2, vars: 0, template: function DataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "data works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhldXMvRG9jdW1lbnRzL1Byb2dyYW1hw6fDo28vUHJvamV0b3MvUGlwYm95LWFuZ3VsYXIvcGlwYm95LWFuZ3VsYXIvc3JjL2FwcC9wYWdlcy9kYXRhL2RhdGEuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3BhZ2VzL2RhdGEvZGF0YS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhdGEvZGF0YS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0XG4gIGhlaWdodDogMTAwJVxuIiwiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data',
                templateUrl: './data.component.html',
                styleUrls: ['./data.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/inv/aid/aid.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/inv/aid/aid.component.ts ***!
  \************************************************/
/*! exports provided: AidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AidComponent", function() { return AidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_component_footer_inv_inv_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/component/footer/inv/inv.component */ "./src/app/shared/component/footer/inv/inv.component.ts");



class AidComponent {
    constructor() { }
    ngOnInit() {
    }
}
AidComponent.ɵfac = function AidComponent_Factory(t) { return new (t || AidComponent)(); };
AidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AidComponent, selectors: [["app-aid"]], decls: 3, vars: 0, consts: [["menu", "aid"]], template: function AidComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "aid works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer-inv", 0);
    } }, directives: [_shared_component_footer_inv_inv_component__WEBPACK_IMPORTED_MODULE_1__["FooterInvComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludi9haWQvYWlkLmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AidComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aid',
                templateUrl: './aid.component.html',
                styleUrls: ['./aid.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/inv/apparel/apparel.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/inv/apparel/apparel.component.ts ***!
  \********************************************************/
/*! exports provided: ApparelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApparelComponent", function() { return ApparelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_component_footer_inv_inv_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/component/footer/inv/inv.component */ "./src/app/shared/component/footer/inv/inv.component.ts");



class ApparelComponent {
    constructor() { }
    ngOnInit() {
    }
}
ApparelComponent.ɵfac = function ApparelComponent_Factory(t) { return new (t || ApparelComponent)(); };
ApparelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApparelComponent, selectors: [["app-apparel"]], decls: 3, vars: 0, consts: [["menu", "apparel"]], template: function ApparelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "apparel works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer-inv", 0);
    } }, directives: [_shared_component_footer_inv_inv_component__WEBPACK_IMPORTED_MODULE_1__["FooterInvComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludi9hcHBhcmVsL2FwcGFyZWwuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApparelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-apparel',
                templateUrl: './apparel.component.html',
                styleUrls: ['./apparel.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/inv/inv-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/inv/inv-routing.module.ts ***!
  \*************************************************/
/*! exports provided: InvRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvRoutingModule", function() { return InvRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _inv_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inv.component */ "./src/app/pages/inv/inv.component.ts");
/* harmony import */ var _weapons_weapons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weapons/weapons.component */ "./src/app/pages/inv/weapons/weapons.component.ts");
/* harmony import */ var _apparel_apparel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apparel/apparel.component */ "./src/app/pages/inv/apparel/apparel.component.ts");
/* harmony import */ var _aid_aid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aid/aid.component */ "./src/app/pages/inv/aid/aid.component.ts");
/* harmony import */ var _misc_misc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./misc/misc.component */ "./src/app/pages/inv/misc/misc.component.ts");
/* harmony import */ var _junk_junk_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./junk/junk.component */ "./src/app/pages/inv/junk/junk.component.ts");










const routes = [
    {
        path: "inv",
        component: _inv_component__WEBPACK_IMPORTED_MODULE_2__["InvComponent"],
        children: [
            {
                path: "",
                pathMatch: "full",
                redirectTo: "weapons",
            },
            {
                path: "weapons",
                component: _weapons_weapons_component__WEBPACK_IMPORTED_MODULE_3__["WeaponsComponent"],
                outlet: "inv",
            },
            {
                path: "apparel",
                component: _apparel_apparel_component__WEBPACK_IMPORTED_MODULE_4__["ApparelComponent"],
                outlet: "inv",
            },
            {
                path: "aid",
                component: _aid_aid_component__WEBPACK_IMPORTED_MODULE_5__["AidComponent"],
                outlet: "inv",
            },
            {
                path: "misc",
                component: _misc_misc_component__WEBPACK_IMPORTED_MODULE_6__["MiscComponent"],
                outlet: "inv",
            },
            {
                path: "junk",
                component: _junk_junk_component__WEBPACK_IMPORTED_MODULE_7__["JunkComponent"],
                outlet: "inv",
            },
        ],
    },
];
class InvRoutingModule {
}
InvRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InvRoutingModule });
InvRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InvRoutingModule_Factory(t) { return new (t || InvRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InvRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/inv/inv.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/inv/inv.component.ts ***!
  \********************************************/
/*! exports provided: InvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvComponent", function() { return InvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["weapons"]; };
const _c1 = function (a0) { return { inv: a0 }; };
const _c2 = function (a0) { return { outlets: a0 }; };
const _c3 = function (a0) { return [a0]; };
const _c4 = function () { return ["apparel"]; };
const _c5 = function () { return ["aid"]; };
const _c6 = function () { return ["misc"]; };
const _c7 = function () { return ["junk"]; };
class InvComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.router.navigateByUrl("/inv/(inv:weapons)");
    }
}
InvComponent.ɵfac = function InvComponent_Factory(t) { return new (t || InvComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
InvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvComponent, selectors: [["app-inv"]], decls: 13, vars: 40, consts: [[1, "breadcrumbs"], ["routerLinkActive", "active", 3, "routerLink"], ["name", "inv"]], template: function InvComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " WEAPONS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " APPAREL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " AID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " MISC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " JUNK ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0)))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c4)))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c5)))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c6)))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c7)))));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .breadcrumbs[_ngcontent-%COMP%] {\n  width: 30%;\n}\n[_nghost-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  list-style: none;\n  margin: 0;\n  padding: 0 5px;\n  font-family: \"Monofonto\";\n  color: var(--section-color);\n}\n[_nghost-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n[_nghost-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhldXMvRG9jdW1lbnRzL1Byb2dyYW1hw6fDo28vUHJvamV0b3MvUGlwYm95LWFuZ3VsYXIvcGlwYm95LWFuZ3VsYXIvc3JjL2FwcC9wYWdlcy9pbnYvaW52LmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9wYWdlcy9pbnYvaW52LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGO0FEQ0U7RUFDRSxVQUFBO0FDQ0o7QURBSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUNFTjtBREFNO0VBQ0UsYUFBQTtBQ0VSO0FERFE7RUFDRSx3QkFBQTtBQ0dWIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW52L2ludi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0XG4gIGhlaWdodDogMTAwJVxuXG4gIC5icmVhZGNydW1ic1xuICAgIHdpZHRoOiAzMCVcbiAgICB1bFxuICAgICAgZGlzcGxheTogZmxleFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvd1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG4gICAgICBsaXN0LXN0eWxlOiBub25lXG4gICAgICBtYXJnaW46IDBcbiAgICAgIHBhZGRpbmc6IDAgNXB4XG4gICAgICBmb250LWZhbWlseTogJ01vbm9mb250bydcbiAgICAgIGNvbG9yOiB2YXIoLS1zZWN0aW9uLWNvbG9yKVxuXG4gICAgICBsaVxuICAgICAgICBtYXJnaW46IDAgNXB4XG4gICAgICAgICYuYWN0aXZlXG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpXG4iLCI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5icmVhZGNydW1icyB7XG4gIHdpZHRoOiAzMCU7XG59XG46aG9zdCAuYnJlYWRjcnVtYnMgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbm9mb250b1wiO1xuICBjb2xvcjogdmFyKC0tc2VjdGlvbi1jb2xvcik7XG59XG46aG9zdCAuYnJlYWRjcnVtYnMgdWwgbGkge1xuICBtYXJnaW46IDAgNXB4O1xufVxuOmhvc3QgLmJyZWFkY3J1bWJzIHVsIGxpLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-inv",
                templateUrl: "./inv.component.html",
                styleUrls: ["./inv.component.sass"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/inv/inv.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/inv/inv.module.ts ***!
  \*****************************************/
/*! exports provided: InvModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvModule", function() { return InvModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _inv_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inv.component */ "./src/app/pages/inv/inv.component.ts");
/* harmony import */ var _weapons_weapons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weapons/weapons.component */ "./src/app/pages/inv/weapons/weapons.component.ts");
/* harmony import */ var _apparel_apparel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apparel/apparel.component */ "./src/app/pages/inv/apparel/apparel.component.ts");
/* harmony import */ var _aid_aid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aid/aid.component */ "./src/app/pages/inv/aid/aid.component.ts");
/* harmony import */ var _misc_misc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./misc/misc.component */ "./src/app/pages/inv/misc/misc.component.ts");
/* harmony import */ var _junk_junk_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./junk/junk.component */ "./src/app/pages/inv/junk/junk.component.ts");
/* harmony import */ var _inv_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inv-routing.module */ "./src/app/pages/inv/inv-routing.module.ts");
/* harmony import */ var src_app_shared_component_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/footer/footer.module */ "./src/app/shared/component/footer/footer.module.ts");











class InvModule {
}
InvModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InvModule });
InvModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InvModule_Factory(t) { return new (t || InvModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _inv_routing_module__WEBPACK_IMPORTED_MODULE_8__["InvRoutingModule"], src_app_shared_component_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__["FooterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InvModule, { declarations: [_inv_component__WEBPACK_IMPORTED_MODULE_2__["InvComponent"],
        _weapons_weapons_component__WEBPACK_IMPORTED_MODULE_3__["WeaponsComponent"],
        _apparel_apparel_component__WEBPACK_IMPORTED_MODULE_4__["ApparelComponent"],
        _aid_aid_component__WEBPACK_IMPORTED_MODULE_5__["AidComponent"],
        _misc_misc_component__WEBPACK_IMPORTED_MODULE_6__["MiscComponent"],
        _junk_junk_component__WEBPACK_IMPORTED_MODULE_7__["JunkComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _inv_routing_module__WEBPACK_IMPORTED_MODULE_8__["InvRoutingModule"], src_app_shared_component_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__["FooterModule"]], exports: [_inv_component__WEBPACK_IMPORTED_MODULE_2__["InvComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _inv_component__WEBPACK_IMPORTED_MODULE_2__["InvComponent"],
                    _weapons_weapons_component__WEBPACK_IMPORTED_MODULE_3__["WeaponsComponent"],
                    _apparel_apparel_component__WEBPACK_IMPORTED_MODULE_4__["ApparelComponent"],
                    _aid_aid_component__WEBPACK_IMPORTED_MODULE_5__["AidComponent"],
                    _misc_misc_component__WEBPACK_IMPORTED_MODULE_6__["MiscComponent"],
                    _junk_junk_component__WEBPACK_IMPORTED_MODULE_7__["JunkComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _inv_routing_module__WEBPACK_IMPORTED_MODULE_8__["InvRoutingModule"], src_app_shared_component_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__["FooterModule"]],
                exports: [_inv_component__WEBPACK_IMPORTED_MODULE_2__["InvComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/inv/junk/junk.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/inv/junk/junk.component.ts ***!
  \**************************************************/
/*! exports provided: JunkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JunkComponent", function() { return JunkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_component_footer_inv_inv_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/component/footer/inv/inv.component */ "./src/app/shared/component/footer/inv/inv.component.ts");



class JunkComponent {
    constructor() { }
    ngOnInit() {
    }
}
JunkComponent.ɵfac = function JunkComponent_Factory(t) { return new (t || JunkComponent)(); };
JunkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JunkComponent, selectors: [["app-junk"]], decls: 3, vars: 0, consts: [["menu", "junk"]], template: function JunkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "junk works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer-inv", 0);
    } }, directives: [_shared_component_footer_inv_inv_component__WEBPACK_IMPORTED_MODULE_1__["FooterInvComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludi9qdW5rL2p1bmsuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JunkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-junk',
                templateUrl: './junk.component.html',
                styleUrls: ['./junk.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/inv/misc/misc.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/inv/misc/misc.component.ts ***!
  \**************************************************/
/*! exports provided: MiscComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscComponent", function() { return MiscComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_component_footer_inv_inv_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/component/footer/inv/inv.component */ "./src/app/shared/component/footer/inv/inv.component.ts");



class MiscComponent {
    constructor() { }
    ngOnInit() {
    }
}
MiscComponent.ɵfac = function MiscComponent_Factory(t) { return new (t || MiscComponent)(); };
MiscComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MiscComponent, selectors: [["app-misc"]], decls: 3, vars: 0, consts: [["menu", "misc"]], template: function MiscComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "misc works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer-inv", 0);
    } }, directives: [_shared_component_footer_inv_inv_component__WEBPACK_IMPORTED_MODULE_1__["FooterInvComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludi9taXNjL21pc2MuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiscComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-misc',
                templateUrl: './misc.component.html',
                styleUrls: ['./misc.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/inv/weapons/weapons.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/inv/weapons/weapons.component.ts ***!
  \********************************************************/
/*! exports provided: WeaponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponsComponent", function() { return WeaponsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/data.service */ "./src/app/shared/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_component_footer_inv_inv_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/component/footer/inv/inv.component */ "./src/app/shared/component/footer/inv/inv.component.ts");





const _c0 = function (a0, a1) { return { "selected": a0, "preview": a1 }; };
function WeaponsComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WeaponsComponent_li_3_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const weapon_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.select(weapon_r8); })("mouseover", function WeaponsComponent_li_3_Template_li_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const weapon_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.setPreview(weapon_r8); })("mouseout", function WeaponsComponent_li_3_Template_li_mouseout_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.clearPreview(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const weapon_r8 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx_r0.isSelected(weapon_r8), ctx_r0.isPreview(weapon_r8)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", weapon_r8.name, " ");
} }
function WeaponsComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 20);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", (ctx_r1.preview == null ? null : ctx_r1.preview.imageSRC) || (ctx_r1.selected == null ? null : ctx_r1.selected.imageSRC), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WeaponsComponent_img_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/HUD/Inventory/", ctx_r2.preview_status == null ? null : ctx_r2.preview_status.damage_image, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WeaponsComponent_img_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/HUD/Inventory/", ctx_r3.preview_status == null ? null : ctx_r3.preview_status.fire_rate_image, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WeaponsComponent_img_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/HUD/Inventory/", ctx_r4.preview_status == null ? null : ctx_r4.preview_status.range_image, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WeaponsComponent_img_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/HUD/Inventory/", ctx_r5.preview_status == null ? null : ctx_r5.preview_status.accuracy_image, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WeaponsComponent_img_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/HUD/Inventory/", ctx_r6.preview_status == null ? null : ctx_r6.preview_status.weight_image, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WeaponsComponent_img_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/HUD/Inventory/", ctx_r7.preview_status == null ? null : ctx_r7.preview_status.value_image, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c1 = function () { return []; };
class WeaponsComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.preview_status = {
            damage_diff: 0,
            damage_image: "icon_20",
            fire_rate_diff: 0,
            fire_rate_image: "icon_22",
            range_diff: 0,
            range_image: "icon_20",
            accuracy_diff: 0,
            accuracy_image: "icon_22",
            weight_diff: 0,
            weight_image: "icon_20",
            value_diff: 0,
            value_image: "icon_20",
        };
    }
    ngOnInit() {
        this.weapons = this.dataService.player.inventory.weapon;
        this.selected = this.dataService.player.equiped.hand;
        console.log(this.dataService.getPlayerInventory("weapon"));
    }
    isSelected(arma) {
        if (this.selected) {
            const keys = Object.keys(this.selected);
            const filter = keys.filter((key) => this.selected[key] == arma[key]);
            const length = filter.length == keys.length;
            return length;
        }
        return false;
    }
    isPreview(arma) {
        if (this.preview) {
            const keys = Object.keys(this.preview);
            const filter = keys.filter((key) => this.preview[key] == arma[key]);
            const length = filter.length == keys.length;
            return length && !this.isSelected(arma);
        }
        return false;
    }
    getDiff(field) {
        const delta = Math.abs(this.selected[field] - this.preview[field]);
        return delta / delta || 0;
    }
    getImage(field, invert = false) {
        if (!invert) {
            return this.selected[field] - this.preview[field] > 0
                ? "icon_22"
                : "icon_20";
        }
        return this.selected[field] - this.preview[field] > 0
            ? "icon_20"
            : "icon_22";
    }
    setPreview(arma) {
        this.preview = arma;
        if (this.preview && this.selected) {
            this.preview_status = {
                damage_diff: this.getDiff("damage"),
                damage_image: this.getImage("damage"),
                fire_rate_diff: this.getDiff("fireRate"),
                fire_rate_image: this.getImage("fireRate"),
                range_diff: this.getDiff("range"),
                range_image: this.getImage("range"),
                accuracy_diff: this.getDiff("accuracy"),
                accuracy_image: this.getImage("accuracy"),
                weight_diff: this.getDiff("weight"),
                weight_image: this.getImage("weight", true),
                value_diff: this.getDiff("value"),
                value_image: this.getImage("value"),
            };
        }
    }
    select(arma) {
        this.selected = arma;
        this.dataService.loseAP(10);
        this.dataService.player.equiped.hand = arma;
    }
    clearPreview() {
        const hand = this.dataService.player.equiped.hand;
        this.selected = hand ? hand : null;
        this.preview = this.selected;
        this.preview_status = {
            damage_diff: 0,
            damage_image: "icon_20",
            fire_rate_diff: 0,
            fire_rate_image: "icon_22",
            range_diff: 0,
            range_image: "icon_20",
            accuracy_diff: 0,
            accuracy_image: "icon_22",
            weight_diff: 0,
            weight_image: "icon_20",
            value_diff: 0,
            value_image: "icon_20",
        };
    }
}
WeaponsComponent.ɵfac = function WeaponsComponent_Factory(t) { return new (t || WeaponsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
WeaponsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeaponsComponent, selectors: [["app-weapons"]], decls: 67, vars: 22, consts: [[1, "wrapper", "row"], [1, "list"], [3, "ngClass", "click", "mouseover", "mouseout", 4, "ngFor", "ngForOf"], [1, "detail"], [1, "image"], ["alt", "weapon image", "style", "width: 85%; display: block; margin: auto;", 3, "src", 4, "ngIf"], [1, "row"], [1, "data", 2, "width", "80%"], [1, "row", 2, "margin-bottom", "4px"], [1, "line", "attention", 2, "width", "70%", "margin", "0px -10px"], [1, "line", "attention", 2, "width", "38%", "margin", "0px -10px", "display", "flex", "flex-direction", "row", "justify-content", "space-between", "align-items", "center"], ["src", "assets/images/HUD/Menu/icon_26.svg", "alt", "damage", "width", "21"], [1, "row", "line", "attention"], ["src", "assets/images/HUD/Inventory/icon_62.svg", "width", "21", "alt", "ammo"], [1, "row", "line"], [2, "width", "20%", "display", "flex", "flex-direction", "column", "justify-content", "space-between", "margin-top", "6px"], [2, "height", "30px"], ["alt", "damage compare status", "width", "13", "style", "margin-left: 5px;", 3, "src", 4, "ngFor", "ngForOf"], ["menu", "weapons"], [3, "ngClass", "click", "mouseover", "mouseout"], ["alt", "weapon image", 2, "width", "85%", "display", "block", "margin", "auto", 3, "src"], ["alt", "damage compare status", "width", "13", 2, "margin-left", "5px", 3, "src"]], template: function WeaponsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WeaponsComponent_li_3_Template, 2, 5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WeaponsComponent_img_6_Template, 1, 1, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Damage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Fire Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Accuracy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, WeaponsComponent_img_49_Template, 1, 1, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, WeaponsComponent_img_53_Template, 1, 1, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, WeaponsComponent_img_56_Template, 1, 1, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, WeaponsComponent_img_59_Template, 1, 1, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, WeaponsComponent_img_62_Template, 1, 1, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, WeaponsComponent_img_65_Template, 1, 1, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "app-footer-inv", 18);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.weapons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected || ctx.preview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.preview == null ? null : ctx.preview.damage) || (ctx.selected == null ? null : ctx.selected.damage), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.preview == null ? null : ctx.preview.ammunition == null ? null : ctx.preview.ammunition.type, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.preview == null ? null : ctx.preview.ammunition == null ? null : ctx.preview.ammunition.quantity) || "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.preview == null ? null : ctx.preview.fireRate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.preview == null ? null : ctx.preview.range);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.preview == null ? null : ctx.preview.accuracy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.preview == null ? null : ctx.preview.weight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.preview == null ? null : ctx.preview.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1).constructor(ctx.preview_status == null ? null : ctx.preview_status.damage_diff));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1).constructor(ctx.preview_status == null ? null : ctx.preview_status.fire_rate_diff));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1).constructor(ctx.preview_status == null ? null : ctx.preview_status.range_diff));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c1).constructor(ctx.preview_status == null ? null : ctx.preview_status.accuracy_diff));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1).constructor(ctx.preview_status == null ? null : ctx.preview_status.weight_diff));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c1).constructor(ctx.preview_status == null ? null : ctx.preview_status.value_diff));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_component_footer_inv_inv_component__WEBPACK_IMPORTED_MODULE_3__["FooterInvComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  height: 100%;\n  color: #0e0;\n  font-family: \"Monofonto\";\n}\n[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  height: 70vh;\n}\n[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  width: 50vw;\n}\n[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%] {\n  width: 50vh;\n}\n[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  height: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: space-between;\n  padding: 2px 10px;\n  margin: 2px 0;\n  box-sizing: border-box;\n  height: 30px;\n  line-height: 25px;\n}\n[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .row.line[_ngcontent-%COMP%], [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  background-color: #040;\n}\n[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .row.line.attention[_ngcontent-%COMP%], [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .line.attention[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30px;\n  line-height: 20px;\n  padding: 2px 10px;\n  box-sizing: border-box;\n  background-color: #060;\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\u25A0\";\n  font-weight: bold;\n  display: inline-block;\n  margin-left: 2px;\n  color: var(--background-color);\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n  background-color: var(--text-color);\n  color: var(--background-color);\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]::before {\n  color: var(--background-color);\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li.preview[_ngcontent-%COMP%] {\n  background-color: var(--text-color);\n  color: var(--background-color);\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li.preview[_ngcontent-%COMP%]::before {\n  color: var(--text-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52L3dlYXBvbnMvd2VhcG9ucy5jb21wb25lbnQuc2FzcyIsIi9ob21lL21hdGhldXMvRG9jdW1lbnRzL1Byb2dyYW1hw6fDo28vUHJvamV0b3MvUGlwYm95LWFuZ3VsYXIvcGlwYm95LWFuZ3VsYXIvc3JjL2FwcC9wYWdlcy9pbnYvd2VhcG9ucy93ZWFwb25zLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7QURFRjtBQ0FFO0VBQ0UsWUFBQTtBREVKO0FDQUk7RUFDRSxXQUFBO0FERU47QUNBSTtFQUNFLFdBQUE7QURFTjtBQ0RNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FER1I7QUNBUTtFQUNFLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FERVY7QUNBVTtFQUNFLHNCQUFBO0FERVo7QUNBWTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QURFZDtBQ0FFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FERUo7QUNDTTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBRENSO0FDQ007RUFDRSxtQ0FBQTtFQUNBLDhCQUFBO0FEQ1I7QUNDUTtFQUNFLDhCQUFBO0FEQ1Y7QUNDTTtFQUNFLG1DQUFBO0VBQ0EsOEJBQUE7QURDUjtBQ0NRO0VBQ0Usd0JBQUE7QURDViIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludi93ZWFwb25zL3dlYXBvbnMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICMwZTA7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbm9mb250b1wiO1xufVxuOmhvc3QgLndyYXBwZXIge1xuICBoZWlnaHQ6IDcwdmg7XG59XG46aG9zdCAud3JhcHBlciAubGlzdCB7XG4gIHdpZHRoOiA1MHZ3O1xufVxuOmhvc3QgLndyYXBwZXIgLmRldGFpbCB7XG4gIHdpZHRoOiA1MHZoO1xufVxuOmhvc3QgLndyYXBwZXIgLmRldGFpbCAuaW1hZ2Uge1xuICBoZWlnaHQ6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46aG9zdCAud3JhcHBlciAuZGV0YWlsIC5kYXRhIC5yb3cge1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAycHggMTBweDtcbiAgbWFyZ2luOiAycHggMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cbjpob3N0IC53cmFwcGVyIC5kZXRhaWwgLmRhdGEgLnJvdy5saW5lLCA6aG9zdCAud3JhcHBlciAuZGV0YWlsIC5kYXRhIC5yb3cgLmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwO1xufVxuOmhvc3QgLndyYXBwZXIgLmRldGFpbCAuZGF0YSAucm93LmxpbmUuYXR0ZW50aW9uLCA6aG9zdCAud3JhcHBlciAuZGV0YWlsIC5kYXRhIC5yb3cgLmxpbmUuYXR0ZW50aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYwO1xufVxuOmhvc3QgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuOmhvc3QgdWwgbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4pagXCI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cbjpob3N0IHVsIGxpLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cbjpob3N0IHVsIGxpLnNlbGVjdGVkOjpiZWZvcmUge1xuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG59XG46aG9zdCB1bCBsaS5wcmV2aWV3IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cbjpob3N0IHVsIGxpLnByZXZpZXc6OmJlZm9yZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn0iLCI6aG9zdFxuICBoZWlnaHQ6IDEwMCVcbiAgY29sb3I6ICMwZTBcbiAgZm9udC1mYW1pbHk6ICdNb25vZm9udG8nXG5cbiAgLndyYXBwZXJcbiAgICBoZWlnaHQ6IDcwdmhcblxuICAgIC5saXN0XG4gICAgICB3aWR0aDogNTB2d1xuXG4gICAgLmRldGFpbFxuICAgICAgd2lkdGg6IDUwdmhcbiAgICAgIC5pbWFnZVxuICAgICAgICBoZWlnaHQ6IDUwJVxuICAgICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcblxuICAgICAgLmRhdGFcbiAgICAgICAgLnJvd1xuICAgICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG4gICAgICAgICAgcGFkZGluZzogMnB4IDEwcHhcbiAgICAgICAgICBtYXJnaW46IDJweCAwXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveFxuICAgICAgICAgIGhlaWdodDogMzBweFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4XG5cbiAgICAgICAgICAmLmxpbmUsIC5saW5lXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwXG5cbiAgICAgICAgICAgICYuYXR0ZW50aW9uXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgICAgICAgIGhlaWdodDogMzBweFxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweFxuICAgICAgICAgICAgICBwYWRkaW5nOiAycHggMTBweFxuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjBcblxuICB1bFxuICAgIGxpc3Qtc3R5bGU6IG5vbmVcbiAgICBwYWRkaW5nOiAwXG5cbiAgICBsaVxuICAgICAgJjo6YmVmb3JlXG4gICAgICAgIGNvbnRlbnQ6IFwiXFwyNUEwXCJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycHhcbiAgICAgICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpXG5cbiAgICAgICYuc2VsZWN0ZWRcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcilcbiAgICAgICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpXG5cbiAgICAgICAgJjo6YmVmb3JlXG4gICAgICAgICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpXG5cbiAgICAgICYucHJldmlld1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKVxuICAgICAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcilcblxuICAgICAgICAmOjpiZWZvcmVcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcilcblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeaponsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-weapons",
                templateUrl: "./weapons.component.html",
                styleUrls: ["./weapons.component.sass"],
            }]
    }], function () { return [{ type: src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/map/map.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/map/map.component.ts ***!
  \********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_model_marker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/model/marker */ "./src/app/shared/model/marker.ts");
/* harmony import */ var src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/data.service */ "./src/app/shared/data.service.ts");
/* harmony import */ var _shared_component_footer_map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/component/footer/map/map.component */ "./src/app/shared/component/footer/map/map.component.ts");





const _c0 = ["canvas"];
const _c1 = ["destino"];
class MapComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.ITEMS = {};
        this.isDown = true;
    }
    onScroll(event) {
        this.clearCanvas(this.ctx_destino);
        this.calculeMidPoint(this.dataService.getPlayerPosition(), this.dataService.getPlayerDestiny());
    }
    ngOnInit() {
        this.canvas.nativeElement.style.background = `url("assets/images/map/background_green.png") no-repeat center`;
        this.ctx = this.canvas.nativeElement.getContext("2d");
        this.ctx_destino = this.canvas_destino.nativeElement.getContext("2d");
        this.clearCanvas();
        this.drawPlayerLocations();
        this.drawPlayerPosition();
        this.drawPlayerDestiny();
        this.calculeMidPoint(this.dataService.getPlayerPosition(), this.dataService.getPlayerDestiny());
    }
    clearCanvas(ctx = this.ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
    drawPlayerLocations() {
        this.dataService.getPlayerLocations().forEach((marker) => {
            this.drawElement(marker);
        });
    }
    drawPlayerPosition() {
        this.drawElement(this.dataService.getPlayerPosition());
    }
    drawPlayerDestiny() {
        this.drawElement(this.dataService.getPlayerDestiny());
    }
    drawElement(marker, ctx = this.ctx) {
        const img = new Image();
        img.onload = () => {
            return this.drawImageActualSize(img, marker, ctx);
        };
        img.src = marker.getSrc();
    }
    drawImageActualSize(img, marker, ctx) {
        const item = marker.width
            ? ctx.drawImage(img, marker.x - marker.width / 2, marker.y - marker.height / 2, marker.width, marker.height)
            : ctx.drawImage(img, marker.x - img.width / 6 / 2, marker.y - img.height / 6 / 2, img.width / 6, img.height / 6);
        this.ITEMS[marker.name] = item;
    }
    calculeMidPoint(a, b) {
        const position = this.calculeFakeMarker();
        const destino = this.dataService.getPlayerDestiny();
        const fake_marker = new src_app_shared_model_marker__WEBPACK_IMPORTED_MODULE_1__["Marker"]("destiny", position.x, position.y, {
            width: 12,
            height: 30,
        });
        this.drawElement(fake_marker, this.ctx_destino);
    }
    calculeFakeMarker() {
        const element = this.canvas_destino.nativeElement;
        const parent = element.parentElement;
        const r = parent.scrollLeft;
        const l = parent.scrollLeft + parent.clientWidth;
        const t = parent.scrollTop;
        const b = parent.scrollTop + parent.clientHeight;
        const player = this.dataService.getPlayerPosition();
        const destino = this.dataService.getPlayerDestiny();
        // const cateto_adjacente = left;
        // const angulo_a = Math.atan2(destino.x - player.x, destino.y - player.y);
        // const angulo_b = 90 * (Math.PI / 180) - angulo_a;
        // const cateto_oposto = cateto_adjacente * Math.tan(angulo_b);
        const position = {
            x: l < destino.x ? l - 20 : destino.x < r ? r + 20 : destino.x,
            y: destino.y < t ? t + 20 : b < destino.y ? b - 20 : destino.y - 0.1,
        };
        return position;
    }
    onMouseUp(event) {
        this.isDown = false;
    }
    onMouseDown(event) {
        this.isDown = true;
        this.offset = [
            this.canvas.nativeElement.offsetLeft - event.clientX,
            this.canvas.nativeElement.offsetTop - event.clientY,
        ];
    }
    onMouseMove(event) {
        if (this.isDown && this.offset) {
            const canvasElement = this.canvas.nativeElement;
            const destinoElement = this.canvas_destino.nativeElement;
            const parentElement = this.canvas.nativeElement.parentElement;
            const mousePosition = {
                x: event.clientX,
                y: event.clientY,
            };
            const position = {
                x: mousePosition.x + this.offset[0],
                y: mousePosition.y + this.offset[1],
            };
            parentElement.scrollLeft += position.x / 10;
            parentElement.scrollTop += position.y / 10;
        }
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], viewQuery: function MapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas_destino = _t.first);
    } }, decls: 6, vars: 0, consts: [["id", "scrollbar-custom", 1, "map-wrapper", "scrollbar", 3, "scroll"], ["id", "destino", "width", "2048", "height", "2048", 2, "position", "absolute"], ["destino", ""], ["width", "2048", "height", "2048", 3, "mouseup", "mousedown", "mousemove"], ["canvas", ""]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function MapComponent_Template_div_scroll_0_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "canvas", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseup", function MapComponent_Template_canvas_mouseup_3_listener($event) { return ctx.onMouseUp($event); })("mousedown", function MapComponent_Template_canvas_mousedown_3_listener($event) { return ctx.onMouseDown($event); })("mousemove", function MapComponent_Template_canvas_mousemove_3_listener($event) { return ctx.onMouseMove($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer-map");
    } }, directives: [_shared_component_footer_map_map_component__WEBPACK_IMPORTED_MODULE_3__["FooterMapComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .map-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 85%;\n  overflow: scroll;\n  position: relative;\n}\n[_nghost-%COMP%]   .map-wrapper[_ngcontent-%COMP%]   #destino[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhldXMvRG9jdW1lbnRzL1Byb2dyYW1hw6fDo28vUHJvamV0b3MvUGlwYm95LWFuZ3VsYXIvcGlwYm95LWFuZ3VsYXIvc3JjL2FwcC9wYWdlcy9tYXAvbWFwLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9wYWdlcy9tYXAvbWFwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENJO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFwL21hcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0XG4gIGhlaWdodDogMTAwJVxuXG4gIC5tYXAtd3JhcHBlclxuICAgIHdpZHRoOiAxMDAlXG4gICAgaGVpZ2h0OiA4NSVcbiAgICBvdmVyZmxvdzogc2Nyb2xsXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG5cbiAgICAjZGVzdGlub1xuICAgICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZVxuXG4iLCI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5tYXAtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDg1JTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgLm1hcC13cmFwcGVyICNkZXN0aW5vIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-map",
                templateUrl: "./map.component.html",
                styleUrls: ["./map.component.sass"],
            }]
    }], function () { return [{ type: src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, { canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["canvas", { static: true }]
        }], canvas_destino: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["destino", { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/radio/radio.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/radio/radio.component.ts ***!
  \************************************************/
/*! exports provided: RadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioComponent", function() { return RadioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_radio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/radio.service */ "./src/app/shared/radio.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_component_footer_radio_radio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/component/footer/radio/radio.component */ "./src/app/shared/component/footer/radio/radio.component.ts");





const _c0 = function (a0) { return { "selected": a0 }; };
function RadioComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RadioComponent_li_3_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const radio_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.setRadio(radio_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const radio_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.isRadioSelected(radio_r1.value)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", radio_r1.value.name, " ");
} }
class RadioComponent {
    constructor(radioService) {
        this.radioService = radioService;
    }
    ngOnInit() {
        this.radios = this.radioService.getRadioList();
        this.radio = this.radioService.radio;
        this.radioService.radio_change.subscribe((radio) => {
            this.radio = radio;
        });
    }
    setRadio(radio) {
        this.radioService.setRadio(radio.value);
    }
    isRadioSelected(radio) {
        return this.radio.name == radio.name;
    }
}
RadioComponent.ɵfac = function RadioComponent_Factory(t) { return new (t || RadioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_radio_service__WEBPACK_IMPORTED_MODULE_1__["RadioService"])); };
RadioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RadioComponent, selectors: [["app-radio"]], decls: 6, vars: 3, consts: [[1, "wrapper"], [1, "list"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"]], template: function RadioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RadioComponent_li_3_Template, 2, 4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer-radio");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx.radios));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _shared_component_footer_radio_radio_component__WEBPACK_IMPORTED_MODULE_3__["FooterRadioComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\u25A0\";\n  font-weight: bold;\n  display: inline-block;\n  margin-left: 2px;\n  color: var(--background-color);\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n  background-color: var(--text-color);\n  color: var(--background-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmFkaW8vcmFkaW8uY29tcG9uZW50LnNhc3MiLCIvaG9tZS9tYXRoZXVzL0RvY3VtZW50cy9Qcm9ncmFtYcOnw6NvL1Byb2pldG9zL1BpcGJveS1hbmd1bGFyL3BpcGJveS1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvcmFkaW8vcmFkaW8uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsWUFBQTtBREVGO0FDQUU7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QURFSjtBQ0NNO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FEQ1I7QUNDTTtFQUNFLG1DQUFBO0VBQ0EsOEJBQUE7QURDUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JhZGlvL3JhZGlvLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG46aG9zdCB1bCBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCLilqBcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xufVxuOmhvc3QgdWwgbGkuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xufSIsIjpob3N0XG4gIGhlaWdodDogMTAwJVxuXG4gIHVsXG4gICAgbGlzdC1zdHlsZTogbm9uZVxuICAgIHBhZGRpbmc6IDBcblxuICAgIGxpXG4gICAgICAmOjpiZWZvcmVcbiAgICAgICAgY29udGVudDogXCJcXDI1QTBcIlxuICAgICAgICBmb250LXdlaWdodDogYm9sZFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJweFxuICAgICAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcilcblxuICAgICAgJi5zZWxlY3RlZFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKVxuICAgICAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcilcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-radio",
                templateUrl: "./radio.component.html",
                styleUrls: ["./radio.component.sass"],
            }]
    }], function () { return [{ type: src_app_shared_radio_service__WEBPACK_IMPORTED_MODULE_1__["RadioService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/stat/perks/perks.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/stat/perks/perks.component.ts ***!
  \*****************************************************/
/*! exports provided: PerksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerksComponent", function() { return PerksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_component_footer_status_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/component/footer/status/status.component */ "./src/app/shared/component/footer/status/status.component.ts");




const _c0 = function (a0) { return { "selected": a0 }; };
function PerksComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PerksComponent_li_2_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const key_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.setPerk(key_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, key_r1 == ctx_r0.selected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getValue(key_r1));
} }
class PerksComponent {
    constructor() { }
    ngOnInit() { }
    setPerk(perk) {
        const perfil = this.PERKS[perk];
        this.selected = perk;
        this.img = perfil.image;
        this.text = perfil.text;
    }
    getValue(key) {
        return 0;
    }
}
PerksComponent.ɵfac = function PerksComponent_Factory(t) { return new (t || PerksComponent)(); };
PerksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PerksComponent, selectors: [["app-perks"]], decls: 10, vars: 3, consts: [[1, "perk-list"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "perk-data"], [1, "image"], ["alt", "perk image", 3, "src"], [1, "text"], [3, "ngClass", "click"], [2, "display", "flex"], ["src", "assets/images/HUD/Menu/icon_9.svg", "width", "15", "alt", "", 1, "selector"], ["src", "assets/images/HUD/Menu/icon_10.svg", "width", "15", "alt", "", 1, "selector"]], template: function PerksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PerksComponent_li_2_Template, 8, 5, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-footer-status");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.PERKS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_component_footer_status_status_component__WEBPACK_IMPORTED_MODULE_2__["FooterStatusComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n[_nghost-%COMP%]   .perk-list[_ngcontent-%COMP%] {\n  width: 50vw;\n}\n[_nghost-%COMP%]   .perk-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  width: 100%;\n}\n[_nghost-%COMP%]   .perk-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px 5px;\n  text-transform: capitalize;\n}\n[_nghost-%COMP%]   .perk-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n  background-color: var(--text-color);\n  color: var(--background-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhldXMvRG9jdW1lbnRzL1Byb2dyYW1hw6fDo28vUHJvamV0b3MvUGlwYm95LWFuZ3VsYXIvcGlwYm95LWFuZ3VsYXIvc3JjL2FwcC9wYWdlcy9zdGF0L3BlcmtzL3BlcmtzLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9wYWdlcy9zdGF0L3BlcmtzL3BlcmtzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7QUNDSjtBREFJO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0VOO0FEQU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSwwQkFBQTtBQ0NSO0FEQ1E7RUFDRSxtQ0FBQTtFQUNBLDhCQUFBO0FDQ1YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdGF0L3BlcmtzL3BlcmtzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3RcbiAgZGlzcGxheTogZmxleFxuICBmbGV4LWRpcmVjdGlvbjogcm93XG5cbiAgLnBlcmstbGlzdFxuICAgIHdpZHRoOiA1MHZ3XG4gICAgdWxcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmVcbiAgICAgIHBhZGRpbmc6IDBcbiAgICAgIHdpZHRoOiAxMDAlXG5cbiAgICAgIGxpXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvd1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgICAgICBwYWRkaW5nOiAycHggNXB4XG5cbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemVcblxuICAgICAgICAmLnNlbGVjdGVkXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcilcbiAgICAgICAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcilcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbjpob3N0IC5wZXJrLWxpc3Qge1xuICB3aWR0aDogNTB2dztcbn1cbjpob3N0IC5wZXJrLWxpc3QgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IC5wZXJrLWxpc3QgdWwgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuOmhvc3QgLnBlcmstbGlzdCB1bCBsaS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-perks",
                templateUrl: "./perks.component.html",
                styleUrls: ["./perks.component.sass"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/stat/special/special.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/stat/special/special.component.ts ***!
  \*********************************************************/
/*! exports provided: SpecialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialComponent", function() { return SpecialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/data.service */ "./src/app/shared/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_component_footer_status_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/component/footer/status/status.component */ "./src/app/shared/component/footer/status/status.component.ts");





function SpecialComponent_li_2_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
} }
function SpecialComponent_li_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 13);
} }
function SpecialComponent_li_2_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
} }
function SpecialComponent_li_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 13);
} }
const _c0 = function (a0) { return { "selected": a0 }; };
function SpecialComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpecialComponent_li_2_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const key_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.setSpecial(key_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SpecialComponent_li_2_img_4_Template, 1, 0, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SpecialComponent_li_2_div_5_Template, 1, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SpecialComponent_li_2_img_8_Template, 1, 0, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SpecialComponent_li_2_div_9_Template, 1, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, key_r1 == ctx_r0.selected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", key_r1 == ctx_r0.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", key_r1 != ctx_r0.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getValue(key_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", key_r1 == ctx_r0.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", key_r1 != ctx_r0.selected);
} }
class SpecialComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.SPECIAL = {
            strength: {
                image: "assets/images/HUD/Special/strength.gif",
                text: "Força é uma medida de sua força física bruta. Isso afeta o quanto você pode carregar e determina a eficácia de todos os ataques corpo a corpo.",
            },
            perception: {
                image: "assets/images/HUD/Special/perception2.gif",
                text: 'A percepção é a sua consciência ambiental e "sexto sentido", e afeta a precisão da arma em VATS',
            },
            endurance: {
                image: "assets/images/HUD/Special/endurance.gif",
                text: "A resistência é a medida da aptidão física geral. Afeta sua saúde total e o dreno de pontos de ação da corrida",
            },
            charisma: {
                image: "assets/images/HUD/Special/charisma2.gif",
                text: "Carisma é sua habilidade de encantar e convencer os outros. Isso afeta seu sucesso em persuadir outras pessoas a dialogar e a estabelecer preços quando você faz uma troca.",
            },
            inteligence: {
                image: "assets/images/HUD/Special/inteligence.gif",
                text: "Inteligência é a medida de sua acuidade mental geral e afeta o número de pontos de experiência ganhos.",
            },
            agility: {
                image: "assets/images/HUD/Special/agility.gif",
                text: "Agilidade é uma medida de sua sutileza e reflexos gerais. Isso afeta o número de pontos de ação em VATS e sua capacidade de esgueirar-se.",
            },
            luck: {
                image: "assets/images/HUD/Special/luck2.gif",
                text: "A sorte é uma medida de sua boa sorte geral e afeta as taxas de recarga de acertos críticos.",
            },
        };
        this.LABELS = Object.keys(this.SPECIAL);
    }
    ngOnInit() {
        console.log(this.img, this.text);
        this.setSpecial("strength");
    }
    setSpecial(special) {
        const perfil = this.SPECIAL[special];
        this.selected = special;
        this.img = perfil.image;
        this.text = perfil.text;
    }
    getValue(key) {
        return this.dataService.player.special[key];
    }
}
SpecialComponent.ɵfac = function SpecialComponent_Factory(t) { return new (t || SpecialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
SpecialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpecialComponent, selectors: [["app-special"]], decls: 10, vars: 3, consts: [[1, "special-list"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "special-data"], [1, "image"], ["alt", "special image", 2, "width", "25vw", "display", "block", "margin", "auto", 3, "src"], [1, "text"], [2, "width", "35vw"], [3, "ngClass", "click"], [2, "display", "flex"], ["class", "selector", "src", "assets/images/HUD/Menu/icon_9.svg", "width", "15", "alt", "", 4, "ngIf"], ["style", "width: 15px;", 4, "ngIf"], ["class", "selector", "src", "assets/images/HUD/Menu/icon_10.svg", "width", "15", "alt", "", 4, "ngIf"], ["src", "assets/images/HUD/Menu/icon_9.svg", "width", "15", "alt", "", 1, "selector"], [2, "width", "15px"], ["src", "assets/images/HUD/Menu/icon_10.svg", "width", "15", "alt", "", 1, "selector"]], template: function SpecialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SpecialComponent_li_2_Template, 10, 9, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-footer-status");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.LABELS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _shared_component_footer_status_status_component__WEBPACK_IMPORTED_MODULE_3__["FooterStatusComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  font-family: \"Monofonto\";\n}\n[_nghost-%COMP%]   .special-list[_ngcontent-%COMP%] {\n  width: 50vw;\n}\n[_nghost-%COMP%]   .special-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  width: 100%;\n}\n[_nghost-%COMP%]   .special-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px 5px;\n  text-transform: capitalize;\n}\n[_nghost-%COMP%]   .special-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n  background-color: var(--text-color);\n  color: var(--background-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhldXMvRG9jdW1lbnRzL1Byb2dyYW1hw6fDo28vUHJvamV0b3MvUGlwYm95LWFuZ3VsYXIvcGlwYm95LWFuZ3VsYXIvc3JjL2FwcC9wYWdlcy9zdGF0L3NwZWNpYWwvc3BlY2lhbC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvcGFnZXMvc3RhdC9zcGVjaWFsL3NwZWNpYWwuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0FDQ0o7QURBSTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNFTjtBREFNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsMEJBQUE7QUNDUjtBRENRO0VBQ0UsbUNBQUE7RUFDQSw4QkFBQTtBQ0NWIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3RhdC9zcGVjaWFsL3NwZWNpYWwuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdFxuICBkaXNwbGF5OiBmbGV4XG4gIGZsZXgtZGlyZWN0aW9uOiByb3dcbiAgZm9udC1mYW1pbHk6ICdNb25vZm9udG8nXG5cbiAgLnNwZWNpYWwtbGlzdFxuICAgIHdpZHRoOiA1MHZ3XG4gICAgdWxcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmVcbiAgICAgIHBhZGRpbmc6IDBcbiAgICAgIHdpZHRoOiAxMDAlXG5cbiAgICAgIGxpXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvd1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgICAgICBwYWRkaW5nOiAycHggNXB4XG5cbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemVcblxuICAgICAgICAmLnNlbGVjdGVkXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcilcbiAgICAgICAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcilcblxuXG5cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZm9udC1mYW1pbHk6IFwiTW9ub2ZvbnRvXCI7XG59XG46aG9zdCAuc3BlY2lhbC1saXN0IHtcbiAgd2lkdGg6IDUwdnc7XG59XG46aG9zdCAuc3BlY2lhbC1saXN0IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCAuc3BlY2lhbC1saXN0IHVsIGxpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycHggNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbjpob3N0IC5zcGVjaWFsLWxpc3QgdWwgbGkuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpecialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-special",
                templateUrl: "./special.component.html",
                styleUrls: ["./special.component.sass"],
            }]
    }], function () { return [{ type: src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/stat/stat-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/stat/stat-routing.module.ts ***!
  \***************************************************/
/*! exports provided: StatRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatRoutingModule", function() { return StatRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _stat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stat.component */ "./src/app/pages/stat/stat.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status/status.component */ "./src/app/pages/stat/status/status.component.ts");
/* harmony import */ var _special_special_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./special/special.component */ "./src/app/pages/stat/special/special.component.ts");
/* harmony import */ var _perks_perks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perks/perks.component */ "./src/app/pages/stat/perks/perks.component.ts");








const routes = [
    {
        path: "stat",
        component: _stat_component__WEBPACK_IMPORTED_MODULE_2__["StatComponent"],
        children: [
            {
                path: "",
                pathMatch: "full",
                redirectTo: "status",
            },
            {
                path: "status",
                component: _status_status_component__WEBPACK_IMPORTED_MODULE_3__["StatusComponent"],
                outlet: "stat",
            },
            {
                path: "special",
                component: _special_special_component__WEBPACK_IMPORTED_MODULE_4__["SpecialComponent"],
                outlet: "stat",
            },
            {
                path: "perks",
                component: _perks_perks_component__WEBPACK_IMPORTED_MODULE_5__["PerksComponent"],
                outlet: "stat",
            },
        ],
    },
];
class StatRoutingModule {
}
StatRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StatRoutingModule });
StatRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StatRoutingModule_Factory(t) { return new (t || StatRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StatRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/stat/stat.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/stat/stat.component.ts ***!
  \**********************************************/
/*! exports provided: StatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatComponent", function() { return StatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/data.service */ "./src/app/shared/data.service.ts");




const _c0 = function () { return ["status"]; };
const _c1 = function (a0) { return { stat: a0 }; };
const _c2 = function (a0) { return { outlets: a0 }; };
const _c3 = function (a0) { return [a0]; };
const _c4 = function () { return ["special"]; };
const _c5 = function () { return ["perks"]; };
class StatComponent {
    constructor(route, router, dataService) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
    }
    ngOnInit() {
        this.router.navigateByUrl("/stat/(stat:status)");
    }
}
StatComponent.ɵfac = function StatComponent_Factory(t) { return new (t || StatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
StatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatComponent, selectors: [["app-stat"]], decls: 9, vars: 24, consts: [[1, "breadcrumbs"], ["routerLinkActive", "active", 3, "routerLink"], ["name", "stat"]], template: function StatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " STATUS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " SPECIAL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " PERKS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0)))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4)))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c5)))));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .breadcrumbs[_ngcontent-%COMP%] {\n  width: 30%;\n}\n[_nghost-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  list-style: none;\n  margin: 0;\n  padding: 0 5px;\n  font-family: \"Monofonto\";\n  color: var(--section-color);\n}\n[_nghost-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n[_nghost-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhldXMvRG9jdW1lbnRzL1Byb2dyYW1hw6fDo28vUHJvamV0b3MvUGlwYm95LWFuZ3VsYXIvcGlwYm95LWFuZ3VsYXIvc3JjL2FwcC9wYWdlcy9zdGF0L3N0YXQuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3BhZ2VzL3N0YXQvc3RhdC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjtBRENFO0VBQ0UsVUFBQTtBQ0NKO0FEQUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FDRU47QURBTTtFQUNFLGFBQUE7QUNFUjtBRERRO0VBQ0Usd0JBQUE7QUNHViIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXQvc3RhdC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0XG4gIGhlaWdodDogMTAwJVxuXG4gIC5icmVhZGNydW1ic1xuICAgIHdpZHRoOiAzMCVcbiAgICB1bFxuICAgICAgZGlzcGxheTogZmxleFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvd1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG4gICAgICBsaXN0LXN0eWxlOiBub25lXG4gICAgICBtYXJnaW46IDBcbiAgICAgIHBhZGRpbmc6IDAgNXB4XG4gICAgICBmb250LWZhbWlseTogJ01vbm9mb250bydcbiAgICAgIGNvbG9yOiB2YXIoLS1zZWN0aW9uLWNvbG9yKVxuXG4gICAgICBsaVxuICAgICAgICBtYXJnaW46IDAgNXB4XG4gICAgICAgICYuYWN0aXZlXG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpXG4iLCI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5icmVhZGNydW1icyB7XG4gIHdpZHRoOiAzMCU7XG59XG46aG9zdCAuYnJlYWRjcnVtYnMgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbm9mb250b1wiO1xuICBjb2xvcjogdmFyKC0tc2VjdGlvbi1jb2xvcik7XG59XG46aG9zdCAuYnJlYWRjcnVtYnMgdWwgbGkge1xuICBtYXJnaW46IDAgNXB4O1xufVxuOmhvc3QgLmJyZWFkY3J1bWJzIHVsIGxpLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-stat",
                templateUrl: "./stat.component.html",
                styleUrls: ["./stat.component.sass"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/stat/stat.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/stat/stat.module.ts ***!
  \*******************************************/
/*! exports provided: StatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatModule", function() { return StatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status/status.component */ "./src/app/pages/stat/status/status.component.ts");
/* harmony import */ var _special_special_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./special/special.component */ "./src/app/pages/stat/special/special.component.ts");
/* harmony import */ var _perks_perks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./perks/perks.component */ "./src/app/pages/stat/perks/perks.component.ts");
/* harmony import */ var _stat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stat.component */ "./src/app/pages/stat/stat.component.ts");
/* harmony import */ var _stat_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stat-routing.module */ "./src/app/pages/stat/stat-routing.module.ts");
/* harmony import */ var src_app_shared_component_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/footer/footer.module */ "./src/app/shared/component/footer/footer.module.ts");
/* harmony import */ var src_app_shared_component_vault_boy_vault_boy_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/vault-boy/vault_boy.module */ "./src/app/shared/component/vault-boy/vault_boy.module.ts");










class StatModule {
}
StatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StatModule });
StatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StatModule_Factory(t) { return new (t || StatModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_component_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"], src_app_shared_component_vault_boy_vault_boy_module__WEBPACK_IMPORTED_MODULE_8__["VaultBoyModule"], _stat_routing_module__WEBPACK_IMPORTED_MODULE_6__["StatRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StatModule, { declarations: [_status_status_component__WEBPACK_IMPORTED_MODULE_2__["StatusComponent"],
        _special_special_component__WEBPACK_IMPORTED_MODULE_3__["SpecialComponent"],
        _perks_perks_component__WEBPACK_IMPORTED_MODULE_4__["PerksComponent"],
        _stat_component__WEBPACK_IMPORTED_MODULE_5__["StatComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_component_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"], src_app_shared_component_vault_boy_vault_boy_module__WEBPACK_IMPORTED_MODULE_8__["VaultBoyModule"], _stat_routing_module__WEBPACK_IMPORTED_MODULE_6__["StatRoutingModule"]], exports: [_status_status_component__WEBPACK_IMPORTED_MODULE_2__["StatusComponent"], _special_special_component__WEBPACK_IMPORTED_MODULE_3__["SpecialComponent"], _perks_perks_component__WEBPACK_IMPORTED_MODULE_4__["PerksComponent"], _stat_component__WEBPACK_IMPORTED_MODULE_5__["StatComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _status_status_component__WEBPACK_IMPORTED_MODULE_2__["StatusComponent"],
                    _special_special_component__WEBPACK_IMPORTED_MODULE_3__["SpecialComponent"],
                    _perks_perks_component__WEBPACK_IMPORTED_MODULE_4__["PerksComponent"],
                    _stat_component__WEBPACK_IMPORTED_MODULE_5__["StatComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_component_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"], src_app_shared_component_vault_boy_vault_boy_module__WEBPACK_IMPORTED_MODULE_8__["VaultBoyModule"], _stat_routing_module__WEBPACK_IMPORTED_MODULE_6__["StatRoutingModule"]],
                exports: [_status_status_component__WEBPACK_IMPORTED_MODULE_2__["StatusComponent"], _special_special_component__WEBPACK_IMPORTED_MODULE_3__["SpecialComponent"], _perks_perks_component__WEBPACK_IMPORTED_MODULE_4__["PerksComponent"], _stat_component__WEBPACK_IMPORTED_MODULE_5__["StatComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/stat/status/status.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/stat/status/status.component.ts ***!
  \*******************************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/data.service */ "./src/app/shared/data.service.ts");
/* harmony import */ var _shared_component_vault_boy_vault_boy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/component/vault-boy/vault_boy.component */ "./src/app/shared/component/vault-boy/vault_boy.component.ts");
/* harmony import */ var _shared_component_footer_status_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/component/footer/status/status.component */ "./src/app/shared/component/footer/status/status.component.ts");






const _c0 = ["vaultboy"];
class StatusComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
    }
    ngOnInit() {
        this.player_status = this.dataService.player;
        this.subscriptions.add(this.dataService.player_change.subscribe((player) => {
            this.player_status = player;
            this.vaultboy.updateStatus();
        }));
    }
    ngOnChanges() {
        this.player_status = this.dataService.player;
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
StatusComponent.ɵfac = function StatusComponent_Factory(t) { return new (t || StatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
StatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatusComponent, selectors: [["app-status"]], viewQuery: function StatusComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.vaultboy = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 19, vars: 4, consts: [[1, "vault-boy-wrapper"], ["vaultboy", ""], [1, "info-bar"], [1, "weapon"], [1, "aim"], [1, "helmet"], [1, "shield"], [1, "voltage"], [1, "nuclear"]], template: function StatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-vaultboy", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-footer-status");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.player_status == null ? null : ctx.player_status.equiped == null ? null : ctx.player_status.equiped.hand == null ? null : ctx.player_status.equiped.hand.damage) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.player_status == null ? null : ctx.player_status.shield) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.player_status == null ? null : ctx.player_status.voltage) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.player_status == null ? null : ctx.player_status.nuclear) || 0);
    } }, directives: [_shared_component_vault_boy_vault_boy_component__WEBPACK_IMPORTED_MODULE_3__["VaultBoyComponent"], _shared_component_footer_status_status_component__WEBPACK_IMPORTED_MODULE_4__["FooterStatusComponent"]], styles: ["[_nghost-%COMP%]   .vault-boy-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .status-img[_ngcontent-%COMP%] {\n  filter: brightness(2) blur(0.9px);\n  height: 340px;\n  display: block;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhldXMvRG9jdW1lbnRzL1Byb2dyYW1hw6fDo28vUHJvamV0b3MvUGlwYm95LWFuZ3VsYXIvcGlwYm95LWFuZ3VsYXIvc3JjL2FwcC9wYWdlcy9zdGF0L3N0YXR1cy9zdGF0dXMuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3BhZ2VzL3N0YXQvc3RhdHVzL3N0YXR1cy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0FKO0FERUU7RUFDRSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3RhdC9zdGF0dXMvc3RhdHVzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3RcbiAgLnZhdWx0LWJveS13cmFwcGVyXG4gICAgZGlzcGxheTogZmxleFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG5cbiAgLnN0YXR1cy1pbWdcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMikgYmx1cigwLjlweClcbiAgICBoZWlnaHQ6IDM0MHB4XG4gICAgZGlzcGxheTogYmxvY2tcbiAgICBtYXJnaW46IGF1dG9cbiIsIjpob3N0IC52YXVsdC1ib3ktd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuOmhvc3QgLnN0YXR1cy1pbWcge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMikgYmx1cigwLjlweCk7XG4gIGhlaWdodDogMzQwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-status",
                templateUrl: "./status.component.html",
                styleUrls: ["./status.component.sass"],
            }]
    }], function () { return [{ type: src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, { vaultboy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["vaultboy"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/component/footer/footer.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/component/footer/footer.module.ts ***!
  \**********************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status/status.component */ "./src/app/shared/component/footer/status/status.component.ts");
/* harmony import */ var _radio_radio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio/radio.component */ "./src/app/shared/component/footer/radio/radio.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map/map.component */ "./src/app/shared/component/footer/map/map.component.ts");
/* harmony import */ var _inv_inv_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inv/inv.component */ "./src/app/shared/component/footer/inv/inv.component.ts");







class FooterModule {
}
FooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FooterModule });
FooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FooterModule_Factory(t) { return new (t || FooterModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [_status_status_component__WEBPACK_IMPORTED_MODULE_2__["FooterStatusComponent"],
        _radio_radio_component__WEBPACK_IMPORTED_MODULE_3__["FooterRadioComponent"],
        _map_map_component__WEBPACK_IMPORTED_MODULE_4__["FooterMapComponent"],
        _inv_inv_component__WEBPACK_IMPORTED_MODULE_5__["FooterInvComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_status_status_component__WEBPACK_IMPORTED_MODULE_2__["FooterStatusComponent"],
        _radio_radio_component__WEBPACK_IMPORTED_MODULE_3__["FooterRadioComponent"],
        _map_map_component__WEBPACK_IMPORTED_MODULE_4__["FooterMapComponent"],
        _inv_inv_component__WEBPACK_IMPORTED_MODULE_5__["FooterInvComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _status_status_component__WEBPACK_IMPORTED_MODULE_2__["FooterStatusComponent"],
                    _radio_radio_component__WEBPACK_IMPORTED_MODULE_3__["FooterRadioComponent"],
                    _map_map_component__WEBPACK_IMPORTED_MODULE_4__["FooterMapComponent"],
                    _inv_inv_component__WEBPACK_IMPORTED_MODULE_5__["FooterInvComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [
                    _status_status_component__WEBPACK_IMPORTED_MODULE_2__["FooterStatusComponent"],
                    _radio_radio_component__WEBPACK_IMPORTED_MODULE_3__["FooterRadioComponent"],
                    _map_map_component__WEBPACK_IMPORTED_MODULE_4__["FooterMapComponent"],
                    _inv_inv_component__WEBPACK_IMPORTED_MODULE_5__["FooterInvComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/component/footer/inv/inv.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/component/footer/inv/inv.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterInvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterInvComponent", function() { return FooterInvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data.service */ "./src/app/shared/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = ["complete"];
const _c1 = ["possibility"];
function FooterInvComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.player == null ? null : ctx_r0.player.equiped == null ? null : ctx_r0.player.equiped.hand == null ? null : ctx_r0.player.equiped.hand.damage, " ");
} }
function FooterInvComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterInvComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " HP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterInvComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
class FooterInvComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.weight = this.dataService.getPlayerWeight();
        this.total_weight = 300;
    }
    ngAfterViewInit() {
        this.setStatus(this.dataService.player);
        this.checkHeal(20);
        this.dataService.player_change.subscribe((player) => {
            this.setStatus(player);
            this.checkHeal(20);
        });
    }
    setStatus(player) {
        this.player = player;
        if (this.complete)
            this.complete.nativeElement.style.width = `${player.getLife()}%`;
    }
    checkHeal(value) {
        if (this.possibility)
            this.possibility.nativeElement.style.width = `${this.player.getLife() + value}%`;
    }
}
FooterInvComponent.ɵfac = function FooterInvComponent_Factory(t) { return new (t || FooterInvComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
FooterInvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterInvComponent, selectors: [["app-footer-inv"]], viewQuery: function FooterInvComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.complete = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.possibility = _t.first);
    } }, inputs: { menu: "menu" }, decls: 14, vars: 6, consts: [[2, "width", "20%"], ["src", "assets/images/HUD/Menu/icon_67.svg", "width", "24px", "alt", "Carry weight"], [2, "width", "19%"], ["src", "assets/images/HUD/Menu/icon_69.svg", "width", "24px", "alt", "Caps"], [2, "width", "60%"], [1, "ap-status"], [4, "ngIf"], ["style", "display: flex;", 4, "ngIf"], ["src", "assets/images/HUD/Menu/icon_52.svg", "width", "30px", "alt", "Gun"], ["src", "assets/images/HUD/Menu/icon_26.svg", "width", "15px", "alt", "Aim", 2, "margin", "3px 0px 3px 15px"], ["src", "assets/images/HUD/Menu/icon_54.svg", "width", "30px", "alt", "Gun"], ["src", "assets/images/HUD/Menu/icon_14.svg", "width", "12px", "alt", "Shield"], [2, "display", "flex"], [1, "level"], [1, "complete"], ["complete", ""], [1, "possibility"], ["possibility", ""]], template: function FooterInvComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FooterInvComponent_div_10_Template, 4, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FooterInvComponent_div_11_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FooterInvComponent_div_12_Template, 7, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FooterInvComponent_div_13_Template, 1, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.weight, "/", ctx.total_weight, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menu == "weapons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menu == "apparel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menu == "aid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menu == "misc" || ctx.menu == "junk");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n  width: 100%;\n  color: var(--text-color);\n  font-family: \"Monofonto\";\n  bottom: -15px;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  height: 30px;\n  background-color: var(--section-color);\n  padding: 0 10px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  line-height: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-end;\n  line-height: 25px;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .ap-status[_ngcontent-%COMP%] {\n  text-align: right;\n  width: 100%;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .ap-status[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%] {\n  border: 2px solid var(--text-color);\n  width: 70%;\n  margin: 3px;\n  position: relative;\n  left: 10%;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .ap-status[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]   .complete[_ngcontent-%COMP%] {\n  width: 0px;\n  background-color: var(--text-color);\n  position: absolute;\n  height: 100%;\n  z-index: 2;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .ap-status[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]   .possibility[_ngcontent-%COMP%] {\n  width: 0px;\n  background-color: #080;\n  position: absolute;\n  height: 100%;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhldXMvRG9jdW1lbnRzL1Byb2dyYW1hw6fDo28vUHJvamV0b3MvUGlwYm95LWFuZ3VsYXIvcGlwYm95LWFuZ3VsYXIvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L2Zvb3Rlci9pbnYvaW52LmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L2Zvb3Rlci9pbnYvaW52LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDRSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0NOO0FEQ0k7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUNDTjtBRENNO0VBQ0UsbUNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0NSO0FEQ1E7RUFDRSxVQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQ1Y7QURDUTtFQUNFLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNDViIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvZm9vdGVyL2ludi9pbnYuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdFxuICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgd2lkdGg6IDEwMCVcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpXG4gIGZvbnQtZmFtaWx5OiAnTW9ub2ZvbnRvJ1xuICBib3R0b206IC0xNXB4XG5cbiAgZm9vdGVyXG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3dcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cbiAgICBhbGlnbi1pdGVtczogY2VudGVyXG5cbiAgICBzZWN0aW9uXG4gICAgICBoZWlnaHQ6IDMwcHhcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY3Rpb24tY29sb3IpXG4gICAgICBwYWRkaW5nOiAwIDEwcHhcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcbiAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3dcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4XG4gICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnRcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZFxuICAgICAgbGluZS1oZWlnaHQ6IDI1cHhcblxuICAgIC5hcC1zdGF0dXNcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0XG4gICAgICB3aWR0aDogMTAwJVxuXG4gICAgICAubGV2ZWxcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGV4dC1jb2xvcilcbiAgICAgICAgd2lkdGg6IDcwJVxuICAgICAgICBtYXJnaW46IDNweFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICAgICAgbGVmdDogMTAlXG5cbiAgICAgICAgLmNvbXBsZXRlXG4gICAgICAgICAgd2lkdGg6IDBweFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlXG4gICAgICAgICAgei1pbmRleDogMlxuXG4gICAgICAgIC5wb3NzaWJpbGl0eVxuICAgICAgICAgIHdpZHRoOiAwcHhcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgwXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlXG4gICAgICAgICAgei1pbmRleDogMVxuIiwiOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbm9mb250b1wiO1xuICBib3R0b206IC0xNXB4O1xufVxuOmhvc3QgZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgZm9vdGVyIHNlY3Rpb24ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY3Rpb24tY29sb3IpO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG46aG9zdCBmb290ZXIgLmFwLXN0YXR1cyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IGZvb3RlciAuYXAtc3RhdHVzIC5sZXZlbCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IDNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxMCU7XG59XG46aG9zdCBmb290ZXIgLmFwLXN0YXR1cyAubGV2ZWwgLmNvbXBsZXRlIHtcbiAgd2lkdGg6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAyO1xufVxuOmhvc3QgZm9vdGVyIC5hcC1zdGF0dXMgLmxldmVsIC5wb3NzaWJpbGl0eSB7XG4gIHdpZHRoOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterInvComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-footer-inv",
                templateUrl: "./inv.component.html",
                styleUrls: ["./inv.component.sass"],
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, { menu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], complete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["complete"]
        }], possibility: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["possibility"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/component/footer/map/map.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/component/footer/map/map.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterMapComponent", function() { return FooterMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class FooterMapComponent {
    constructor() {
        this.DATE = new Date();
        this.DATE.setFullYear(this.DATE.getFullYear() + 267);
    }
    ngOnInit() { }
}
FooterMapComponent.ɵfac = function FooterMapComponent_Factory(t) { return new (t || FooterMapComponent)(); };
FooterMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterMapComponent, selectors: [["app-footer-map"]], decls: 11, vars: 8, consts: [[2, "width", "20%"], [2, "width", "19%"], [2, "width", "60%"], [1, "ap-status"]], template: function FooterMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Commonwealth ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, ctx.DATE, "MM.dd.yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, ctx.DATE, "hh:mm aaa"), " ");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n  width: 100%;\n  color: var(--text-color);\n  font-family: \"Monofonto\";\n  bottom: -15px;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  height: 20px;\n  background-color: var(--section-color);\n  padding: 0 10px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  line-height: 20px;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .ap-status[_ngcontent-%COMP%] {\n  text-align: right;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhldXMvRG9jdW1lbnRzL1Byb2dyYW1hw6fDo28vUHJvamV0b3MvUGlwYm95LWFuZ3VsYXIvcGlwYm95LWFuZ3VsYXIvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L2Zvb3Rlci9tYXAvbWFwLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L2Zvb3Rlci9tYXAvbWFwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNDSjtBRENJO0VBQ0UsWUFBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDTjtBRENJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L2Zvb3Rlci9tYXAvbWFwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3RcbiAgcG9zaXRpb246IHJlbGF0aXZlXG4gIHdpZHRoOiAxMDAlXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKVxuICBmb250LWZhbWlseTogJ01vbm9mb250bydcbiAgYm90dG9tOiAtMTVweFxuXG4gIGZvb3RlclxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG5cbiAgICBzZWN0aW9uXG4gICAgICBoZWlnaHQ6IDIwcHhcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY3Rpb24tY29sb3IpXG4gICAgICBwYWRkaW5nOiAwIDEwcHhcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcbiAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3dcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4XG5cbiAgICAuYXAtc3RhdHVzXG4gICAgICB0ZXh0LWFsaWduOiByaWdodFxuICAgICAgd2lkdGg6IDEwMCVcbiIsIjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBmb250LWZhbWlseTogXCJNb25vZm9udG9cIjtcbiAgYm90dG9tOiAtMTVweDtcbn1cbjpob3N0IGZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IGZvb3RlciBzZWN0aW9uIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWN0aW9uLWNvbG9yKTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbjpob3N0IGZvb3RlciAuYXAtc3RhdHVzIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-footer-map",
                templateUrl: "./map.component.html",
                styleUrls: ["./map.component.sass"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/component/footer/radio/radio.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/component/footer/radio/radio.component.ts ***!
  \******************************************************************/
/*! exports provided: FooterRadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterRadioComponent", function() { return FooterRadioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterRadioComponent {
    constructor() { }
    ngOnInit() { }
}
FooterRadioComponent.ɵfac = function FooterRadioComponent_Factory(t) { return new (t || FooterRadioComponent)(); };
FooterRadioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterRadioComponent, selectors: [["app-footer-radio"]], decls: 2, vars: 0, template: function FooterRadioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  width: 88.7%;\n  color: var(--text-color);\n  font-family: \"Monofonto\";\n  bottom: 35px;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20px;\n  background-color: var(--section-color);\n  padding: 0 10px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  line-height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhldXMvRG9jdW1lbnRzL1Byb2dyYW1hw6fDo28vUHJvamV0b3MvUGlwYm95LWFuZ3VsYXIvcGlwYm95LWFuZ3VsYXIvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L2Zvb3Rlci9yYWRpby9yYWRpby5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9mb290ZXIvcmFkaW8vcmFkaW8uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0NKO0FEQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvZm9vdGVyL3JhZGlvL3JhZGlvLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3RcbiAgcG9zaXRpb246IGFic29sdXRlXG4gIHdpZHRoOiA4OC43JVxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcilcbiAgZm9udC1mYW1pbHk6ICdNb25vZm9udG8nXG4gIGJvdHRvbTogMzVweFxuXG4gIGZvb3RlclxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG5cbiAgICBzZWN0aW9uXG4gICAgICB3aWR0aDogMTAwJVxuICAgICAgaGVpZ2h0OiAyMHB4XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWN0aW9uLWNvbG9yKVxuICAgICAgcGFkZGluZzogMCAxMHB4XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94XG4gICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93XG4gICAgICBsaW5lLWhlaWdodDogMjBweFxuIiwiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA4OC43JTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBmb250LWZhbWlseTogXCJNb25vZm9udG9cIjtcbiAgYm90dG9tOiAzNXB4O1xufVxuOmhvc3QgZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuOmhvc3QgZm9vdGVyIHNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWN0aW9uLWNvbG9yKTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterRadioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-footer-radio",
                templateUrl: "./radio.component.html",
                styleUrls: ["./radio.component.sass"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/component/footer/status/status.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/component/footer/status/status.component.ts ***!
  \********************************************************************/
/*! exports provided: FooterStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterStatusComponent", function() { return FooterStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data.service */ "./src/app/shared/data.service.ts");



const _c0 = ["complete"];
class FooterStatusComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.life = this.dataService.player.getLife();
        this.action_points = this.dataService.player.action_points;
        this.total_action_points = this.dataService.player.total_action_points;
        this.total_health_points = this.dataService.player.total_health_points;
    }
    ngAfterViewInit() {
        this.setStatus(this.dataService.player);
        this.dataService.player_change.subscribe((player) => {
            this.setStatus(player);
        });
    }
    setStatus(player) {
        this.life = player.getLife();
        this.action_points = player.action_points;
        this.complete.nativeElement.style.width = `${player.experience}%`;
    }
}
FooterStatusComponent.ɵfac = function FooterStatusComponent_Factory(t) { return new (t || FooterStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
FooterStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterStatusComponent, selectors: [["app-footer-status"]], viewQuery: function FooterStatusComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.complete = _t.first);
    } }, decls: 11, vars: 4, consts: [[2, "width", "20%"], [2, "width", "58%"], [1, "level"], [1, "complete"], ["complete", ""], [1, "ap-status"]], template: function FooterStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " LEVEL 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("HP ", ctx.life, "/", ctx.total_health_points, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" AP ", ctx.action_points, "/", ctx.total_action_points, " ");
    } }, styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  width: 88.7%;\n  color: var(--text-color);\n  font-family: \"Monofonto\";\n  bottom: 35px;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  height: 20px;\n  background-color: var(--section-color);\n  padding: 0 10px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  line-height: 20px;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%] {\n  border: 2px solid var(--text-color);\n  width: 70%;\n  margin: 3px;\n  position: relative;\n  left: 10%;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]   .complete[_ngcontent-%COMP%] {\n  width: 0px;\n  background-color: var(--text-color);\n  position: absolute;\n  height: 100%;\n  z-index: 1;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .ap-status[_ngcontent-%COMP%] {\n  text-align: right;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhldXMvRG9jdW1lbnRzL1Byb2dyYW1hw6fDo28vUHJvamV0b3MvUGlwYm95LWFuZ3VsYXIvcGlwYm95LWFuZ3VsYXIvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L2Zvb3Rlci9zdGF0dXMvc3RhdHVzLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L2Zvb3Rlci9zdGF0dXMvc3RhdHVzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNDSjtBRENJO0VBQ0UsWUFBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDTjtBRENNO0VBQ0UsbUNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0NSO0FEQ1E7RUFDRSxVQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQ1Y7QURDTTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9mb290ZXIvc3RhdHVzL3N0YXR1cy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICB3aWR0aDogODguNyVcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpXG4gIGZvbnQtZmFtaWx5OiAnTW9ub2ZvbnRvJ1xuICBib3R0b206IDM1cHhcblxuICBmb290ZXJcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgZmxleC1kaXJlY3Rpb246IHJvd1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxuXG4gICAgc2VjdGlvblxuICAgICAgaGVpZ2h0OiAyMHB4XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWN0aW9uLWNvbG9yKVxuICAgICAgcGFkZGluZzogMCAxMHB4XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94XG4gICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93XG4gICAgICBsaW5lLWhlaWdodDogMjBweFxuXG4gICAgICAubGV2ZWxcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGV4dC1jb2xvcilcbiAgICAgICAgd2lkdGg6IDcwJVxuICAgICAgICBtYXJnaW46IDNweFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICAgICAgbGVmdDogMTAlXG5cbiAgICAgICAgLmNvbXBsZXRlXG4gICAgICAgICAgd2lkdGg6IDBweFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlXG4gICAgICAgICAgei1pbmRleDogMVxuXG4gICAgICAuYXAtc3RhdHVzXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0XG4gICAgICAgIHdpZHRoOiAxMDAlXG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDg4LjclO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbm9mb250b1wiO1xuICBib3R0b206IDM1cHg7XG59XG46aG9zdCBmb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG46aG9zdCBmb290ZXIgc2VjdGlvbiB7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VjdGlvbi1jb2xvcik7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG46aG9zdCBmb290ZXIgc2VjdGlvbiAubGV2ZWwge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiAzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTAlO1xufVxuOmhvc3QgZm9vdGVyIHNlY3Rpb24gLmxldmVsIC5jb21wbGV0ZSB7XG4gIHdpZHRoOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTtcbn1cbjpob3N0IGZvb3RlciBzZWN0aW9uIC5hcC1zdGF0dXMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-footer-status",
                templateUrl: "./status.component.html",
                styleUrls: ["./status.component.sass"],
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, { complete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["complete"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/component/header/menu/menu.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/component/header/menu/menu.component.ts ***!
  \****************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class MenuComponent {
    constructor() { }
    ngOnInit() { }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-header-menu"]], decls: 22, vars: 0, consts: [[1, "header-menu"], ["routerLink", "/stat", "routerLinkActive", "active"], [1, "bottom"], ["routerLink", "/inv", "routerLinkActive", "active"], ["routerLink", "/data", "routerLinkActive", "active"], ["routerLink", "/map", "routerLinkActive", "active"], ["routerLink", "/radio", "routerLinkActive", "active"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "stat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "inv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-top: -12px;\n  background-color: var(--background-color);\n  width: 80%;\n  margin-left: 10%;\n}\n[_nghost-%COMP%]   ul.header-menu[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  text-transform: uppercase;\n  border-bottom: 3px solid var(--text-color);\n  font-family: \"Monofonto\";\n  color: var(--text-color);\n  margin: 0px 0 6px;\n  font-size: 25px;\n  padding: 0 10px 0 0;\n}\n[_nghost-%COMP%]   ul.header-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100px;\n  text-align: center;\n  border-top: 3px solid var(--text-color);\n  border-left: 3px solid var(--text-color);\n  border-right: 3px solid var(--text-color);\n  margin-left: 10px;\n  margin-right: -5px;\n}\n[_nghost-%COMP%]   ul.header-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: -15px;\n}\n[_nghost-%COMP%]   ul.header-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  height: 3px;\n  overflow-x: visible;\n  position: absolute;\n  background-color: var(--background-color);\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhldXMvRG9jdW1lbnRzL1Byb2dyYW1hw6fDo28vUHJvamV0b3MvUGlwYm95LWFuZ3VsYXIvcGlwYm95LWFuZ3VsYXIvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L2hlYWRlci9tZW51L21lbnUuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvaGVhZGVyL21lbnUvbWVudS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLHlDQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQUo7QURFRTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQUo7QURFSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSx3Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FOO0FERU07RUFDRSxpQkFBQTtBQ0FSO0FERU07RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsV0FBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9oZWFkZXIvbWVudS9tZW51LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3RcbiAgcFxuICAgIG1hcmdpbjogMFxuICAgIG1hcmdpbi10b3A6IC0xMnB4XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcilcbiAgICB3aWR0aDogODAlXG4gICAgbWFyZ2luLWxlZnQ6IDEwJVxuXG4gIHVsLmhlYWRlci1tZW51XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lXG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3dcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tdGV4dC1jb2xvcilcbiAgICBmb250LWZhbWlseTogJ01vbm9mb250bydcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcilcbiAgICBtYXJnaW46IDBweCAwIDZweFxuICAgIGZvbnQtc2l6ZTogMjVweFxuICAgIHBhZGRpbmc6IDAgMTBweCAwIDBcblxuICAgIGxpLmFjdGl2ZVxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlXG4gICAgICB3aWR0aDogMTAwcHhcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpXG4gICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpXG4gICAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKVxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHhcbiAgICAgIG1hcmdpbi1yaWdodDogLTVweFxuXG4gICAgICBwXG4gICAgICAgIG1hcmdpbi10b3A6IC0xNXB4XG5cbiAgICAgIC5ib3R0b21cbiAgICAgICAgaGVpZ2h0OiAzcHhcbiAgICAgICAgb3ZlcmZsb3cteDogdmlzaWJsZVxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcilcbiAgICAgICAgd2lkdGg6IDEwMCVcbiIsIjpob3N0IHAge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IC0xMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cbjpob3N0IHVsLmhlYWRlci1tZW51IHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xuICBmb250LWZhbWlseTogXCJNb25vZm9udG9cIjtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW46IDBweCAwIDZweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBwYWRkaW5nOiAwIDEwcHggMCAwO1xufVxuOmhvc3QgdWwuaGVhZGVyLW1lbnUgbGkuYWN0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogLTVweDtcbn1cbjpob3N0IHVsLmhlYWRlci1tZW51IGxpLmFjdGl2ZSBwIHtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG46aG9zdCB1bC5oZWFkZXItbWVudSBsaS5hY3RpdmUgLmJvdHRvbSB7XG4gIGhlaWdodDogM3B4O1xuICBvdmVyZmxvdy14OiB2aXNpYmxlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-header-menu",
                templateUrl: "./menu.component.html",
                styleUrls: ["./menu.component.sass"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/component/vault-boy/body/body.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/component/vault-boy/body/body.component.ts ***!
  \*******************************************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BodyComponent {
    constructor() {
        this.left_arm = "normal";
        this.right_arm = "normal";
        this.left_leg = "normal";
        this.right_leg = "normal";
        this.image = "n_n_n_n";
        this.statusImage = `assets/images/vault-boy/body/${this.image}.gif`;
    }
    ngOnChanges() {
        this.image = [
            this.right_arm[0],
            this.left_arm[0],
            this.right_leg[0],
            this.left_leg[0],
        ].join("_");
        this.statusImage = `assets/images/vault-boy/body/${this.image}.gif`;
    }
}
BodyComponent.ɵfac = function BodyComponent_Factory(t) { return new (t || BodyComponent)(); };
BodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BodyComponent, selectors: [["vault-boy-body"]], inputs: { left_arm: "left_arm", right_arm: "right_arm", left_leg: "left_leg", right_leg: "right_leg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["alt", "valt boy body", 3, "src"]], template: function BodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.statusImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvdmF1bHQtYm95L2JvZHkvYm9keS5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "vault-boy-body",
                templateUrl: "./body.component.html",
                styleUrls: ["./body.component.sass"],
            }]
    }], function () { return []; }, { left_arm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], right_arm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], left_leg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], right_leg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/component/vault-boy/head/head.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/component/vault-boy/head/head.component.ts ***!
  \*******************************************************************/
/*! exports provided: HeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadComponent", function() { return HeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeadComponent {
    constructor() {
        this.status = "normal";
        this.state = "normal";
        this.statusImage = `assets/images/vault-boy/head/${this.state}/${this.status[0]}.png`;
    }
    ngOnChanges() {
        this.statusImage = `assets/images/vault-boy/head/${this.state}/${this.status[0]}.png`;
    }
}
HeadComponent.ɵfac = function HeadComponent_Factory(t) { return new (t || HeadComponent)(); };
HeadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeadComponent, selectors: [["vault-boy-head"]], inputs: { status: "status", state: "state" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["alt", "vault boy head", 3, "src"]], template: function HeadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.statusImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  top: 57px;\n  left: 169px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhldXMvRG9jdW1lbnRzL1Byb2dyYW1hw6fDo28vUHJvamV0b3MvUGlwYm95LWFuZ3VsYXIvcGlwYm95LWFuZ3VsYXIvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L3ZhdWx0LWJveS9oZWFkL2hlYWQuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvdmF1bHQtYm95L2hlYWQvaGVhZC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvdmF1bHQtYm95L2hlYWQvaGVhZC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICB0b3A6IDU3cHhcbiAgbGVmdDogMTY5cHhcbiIsIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU3cHg7XG4gIGxlZnQ6IDE2OXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "vault-boy-head",
                templateUrl: "./head.component.html",
                styleUrls: ["./head.component.sass"],
            }]
    }], function () { return []; }, { status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/component/vault-boy/vault_boy.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/component/vault-boy/vault_boy.component.ts ***!
  \*******************************************************************/
/*! exports provided: VaultBoyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaultBoyComponent", function() { return VaultBoyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data.service */ "./src/app/shared/data.service.ts");
/* harmony import */ var _head_head_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./head/head.component */ "./src/app/shared/component/vault-boy/head/head.component.ts");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./body/body.component */ "./src/app/shared/component/vault-boy/body/body.component.ts");





const _c0 = ["head_status"];
const _c1 = ["left_arm_status"];
const _c2 = ["left_leg_status"];
const _c3 = ["right_arm_status"];
const _c4 = ["right_leg_status"];
class VaultBoyComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.status = this.dataService.player;
        this.state = this.status.getStatus();
        this.updateStatus();
    }
    ngOnChanges() {
        this.updateStatus();
        this.updatePercentage();
    }
    ngAfterViewInit() {
        this.updateStatus();
        this.updatePercentage();
    }
    updateStatus() {
        this.status = this.dataService.player;
        const members = this.status.health.members;
        this.head = members.head < 10 ? "crippled" : "normal";
        this.left_arm = members.left_arm < 10 ? "crippled" : "normal";
        this.right_arm = members.right_arm < 10 ? "crippled" : "normal";
        this.left_leg = members.left_leg < 10 ? "crippled" : "normal";
        this.right_leg = members.right_leg < 10 ? "crippled" : "normal";
        this.state = this.status.getStatus();
    }
    updatePercentage() {
        const members = this.status.health.members;
        this.head_status.nativeElement.style.width = `${members.head}%`;
        this.left_arm_status.nativeElement.style.width = `${members.left_arm}%`;
        this.right_arm_status.nativeElement.style.width = `${members.right_arm}%`;
        this.left_leg_status.nativeElement.style.width = `${members.left_leg}%`;
        this.right_leg_status.nativeElement.style.width = `${members.right_leg}%`;
    }
    loseLife(member) {
        this.dataService.loseLife(member, 10);
        this.updateStatus();
        this.updatePercentage();
    }
}
VaultBoyComponent.ɵfac = function VaultBoyComponent_Factory(t) { return new (t || VaultBoyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
VaultBoyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VaultBoyComponent, selectors: [["app-vaultboy"]], viewQuery: function VaultBoyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.head_status = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.left_arm_status = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.left_leg_status = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.right_arm_status = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.right_leg_status = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 18, vars: 6, consts: [[1, "status"], [1, "left_arm", "level", 3, "click"], [1, "complete"], ["left_arm_status", ""], [1, "head", "level", 3, "click"], ["head_status", ""], [1, "right_arm", "level", 3, "click"], ["right_arm_status", ""], [1, "left_leg", "level", 3, "click"], ["left_leg_status", ""], [1, "right_leg", "level", 3, "click"], ["right_leg_status", ""], [3, "state", "status"], [3, "left_arm", "right_arm", "left_leg", "right_leg"]], template: function VaultBoyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaultBoyComponent_Template_div_click_1_listener() { return ctx.loseLife("left_arm"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaultBoyComponent_Template_div_click_4_listener() { return ctx.loseLife("head"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaultBoyComponent_Template_div_click_7_listener() { return ctx.loseLife("right_arm"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 2, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaultBoyComponent_Template_div_click_10_listener() { return ctx.loseLife("left_leg"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 2, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaultBoyComponent_Template_div_click_13_listener() { return ctx.loseLife("right_leg"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 2, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "vault-boy-head", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "vault-boy-body", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx.state)("status", ctx.head);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("left_arm", ctx.left_arm)("right_arm", ctx.right_arm)("left_leg", ctx.left_leg)("right_leg", ctx.right_leg);
    } }, directives: [_head_head_component__WEBPACK_IMPORTED_MODULE_2__["HeadComponent"], _body_body_component__WEBPACK_IMPORTED_MODULE_3__["BodyComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  position: relative;\n}\n[_nghost-%COMP%]   .status[_ngcontent-%COMP%] {\n  position: absolute;\n}\n[_nghost-%COMP%]   .status[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%] {\n  border: 2px solid var(--text-color);\n  width: 50px;\n  height: 10px;\n  margin: 3px;\n  position: relative;\n  left: 10%;\n}\n[_nghost-%COMP%]   .status[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]   .complete[_ngcontent-%COMP%] {\n  width: 20px;\n  background-color: var(--text-color);\n  position: absolute;\n  height: 100%;\n  z-index: 1;\n}\n[_nghost-%COMP%]   .status[_ngcontent-%COMP%]   .level.head[_ngcontent-%COMP%] {\n  left: 285%;\n}\n[_nghost-%COMP%]   .status[_ngcontent-%COMP%]   .level.left_arm[_ngcontent-%COMP%] {\n  left: 500%;\n  bottom: -175px;\n}\n[_nghost-%COMP%]   .status[_ngcontent-%COMP%]   .level.right_arm[_ngcontent-%COMP%] {\n  left: 85%;\n  bottom: -135px;\n}\n[_nghost-%COMP%]   .status[_ngcontent-%COMP%]   .level.left_leg[_ngcontent-%COMP%] {\n  left: 380%;\n  bottom: -275px;\n}\n[_nghost-%COMP%]   .status[_ngcontent-%COMP%]   .level.right_leg[_ngcontent-%COMP%] {\n  left: 145%;\n  bottom: -258px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhldXMvRG9jdW1lbnRzL1Byb2dyYW1hw6fDo28vUHJvamV0b3MvUGlwYm95LWFuZ3VsYXIvcGlwYm95LWFuZ3VsYXIvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L3ZhdWx0LWJveS92YXVsdF9ib3kuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvdmF1bHQtYm95L3ZhdWx0X2JveS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtBQ0NKO0FEQ0k7RUFDRSxtQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0NOO0FEQ007RUFDRSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQ1I7QURDTTtFQUNFLFVBQUE7QUNDUjtBRENNO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNDUjtBRENNO0VBQ0UsU0FBQTtFQUNBLGNBQUE7QUNDUjtBRENNO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNDUjtBRENNO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvdmF1bHQtYm95L3ZhdWx0X2JveS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0XG4gIGRpc3BsYXk6IGZsZXhcbiAgcG9zaXRpb246IHJlbGF0aXZlXG5cbiAgLnN0YXR1c1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuXG4gICAgLmxldmVsXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKVxuICAgICAgd2lkdGg6IDUwcHhcbiAgICAgIGhlaWdodDogMTBweFxuICAgICAgbWFyZ2luOiAzcHhcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgICAgbGVmdDogMTAlXG5cbiAgICAgIC5jb21wbGV0ZVxuICAgICAgICB3aWR0aDogMjBweFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKVxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICAgICAgaGVpZ2h0OiAxMDAlXG4gICAgICAgIHotaW5kZXg6IDFcblxuICAgICAgJi5oZWFkXG4gICAgICAgIGxlZnQ6IDI4NSVcblxuICAgICAgJi5sZWZ0X2FybVxuICAgICAgICBsZWZ0OiA1MDAlXG4gICAgICAgIGJvdHRvbTogLTE3NXB4XG5cbiAgICAgICYucmlnaHRfYXJtXG4gICAgICAgIGxlZnQ6IDg1JVxuICAgICAgICBib3R0b206IC0xMzVweFxuXG4gICAgICAmLmxlZnRfbGVnXG4gICAgICAgIGxlZnQ6IDM4MCVcbiAgICAgICAgYm90dG9tOiAtMjc1cHhcblxuICAgICAgJi5yaWdodF9sZWdcbiAgICAgICAgbGVmdDogMTQ1JVxuICAgICAgICBib3R0b206IC0yNThweFxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46aG9zdCAuc3RhdHVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuOmhvc3QgLnN0YXR1cyAubGV2ZWwge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgbWFyZ2luOiAzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTAlO1xufVxuOmhvc3QgLnN0YXR1cyAubGV2ZWwgLmNvbXBsZXRlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTtcbn1cbjpob3N0IC5zdGF0dXMgLmxldmVsLmhlYWQge1xuICBsZWZ0OiAyODUlO1xufVxuOmhvc3QgLnN0YXR1cyAubGV2ZWwubGVmdF9hcm0ge1xuICBsZWZ0OiA1MDAlO1xuICBib3R0b206IC0xNzVweDtcbn1cbjpob3N0IC5zdGF0dXMgLmxldmVsLnJpZ2h0X2FybSB7XG4gIGxlZnQ6IDg1JTtcbiAgYm90dG9tOiAtMTM1cHg7XG59XG46aG9zdCAuc3RhdHVzIC5sZXZlbC5sZWZ0X2xlZyB7XG4gIGxlZnQ6IDM4MCU7XG4gIGJvdHRvbTogLTI3NXB4O1xufVxuOmhvc3QgLnN0YXR1cyAubGV2ZWwucmlnaHRfbGVnIHtcbiAgbGVmdDogMTQ1JTtcbiAgYm90dG9tOiAtMjU4cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VaultBoyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-vaultboy",
                templateUrl: "./vault_boy.component.html",
                styleUrls: ["./vault_boy.component.sass"],
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, { head_status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["head_status"]
        }], left_arm_status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["left_arm_status"]
        }], left_leg_status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["left_leg_status"]
        }], right_arm_status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["right_arm_status"]
        }], right_leg_status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["right_leg_status"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/component/vault-boy/vault_boy.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/component/vault-boy/vault_boy.module.ts ***!
  \****************************************************************/
/*! exports provided: VaultBoyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaultBoyModule", function() { return VaultBoyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _vault_boy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vault_boy.component */ "./src/app/shared/component/vault-boy/vault_boy.component.ts");
/* harmony import */ var _head_head_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./head/head.component */ "./src/app/shared/component/vault-boy/head/head.component.ts");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./body/body.component */ "./src/app/shared/component/vault-boy/body/body.component.ts");






class VaultBoyModule {
}
VaultBoyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VaultBoyModule });
VaultBoyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VaultBoyModule_Factory(t) { return new (t || VaultBoyModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VaultBoyModule, { declarations: [_vault_boy_component__WEBPACK_IMPORTED_MODULE_2__["VaultBoyComponent"], _head_head_component__WEBPACK_IMPORTED_MODULE_3__["HeadComponent"], _body_body_component__WEBPACK_IMPORTED_MODULE_4__["BodyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_vault_boy_component__WEBPACK_IMPORTED_MODULE_2__["VaultBoyComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VaultBoyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_vault_boy_component__WEBPACK_IMPORTED_MODULE_2__["VaultBoyComponent"], _head_head_component__WEBPACK_IMPORTED_MODULE_3__["HeadComponent"], _body_body_component__WEBPACK_IMPORTED_MODULE_4__["BodyComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_vault_boy_component__WEBPACK_IMPORTED_MODULE_2__["VaultBoyComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/component/video-player/video.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/component/video-player/video.component.ts ***!
  \******************************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class VideoComponent {
    constructor() {
        this.video_id = "";
        this.done = false;
    }
    ngOnInit() {
        var tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window["onYouTubeIframeAPIReady"] = () => this.onYouTubeIframeAPIReady();
    }
    onPlayerReady(event) {
        event.target.playVideo();
    }
    onYouTubeIframeAPIReady() {
        this.player = new window["YT"].Player("player", {
            height: "100",
            width: "100",
            videoId: this.video_id,
            events: {
                onReady: this.onPlayerReady,
                onStateChange: this.onPlayerStateChange,
            },
        });
    }
    onPlayerStateChange(event) {
        if (event.data == window["YT"].PlayerState.PLAYING && !this.done) {
            setTimeout(this.stopVideo, 6000);
            this.done = true;
        }
    }
    stopVideo() {
        this.player.stopVideo();
    }
    changeVideo(src) {
        this.player.loadVideoById(src, 0, "large");
    }
}
VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(); };
VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["app-video"]], inputs: { video_id: "video_id" }, decls: 1, vars: 0, consts: [["id", "player"]], template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: '<div id="player"></div>',
                selector: "app-video",
            }]
    }], null, { video_id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/component/video-player/video.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/component/video-player/video.module.ts ***!
  \***************************************************************/
/*! exports provided: VideoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoModule", function() { return VideoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _video_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video.component */ "./src/app/shared/component/video-player/video.component.ts");



class VideoModule {
}
VideoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VideoModule });
VideoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VideoModule_Factory(t) { return new (t || VideoModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VideoModule, { declarations: [_video_component__WEBPACK_IMPORTED_MODULE_1__["VideoComponent"]], exports: [_video_component__WEBPACK_IMPORTED_MODULE_1__["VideoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_video_component__WEBPACK_IMPORTED_MODULE_1__["VideoComponent"]],
                imports: [],
                exports: [_video_component__WEBPACK_IMPORTED_MODULE_1__["VideoComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/data.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/data.service.ts ***!
  \****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/player */ "./src/app/shared/model/player.ts");
/* harmony import */ var _model_marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/marker */ "./src/app/shared/model/marker.ts");
/* harmony import */ var _model_weapon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/weapon */ "./src/app/shared/model/weapon.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/core/auth.service.ts");








class DataService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.player_change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.player = new _model_player__WEBPACK_IMPORTED_MODULE_1__["Player"]();
        this.authService.checkCredentials();
        this.listPlayer("001").subscribe((players) => {
            players.forEach((p) => {
                const player = new _model_player__WEBPACK_IMPORTED_MODULE_1__["Player"]({
                    health: p.health,
                    atribute: p.atribute,
                    experience: p.experience,
                    total_action_points: 50,
                    total_health_points: 150,
                });
                this.player = player;
            });
            this.addInventoryPlayer(new _model_weapon__WEBPACK_IMPORTED_MODULE_3__["Pistol"]());
            this.addInventoryPlayer(new _model_weapon__WEBPACK_IMPORTED_MODULE_3__["Pistol"]({ accuracy: 10.93 }));
            this.addInventoryPlayer(new _model_weapon__WEBPACK_IMPORTED_MODULE_3__["Pistol"]({ accuracy: 10.93 }));
            this.addInventoryPlayer(new _model_weapon__WEBPACK_IMPORTED_MODULE_3__["Melee"]());
            console.log(this.getPlayerWeight());
            this.player_change.emit(this.player);
        });
    }
    listPlayer(oidpessoa) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BACKEND_API + `/fallout/player?pessoa=${oidpessoa}`);
    }
    loseLife(member, value) {
        this.attack();
        this.player.loseLife(member, value);
        this.player_change.emit(this.player);
    }
    getPlayerLocations() {
        return [
            new _model_marker__WEBPACK_IMPORTED_MODULE_2__["Marker"]("vault", 409, 138, { found: false }),
            new _model_marker__WEBPACK_IMPORTED_MODULE_2__["Marker"]("sanctuary", 476, 162, { found: false }),
        ];
    }
    getPlayerPosition() {
        return new _model_marker__WEBPACK_IMPORTED_MODULE_2__["Marker"]("player", 370.1, 121.5, {
            width: 15,
            height: 20,
            hud: true,
        });
    }
    getPlayerDestiny() {
        return new _model_marker__WEBPACK_IMPORTED_MODULE_2__["Marker"]("destiny", 525, 152, {
            width: 12,
            height: 30,
            found: true,
        });
        // return new Marker("destiny", 1186, 371, {
        //   width: 12,
        //   height: 30,
        //   found: true,
        // });
    }
    addInventoryPlayer(item) {
        const itemType = item.baseClass;
        this.player.inventory[itemType].push(item);
        console.log(this.player.inventory);
    }
    setWeapon(arma) {
        this.player.equiped.hand = arma;
        this.player_change.emit(this.player);
    }
    attack() {
        const equiped = this.player.equiped.hand;
        if (equiped && this.loseAP(equiped.apCost)) {
            equiped.fire();
        }
    }
    loseAP(value) {
        const ap = this.player.action_points;
        if (ap > value) {
            console.log(ap - value > 0 ? ap - value : 0);
            this.player.action_points = ap - value > 0 ? ap - value : 0;
            return true;
        }
        return false;
    }
    getPlayerWeight() {
        return Object.values(this.player.inventory).reduce((curr, arr) => curr + arr.reduce((curr, item) => curr + item.weight, 0), 0);
    }
    getPlayerInventory(field) {
        return this.player.inventory[field].reduce((r, a) => {
            r[a.name + a.accuracy] = [...(r[a.name + a.accuracy] || []), a];
            return r;
        }, {});
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/model/ammunition.ts":
/*!********************************************!*\
  !*** ./src/app/shared/model/ammunition.ts ***!
  \********************************************/
/*! exports provided: TypeAmmo, Ammunition, Bullet, Ammo9Milimeter, Ammo10Milimeter, Ammo44Caliber, Ammo38Caliber, Ammo45Caliber, Ammo308Caliber, AmmoShotgunShell, Ammo556Caliber, Ammo762Caliber, Ammo5Milimeters, AmmoMissile, AmmoMiniNuke, AmmoFusionCell, AmmoPlasmaCartidge, AmmoFlamerFuel, AmmoCryoRound, AmmoGammaRound, FusionCore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeAmmo", function() { return TypeAmmo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ammunition", function() { return Ammunition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bullet", function() { return Bullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ammo9Milimeter", function() { return Ammo9Milimeter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ammo10Milimeter", function() { return Ammo10Milimeter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ammo44Caliber", function() { return Ammo44Caliber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ammo38Caliber", function() { return Ammo38Caliber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ammo45Caliber", function() { return Ammo45Caliber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ammo308Caliber", function() { return Ammo308Caliber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmmoShotgunShell", function() { return AmmoShotgunShell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ammo556Caliber", function() { return Ammo556Caliber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ammo762Caliber", function() { return Ammo762Caliber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ammo5Milimeters", function() { return Ammo5Milimeters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmmoMissile", function() { return AmmoMissile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmmoMiniNuke", function() { return AmmoMiniNuke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmmoFusionCell", function() { return AmmoFusionCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmmoPlasmaCartidge", function() { return AmmoPlasmaCartidge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmmoFlamerFuel", function() { return AmmoFlamerFuel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmmoCryoRound", function() { return AmmoCryoRound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmmoGammaRound", function() { return AmmoGammaRound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FusionCore", function() { return FusionCore; });
var TypeAmmo;
(function (TypeAmmo) {
    TypeAmmo["Ammo9Milimeter"] = "9mm Round";
    TypeAmmo["Ammo10Milimeter"] = "10mm Round";
    TypeAmmo["Ammo44Caliber"] = ".44mm Round";
    TypeAmmo["Ammo38Caliber"] = ".38 Round";
    TypeAmmo["Ammo45Caliber"] = ".45mm Round";
    TypeAmmo["Ammo308Caliber"] = ".308 Round";
    TypeAmmo["AmmoShotgunShell"] = "Shotgun Shell";
    TypeAmmo["Ammo556Caliber"] = "5.56mm Round";
    TypeAmmo["Ammo762Caliber"] = "7.62mm Round";
    TypeAmmo["Ammo5Milimeters"] = "5mm Round";
    TypeAmmo["AmmoMissile"] = "Missile";
    TypeAmmo["AmmoMiniNuke"] = "Mini Nuke";
    TypeAmmo["AmmoFusionCell"] = "Fusion Cell";
    TypeAmmo["AmmoPlasmaCartidge"] = "Plasma Cartridge";
    TypeAmmo["AmmoFlamerFuel"] = "Flamer Fuel";
    TypeAmmo["AmmoCryoRound"] = "Cryo Round";
    TypeAmmo["AmmoGammaRound"] = "Gamma Round";
    TypeAmmo["FusionCore"] = "Fusion Core";
})(TypeAmmo || (TypeAmmo = {}));
class Ammunition {
    constructor() {
        this.baseClass = "ammunition";
    }
}
class Bullet extends Ammunition {
    constructor(quantity) {
        super();
        this.quantity = quantity;
        if (!quantity)
            this.quantity = Math.floor(Math.random() * 10);
    }
}
class Ammo9Milimeter extends Bullet {
    constructor() {
        super(...arguments);
        this.type = TypeAmmo.Ammo9Milimeter;
    }
}
class Ammo10Milimeter extends Bullet {
    constructor() {
        super(...arguments);
        this.type = TypeAmmo.Ammo10Milimeter;
    }
}
class Ammo44Caliber extends Bullet {
    constructor() {
        super(...arguments);
        this.type = TypeAmmo.Ammo44Caliber;
    }
}
class Ammo38Caliber extends Bullet {
    constructor() {
        super(...arguments);
        this.type = TypeAmmo.Ammo38Caliber;
    }
}
class Ammo45Caliber extends Bullet {
    constructor() {
        super(...arguments);
        this.type = TypeAmmo.Ammo45Caliber;
    }
}
class Ammo308Caliber extends Bullet {
    constructor() {
        super(...arguments);
        this.type = TypeAmmo.Ammo308Caliber;
    }
}
class AmmoShotgunShell extends Bullet {
    constructor() {
        super(...arguments);
        this.type = TypeAmmo.AmmoShotgunShell;
    }
}
class Ammo556Caliber extends Bullet {
    constructor() {
        super(...arguments);
        this.type = TypeAmmo.Ammo556Caliber;
    }
}
class Ammo762Caliber extends Bullet {
    constructor() {
        super(...arguments);
        this.type = TypeAmmo.Ammo762Caliber;
    }
}
class Ammo5Milimeters extends Bullet {
    constructor() {
        super(...arguments);
        this.type = TypeAmmo.Ammo5Milimeters;
    }
}
class AmmoMissile extends Bullet {
    constructor() {
        super(...arguments);
        this.type = TypeAmmo.AmmoMissile;
    }
}
class AmmoMiniNuke extends Bullet {
    constructor() {
        super(...arguments);
        this.type = TypeAmmo.AmmoMiniNuke;
    }
}
class AmmoFusionCell extends Bullet {
    constructor() {
        super(...arguments);
        this.type = TypeAmmo.AmmoFusionCell;
    }
}
class AmmoPlasmaCartidge extends Bullet {
    constructor() {
        super(...arguments);
        this.type = TypeAmmo.AmmoPlasmaCartidge;
    }
}
class AmmoFlamerFuel extends Bullet {
    constructor() {
        super(...arguments);
        this.type = TypeAmmo.AmmoFlamerFuel;
    }
}
class AmmoCryoRound extends Bullet {
    constructor() {
        super(...arguments);
        this.type = TypeAmmo.AmmoCryoRound;
    }
}
class AmmoGammaRound extends Bullet {
    constructor() {
        super(...arguments);
        this.type = TypeAmmo.AmmoGammaRound;
    }
}
class FusionCore extends Ammunition {
    constructor() {
        super(...arguments);
        this.type = TypeAmmo.FusionCore;
    }
}


/***/ }),

/***/ "./src/app/shared/model/marker.ts":
/*!****************************************!*\
  !*** ./src/app/shared/model/marker.ts ***!
  \****************************************/
/*! exports provided: Marker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
class Marker {
    constructor(name, x, y, options) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.width = options === null || options === void 0 ? void 0 : options.width;
        this.height = options === null || options === void 0 ? void 0 : options.height;
        this.found = (options === null || options === void 0 ? void 0 : options.found) || false;
        this.hud = (options === null || options === void 0 ? void 0 : options.hud) || false;
    }
    getSrc() {
        const image_sprite = this.found ? "found" : "not_found";
        const image_path = `assets/images/map/markers/${image_sprite}/${this.name}.svg`;
        const image_hud = `assets/images/map/markers/${this.name}.svg`;
        return this.hud ? image_hud : image_path;
    }
}


/***/ }),

/***/ "./src/app/shared/model/player.ts":
/*!****************************************!*\
  !*** ./src/app/shared/model/player.ts ***!
  \****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
class Player {
    constructor(options = {
        health: {
            head: 100,
            leftarm: 100,
            leftleg: 100,
            rightarm: 100,
            rightleg: 100,
            addicted: 0,
            irradiated: 0,
        },
        atribute: {
            strength: 0,
            perception: 0,
            endurance: 0,
            charisma: 0,
            inteligence: 0,
            agility: 0,
            luck: 0,
        },
        experience: 0,
        total_action_points: 50,
        total_health_points: 150,
    }) {
        this.health = {
            members: {
                head: options.health.head,
                left_arm: options.health.leftarm,
                right_arm: options.health.rightarm,
                left_leg: options.health.leftleg,
                right_leg: options.health.rightleg,
            },
            irraidated: options.health.irradiated,
            Addicted: options.health.addicted,
        };
        this.special = {
            strength: options.atribute.strength,
            perception: options.atribute.perception,
            endurance: options.atribute.endurance,
            charisma: options.atribute.charisma,
            inteligence: options.atribute.inteligence,
            agility: options.atribute.agility,
            luck: options.atribute.luck,
        };
        this.inventory = {
            weapon: [],
            apparel: [],
            aid: [],
            misc: [],
            junk: [],
            ammunition: [],
        };
        this.equiped = {
            hand: null,
            head: null,
            leftArm: null,
            rightArm: null,
            leftLeg: null,
            rightLeg: null,
        };
        this.experience = options.experience;
        this.total_action_points = options.total_action_points;
        this.action_points = options.total_action_points;
        this.total_health_points = options.total_health_points;
    }
    getStatus() {
        const members = Object.values(this.health.members);
        return members.reduce((curr, member) => curr + member, 0) ==
            members.length * 100
            ? "normal"
            : "hurt";
    }
    getLife() {
        const members = Object.values(this.health.members);
        const percent = members.reduce((c, m) => c + m, 0) / members.length / 100;
        const life = this.total_health_points * percent;
        return Math.floor(life);
    }
    loseLife(member, value) {
        this.health.members[member] -= value;
        if (this.health.members[member] < 0)
            this.health.members[member] = 0;
    }
}


/***/ }),

/***/ "./src/app/shared/model/radio.ts":
/*!***************************************!*\
  !*** ./src/app/shared/model/radio.ts ***!
  \***************************************/
/*! exports provided: Radio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return Radio; });
class Radio {
    constructor(name, url, youtube) {
        this.name = name;
        this.url = url;
        this.youtube = youtube;
    }
}


/***/ }),

/***/ "./src/app/shared/model/weapon.ts":
/*!****************************************!*\
  !*** ./src/app/shared/model/weapon.ts ***!
  \****************************************/
/*! exports provided: TypeWeapon, Weapon, Pistol, Shotgun, SMG, Rifle, Heavy, Semiautomatic, Automatic, Pipe, Special, Melee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeWeapon", function() { return TypeWeapon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weapon", function() { return Weapon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pistol", function() { return Pistol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shotgun", function() { return Shotgun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMG", function() { return SMG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rifle", function() { return Rifle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heavy", function() { return Heavy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Semiautomatic", function() { return Semiautomatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Automatic", function() { return Automatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pipe", function() { return Pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Special", function() { return Special; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Melee", function() { return Melee; });
/* harmony import */ var _ammunition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ammunition */ "./src/app/shared/model/ammunition.ts");

var TypeWeapon;
(function (TypeWeapon) {
    TypeWeapon["pistol"] = "Pistol";
    TypeWeapon["shotgun"] = "Shotgun";
    TypeWeapon["smg"] = "SMG";
    TypeWeapon["rifle"] = "Rifle";
    TypeWeapon["heavy"] = "Heavy";
    TypeWeapon["semiautomatic"] = "Semi-automatic";
    TypeWeapon["automatic"] = "Automatic";
    TypeWeapon["pipe"] = "Pipe";
    TypeWeapon["special"] = "Special";
    TypeWeapon["melee"] = "Melee";
})(TypeWeapon || (TypeWeapon = {}));
class Weapon {
    constructor() {
        this.baseClass = "weapon";
    }
    fire() {
        if (this.ammunition.quantity - 1 > 0) {
            this.ammunition.quantity -= 1;
            return Math.random() * this.damage;
        }
        return null;
    }
}
class Pistol extends Weapon {
    constructor(options) {
        super();
        this.type = TypeWeapon.pistol;
        this.imageSRC = "assets/images/HUD/Inventory/icon_82.svg";
        this.name = (options === null || options === void 0 ? void 0 : options.name) || "10mm Pistol";
        this.ammunition = (options === null || options === void 0 ? void 0 : options.ammunition) || new _ammunition__WEBPACK_IMPORTED_MODULE_0__["Ammo10Milimeter"]();
        this.damage = (options === null || options === void 0 ? void 0 : options.damage) || 18;
        this.fireRate = (options === null || options === void 0 ? void 0 : options.fireRate) || 4.66;
        this.apCost = (options === null || options === void 0 ? void 0 : options.apCost) || 28;
        this.range = (options === null || options === void 0 ? void 0 : options.range) || 21.93;
        this.weight = (options === null || options === void 0 ? void 0 : options.weight) || 3;
        this.value = (options === null || options === void 0 ? void 0 : options.value) || 45;
        this.accuracy = Number.parseFloat(((options === null || options === void 0 ? void 0 : options.accuracy) || Math.random() * 100).toFixed(2));
    }
}
class Shotgun extends Weapon {
    constructor(options) {
        super();
        this.type = TypeWeapon.shotgun;
        this.imageSRC = "assets/images/HUD/Inventory/icon_90.svg";
        this.name = (options === null || options === void 0 ? void 0 : options.name) || "Combat Shotgun";
        this.ammunition = (options === null || options === void 0 ? void 0 : options.ammunition) || new _ammunition__WEBPACK_IMPORTED_MODULE_0__["AmmoShotgunShell"]();
        this.damage = (options === null || options === void 0 ? void 0 : options.damage) || 50;
        this.fireRate = (options === null || options === void 0 ? void 0 : options.fireRate) || 120;
        this.apCost = (options === null || options === void 0 ? void 0 : options.apCost) || 30;
        this.range = (options === null || options === void 0 ? void 0 : options.range) || 25.59;
        this.weight = (options === null || options === void 0 ? void 0 : options.weight) || 7;
        this.value = (options === null || options === void 0 ? void 0 : options.value) || 65;
        this.accuracy = Number.parseFloat(((options === null || options === void 0 ? void 0 : options.accuracy) || Math.random() * 30).toFixed(2));
    }
}
class SMG extends Weapon {
    constructor() {
        super(...arguments);
        this.type = TypeWeapon.smg;
    }
}
class Rifle extends Weapon {
    constructor() {
        super(...arguments);
        this.type = TypeWeapon.rifle;
    }
}
class Heavy extends Weapon {
    constructor() {
        super(...arguments);
        this.type = TypeWeapon.heavy;
    }
}
class Semiautomatic extends Weapon {
    constructor() {
        super(...arguments);
        this.type = TypeWeapon.semiautomatic;
    }
}
class Automatic extends Weapon {
    constructor() {
        super(...arguments);
        this.type = TypeWeapon.automatic;
    }
}
class Pipe extends Weapon {
    constructor() {
        super(...arguments);
        this.type = TypeWeapon.pipe;
    }
}
class Special extends Weapon {
    constructor() {
        super(...arguments);
        this.type = TypeWeapon.special;
    }
}
class Melee {
    constructor(options) {
        this.type = TypeWeapon.melee;
        this.baseClass = "weapon";
        this.imageSRC = "assets/images/HUD/Inventory/icon_102.svg";
        this.name = (options === null || options === void 0 ? void 0 : options.name) || "Security Baton";
        this.damage = (options === null || options === void 0 ? void 0 : options.damage) || 11;
        this.fireRate = (options === null || options === void 0 ? void 0 : options.fireRate) || "medium";
        this.apCost = (options === null || options === void 0 ? void 0 : options.apCost) || 30;
        this.weight = (options === null || options === void 0 ? void 0 : options.weight) || 2;
        this.value = (options === null || options === void 0 ? void 0 : options.value) || 15;
    }
}


/***/ }),

/***/ "./src/app/shared/radio.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/radio.service.ts ***!
  \*****************************************/
/*! exports provided: RadioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioService", function() { return RadioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/radio */ "./src/app/shared/model/radio.ts");



class RadioService {
    constructor() {
        this.RADIOS = [
            new _model_radio__WEBPACK_IMPORTED_MODULE_1__["Radio"]("Desligado", null, null),
            new _model_radio__WEBPACK_IMPORTED_MODULE_1__["Radio"]("Main Station", "http://fallout.fm:8000/falloutfm1.ogg", false),
            new _model_radio__WEBPACK_IMPORTED_MODULE_1__["Radio"]("Diamond City Radio", "http://fallout.fm:8000/falloutfm6.ogg?auth=0738886807-4069-0rj025o0-f0d12905c09026ce8f0285931e6d5504?retry=0", false),
            new _model_radio__WEBPACK_IMPORTED_MODULE_1__["Radio"]("South Virginia Radio", "http://fallout.fm:8000/falloutfm10.ogg?_=1458026635?retry=0", false),
            new _model_radio__WEBPACK_IMPORTED_MODULE_1__["Radio"]("MWTCF", "http://fallout.fm:8000/falloutfm8.ogg?token=a43aafe3f3856e610476328188c88087%2F5c7a8f7a?retry=0", false),
            new _model_radio__WEBPACK_IMPORTED_MODULE_1__["Radio"]("Megaton Radio", "https://us2.internet-radio.com/proxy/megatoncafe?mp=/stream;", false),
            new _model_radio__WEBPACK_IMPORTED_MODULE_1__["Radio"]("Rockamolly", "https://uk6.internet-radio.com/proxy/rockaroundtheblock?mp=/stream;", false),
            new _model_radio__WEBPACK_IMPORTED_MODULE_1__["Radio"]("Majestic Radio", "https://uk3.internet-radio.com/proxy/majesticjukebox?mp=/live", false),
            new _model_radio__WEBPACK_IMPORTED_MODULE_1__["Radio"]("Fallout Radio", "tzBGEqkwCoY", true),
            new _model_radio__WEBPACK_IMPORTED_MODULE_1__["Radio"]("Appalachia Radio", "EZ8ILzGWgBI", true),
            new _model_radio__WEBPACK_IMPORTED_MODULE_1__["Radio"]("Vintage Radio", "CvgFl14c3Uc", true),
            new _model_radio__WEBPACK_IMPORTED_MODULE_1__["Radio"]("WHL 570 Radio", "SK3X0pVXvTg", true),
        ];
        this.radio_change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        const radio_name = localStorage.getItem("radio") || "Desligado";
        this.setRadio(this.RADIOS.filter((radio) => radio.name == radio_name)[0]);
    }
    getRadioList() {
        return this.RADIOS;
    }
    setRadio(radio) {
        this.radio = radio;
        localStorage.setItem("radio", radio.name);
        this.radio_change.emit(this.radio);
    }
}
RadioService.ɵfac = function RadioService_Factory(t) { return new (t || RadioService)(); };
RadioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RadioService, factory: RadioService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    BACKEND_API: "http://localhost:8080",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/matheus/Documents/Programação/Projetos/Pipboy-angular/pipboy-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _construction_construction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./construction/construction.component */ "./src/app/construction/construction.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'portfolio', component: _construction_construction_component__WEBPACK_IMPORTED_MODULE_5__["ConstructionComponent"], data: { title: 'Projects' } },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { title: 'Home' } },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n  <router-outlet></router-outlet>\n  <app-social-buttons></app-social-buttons>\n  <app-mid></app-mid>\n  <app-info></app-info>\n    <!--router views go here-->\n</main>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _options_options_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./options/options.component */ "./src/app/options/options.component.ts");
/* harmony import */ var _bottom_bottom_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bottom/bottom.component */ "./src/app/bottom/bottom.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _mid_mid_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mid/mid.component */ "./src/app/mid/mid.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _social_buttons_social_buttons_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./social-buttons/social-buttons.component */ "./src/app/social-buttons/social-buttons.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _construction_construction_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./construction/construction.component */ "./src/app/construction/construction.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_12__["SkillsComponent"],
                _banner_banner_component__WEBPACK_IMPORTED_MODULE_10__["BannerComponent"],
                _options_options_component__WEBPACK_IMPORTED_MODULE_8__["OptionsComponent"],
                _bottom_bottom_component__WEBPACK_IMPORTED_MODULE_9__["BottomComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsComponent"],
                _mid_mid_component__WEBPACK_IMPORTED_MODULE_11__["MidComponent"],
                _info_info_component__WEBPACK_IMPORTED_MODULE_5__["InfoComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _social_buttons_social_buttons_component__WEBPACK_IMPORTED_MODULE_15__["SocialButtonsComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"],
                _construction_construction_component__WEBPACK_IMPORTED_MODULE_17__["ConstructionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/banner/banner.component.css":
/*!*********************************************!*\
  !*** ./src/app/banner/banner.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 1000px) {\n\n  .index-banner {\n    height: 450px;\n  }\n\n\n  .index-banner h1 {\n    display: block;\n    width: 560px;\n    margin: 0 auto;\n\n  }\n\n  .index-links div {\n    margin: 0 auto;\n    padding: 0;\n    height: 250px;\n    background-color: #f2f2f2;\n  }\n\n  .index-boxlink-square {\n    width: calc(25% - 60px) !important;\n    margin: 0 auto;\n    padding: 0;\n  }\n}\n\n/**\nTODO: e3b46757de0e4d3282af3ba9042d1459\n */\n\n/*INDEX*/\n\n.index-banner {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  height: calc(100vh - 100px);\n  background-image: url(\"https://picsum.photos/1200/1200/?random\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n  background-size: cover;\n  display: table;\n  overflow: hidden;\n}\n\n.vertical-center {\n  margin: 0;\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.index-banner h2 {\n  margin: 0;\n  padding: 0;\n  font-family: Catamaran;\n  font-size: 60px;\n  color: #fff;\n  font-weight: 900;\n  line-height: 70px;\n  text-align: center;\n  text-shadow: 2px 2px 8px #111;\n}\n\n.index-banner h1 {\n  font-family: Cormorant Garamond;\n  font-size: 28px;\n  font-weight: 100;\n  font-style: italic;\n  line-height: 40px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 2px 2px 8px #111;\n}\n"

/***/ }),

/***/ "./src/app/banner/banner.component.html":
/*!**********************************************!*\
  !*** ./src/app/banner/banner.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n  <link href=\"https://fonts.googleapis.com/css?family=Catamaran|Cormorant+Garamond\" rel=\"stylesheet\">\n</head>\n<main>\n  <div class=\"wrapper\">\n    <section  style=\"overflow: hidden; resize: none;\" class=\"index-banner\">\n      <div class=\"vertical-center\" style=\"overflow: hidden; resize: none\" nonedata-aos=\"zoom-in\">\n        <h2 style=\"overflow: hidden; resize: none\">I AM A FREELANCE <br>iOS & WEB DEVELOPER</h2>\n        <h1>With knowledge of Java and algorithm optimisation.</h1>\n      </div>\n    </section>\n  </div>\n</main>\n</html>\n"

/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/banner/banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/bottom/bottom.component.css":
/*!*********************************************!*\
  !*** ./src/app/bottom/bottom.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  /*width: 100%;*/\n  padding: 100px 100px;\n  margin-top: 20px;\n  overflow: hidden;\n\n  width: 100%;\n  height: calc(100vh - 100px);\n  background-image: url(\"https://picsum.photos/1200/1200/?random\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n  background-size: cover;\n  display: -ms-grid;\n  display: grid;\n}\n\n#wrap {\n  transition: color 4s ease-in-out;\n}\n\n::-webkit-input-placeholder {\n  color: white;\n  text-shadow: blue 1px 1px;\n  font-weight: bolder;\n}\n\n::-ms-input-placeholder {\n  color: white;\n  text-shadow: blue 1px 1px;\n  font-weight: bolder;\n}\n\n::placeholder {\n  color: white;\n  text-shadow: blue 1px 1px;\n  font-weight: bolder;\n}\n\ntextarea:focus, input:focus {\n  color: white;\n}\n\ntextarea:after, input:after {\n  color: white;\n}\n\n.clearfix {\n  clear: both;\n}\n\n.contact {\n  /*width: 75%;*/\n}\n\n.form-control {\n  /*float: left;*/\n\n  background: transparent;\n  border: none;\n  border-bottom: 2px solid white;\n  font-size: 18px;\n  margin-bottom: 16px;\n  /*text-shadow: #111111 5px 5px;*/\n}\n\ninput {\n  height: 45px;\n  color: white;\n}\n\nform .submit {\n  width: 100%;\n  background: #ff5722;\n  border-color: transparent;\n  color: white;\n  font-size: 20px;\n  /*font-weight: bold;*/\n  letter-spacing: 2px;\n  /*height: 50px;*/\n  margin-top: 20px;\n}\n\nform .submit:hover {\n  background-color: #f44336;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/bottom/bottom.component.html":
/*!**********************************************!*\
  !*** ./src/app/bottom/bottom.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n  <link href=\"https://fonts.googleapis.com/css?family=Catamaran|Cormorant+Garamond\" rel=\"stylesheet\">\n</head>\n\n<footer id=\"wrap\">\n\n  <div class=\"contact form\"  data-aos=\"slide-up\">\n    <form id=\"contact-form\" action=\"https://formspree.io/your@email.com\" method=\"POST\">\n      <input maxlength=\"50\" name=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Your Name\" required><br>\n      <input name=\"email\" maxlength=\"50\" type=\"email\" class=\"form-control\" placeholder=\"Your Email\" required><br>\n      <textarea maxlength=\"1000\" name=\"message\" class=\"form-control\" placeholder=\"Your Message\" rows=\"5\" required></textarea> <br>\n      <input type=\"submit\" (click)=\"submit()\" class=\"form-control submit\" value=\"Send\">\n    </form>\n  </div>\n  <div class=\"clearfix\"></div>\n</footer>\n</html>\n"

/***/ }),

/***/ "./src/app/bottom/bottom.component.ts":
/*!********************************************!*\
  !*** ./src/app/bottom/bottom.component.ts ***!
  \********************************************/
/*! exports provided: BottomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomComponent", function() { return BottomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BottomComponent = /** @class */ (function () {
    function BottomComponent() {
    }
    BottomComponent.prototype.ngOnInit = function () {
    };
    BottomComponent.prototype.submit = function () {
        alert('Message sent!');
    };
    BottomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bottom',
            template: __webpack_require__(/*! ./bottom.component.html */ "./src/app/bottom/bottom.component.html"),
            styles: [__webpack_require__(/*! ./bottom.component.css */ "./src/app/bottom/bottom.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BottomComponent);
    return BottomComponent;
}());



/***/ }),

/***/ "./src/app/construction/construction.component.css":
/*!*********************************************************!*\
  !*** ./src/app/construction/construction.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n* {\n  resize: none;\n  overflow: hidden;\n}\n\n\n.text {\n  -webkit-filter: brightness(100%);\n          filter: brightness(100%);\n  font-family: Optima;\n  margin: 0 auto;\n  padding-top: 40px;\n  text-align: center;\n  text-transform: uppercase;\n  color: white;\n  font-weight: bolder;\n  font-size: 300px;\n}\n\n\nh2 {\n  font-style: italic;\n  padding-top: 40px;\n}\n\n\n.construction-banner {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  -webkit-filter: brightness(75%);\n          filter: brightness(75%);\n  height: calc(100vh - 100px);\n  background-image: url('construction.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n  background-size: cover;\n  display: table;\n\n}\n"

/***/ }),

/***/ "./src/app/construction/construction.component.html":
/*!**********************************************************!*\
  !*** ./src/app/construction/construction.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<header>\n</header>\n<body>\n\n<section class=\"construction-banner\">\n<div class=\"text\">\n  <h1>Coming soon</h1>\n  <h2>This page is under construction</h2>\n</div>\n</section>\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/construction/construction.component.ts":
/*!********************************************************!*\
  !*** ./src/app/construction/construction.component.ts ***!
  \********************************************************/
/*! exports provided: ConstructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstructionComponent", function() { return ConstructionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConstructionComponent = /** @class */ (function () {
    function ConstructionComponent() {
    }
    ConstructionComponent.prototype.ngOnInit = function () {
    };
    ConstructionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-construction',
            template: __webpack_require__(/*! ./construction.component.html */ "./src/app/construction/construction.component.html"),
            styles: [__webpack_require__(/*! ./construction.component.css */ "./src/app/construction/construction.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConstructionComponent);
    return ConstructionComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 1000px) {\n  header {\n    float: left;\n    margin: 0 auto;\n    padding: 0 auto;\n    display: block;\n  }\n\n  header .header-brand {\n    float: left;\n  }\n\n  /*list **** IF YOU CAN'T CENTRE THINGS, ADD A DISPLAY BLOCK*/\n  header nav ul {\n    /*float: right;*/\n    /*margin-right: 20px;*/\n    /*list-style: none;*/\n    /*display: block;*/\n  }\n\n  /*link in list*/\n  header nav ul li a {\n    line-height: 60px;\n    font-size: 10px;\n    padding: 5px;\n    margin: 0 auto;\n    /*text-align: center;*/\n    float: left;\n    list-style: none;\n    /*display: block;*/\n  }\n\n}\n\n.back {\n  float: right;\n}\n\n* {\n  text-decoration: none;\n  list-style-type: none;\n}\n\nbody {\n  background-color: #f3f3f3;\n}\n\nheader {\n  background-color: #fff;\n  float: left;\n  margin: 0 auto;\n  padding: 0 auto;\n  display: block;\n  width: 100%;\n  height: 100%;\n  letter-spacing: 2px;\n}\n\nheader .header-brand:hover {\n  color: burlywood;\n}\n\n#oar-text-element {\n  /*border: 1px solid #ccc;*/\n  display: none;\n  font-size: 10px;\n  /*margin-top: 10px;*/\n  /*padding: 5px;*/\n  text-transform: uppercase;\n}\n\n/*#oars:hover #oar-text-element {*/\n\n/*display: inline-block;*/\n\n/*-webkit-transform: translateX(26px);*/\n\n/*-ms-transform: translateX(42px);*/\n\n/*transform: translateX(65px);*/\n\n/*transition: 1s;*/\n\n/*transition: ease-in-out;*/\n\n/*font-style: italic;*/\n\n/*}*/\n\n/*#oars {*/\n\n/*cursor: none;*/\n\n/*padding: 20px;*/\n\n/*float: left;*/\n\n/*}*/\n\nheader .header-brand {\n  text-decoration: none;\n  font-family: \"Big Caslon\";\n  font-size: 28px;\n  font-weight: 200;\n  color: #122;\n  text-transform: uppercase;\n\n  /*center text*/\n  display: block;\n  margin: 0 20px;\n  /*text-align: center;*/\n\n  /*20 top and bottom, 0 left and right*/\n  padding: 20px 60px;\n}\n\n/*list **** IF YOU CAN'T CENTRE THINGS, ADD A DISPLAY BLOCK*/\n\nheader nav ul {\n  margin: 0;\n  width: 100%;\n  display: block;\n  transition: 1s;\n}\n\n/*list items*/\n\nheader nav ul li {\n  /*display: inline-block;*/\n  float: left;\n  list-style: none;\n  padding: 0 40px 0 80px;\n}\n\n/*link in list*/\n\nheader nav ul li a {\n  font-family: 'Catamaran', sans-serif;\n  font-size: 26px;\n  font-weight: 500;\n  color: #124;\n}\n\n/*animated line*/\n\nheader nav ul li a:hover {\n  color: burlywood;\n}\n\nheader nav ul li a::after {\n  vertical-align: top;\n  display: block;\n  margin: 0 auto;\n  content: '';\n\n  width: 0;\n  height: 2px;\n\n  transition: width 3s;\n\n  background-color: burlywood;\n}\n\nheader nav ul li a:hover::after {\n  vertical-align: top;\n  width: 100%;\n  transition: width .3s;\n\n}\n\n/**\nSWITCH\n */\n\n/*.switch:hover {*/\n\n/*background-color: gray;*/\n\n/*transition: 2s;*/\n\n/*}*/\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 100px;\n  height: 34px;\n}\n\n.switch input {\n  display: none;\n  padding-top: 100px;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  float: left;\n  right: 0;\n  bottom: 0;\n  background-color: #ca2222;\n  transition: .4s;\n  border-radius: 100px;\n}\n\n.slider:before {\n  /**\n  COMMENT TO ELIMINATE DOT\n   */\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s;\n  border-radius: 50%;\n}\n\n.switch-wrap {\n  padding-top: 25px;\n}\n\ninput:checked + .slider {\n  background-color: #2ab934;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(65px);\n}\n\n/*------ ADDED CSS ---------*/\n\n.slider:after {\n  text-align: center;\n  content: 'off';\n  color: white;\n  display: block;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  font-size: 10px;\n  font-family: Verdana, sans-serif;\n}\n\ninput:checked + .slider:after {\n  content: 'on';\n}\n\n/*--------- END --------*/\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n  <link href=\"https://fonts.googleapis.com/css?family=Catamaran|Cormorant+Garamond\" rel=\"stylesheet\">\n  <link rel=\"stylesheet\"\n        href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n</head>\n<body>\n<header>\n  <a routerLink=\"/home\" (click)=\"name()\" class=\"header-brand\" routerLinkActive=\"active\">will Angell James</a>\n\n  <nav>\n    <ul>\n      <li><a *ngIf=\"router.url != '/portfolio'\" style=\"text-decoration: none\" (click)=\"portfolio()\" routerLink=\"/portfolio\" class=\"portfolio\"\n             routerLinkActive=\"active\"  class=\"animated bounceInDown\">Portfolio</a></li>\n      <li><a *ngIf=\"router.url != '/portfolio'\" class=\"animated bounceInDown\" (click)=\"about()\" style=\"text-decoration: none; cursor:pointer;\" routerLinkActive=\"active\">About</a></li>\n      <li><a *ngIf=\"router.url != '/portfolio'\" class=\"animated bounceInDown\" (click)=\"contact()\" style=\"text-decoration: none; cursor: pointer\" routerLinkActive=\"active\">Contact</a>\n      <li><a *ngIf=\"router.url == '/portfolio'\" routerLink=\"/home\" style=\"text-decoration: none; cursor: pointer\" class=\"animated bounceInDown delay-1s back\" routerLinkActive=\"active\">Back</a>\n      </li>\n      <!--<li>-->\n      <!--<div class=\"switch-wrap\">-->\n      <!--<label class=\"switch\"><input type=\"checkbox\" id=\"togBtn\">-->\n      <!--<div class=\"slider round\">-->\n      <!--</div>-->\n      <!--</label>-->\n      <!--</div>-->\n      <!--</li>-->\n    </ul>\n  </nav>\n</header>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        var _this = this;
        this.router = router;
        this.handleRouteChange = function () {
            if (_this.router.url.includes('portfolio')) {
                alert('hi');
            }
        };
        router.events.subscribe(function () { return (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) && _this.handleRouteChange(); });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.contact = function () {
        window.scrollTo({
            top: 4000,
            behavior: 'smooth'
        });
    };
    HeaderComponent.prototype.portfolio = function () {
        // window.location.href = ('/portfolio');
    };
    HeaderComponent.prototype.about = function () {
        window.scrollTo({
            top: 900,
            behavior: 'smooth'
        });
    };
    HeaderComponent.prototype.name = function () {
        window.scrollTo({
            top: 110,
            behavior: 'smooth'
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner></app-banner>\n<app-options></app-options>\n<app-skills></app-skills>\n<app-bottom></app-bottom>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/info/info.component.css":
/*!*****************************************!*\
  !*** ./src/app/info/info.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  margin: 0 auto;\n  padding: 0 auto;\n}\n\n.container {\n  letter-spacing: 5px;\n  color: black;\n}\n\n"

/***/ }),

/***/ "./src/app/info/info.component.html":
/*!******************************************!*\
  !*** ./src/app/info/info.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <div class=\"container\">\n    <div class=\"text-center color-white col-sm-12 col-lg-12\">\n      <p>\n\n        © Will Angell-James | william@berwickestate.co.uk | (857) 225-4620\n      </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/info/info.component.ts":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.css */ "./src/app/info/info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/mid/mid.component.css":
/*!***************************************!*\
  !*** ./src/app/mid/mid.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  width: 100px;\n  height: 15px;\n  color: white;\n}\n\nbody:hover {\n  cursor: default;\n}\n"

/***/ }),

/***/ "./src/app/mid/mid.component.html":
/*!****************************************!*\
  !*** ./src/app/mid/mid.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<body>\nHello\n</body>\n\n\n</html>\n"

/***/ }),

/***/ "./src/app/mid/mid.component.ts":
/*!**************************************!*\
  !*** ./src/app/mid/mid.component.ts ***!
  \**************************************/
/*! exports provided: MidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MidComponent", function() { return MidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MidComponent = /** @class */ (function () {
    function MidComponent() {
    }
    MidComponent.prototype.ngOnInit = function () {
    };
    MidComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mid',
            template: __webpack_require__(/*! ./mid.component.html */ "./src/app/mid/mid.component.html"),
            styles: [__webpack_require__(/*! ./mid.component.css */ "./src/app/mid/mid.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MidComponent);
    return MidComponent;
}());



/***/ }),

/***/ "./src/app/options/options.component.css":
/*!***********************************************!*\
  !*** ./src/app/options/options.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 1000px) {\n\n  .index-links a {\n    text-decoration: none;\n  }\n\n  .index-links div {\n    margin: 0 auto;\n    height: 260px;\n    float: left;\n    text-decoration: none;\n    align-items: center;\n  }\n\n  .index-boxlink-rectangle {\n    width: calc(50% - 60px) !important;\n    opacity: 0.6;\n    transition: 1s;\n  }\n\n  .index-boxlink-rectangle-long {\n    width: calc(50% - 60px) !important;\n    opacity: 0.6;\n    transition: 1s;\n    margin: 200px;\n  }\n}\n\n\n\n\n.index-links a {\n  text-decoration: none;\n}\n\n\n\n\n.index-links div {\n  margin: 16px 16px 20px 20px;\n  width: 100%;\n  height: 100px;\n  background-color: #f2f2f2;\n}\n\n\n\n\n.whole-wrapper {\n  background-color: #f3f3f3;\n}\n\n\n\n\n.wrapper {\n  width: 100%;\n  margin: 0 auto;\n\n}\n\n\n\n\n.index-links div:hover {\n  /*display: inline-block;*/\n  background-color: #f44336;\n  transition: 1.5s;\n  opacity: 0.8;\n}\n\n\n\n\n.index-links div:hover h3{\n  color:white;\n  transition: 1s;\n  opacity: 0.8;\n}\n\n\n\n\n.index-links div h3 {\n  font-family: 'Catamaran', sans-serif;\n  font-size: 28px;\n  font-weight: 600;\n  line-height: 100px;\n  color: #111;\n  text-align: center;\n  text-transform: uppercase;\n  text-decoration: none;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/options/options.component.html":
/*!************************************************!*\
  !*** ./src/app/options/options.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n  <link href=\"https://fonts.googleapis.com/css?family=Catamaran|Cormorant+Garamond\" rel=\"stylesheet\">\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.2.0/css/all.css\"\n        integrity=\"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ\" crossorigin=\"anonymous\">\n  <link href=\"../../../node_modules/animate.css\">\n</head>\n\n<div class=\"whole-wrapper delay-2s\">\n\n  <div class=\"wrapper\">\n\n    <section class=\"index-links\" style=\"overflow: hidden; resize: none\">\n\n      <a href=\"https://github.com/cwaj400\">\n        <div class=\"index-boxlink-rectangle\" style=\"overflow: hidden; resize: none\" data-aos=\"slide-up\">\n          <h3 style=\"text-decoration: none\">Github</h3>\n        </div>\n      </a>\n\n      <a (click)=\"downloadPDF()\">\n        <div class=\"index-boxlink-rectangle\" style=\"overflow: hidden; resize: none\"  data-aos=\"slide-up\">\n          <h3 style=\"text-decoration: none;\">View Resume</h3>\n        </div>\n      </a>\n\n      <a href=\"https://soundcloud.com/4am-4\">\n        <div class=\"index-boxlink-rectangle-long\" style=\"overflow: hidden; resize: none\" data-aos=\"slide-up\">\n          <h3 style=\"text-decoration: none;\">Music</h3>\n        </div>\n      </a>\n\n      <a href=\"https://linkedin.com/in/will-angell-james-48a354118/\">\n        <div class=\"index-boxlink-rectangle-long\" style=\"overflow: hidden; resize: none\" data-aos=\"slide-up\">\n          <h3 style=\"text-decoration: none;\">LinkedIn</h3>\n        </div>\n      </a>\n\n    </section>\n  </div>\n</div>\n\n</html>\n"

/***/ }),

/***/ "./src/app/options/options.component.ts":
/*!**********************************************!*\
  !*** ./src/app/options/options.component.ts ***!
  \**********************************************/
/*! exports provided: OptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsComponent", function() { return OptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OptionsComponent = /** @class */ (function () {
    function OptionsComponent() {
    }
    OptionsComponent.prototype.ngOnInit = function () {
    };
    OptionsComponent.prototype.downloadPDF = function () {
        window.open('/cv.pdf', '_blank', 'fullscreen=yes');
        return false;
    };
    OptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-options',
            template: __webpack_require__(/*! ./options.component.html */ "./src/app/options/options.component.html"),
            styles: [__webpack_require__(/*! ./options.component.css */ "./src/app/options/options.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OptionsComponent);
    return OptionsComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\nbody {\n  margin: 0;\n  background: #0b0b0b;\n}\n\nheader {\n  max-resolution: .5vw;\n  font-size: 0;\n  display: -ms-flexbox;\n  -webkit-flex-wrap: wrap;\n  flex-flow: row wrap;\n  display: flex;\n}\n\nheader div {\n  flex: auto;\n  width: 200px;\n  margin: .5vw;\n\n\n\n}\n\nheader div img:hover {\n  -webkit-filter: blur(20px);\n          filter: blur(20px);\n  transition: 2s;\n}\n\nheader div img:after {\n  -webkit-filter: blur(20px);\n          filter: blur(20px);\n  transition: 2s;\n}\n\nheader div img {\n  width: 100%;\n  height: auto;\n}\n\n@media screen and (max-width: 400px) {\n  header div {\n    margin: 0;\n  }\n\n  header{\n    padding: 0;\n  }\n}\n"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n<header class=\"animated fadeInRight\" >\n  <div class=\"grid-box resize\"><img src=\"../../assets/ticker.jpg\"></div>\n  <div class=\"grid-box resize\"><img src=\"../../assets/snow.jpg\"></div>\n  <div class=\"grid-box resize\"><img src=\"../../assets/snow.jpg\"></div>\n  <div class=\"grid-box resize\"><img src=\"../../assets/snow.jpg\"></div>\n  <div class=\"grid-box resize\"><img src=\"../../assets/suit.jpg\"></div>\n  <div class=\"grid-box resize\"><img src=\"../../assets/suit.jpg\"></div>\n</header>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 640px) {\n  .flex-container {\n    flex-direction: column;\n    flex-wrap: wrap;\n    display: block;\n    align-items: stretch;\n  }\n\n  .who-am-i {\n    display: inline-block;\n    flex-direction: column;\n    text-align: center;\n    flex: auto;\n  }\n\n}\n\n.flex-container {\n  display: flex;\n  flex-direction: row;\n}\n\n.bottom-skill {\n  margin-top: 100px;\n}\n\nsection {\n  color: white;\n}\n\n/*sectiontitle, Who Am I*/\n\nh2 {\n  text-shadow: gold 1px 1px;\n  font-weight: bolder;\n}\n\n.who-am-i {\n  letter-spacing: 2px;\n  font-family: inherit;\n  margin: 30px 100px 40px 40px;\n  width: 33%;\n  line-height: 1cm;\n\n  -webkit-filter: blur(0px);\n  -moz-filter: blur(0px);\n  -o-filter: blur(0px);\n  -ms-filter: blur(13px);\n  filter: blur(0px);\n  font-size: 15px;\n}\n\n.fa {\n  color: red;\n}\n\nh3 {\n  text-shadow: blue 1px 0;\n  font-size: 8px;\n  text-transform: uppercase;\n  color: #ccc;\n  letter-spacing: 5px;\n  padding-bottom: 0;\n  padding-top: 0;\n\n}\n\n.first-skills-col, .second-skills-col {\n  -webkit-filter: blur(0px);\n  -moz-filter: blur(0px);\n  -o-filter: blur(0px);\n  -ms-filter: blur(13px);\n  filter: blur(0px);\n\n  letter-spacing: 1px;\n  font-family: inherit;\n  margin: 50px 0 40px 40px;\n  width: 33%;\n  line-height: 1cm;\n  font-size: 15px;\n\n}\n\nh4 {\n  font-size: 20px;\n}\n\n.introduction {\n  /*!*background: burlywood;*!*/\n\n  /*!*IMAGES*!*/\n  /*!*height: calc(100vh - 100px);*!*/\n\n  -webkit-filter: blur(20%);\n  -moz-filter: blur(20%);\n  -o-filter: blur(20%);\n  -ms-filter: blur(20%);\n  filter: blur(20%);\n  background-image: url('cubic.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n  background-size: cover;\n  display: flex;\n  margin: 0;\n  text-align: left;\n  overflow: hidden;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n"

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n  <link href=\"https://fonts.googleapis.com/css?family=Catamaran|Cormorant+Garamond\" rel=\"stylesheet\">\n</head>\n\n\n<section id=\"about\" class=\"flex-container introduction scrollto\">\n\n\n  <div class=\"who-am-i\">\n    <h3>Success</h3>\n    <h2 class=\"section-title\">Who Am I</h2>\n    <br>\n\n    <p class=\"section-subtitle\">Will Angell-James is an English-turned-Bostonian athlete who's academic and\n      sporting achievements earned him a scholarship to study Computer Science and Philosophy at Northeastern\n      University, in America.\n      <br>\n      <br>\n      Despite graduating in Fall 2018, Will spends much of his free time taking additional classes to further\n      his\n      iOS and Web Development capabilities.\n      <br> Beyond his interest in software development, Will enjoys producing music, skiing, scuba-diving, and\n      playing the banjo!\n  </div>\n\n\n  <!--First Skills Column -->\n\n  <div class=\"first-skills-col\">\n    <i class=\"fa fa-rocket fa-2x\"></i>\n    <h4>Languages</h4>\n    <p>Will is proficient in Java\n      and has working knowledge of Javascript, Python, HTML, CSS, SQL\n      and Swift\n    </p>\n\n    <!--Icon-->\n    <i class=\"fa fa-power-off fa-2x bottom-skill\"></i>\n    <h4>Frameworks</h4>\n    <p>He has used a variety of frameworks and has done projects on each one to learn of their technicalities.\n      These include AngularJS, React, Node.js, Electron, MongoDB, MySQL, Express.js\n      and React Native. Most of his projects can be found in his github</p>\n  </div>\n\n\n  <!--second skills column-->\n\n  <div class=\"second-skills-col\">\n    <i class=\"fa fa-bolt fa-2x\"></i>\n    <h4>Management</h4>\n    <p>Will has had a variety of professional roles, most notable is his work at the Northeastern Art\n      Gallery\n      where\n      he managed a team of 40 people to ensure consistency and quality of shows</p>\n\n    <i class=\"fa fa-fighter-jet fa-2x bottom-skill\"></i>\n    <h4>Sports</h4>\n    <p>In addition to his plethora of knowledge, Will spends a lot of time on the river refining his rowing technique. He is\n      also an avid runner and skier</p>\n  </div>\n\n</section>\n\n</html>\n"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
        aos__WEBPACK_IMPORTED_MODULE_1__["init"]({
            duration: 1200,
        });
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/social-buttons/social-buttons.component.css":
/*!*************************************************************!*\
  !*** ./src/app/social-buttons/social-buttons.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  width: 100%;\n  height: 70px;\n  background-color: #B88C4B;\n  justify-content: center;\n}\n\n\n.fa {\n  padding: 10px;\n  font-size: 30px;\n  text-align: center;\n  text-decoration: none;\n}\n\n\n.fa:hover {\n  color: white;\n  opacity: 0.8;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/social-buttons/social-buttons.component.html":
/*!**************************************************************!*\
  !*** ./src/app/social-buttons/social-buttons.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n  <link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n</head>\n<body>\n\n<a style=\"color: black;\" href=\"https://twitter.com/WillAngellJame1\"><i class=\"icons fa fa-twitter\"></i></a>\n<a style=\"color: black;\" href=\"https://www.linkedin.com/in/will-angell-james-48a354118/\"><i\n  class=\"icons fa fa-linkedin\"></i></a>\n<a style=\"color: black;\" href=\"https://github.com/cwaj400\"><i class=\"icons fa fa-github\"></i></a>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/social-buttons/social-buttons.component.ts":
/*!************************************************************!*\
  !*** ./src/app/social-buttons/social-buttons.component.ts ***!
  \************************************************************/
/*! exports provided: SocialButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialButtonsComponent", function() { return SocialButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialButtonsComponent = /** @class */ (function () {
    function SocialButtonsComponent() {
    }
    SocialButtonsComponent.prototype.ngOnInit = function () {
    };
    SocialButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-buttons',
            template: __webpack_require__(/*! ./social-buttons.component.html */ "./src/app/social-buttons/social-buttons.component.html"),
            styles: [__webpack_require__(/*! ./social-buttons.component.css */ "./src/app/social-buttons/social-buttons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialButtonsComponent);
    return SocialButtonsComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/williamangell-james/Documents/website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
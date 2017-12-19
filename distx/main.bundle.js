webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");

var API = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].api;


/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<main>\n\t<router-outlet>\n\t</router-outlet>\n</main>\n\n\n<footer>\n\t\t<div style=\"width: 25px; display: block; margin: 0 auto;\">\n\t\t  <svg style=\"margin: 0 auto\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t\t     width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n\t\t    <rect x=\"0\" y=\"0\" width=\"4\" height=\"7\" fill=\"#fff\">\n\t\t      <animateTransform  attributeType=\"xml\"\n\t\t        attributeName=\"transform\" type=\"scale\"\n\t\t        values=\"1,1; 1,3; 1,1\"\n\t\t        begin=\"0s\" dur=\"0.6s\" repeatCount=\"indefinite\" />       \n\t\t    </rect>\n\n\t\t    <rect x=\"10\" y=\"0\" width=\"4\" height=\"7\" fill=\"#fff\">\n\t\t      <animateTransform  attributeType=\"xml\"\n\t\t        attributeName=\"transform\" type=\"scale\"\n\t\t        values=\"1,1; 1,3; 1,1\"\n\t\t        begin=\"0.2s\" dur=\"0.6s\" repeatCount=\"indefinite\" />       \n\t\t    </rect>\n\t\t    <rect x=\"20\" y=\"0\" width=\"4\" height=\"7\" fill=\"#fff\">\n\t\t      <animateTransform  attributeType=\"xml\"\n\t\t        attributeName=\"transform\" type=\"scale\"\n\t\t        values=\"1,1; 1,3; 1,1\"\n\t\t        begin=\"0.4s\" dur=\"0.6s\" repeatCount=\"indefinite\" />       \n\t\t    </rect>\n\t\t  </svg>\n\t\t</div>\n</footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__questions_service_questions_service__ = __webpack_require__("../../../../../src/app/questions/service/questions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__questions_questions_component__ = __webpack_require__("../../../../../src/app/questions/questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__win_win_component__ = __webpack_require__("../../../../../src/app/win/win.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lose_lose_component__ = __webpack_require__("../../../../../src/app/lose/lose.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// rotas


// serviços


// HTTP

// componentes






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__questions_questions_component__["a" /* QuestionsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__win_win_component__["a" /* WinComponent */],
                __WEBPACK_IMPORTED_MODULE_14__lose_lose_component__["a" /* LoseComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* ROUTES */]),
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */]
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* LOCALE_ID */], useValue: 'pt-BR' }, __WEBPACK_IMPORTED_MODULE_6__home_home_service__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_7__questions_service_questions_service__["a" /* QuestionsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questions_questions_component__ = __webpack_require__("../../../../../src/app/questions/questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__win_win_component__ = __webpack_require__("../../../../../src/app/win/win.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lose_lose_component__ = __webpack_require__("../../../../../src/app/lose/lose.component.ts");




var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'questions/:id', component: __WEBPACK_IMPORTED_MODULE_1__questions_questions_component__["a" /* QuestionsComponent */] },
    { path: 'win', component: __WEBPACK_IMPORTED_MODULE_2__win_win_component__["a" /* WinComponent */] },
    { path: 'lose', component: __WEBPACK_IMPORTED_MODULE_3__lose_lose_component__["a" /* LoseComponent */] }
];


/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header [@row]=\"ready\">\n\t<h1>Teste de conhecimento</h1>\n\t<figure>\n\t\t<img src=\"assets/imagens/background/placa.png\" alt=\"Placa teste de conhecimento\">\n\t</figure>\n</header>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent() {
        this.ready = 'ready';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('row', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('ready', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1 })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('void => ready', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms 0s ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateY(-30px)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0.8, transform: 'translateY(10px)', offset: 0.8 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateY(0px)', offset: 1 })
                    ]))),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('ready => void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms 0s ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateY(0px)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0.8, transform: 'translateY(-10px)', offset: 0.2 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateY(30px)', offset: 1 })
                    ])))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"home\">\n\t<article>\n\t\t<ul class=\"materias\">\n\t\t\t<li *ngFor=\"let item of matters\" [@row]=\"ready\">\n\t\t\t\t<a [routerLink]=\"['/questions', item.id]\" class=\"{{item.id}}\">\n\t\t\t\t\t<img width=\"60\" height=\"\" src=\"{{item.imagePath}}\" alt=\"{{item.name}}\"/>{{item.name}}\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\t</article>\n\t<article>\n\t\t<h2>Veja como funciona</h2>\n\t\t<ul class=\"como-funciona\">\n\t\t\t<li>\n\t\t\t\t<span>1</span>\n\t\t\t\t<p>Selecione <br> uma área acima</p>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<span>2</span>\n\t\t\t\t<p>Escolha a <br> resposta correta</p>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<span>3</span>\n\t\t\t\t<p>Valide <br> seu resultado</p>\n\t\t\t</li>\n\t\t</ul>\n\t</article>\n</section>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(mattersService) {
        this.mattersService = mattersService;
        this.ready = 'ready';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mattersService.matters()
            .subscribe(function (matters) { return _this.matters = matters; });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* trigger */])('row', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('ready', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1 })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('void => ready', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('300ms 0s ease-in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateY(-30px)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0.8, transform: 'translateY(10px)', offset: 0.8 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateY(0px)', offset: 1 })
                    ]))),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('ready => void', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('300ms 0s ease-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateY(0px)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0.8, transform: 'translateY(-10px)', offset: 0.2 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateY(30px)', offset: 1 })
                    ])))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_api__ = __webpack_require__("../../../../../src/app/app.api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
    }
    HomeService.prototype.matters = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_api__["a" /* API */] + "/matters");
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "../../../../../src/app/lose/lose.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"questao\" [@row]=\"ready\">\n\t<header>\n\t\t<p class=\"finish\">Você errou {{qtdErros}} de 5 questões  - Continue tentando!</p>\n\t</header>\n\n\t<article class=\"finish\">\n\t\t<figure>\n\t\t\t<img width=\"200\" height=\"\" src=\"assets/svg/game-over.svg\" alt=\"\" /> \n\t\t</figure>\n\t\t<a [routerLink]=\"['/']\" class=\"inicio\">Inicio</a>\n\t</article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/lose/lose.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questions_service_questions_service__ = __webpack_require__("../../../../../src/app/questions/service/questions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoseComponent = (function () {
    function LoseComponent(questionsService) {
        this.questionsService = questionsService;
        this.ready = 'ready';
    }
    LoseComponent.prototype.ngOnInit = function () {
        this.qtdErros = this.questionsService.errou.length;
    };
    LoseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lose',
            template: __webpack_require__("../../../../../src/app/lose/lose.component.html"),
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* trigger */])('row', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('ready', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1 })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('void => ready', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('300ms 0s ease-in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateY(-30px)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0.8, transform: 'translateY(10px)', offset: 0.8 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateY(0px)', offset: 1 })
                    ]))),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('ready => void', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('300ms 0s ease-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateY(0px)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0.8, transform: 'translateY(-10px)', offset: 0.2 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateY(30px)', offset: 1 })
                    ])))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__questions_service_questions_service__["a" /* QuestionsService */]])
    ], LoseComponent);
    return LoseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/questions/questions.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"questao\">\n\t<header [@row]=\"ready\">\n\n\t\t<div>\n\t\t\t<div *ngIf=\"!play; else elseBlock\" >\n\t\t\t\t<div class=\"acoes\">\n\t\t\t\t\t<a [routerLink]=\"['/']\">Desistir</a>\n\t\t\t\t</div>\n\t\t\t\t<p>\n\t\t\t\t\tOi, tudo bem?  <br /> <br /> \n\t\t\t\t\tSerão 5 perguntas e você precisa responder pelo menos 4 alternativas corretamente para obter um bom resultado. <br> vamos lá?\n\t\t\t\t</p>\n\t\t\t\t<button type=\"button\" (click)=\"continuar()\">Começar</button>\n\t\t\t</div>\n\t\t\t<ng-template #elseBlock>\n\t\t\t\t<span *ngFor=\"let item of objeto\">{{item.question}}</span>\n\n\t\t\t\t<div class=\"acoes\">\n\t\t\t\t\t<a [routerLink]=\"['/']\">Desistir</a>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t</div>\n\t</header>\n\t<article class=\"alternativas\">\n\n\t\t<form *ngIf=\"play\" [formGroup]=\"optionsForm\" novalidate>\n\t\t\t<ul>\n\t\t\t\t<li *ngFor=\"let option of options; let i = index\" [@row]=\"ready\">\n\t\t\t\t\t<input type=\"checkbox\" id=\"{{questions.id}}-{{i}}\"\n\t\t\t\t\tname=\"{{questions.id}}-{{i}}\" (change)=\"onChange(option, $event.target.checked)\"\n\t\t\t\t\t>\n\t\t\t\t\t<label for=\"{{questions.id}}-{{i}}\">{{option}}</label>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<div *ngIf=\"visible\">\n\t\t\t\t<div class=\"status-win\" *ngIf=\"status; else lose\">\t<strong>Parabéns! </strong>resposta Correta</div>\n\t\t\t\t<ng-template #lose>\n\t\t\t\t\t<div class=\"status-lose\">\n\t\t\t\t\t\t<strong>Você errou! </strong>- a resposta correta é {{respostaCorreta}}\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t\t<button type=\"button\" [disabled]=\"!optionsForm.valid\" (click)=\"start()\">\n\t\t\t\t<div *ngIf=\"!end\">\n\t\t\t\t\t<span *ngIf=\"!visible\">Confirmar</span>\n\t\t\t\t\t<span *ngIf=\"visible\">Continuar</span>\n\t\t\t\t</div>\n\t\t\t\t<span *ngIf=\"end\">Resultado</span>\n\t\t\t</button>\n\n\t\t</form>\n\n\t</article>\n</section>"

/***/ }),

/***/ "../../../../../src/app/questions/questions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_questions_service__ = __webpack_require__("../../../../../src/app/questions/service/questions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuestionsComponent = (function () {
    function QuestionsComponent(questionsService, route, formBuilder, router) {
        this.questionsService = questionsService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.router = router;
        this.ready = 'ready';
        this.objeto = [];
        this.options = [];
        this.play = false;
        this.visible = false;
        this.status = false;
        this.end = false;
        this.cont = 1;
        this.errou = [];
        this.acertou = [];
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionsService.questionById(this.route.snapshot.params['id']).subscribe(function (question) { return _this.questions = question; }, function (request) { return console.log('Deu erro'); }, function () { return _this.start(); });
        this.optionsForm = this.formBuilder.group({
            options: this.formBuilder.array([], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required)
        });
    };
    QuestionsComponent.prototype.onChange = function (option, isChecked) {
        var myOptions = this.optionsForm.controls.options;
        this.myOptions = myOptions;
        if (isChecked) {
            myOptions.push(new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */](option));
        }
        else {
            var index = myOptions.controls.findIndex(function (x) { return x.value == option; });
            myOptions.removeAt(index);
        }
    };
    QuestionsComponent.prototype.start = function () {
        if (this.end) {
            this.questionsService.resultado(this.acertou, this.errou);
            if (this.acertou.length >= 4) {
                this.router.navigate(['/win']);
            }
            else {
                this.router.navigate(['/lose']);
            }
        }
        var alternatives = this.questions.alternatives;
        var options = [];
        var nao = 'nao';
        var sim = 'sim';
        for (var i in alternatives) {
            if (alternatives[i].ativo === undefined && alternatives[i].ativo != nao) {
                this.questions.alternatives.map(function (q) { return [q, q.ativo = nao, q.respondeu = nao]; });
                return false;
            }
            if (alternatives[i].ativo == nao && alternatives[i].respondeu == nao) {
                this.objeto = [];
                this.resetResponse();
                this.visible = false;
                this.questions.alternatives[i].ativo = sim;
                this.objeto.push(this.questions.alternatives[i]);
                this.extract();
                return false;
            }
            if (alternatives[i].ativo == sim && alternatives[i].respondeu == nao) {
                this.objeto = [];
                this.questions.alternatives[i].ativo = nao;
                this.questions.alternatives[i].respondeu = sim;
                this.objeto.push(this.questions.alternatives[i]);
                this.extract();
                this.result();
                return false;
            }
        }
    };
    QuestionsComponent.prototype.extract = function () {
        this.options = [];
        for (var i in this.objeto) {
            for (var j in this.objeto[i].options) {
                for (var k in this.objeto[i].options[j]) {
                    this.options.push(this.objeto[i].options[j][k]);
                }
            }
        }
    };
    QuestionsComponent.prototype.resetResponse = function () {
        var _this = this;
        if (this.myOptions != undefined) {
            for (var i in this.myOptions.value) {
                var index = this.myOptions.controls.findIndex(function (x) { return x.value == _this.myOptions.value[i]; });
                this.myOptions.removeAt(index);
            }
        }
    };
    QuestionsComponent.prototype.continuar = function () {
        this.play = true;
        this.start();
    };
    QuestionsComponent.prototype.result = function () {
        this.cont++;
        var respostaCorreta = this.objeto[0].response;
        this.respostaCorreta = this.objeto[0].response;
        var resposta = this.myOptions.value[0];
        if (resposta === respostaCorreta && this.myOptions.value.length <= 1) {
            this.visible = true;
            this.status = true;
            this.acertou.push(resposta);
        }
        else {
            this.visible = true;
            this.status = false;
            this.errou.push(resposta);
        }
        if (this.end == false && this.cont > this.questions.alternatives.length) {
            this.end = true;
        }
    };
    QuestionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-questions',
            template: __webpack_require__("../../../../../src/app/questions/questions.component.html"),
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["k" /* trigger */])('row', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* state */])('ready', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ opacity: 1 })),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["j" /* transition */])('void => ready', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])('300ms 0s ease-in', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["f" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateY(-30px)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ opacity: 0.8, transform: 'translateY(10px)', offset: 0.8 }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateY(0px)', offset: 1 })
                    ]))),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["j" /* transition */])('ready => void', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])('300ms 0s ease-out', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["f" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateY(0px)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ opacity: 0.8, transform: 'translateY(-10px)', offset: 0.2 }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateY(30px)', offset: 1 })
                    ])))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_questions_service__["a" /* QuestionsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/questions/service/questions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_api__ = __webpack_require__("../../../../../src/app/app.api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionsService = (function () {
    function QuestionsService(http) {
        this.http = http;
        this.acertou = [];
        this.errou = [];
    }
    QuestionsService.prototype.questionById = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_api__["a" /* API */] + "/questions/" + id);
    };
    QuestionsService.prototype.resultado = function (acertou, errou) {
        this.acertou = acertou;
        this.errou = errou;
    };
    Object.defineProperty(QuestionsService.prototype, "qtdAcertou", {
        get: function () {
            return this.acertou;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionsService.prototype, "qtdErrou", {
        get: function () {
            return this.errou;
        },
        enumerable: true,
        configurable: true
    });
    QuestionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QuestionsService);
    return QuestionsService;
}());



/***/ }),

/***/ "../../../../../src/app/win/win.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"questao\" [@row]=\"ready\">\n\t<header>\n\t\t<p class=\"finish\">Parabéns, você venceu!</p>\n\t</header>\n\n\t<article class=\"finish\">\n\t\t<figure>\n\t\t\t<img width=\"200\" height=\"\" src=\"assets/svg/medalha.svg\" alt=\"\" /> \n\t\t</figure>\n\t\t<a  [routerLink]=\"['/']\" class=\"inicio\">Inicio</a>\n\t</article>\n</section>"

/***/ }),

/***/ "../../../../../src/app/win/win.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WinComponent = (function () {
    function WinComponent() {
        this.ready = 'ready';
    }
    WinComponent.prototype.ngOnInit = function () {
    };
    WinComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-win',
            template: __webpack_require__("../../../../../src/app/win/win.component.html"),
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('row', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('ready', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1 })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('void => ready', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms 0s ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateY(-30px)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0.8, transform: 'translateY(10px)', offset: 0.8 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateY(0px)', offset: 1 })
                    ]))),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('ready => void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms 0s ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateY(0px)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0.8, transform: 'translateY(-10px)', offset: 0.2 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateY(30px)', offset: 1 })
                    ])))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], WinComponent);
    return WinComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    api: 'https://api-conhecimento.herokuapp.com'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/answer/answer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#wrapper {\n    margin: auto;\n}\n\n#content{\n    width: 1000px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/answer/answer.component.html":
/***/ (function(module, exports) {

module.exports = "<p><a [routerLink]=\"['/']\">Home</a> | <a [routerLink]=\"['/show', question_id]\"></a></p>\n<p><a href=\"/logout\">Logout</a></p>\n<div id='content'>\n<div id=\"wrapper\">\n<h3>{{question.question}}</h3>\n<h4 *ngIf=\"question.discription != '' \" >{{question.discription}}</h4>\n\n<form #answerForm=\"ngForm\" (submit)=\"newAnswer()\">\n\n   <p> <label for=\"answer\">Your Answer: </label></p>\n    <textarea cols=\"30\" rows=\"10\" name=\"answer\" required minlength=\"5\" [(ngModel)]=\"userAnswer.answer\" #answer=\"ngModel\"\n    ></textarea>\n    <p><label for=\"details\">Supporting Details(optional)</label></p>\n    <textarea name=\"details\" cols=\"30\" rows=\"10\" [(ngModel)]=\"userAnswer.details\" #details=\"ngModel\"></textarea>\n    <a [routerLink]=\"['/']\"><button>Cancel</button></a> <input type=\"submit\" value=\"Submit\" [disabled]=\"answerForm.invalid\">\n\n</form>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/answer/answer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnswerComponent = (function () {
    function AnswerComponent(_route, _router, _api) {
        this._route = _route;
        this._router = _router;
        this._api = _api;
        this.userAnswer = {
            answer: "",
            details: ""
        };
    }
    AnswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.questionId = params.id;
            _this.question;
            _this.findQuestion();
        });
    };
    AnswerComponent.prototype.findQuestion = function () {
        var _this = this;
        this._api.getQuestion({ id: this.questionId }).subscribe(function (res) {
            _this.question = res.json();
        });
    };
    AnswerComponent.prototype.newAnswer = function () {
        var _this = this;
        this._api.addAnswer({ question: this.questionId, answer: this.userAnswer.answer, details: this.userAnswer.details }).subscribe(function (res) {
            if (res.json().message == 'success') {
                _this._router.navigate(['/']);
            }
        });
    };
    return AnswerComponent;
}());
AnswerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-answer',
        template: __webpack_require__("../../../../../src/app/answer/answer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/answer/answer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */]) === "function" && _c || Object])
], AnswerComponent);

var _a, _b, _c;
//# sourceMappingURL=answer.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__show_show_component__ = __webpack_require__("../../../../../src/app/show/show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__answer_answer_component__ = __webpack_require__("../../../../../src/app/answer/answer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__new_question_new_question_component__ = __webpack_require__("../../../../../src/app/new-question/new-question.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        pathMatch: "full",
        component: __WEBPACK_IMPORTED_MODULE_3__index_index_component__["a" /* IndexComponent */]
    },
    {
        path: 'login',
        pathMatch: "full",
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'new-question',
        pathMatch: "full",
        component: __WEBPACK_IMPORTED_MODULE_6__new_question_new_question_component__["a" /* NewQuestionComponent */]
    },
    {
        path: 'answer/:id',
        pathMatch: "full",
        component: __WEBPACK_IMPORTED_MODULE_5__answer_answer_component__["a" /* AnswerComponent */]
    },
    {
        path: 'show/:id',
        pathMatch: "full",
        component: __WEBPACK_IMPORTED_MODULE_4__show_show_component__["a" /* ShowComponent */]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__new_question_new_question_component__ = __webpack_require__("../../../../../src/app/new-question/new-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__show_show_component__ = __webpack_require__("../../../../../src/app/show/show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__answer_answer_component__ = __webpack_require__("../../../../../src/app/answer/answer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_9__new_question_new_question_component__["a" /* NewQuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_10__show_show_component__["a" /* ShowComponent */],
            __WEBPACK_IMPORTED_MODULE_11__answer_answer_component__["a" /* AnswerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__main_service__["a" /* MainService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n    border-collapse: collapse;\n}\n\ntable, th, td {\n    border: 1px solid black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Hi {{user.username}}</h1>\n<p><a href=\"/logout\">Logout</a></p>\n<p><a [routerLink]=\"['new-question']\">Add a Question</a></p>\n\n<p>Search: <input type=\"text\" (keyup)=\"search()\" name=\"searchString\"  [(ngModel)]=\"searchString\" ></p>\n\n<table>\n  <tr>\n    <th>Question</th>\n    <th>Answer</th>\n    <th>Action</th>\n  </tr>\n  <tr *ngFor=\"let question of questions\">\n    <td>{{question.question}}</td>\n    <td>{{question.answers.length}}</td>\n    <td><a [routerLink]=\"['/show', question._id]\">Show</a>  <a [routerLink]=\"['/answer', question._id]\">Answer</a></td>\n  </tr>\n\n</table>"

/***/ }),

/***/ "../../../../../src/app/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexComponent = (function () {
    function IndexComponent(_api, _router) {
        this._api = _api;
        this._router = _router;
        this.user = {
            username: ''
        };
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.user;
        this.searchString = "";
        this.questions = [];
        this.filteredQuestions = [];
        this.getUser();
        this.getQuestions();
    };
    IndexComponent.prototype.getUser = function () {
        var _this = this;
        this._api.findUser().subscribe(function (res) {
            if (res.json().message == "login") {
                _this._router.navigate(["/login"]);
            }
            else {
                _this.user = res.json();
            }
        });
    };
    IndexComponent.prototype.getQuestions = function () {
        var _this = this;
        this._api.findQuestions().subscribe(function (res) {
            _this.questions = res.json();
            _this.filteredQuestions = res.json();
        });
    };
    IndexComponent.prototype.search = function () {
        var _this = this;
        this.questions = this.filteredQuestions.filter(function (question) {
            return question.question.toLowerCase().includes(_this.searchString) || question.discription.toLowerCase().includes(_this.searchString);
        });
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-index',
        template: __webpack_require__("../../../../../src/app/index/index.component.html"),
        styles: [__webpack_require__("../../../../../src/app/index/index.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], IndexComponent);

var _a, _b;
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Q and A</h1>\n\n<form #userForm=\"ngForm\" (submit)=\"login()\">\n<p>Name: <input type=\"text\" \n  name=\"username\"\n  required\n  minlength=\"2\"\n  [(ngModel)]=\"user.username\"\n  #username=\"ngModel\"></p>\n<input type=\"submit\" value=\"Enter\" [disabled]=\"userForm.invalid\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_api, _router) {
        this._api = _api;
        this._router = _router;
        this.user = {
            username: ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._api.signIn(this.user).subscribe(function (res) {
            if (res.json().message == "success") {
                _this._router.navigate(["/"]);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/main.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainService = (function () {
    function MainService(_http) {
        this._http = _http;
    }
    MainService.prototype.signIn = function (userData) {
        return this._http.post('/login', userData);
    };
    MainService.prototype.findUser = function () {
        return this._http.get('/getUser');
    };
    MainService.prototype.submitQuestion = function (question) {
        return this._http.post('/newQuestion', question);
    };
    MainService.prototype.findQuestions = function () {
        return this._http.get('/getQuestions');
    };
    MainService.prototype.getQuestion = function (questId) {
        return this._http.post('/oneQuestion', questId);
    };
    MainService.prototype.addAnswer = function (answer) {
        return this._http.post('/addAnswer', answer);
    };
    MainService.prototype.increaseLike = function (answer) {
        return this._http.post('/addlike', answer);
    };
    return MainService;
}());
MainService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MainService);

var _a;
//# sourceMappingURL=main.service.js.map

/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.html":
/***/ (function(module, exports) {

module.exports = "<p><a [routerLink]=\"['/']\">Home</a></p>\n<p><a href=\"/logout\">Logout</a></p>\n\n<h1>New Question</h1>\n\n<form #questionForm=\"ngForm\" (submit)=\"newQuestion()\">\n  <p><label for=\"question\">Question</label></p> <p>\n<textarea cols=\"30\" rows=\"10\" name=\"question\" required minlength=\"10\" [(ngModel)]=\"userQuestion.question\" #question=\"ngModel\"\n></textarea></p>\n<p><label for=\"discription\">Discription(optional)</label></p><p>\n<textarea name=\"description\" cols=\"30\" rows=\"10\" [(ngModel)]=\"userQuestion.discription\" #discription=\"ngModel\"></textarea>\n<a [routerLink]=\"['/']\"><button>Cancel</button></a> <input type=\"submit\" value=\"Submit\" [disabled]=\"questionForm.invalid\">\n</p></form>"

/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewQuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewQuestionComponent = (function () {
    function NewQuestionComponent(_api, _router) {
        this._api = _api;
        this._router = _router;
        this.userQuestion = {
            question: "",
            discription: ''
        };
    }
    NewQuestionComponent.prototype.ngOnInit = function () {
        this.userQuestion;
    };
    NewQuestionComponent.prototype.newQuestion = function () {
        var _this = this;
        this._api.submitQuestion(this.userQuestion).subscribe(function (res) {
            if (res.json().message == "added") {
                _this._router.navigate(['/']);
            }
        });
    };
    return NewQuestionComponent;
}());
NewQuestionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-new-question',
        template: __webpack_require__("../../../../../src/app/new-question/new-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-question/new-question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], NewQuestionComponent);

var _a, _b;
//# sourceMappingURL=new-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/show/show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/show/show.component.html":
/***/ (function(module, exports) {

module.exports = "<p><a [routerLink]=\"['/']\">Home</a> | <a [routerLink]=\"['/answer', question._id]\">Answer the question</a></p>\n<p><a href=\"/logout\">Logout</a></p>\n\n<h3>{{question.question}}</h3>\n<h4 *ngIf=\"question.discription != '' \" >{{question.discription}}</h4>\n\n<hr>\n<div id=\"answer\" *ngFor=\"let answer of question.answers\" >\n  <p>{{answer._user.username}}</p>\n  <p>{{answer.answer}}</p>\n  <p *ngIf=\"answer.details != '' \" >{{answer.details}}</p>\n  <p> {{answer.likes}} <button (click)=\"addLike(answer._id)\">Like!</button></p>\n  <hr>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/show/show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowComponent = (function () {
    function ShowComponent(_route, _api) {
        this._route = _route;
        this._api = _api;
        this.question = {
            _id: "",
            question: "",
            discription: "",
            answers: [],
            _user: []
        };
        this.questionId = "";
    }
    ShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.question;
        this._route.params.subscribe(function (params) {
            _this.questionId = params.id;
            _this.findQuestion();
        });
    };
    ShowComponent.prototype.findQuestion = function () {
        var _this = this;
        this._api.getQuestion({ id: this.questionId }).subscribe(function (res) {
            _this.question = res.json();
        });
    };
    ShowComponent.prototype.addLike = function (answerId) {
        var _this = this;
        this._api.increaseLike({ id: answerId }).subscribe(function (res) {
            _this.findQuestion();
        });
    };
    return ShowComponent;
}());
ShowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-show',
        template: __webpack_require__("../../../../../src/app/show/show.component.html"),
        styles: [__webpack_require__("../../../../../src/app/show/show.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */]) === "function" && _b || Object])
], ShowComponent);

var _a, _b;
//# sourceMappingURL=show.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
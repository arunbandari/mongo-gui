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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"sidenav\">\n    <app-sidenav (opened)=\"open($event)\"></app-sidenav>\n  </div>\n  <div class=\"content\">\n    <!-- <div class=\"tab_area\">\n      <ul class=\"tab_ui\">\n        <li\n          *ngFor=\"let tab of tabs; let index = index\"\n          class=\"tablink\"\n          (click)=\"openTab(index)\"\n          [ngClass]=\"index === activeTabIndex ? 'active' : ''\"\n        >\n          <span class=\"fa-li\"><i class=\"fas fa-times\"></i></span>\n          <strong>{{ tab.database }}</strong\n          >.{{ tab.collection }}\n          <i class=\"fas fa-times\" (click)=\"closeTab(tab.id)\"></i>\n        </li>\n      </ul>\n    </div>\n    <div>\n      <div\n        *ngFor=\"let tab of tabs; let index = index\"\n        [ngClass]=\"index === activeTabIndex ? 'show' : 'hide'\"\n      >\n        <app-collection-renderer\n          [database]=\"tab.database\"\n          [collection]=\"tab.collection\"\n        ></app-collection-renderer>\n      </div>\n    </div> -->\n    <nz-tabset [nzType]=\"'card'\" [nzSelectedIndex]=\"activeTabIndex\">\n      <nz-tab *ngFor=\"let tab of tabs\" [nzTitle]=\"titleTemplate\">\n        <ng-template #titleTemplate>\n          <div>\n            <strong>{{ tab.database }}.</strong>{{ tab.collection\n            }}<i\n              nz-icon\n              nzType=\"close\"\n              class=\"ant-tabs-close-x\"\n              (click)=\"closeTab(tab)\"\n            ></i>\n          </div>\n        </ng-template>\n        <app-collection-renderer\n          [database]=\"tab.database\"\n          [collection]=\"tab.collection\"\n        ></app-collection-renderer>\n      </nz-tab>\n    </nz-tabset>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/collection-renderer/collection-renderer.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/collection-renderer/collection-renderer.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div *ngFor=\"let doc of documents\" class=\"document\">\n    <app-json-viewer [data]=\"doc\"></app-json-viewer>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/json-viewer/json-viewer.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/json-viewer/json-viewer.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul>\n  <li\n    *ngFor=\"let row of data | keyvalue: originalOrder\"\n    (click)=\"clicked($event, row)\"\n  >\n    <div class=\"hoverable\">\n      <ng-container [ngSwitch]=\"row.value | type\">\n        <ng-container *ngSwitchCase=\"'string'\"\n          ><span class=\"key\">{{ row.key }}</span\n          >: <span class=\"string value\">\"{{ row.value }}\"</span></ng-container\n        >\n        <ng-container *ngSwitchCase=\"'number'\"\n          ><span class=\"key\">{{ row.key }}</span\n          >: <span class=\"number value\">{{ row.value }}</span></ng-container\n        >\n        <ng-container *ngSwitchCase=\"'boolean'\"\n          ><span class=\"key\">{{ row.key }}</span\n          >: <span class=\"boolean value\">{{ row.value }}</span></ng-container\n        >\n        <ng-container *ngSwitchCase=\"'object'\">\n          <span class=\"key\"\n            ><i\n              class=\"fas fa-server\"\n              *ngIf=\"row.value && !isEmptyObject(row.value)\"\n            ></i>\n            {{ row.key }}</span\n          >: <span class=\"notation\">{{ '{ }' }}</span\n          ><app-json-viewer [data]=\"row.value\"></app-json-viewer>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'array'\">\n          <span class=\"key\"\n            ><i class=\"fas fa-server\" *ngIf=\"row.value && row.value.length\"></i>\n            {{ row.key }}</span\n          >: <span class=\"notation\">{{ '[ ]' }}</span\n          ><app-json-viewer [data]=\"row.value\"></app-json-viewer>\n        </ng-container>\n      </ng-container>\n    </div>\n  </li>\n</ul>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidenav/sidenav.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidenav/sidenav.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"d60\"></div>\n<div class=\"nav\">\n  <ul class=\"fa-ul\" role=\"parent_listing\">\n    <li>\n      <span class=\"fa-li\"><i class=\"fas fa-search\"></i></span\n      ><input\n        class=\"search\"\n        type=\"text\"\n        placeholder=\"Search dbs & collections...\"\n        [(ngModel)]=\"searchText\"\n        (keyup)=\"filter()\"\n      />\n    </li>\n    <li *ngFor=\"let db of displayData\">\n      <a\n        href=\"#\"\n        (click)=\"toggleDB($event)\"\n        class=\"nav_link\"\n        [ngClass]=\"{ open: this.searchText && db.collections && db.collections.length }\"\n        ><span class=\"fa-li\"><i class=\"fas fa-server\"></i></span\n        >{{ db.name }}</a\n      >\n      <ul class=\"col\" *ngIf=\"db.collections.length\">\n        <li *ngFor=\"let collection of db.collections\">\n          <a\n            href=\"#\"\n            (click)=\"openCollection($event)\"\n            class=\"nav_link\"\n            [attr.data-database]=\"db.name\"\n            >{{ collection }}</a\n          >\n        </li>\n      </ul>\n    </li>\n  </ul>\n</div> -->\n<nz-sider nzCollapsible [(nzCollapsed)]=\"isCollapsed\" [nzTrigger]=\"null\">\n  <div class=\"logo\"></div>\n  <ul nz-menu nzTheme=\"dark\" nzMode=\"inline\" [nzInlineCollapsed]=\"isCollapsed\">\n    <ng-container *ngFor=\"let db of displayData\">\n      <li nz-submenu nzIcon=\"database\" nzTitle=\"{{ db.name }}\">\n        <ul>\n          <li nz-menu-item *ngFor=\"let collection of db.collections\">\n            <a\n              href=\"#\"\n              (click)=\"openCollection($event)\"\n              class=\"nav_link\"\n              [attr.data-database]=\"db.name\"\n              nz-tooltip\n              nzTooltipPlacement=\"bottom\"\n              nzTooltipTitle=\"{{ db.name }}\"\n              >{{ collection }}</a\n            >\n          </li>\n        </ul>\n      </li>\n    </ng-container>\n  </ul>\n</nz-sider>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
    }
    getDbs() {
        return this.http.get('http://localhost:3000/databases?includeCollections=true');
    }
    getDocumentsByCollection(dbName, collectionName) {
        return this.http.get(`http://localhost:3000/databases/${dbName}/collections/${collectionName}/documents?limit=100`);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fas {\n  color: grey;\n  position: relative;\n  top: 3px;\n  left: 3px;\n}\n.container {\n  display: grid;\n  grid-template-columns: 2fr 8fr;\n}\n.sidenav {\n  min-height: 100vh;\n  /* box-shadow: 6px 0 6px rgba(0,0,0,.1); */\n  border-right: 1px solid #ddd;\n  background: #001529;\n}\n.show {\n  display: block;\n}\n.hide {\n  display: none;\n}\n.tab_area {\n  border-bottom: 1px solid #ddd;\n  margin-bottom: 16px;\n}\n.tab_ui {\n  padding: 0px 10px;\n  margin: 0;\n  list-style-type: none;\n  display: inline-flex;\n}\nli.tablink {\n  padding: 8px 10px;\n  border: 1px solid transparent;\n  cursor: pointer;\n}\nli.tablink:hover,\nli.tablink.active {\n  border: 1px solid #ddd;\n  border-radius: 10px 10px 0px 0px;\n  border-bottom: none;\n}\n.ant-tabs {\n  font-size: 12px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiwwQ0FBMEM7RUFDMUMsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsU0FBUztFQUNULHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjtBQUNBOztFQUVFLHNCQUFzQjtFQUN0QixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYXMge1xuICBjb2xvcjogZ3JleTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbiAgbGVmdDogM3B4O1xufVxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDhmcjtcbn1cbi5zaWRlbmF2IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIC8qIGJveC1zaGFkb3c6IDZweCAwIDZweCByZ2JhKDAsMCwwLC4xKTsgKi9cbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDtcbiAgYmFja2dyb3VuZDogIzAwMTUyOTtcbn1cbi5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udGFiX2FyZWEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi50YWJfdWkge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxubGkudGFibGluayB7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubGkudGFibGluazpob3ZlcixcbmxpLnRhYmxpbmsuYWN0aXZlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uYW50LXRhYnMge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cbiJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");



let AppComponent = class AppComponent {
    constructor(Api) {
        this.Api = Api;
        this.title = 'mongo-ui-latest';
        this.tabs = [];
        this.activeTabIndex = 0;
    }
    ngOnInit() {
        this.Api.getDocumentsByCollection('local', 'startup_log').subscribe((documents) => {
            this.docs = documents;
        });
    }
    openTab(index) {
        this.activeTabIndex = index;
    }
    open(obj) {
        const tabIndex = this.tabs.findIndex(tab => tab.collection === obj.collectionName);
        if (tabIndex > -1) {
            this.activeTabIndex = tabIndex;
            return;
        }
        this.tabs.push({
            id: Date.now(),
            database: obj.dbName,
            collection: obj.collectionName
        });
        this.activeTabIndex = this.tabs.length - 1;
    }
    closeTab(id) {
        const idx = this.tabs.findIndex(tab => tab.id === id);
        this.tabs.splice(idx, 1);
        if (this.tabs.length) {
            this.activeTabIndex = this.tabs.length - 1;
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _json_viewer_json_viewer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./json-viewer/json-viewer.component */ "./src/app/json-viewer/json-viewer.component.ts");
/* harmony import */ var _collection_renderer_collection_renderer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./collection-renderer/collection-renderer.component */ "./src/app/collection-renderer/collection-renderer.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_7__["SidenavComponent"],
            _json_viewer_json_viewer_component__WEBPACK_IMPORTED_MODULE_10__["JsonViewerComponent"],
            _json_viewer_json_viewer_component__WEBPACK_IMPORTED_MODULE_10__["Type"],
            _collection_renderer_collection_renderer_component__WEBPACK_IMPORTED_MODULE_11__["CollectionRendererComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NgZorroAntdModule"]
        ],
        providers: [_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"], { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["en_US"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/collection-renderer/collection-renderer.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/collection-renderer/collection-renderer.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding: 8px 16px;\n}\n.document {\n  background-color: #ffffff;\n  padding: 8px;\n  margin-bottom: 8px;\n  /* box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) !important; */\n  border: 1px solid #f1f1f1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sbGVjdGlvbi1yZW5kZXJlci9jb2xsZWN0aW9uLXJlbmRlcmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCOzBGQUN3RjtFQUN4Rix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb2xsZWN0aW9uLXJlbmRlcmVyL2NvbGxlY3Rpb24tcmVuZGVyZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBwYWRkaW5nOiA4cHggMTZweDtcbn1cbi5kb2N1bWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAvKiBib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMikgIWltcG9ydGFudDsgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/collection-renderer/collection-renderer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/collection-renderer/collection-renderer.component.ts ***!
  \**********************************************************************/
/*! exports provided: CollectionRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionRendererComponent", function() { return CollectionRendererComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");



let CollectionRendererComponent = class CollectionRendererComponent {
    constructor(API) {
        this.API = API;
    }
    ngOnInit() {
        this.API.getDocumentsByCollection(this.database, this.collection).subscribe((documents) => {
            this.documents = documents;
        });
    }
};
CollectionRendererComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CollectionRendererComponent.prototype, "database", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CollectionRendererComponent.prototype, "collection", void 0);
CollectionRendererComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-collection-renderer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./collection-renderer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/collection-renderer/collection-renderer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./collection-renderer.component.css */ "./src/app/collection-renderer/collection-renderer.component.css")).default]
    })
], CollectionRendererComponent);



/***/ }),

/***/ "./src/app/json-viewer/json-viewer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/json-viewer/json-viewer.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul {\n  list-style-type: none;\n  margin-bottom: 0px;\n}\nul li {\n  cursor: pointer;\n}\nli ul {\n  display: none;\n}\n.open {\n  display: block !important;\n}\n.string {\n  color: green;\n}\n.number {\n  color: blue;\n}\n.boolean {\n  color: firebrick;\n}\n.notation {\n  font-style: italic;\n  color: #999;\n  font-size: 80%;\n}\n.key {\n  font-weight: bold;\n}\n.hoverable {\n  padding: 1px 2px;\n  border-radius: 2px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvanNvbi12aWV3ZXIvanNvbi12aWV3ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2pzb24tdmlld2VyL2pzb24tdmlld2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxudWwgbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5saSB1bCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ub3BlbiB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG4uc3RyaW5nIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuLm51bWJlciB7XG4gIGNvbG9yOiBibHVlO1xufVxuLmJvb2xlYW4ge1xuICBjb2xvcjogZmlyZWJyaWNrO1xufVxuLm5vdGF0aW9uIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC1zaXplOiA4MCU7XG59XG4ua2V5IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaG92ZXJhYmxlIHtcbiAgcGFkZGluZzogMXB4IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/json-viewer/json-viewer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/json-viewer/json-viewer.component.ts ***!
  \******************************************************/
/*! exports provided: JsonViewerComponent, Type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonViewerComponent", function() { return JsonViewerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return Type; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let JsonViewerComponent = class JsonViewerComponent {
    constructor() {
        this.originalOrder = (a, b) => {
            return 0;
        };
    }
    ngOnInit() { }
    clicked(e, row) {
        e.stopPropagation();
        if (typeof row.value === 'object') {
            console.log(e, typeof row.value);
        }
        const targetEl = e.target.tagName === 'I'
            ? e.target.parentNode.parentNode
            : e.target.parentNode;
        const children = targetEl.querySelector('ul') ||
            (targetEl.nextSibling &&
                targetEl.nextSibling.querySelector &&
                targetEl.nextSibling.querySelector('ul'));
        if (children && children.classList) {
            const classList = children.classList;
            if (classList.contains('open')) {
                classList.remove('open');
            }
            else {
                classList.add('open');
            }
        }
    }
    isEmptyObject(obj) {
        return obj && Object.keys(obj).length === 0;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], JsonViewerComponent.prototype, "data", void 0);
JsonViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-json-viewer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./json-viewer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/json-viewer/json-viewer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./json-viewer.component.css */ "./src/app/json-viewer/json-viewer.component.css")).default]
    })
], JsonViewerComponent);

let Type = class Type {
    transform(value) {
        return Array.isArray(value) ? 'array' : typeof value;
    }
};
Type = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'type' })
], Type);



/***/ }),

/***/ "./src/app/sidenav/sidenav.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".trigger {\n  font-size: 18px;\n  line-height: 64px;\n  padding: 0 24px;\n  cursor: pointer;\n  transition: color 0.3s;\n}\n\n.trigger:hover {\n  color: #1890ff;\n}\n\n.logo {\n  height: 32px;\n  background: rgba(255, 255, 255, 0.2);\n  margin: 16px;\n}\n\nnz-header {\n  background: #fff;\n  padding: 0;\n}\n\nnz-content {\n  margin: 0 16px;\n}\n\nnz-breadcrumb {\n  margin: 16px 0;\n}\n\n.inner-content {\n  padding: 24px;\n  background: #fff;\n  min-height: 360px;\n}\n\nnz-footer {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmlnZ2VyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogNjRweDtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG59XG5cbi50cmlnZ2VyOmhvdmVyIHtcbiAgY29sb3I6ICMxODkwZmY7XG59XG5cbi5sb2dvIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIG1hcmdpbjogMTZweDtcbn1cblxubnotaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMDtcbn1cblxubnotY29udGVudCB7XG4gIG1hcmdpbjogMCAxNnB4O1xufVxuXG5uei1icmVhZGNydW1iIHtcbiAgbWFyZ2luOiAxNnB4IDA7XG59XG5cbi5pbm5lci1jb250ZW50IHtcbiAgcGFkZGluZzogMjRweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWluLWhlaWdodDogMzYwcHg7XG59XG5cbm56LWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");




let SidenavComponent = class SidenavComponent {
    constructor(Api) {
        this.Api = Api;
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.displayData = [];
        this.searchText = '';
    }
    ngOnInit() {
        this.Api.getDbs().subscribe((res) => {
            this.dbs = res;
            this.filter();
        });
    }
    filter() {
        this.displayData = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.dbs.databases);
        console.log(this.displayData);
        if (!this.searchText) {
            return;
        }
        const pattern = new RegExp(`.*${this.searchText}.*`, 'gi');
        this.displayData = this.displayData
            .map(db => {
            db.collections = db.collections.filter((col) => pattern.test(col));
            if (db.collections.length) {
                return db;
            }
            return false;
        })
            .filter(Boolean);
    }
    toggleDB(event) {
        event.preventDefault();
        if (event.target.classList.contains('open')) {
            event.target.classList.remove('open');
        }
        else {
            event.target.classList.add('open');
        }
    }
    openCollection(event) {
        event.preventDefault();
        const dbName = event.target.attributes['data-database'].value;
        const collectionName = event.target.innerText;
        if (dbName && collectionName) {
            this.opened.emit({
                dbName,
                collectionName
            });
        }
    }
};
SidenavComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SidenavComponent.prototype, "opened", void 0);
SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidenav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidenav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidenav/sidenav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidenav.component.css */ "./src/app/sidenav/sidenav.component.css")).default]
    })
], SidenavComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/arun/Desktop/mongo-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
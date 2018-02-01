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

/***/ "../../../../../src/app/admin/admin-navbar/admin-navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-navbar/admin-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"purple darken-4\">\n  <div class=\" nav-wrapper container  \">\n    <a href=\"#\" class=\"brand-logo\">Admin Panel</a>\n    <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n      <li><a routerLink=\"/\">Home</a></li>\n      <li><a href=\"badges.html\">Components</a></li>\n      <li><a href=\"collapsible.html\">JavaScript</a></li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-navbar/admin-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminNavbarComponent = (function () {
    function AdminNavbarComponent() {
    }
    AdminNavbarComponent.prototype.ngOnInit = function () {
    };
    AdminNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-navbar',
            template: __webpack_require__("../../../../../src/app/admin/admin-navbar/admin-navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-navbar/admin-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminNavbarComponent);
    return AdminNavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-sidebar/admin-sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\na{\r\n    color: black;\r\n    font-weight:400;\r\n    font-size: 18px\r\n    \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-sidebar/admin-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<br><br>\n\n\n\n  <div class=\"center collection z-depth-3\" style=\"color:#8585e0\">\n    <a routerLink=\"/admin/users-list\" class=\"collection-item\" style=\"color:#8585e0\"><i class=\"left material-icons\">account_circle</i>View All Users</a>\n    <a routerLink=\"/admin/books-list\" class=\"collection-item\" style=\"color:#8585e0\">Books List</a>\n    <a routerLink=\"/admin/book-form\" class=\"collection-item\" style=\"color:#8585e0\">Add Book</a>\n    <a routerLink=\"/admin/category-form\" class=\"collection-item\" style=\"color:#8585e0\">Add Books Category</a>\n    <a routerLink=\"/admin/categories-list\" class=\"collection-item \" style=\"color:#8585e0\">Category List</a>\n    <a routerLink=\"/admin\" class=\"collection-item\" style=\"color:#8585e0\">other</a>\n    <a routerLink=\"/admin\" class=\"collection-item\" style=\"color:#8585e0\">other</a>\n    <a routerLink=\"/admin\" class=\"collection-item\" style=\"color:#8585e0\">other</a>\n    <a routerLink=\"/admin\" class=\"collection-item\" style=\"color:#8585e0\">other</a>\n  </div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-sidebar/admin-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminSidebarComponent = (function () {
    function AdminSidebarComponent() {
    }
    AdminSidebarComponent.prototype.ngOnInit = function () {
    };
    AdminSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-sidebar',
            template: __webpack_require__("../../../../../src/app/admin/admin-sidebar/admin-sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-sidebar/admin-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminSidebarComponent);
    return AdminSidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/book-form/book-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/book-form/book-form.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<br><br><br><br>\n\n  \n <div class=\"row\">\n   <div class=\"col s1\"></div>\n   <div class=\"col s11\">\n     <form class=\"card col s8\" #f=\"ngForm\" (ngSubmit)=\"submit(f)\">\n        <p class=\"center\" style=\"font-size:2ch\">Add Book</p>\n\n        <div class=\"input-field\">\n          <input type=\"text\" id=\"name\" class=\"validate\" required maxlength=\"255\"\n          [(ngModel)]=\"book.name\" name=\"name\" #name=\"ngModel\">\n          <label for=\"name\">Name</label>\n        </div>\n\n        <div class=\"input-field\">\n          <textarea id=\"description\" class=\"materialize-textarea\" required maxlength=\"1024\" [(ngModel)]=\"book.description\" name=\"description\" #description=\"ngModel\"></textarea>\n          <label for=\"description\">description</label>\n        </div>\n\n        <div class=\"input-field\">\n          <input type=\"number\" id=\"price\" class=\"validate\" required  [(ngModel)]=\"book.price\" name=\"price\" #price=\"ngModel\" (change)=\"func(price)\">\n          <label for=\"price\">price</label>\n        </div>\n\n        <div class=\"input-field\">\n          <input type=\"number\" id=\"quantity\" class=\"validate\" required [(ngModel)]=\"book.quantity\" name=\"quantity\" #quantity=\"ngModel\">\n          <label for=\"quantity\">quantity</label>\n        </div>\n\n        <div class=\"input-field\">\n          <input type=\"text\" id=\"pic\" class=\"validate\" [(ngModel)]=\"book.pictureUrl\" name=\"pic\" #pic=\"ngModel\" required >\n          <label for=\"pic\">Picture url</label>\n        </div>\n\n        <div >\n          <mat-form-field>\n            <mat-select placeholder=\"Select Book category\" [(ngModel)]=\"book.categoryId\" name=\"category\" #category=\"ngModel\" >\n              <mat-option *ngFor=\"let c of categories\" [value]=\"c._id\">\n                {{c.name}}\n              </mat-option>     \n            </mat-select>\n          </mat-form-field>\n        </div>\n\n        <button type=\"submit\" [disabled]=\"!f.valid\" class=\"btn right\">Save Book</button>\n\n      </form>\n\n      \n      <div *ngIf=\"!f.valid && f.touched\" class= \"card col s8 red lighten-3\">\n        <div *ngIf=\"name.errors?.required && name.touched\">\n          Name is required\n        </div>\n        <div *ngIf=\"name.errors?.maxLength && name.touched\">\n          Name should be lower than 255 characters\n        </div>\n        <div *ngIf=\"description.errors?.required && description.touched\">\n          Description is required\n        </div>\n        <div *ngIf=\"description.errors?.maxLength && description.touched\">\n          description should be lower than 1000 characters\n        </div>\n\n        <div *ngIf=\"price.errors?.required && price.touched\">\n          price is required\n        </div>\n        <div *ngIf=\"quantity.errors?.required && quantity.touched\">\n          quantity is required is required\n        </div>\n        <div *ngIf=\"pic.errors?.required && pic.touched\">\n          picture url is required is required\n        </div>\n        <div *ngIf=\"category.errors?.required && category.touched\">\n          category is required is required\n        </div>\n      </div>\n      <div *ngIf=\"errors.length > 0\" class= \"card col s8 red lighten-3\">\n        <div *ngFor=\"let e of errors\">{{e}}</div>\n      </div>\n\n\n   </div>\n </div>\n \n\n    \n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/admin/book-form/book-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_books_service__ = __webpack_require__("../../../../../src/app/services/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookFormComponent = (function () {
    function BookFormComponent(categoriesService, booksService, router) {
        this.categoriesService = categoriesService;
        this.booksService = booksService;
        this.router = router;
        this.book = {
            id: 0,
            name: "",
            description: "",
            pictureUrl: "",
            categoryId: "",
            price: null,
            quantity: null,
            date: null
        };
    }
    BookFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var $;
        this.categoriesService.getCategories()
            .subscribe(function (res) { return _this.categories = res; });
        this.errors = [];
    };
    BookFormComponent.prototype.submit = function (f) {
        var _this = this;
        this.errors = [];
        console.log(f);
        console.log(this.book);
        if (this.book.price > 1000) {
            this.errors.push("price should be lower than 1000");
            return;
        }
        if (this.book.quantity > 1000) {
            this.errors.push("quantity should be lower than 1000");
            return;
        }
        if (this.book.categoryId == 0) {
            this.errors.push("book category is required");
            return;
        }
        this.booksService.createBook(this.book)
            .subscribe(function (res) {
            console.log("Success", res);
            _this.router.navigate(["/admin/books-list"]);
        }, function (err) {
            console.log("err", err);
        });
    };
    BookFormComponent.prototype.func = function (p) {
        console.log(p);
    };
    BookFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-book-form',
            template: __webpack_require__("../../../../../src/app/admin/book-form/book-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/book-form/book-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_categories_service__["a" /* CategoriesService */],
            __WEBPACK_IMPORTED_MODULE_0__services_books_service__["a" /* BooksService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], BookFormComponent);
    return BookFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/books-list/books-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/books-list/books-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<br>\n\n<div class=\"card\">\n    \n      <br>\n        <h4 class=\"center\">Books List</h4>\n        \n        <div class=\"container\">\n          <div class=\"container\">\n              <hr>\n          </div>\n        </div>\n \n  <table class=\"table bordered striped\" width=\"100%\">\n    <thead>\n      <tr>\n        <th width=\"5%\">Number</th>\n        <th width=\"20%\">Name</th>\n        <th width=\"15%\">Category</th>\n        <th width=\"10%\">Price</th>\n        <th width=\"10%\">Quantity</th>\n        <th width=\"15%\">Date</th>\n        <th width=\"10%\">Picture</th>\n        <th width=\"5%\">Delete</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let b of books ;let i = index\">\n        <td>{{i+1}}</td>\n        <td>{{b.name}}</td>\n        <td>{{b.category.name}}</td>\n        <td>{{b.price}}</td>\n        <td>{{b.quantity}}</td>\n        <td>{{b.date}}</td>\n        <td><img [src]=\"b.pictureUrl\" alt=\"\"  width=\"50px\"> </td>\n        <td><a type=\"button\" (click)=\"deleteBook(b._id)\" routerLink=\"/admin/books-list\"><i class=\"material-icons small\" style=\"color:#73d16a\">delete</i></a></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/admin/books-list/books-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_books_service__ = __webpack_require__("../../../../../src/app/services/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BooksListComponent = (function () {
    function BooksListComponent(booksService) {
        this.booksService = booksService;
    }
    BooksListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.booksService.getBooks()
            .subscribe(function (books) {
            _this.books = books;
            console.log(_this.books);
        }, function (err) { return console.log("Err ", err); });
    };
    BooksListComponent.prototype.deleteBook = function (id) {
        var _this = this;
        if (confirm("Are you sure you want to delete this book?")) {
            this.booksService.deleteBook(id)
                .subscribe(function (obj) {
                console.log("Book deleted! " + obj);
                _this.ngOnInit();
            }, function (err) { return console.log("Error " + err); });
        }
    };
    BooksListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-books-list',
            template: __webpack_require__("../../../../../src/app/admin/books-list/books-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/books-list/books-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_books_service__["a" /* BooksService */]])
    ], BooksListComponent);
    return BooksListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/categories-list/categories-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/categories-list/categories-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<br><br>\n<div class=\"row\">\n  <div class=\"col s1\"></div>\n  <div class=\"col s9\">\n    <div class=\"card\">\n      <br>\n      <h4 class=\"center\">Categories Table</h4>\n      <br>\n      <table class=\"bordered striped\" >\n        <thead>\n          <tr>\n            <th class=\"center\">Category Number</th>\n            <th class=\"center\">Category Name</th>\n            <th class=\"center\">Delete</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let c of categories;let i = index\">\n            <td class=\"center\">{{i+1}}</td>\n            <td class=\"center\">{{c.name}}</td>\n            <td class=\"center\">  \n                 <a type=\"button\" (click)=\"deleteCategory(c._id)\" href=\"admin/categories-list\" routerLink=\"admin/categories-list\" ><i class=\"material-icons small\" style=\"color:#0099ff\">delete</i></a>   \n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"col s8\"></div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/admin/categories-list/categories-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriesListComponent = (function () {
    function CategoriesListComponent(categoriesService) {
        this.categoriesService = categoriesService;
    }
    CategoriesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriesService.getCategories()
            .subscribe(function (list) {
            _this.categories = list;
        });
    };
    CategoriesListComponent.prototype.deleteCategory = function (id) {
        var _this = this;
        if (confirm("Are you sure you want to delete this category?")) {
            this.categoriesService.deleteCategory(id)
                .subscribe(function (res) {
                console.log("deleted! ", res);
                _this.ngOnInit();
            });
        }
    };
    CategoriesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-categories-list',
            template: __webpack_require__("../../../../../src/app/admin/categories-list/categories-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/categories-list/categories-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_categories_service__["a" /* CategoriesService */]])
    ], CategoriesListComponent);
    return CategoriesListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/category-form/category-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/category-form/category-form.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br><br><br>\n\n  \n <div class=\"row\">\n   <div class=\"col s1\"></div>\n   <div class=\"col s11\">\n     <form (ngSubmit)=\"submit(f)\" class=\"card col s8\" style=\"padding:2ch\" #f=\"ngForm\">\n        <p class=\"center\" style=\"font-size:2ch\">Add Category</p>\n        <div class=\"input-field\">\n          <input type=\"text\" id=\"name\" class=\"validate\" required maxlength=\"255\" [(ngModel)]=\"category.name\" name=\"categoryName\" #name=\"ngModel\">\n          <label for=\"name\">Name</label>\n        </div>\n        <button type=\"submit\" class=\"btn right\" [disabled]=\"!f.valid\" >Save Category</button>\n        <br>\n      </form>\n      <div *ngIf=\"name.errors?.required && name.touched\" class=\"card col s8 red lighten-3\">\n        category name is required\n      </div>\n   </div>\n   \n </div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/category-form/category-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryFormComponent = (function () {
    function CategoryFormComponent(categoriesService, router) {
        this.categoriesService = categoriesService;
        this.router = router;
        this.category = {
            name: ""
        };
    }
    CategoryFormComponent.prototype.ngOnInit = function () {
    };
    CategoryFormComponent.prototype.submit = function (f) {
        var _this = this;
        console.log(this.category);
        this.categoriesService.createCategory(this.category)
            .subscribe(function (res) {
            console.log("success----", res);
            _this.router.navigate(["/admin/categories-list"]);
        }, function (err) { return console.log("err ---- ", err); });
    };
    CategoryFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-category-form',
            template: __webpack_require__("../../../../../src/app/admin/category-form/category-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/category-form/category-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_categories_service__["a" /* CategoriesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], CategoryFormComponent);
    return CategoryFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/panel/panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/panel/panel.component.html":
/***/ (function(module, exports) {

module.exports = "<app-admin-navbar></app-admin-navbar>\n\n\n<div class=\"row deep-purple lighten-5\">\n\n  <div class=\"col s3  deep-purple lighten-4\" >\n    <app-admin-sidebar></app-admin-sidebar>\n    <div style=\"height:700px\"></div>\n  </div>\n  <div class=\"col s9\">\n    <div *ngIf=\"routeName=='book-form'\"><app-book-form></app-book-form></div>\n    <div *ngIf=\"routeName=='category-form'\"><app-category-form></app-category-form></div>\n    <div *ngIf=\"routeName=='categories-list'\"><app-categories-list></app-categories-list></div>\n    <div *ngIf=\"routeName=='books-list'\"><app-books-list></app-books-list></div>\n    <div *ngIf=\"routeName=='users-list'\"><app-users-list></app-users-list></div>\n  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/panel/panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PanelComponent = (function () {
    function PanelComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.route.params.subscribe(function (params) {
            _this.routeName = params.name;
        });
    }
    PanelComponent.prototype.ngOnInit = function () {
    };
    PanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-panel',
            template: __webpack_require__("../../../../../src/app/admin/panel/panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/panel/panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/users-list/users-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/users-list/users-list.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n\n<div class=\"row\">\n  <div class=\"col s1\"></div>\n  <div class=\"col s10\">\n      <div class=\"card\">\n\n          <br>\n          <h4 class=\"center\">Users List</h4>\n      \n          <table class=\"table bordered striped\" width=\"100%\">\n            <thead>\n              <tr>\n                <th width=\"10%\">Id</th>\n                <th width=\"25%\">First Name</th>\n                <th width=\"25%\">Last Name</th>\n                <th width=\"30%\">Email</th>\n                <th width=\"10%\">Delete</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let u of users\">\n                <td>{{u.id}}</td>\n                <td>{{u.firstName}}</td>\n                <td>{{u.lastName}}</td>\n                <td>{{u.email}}</td>\n                <td>\n                  <a type=\"button\" (click)=\"deleteUser(u.id)\" routerLink=\"/admin/users-list\">\n                    <i class=\"material-icons small\" style=\"color:#73d16a\">delete</i>\n                  </a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n  </div>\n  <div class=\"col s1\"></div>\n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/users-list/users-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersListComponent = (function () {
    function UsersListComponent(userService) {
        this.userService = userService;
    }
    UsersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) { return _this.users = users; }, function (err) { return console.log("Error  " + err); });
    };
    UsersListComponent.prototype.deleteUser = function (id) {
        var _this = this;
        if (confirm("Are you sure you want to delete this user?")) {
            this.userService.deleteUser(id)
                .subscribe(function (user) {
                console.log("User deleted ! ", user);
                _this.ngOnInit();
            }, function (err) { return console.log("Err ", err); });
        }
    };
    UsersListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-users-list',
            template: __webpack_require__("../../../../../src/app/admin/users-list/users-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/users-list/users-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]])
    ], UsersListComponent);
    return UsersListComponent;
}());



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

module.exports = "\n\n<router-outlet></router-outlet>\n\n\n\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_books_service__ = __webpack_require__("../../../../../src/app/services/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__admin_panel_panel_component__ = __webpack_require__("../../../../../src/app/admin/panel/panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__admin_admin_navbar_admin_navbar_component__ = __webpack_require__("../../../../../src/app/admin/admin-navbar/admin-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__admin_admin_sidebar_admin_sidebar_component__ = __webpack_require__("../../../../../src/app/admin/admin-sidebar/admin-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__admin_book_form_book_form_component__ = __webpack_require__("../../../../../src/app/admin/book-form/book-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__admin_category_form_category_form_component__ = __webpack_require__("../../../../../src/app/admin/category-form/category-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__admin_categories_list_categories_list_component__ = __webpack_require__("../../../../../src/app/admin/categories-list/categories-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material_checkbox__ = __webpack_require__("../../../material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__admin_books_list_books_list_component__ = __webpack_require__("../../../../../src/app/admin/books-list/books-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__admin_users_list_users_list_component__ = __webpack_require__("../../../../../src/app/admin/users-list/users-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_courses_courses_component__ = __webpack_require__("../../../../../src/app/components/courses/courses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_books_page_books_page_component__ = __webpack_require__("../../../../../src/app/components/books-page/books-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_cart_page_cart_page_component__ = __webpack_require__("../../../../../src/app/components/cart-page/cart-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import {FormsModule} from '@angular/forms';






















var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'courses', component: __WEBPACK_IMPORTED_MODULE_26__components_courses_courses_component__["a" /* CoursesComponent */] },
    { path: 'books', component: __WEBPACK_IMPORTED_MODULE_27__components_books_page_books_page_component__["a" /* BooksPageComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_28__components_cart_page_cart_page_component__["a" /* CartPageComponent */] },
    { path: 'admin/:name', component: __WEBPACK_IMPORTED_MODULE_15__admin_panel_panel_component__["a" /* PanelComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_15__admin_panel_panel_component__["a" /* PanelComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__["a" /* HomeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__admin_panel_panel_component__["a" /* PanelComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__admin_admin_navbar_admin_navbar_component__["a" /* AdminNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_18__admin_admin_sidebar_admin_sidebar_component__["a" /* AdminSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_19__admin_book_form_book_form_component__["a" /* BookFormComponent */],
                __WEBPACK_IMPORTED_MODULE_20__admin_category_form_category_form_component__["a" /* CategoryFormComponent */],
                __WEBPACK_IMPORTED_MODULE_21__admin_categories_list_categories_list_component__["a" /* CategoriesListComponent */],
                __WEBPACK_IMPORTED_MODULE_24__admin_books_list_books_list_component__["a" /* BooksListComponent */],
                __WEBPACK_IMPORTED_MODULE_25__admin_users_list_users_list_component__["a" /* UsersListComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_courses_courses_component__["a" /* CoursesComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_books_page_books_page_component__["a" /* BooksPageComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_cart_page_cart_page_component__["a" /* CartPageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material_select__["a" /* MatSelectModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_2__services_categories_service__["a" /* CategoriesService */],
                __WEBPACK_IMPORTED_MODULE_1__services_books_service__["a" /* BooksService */],
                __WEBPACK_IMPORTED_MODULE_0__services_cart_service__["a" /* CartService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/books-page/books-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nh8{\n    text-align: center\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/books-page/books-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n\n\n\n<div class=\"grey lighten-3\" style=\"height:4rem; padding-top:0px\">\n    <p class=\"center\" style=\"font-size:20px; margin-top:3px; padding-top:10px\"></p>\n</div>\n\n<!--\n<img  src=\"https://static.pexels.com/photos/533930/pexels-photo-533930.jpeg\"  alt=\"\"\n style=\"height:20rem; width:100%\">\n-->\n<img  src=\"assets/images/star.jpg\"  alt=\"\"\n style=\"height:20rem; width:100%\">\n\n\n<br><br>\n<div class=\"container\">\n    <p style=\"font-size:18px\">Choose Your Favorite Language</p>\n</div>\n\n\n<nav>  \n    <div class=\"nav-wrapper   grey lighten-3\">\n      \n          <ul id=\"nav-mobile\" class=\"hide-on-med-and-down\" style=\"width:80%; margin:auto\">\n              \n              <li *ngFor=\"let e of categoriesForView\">\n                <a routerLink=\"books\"  class=\"btn white\" style=\"color:black; font-size:20px ; font-weight:400\" (click)=\"filterCategory(e.id)\">{{e.name}}</a>\n              </li>\n              <li>\n                  <a routerLink=\"books\"  class=\"btn white\" style=\"color:black; font-size:20px ; font-weight:400\" (click)=\"unFilter()\">All Categories</a>\n                </li>\n            </ul>\n    </div>\n</nav>\n \n\n\n<div id=\"books-body\" class=\"grey lighten-5\">\n\n  <br><br>\n\n\n<div  class=\"row\" >\n        <div class=\"col s1\"></div>\n        <div class=\"col s10\">\n          <div class=\"row\">\n              <div *ngFor=\"let b of books; index as i\" class=\"col s3\">\n                  <br>\n                  <div class=\"card\" style=\"height:21rem; width:18rem\">\n                    <div class=\"card-image\"  style=\"height:10rem; width:18rem\">\n                      <img [src]=\"b.pictureUrl\"  style=\"height:10rem; width:18rem\">\n                      \n                    </div>\n                    <div class=\"card-content\" style=\"height:6rem\">\n                      <p style=\"font-weight:400; font-size:16px\">{{b.name}}</p>\n                    </div>\n                    <div *ngIf=\"localBooks[i].quantity < 1\" class=\"card-action\" >\n                      <a routerLink=\"/books\"(click)=\"addToCart(i)\">Add To Cart</a>\n                    </div>\n                    <div *ngIf=\"localBooks[i].quantity > 0\" class=\"card-action yellow lighten-5\" style=\"width:100%\" >\n                      <a routerLink=\"/books\" (click)=\"addToCart(i)\" class=\"btn-floating btn waves-effect waves-light cyan lighten-3\" style=\"margin-right:60px\"><i  class=\"fa fa-plus\"></i></a>\n\n                      <span style=\"font-size:18px\">{{localBooks[i].quantity}}</span>\n\n                      <a routerLink=\"/books\" (click)=\"decToCart(i)\" class=\"btn-floating btn waves-effect waves-light cyan lighten-3 right\" ><i  class=\"fa fa-minus\" ></i></a>\n                    </div>\n                  </div>\n                </div>\n          </div>\n        </div>\n        <div class=\"col s1\"></div>\n\n  <!-- <div *ngFor=\"let b of bookArr\" class=\"col s3\" > -->\n      \n  \n\n</div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/books-page/books-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_books_service__ = __webpack_require__("../../../../../src/app/services/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BooksPageComponent = (function () {
    function BooksPageComponent(booksService, categoriesService, cartService) {
        this.booksService = booksService;
        this.categoriesService = categoriesService;
        this.cartService = cartService;
    }
    BooksPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.booksService.getBooks()
            .subscribe(function (books) {
            _this.books = books;
            _this.allBooks = books;
            _this.localBooks = _this.cartService.initStorage(_this.books);
            console.log(_this.allBooks);
        });
        this.categoriesService.getCategories()
            .subscribe(function (categories) {
            _this.categories = categories;
            var limit = 5;
            _this.categoriesForView = [];
            for (var i = 0; i < limit && i < categories.length; i++) {
                _this.categoriesForView[i] = _this.categories[i];
                console.log(_this.categoriesForView);
            }
        });
    };
    BooksPageComponent.prototype.filterCategory = function (categoryId) {
        var array = this.allBooks.filter(function (value) {
            return value.categoryId == categoryId;
        });
        this.books = array;
    };
    BooksPageComponent.prototype.unFilter = function () {
        this.books = this.allBooks;
    };
    BooksPageComponent.prototype.addToCart = function (i) {
        this.localBooks = this.cartService.addToCart(i);
    };
    BooksPageComponent.prototype.decToCart = function (i) {
        this.localBooks = this.cartService.decToCart(i);
    };
    BooksPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-books-page',
            template: __webpack_require__("../../../../../src/app/components/books-page/books-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/books-page/books-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_books_service__["a" /* BooksService */],
            __WEBPACK_IMPORTED_MODULE_1__services_categories_service__["a" /* CategoriesService */],
            __WEBPACK_IMPORTED_MODULE_0__services_cart_service__["a" /* CartService */]])
    ], BooksPageComponent);
    return BooksPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/cart-page/cart-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".p-cart{\r\n    font-size:25px;\r\n    font-weight: 500;\r\n}\r\n\r\n.b-cart{\r\n    font-size:20px;\r\n    font-weight: 400;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cart-page/cart-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n\n<br><br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col s12 m6\">\n\n      <p class=\"p-cart\"><i class=\"fa fa-shopping-cart\"></i>  My Cart</p>\n      <div class=\"card\">\n          <table class=\"striped bordered\">\n              <thead>\n                <tr>\n                  <th>Item number</th>\n                  <th>Book Name</th>\n                  <th>Book Price</th>\n                  <th>Quantity</th>\n                  <th>Total Price</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let c of smallCart; index as i\">\n                  <td>{{i+1}}</td>\n                  <td>{{c.name}}</td>\n                  <td>{{c.price}}</td>\n                  <td>{{c.quantity}}</td>\n                  <td>{{(c.price)*(c.quantity) }}</td>\n                </tr>\n              </tbody>\n            </table>\n      </div>\n      <form  (submit)=\"onSubmit()\">\n        <button type =\"submit\" class=\"btn btn-large b-cart blue\">Buy</button>\n      </form>\n      \n      <p class=\"right \">Total amount: {{total}}</p>\n\n     \n    </div>\n    <div class=\"col s12-m6\">\n      \n    </div>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/cart-page/cart-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartPageComponent = (function () {
    function CartPageComponent(cartService) {
        this.cartService = cartService;
    }
    CartPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myCart = this.cartService.getMyCart();
        this.smallCart = this.myCart.filter(function (value) {
            return value.quantity > 0;
        });
        this.total = 0;
        this.smallCart.forEach(function (item) {
            _this.total += item.price * item.quantity;
        });
    };
    CartPageComponent.prototype.onSubmit = function () {
    };
    CartPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-cart-page',
            template: __webpack_require__("../../../../../src/app/components/cart-page/cart-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cart-page/cart-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_cart_service__["a" /* CartService */]])
    ], CartPageComponent);
    return CartPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/courses/courses.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/courses/courses.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/courses/courses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoursesComponent = (function () {
    function CoursesComponent() {
    }
    CoursesComponent.prototype.ngOnInit = function () {
    };
    CoursesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-courses',
            template: __webpack_require__("../../../../../src/app/components/courses/courses.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/courses/courses.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CoursesComponent);
    return CoursesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<p>\n  home works!\n</p>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        // "../node_modules/jquery/dist/jquery.js",
        // "../node_modules/materialize-css/dist/js/materialize.js"
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<br><br>\n<div class=\"container\">\n  <div class=\"row\">\n      <form #f=\"ngForm\" (ngSubmit)=\"submit()\" class=\"card col s8 yellow lighten-5\">\n              <p class=\"center\" style=\"font-size:2em\">Login Form</p>\n          \n          <div class=\"input-field col s12\">\n              <input id=\"email\" type=\"email\" class=\"validate\" name=\"email\" [(ngModel)]=\"loginUser.email\" required #email=\"ngModel\" email>\n              <label for=\"email\">Email</label>\n          </div>\n        \n          <div class=\"input-field col s12\">\n            <input id=\"password\" type=\"password\" class=\"validate\" name=\"password\" [(ngModel)]=\"loginUser.password\" required #password=\"ngModel\">\n            <label for=\"password\">Password</label>\n          </div> \n          \n          <div class=\"container\">\n            <button class=\"btn waves-effect waves-light right\" type=\"submit\"  name=\"action\" [disabled]=\"!f.valid\">Submit\n                <i class=\"material-icons right\"></i>\n            </button> \n          </div>  \n      </form>\n      \n    </div>\n    <div class=\"row\">\n        <div *ngIf=\"!f.valid && f.touched\"  class=\"card col s8 red lighten-1\">\n            <div *ngIf=\"email.errors?.required && email.touched\">   \n              Email is required.\n            </div>\n            <div *ngIf=\"!email.errors?.required && email.touched && email.errors?.email\">  \n              Email is not valid.\n            </div>\n            <div *ngIf=\"password.errors?.required && password.touched\">     \n              Password is required.\n            </div>\n            \n        </div>\n        <div *ngIf=\"errors.length > 0\" class=\"card col s8 red lighten-1\">\n          <div *ngFor=\"let e of errors\">\n            {{e}}\n          </div>\n        </div>\n        \n    </div>\n    \n    \n  </div>\n<br><br>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loginUser = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.errors = [];
    };
    LoginComponent.prototype.submit = function () {
        //  this.authService.login(this.loginUser)
        //  .subscribe(res => {
        //   if(res) {
        //     localStorage.setItem("user",JSON.stringify(res));
        //     this.router.navigate(["/"]);
        //     location.reload();
        //   }
        var _this = this;
        // } , err =>{
        //   console.log( "err ",err);
        //   this.errors.push(err.error);
        // });  
        this.authService.authenticateUser(this.loginUser)
            .subscribe(function (res) {
            if (res.success) {
                _this.authService.storeUserData(res.token, res.user);
                _this.router.navigate(['/']);
            }
            else {
                console.log(res.msg);
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.nav-link{\r\n    font-size: 20px;\r\n    font-weight: 450;\r\n}\r\n\r\n.cart-icon{\r\n    margin-right:5px;\r\n    \r\n}\r\n\r\n.cart-icon1{\r\n    margin-bottom: 10px;\r\n    padding-bottom: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav style=\"height:70px\">\n    <div class=\"nav-wrapper  cyan lighten-2\">\n      <div class=\"container\">\n        <a href=\"#\" class=\"brand-logo\">Expert</a>\n\n\n        <ul *ngIf=\"!loggedIn()\" id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n          <li><a routerLink='/login' class=\"nav-link\">Login</a></li>\n          <li><a routerLink='/register' class=\"nav-link\">Register</a></li>\n        </ul>\n\n        \n        <ul *ngIf=\"loggedIn()\" id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n          <li><a href=\"#\" class=\"nav-link\">{{user.email}}</a></li>\n          <li><a (click)=\"logout()\" class=\"nav-link\">Logout</a></li>\n        </ul>\n\n        <ul  id=\"nav-mobile\" class=\"right hide-on-med-and-down center\">\n          <li><a href=\"\"></a></li>\n          <li><a href=\"\"></a></li>\n          <li><a href=\"\"></a></li>\n          \n          <li ><a routerLink='/books' class=\"nav-link\">Books</a></li>\n          <li><a routerLink='/admin' class=\"nav-link\">Admin</a></li>\n          <li><a routerLink='/cart' class=\"nav-link\"><i class=\"cart-icon fa fa-shopping-cart\"></i>my Cart</a></li>\n\n        </ul>\n      </div>\n    </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        if (this.loggedIn()) {
            this.user = JSON.parse(localStorage.getItem('user'));
        }
    };
    NavbarComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n<br><br>\n<div class=\"container\">\n  <div class=\"row\">\n      <form #f=\"ngForm\" (ngSubmit)=\"submit(f)\" class=\"card col s8 yellow lighten-5\">\n              <p class=\"center\" style=\"font-size:2em\">Register Form</p>\n          \n          <div class=\"input-field col s12\">\n              <input id=\"firstName\" name=\"firstName\" type=\"text\" class=\"validate\"  [(ngModel)]=\"user.firstName\" required #firstName=\"ngModel\">\n              <label for=\"firstName\">First Name</label>\n          </div>\n          \n          <div class=\"input-field col s12\">\n            <input id=\"lastName\" type=\"text\" class=\"validate\" name=\"lastName\" [(ngModel)]=\"user.lastName\" required #lastName=\"ngModel\">\n            <label for=\"lastName\">Last Name</label>\n          </div>\n          \n          <div class=\"input-field col s12\">\n              <input id=\"email\" type=\"email\" class=\"validate\" name=\"email\" [(ngModel)]=\"user.email\" required #email=\"ngModel\" email>\n              <label for=\"email\">Email</label>\n          </div>\n        \n          <div class=\"input-field col s12\">\n            <input id=\"password\" type=\"password\" class=\"validate\" name=\"password\" [(ngModel)]=\"user.password\" required #password=\"ngModel\">\n            <label for=\"password\">Password</label>\n          </div>\n\n          <div class=\"input-field col s12\">\n              <input id=\"confirmPassword\" type=\"password\" class=\"validate\" name=\"confirmPassword\" [(ngModel)]=\"user.confirmPassword\" required #confirmPassword=\"ngModel\">\n              <label for=\"confirmPassword\">Confirm Password</label>\n          </div>\n          \n          <div class=\"container\">\n            <button class=\"btn waves-effect waves-light right\" type=\"submit\"  name=\"action\" [disabled]=\"!f.valid\">Submit\n                <i class=\"material-icons right\"></i>\n            </button> \n          </div>  \n      </form>\n      \n    </div>\n    <div class=\"row\">\n        <div *ngIf=\"!f.valid && f.touched\"  class=\"card col s8 red lighten-1\">\n            <div *ngIf=\"firstName.errors?.required && firstName.touched\">    \n              First Name is required.\n            </div>\n            <div *ngIf=\"lastName.errors?.required && lastName.touched\">   \n              Last Name is required.\n            </div>\n            <div *ngIf=\"email.errors?.required && email.touched\">   \n              Email is required.\n            </div>\n            <div *ngIf=\"!email.errors?.required && email.touched && email.errors?.email\">  \n              Email is not valid.\n            </div>\n            <div *ngIf=\"password.errors?.required && password.touched\">     \n              Password is required.\n            </div>\n            <div *ngIf=\"confirmPassword.errors?.required && confirmPassword.touched\">    \n              Confirm Password is required.\n            </div>\n        </div>\n        <div *ngIf=\"errors.length > 0\" class=\"card col s8 red lighten-1\">\n          <p *ngFor=\"let e of errors\">\n            {{e.msg}}\n          </p>\n        </div>\n    </div>\n    \n    \n  </div>\n<br><br>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(userService, router, authService) {
        this.userService = userService;
        this.router = router;
        this.authService = authService;
        this.user = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            id: 0
        };
    }
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        if (this.user.password === this.user.confirmPassword) {
            console.log("good");
            this.deleteError("passwords");
            this.authService.registerUser(this.user)
                .subscribe(function (user) {
                console.log(user);
                _this.router.navigate(['/login']);
            }, function (err) {
                _this.errors.push({ name: "errorFromServer", msg: err.error });
            });
            // this.userService.CreateUser(this.user)
            //   .subscribe(user => {
            //     console.log(user);
            //     this.router.navigate(['/login']);
            //       },
            //       err => this.errors.push({ name: "errorFromServer", msg:err.error }) );
        }
        else {
            var passwordsError = {
                name: 'passwords',
                msg: 'passwords dont match'
            };
            this.errors.push(passwordsError);
        }
    };
    RegisterComponent.prototype.onChange = function () {
        console.log(this.user);
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.errors = [];
    };
    RegisterComponent.prototype.deleteError = function (name) {
        for (var i = 0; i < this.errors.length; i++) {
            if (this.errors[i].name == name)
                this.errors.splice(i, 1);
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/config/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = (function () {
    function config() {
    }
    // public static serverUrl ="http://localhost:3000/";
    config.serverUrl = "http://159.65.17.30:3000/";
    return config;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.usersUrl = __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* config */].serverUrl + "api/users";
        this.host = "remote";
        this.serverUrl = __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* config */].serverUrl;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.serverUrl + "users/register", user, { headers: headers });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.serverUrl + "users/authenticate", user, { headers: headers });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/books.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BooksService = (function () {
    function BooksService(http) {
        this.http = http;
        this.booksUrl = __WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* config */].serverUrl + "books";
    }
    BooksService.prototype.getBooks = function () {
        return this.http.get(this.booksUrl);
    };
    BooksService.prototype.createBook = function (book) {
        return this.http.post(this.booksUrl + "/add", book);
    };
    BooksService.prototype.deleteBook = function (id) {
        return this.http.delete(this.booksUrl + '/' + id);
    };
    BooksService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], BooksService);
    return BooksService;
}());



/***/ }),

/***/ "../../../../../src/app/services/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartService = (function () {
    function CartService() {
        this.cartBooks = [];
    }
    CartService.prototype.getMyCart = function () {
        return JSON.parse(localStorage.getItem('myCart'));
    };
    CartService.prototype.addToCart = function (i) {
        var arr = JSON.parse(localStorage.getItem('myCart'));
        arr[i].quantity = arr[i].quantity + 1;
        localStorage.setItem('myCart', JSON.stringify(arr));
        this.updateStorage();
        return arr;
    };
    CartService.prototype.decToCart = function (i) {
        var arr = JSON.parse(localStorage.getItem('myCart'));
        if (arr[i].quantity > 0) {
            arr[i].quantity = arr[i].quantity + -1;
            localStorage.setItem('myCart', JSON.stringify(arr));
            this.updateStorage();
            return arr;
        }
    };
    CartService.prototype.updateStorage = function () {
        this.cartBooks = JSON.parse(localStorage.getItem('myCart'));
    };
    CartService.prototype.initStorage = function (allBooks) {
        var arr = [];
        allBooks.forEach(function (val, index) {
            arr.push({
                index: index,
                quantity: 0,
                name: val.name,
                price: val.price
            });
        });
        localStorage.setItem('myCart', JSON.stringify(arr));
        this.updateStorage();
        return arr;
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "../../../../../src/app/services/categories.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesService = (function () {
    function CategoriesService(http) {
        this.http = http;
        this.categoriesUrl = __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* config */].serverUrl + "categories";
    }
    CategoriesService.prototype.createCategory = function (category) {
        return this.http.post(this.categoriesUrl + "/add", category);
    };
    CategoriesService.prototype.getCategories = function () {
        return this.http.get(this.categoriesUrl);
    };
    CategoriesService.prototype.deleteCategory = function (id) {
        return this.http.delete(this.categoriesUrl + "/" + id);
    };
    CategoriesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], CategoriesService);
    return CategoriesService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.usersUrl = __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* config */].serverUrl + "users";
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.usersUrl);
    };
    UserService.prototype.CreateUser = function (user) {
        return this.http.post(this.usersUrl + "/register", user);
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete(this.usersUrl + '/' + id);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
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
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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
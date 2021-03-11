(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! W:\Learning\angular\ITSTEP_instagram\src\main.ts */"zUnb");


/***/ }),

/***/ "6sc6":
/*!***********************************************************!*\
  !*** ./src/app/post/post-footer/post-footer.component.ts ***!
  \***********************************************************/
/*! exports provided: PostFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostFooterComponent", function() { return PostFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments/comments.component */ "7gbJ");



const _c0 = function (a0, a1) { return { comments: a0, likes: a1 }; };
class PostFooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
PostFooterComponent.ɵfac = function PostFooterComponent_Factory(t) { return new (t || PostFooterComponent)(); };
PostFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostFooterComponent, selectors: [["app-post-footer"]], inputs: { footerInfo: "footerInfo" }, decls: 2, vars: 4, consts: [[1, "post-footer", "card-footer"], [3, "commentsData"]], template: function PostFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-comments", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("commentsData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.footerInfo.comments, ctx.footerInfo.likes));
    } }, directives: [_comments_comments_component__WEBPACK_IMPORTED_MODULE_1__["CommentsComponent"]], styles: [".post-footer[_ngcontent-%COMP%]{\r\n    background-color: rgb(253, 247, 235);\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7O0FBRXhDIiwiZmlsZSI6InBvc3QtZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCAyNDcsIDIzNSk7XHJcblxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-footer',
                templateUrl: './post-footer.component.html',
                styleUrls: ['./post-footer.component.css']
            }]
    }], function () { return []; }, { footerInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "7gbJ":
/*!*****************************************************************!*\
  !*** ./src/app/post/post-footer/comments/comments.component.ts ***!
  \*****************************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "twK/");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _add_commnet_form_add_commnet_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-commnet-form/add-commnet-form.component */ "uBWX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comment/comment.component */ "ExRn");







function CommentsComponent_app_comment_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-comment", 7);
} if (rf & 2) {
    const comment_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r1.commentsHide)("comment", comment_r2);
} }
class CommentsComponent {
    constructor() {
        this.buttonText = "show comments";
        this.commentsHide = true;
        this.comments = [];
        this.showCommentForm = true;
        this.isLiked = false;
        this.faHeart = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHeart"];
        this.faComment = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faComment"];
        this.faPaperPlane = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPaperPlane"];
    }
    ngOnInit() {
        this.comments = this.commentsData.comments;
    }
    showComments() {
        this.commentsHide = !this.commentsHide;
        if (this.commentsHide) {
            this.buttonText = "show comments";
        }
        else {
            this.buttonText = "hide comments";
        }
    }
    likePost(btn) {
        console.log(btn);
        if (!this.isLiked) {
            this.commentsData.likes++;
            this.isLiked = !this.isLiked;
            btn.classList.remove('btn-link');
            btn.classList.add('btn-danger');
        }
        else {
            this.commentsData.likes--;
            this.isLiked = !this.isLiked;
            btn.classList.remove('btn-danger');
            btn.classList.add('btn-link');
        }
    }
    showForm() {
        this.showCommentForm = !this.showCommentForm;
    }
    getNewComment(data) {
        this.comments.unshift(data);
        // this.store.addNewComment(data);
    }
}
CommentsComponent.ɵfac = function CommentsComponent_Factory(t) { return new (t || CommentsComponent)(); };
CommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentsComponent, selectors: [["app-comments"]], inputs: { commentsData: "commentsData" }, decls: 13, vars: 7, consts: [[1, "post-comments-block"], [1, "comments-buttons"], [1, "btn", "btn-link", 3, "click"], ["like", ""], [3, "icon"], [3, "hidden", "addComment"], [3, "hidden", "comment", 4, "ngFor", "ngForOf"], [3, "hidden", "comment"]], template: function CommentsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentsComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.likePost(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentsComponent_Template_button_click_6_listener() { return ctx.showComments(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentsComponent_Template_button_click_9_listener() { return ctx.showForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-add-commnet-form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addComment", function CommentsComponent_Template_app_add_commnet_form_addComment_11_listener($event) { return ctx.getNewComment($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CommentsComponent_app_comment_12_Template, 1, 2, "app-comment", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.commentsData.likes, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faHeart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.comments.length, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faComment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPaperPlane);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showCommentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"], _add_commnet_form_add_commnet_form_component__WEBPACK_IMPORTED_MODULE_3__["AddCommnetFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_5__["CommentComponent"]], styles: [".post-comments-block[_ngcontent-%COMP%]{\r\n    padding:0;\r\n}\r\n.post-comments-block[_ngcontent-%COMP%]   .comments-buttons[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content:flex-start;\r\n    \r\n}\r\n.post-comments-block[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]{\r\n    padding: 10px 0;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    margin-left: 5px;\r\n    padding: 5px;\r\n    text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7O0FBRTlCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJjb21tZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtY29tbWVudHMtYmxvY2t7XHJcbiAgICBwYWRkaW5nOjA7XHJcbn1cclxuLnBvc3QtY29tbWVudHMtYmxvY2sgLmNvbW1lbnRzLWJ1dHRvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XHJcbiAgICBcclxufVxyXG4ucG9zdC1jb21tZW50cy1ibG9jayAuY29tbWVudHN7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbn1cclxuLmJ0bntcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comments',
                templateUrl: './comments.component.html',
                styleUrls: ['./comments.component.css']
            }]
    }], function () { return []; }, { commentsData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
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

/***/ "ExRn":
/*!************************************************************************!*\
  !*** ./src/app/post/post-footer/comments/comment/comment.component.ts ***!
  \************************************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CommentComponent {
    constructor() { }
    ngOnInit() {
    }
}
CommentComponent.ɵfac = function CommentComponent_Factory(t) { return new (t || CommentComponent)(); };
CommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentComponent, selectors: [["app-comment"]], inputs: { comment: "comment" }, decls: 8, vars: 4, consts: [[1, "post-comment", "card"], [1, "card-body"], [1, "comment-author", "card-title"], [1, "card-text"], [1, "card-link", 3, "href"]], template: function CommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comment.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comment.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx.comment.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comment.email);
    } }, styles: [".post-comment[_ngcontent-%COMP%]{\r\n    margin: 10px 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoiY29tbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtY29tbWVudHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comment',
                templateUrl: './comment.component.html',
                styleUrls: ['./comment.component.css']
            }]
    }], function () { return []; }, { comment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Ok8J":
/*!***********************************************************!*\
  !*** ./src/app/post/post-header/post-header.component.ts ***!
  \***********************************************************/
/*! exports provided: PostHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostHeaderComponent", function() { return PostHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _gender_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gender.pipe */ "yuhe");



class PostHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
PostHeaderComponent.ɵfac = function PostHeaderComponent_Factory(t) { return new (t || PostHeaderComponent)(); };
PostHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostHeaderComponent, selectors: [["app-post-header"]], inputs: { headerInfo: "headerInfo" }, decls: 4, vars: 3, consts: [[1, "post-header", "card-header"], [1, "post-title", "card-title"]], template: function PostHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.headerInfo));
    } }, pipes: [_gender_pipe__WEBPACK_IMPORTED_MODULE_1__["GenderPipe"]], styles: [".post-header[_ngcontent-%COMP%]{\r\n    \r\n    background-color: rgb(253, 247, 235);\r\n}\r\n.post-header[_ngcontent-%COMP%]   .post-title[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxTQUFTO0FBQ2IiLCJmaWxlIjoicG9zdC1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LWhlYWRlcntcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgMjQ3LCAyMzUpO1xyXG59XHJcbi5wb3N0LWhlYWRlciAucG9zdC10aXRsZXtcclxuICAgIG1hcmdpbjogMDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-header',
                templateUrl: './post-header.component.html',
                styleUrls: ['./post-header.component.css']
            }]
    }], function () { return []; }, { headerInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ "qkCY");
/* harmony import */ var _httprequest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./httprequest.service */ "wHEC");
/* harmony import */ var _pics_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pics-service.service */ "hZAr");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post/post.component */ "fQWx");









function AppComponent_app_post_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post", 1);
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("postInfo", post_r1);
} }
class AppComponent {
    constructor(storage, HTTP, pics) {
        this.storage = storage;
        this.HTTP = HTTP;
        this.pics = pics;
        this.usersInfo = [];
        this.postsInfo = [];
        this.postList = [];
        this.title = 'instagram';
    }
    ngOnInit() {
        this.HTTP.getData(`https://jsonplaceholder.typicode.com/posts`, ['all'])
            .then(posts => this.postsInfo = [...posts.filter((post) => post.id >= 6 ? false : true)])
            .then(() => this.HTTP.getData(`https://jsonplaceholder.typicode.com/users`, ['id', 'email', 'name']))
            .then(users => this.usersInfo = [...users.filter((user) => user.id >= 6 ? false : true)])
            .then(() => this.pics.getPics('https://picsum.photos/v2/list?limit=6'))
            .then(() => {
            let result = [];
            this.postsInfo.forEach((post) => {
                this.usersInfo.forEach((user) => {
                    if (post.id === user.id) {
                        result.push({
                            id: user.id,
                            author: user.name,
                            img: '',
                            email: user.email,
                            gender: Math.ceil(Math.random() * 10) % 2 === 0 ? 'male' : 'female',
                            likes: Math.ceil(Math.random() * 100),
                            comments: [],
                            postText: post.body,
                            postTitle: post.title,
                        });
                    }
                });
            });
            this.storage.setData(result, 'postList');
        })
            .then(() => this.HTTP.getData(`https://jsonplaceholder.typicode.com/comments`))
            .then(comments => this.storage.setData(comments.filter((comment) => comment.postId >= 6 ? false : true), 'comments'))
            .then(() => {
            this.postList = this.storage.getData('postList');
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_httprequest_service__WEBPACK_IMPORTED_MODULE_2__["HTTPRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pics_service_service__WEBPACK_IMPORTED_MODULE_3__["PicsServiceService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [[3, "postInfo", 4, "ngFor", "ngForOf"], [3, "postInfo"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_post_1_Template, 1, 1, "app-post", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.postList);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _post_post_component__WEBPACK_IMPORTED_MODULE_7__["PostComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] }, { type: _httprequest_service__WEBPACK_IMPORTED_MODULE_2__["HTTPRequestService"] }, { type: _pics_service_service__WEBPACK_IMPORTED_MODULE_3__["PicsServiceService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post/post.component */ "fQWx");
/* harmony import */ var _post_post_header_post_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post/post-header/post-header.component */ "Ok8J");
/* harmony import */ var _post_post_body_post_body_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post/post-body/post-body.component */ "oLRt");
/* harmony import */ var _post_post_footer_post_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./post/post-footer/post-footer.component */ "6sc6");
/* harmony import */ var _post_post_footer_comments_comments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post/post-footer/comments/comments.component */ "7gbJ");
/* harmony import */ var _post_post_footer_comments_comment_comment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./post/post-footer/comments/comment/comment.component */ "ExRn");
/* harmony import */ var _post_post_footer_comments_add_commnet_form_add_commnet_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./post/post-footer/comments/add-commnet-form/add-commnet-form.component */ "uBWX");
/* harmony import */ var _gender_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gender.pipe */ "yuhe");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"],
        _post_post_header_post_header_component__WEBPACK_IMPORTED_MODULE_6__["PostHeaderComponent"],
        _post_post_body_post_body_component__WEBPACK_IMPORTED_MODULE_7__["PostBodyComponent"],
        _post_post_footer_post_footer_component__WEBPACK_IMPORTED_MODULE_8__["PostFooterComponent"],
        _post_post_footer_comments_comments_component__WEBPACK_IMPORTED_MODULE_9__["CommentsComponent"],
        _post_post_footer_comments_comment_comment_component__WEBPACK_IMPORTED_MODULE_10__["CommentComponent"],
        _post_post_footer_comments_add_commnet_form_add_commnet_form_component__WEBPACK_IMPORTED_MODULE_11__["AddCommnetFormComponent"],
        _gender_pipe__WEBPACK_IMPORTED_MODULE_12__["GenderPipe"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"],
                    _post_post_header_post_header_component__WEBPACK_IMPORTED_MODULE_6__["PostHeaderComponent"],
                    _post_post_body_post_body_component__WEBPACK_IMPORTED_MODULE_7__["PostBodyComponent"],
                    _post_post_footer_post_footer_component__WEBPACK_IMPORTED_MODULE_8__["PostFooterComponent"],
                    _post_post_footer_comments_comments_component__WEBPACK_IMPORTED_MODULE_9__["CommentsComponent"],
                    _post_post_footer_comments_comment_comment_component__WEBPACK_IMPORTED_MODULE_10__["CommentComponent"],
                    _post_post_footer_comments_add_commnet_form_add_commnet_form_component__WEBPACK_IMPORTED_MODULE_11__["AddCommnetFormComponent"],
                    _gender_pipe__WEBPACK_IMPORTED_MODULE_12__["GenderPipe"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 6, vars: 0, consts: [[1, "header"], [1, "container"], [1, "row"], [1, "col"], ["href", "#"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Instagram 2.0 by Valick");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".header[_ngcontent-%COMP%]{\r\n    background-color: rgb(255, 215, 172);\r\n    padding: 10px 0;\r\n    margin-bottom: 10px;\r\n}\r\nh1[_ngcontent-%COMP%]{\r\n    margin: 0;  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFNBQVM7QUFDYiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMTUsIDE3Mik7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbmgxe1xyXG4gICAgbWFyZ2luOiAwOyAgXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fQWx":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _post_header_post_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-header/post-header.component */ "Ok8J");
/* harmony import */ var _post_body_post_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-body/post-body.component */ "oLRt");
/* harmony import */ var _post_footer_post_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-footer/post-footer.component */ "6sc6");






const _c0 = function (a0, a1) { return { name: a0, gender: a1 }; };
const _c1 = function (a0, a1, a2, a3) { return { img: a0, postText: a1, postTitle: a2, email: a3 }; };
const _c2 = function (a0, a1) { return { likes: a0, comments: a1 }; };
class PostComponent {
    constructor(storage) {
        this.storage = storage;
        this.post = {
            author: '',
            comments: [],
            email: '',
            gender: '',
            id: 0,
            img: '',
            likes: 0,
            postText: '',
            postTitle: ''
        };
    }
    ngOnInit() {
        this.post = Object.assign({}, this.postInfo);
        this.post.comments = [...this.storage.getData('comments').filter((item) => item.postId === this.postInfo.id ? true : false)];
        this.storage.getData('pictures').forEach((pic) => {
            if (pic.id === this.post.id) {
                this.post.img = pic.download_url;
            }
        });
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"])); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], inputs: { postInfo: "postInfo" }, decls: 7, vars: 14, consts: [[1, "container"], [1, "row"], [1, "col-auto", "col-xl-10", "offset-xl-1"], [1, "post", "card"], [3, "headerInfo"], [3, "bodyInfo"], [3, "footerInfo"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-post-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-post-body", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-post-footer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerInfo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.post.author, ctx.post.gender));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bodyInfo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](6, _c1, ctx.post.img, ctx.post.postText, ctx.post.postTitle, ctx.post.email));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footerInfo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c2, ctx.post.likes, ctx.post.comments));
    } }, directives: [_post_header_post_header_component__WEBPACK_IMPORTED_MODULE_2__["PostHeaderComponent"], _post_body_post_body_component__WEBPACK_IMPORTED_MODULE_3__["PostBodyComponent"], _post_footer_post_footer_component__WEBPACK_IMPORTED_MODULE_4__["PostFooterComponent"]], styles: [".post[_ngcontent-%COMP%]{\r\n    margin-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJwb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.css']
            }]
    }], function () { return [{ type: _storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] }]; }, { postInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 6, vars: 0, consts: [[1, "footer"], [1, "container"], [1, "row"], [1, "col"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Instagram 2.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hZAr":
/*!*****************************************!*\
  !*** ./src/app/pics-service.service.ts ***!
  \*****************************************/
/*! exports provided: PicsServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicsServiceService", function() { return PicsServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.service */ "qkCY");





class PicsServiceService {
    constructor() { }
    getPics(url) {
        fetch(url)
            .then(response => response.json())
            .then(pics => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(pics)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((pic, index) => {
                let newObj = {};
                for (let key in pic) {
                    if (key === 'download_url') {
                        newObj[key] = pic[key];
                    }
                    newObj['id'] = index + 1;
                }
                return newObj;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["toArray"])())
                .subscribe((pic) => {
                new _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]().setData(pic, 'pictures');
            });
        });
    }
}
PicsServiceService.ɵfac = function PicsServiceService_Factory(t) { return new (t || PicsServiceService)(); };
PicsServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PicsServiceService, factory: PicsServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PicsServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "oLRt":
/*!*******************************************************!*\
  !*** ./src/app/post/post-body/post-body.component.ts ***!
  \*******************************************************/
/*! exports provided: PostBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostBodyComponent", function() { return PostBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "twK/");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");




class PostBodyComponent {
    constructor() {
        this.faEnvelope = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"];
    }
    ngOnInit() {
    }
}
PostBodyComponent.ɵfac = function PostBodyComponent_Factory(t) { return new (t || PostBodyComponent)(); };
PostBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostBodyComponent, selectors: [["app-post-body"]], inputs: { bodyInfo: "bodyInfo" }, decls: 9, vars: 6, consts: [[1, "post-body", "card-body"], [1, "card-subtitle"], [1, "post-img", "card-img-top", 3, "src"], [1, "post-text", "card-text"], [1, "post-link", "card-link", 3, "href"], [3, "icon"]], template: function PostBodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bodyInfo.postTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.bodyInfo.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bodyInfo.postText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "mailto:bodyInfo.email", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEnvelope);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.bodyInfo.email, "");
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], styles: [".post-text[_ngcontent-%COMP%]{\r\n   margin: 0;\r\n   padding: 10px 0; \r\n}\r\n.post-link[_ngcontent-%COMP%]{\r\n   display: inline-block;\r\n   padding: 5px 7px;\r\n   border-radius: 5px;\r\n}\r\n.post-link[_ngcontent-%COMP%]:hover {\r\n   background-color:#007bff;\r\n   color: #fff;\r\n}\r\n.post-img[_ngcontent-%COMP%]{\r\n   max-width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtYm9keS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csU0FBUztHQUNULGVBQWU7QUFDbEI7QUFDQTtHQUNHLHFCQUFxQjtHQUNyQixnQkFBZ0I7R0FDaEIsa0JBQWtCO0FBQ3JCO0FBQ0E7R0FDRyx3QkFBd0I7R0FDeEIsV0FBVztBQUNkO0FBQ0E7R0FDRyxlQUFlO0FBQ2xCIiwiZmlsZSI6InBvc3QtYm9keS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtdGV4dHtcclxuICAgbWFyZ2luOiAwO1xyXG4gICBwYWRkaW5nOiAxMHB4IDA7IFxyXG59XHJcbi5wb3N0LWxpbmt7XHJcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgcGFkZGluZzogNXB4IDdweDtcclxuICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5wb3N0LWxpbms6aG92ZXIge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDdiZmY7XHJcbiAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5wb3N0LWltZ3tcclxuICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostBodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-body',
                templateUrl: './post-body.component.html',
                styleUrls: ['./post-body.component.css']
            }]
    }], function () { return []; }, { bodyInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "qkCY":
/*!************************************!*\
  !*** ./src/app/storage.service.ts ***!
  \************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StorageService {
    constructor() { }
    setData(data, dirName) {
        localStorage.setItem(dirName, JSON.stringify(data));
    }
    getData(dirName) {
        return JSON.parse(localStorage.getItem(dirName));
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "uBWX":
/*!******************************************************************************************!*\
  !*** ./src/app/post/post-footer/comments/add-commnet-form/add-commnet-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AddCommnetFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommnetFormComponent", function() { return AddCommnetFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class AddCommnetFormComponent {
    constructor() {
        this.addComment = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    ngOnInit() {
    }
    getNewComment(values, e) {
        e.preventDefault();
        this.addComment.emit(values);
    }
}
AddCommnetFormComponent.ɵfac = function AddCommnetFormComponent_Factory(t) { return new (t || AddCommnetFormComponent)(); };
AddCommnetFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddCommnetFormComponent, selectors: [["app-add-commnet-form"]], outputs: { addComment: "addComment" }, decls: 16, vars: 0, consts: [["action", "", 1, "form", 3, "ngSubmit"], ["newCommentForm", "ngForm"], [1, "form-group"], ["for", "userName"], ["type", "text", "ngModel", "", "id", "userName", "name", "name", 1, "form-control"], ["for", "userEmail"], ["type", "text", "ngModel", "", "id", "userEmail", "name", "email", 1, "form-control"], ["for", "comment"], ["type", "text", "name", "body", "ngModel", "", "id", "comment", "cols", "30", "rows", "5", 1, "form-control"], [1, "btn", "btn-success"]], template: function AddCommnetFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddCommnetFormComponent_Template_form_ngSubmit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.getNewComment(_r0.value, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "User name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Comment:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY29tbW5ldC1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCommnetFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-commnet-form',
                templateUrl: './add-commnet-form.component.html',
                styleUrls: ['./add-commnet-form.component.css']
            }]
    }], function () { return []; }, { addComment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "wHEC":
/*!****************************************!*\
  !*** ./src/app/httprequest.service.ts ***!
  \****************************************/
/*! exports provided: HTTPRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPRequestService", function() { return HTTPRequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HTTPRequestService {
    constructor() { }
    getData(url, fields = ['all']) {
        return fetch(url)
            .then(response => response.json())
            .then(data => {
            if (fields[0] !== 'all') {
                const newData = [];
                data.forEach((item) => {
                    const newObj = {};
                    for (let key in item) {
                        fields.forEach((field) => {
                            if (key === field) {
                                newObj[key] = item[key];
                            }
                        });
                    }
                    newData.push(newObj);
                });
                return newData;
            }
            else if (fields[0] === 'all') {
                return data;
            }
        });
    }
}
HTTPRequestService.ɵfac = function HTTPRequestService_Factory(t) { return new (t || HTTPRequestService)(); };
HTTPRequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HTTPRequestService, factory: HTTPRequestService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HTTPRequestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "yuhe":
/*!********************************!*\
  !*** ./src/app/gender.pipe.ts ***!
  \********************************/
/*! exports provided: GenderPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenderPipe", function() { return GenderPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GenderPipe {
    transform(value, gender) {
        if (value.gender == 'male') {
            return `Mr. ${value.name}`;
        }
        else if (value.gender == 'female') {
            return `Mrs. ${value.name}`;
        }
        return value.name;
    }
}
GenderPipe.ɵfac = function GenderPipe_Factory(t) { return new (t || GenderPipe)(); };
GenderPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "gender", type: GenderPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenderPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'gender'
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
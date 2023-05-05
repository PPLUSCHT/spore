"use strict";
(self["webpackChunkthreadsFrontend"] = self["webpackChunkthreadsFrontend"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_homepageComponents_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/homepageComponents/homepage/homepage.component */ 976);
/* harmony import */ var _components_postComponents_posts_container_posts_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/postComponents/posts-container/posts-container.component */ 2361);
/* harmony import */ var _components_loginComponents_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/loginComponents/login/login.component */ 1498);
/* harmony import */ var _components_textInputComponents_new_post_new_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/textInputComponents/new-post/new-post.component */ 1001);
/* harmony import */ var _components_loginComponents_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/loginComponents/sign-up/sign-up.component */ 7474);
/* harmony import */ var _components_searchComponents_search_results_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/searchComponents/search-results/search-results/search-results.component */ 3082);
/* harmony import */ var _components_Unfound_unfound_page_unfound_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Unfound/unfound-page/unfound-page.component */ 9788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);










const routes = [
    { path: '', component: _components_homepageComponents_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_0__.HomepageComponent },
    { path: 'Posts/Draft', component: _components_textInputComponents_new_post_new_post_component__WEBPACK_IMPORTED_MODULE_3__.NewPostComponent },
    { path: 'Posts/:id', component: _components_postComponents_posts_container_posts_container_component__WEBPACK_IMPORTED_MODULE_1__.PostsContainerComponent },
    { path: 'Login', component: _components_loginComponents_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent },
    { path: 'Signup', component: _components_loginComponents_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__.SignUpComponent },
    { path: 'Search', component: _components_searchComponents_search_results_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_5__.SearchResultsComponent },
    { path: '**', component: _components_Unfound_unfound_page_unfound_page_component__WEBPACK_IMPORTED_MODULE_6__.UnfoundPageComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_previous_url_previous_url_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/previous-url/previous-url.service */ 5049);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_homepageComponents_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/homepageComponents/nav-bar/nav-bar.component */ 7292);




class AppComponent {
    constructor(previousUrl) {
        this.previousUrl = previousUrl;
        this.title = 'threadsFrontend';
        previousUrl.begin();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_previous_url_previous_url_service__WEBPACK_IMPORTED_MODULE_0__.PreviousUrlService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "routed-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_homepageComponents_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__.NavBarComponent], styles: [".routed-content[_ngcontent-%COMP%]{\n    position: absolute;\n    top: 18.5px;\n    left: 0;\n    width: 100vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxPQUFPO0lBQ1AsWUFBWTtBQUNoQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3V0ZWQtY29udGVudHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxOC41cHg7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwdnc7XG59Il19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_headerInteceptor_header_intercept_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/headerInteceptor/header-intercept.service */ 8600);
/* harmony import */ var _components_commentComponents_logged_in_comment_logged_in_comment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/commentComponents/logged-in-comment/logged-in-comment.component */ 7063);
/* harmony import */ var _components_commentComponents_not_logged_in_comment_not_logged_in_comment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/commentComponents/not-logged-in-comment/not-logged-in-comment.component */ 4635);
/* harmony import */ var _directives_comment_type_directive_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/comment-type-directive.directive */ 6380);
/* harmony import */ var _components_commentComponents_abstract_comment_abstract_comment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/commentComponents/abstract-comment/abstract-comment.component */ 3477);
/* harmony import */ var _components_commentComponents_user_comment_user_comment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/commentComponents/user-comment/user-comment.component */ 4549);
/* harmony import */ var _components_commentComponents_comment_upvote_comment_upvote_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/commentComponents/comment-upvote/comment-upvote.component */ 8088);
/* harmony import */ var _components_textInputComponents_reply_box_reply_box_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/textInputComponents/reply-box/reply-box.component */ 1394);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_textInputComponents_abstract_text_box_abstract_text_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/textInputComponents/abstract-text-box/abstract-text-box.component */ 7137);
/* harmony import */ var _components_textInputComponents_comment_edit_comment_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/textInputComponents/comment-edit/comment-edit.component */ 4699);
/* harmony import */ var _components_postComponents_comment_container_comment_container_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/postComponents/comment-container/comment-container.component */ 3766);
/* harmony import */ var _components_loginComponents_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/loginComponents/login/login.component */ 1498);
/* harmony import */ var _components_textInputComponents_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/textInputComponents/post-edit/post-edit.component */ 2051);
/* harmony import */ var _components_postComponents_abstract_post_body_abstract_post_body_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/postComponents/abstract-post-body/abstract-post-body.component */ 6755);
/* harmony import */ var _components_postComponents_not_logged_in_post_not_logged_in_post_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/postComponents/not-logged-in-post/not-logged-in-post.component */ 642);
/* harmony import */ var _components_postComponents_logged_in_post_logged_in_post_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/postComponents/logged-in-post/logged-in-post.component */ 631);
/* harmony import */ var _components_postComponents_user_post_user_post_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/postComponents/user-post/user-post.component */ 8934);
/* harmony import */ var _components_homepageComponents_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/homepageComponents/top-bar/top-bar.component */ 2055);
/* harmony import */ var _components_postComponents_posts_container_posts_container_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/postComponents/posts-container/posts-container.component */ 2361);
/* harmony import */ var _directives_post_selector_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/post-selector.directive */ 2112);
/* harmony import */ var _components_homepageComponents_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/homepageComponents/post-card/post-card.component */ 7079);
/* harmony import */ var _components_homepageComponents_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/homepageComponents/homepage/homepage.component */ 976);
/* harmony import */ var _components_textInputComponents_new_post_new_post_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/textInputComponents/new-post/new-post.component */ 1001);
/* harmony import */ var _components_homepageComponents_post_card_container_post_card_container_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/homepageComponents/post-card-container/post-card-container.component */ 2073);
/* harmony import */ var _components_loginComponents_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/loginComponents/sign-up/sign-up.component */ 7474);
/* harmony import */ var _components_homepageComponents_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/homepageComponents/nav-bar/nav-bar.component */ 7292);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-infinite-scroll */ 7364);
/* harmony import */ var _components_textInputComponents_character_count_character_count_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/textInputComponents/character-count/character-count.component */ 7002);
/* harmony import */ var _components_searchComponents_search_results_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/searchComponents/search-results/search-results/search-results.component */ 3082);
/* harmony import */ var _components_Unfound_unfound_page_unfound_page_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/Unfound/unfound-page/unfound-page.component */ 9788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/common */ 4666);





































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_32__.HTTP_INTERCEPTORS, useClass: _services_headerInteceptor_header_intercept_service__WEBPACK_IMPORTED_MODULE_2__.HeaderInterceptService, multi: true }], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_33__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_32__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_34__.ReactiveFormsModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_35__.InfiniteScrollModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_commentComponents_abstract_comment_abstract_comment_component__WEBPACK_IMPORTED_MODULE_6__.AbstractCommentComponent,
        _directives_comment_type_directive_directive__WEBPACK_IMPORTED_MODULE_5__.CommentTypeDirective,
        _components_commentComponents_logged_in_comment_logged_in_comment_component__WEBPACK_IMPORTED_MODULE_3__.LoggedInCommentComponent,
        _components_commentComponents_not_logged_in_comment_not_logged_in_comment_component__WEBPACK_IMPORTED_MODULE_4__.NotLoggedInCommentComponent,
        _components_commentComponents_user_comment_user_comment_component__WEBPACK_IMPORTED_MODULE_7__.UserCommentComponent,
        _components_commentComponents_comment_upvote_comment_upvote_component__WEBPACK_IMPORTED_MODULE_8__.CommentUpvoteComponent,
        _components_textInputComponents_reply_box_reply_box_component__WEBPACK_IMPORTED_MODULE_9__.ReplyBoxComponent,
        _components_textInputComponents_abstract_text_box_abstract_text_box_component__WEBPACK_IMPORTED_MODULE_10__.AbstractTextBoxComponent,
        _components_textInputComponents_comment_edit_comment_edit_component__WEBPACK_IMPORTED_MODULE_11__.CommentEditComponent,
        _components_postComponents_comment_container_comment_container_component__WEBPACK_IMPORTED_MODULE_12__.CommentContainerComponent,
        _components_loginComponents_login_login_component__WEBPACK_IMPORTED_MODULE_13__.LoginComponent,
        _components_textInputComponents_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_14__.PostEditComponent,
        _components_postComponents_abstract_post_body_abstract_post_body_component__WEBPACK_IMPORTED_MODULE_15__.AbstractPostBodyComponent,
        _components_postComponents_not_logged_in_post_not_logged_in_post_component__WEBPACK_IMPORTED_MODULE_16__.NotLoggedInPostComponent,
        _components_postComponents_logged_in_post_logged_in_post_component__WEBPACK_IMPORTED_MODULE_17__.LoggedInPostComponent,
        _components_postComponents_user_post_user_post_component__WEBPACK_IMPORTED_MODULE_18__.UserPostComponent,
        _components_homepageComponents_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_19__.TopBarComponent,
        _directives_post_selector_directive__WEBPACK_IMPORTED_MODULE_21__.PostSelectorDirective,
        _components_homepageComponents_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_22__.PostCardComponent,
        _components_homepageComponents_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_23__.HomepageComponent,
        _components_textInputComponents_new_post_new_post_component__WEBPACK_IMPORTED_MODULE_24__.NewPostComponent,
        _components_postComponents_posts_container_posts_container_component__WEBPACK_IMPORTED_MODULE_20__.PostsContainerComponent,
        _components_homepageComponents_post_card_container_post_card_container_component__WEBPACK_IMPORTED_MODULE_25__.PostCardContainerComponent,
        _components_loginComponents_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_26__.SignUpComponent,
        _components_homepageComponents_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_27__.NavBarComponent,
        _components_textInputComponents_character_count_character_count_component__WEBPACK_IMPORTED_MODULE_28__.CharacterCountComponent,
        _components_searchComponents_search_results_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_29__.SearchResultsComponent,
        _components_Unfound_unfound_page_unfound_page_component__WEBPACK_IMPORTED_MODULE_30__.UnfoundPageComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_33__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_32__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_34__.ReactiveFormsModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_35__.InfiniteScrollModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵsetComponentScope"](_components_commentComponents_logged_in_comment_logged_in_comment_component__WEBPACK_IMPORTED_MODULE_3__.LoggedInCommentComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_36__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_36__.NgIf, _directives_comment_type_directive_directive__WEBPACK_IMPORTED_MODULE_5__.CommentTypeDirective,
    _components_commentComponents_comment_upvote_comment_upvote_component__WEBPACK_IMPORTED_MODULE_8__.CommentUpvoteComponent,
    _components_textInputComponents_reply_box_reply_box_component__WEBPACK_IMPORTED_MODULE_9__.ReplyBoxComponent], []);
_angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵsetComponentScope"](_components_commentComponents_not_logged_in_comment_not_logged_in_comment_component__WEBPACK_IMPORTED_MODULE_4__.NotLoggedInCommentComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_36__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_36__.NgIf, _directives_comment_type_directive_directive__WEBPACK_IMPORTED_MODULE_5__.CommentTypeDirective], []);
_angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵsetComponentScope"](_components_commentComponents_user_comment_user_comment_component__WEBPACK_IMPORTED_MODULE_7__.UserCommentComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_36__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_36__.NgIf, _directives_comment_type_directive_directive__WEBPACK_IMPORTED_MODULE_5__.CommentTypeDirective,
    _components_commentComponents_comment_upvote_comment_upvote_component__WEBPACK_IMPORTED_MODULE_8__.CommentUpvoteComponent,
    _components_textInputComponents_reply_box_reply_box_component__WEBPACK_IMPORTED_MODULE_9__.ReplyBoxComponent,
    _components_textInputComponents_comment_edit_comment_edit_component__WEBPACK_IMPORTED_MODULE_11__.CommentEditComponent], []);


/***/ }),

/***/ 9788:
/*!***************************************************************************!*\
  !*** ./src/app/components/Unfound/unfound-page/unfound-page.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnfoundPageComponent": () => (/* binding */ UnfoundPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class UnfoundPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
UnfoundPageComponent.ɵfac = function UnfoundPageComponent_Factory(t) { return new (t || UnfoundPageComponent)(); };
UnfoundPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnfoundPageComponent, selectors: [["app-unfound-page"]], decls: 3, vars: 0, template: function UnfoundPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "The content you are looking for never existed or no longer does. Please navigate back to the home page if you are lost!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["div[_ngcontent-%COMP%]{\n    display: flex;\n    padding: 15px;\n    width: 100vw;\n    flex-direction: row;\n    justify-content: center;\n    background-color: var(--secondary-background);\n    min-height: 100vh;\n}\n\nspan[_ngcontent-%COMP%]{\n    width: 80vw;\n    color: var(--primary-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuZm91bmQtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qiw2Q0FBNkM7SUFDN0MsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdDQUFnQztBQUNwQyIsImZpbGUiOiJ1bmZvdW5kLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQpO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5zcGFue1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xufSJdfQ== */"] });


/***/ }),

/***/ 3477:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/commentComponents/abstract-comment/abstract-comment.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractCommentComponent": () => (/* binding */ AbstractCommentComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_comment_comment_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/comment/comment-service.service */ 7609);
/* harmony import */ var src_app_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/authorization.service */ 1874);
/* harmony import */ var src_app_services_post_data_storage_post_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post-data-storage/post-data-storage.service */ 9223);
/* harmony import */ var src_app_services_deletedComment_deleted_comment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/deletedComment/deleted-comment.service */ 8156);






class AbstractCommentComponent {
    constructor(service, authService, postDataStorage, deletedComment) {
        this.service = service;
        this.authService = authService;
        this.postDataStorage = postDataStorage;
        this.deletedComment = deletedComment;
        this.childComments = [];
        this.childCommentSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this.expand = false;
        this.childrenLoaded = false;
        this.childrenExist = false;
        this.childrenCount = 0;
    }
    ngOnInit() {
        if (this.commentData.userID == 0) {
            this.deleted = true;
        }
        else {
            this.deleted = false;
        }
        this.postDataStorage.getID().subscribe((id) => this.postID = id);
        this.childCommentSubject.subscribe((comments) => {
            this.childComments = comments;
            this.updateChildrenExist();
        });
        this.deletedComment.getDeletedID().subscribe((id) => this.removeComment(id));
        this.getChildren();
    }
    getChildren() {
        this.service.getChildren(this.commentData.commentID)
            .subscribe({
            next: (comments) => {
                this.updateSubject(comments);
                this.childrenLoaded = true;
            },
            error: (error) => { console.error(error); alert(error); }
        });
    }
    expandButton() {
        if (!this.childrenLoaded) {
            this.getChildren();
        }
        this.expand = !this.expand;
    }
    removeComment(id) {
        this.childComments = this.childComments.filter((comment) => comment.commentID !== id);
    }
    updateSubject(comments) {
        this.childCommentSubject.next(comments);
    }
    pushToSubject(comment) {
        let comments = this.childCommentSubject.value;
        comments.push(comment);
        this.updateSubject(comments);
    }
    updateChildrenExist() {
        this.childrenExist = this.childCommentSubject.value.length > 0 ? true : false;
        this.childrenCount = this.childCommentSubject.value.length;
    }
}
AbstractCommentComponent.ɵfac = function AbstractCommentComponent_Factory(t) { return new (t || AbstractCommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_comment_comment_service_service__WEBPACK_IMPORTED_MODULE_0__.CommentService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_1__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_post_data_storage_post_data_storage_service__WEBPACK_IMPORTED_MODULE_2__.PostDataStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_deletedComment_deleted_comment_service__WEBPACK_IMPORTED_MODULE_3__.DeletedCommentService)); };
AbstractCommentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AbstractCommentComponent, selectors: [["app-abstract-comment"]], inputs: { commentData: "commentData", postID: "postID" }, decls: 0, vars: 0, template: function AbstractCommentComponent_Template(rf, ctx) { }, styles: [".content-and-votes[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    margin: 10px;\n    width: calc(100% - 10px);\n}\n\n.user-info-bar[_ngcontent-%COMP%]{\n    color: var(--light-text);\n    font-size: 0.8em;\n}\n\n.content[_ngcontent-%COMP%]{\n    margin-left: 10px;\n    width: calc(100% - 44px);\n    margin-right: 10px;\n    white-space: pre-wrap;\n}\n\n.comment[_ngcontent-%COMP%]{\n    padding-top: 7px;\n    padding-bottom: 7px;\n    padding-left: 5px;\n    background-color: var(--primary-background);\n}\n\n.time[_ngcontent-%COMP%]{\n    font-weight: 100;\n}\n\n.load-children[_ngcontent-%COMP%]{\n    font-size: 0.55rem;\n    font-weight: 800;\n}\n\n.load-children[_ngcontent-%COMP%]:hover{\n    color: var(--active);\n}\n\n.vertical-line[_ngcontent-%COMP%]{\n    margin-left: 15px;\n    border-left: 3px solid var(--secondary-background);\n}\n\n.vertical-line[_ngcontent-%COMP%]:hover{\n    border-left: 3px solid var(--active);\n}\n\n.children-and-vl-container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n}\n\n.children[_ngcontent-%COMP%]{\n    display: flex;\n    width: 90%;\n    align-items: stretch;\n    flex-direction: column;\n}\n\nul[_ngcontent-%COMP%]{\n    padding-left: 10px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    list-style-type: none;\n}\n\n.comment-and-children[_ngcontent-%COMP%]{\n    background-color: var(--primary-background);\n}\n\n.reply-container[_ngcontent-%COMP%]{\n    margin-left: 15px;\n}\n\n.button-container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    justify-content: left;\n    margin-top: 10px;\n    margin-bottom: 5px;\n}\n\nbutton[_ngcontent-%COMP%]{\n    border: none;\n    background-color: var(--primary-background);\n    border-radius: 10%;\n    font-size: 0.8em;\n    display: flex;\n    flex-direction: row;\n    justify-content:space-around;\n    align-items: center;\n    color: var(--light-text);\n    font-weight: 700;\n}\n\nbutton[_ngcontent-%COMP%]:hover{\n    color: var(--active);\n    background-color: transparent;\n    filter: invert(32%) sepia(73%) saturate(1580%) hue-rotate(335deg) brightness(102%) contrast(93%);\n}\n\n.button-graphic[_ngcontent-%COMP%]{\n    padding-right: 3px;\n    height: 1em;\n}\n\n.button-container[_ngcontent-%COMP%]{\n    padding-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItY29tbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDJDQUEyQztJQUMzQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDZCQUE2QjtJQUM3QixnR0FBZ0c7QUFDcEc7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InVzZXItY29tbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtYW5kLXZvdGVze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xufVxuXG4udXNlci1pbmZvLWJhcntcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dCk7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuLmNvbnRlbnR7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ0cHgpO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbi5jb21tZW50e1xuICAgIHBhZGRpbmctdG9wOiA3cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xufVxuXG4udGltZXtcbiAgICBmb250LXdlaWdodDogMTAwO1xufVxuXG4ubG9hZC1jaGlsZHJlbntcbiAgICBmb250LXNpemU6IDAuNTVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmxvYWQtY2hpbGRyZW46aG92ZXJ7XG4gICAgY29sb3I6IHZhcigtLWFjdGl2ZSk7XG59XG5cbi52ZXJ0aWNhbC1saW5le1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQpO1xufVxuXG4udmVydGljYWwtbGluZTpob3ZlcntcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWFjdGl2ZSk7XG59XG5cbi5jaGlsZHJlbi1hbmQtdmwtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jaGlsZHJlbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxudWx7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5jb21tZW50LWFuZC1jaGlsZHJlbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xufVxuXG4ucmVwbHktY29udGFpbmVye1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5idXR0b257XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dCk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuYnV0dG9uOmhvdmVye1xuICAgIGNvbG9yOiB2YXIoLS1hY3RpdmUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZpbHRlcjogaW52ZXJ0KDMyJSkgc2VwaWEoNzMlKSBzYXR1cmF0ZSgxNTgwJSkgaHVlLXJvdGF0ZSgzMzVkZWcpIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoOTMlKTtcbn1cblxuLmJ1dHRvbi1ncmFwaGlje1xuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgICBoZWlnaHQ6IDFlbTtcbn1cblxuLmJ1dHRvbi1jb250YWluZXJ7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59Il19 */"] });


/***/ }),

/***/ 8088:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/commentComponents/comment-upvote/comment-upvote.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentUpvoteComponent": () => (/* binding */ CommentUpvoteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/UpvoteScore */ 4520);
/* harmony import */ var src_app_services_comment_comment_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/comment/comment-service.service */ 7609);
/* harmony import */ var src_app_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/authorization.service */ 1874);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






class CommentUpvoteComponent {
    constructor(service, auth) {
        this.service = service;
        this.auth = auth;
        this.voteChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.voteTotalChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.upvoteHighlight = false;
        this.downvoteHighlight = false;
    }
    ngOnInit() {
        if (this.vote == src_app_enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_0__.UpvoteScore.Upvote) {
            this.upvoteHighlight = true;
        }
        else if (this.vote == src_app_enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_0__.UpvoteScore.Downvote) {
            this.downvoteHighlight = true;
        }
    }
    changeVote(previousVote, vote) {
        this.vote = vote;
        this.voteChange.emit(this.vote);
        this.voteTotal += -1 * previousVote + vote;
        this.voteTotalChange.emit(this.voteTotal);
        if (this.vote === src_app_enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_0__.UpvoteScore.Upvote) {
            this.upvoteHighlight = true;
            this.downvoteHighlight = false;
        }
        else if (this.vote === src_app_enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_0__.UpvoteScore.Downvote) {
            this.upvoteHighlight = false;
            this.downvoteHighlight = true;
        }
        else {
            this.downvoteHighlight = false;
            this.upvoteHighlight = false;
        }
    }
    upvoteButton() {
        const commentVote = {
            value: src_app_enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_0__.UpvoteScore.Upvote,
            userID: this.auth.getUserID(),
            commentID: this.commentID
        };
        if (this.vote === src_app_enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_0__.UpvoteScore.Upvote) {
            this.service.deleteCommentVote(commentVote).subscribe({
                next: () => { this.changeVote(1, 0); },
                error: (err) => { console.error(err); }
            });
        }
        else if (this.vote === src_app_enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_0__.UpvoteScore.Downvote) {
            this.service.patchCommentVote(commentVote).subscribe({
                next: (vote) => this.changeVote(-1, vote.value),
                error: (err) => { console.error(err); }
            });
        }
        else {
            this.service.postCommentVote(commentVote).subscribe({
                next: (vote) => this.changeVote(0, vote.value),
                error: (err) => { console.error(err); }
            });
        }
    }
    downvoteButton() {
        const commentVote = {
            value: src_app_enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_0__.UpvoteScore.Downvote,
            userID: this.auth.getUserID(),
            commentID: this.commentID
        };
        if (this.vote === src_app_enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_0__.UpvoteScore.Downvote) {
            this.service.deleteCommentVote(commentVote).subscribe({
                next: () => this.changeVote(-1, 0),
                error: (err) => { console.error(err); }
            });
        }
        else if (this.vote === src_app_enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_0__.UpvoteScore.Upvote) {
            this.service.patchCommentVote(commentVote).subscribe({
                next: (vote) => this.changeVote(1, vote.value),
                error: (err) => { console.error(err); }
            });
        }
        else {
            this.service.postCommentVote(commentVote).subscribe({
                next: (vote) => this.changeVote(0, vote.value),
                error: (err) => { console.error(err); }
            });
        }
    }
}
CommentUpvoteComponent.ɵfac = function CommentUpvoteComponent_Factory(t) { return new (t || CommentUpvoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_comment_comment_service_service__WEBPACK_IMPORTED_MODULE_1__.CommentService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_2__.AuthorizationService)); };
CommentUpvoteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CommentUpvoteComponent, selectors: [["app-comment-upvote"]], inputs: { commentID: "commentID", vote: "vote", voteTotal: "voteTotal" }, outputs: { voteChange: "voteChange", voteTotalChange: "voteTotalChange" }, decls: 5, vars: 4, consts: [[1, "upvote-container"], ["src", "assets/svg/down.svg", 3, "ngClass", "click"], [3, "ngClass"]], template: function CommentUpvoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CommentUpvoteComponent_Template_img_click_1_listener() { return ctx.upvoteButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CommentUpvoteComponent_Template_img_click_4_listener() { return ctx.downvoteButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.upvoteHighlight ? "highlighted-upvote" : "unhighlighted-upvote");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.voteTotal >= 0 ? "upvoted-total" : "downvoted-total");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.voteTotal, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.downvoteHighlight ? "highlighted-downvote" : "unhighlighted-downvote");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass], styles: ["[_nghost-%COMP%]{\n    display: block;\n    height: 60px;\n    width: 25px;\n}\n\n.highlighted-upvote[_ngcontent-%COMP%]{\n    height: 40%;\n    transform: rotate(0.5turn);\n    filter: invert(32%) sepia(73%) saturate(1580%) hue-rotate(335deg) brightness(102%) contrast(93%);\n}\n\n.unhighlighted-upvote[_ngcontent-%COMP%]{\n    height: 40%;\n    transform: rotate(0.5turn);\n}\n\n.highlighted-downvote[_ngcontent-%COMP%]{\n    height: 40%;\n    filter: invert(32%) sepia(73%) saturate(1580%) hue-rotate(335deg) brightness(102%) contrast(93%);\n}\n\n.unhighlighted-downvote[_ngcontent-%COMP%]{\n    height: 40%;\n}\n\n.unhighlighted-upvote[_ngcontent-%COMP%]:hover{\n    filter: invert(32%) sepia(73%) saturate(1580%) hue-rotate(335deg) brightness(102%) contrast(93%);\n}\n\n.unhighlighted-downvote[_ngcontent-%COMP%]:hover{\n    filter: invert(32%) sepia(73%) saturate(1580%) hue-rotate(335deg) brightness(102%) contrast(93%);\n}\n\n.upvote-container[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    color: var(--primary-background);\n    background-color: var(--secondary-background);\n    border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQtdXB2b3RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsZ0dBQWdHO0FBQ3BHOztBQUVBO0lBQ0ksV0FBVztJQUNYLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnR0FBZ0c7QUFDcEc7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnR0FBZ0c7QUFDcEc7O0FBRUE7SUFDSSxnR0FBZ0c7QUFDcEc7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQ0FBZ0M7SUFDaEMsNkNBQTZDO0lBQzdDLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJjb21tZW50LXVwdm90ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiAyNXB4O1xufVxuXG4uaGlnaGxpZ2h0ZWQtdXB2b3Rle1xuICAgIGhlaWdodDogNDAlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDAuNXR1cm4pO1xuICAgIGZpbHRlcjogaW52ZXJ0KDMyJSkgc2VwaWEoNzMlKSBzYXR1cmF0ZSgxNTgwJSkgaHVlLXJvdGF0ZSgzMzVkZWcpIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoOTMlKTtcbn1cblxuLnVuaGlnaGxpZ2h0ZWQtdXB2b3Rle1xuICAgIGhlaWdodDogNDAlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDAuNXR1cm4pO1xufVxuXG4uaGlnaGxpZ2h0ZWQtZG93bnZvdGV7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgZmlsdGVyOiBpbnZlcnQoMzIlKSBzZXBpYSg3MyUpIHNhdHVyYXRlKDE1ODAlKSBodWUtcm90YXRlKDMzNWRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCg5MyUpO1xufVxuXG4udW5oaWdobGlnaHRlZC1kb3dudm90ZXtcbiAgICBoZWlnaHQ6IDQwJTtcbn1cblxuLnVuaGlnaGxpZ2h0ZWQtdXB2b3RlOmhvdmVye1xuICAgIGZpbHRlcjogaW52ZXJ0KDMyJSkgc2VwaWEoNzMlKSBzYXR1cmF0ZSgxNTgwJSkgaHVlLXJvdGF0ZSgzMzVkZWcpIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoOTMlKTtcbn1cblxuLnVuaGlnaGxpZ2h0ZWQtZG93bnZvdGU6aG92ZXJ7XG4gICAgZmlsdGVyOiBpbnZlcnQoMzIlKSBzZXBpYSg3MyUpIHNhdHVyYXRlKDE1ODAlKSBodWUtcm90YXRlKDMzNWRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCg5MyUpO1xufVxuXG4udXB2b3RlLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbn0gIl19 */"] });


/***/ }),

/***/ 7063:
/*!***********************************************************************************************!*\
  !*** ./src/app/components/commentComponents/logged-in-comment/logged-in-comment.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggedInCommentComponent": () => (/* binding */ LoggedInCommentComponent)
/* harmony export */ });
/* harmony import */ var src_app_services_comment_comment_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/comment/comment-service.service */ 7609);
/* harmony import */ var _abstract_comment_abstract_comment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract-comment/abstract-comment.component */ 3477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



function LoggedInCommentComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-comment-upvote", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("voteChange", function LoggedInCommentComponent_ng_container_10_Template_app_comment_upvote_voteChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.commentData.userVote = $event); })("voteTotalChange", function LoggedInCommentComponent_ng_container_10_Template_app_comment_upvote_voteTotalChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.commentData.voteTotal = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("commentID", ctx_r0.commentData.commentID)("vote", ctx_r0.commentData.userVote)("voteTotal", ctx_r0.commentData.voteTotal);
} }
function LoggedInCommentComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 9)(2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoggedInCommentComponent_ng_container_13_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.replyButton()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function LoggedInCommentComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoggedInCommentComponent_ng_container_14_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.expandButton()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Load ", ctx_r2.childrenCount, " Replies");
} }
function LoggedInCommentComponent_ng_container_15_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-reply-box", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("deleteDialog", function LoggedInCommentComponent_ng_container_15_ng_container_4_Template_app_reply_box_deleteDialog_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.cancelButton()); })("newComment", function LoggedInCommentComponent_ng_container_15_ng_container_4_Template_app_reply_box_newComment_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.addComment($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("commentID", ctx_r11.commentData.commentID)("postID", ctx_r11.postID);
} }
function LoggedInCommentComponent_ng_container_15_ul_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function LoggedInCommentComponent_ng_container_15_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul")(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LoggedInCommentComponent_ng_container_15_ul_5_ng_container_2_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const comment_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("appCommentType", comment_r16);
} }
function LoggedInCommentComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 13)(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoggedInCommentComponent_ng_container_15_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.expandButton()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, LoggedInCommentComponent_ng_container_15_ng_container_4_Template, 2, 2, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, LoggedInCommentComponent_ng_container_15_ul_5_Template, 3, 1, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.replyDialog);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.childComments);
} }
class LoggedInCommentComponent extends _abstract_comment_abstract_comment_component__WEBPACK_IMPORTED_MODULE_1__.AbstractCommentComponent {
    constructor() {
        super(...arguments);
        this.replyDialog = false;
    }
    replyButton() {
        this.replyDialog = true;
        this.expand = true;
    }
    cancelButton() {
        this.replyDialog = false;
    }
    addComment(comment) {
        this.pushToSubject(comment);
        this.childrenExist = true;
        this.commentData.childIDs?.push(comment.commentID);
        this.expand = true;
    }
}
LoggedInCommentComponent.ɵfac = /*@__PURE__*/ function () { let ɵLoggedInCommentComponent_BaseFactory; return function LoggedInCommentComponent_Factory(t) { return (ɵLoggedInCommentComponent_BaseFactory || (ɵLoggedInCommentComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](LoggedInCommentComponent)))(t || LoggedInCommentComponent); }; }();
LoggedInCommentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoggedInCommentComponent, selectors: [["app-logged-in-comment"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([src_app_services_comment_comment_service_service__WEBPACK_IMPORTED_MODULE_0__.CommentService]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 7, consts: [[1, "comment_and_children"], [1, "comment"], [1, "user-info-bar"], [1, "poster-name"], [1, "time"], [1, "content-and-votes"], [4, "ngIf"], [1, "content"], [3, "commentID", "vote", "voteTotal", "voteChange", "voteTotalChange"], [1, "actionsBar"], [1, "reply", 3, "click"], ["src", "assets/svg/comment.svg", "alt", "", 1, "button-graphic"], [1, "load-children", 3, "click"], [1, "children-and-vl-container"], [1, "vertical-line", 3, "click"], [1, "children"], ["replyDialog", "", "class", "reply-container", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["replyDialog", "", 1, "reply-container"], [3, "commentID", "postID", "deleteDialog", "newComment"], [4, "appCommentType"]], template: function LoggedInCommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, LoggedInCommentComponent_ng_container_10_Template, 2, 3, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, LoggedInCommentComponent_ng_container_13_Template, 6, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, LoggedInCommentComponent_ng_container_14_Template, 3, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, LoggedInCommentComponent_ng_container_15_Template, 6, 2, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.commentData.posterName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.commentData.timeString);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.deleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.commentData.content, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.deleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.childrenExist && !ctx.expand);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.expand);
    } }, styles: [".content-and-votes[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    margin: 10px;\n    width: calc(100% - 10px);\n}\n\n.user-info-bar[_ngcontent-%COMP%]{\n    color: var(--light-text);\n    font-size: 0.8em;\n}\n\n.content[_ngcontent-%COMP%]{\n    margin-left: 10px;\n    width: calc(100% - 44px);\n    margin-right: 10px;\n    white-space: pre-wrap;\n}\n\n.comment[_ngcontent-%COMP%]{\n    padding-top: 7px;\n    padding-bottom: 7px;\n    padding-left: 5px;\n    background-color: var(--primary-background);\n}\n\n.time[_ngcontent-%COMP%]{\n    font-weight: 100;\n}\n\n.load-children[_ngcontent-%COMP%]{\n    font-size: 0.55rem;\n    font-weight: 800;\n}\n\n.load-children[_ngcontent-%COMP%]:hover{\n    color: var(--active);\n}\n\n.vertical-line[_ngcontent-%COMP%]{\n    margin-left: 15px;\n    border-left: 3px solid var(--secondary-background);\n}\n\n.vertical-line[_ngcontent-%COMP%]:hover{\n    border-left: 3px solid var(--active);\n}\n\n.children-and-vl-container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n}\n\n.children[_ngcontent-%COMP%]{\n    display: flex;\n    width: 90%;\n    align-items: stretch;\n    flex-direction: column;\n}\n\nul[_ngcontent-%COMP%]{\n    padding-left: 10px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    list-style-type: none;\n}\n\n.comment-and-children[_ngcontent-%COMP%]{\n    background-color: var(--primary-background);\n}\n\n.reply-container[_ngcontent-%COMP%]{\n    margin-left: 15px;\n}\n\n.button-container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    justify-content: left;\n    margin-top: 10px;\n    margin-bottom: 5px;\n}\n\nbutton[_ngcontent-%COMP%]{\n    border: none;\n    background-color: var(--primary-background);\n    border-radius: 10%;\n    font-size: 0.8em;\n    display: flex;\n    flex-direction: row;\n    justify-content:space-around;\n    align-items: center;\n    color: var(--light-text);\n    font-weight: 700;\n}\n\nbutton[_ngcontent-%COMP%]:hover{\n    color: var(--active);\n    background-color: transparent;\n    filter: invert(32%) sepia(73%) saturate(1580%) hue-rotate(335deg) brightness(102%) contrast(93%);\n}\n\n.button-graphic[_ngcontent-%COMP%]{\n    padding-right: 3px;\n    height: 1em;\n}\n\n.button-container[_ngcontent-%COMP%]{\n    padding-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItY29tbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDJDQUEyQztJQUMzQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDZCQUE2QjtJQUM3QixnR0FBZ0c7QUFDcEc7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InVzZXItY29tbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtYW5kLXZvdGVze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xufVxuXG4udXNlci1pbmZvLWJhcntcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dCk7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuLmNvbnRlbnR7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ0cHgpO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbi5jb21tZW50e1xuICAgIHBhZGRpbmctdG9wOiA3cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xufVxuXG4udGltZXtcbiAgICBmb250LXdlaWdodDogMTAwO1xufVxuXG4ubG9hZC1jaGlsZHJlbntcbiAgICBmb250LXNpemU6IDAuNTVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmxvYWQtY2hpbGRyZW46aG92ZXJ7XG4gICAgY29sb3I6IHZhcigtLWFjdGl2ZSk7XG59XG5cbi52ZXJ0aWNhbC1saW5le1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQpO1xufVxuXG4udmVydGljYWwtbGluZTpob3ZlcntcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWFjdGl2ZSk7XG59XG5cbi5jaGlsZHJlbi1hbmQtdmwtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jaGlsZHJlbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxudWx7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5jb21tZW50LWFuZC1jaGlsZHJlbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xufVxuXG4ucmVwbHktY29udGFpbmVye1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5idXR0b257XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dCk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuYnV0dG9uOmhvdmVye1xuICAgIGNvbG9yOiB2YXIoLS1hY3RpdmUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZpbHRlcjogaW52ZXJ0KDMyJSkgc2VwaWEoNzMlKSBzYXR1cmF0ZSgxNTgwJSkgaHVlLXJvdGF0ZSgzMzVkZWcpIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoOTMlKTtcbn1cblxuLmJ1dHRvbi1ncmFwaGlje1xuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgICBoZWlnaHQ6IDFlbTtcbn1cblxuLmJ1dHRvbi1jb250YWluZXJ7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59Il19 */"] });


/***/ }),

/***/ 4635:
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/commentComponents/not-logged-in-comment/not-logged-in-comment.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotLoggedInCommentComponent": () => (/* binding */ NotLoggedInCommentComponent)
/* harmony export */ });
/* harmony import */ var _abstract_comment_abstract_comment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-comment/abstract-comment.component */ 3477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


function NotLoggedInCommentComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.commentData.voteTotal);
} }
function NotLoggedInCommentComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotLoggedInCommentComponent_ng_container_13_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.expandButton()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Load ", ctx_r1.childrenCount, " Replies");
} }
function NotLoggedInCommentComponent_ng_container_14_ul_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function NotLoggedInCommentComponent_ng_container_14_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul")(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NotLoggedInCommentComponent_ng_container_14_ul_4_ng_container_2_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const comment_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appCommentType", comment_r6);
} }
function NotLoggedInCommentComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10)(2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotLoggedInCommentComponent_ng_container_14_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.expandButton()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NotLoggedInCommentComponent_ng_container_14_ul_4_Template, 3, 1, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.childComments);
} }
class NotLoggedInCommentComponent extends _abstract_comment_abstract_comment_component__WEBPACK_IMPORTED_MODULE_0__.AbstractCommentComponent {
}
NotLoggedInCommentComponent.ɵfac = /*@__PURE__*/ function () { let ɵNotLoggedInCommentComponent_BaseFactory; return function NotLoggedInCommentComponent_Factory(t) { return (ɵNotLoggedInCommentComponent_BaseFactory || (ɵNotLoggedInCommentComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](NotLoggedInCommentComponent)))(t || NotLoggedInCommentComponent); }; }();
NotLoggedInCommentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NotLoggedInCommentComponent, selectors: [["app-not-logged-in-comment"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 6, consts: [[1, "comment_and_children"], [1, "comment"], [1, "user-info-bar"], [1, "poster-name"], [1, "time"], [1, "content-and-votes"], [4, "ngIf"], [1, "content"], [1, "votes"], [1, "load-children", 3, "click"], [1, "children-and-vl-container"], [1, "vertical-line", 3, "click"], [1, "children"], [4, "ngFor", "ngForOf"], [4, "appCommentType"]], template: function NotLoggedInCommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NotLoggedInCommentComponent_ng_container_10_Template, 4, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, NotLoggedInCommentComponent_ng_container_13_Template, 3, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, NotLoggedInCommentComponent_ng_container_14_Template, 5, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.commentData.posterName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.commentData.timeString);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.deleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.commentData.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.childrenExist && !ctx.expand);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.expand);
    } }, styles: [".content-and-votes[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    margin: 10px;\n    width: calc(100% - 10px);\n}\n\n.user-info-bar[_ngcontent-%COMP%]{\n    color: var(--light-text);\n    font-size: 0.8em;\n}\n\n.content[_ngcontent-%COMP%]{\n    margin-left: 10px;\n    width: calc(100% - 44px);\n    margin-right: 10px;\n    white-space: pre-wrap;\n}\n\n.comment[_ngcontent-%COMP%]{\n    padding-top: 7px;\n    padding-bottom: 7px;\n    padding-left: 5px;\n    background-color: var(--primary-background);\n}\n\n.time[_ngcontent-%COMP%]{\n    font-weight: 100;\n}\n\n.load-children[_ngcontent-%COMP%]{\n    font-size: 0.55rem;\n    font-weight: 800;\n}\n\n.load-children[_ngcontent-%COMP%]:hover{\n    color: var(--active);\n}\n\n.vertical-line[_ngcontent-%COMP%]{\n    margin-left: 15px;\n    border-left: 3px solid var(--secondary-background);\n}\n\n.vertical-line[_ngcontent-%COMP%]:hover{\n    border-left: 3px solid var(--active);\n}\n\n.children-and-vl-container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n}\n\n.children[_ngcontent-%COMP%]{\n    display: flex;\n    width: 90%;\n    align-items: stretch;\n    flex-direction: column;\n}\n\nul[_ngcontent-%COMP%]{\n    padding-left: 10px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    list-style-type: none;\n}\n\n.comment-and-children[_ngcontent-%COMP%]{\n    background-color: var(--primary-background);\n}\n\n.reply-container[_ngcontent-%COMP%]{\n    margin-left: 15px;\n}\n\n.button-container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    justify-content: left;\n    margin-top: 10px;\n    margin-bottom: 5px;\n}\n\nbutton[_ngcontent-%COMP%]{\n    border: none;\n    background-color: var(--primary-background);\n    border-radius: 10%;\n    font-size: 0.8em;\n    display: flex;\n    flex-direction: row;\n    justify-content:space-around;\n    align-items: center;\n    color: var(--light-text);\n    font-weight: 700;\n}\n\nbutton[_ngcontent-%COMP%]:hover{\n    color: var(--active);\n    background-color: transparent;\n    filter: invert(32%) sepia(73%) saturate(1580%) hue-rotate(335deg) brightness(102%) contrast(93%);\n}\n\n.button-graphic[_ngcontent-%COMP%]{\n    padding-right: 3px;\n    height: 1em;\n}\n\n.button-container[_ngcontent-%COMP%]{\n    padding-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItY29tbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDJDQUEyQztJQUMzQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDZCQUE2QjtJQUM3QixnR0FBZ0c7QUFDcEc7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InVzZXItY29tbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtYW5kLXZvdGVze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xufVxuXG4udXNlci1pbmZvLWJhcntcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dCk7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuLmNvbnRlbnR7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ0cHgpO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbi5jb21tZW50e1xuICAgIHBhZGRpbmctdG9wOiA3cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xufVxuXG4udGltZXtcbiAgICBmb250LXdlaWdodDogMTAwO1xufVxuXG4ubG9hZC1jaGlsZHJlbntcbiAgICBmb250LXNpemU6IDAuNTVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmxvYWQtY2hpbGRyZW46aG92ZXJ7XG4gICAgY29sb3I6IHZhcigtLWFjdGl2ZSk7XG59XG5cbi52ZXJ0aWNhbC1saW5le1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQpO1xufVxuXG4udmVydGljYWwtbGluZTpob3ZlcntcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWFjdGl2ZSk7XG59XG5cbi5jaGlsZHJlbi1hbmQtdmwtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jaGlsZHJlbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxudWx7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5jb21tZW50LWFuZC1jaGlsZHJlbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xufVxuXG4ucmVwbHktY29udGFpbmVye1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5idXR0b257XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dCk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuYnV0dG9uOmhvdmVye1xuICAgIGNvbG9yOiB2YXIoLS1hY3RpdmUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZpbHRlcjogaW52ZXJ0KDMyJSkgc2VwaWEoNzMlKSBzYXR1cmF0ZSgxNTgwJSkgaHVlLXJvdGF0ZSgzMzVkZWcpIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoOTMlKTtcbn1cblxuLmJ1dHRvbi1ncmFwaGlje1xuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgICBoZWlnaHQ6IDFlbTtcbn1cblxuLmJ1dHRvbi1jb250YWluZXJ7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59Il19 */", ".votes[_ngcontent-%COMP%]{\n    background-color: var(--secondary-background);\n    min-width: 26px;\n    height: 26px;\n    border-radius: 50%;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    color: var(--primary-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1sb2dnZWQtaW4tY29tbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkNBQTZDO0lBQzdDLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGdDQUFnQztBQUNwQyIsImZpbGUiOiJub3QtbG9nZ2VkLWluLWNvbW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52b3Rlc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZCk7XG4gICAgbWluLXdpZHRoOiAyNnB4O1xuICAgIGhlaWdodDogMjZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xufSJdfQ== */"] });


/***/ }),

/***/ 4549:
/*!*************************************************************************************!*\
  !*** ./src/app/components/commentComponents/user-comment/user-comment.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserCommentComponent": () => (/* binding */ UserCommentComponent)
/* harmony export */ });
/* harmony import */ var _logged_in_comment_logged_in_comment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logged-in-comment/logged-in-comment.component */ 7063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


function UserCommentComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-comment-upvote", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("voteChange", function UserCommentComponent_ng_container_10_Template_app_comment_upvote_voteChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.commentData.userVote = $event); })("voteTotalChange", function UserCommentComponent_ng_container_10_Template_app_comment_upvote_voteTotalChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.commentData.voteTotal = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("commentID", ctx_r0.commentData.commentID)("vote", ctx_r0.commentData.userVote)("voteTotal", ctx_r0.commentData.voteTotal);
} }
function UserCommentComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.commentData.content, " ");
} }
function UserCommentComponent_app_comment_edit_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-comment-edit", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("commentDataChange", function UserCommentComponent_app_comment_edit_13_Template_app_comment_edit_commentDataChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.commentData = $event); })("deleteDialog", function UserCommentComponent_app_comment_edit_13_Template_app_comment_edit_deleteDialog_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.closeEdit()); })("commentDataChange", function UserCommentComponent_app_comment_edit_13_Template_app_comment_edit_commentDataChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.closeEdit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("commentData", ctx_r2.commentData)("text", ctx_r2.commentData.content);
} }
function UserCommentComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11)(2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserCommentComponent_ng_container_14_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.replyButton()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserCommentComponent_ng_container_14_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.editButton()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserCommentComponent_ng_container_14_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.deleteCommentButton()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function UserCommentComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserCommentComponent_ng_container_15_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.expandButton()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Load ", ctx_r4.childrenCount, " Replies");
} }
function UserCommentComponent_ng_container_16_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-reply-box", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("deleteDialog", function UserCommentComponent_ng_container_16_ng_container_4_Template_app_reply_box_deleteDialog_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.cancelButton()); })("newComment", function UserCommentComponent_ng_container_16_ng_container_4_Template_app_reply_box_newComment_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.addComment($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("commentID", ctx_r19.commentData.commentID)("postID", ctx_r19.postID);
} }
function UserCommentComponent_ng_container_16_ul_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function UserCommentComponent_ng_container_16_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul")(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserCommentComponent_ng_container_16_ul_5_ng_container_2_Template, 1, 0, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const comment_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appCommentType", comment_r24);
} }
function UserCommentComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserCommentComponent_ng_container_16_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r26.expandButton()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UserCommentComponent_ng_container_16_ng_container_4_Template, 2, 2, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UserCommentComponent_ng_container_16_ul_5_Template, 3, 1, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.replyDialog);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.childComments);
} }
class UserCommentComponent extends _logged_in_comment_logged_in_comment_component__WEBPACK_IMPORTED_MODULE_0__.LoggedInCommentComponent {
    constructor() {
        super(...arguments);
        this.editMode = false;
    }
    updateContent(content) {
        this.commentData.content = content;
        this.closeEdit();
    }
    deleteCommentButton() {
        this.service.deleteComment(this.commentData.commentID)
            .subscribe({
            next: (id) => {
                if (this.childrenExist) {
                    this.commentData.userID = 0;
                    this.commentData.content = "deleted";
                    this.commentData.posterName = "deleted";
                    this.deleted = true;
                }
                else {
                    this.deletedComment.updateID(id);
                }
            },
            error: (err) => { alert(`Something went wrong: ${err}`); }
        });
    }
    editButton() {
        this.editMode = true;
    }
    closeEdit() {
        this.editMode = false;
    }
}
UserCommentComponent.ɵfac = /*@__PURE__*/ function () { let ɵUserCommentComponent_BaseFactory; return function UserCommentComponent_Factory(t) { return (ɵUserCommentComponent_BaseFactory || (ɵUserCommentComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](UserCommentComponent)))(t || UserCommentComponent); }; }();
UserCommentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserCommentComponent, selectors: [["app-user-comment"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 17, vars: 8, consts: [[1, "comment-and-children"], [1, "comment"], [1, "user-info-bar"], [1, "poster-name"], [1, "time"], [1, "content-and-votes"], [4, "ngIf"], [1, "content"], [3, "commentData", "text", "commentDataChange", "deleteDialog", 4, "ngIf"], [3, "commentID", "vote", "voteTotal", "voteChange", "voteTotalChange"], [3, "commentData", "text", "commentDataChange", "deleteDialog"], [1, "button-container"], [1, "reply", 3, "click"], ["src", "assets/svg/comment.svg", "alt", "", 1, "button-graphic"], [1, "edit", 3, "click"], ["src", "assets/svg/edit.svg", "alt", "", 1, "button-graphic"], [1, "delete", 3, "click"], ["src", "assets/svg/delete.svg", "alt", "", 1, "button-graphic"], [1, "load-children", 3, "click"], [1, "children-and-vl-container"], [1, "vertical-line", 3, "click"], [1, "children"], ["replyDialog", "", "class", "reply-container", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["replyDialog", "", 1, "reply-container"], [3, "commentID", "postID", "deleteDialog", "newComment"], [4, "appCommentType"]], template: function UserCommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UserCommentComponent_ng_container_10_Template, 2, 3, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, UserCommentComponent_div_12_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UserCommentComponent_app_comment_edit_13_Template, 1, 2, "app-comment-edit", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UserCommentComponent_ng_container_14_Template, 14, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, UserCommentComponent_ng_container_15_Template, 3, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UserCommentComponent_ng_container_16_Template, 6, 2, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.commentData.posterName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.commentData.timeString);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.deleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.deleted && !ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.childrenExist && !ctx.expand);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.expand);
    } }, styles: [".content-and-votes[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    margin: 10px;\n    width: calc(100% - 10px);\n}\n\n.user-info-bar[_ngcontent-%COMP%]{\n    color: var(--light-text);\n    font-size: 0.8em;\n}\n\n.content[_ngcontent-%COMP%]{\n    margin-left: 10px;\n    width: calc(100% - 44px);\n    margin-right: 10px;\n    white-space: pre-wrap;\n}\n\n.comment[_ngcontent-%COMP%]{\n    padding-top: 7px;\n    padding-bottom: 7px;\n    padding-left: 5px;\n    background-color: var(--primary-background);\n}\n\n.time[_ngcontent-%COMP%]{\n    font-weight: 100;\n}\n\n.load-children[_ngcontent-%COMP%]{\n    font-size: 0.55rem;\n    font-weight: 800;\n}\n\n.load-children[_ngcontent-%COMP%]:hover{\n    color: var(--active);\n}\n\n.vertical-line[_ngcontent-%COMP%]{\n    margin-left: 15px;\n    border-left: 3px solid var(--secondary-background);\n}\n\n.vertical-line[_ngcontent-%COMP%]:hover{\n    border-left: 3px solid var(--active);\n}\n\n.children-and-vl-container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n}\n\n.children[_ngcontent-%COMP%]{\n    display: flex;\n    width: 90%;\n    align-items: stretch;\n    flex-direction: column;\n}\n\nul[_ngcontent-%COMP%]{\n    padding-left: 10px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    list-style-type: none;\n}\n\n.comment-and-children[_ngcontent-%COMP%]{\n    background-color: var(--primary-background);\n}\n\n.reply-container[_ngcontent-%COMP%]{\n    margin-left: 15px;\n}\n\n.button-container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    justify-content: left;\n    margin-top: 10px;\n    margin-bottom: 5px;\n}\n\nbutton[_ngcontent-%COMP%]{\n    border: none;\n    background-color: var(--primary-background);\n    border-radius: 10%;\n    font-size: 0.8em;\n    display: flex;\n    flex-direction: row;\n    justify-content:space-around;\n    align-items: center;\n    color: var(--light-text);\n    font-weight: 700;\n}\n\nbutton[_ngcontent-%COMP%]:hover{\n    color: var(--active);\n    background-color: transparent;\n    filter: invert(32%) sepia(73%) saturate(1580%) hue-rotate(335deg) brightness(102%) contrast(93%);\n}\n\n.button-graphic[_ngcontent-%COMP%]{\n    padding-right: 3px;\n    height: 1em;\n}\n\n.button-container[_ngcontent-%COMP%]{\n    padding-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItY29tbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDJDQUEyQztJQUMzQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDZCQUE2QjtJQUM3QixnR0FBZ0c7QUFDcEc7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InVzZXItY29tbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtYW5kLXZvdGVze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xufVxuXG4udXNlci1pbmZvLWJhcntcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dCk7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuLmNvbnRlbnR7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ0cHgpO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbi5jb21tZW50e1xuICAgIHBhZGRpbmctdG9wOiA3cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xufVxuXG4udGltZXtcbiAgICBmb250LXdlaWdodDogMTAwO1xufVxuXG4ubG9hZC1jaGlsZHJlbntcbiAgICBmb250LXNpemU6IDAuNTVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmxvYWQtY2hpbGRyZW46aG92ZXJ7XG4gICAgY29sb3I6IHZhcigtLWFjdGl2ZSk7XG59XG5cbi52ZXJ0aWNhbC1saW5le1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQpO1xufVxuXG4udmVydGljYWwtbGluZTpob3ZlcntcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWFjdGl2ZSk7XG59XG5cbi5jaGlsZHJlbi1hbmQtdmwtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jaGlsZHJlbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxudWx7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5jb21tZW50LWFuZC1jaGlsZHJlbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xufVxuXG4ucmVwbHktY29udGFpbmVye1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5idXR0b257XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dCk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuYnV0dG9uOmhvdmVye1xuICAgIGNvbG9yOiB2YXIoLS1hY3RpdmUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZpbHRlcjogaW52ZXJ0KDMyJSkgc2VwaWEoNzMlKSBzYXR1cmF0ZSgxNTgwJSkgaHVlLXJvdGF0ZSgzMzVkZWcpIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoOTMlKTtcbn1cblxuLmJ1dHRvbi1ncmFwaGlje1xuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgICBoZWlnaHQ6IDFlbTtcbn1cblxuLmJ1dHRvbi1jb250YWluZXJ7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59Il19 */"] });


/***/ }),

/***/ 976:
/*!******************************************************************************!*\
  !*** ./src/app/components/homepageComponents/homepage/homepage.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepageComponent": () => (/* binding */ HomepageComponent)
/* harmony export */ });
/* harmony import */ var src_app_enums_Timeframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/Timeframe */ 8983);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/authorization.service */ 1874);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../top-bar/top-bar.component */ 2055);
/* harmony import */ var _post_card_container_post_card_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post-card-container/post-card-container.component */ 2073);






class HomepageComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.homepageTimeframe = src_app_enums_Timeframe__WEBPACK_IMPORTED_MODULE_0__.Timeframe.Alltime;
    }
    ngAfterContentInit() {
        this.loginStatus = this.auth.testLogin();
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_1__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
HomepageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 3, vars: 3, consts: [[1, "homepage"], [3, "currentTimeframe", "loggedIn", "currentTimeframeChange", "loggedInChange"], [3, "timeframe"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "app-top-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("currentTimeframeChange", function HomepageComponent_Template_app_top_bar_currentTimeframeChange_1_listener($event) { return ctx.homepageTimeframe = $event; })("loggedInChange", function HomepageComponent_Template_app_top_bar_loggedInChange_1_listener($event) { return ctx.loginStatus = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-post-card-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("currentTimeframe", ctx.homepageTimeframe)("loggedIn", ctx.loginStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("timeframe", ctx.homepageTimeframe);
    } }, dependencies: [_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_2__.TopBarComponent, _post_card_container_post_card_container_component__WEBPACK_IMPORTED_MODULE_3__.PostCardContainerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 7292:
/*!****************************************************************************!*\
  !*** ./src/app/components/homepageComponents/nav-bar/nav-bar.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBarComponent": () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth/authorization.service */ 1874);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_post_post_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/post/post-data-service.service */ 3060);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);








function NavBarComponent_div_6_ul_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul")(1, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavBarComponent_div_6_ul_1_Template_li_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const result_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.routeToPost(result_r5.postID)); })("mouseover", function NavBarComponent_div_6_ul_1_Template_li_mouseover_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const result_r5 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.mouseFocus = result_r5.postID); })("mouseleave", function NavBarComponent_div_6_ul_1_Template_li_mouseleave_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.mouseFocus = 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const result_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](result_r5.title);
} }
function NavBarComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavBarComponent_div_6_ul_1_Template, 4, 1, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavBarComponent_div_6_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.routeToSearch()); })("mouseover", function NavBarComponent_div_6_Template_span_mouseover_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.searchFocus = true); })("mouseleave", function NavBarComponent_div_6_Template_span_mouseleave_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.searchFocus = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.results);
} }
function NavBarComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavBarComponent_ng_container_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.newPostButton()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "New Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavBarComponent_ng_container_11_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.logoutButton()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function NavBarComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavBarComponent_ng_container_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.loginButton()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavBarComponent_ng_container_12_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.signUpButton()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
class NavBarComponent {
    constructor(auth, router, postService) {
        this.auth = auth;
        this.router = router;
        this.postService = postService;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("search");
        this.searchResults = false;
        this.mouseFocus = 0;
        this.searchFocus = false;
        this.clicked = false;
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
    }
    ngOnInit() {
        this.searchForm.valueChanges
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(500), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)((str) => {
            str = str ? str : "";
            return this.postService.getSuggested(str);
        }))
            .subscribe((postTitles) => this.results = postTitles);
    }
    ngAfterContentChecked() {
        this.auth.getLoginSubject().subscribe((status) => {
            if (this.loggedIn == true && status == false) {
                this.loggedIn = status;
                this.router.navigateByUrl(this.router.url);
            }
            this.loggedIn = status;
        });
    }
    loginButton() {
        this.router.navigateByUrl("Login");
    }
    logoutButton() {
        this.auth.logout();
        this.router.navigateByUrl(this.router.url);
    }
    homeButton() {
        this.router.navigateByUrl("");
    }
    newPostButton() {
        this.router.navigateByUrl("Posts/Draft");
    }
    signUpButton() {
        this.router.navigateByUrl("Signup");
    }
    getSuggestions() {
        let query = this.searchForm.value ? this.searchForm.value : "";
        this.postService.getSuggested(query)
            .subscribe((posts) => this.results = posts);
    }
    selectionChange() {
        if (this.clicked == false) {
            this.searchForm.setValue("");
            this.clicked = true;
        }
        this.searchResults = !this.searchResults;
    }
    routeToPost(postID) {
        this.searchResults = false;
        this.mouseFocus = 0;
        this.router.navigateByUrl(`Posts/${postID}`);
    }
    routeToSearch() {
        this.searchResults = false;
        this.searchFocus = false;
        this.router.navigateByUrl(`Search?query=${this.searchForm.value ? this.searchForm.value : ""}&pageNumber=0`);
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_post_post_data_service_service__WEBPACK_IMPORTED_MODULE_1__.PostDataService)); };
NavBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 13, vars: 4, consts: [[1, "nav-bar"], [1, "logo"], [1, "search-container"], ["type", "text", 1, "search-input", 3, "formControl", "focus", "blur", "keydown.enter"], ["searchInput", ""], ["class", "results-container", 4, "ngIf"], [1, "actions"], [1, "action-button", 3, "click"], [4, "ngIf"], [1, "results-container"], [4, "ngFor", "ngForOf"], [1, "see-results", 3, "click", "mouseover", "mouseleave"], [3, "click", "mouseover", "mouseleave"], [1, "result"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Spore ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function NavBarComponent_Template_input_focus_4_listener() { return ctx.selectionChange(); })("blur", function NavBarComponent_Template_input_blur_4_listener() { return ctx.selectionChange(); })("keydown.enter", function NavBarComponent_Template_input_keydown_enter_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); _r0.blur(); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.routeToSearch()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NavBarComponent_div_6_Template, 4, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_8_listener() { return ctx.homeButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, NavBarComponent_ng_container_11_Template, 7, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, NavBarComponent_ng_container_12_Template, 7, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.searchResults || ctx.mouseFocus != 0 || ctx.searchFocus);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective], styles: [".nav-bar[_ngcontent-%COMP%]{\n    position:fixed;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    background-color: var(--secondary-background);\n    margin-top: 0;\n    display: flex;\n    justify-content: space-between;\n    color:var(--primary-background);\n    z-index: 2;\n}\n\n.logo[_ngcontent-%COMP%]{\n    padding-left: 10px;\n}\n\n.actions[_ngcontent-%COMP%]{\n    padding-right: 10px;\n}\n\n.action-button[_ngcontent-%COMP%]{\n    background-color: transparent;\n    border: none;\n    color: var(--primary-background);\n}\n\n.action-button[_ngcontent-%COMP%]:hover{\n    color: var(--active);\n}\n\n.search-input[_ngcontent-%COMP%]{\n    width: 300px;\n    background-color: var(--primary-background);\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.search-input[_ngcontent-%COMP%]:focus{\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n    border-bottom: none;\n}\n\n.results-container[_ngcontent-%COMP%]{\n    z-index: 2;\n    position: fixed;\n    background-color: var(--primary-background);\n    color: var(--primary-text);\n    width: 304px;\n    font-size: 0.7rem;\n    border: 1.2px solid var(--active);\n    border-top: none;\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px;\n    display:flex;\n    flex-direction: column;\n}\n\nul[_ngcontent-%COMP%]{\n    list-style-type: none;\n    padding-inline-start: 2px;\n}\n\nli[_ngcontent-%COMP%]:hover{\n    color: var(--active);\n}\n\n.result[_ngcontent-%COMP%]:hover{\n    color: var(--active);\n}\n\n.see-results[_ngcontent-%COMP%]{\n    font-size: 0.7rem;\n    margin-left: auto;\n    margin-right: 2px;\n}\n\n.see-results[_ngcontent-%COMP%]:hover{\n    color: var(--active);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCw2Q0FBNkM7SUFDN0MsYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDJDQUEyQztJQUMzQyxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLDJDQUEyQztJQUMzQywwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBR0E7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWJhcntcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQpO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgY29sb3I6dmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kKTtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4ubG9nb3tcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5hY3Rpb25ze1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5hY3Rpb24tYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kKTtcbn1cblxuLmFjdGlvbi1idXR0b246aG92ZXJ7XG4gICAgY29sb3I6IHZhcigtLWFjdGl2ZSk7XG59XG5cbi5zZWFyY2gtaW5wdXR7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZCk7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uc2VhcmNoLWlucHV0OmZvY3Vze1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5yZXN1bHRzLWNvbnRhaW5lcntcbiAgICB6LWluZGV4OiAyO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQpO1xuICAgIHdpZHRoOiAzMDRweDtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICBib3JkZXI6IDEuMnB4IHNvbGlkIHZhcigtLWFjdGl2ZSk7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxudWx7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAycHg7XG59XG5cblxubGk6aG92ZXJ7XG4gICAgY29sb3I6IHZhcigtLWFjdGl2ZSk7XG59XG5cbi5yZXN1bHQ6aG92ZXJ7XG4gICAgY29sb3I6IHZhcigtLWFjdGl2ZSk7XG59XG5cbi5zZWUtcmVzdWx0c3tcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cblxuLnNlZS1yZXN1bHRzOmhvdmVye1xuICAgIGNvbG9yOiB2YXIoLS1hY3RpdmUpO1xufSJdfQ== */"] });


/***/ }),

/***/ 2073:
/*!****************************************************************************************************!*\
  !*** ./src/app/components/homepageComponents/post-card-container/post-card-container.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostCardContainerComponent": () => (/* binding */ PostCardContainerComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var src_app_enums_Timeframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/Timeframe */ 8983);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_homepage_homepage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/homepage/homepage.service */ 775);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-infinite-scroll */ 7364);
/* harmony import */ var _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post-card/post-card.component */ 7079);









function PostCardContainerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " There are no posts in this time window. Click new post to start a conversation! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function PostCardContainerComponent_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div")(3, "div")(4, "div")(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

function PostCardContainerComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PostCardContainerComponent_div_2_div_1_Template, 6, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.loading);
  }
}

function PostCardContainerComponent_div_3_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul")(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-post-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const post_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("postData", post_r7);
  }
}

function PostCardContainerComponent_div_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div")(3, "div")(4, "div")(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

function PostCardContainerComponent_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No more posts for this time window ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function PostCardContainerComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scrolled", function PostCardContainerComponent_div_3_Template_div_scrolled_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PostCardContainerComponent_div_3_ul_1_Template, 3, 1, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PostCardContainerComponent_div_3_div_3_Template, 6, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PostCardContainerComponent_div_3_div_4_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("infiniteScrollDistance", 1)("infiniteScrollThrottle", 1000);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 5, ctx_r2.posts));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.outOfPosts);
  }
}

class PostCardContainerComponent {
  constructor(homepageService) {
    this.homepageService = homepageService;
    this.posts = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
    this.postsExist = false;
    this.page = 0;
    this.outOfPosts = false;
    this.loading = false;
  }

  ngOnInit() {
    this.posts.subscribe(p => {
      this.postsExist = p.length > 0;
    });
  }

  ngOnChanges(changes) {
    this.posts.next([]);
    this.page = 0;
    this.loadPage(0);
  }

  loadPage(page) {
    this.loading = true;
    this.outOfPosts = false;

    switch (this.timeframe) {
      case src_app_enums_Timeframe__WEBPACK_IMPORTED_MODULE_0__.Timeframe.Alltime:
        this.homepageService.getTopAllTime(page).subscribe({
          next: p => {
            this.updatePosts(p);
          }
        });
        break;

      case src_app_enums_Timeframe__WEBPACK_IMPORTED_MODULE_0__.Timeframe.Year:
        this.homepageService.getTopYear(page).subscribe({
          next: p => {
            this.updatePosts(p);
          }
        });
        break;

      case src_app_enums_Timeframe__WEBPACK_IMPORTED_MODULE_0__.Timeframe.Month:
        this.homepageService.getTopMonth(page).subscribe({
          next: p => {
            this.updatePosts(p);
          }
        });
        break;

      case src_app_enums_Timeframe__WEBPACK_IMPORTED_MODULE_0__.Timeframe.Week:
        this.homepageService.getTopWeek(page).subscribe({
          next: p => {
            this.updatePosts(p);
          }
        });
        break;

      case src_app_enums_Timeframe__WEBPACK_IMPORTED_MODULE_0__.Timeframe.Today:
        this.homepageService.getTopToday(page).subscribe({
          next: p => {
            this.updatePosts(p);
          }
        });
        break;

      default:
        this.homepageService.getTopAllTime(page).subscribe({
          next: p => {
            this.updatePosts(p);
          }
        });
    }
  }

  updatePosts(newPosts) {
    this.page += 1;

    if (newPosts.length > 0) {
      this.posts.next([...this.posts.value, ...newPosts]);
      this.loading = false;
      this.outOfPosts = false;
    } else {
      this.loading = false;
      this.outOfPosts = true;
    }
  }

  onScroll() {
    this.loadPage(this.page);
  }

}

PostCardContainerComponent.ɵfac = function PostCardContainerComponent_Factory(t) {
  return new (t || PostCardContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_homepage_homepage_service__WEBPACK_IMPORTED_MODULE_1__.HomepageService));
};

PostCardContainerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: PostCardContainerComponent,
  selectors: [["app-post-card-container"]],
  inputs: {
    timeframe: "timeframe"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
  decls: 4,
  vars: 3,
  consts: [["class", "empty-cards", 4, "ngIf"], ["class", "post-card-container", "infiniteScroll", "", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrolled", 4, "ngIf"], [1, "empty-cards"], ["class", "loading-container", 4, "ngIf"], [1, "loading-container"], [1, "lds-ellipsis"], ["infiniteScroll", "", 1, "post-card-container", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrolled"], [4, "ngFor", "ngForOf"], ["class", "out-of-posts-container", 4, "ngIf"], [3, "postData"], [1, "out-of-posts-container"]],
  template: function PostCardContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PostCardContainerComponent_div_1_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PostCardContainerComponent_div_2_Template, 2, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PostCardContainerComponent_div_3_Template, 5, 7, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.postsExist && !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.postsExist && ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.postsExist);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__.InfiniteScrollDirective, _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_2__.PostCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["[_nghost-%COMP%]{\n    display: flex;\n    justify-content: center;\n    background-color: var(--secondary-background);\n    min-height: 100vh;\n}\n\n.post-card-container[_ngcontent-%COMP%]{\n    width: 80%;\n    margin: 0px;\n}\n\n.empty-cards[_ngcontent-%COMP%]{\n    margin-top: 10px;\n    color: var(--primary-background);\n    width: 100;\n}\n\nul[_ngcontent-%COMP%]{\n    list-style-type: none;\n    padding-inline-start: 0px;\n}\n\n.loading-container[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n}\n\n.out-of-posts-container[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    color: var(--primary-background);\n    margin-bottom: 15px;\n}\n\n.lds-ellipsis[_ngcontent-%COMP%] {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: var(--primary-background);\n    animation-timing-function: cubic-bezier(0, 1, 1, 0);\n  }\n\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n    left: 8px;\n    animation: lds-ellipsis1 0.6s infinite;\n  }\n\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n    left: 8px;\n    animation: lds-ellipsis2 0.6s infinite;\n  }\n\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n    left: 32px;\n    animation: lds-ellipsis2 0.6s infinite;\n  }\n\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n    left: 56px;\n    animation: lds-ellipsis3 0.6s infinite;\n  }\n\n@keyframes lds-ellipsis1 {\n    0% {\n      transform: scale(0);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n\n@keyframes lds-ellipsis3 {\n    0% {\n      transform: scale(1);\n    }\n    100% {\n      transform: scale(0);\n    }\n  }\n\n@keyframes lds-ellipsis2 {\n    0% {\n      transform: translate(0, 0);\n    }\n    100% {\n      transform: translate(24px, 0);\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtY2FyZC1jb250YWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsNkNBQTZDO0lBQzdDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtFQUNkOztBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckMsbURBQW1EO0VBQ3JEOztBQUNBO0lBQ0UsU0FBUztJQUNULHNDQUFzQztFQUN4Qzs7QUFDQTtJQUNFLFNBQVM7SUFDVCxzQ0FBc0M7RUFDeEM7O0FBQ0E7SUFDRSxVQUFVO0lBQ1Ysc0NBQXNDO0VBQ3hDOztBQUNBO0lBQ0UsVUFBVTtJQUNWLHNDQUFzQztFQUN4Qzs7QUFDQTtJQUNFO01BQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxtQkFBbUI7SUFDckI7RUFDRjs7QUFDQTtJQUNFO01BQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxtQkFBbUI7SUFDckI7RUFDRjs7QUFDQTtJQUNFO01BQ0UsMEJBQTBCO0lBQzVCO0lBQ0E7TUFDRSw2QkFBNkI7SUFDL0I7RUFDRiIsImZpbGUiOiJwb3N0LWNhcmQtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kKTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLnBvc3QtY2FyZC1jb250YWluZXJ7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLmVtcHR5LWNhcmRze1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZCk7XG4gICAgd2lkdGg6IDEwMDtcbn1cblxudWx7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG59XG5cbi5sb2FkaW5nLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ub3V0LW9mLXBvc3RzLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5sZHMtZWxsaXBzaXMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICB9XG4gIC5sZHMtZWxsaXBzaXMgZGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzM3B4O1xuICAgIHdpZHRoOiAxM3B4O1xuICAgIGhlaWdodDogMTNweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMSwgMSwgMCk7XG4gIH1cbiAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICBsZWZ0OiA4cHg7XG4gICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMxIDAuNnMgaW5maW5pdGU7XG4gIH1cbiAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICBsZWZ0OiA4cHg7XG4gICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XG4gIH1cbiAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICBsZWZ0OiAzMnB4O1xuICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xuICB9XG4gIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCg0KSB7XG4gICAgbGVmdDogNTZweDtcbiAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczMgMC42cyBpbmZpbml0ZTtcbiAgfVxuICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczEge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMzIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgMCk7XG4gICAgfVxuICB9XG4gICJdfQ== */"]
});

/***/ }),

/***/ 7079:
/*!********************************************************************************!*\
  !*** ./src/app/components/homepageComponents/post-card/post-card.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostCardComponent": () => (/* binding */ PostCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_post_data_storage_post_data_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/post-data-storage/post-data-storage.service */ 9223);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





function PostCardComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.postData.content);
} }
class PostCardComponent {
    constructor(router, postDataStorage, renderer) {
        this.router = router;
        this.postDataStorage = postDataStorage;
        this.renderer = renderer;
    }
    ngOnInit() {
        let card = this.renderer.selectRootElement('.post-card', true);
        let contentVotes = this.renderer.nextSibling(card);
        console.log(contentVotes);
    }
    routeToPost() {
        this.postDataStorage.setData(this.postData);
        this.router.navigateByUrl(`Posts/${this.postData.postID}`);
    }
}
PostCardComponent.ɵfac = function PostCardComponent_Factory(t) { return new (t || PostCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_post_data_storage_post_data_storage_service__WEBPACK_IMPORTED_MODULE_0__.PostDataStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2)); };
PostCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PostCardComponent, selectors: [["app-post-card"]], inputs: { postData: "postData" }, decls: 10, vars: 5, consts: [[1, "post-card", 3, "click"], [1, "user-info"], [1, "content-and-votes"], [1, "votes"], ["class", "content", 4, "ngIf"], [1, "content"], ["content", ""]], template: function PostCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostCardComponent_Template_div_click_0_listener() { return ctx.routeToPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2)(7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PostCardComponent_div_9_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.postData.posterName, " | ", ctx.postData.timeString, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.postData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.postData.voteTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".post-card[_ngcontent-%COMP%]{\n    width: calc(100% - 20px);\n    border: solid var(--light-text) 1px;\n    padding: 10px;\n    background-color: var(--primary-background);\n}\n\nh3[_ngcontent-%COMP%]{\n    width: 100%;\n    display: inline-block;\n    margin-bottom: 10px;\n    margin-top: 0px;\n}\n\n.user-info[_ngcontent-%COMP%]{\n    margin-bottom: 3px;\n    color: var(--light-text);\n    font-size: 0.8em;\n}\n\n.content-and-votes[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    max-height: calc(11em + 5px);\n    line-height: 1.1em;\n    width: 100%;\n}\n\n.votes[_ngcontent-%COMP%]{\n    color: var(--primary-background);\n    background-color: var(--secondary-background);\n    border-radius: 50%;\n    min-width: 2em;\n    height: 2em;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: 15px;\n}\n\n.content[_ngcontent-%COMP%]{\n    text-overflow:clip;\n    white-space:break-spaces;\n    overflow: hidden; \n    display: inline-block;\n    padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyw2Q0FBNkM7SUFDN0Msa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJwb3N0LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LWNhcmR7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgIGJvcmRlcjogc29saWQgdmFyKC0tbGlnaHQtdGV4dCkgMXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kKTtcbn1cblxuaDN7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4udXNlci1pbmZve1xuICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dCk7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuLmNvbnRlbnQtYW5kLXZvdGVze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDExZW0gKyA1cHgpO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjFlbTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnZvdGVze1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWluLXdpZHRoOiAyZW07XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmNvbnRlbnR7XG4gICAgdGV4dC1vdmVyZmxvdzpjbGlwO1xuICAgIHdoaXRlLXNwYWNlOmJyZWFrLXNwYWNlcztcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2055:
/*!****************************************************************************!*\
  !*** ./src/app/components/homepageComponents/top-bar/top-bar.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopBarComponent": () => (/* binding */ TopBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth/authorization.service */ 1874);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





class TopBarComponent {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
        this.currentTimeframeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.loggedInChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.updateLoginText();
    }
    ngOnChanges(changes) {
        if (changes["loggedIn"]) {
            this.updateLoginText();
        }
    }
    updateLoginText() {
        if (this.loggedIn == true) {
            this.loggedInText = "Log out";
        }
        else {
            this.loggedInText = "Login";
        }
    }
    updateTimeframe(val) {
        this.currentTimeframe = val;
        this.currentTimeframeChange.emit(this.currentTimeframe);
    }
    routeToNewPost() {
        this.router.navigateByUrl(`Posts/Draft`);
    }
    routeToLogin() {
        this.router.navigateByUrl(`Login`);
    }
    loginButton() {
        if (this.loggedIn == true) {
            this.auth.logout();
            this.loggedIn = false;
            this.updateLoginText();
            this.loggedInChange.emit(this.loggedIn);
        }
        else {
            this.routeToLogin();
        }
    }
    newPostButton() {
        if (this.loggedIn == true) {
            this.routeToNewPost();
        }
        else {
            alert("You must be logged in to make a new post");
            this.routeToLogin();
        }
    }
    newProfileButton() {
        this.router.navigateByUrl(`Signup`);
    }
}
TopBarComponent.ɵfac = function TopBarComponent_Factory(t) { return new (t || TopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizationService)); };
TopBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TopBarComponent, selectors: [["app-top-bar"]], inputs: { currentTimeframe: "currentTimeframe", loggedIn: "loggedIn" }, outputs: { currentTimeframeChange: "currentTimeframeChange", loggedInChange: "loggedInChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 17, vars: 5, consts: [[1, "timeframe-container"], [3, "ngClass", "click"], [1, "button-text"]], template: function TopBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopBarComponent_Template_button_click_2_listener() { return ctx.updateTimeframe(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopBarComponent_Template_button_click_5_listener() { return ctx.updateTimeframe(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopBarComponent_Template_button_click_8_listener() { return ctx.updateTimeframe(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopBarComponent_Template_button_click_11_listener() { return ctx.updateTimeframe(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopBarComponent_Template_button_click_14_listener() { return ctx.updateTimeframe(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "All Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.currentTimeframe === 1 ? "selected-button" : "action-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.currentTimeframe === 2 ? "selected-button" : "action-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.currentTimeframe === 3 ? "selected-button" : "action-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.currentTimeframe === 4 ? "selected-button" : "action-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.currentTimeframe === 5 ? "selected-button" : "action-button");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass], styles: [".timeframe-container[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    background-color: var(--secondary-background);\n    padding-top: 13px;\n}\n\n.action-button[_ngcontent-%COMP%]{\n    padding-left: 10px;\n    padding-right: 10px;\n    border: none;\n    background-color: var(--primary-background);\n}\n\n.selected-button[_ngcontent-%COMP%]{\n    padding-left: 10px;\n    padding-right: 10px;\n    color: var(--active);\n    border: none;\n    background-color: var(--primary-background);\n}\n\n.action-button[_ngcontent-%COMP%]:hover{\n    color: var(--active)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsNkNBQTZDO0lBQzdDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSTtBQUNKIiwiZmlsZSI6InRvcC1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lZnJhbWUtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQpO1xuICAgIHBhZGRpbmctdG9wOiAxM3B4O1xufVxuXG4uYWN0aW9uLWJ1dHRvbntcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kKTtcbn1cblxuLnNlbGVjdGVkLWJ1dHRvbntcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBjb2xvcjogdmFyKC0tYWN0aXZlKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kKTtcbn1cblxuLmFjdGlvbi1idXR0b246aG92ZXJ7XG4gICAgY29sb3I6IHZhcigtLWFjdGl2ZSlcbn0iXX0= */"] });


/***/ }),

/***/ 1498:
/*!*********************************************************************!*\
  !*** ./src/app/components/loginComponents/login/login.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth/authorization.service */ 1874);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_previous_url_previous_url_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/previous-url/previous-url.service */ 5049);







class LoginComponent {
    constructor(formBuilder, auth, router, previousURLService) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        this.previousURLService = previousURLService;
        this.loginForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('')
        });
        this.previousURL = '';
    }
    ngOnInit() {
        this.previousURLService.getPrevious()
            .subscribe((url) => { this.previousURL = url; console.log(url); });
    }
    onSubmit() {
        if (!this.usernameValidator(this.loginForm.value.username)) {
            alert("Invalid Username");
            return;
        }
        else if (!this.passwordValidator(this.loginForm.value.password)) {
            return;
        }
        let user = {
            userName: this.loginForm.value.username,
            password: this.loginForm.value.password
        };
        this.auth.login(user).subscribe(() => this.router.navigateByUrl(this.previousURL));
    }
    usernameValidator(username) {
        return username && username.length <= 20 && username.length >= 6 ? true : false;
    }
    passwordValidator(password) {
        let numberRegex = /.*[0-9].*/g;
        let capitalRegex = /.*[A-Z].*/g;
        let lowercaseRegex = /.*[a-z].*/g;
        let specialCharacter = /.*[!@#$%^&*_+=;:<>?~].*/g;
        if (!(password && password.length >= 8)) {
            alert("Password too short");
            return false;
        }
        if (!password.match(numberRegex)) {
            console.log(password);
            alert("Password doesn't contain a number");
            return false;
        }
        if (!password.match(capitalRegex)) {
            alert("Password doesn't contain a capital letter");
            return false;
        }
        if (!password.match(lowercaseRegex)) {
            alert("Password doesn't contain a lowercase lettter");
            return false;
        }
        if (!password.match(specialCharacter)) {
            alert("Password doesn't contain a special character: !@#$%^&*_+=;:<>?~");
            return false;
        }
        return true;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_previous_url_previous_url_service__WEBPACK_IMPORTED_MODULE_1__.PreviousUrlService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 10, vars: 1, consts: [[1, "login-box"], [1, "login-form", 3, "formGroup", "ngSubmit"], ["for", "username", 1, "username-label"], ["id", "username", "type", "text", "formControlName", "username", 1, "username-input"], ["for", "password", 1, "password-label"], ["id", "password", "type", "text", "formControlName", "password", 1, "password-input"], ["type", "submit", 1, "login-button"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Username: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: [".login-box[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    background-color: var(--secondary-background);\n    height: 100vh;\n}\n\n.login-form[_ngcontent-%COMP%]{\n    margin-top: 25px;\n    padding: 10px;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    border-radius: 10px;\n\n    width: 235px;\n    height: 77px;\n\n    display: grid;\n    grid-template-columns: 65px 75px 75px;\n    gap: 10px;\n    grid-template-rows: repeat(3, 1.2em);\n\n    background-color: var(--primary-background);\n}\n\ninput[_ngcontent-%COMP%]{\n    font-size: 0.7em;\n}\n\n.username-input[_ngcontent-%COMP%]{\n    grid-column: 2/4;\n}\n\n.password-input[_ngcontent-%COMP%]{\n    grid-column: 2/4;\n}\n\n.login-button[_ngcontent-%COMP%]{\n    grid-column: 3/4;\n    background-color: var(--secondary-background);\n    color: var(--primary-background);\n    border-radius: 5px;\n    border: none;\n}\n\n.login-button[_ngcontent-%COMP%]:hover{\n    background-color: var(--active);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLDZDQUE2QztJQUM3QyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjs7SUFFbkIsWUFBWTtJQUNaLFlBQVk7O0lBRVosYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxTQUFTO0lBQ1Qsb0NBQW9DOztJQUVwQywyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsNkNBQTZDO0lBQzdDLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQyIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWJveHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kKTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubG9naW4tZm9ybXtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIHdpZHRoOiAyMzVweDtcbiAgICBoZWlnaHQ6IDc3cHg7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjVweCA3NXB4IDc1cHg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDEuMmVtKTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZCk7XG59XG5cbmlucHV0e1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG59XG5cbi51c2VybmFtZS1pbnB1dHtcbiAgICBncmlkLWNvbHVtbjogMi80O1xufVxuXG4ucGFzc3dvcmQtaW5wdXR7XG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcbn1cblxuLmxvZ2luLWJ1dHRvbntcbiAgICBncmlkLWNvbHVtbjogMy80O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kKTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4ubG9naW4tYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZSk7XG59Il19 */"] });


/***/ }),

/***/ 7474:
/*!*************************************************************************!*\
  !*** ./src/app/components/loginComponents/sign-up/sign-up.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpComponent": () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_user_user_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/user/user-service.service */ 798);
/* harmony import */ var src_app_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/authorization.service */ 1874);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_previous_url_previous_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/previous-url/previous-url.service */ 5049);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);









function SignUpComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "*Username too short");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "*Username too long");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "*Username must be unique");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "*Password too short");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "*Password too long");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "*Password needs a capital letter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "*Password needs a lowercase letter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "*Password needs a number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "*Password needs a special character: !@#$%^&*_+=;:<>?~");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class SignUpComponent {
    constructor(formBuilder, userService, auth, router, previousURLService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.auth = auth;
        this.router = router;
        this.previousURLService = previousURLService;
        this.newUserForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
        });
        this.previousURL = "";
        this.usernameUnique = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
        this.usernameLongEnough = false;
        this.usernameShortEnough = true;
        this.usernameUniqueBool = false;
        this.passwordLongEnough = false;
        this.passwordShortEnough = true;
        this.passwordContainsNumber = false;
        this.passwordContainsCapital = false;
        this.passwordContainsLowercase = false;
        this.passwordContainsSpecial = false;
        this.usernameValid = false;
        this.passwordValid = false;
    }
    ngOnInit() {
        this.previousURLService.getPrevious().subscribe((url) => this.previousURL = url);
        this.usernameUnique.subscribe((bool) => this.usernameUniqueBool = bool);
        this.newUserForm.get("password")?.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((password) => this.passwordValidator(password)))
            .subscribe(() => this.passwordCheck());
        this.newUserForm.get("username")?.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(500), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((username) => this.usernameValidator(username)), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)((username) => { return this.uniqueCheck(username); })).subscribe((unique) => {
            if (unique) {
                this.usernameUniqueBool = true;
            }
            else {
                this.usernameUniqueBool = false;
            }
            this.usernameCheck();
        });
    }
    onSubmit() {
        if (!this.usernameValid) {
            alert("Invalid Username");
            return;
        }
        if (!this.passwordValid) {
            alert("Invalid Password");
            return;
        }
        let user = {
            userName: this.newUserForm.value.username,
            password: this.newUserForm.value.password
        };
        this.userService.createUser(user)
            .subscribe({
            next: () => {
                this.auth.login(user).subscribe({
                    next: () => this.router.navigateByUrl(this.previousURL),
                    error: (error) => {
                        alert("User creation successful but login failed");
                    }
                });
            },
            error: (error) => {
                alert("User creation failed. Use a different username please");
            }
        });
    }
    usernameValidator(username) {
        if (!username) {
            return;
        }
        if (username.length > 20) {
            this.usernameShortEnough = false;
            return username;
        }
        this.usernameShortEnough = true;
        if (username.length < 6) {
            this.usernameLongEnough = false;
            return username;
        }
        this.usernameLongEnough = true;
        return username;
    }
    uniqueCheck(username) {
        if (this.usernameLongEnough && this.usernameShortEnough && username) {
            return this.userService.checkUsernameUniqueness(username);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(false);
    }
    passwordValidator(password) {
        let numberRegex = /.*[0-9].*/g;
        let capitalRegex = /.*[A-Z].*/g;
        let lowercaseRegex = /.*[a-z].*/g;
        let specialCharacter = /.*[!@#$%^&*_+=;:<>?~].*/g;
        if (!password) {
            return;
        }
        this.passwordLongEnough = password.length >= 8 ? true : false;
        this.passwordShortEnough = password.length <= 20 ? true : false;
        this.passwordContainsNumber = password.match(numberRegex) ? true : false;
        this.passwordContainsSpecial = password.match(specialCharacter) ? true : false;
        this.passwordContainsLowercase = password.match(lowercaseRegex) ? true : false;
        this.passwordContainsCapital = password.match(capitalRegex) ? true : false;
        return password;
    }
    passwordCheck() {
        this.passwordValid = this.passwordLongEnough && this.passwordContainsCapital && this.passwordContainsLowercase && this.passwordContainsNumber
            && this.passwordContainsSpecial && this.passwordShortEnough;
    }
    usernameCheck() {
        this.usernameValid = this.usernameShortEnough && this.usernameLongEnough && this.usernameUniqueBool;
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_user_user_service_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_1__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_previous_url_previous_url_service__WEBPACK_IMPORTED_MODULE_2__.PreviousUrlService)); };
SignUpComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 23, vars: 10, consts: [[1, "sign-up-box"], [1, "sign-up-form", 3, "formGroup", "ngSubmit"], [1, "input-row"], ["for", "username", 1, "username-label"], ["id", "username", "type", "text", "formControlName", "username", 1, "username-input"], [1, "username-errors"], ["class", "alert-message", 4, "ngIf"], ["for", "password", 1, "password-label"], ["id", "password", "type", "text", "formControlName", "password", 1, "password-input"], [1, "password-errors"], ["type", "submit", 1, "sign-up-button"], [1, "alert-message"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Username: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SignUpComponent_span_7_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, SignUpComponent_span_8_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, SignUpComponent_span_9_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 2)(11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](14, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, SignUpComponent_span_15_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, SignUpComponent_span_16_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, SignUpComponent_span_17_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, SignUpComponent_span_18_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, SignUpComponent_span_19_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, SignUpComponent_span_20_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.newUserForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.usernameLongEnough);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.usernameShortEnough);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.usernameUniqueBool);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.passwordLongEnough);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.passwordShortEnough);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.passwordContainsCapital);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.passwordContainsLowercase);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.passwordContainsNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.passwordContainsSpecial);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName], styles: [".sign-up-box[_ngcontent-%COMP%]{\n    background-color: var(--secondary-background);\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: baseline;\n}\n\n.sign-up-form[_ngcontent-%COMP%]{\n\n    display: flex;\n    flex-direction: column;\n\n    margin-top: 25px;\n    \n    width: 235px;\n    padding: 10px;\n    padding-top: 15px;\n    border-radius: 10px;\n    \n    background-color: var(--primary-background);\n}\n\n.input-row[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: space-between;\n    padding-bottom: 5px;\n}\n\ninput[_ngcontent-%COMP%]{\n    width: 150px;\n}\n\n.alert-message[_ngcontent-%COMP%]{\n    padding-left: 10px;\n    color: var(--active);\n    font-size: 0.7em;\n}\n\nbutton[_ngcontent-%COMP%]{\n    margin-left: auto;\n    width: 80px;\n    background-color: var(--secondary-background);\n    border-radius: 5px;\n    border: none;\n    color: var(--primary-background);\n}\n\nbutton[_ngcontent-%COMP%]:hover{\n    background-color: var(--active);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZDQUE2QztJQUM3QyxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjs7SUFFdEIsZ0JBQWdCOztJQUVoQixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7O0lBRW5CLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCw2Q0FBNkM7SUFDN0Msa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkMiLCJmaWxlIjoic2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ24tdXAtYm94e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kKTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cblxuLnNpZ24tdXAtZm9ybXtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgXG4gICAgd2lkdGg6IDIzNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xufVxuXG4uaW5wdXQtcm93e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbmlucHV0e1xuICAgIHdpZHRoOiAxNTBweDtcbn1cblxuLmFsZXJ0LW1lc3NhZ2V7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1hY3RpdmUpO1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG59XG5cbmJ1dHRvbntcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICB3aWR0aDogODBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kKTtcbn1cblxuYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZSk7XG59Il19 */"] });


/***/ }),

/***/ 6755:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/postComponents/abstract-post-body/abstract-post-body.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractPostBodyComponent": () => (/* binding */ AbstractPostBodyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_post_post_data_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/post/post-data-service.service */ 3060);
/* harmony import */ var src_app_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/authorization.service */ 1874);
/* harmony import */ var src_app_services_post_data_storage_post_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post-data-storage/post-data-storage.service */ 9223);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _comment_container_comment_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comment-container/comment-container.component */ 3766);






const _c0 = [[["", "post-title", ""]], [["", "content", ""]], [["", "button-container", ""]], [["", "reply-dialog", ""]]];
const _c1 = ["[post-title]", "[content]", "[button-container]", "[reply-dialog]"];
class AbstractPostBodyComponent {
    constructor(service, auth, postStorage, router, activeRoute) {
        this.service = service;
        this.auth = auth;
        this.postStorage = postStorage;
        this.router = router;
        activeRoute.url.subscribe((l) => this.postID = parseInt(l[l.length - 1].toString()));
    }
    ngOnInit() {
        this.postStorage.getData(this.postID)
            .subscribe({
            next: (post) => this.postData = post
        });
    }
    ngOnDestroy() {
        this.postStorage.clearData();
    }
}
AbstractPostBodyComponent.ɵfac = function AbstractPostBodyComponent_Factory(t) { return new (t || AbstractPostBodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_post_post_data_service_service__WEBPACK_IMPORTED_MODULE_0__.PostDataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_1__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_post_data_storage_post_data_storage_service__WEBPACK_IMPORTED_MODULE_2__.PostDataStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
AbstractPostBodyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AbstractPostBodyComponent, selectors: [["app-abstract-post-body"]], ngContentSelectors: _c1, decls: 11, vars: 3, consts: [[1, "post"], [1, "user-info"]], template: function AbstractPostBodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](7, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](8, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](9, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "app-comment-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.postData.posterName, " | ", ctx.postData.timeString, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.postData.voteTotal);
    } }, dependencies: [_comment_container_comment_container_component__WEBPACK_IMPORTED_MODULE_3__.CommentContainerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYnN0cmFjdC1wb3N0LWJvZHkuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3766:
/*!********************************************************************************************!*\
  !*** ./src/app/components/postComponents/comment-container/comment-container.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentContainerComponent": () => (/* binding */ CommentContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_post_post_data_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/post/post-data-service.service */ 3060);
/* harmony import */ var src_app_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/authorization.service */ 1874);
/* harmony import */ var src_app_services_post_data_storage_post_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post-data-storage/post-data-storage.service */ 9223);
/* harmony import */ var src_app_services_deletedComment_deleted_comment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/deletedComment/deleted-comment.service */ 8156);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _directives_comment_type_directive_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../directives/comment-type-directive.directive */ 6380);








function CommentContainerComponent_ul_1_2_ng_template_0_Template(rf, ctx) { }
function CommentContainerComponent_ul_1_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CommentContainerComponent_ul_1_2_ng_template_0_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("deleteComment", function CommentContainerComponent_ul_1_2_Template_ng_template_deleteComment_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.removeChild($event)); });
} }
function CommentContainerComponent_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul")(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CommentContainerComponent_ul_1_2_Template, 1, 0, null, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const comment_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("appCommentType", comment_r1);
} }
class CommentContainerComponent {
    constructor(service, auth, postStorage, deletedComment, activeRoute) {
        this.service = service;
        this.auth = auth;
        this.postStorage = postStorage;
        this.deletedComment = deletedComment;
        activeRoute.url.subscribe((l) => this.postID = parseInt(l[l.length - 1].toString()));
    }
    ngAfterContentInit() {
        this.postStorage.getComments(this.postID)
            .subscribe({
            next: (comments) => {
                this.comments = comments;
            }
        });
        this.deletedComment.getDeletedID().subscribe((id) => this.removeComment(id));
    }
    createDTO(comment) {
        return { commentData: comment, postID: this.postID };
    }
    removeComment(id) {
        this.comments = this.comments.filter((comment) => comment.commentID !== id);
        this.postStorage.setComments(this.comments);
    }
}
CommentContainerComponent.ɵfac = function CommentContainerComponent_Factory(t) { return new (t || CommentContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_post_post_data_service_service__WEBPACK_IMPORTED_MODULE_0__.PostDataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_1__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_post_data_storage_post_data_storage_service__WEBPACK_IMPORTED_MODULE_2__.PostDataStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_deletedComment_deleted_comment_service__WEBPACK_IMPORTED_MODULE_3__.DeletedCommentService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute)); };
CommentContainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CommentContainerComponent, selectors: [["app-comment-container"]], decls: 2, vars: 1, consts: [[1, "container"], [4, "ngFor", "ngForOf"], [4, "appCommentType"], [3, "deleteComment"]], template: function CommentContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CommentContainerComponent_ul_1_Template, 3, 1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.comments);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _directives_comment_type_directive_directive__WEBPACK_IMPORTED_MODULE_4__.CommentTypeDirective], styles: ["[_nghost-%COMP%]{\n    display: flex;\n    background-color: var(--secondary-background);\n    flex-direction: row;\n    justify-content: center;\n}\n\n.container[_ngcontent-%COMP%]{\n    margin-top: 30px;\n    margin-left: 15px;\n    margin-right: 15px;\n    background-color: var(--primary-background);\n    width: 80vw;\n}\n\nul[_ngcontent-%COMP%]{\n    list-style-type: none;\n    padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsNkNBQTZDO0lBQzdDLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwyQ0FBMkM7SUFDM0MsV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJjb21tZW50LWNvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZCk7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xuICAgIHdpZHRoOiA4MHZ3O1xufVxuXG51bHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 631:
/*!**************************************************************************************!*\
  !*** ./src/app/components/postComponents/logged-in-post/logged-in-post.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggedInPostComponent": () => (/* binding */ LoggedInPostComponent)
/* harmony export */ });
/* harmony import */ var _abstract_post_body_abstract_post_body_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-post-body/abstract-post-body.component */ 6755);
/* harmony import */ var src_app_enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/UpvoteScore */ 4520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _textInputComponents_reply_box_reply_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../textInputComponents/reply-box/reply-box.component */ 1394);
/* harmony import */ var _comment_container_comment_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comment-container/comment-container.component */ 3766);






function LoggedInPostComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11)(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoggedInPostComponent_div_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.replyButton()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} }
function LoggedInPostComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14)(1, "app-reply-box", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("deleteDialog", function LoggedInPostComponent_div_17_Template_app_reply_box_deleteDialog_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.replyButton()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("postID", ctx_r1.postData.postID);
} }
class LoggedInPostComponent extends _abstract_post_body_abstract_post_body_component__WEBPACK_IMPORTED_MODULE_0__.AbstractPostBodyComponent {
    constructor() {
        super(...arguments);
        this.upvoteHighlight = false;
        this.downvoteHighlight = false;
        this.replyOpen = false;
    }
    ngOnInit() {
        super.ngOnInit();
        if (this.postData.userVote == src_app_enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_1__.UpvoteScore.Upvote) {
            this.upvoteHighlight = true;
        }
        else if (this.postData.userVote == src_app_enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_1__.UpvoteScore.Downvote) {
            this.downvoteHighlight = true;
        }
    }
    replyButton() {
        this.replyOpen = !this.replyOpen;
    }
    changeVote(previousVote, vote) {
        this.postData.userVote = vote;
        this.postData.voteTotal += -1 * previousVote + vote;
        if (vote === src_app_enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_1__.UpvoteScore.Upvote) {
            this.upvoteHighlight = true;
            this.downvoteHighlight = false;
        }
        else if (vote === src_app_enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_1__.UpvoteScore.Downvote) {
            this.upvoteHighlight = false;
            this.downvoteHighlight = true;
        }
        else {
            this.downvoteHighlight = false;
            this.upvoteHighlight = false;
        }
    }
    downvoteButton() {
        if (this.postData.userVote === src_app_enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_1__.UpvoteScore.Downvote) {
            this.service.deleteVote({ value: src_app_enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_1__.UpvoteScore.Downvote,
                userID: this.auth.getUserID(),
                postID: this.postData.postID }).subscribe({
                next: () => this.changeVote(-1, 0),
                error: (err) => { console.error(err); }
            });
        }
        else if (this.postData.userVote === src_app_enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_1__.UpvoteScore.Upvote) {
            this.service.patchVote({ value: src_app_enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_1__.UpvoteScore.Downvote,
                userID: this.auth.getUserID(),
                postID: this.postData.postID }).subscribe({
                next: (vote) => this.changeVote(1, vote.value),
                error: (err) => { console.error(err); }
            });
        }
        else {
            this.service.postVote({ value: src_app_enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_1__.UpvoteScore.Downvote,
                userID: this.auth.getUserID(),
                postID: this.postData.postID }).subscribe({
                next: (vote) => this.changeVote(0, vote.value),
                error: (err) => { console.error(err); }
            });
        }
    }
    upvoteButton() {
        if (this.postData.userVote === src_app_enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_1__.UpvoteScore.Upvote) {
            this.service.deleteVote({ value: src_app_enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_1__.UpvoteScore.Upvote,
                userID: this.auth.getUserID(),
                postID: this.postData.postID }).subscribe({
                next: () => this.changeVote(1, 0),
                error: (err) => { console.error(err); }
            });
        }
        else if (this.postData.userVote === src_app_enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_1__.UpvoteScore.Downvote) {
            this.service.patchVote({ value: src_app_enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_1__.UpvoteScore.Upvote,
                userID: this.auth.getUserID(),
                postID: this.postData.postID }).subscribe({
                next: (vote) => this.changeVote(-1, vote.value),
                error: (err) => { console.error(err); }
            });
        }
        else {
            this.service.postVote({ value: src_app_enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_1__.UpvoteScore.Upvote,
                userID: this.auth.getUserID(),
                postID: this.postData.postID }).subscribe({
                next: (vote) => this.changeVote(0, vote.value),
                error: (err) => { console.error(err); }
            });
        }
    }
}
LoggedInPostComponent.ɵfac = /*@__PURE__*/ function () { let ɵLoggedInPostComponent_BaseFactory; return function LoggedInPostComponent_Factory(t) { return (ɵLoggedInPostComponent_BaseFactory || (ɵLoggedInPostComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](LoggedInPostComponent)))(t || LoggedInPostComponent); }; }();
LoggedInPostComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LoggedInPostComponent, selectors: [["app-logged-in-post"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 9, consts: [[1, "post-and-comments"], [1, "user-post"], [1, "user-info"], [1, "post-title"], [1, "content-and-votes"], [1, "upvote-container"], ["src", "assets/svg/down.svg", 3, "ngClass", "click"], [1, "voteTotal"], [1, "content"], ["class", "button-container", 4, "ngIf"], ["class", "reply-dialog", 4, "ngIf"], [1, "button-container"], [1, "reply", 3, "click"], ["src", "assets/svg/comment.svg", "alt", "", 1, "button-graphic"], [1, "reply-dialog"], [3, "postID", "deleteDialog"]], template: function LoggedInPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3)(6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoggedInPostComponent_Template_img_click_10_listener() { return ctx.upvoteButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoggedInPostComponent_Template_img_click_13_listener() { return ctx.downvoteButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, LoggedInPostComponent_div_16_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, LoggedInPostComponent_div_17_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "app-comment-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.postData.posterName, " | ", ctx.postData.timeString, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.postData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.upvoteHighlight ? "highlighted-upvote" : "unhighlighted-upvote");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.postData.voteTotal, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.downvoteHighlight ? "highlighted-downvote" : "unhighlighted-downvote");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.postData.content, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.replyOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.replyOpen);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _textInputComponents_reply_box_reply_box_component__WEBPACK_IMPORTED_MODULE_2__.ReplyBoxComponent, _comment_container_comment_container_component__WEBPACK_IMPORTED_MODULE_3__.CommentContainerComponent], styles: [".post-and-comments[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--secondary-background);\n    box-sizing: border-box;\n    padding: 10px;\n    min-height: 100vh;\n}\n\n.user-post[_ngcontent-%COMP%]{\n    background-color: var(--primary-background);\n    display: block;\n    width: 80vw;\n    padding-bottom: 10px;\n    padding-top: 5px;\n    margin-top: 10px;\n}\n\n.user-info[_ngcontent-%COMP%]{\n    margin-left: 2.5%;\n    margin-top: 10px;\n    color: var(--light-text);\n    font-size: 0.8em;\n}\n\n.post-title[_ngcontent-%COMP%]{\n    margin-left: 2.5%;\n}\n\nh2[_ngcontent-%COMP%]{\n    margin-top: 10px;\n}\n\n.content-and-votes[_ngcontent-%COMP%]{\n    display: flex;\n    width: 95%;\n    flex-direction: row;\n    margin-left: 2.5%;\n    margin-right: 2.5%;\n}\n\n.content[_ngcontent-%COMP%]{\n    margin-left: 10px;\n    padding-top: 5px;\n    width: calc(100% - 45px);\n}\n\n.upvote-container[_ngcontent-%COMP%]{\n    display: flex;\n    height: 60px;\n    width: 25px;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    color: var(--primary-background);\n    background-color: var(--secondary-background);\n    border-radius: 10%;\n}\n\n.highlighted-upvote[_ngcontent-%COMP%]{\n    height: 40%;\n    transform: rotate(0.5turn);\n    filter: invert(32%) sepia(73%) saturate(1580%) hue-rotate(335deg) brightness(102%) contrast(93%);\n}\n\n.unhighlighted-upvote[_ngcontent-%COMP%]{\n    height: 40%;\n    transform: rotate(0.5turn);\n}\n\n.highlighted-downvote[_ngcontent-%COMP%]{\n    height: 40%;\n    filter: invert(32%) sepia(73%) saturate(1580%) hue-rotate(335deg) brightness(102%) contrast(93%);\n}\n\n.unhighlighted-downvote[_ngcontent-%COMP%]{\n    height: 40%;\n}\n\n.unhighlighted-upvote[_ngcontent-%COMP%]:hover{\n    filter: invert(32%) sepia(73%) saturate(1580%) hue-rotate(335deg) brightness(102%) contrast(93%);\n}\n\n.unhighlighted-downvote[_ngcontent-%COMP%]:hover{\n    filter: invert(32%) sepia(73%) saturate(1580%) hue-rotate(335deg) brightness(102%) contrast(93%);\n}\n\n.button-container[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: left;\n    margin-top: 10px;\n    margin-bottom: 5px;\n}\n\nbutton[_ngcontent-%COMP%]{\n    border: none;\n    background-color: var(--primary-background);\n    border-radius: 10%;\n    font-size: 0.8em;\n    display: flex;\n    flex-direction: row;\n    justify-content:space-around;\n    align-items: center;\n    color: var(--light-text);\n    font-weight: 700;\n}\n\nbutton[_ngcontent-%COMP%]:hover{\n    color: var(--active);\n    background-color: transparent;\n    filter: invert(32%) sepia(73%) saturate(1580%) hue-rotate(335deg) brightness(102%) contrast(93%);\n}\n\n.button-graphic[_ngcontent-%COMP%]{\n    padding-right: 3px;\n    height: 1em;\n}\n\nbutton-container[_ngcontent-%COMP%]{\n    padding-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkNBQTZDO0lBQzdDLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLGNBQWM7SUFDZCxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQ0FBZ0M7SUFDaEMsNkNBQTZDO0lBQzdDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsZ0dBQWdHO0FBQ3BHOztBQUVBO0lBQ0ksV0FBVztJQUNYLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnR0FBZ0c7QUFDcEc7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnR0FBZ0c7QUFDcEc7O0FBRUE7SUFDSSxnR0FBZ0c7QUFDcEc7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsNkJBQTZCO0lBQzdCLGdHQUFnRztBQUNwRzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoidXNlci1wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1hbmQtY29tbWVudHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLnVzZXItcG9zdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnVzZXItaW5mb3tcbiAgICBtYXJnaW4tbGVmdDogMi41JTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC10ZXh0KTtcbiAgICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4ucG9zdC10aXRsZXtcbiAgICBtYXJnaW4tbGVmdDogMi41JTtcbn1cblxuaDJ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNvbnRlbnQtYW5kLXZvdGVze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xuICAgIG1hcmdpbi1yaWdodDogMi41JTtcbn1cblxuLmNvbnRlbnR7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDVweCk7XG59XG5cbi51cHZvdGUtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xufSBcblxuLmhpZ2hsaWdodGVkLXVwdm90ZXtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwLjV0dXJuKTtcbiAgICBmaWx0ZXI6IGludmVydCgzMiUpIHNlcGlhKDczJSkgc2F0dXJhdGUoMTU4MCUpIGh1ZS1yb3RhdGUoMzM1ZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDkzJSk7XG59XG5cbi51bmhpZ2hsaWdodGVkLXVwdm90ZXtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwLjV0dXJuKTtcbn1cblxuLmhpZ2hsaWdodGVkLWRvd252b3Rle1xuICAgIGhlaWdodDogNDAlO1xuICAgIGZpbHRlcjogaW52ZXJ0KDMyJSkgc2VwaWEoNzMlKSBzYXR1cmF0ZSgxNTgwJSkgaHVlLXJvdGF0ZSgzMzVkZWcpIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoOTMlKTtcbn1cblxuLnVuaGlnaGxpZ2h0ZWQtZG93bnZvdGV7XG4gICAgaGVpZ2h0OiA0MCU7XG59XG5cbi51bmhpZ2hsaWdodGVkLXVwdm90ZTpob3ZlcntcbiAgICBmaWx0ZXI6IGludmVydCgzMiUpIHNlcGlhKDczJSkgc2F0dXJhdGUoMTU4MCUpIGh1ZS1yb3RhdGUoMzM1ZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDkzJSk7XG59XG5cbi51bmhpZ2hsaWdodGVkLWRvd252b3RlOmhvdmVye1xuICAgIGZpbHRlcjogaW52ZXJ0KDMyJSkgc2VwaWEoNzMlKSBzYXR1cmF0ZSgxNTgwJSkgaHVlLXJvdGF0ZSgzMzVkZWcpIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoOTMlKTtcbn1cblxuLmJ1dHRvbi1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbmJ1dHRvbntcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC10ZXh0KTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG5idXR0b246aG92ZXJ7XG4gICAgY29sb3I6IHZhcigtLWFjdGl2ZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZmlsdGVyOiBpbnZlcnQoMzIlKSBzZXBpYSg3MyUpIHNhdHVyYXRlKDE1ODAlKSBodWUtcm90YXRlKDMzNWRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCg5MyUpO1xufVxuXG4uYnV0dG9uLWdyYXBoaWN7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgIGhlaWdodDogMWVtO1xufVxuXG5idXR0b24tY29udGFpbmVye1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 642:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/postComponents/not-logged-in-post/not-logged-in-post.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotLoggedInPostComponent": () => (/* binding */ NotLoggedInPostComponent)
/* harmony export */ });
/* harmony import */ var _abstract_post_body_abstract_post_body_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-post-body/abstract-post-body.component */ 6755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _comment_container_comment_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comment-container/comment-container.component */ 3766);



class NotLoggedInPostComponent extends _abstract_post_body_abstract_post_body_component__WEBPACK_IMPORTED_MODULE_0__.AbstractPostBodyComponent {
}
NotLoggedInPostComponent.ɵfac = /*@__PURE__*/ function () { let ɵNotLoggedInPostComponent_BaseFactory; return function NotLoggedInPostComponent_Factory(t) { return (ɵNotLoggedInPostComponent_BaseFactory || (ɵNotLoggedInPostComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](NotLoggedInPostComponent)))(t || NotLoggedInPostComponent); }; }();
NotLoggedInPostComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NotLoggedInPostComponent, selectors: [["app-not-logged-in-post"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 5, consts: [[1, "post-and-comments"], [1, "user-post"], [1, "user-info"], [1, "post-title"], [1, "content-and-votes"], [1, "votes"], [1, "content"]], template: function NotLoggedInPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "app-comment-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.postData.posterName, " | ", ctx.postData.timeString, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.postData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.postData.voteTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.postData.content, " ");
    } }, dependencies: [_comment_container_comment_container_component__WEBPACK_IMPORTED_MODULE_1__.CommentContainerComponent], styles: [".post-and-comments[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--secondary-background);\n    box-sizing: border-box;\n    padding: 10px;\n    min-height: 100vh;\n}\n\n.user-post[_ngcontent-%COMP%]{\n    background-color: var(--primary-background);\n    display: block;\n    width: 80vw;\n    padding-bottom: 10px;\n    padding-top: 5px;\n    margin-top: 10px;\n}\n\n.user-info[_ngcontent-%COMP%]{\n    margin-left: 2.5%;\n    margin-top: 10px;\n    color: var(--light-text);\n    font-size: 0.8em;\n}\n\n.post-title[_ngcontent-%COMP%]{\n    margin-left: 2.5%;\n}\n\nh2[_ngcontent-%COMP%]{\n    margin-top: 10px;\n}\n\n.content-and-votes[_ngcontent-%COMP%]{\n    display: flex;\n    width: 95%;\n    flex-direction: row;\n    margin-left: 2.5%;\n    margin-right: 2.5%;\n}\n\n.content[_ngcontent-%COMP%]{\n    margin-left: 10px;\n    padding-top: 5px;\n    width: calc(100% - 45px);\n}\n\n.upvote-container[_ngcontent-%COMP%]{\n    display: flex;\n    height: 60px;\n    width: 25px;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    color: var(--primary-background);\n    background-color: var(--secondary-background);\n    border-radius: 10%;\n}\n\n.highlighted-upvote[_ngcontent-%COMP%]{\n    height: 40%;\n    transform: rotate(0.5turn);\n    filter: invert(32%) sepia(73%) saturate(1580%) hue-rotate(335deg) brightness(102%) contrast(93%);\n}\n\n.unhighlighted-upvote[_ngcontent-%COMP%]{\n    height: 40%;\n    transform: rotate(0.5turn);\n}\n\n.highlighted-downvote[_ngcontent-%COMP%]{\n    height: 40%;\n    filter: invert(32%) sepia(73%) saturate(1580%) hue-rotate(335deg) brightness(102%) contrast(93%);\n}\n\n.unhighlighted-downvote[_ngcontent-%COMP%]{\n    height: 40%;\n}\n\n.unhighlighted-upvote[_ngcontent-%COMP%]:hover{\n    filter: invert(32%) sepia(73%) saturate(1580%) hue-rotate(335deg) brightness(102%) contrast(93%);\n}\n\n.unhighlighted-downvote[_ngcontent-%COMP%]:hover{\n    filter: invert(32%) sepia(73%) saturate(1580%) hue-rotate(335deg) brightness(102%) contrast(93%);\n}\n\n.button-container[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: left;\n    margin-top: 10px;\n    margin-bottom: 5px;\n}\n\nbutton[_ngcontent-%COMP%]{\n    border: none;\n    background-color: var(--primary-background);\n    border-radius: 10%;\n    font-size: 0.8em;\n    display: flex;\n    flex-direction: row;\n    justify-content:space-around;\n    align-items: center;\n    color: var(--light-text);\n    font-weight: 700;\n}\n\nbutton[_ngcontent-%COMP%]:hover{\n    color: var(--active);\n    background-color: transparent;\n    filter: invert(32%) sepia(73%) saturate(1580%) hue-rotate(335deg) brightness(102%) contrast(93%);\n}\n\n.button-graphic[_ngcontent-%COMP%]{\n    padding-right: 3px;\n    height: 1em;\n}\n\nbutton-container[_ngcontent-%COMP%]{\n    padding-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkNBQTZDO0lBQzdDLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLGNBQWM7SUFDZCxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQ0FBZ0M7SUFDaEMsNkNBQTZDO0lBQzdDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsZ0dBQWdHO0FBQ3BHOztBQUVBO0lBQ0ksV0FBVztJQUNYLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnR0FBZ0c7QUFDcEc7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnR0FBZ0c7QUFDcEc7O0FBRUE7SUFDSSxnR0FBZ0c7QUFDcEc7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsNkJBQTZCO0lBQzdCLGdHQUFnRztBQUNwRzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoidXNlci1wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1hbmQtY29tbWVudHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLnVzZXItcG9zdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnVzZXItaW5mb3tcbiAgICBtYXJnaW4tbGVmdDogMi41JTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC10ZXh0KTtcbiAgICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4ucG9zdC10aXRsZXtcbiAgICBtYXJnaW4tbGVmdDogMi41JTtcbn1cblxuaDJ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNvbnRlbnQtYW5kLXZvdGVze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xuICAgIG1hcmdpbi1yaWdodDogMi41JTtcbn1cblxuLmNvbnRlbnR7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDVweCk7XG59XG5cbi51cHZvdGUtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xufSBcblxuLmhpZ2hsaWdodGVkLXVwdm90ZXtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwLjV0dXJuKTtcbiAgICBmaWx0ZXI6IGludmVydCgzMiUpIHNlcGlhKDczJSkgc2F0dXJhdGUoMTU4MCUpIGh1ZS1yb3RhdGUoMzM1ZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDkzJSk7XG59XG5cbi51bmhpZ2hsaWdodGVkLXVwdm90ZXtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwLjV0dXJuKTtcbn1cblxuLmhpZ2hsaWdodGVkLWRvd252b3Rle1xuICAgIGhlaWdodDogNDAlO1xuICAgIGZpbHRlcjogaW52ZXJ0KDMyJSkgc2VwaWEoNzMlKSBzYXR1cmF0ZSgxNTgwJSkgaHVlLXJvdGF0ZSgzMzVkZWcpIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoOTMlKTtcbn1cblxuLnVuaGlnaGxpZ2h0ZWQtZG93bnZvdGV7XG4gICAgaGVpZ2h0OiA0MCU7XG59XG5cbi51bmhpZ2hsaWdodGVkLXVwdm90ZTpob3ZlcntcbiAgICBmaWx0ZXI6IGludmVydCgzMiUpIHNlcGlhKDczJSkgc2F0dXJhdGUoMTU4MCUpIGh1ZS1yb3RhdGUoMzM1ZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDkzJSk7XG59XG5cbi51bmhpZ2hsaWdodGVkLWRvd252b3RlOmhvdmVye1xuICAgIGZpbHRlcjogaW52ZXJ0KDMyJSkgc2VwaWEoNzMlKSBzYXR1cmF0ZSgxNTgwJSkgaHVlLXJvdGF0ZSgzMzVkZWcpIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoOTMlKTtcbn1cblxuLmJ1dHRvbi1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbmJ1dHRvbntcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC10ZXh0KTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG5idXR0b246aG92ZXJ7XG4gICAgY29sb3I6IHZhcigtLWFjdGl2ZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZmlsdGVyOiBpbnZlcnQoMzIlKSBzZXBpYSg3MyUpIHNhdHVyYXRlKDE1ODAlKSBodWUtcm90YXRlKDMzNWRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCg5MyUpO1xufVxuXG4uYnV0dG9uLWdyYXBoaWN7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgIGhlaWdodDogMWVtO1xufVxuXG5idXR0b24tY29udGFpbmVye1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufSJdfQ== */", ".votes[_ngcontent-%COMP%]{\n    background-color: var(--secondary-background);\n    min-width: 2em;\n    height: 2em;\n    border-radius: 50%;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    color: var(--primary-background);\n}\n\n.content[_ngcontent-%COMP%]{\n    margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1sb2dnZWQtaW4tcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkNBQTZDO0lBQzdDLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJub3QtbG9nZ2VkLWluLXBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52b3Rlc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZCk7XG4gICAgbWluLXdpZHRoOiAyZW07XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kKTtcbn1cblxuLmNvbnRlbnR7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 2361:
/*!****************************************************************************************!*\
  !*** ./src/app/components/postComponents/posts-container/posts-container.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsContainerComponent": () => (/* binding */ PostsContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_post_data_storage_post_data_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/post-data-storage/post-data-storage.service */ 9223);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _directives_post_selector_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../directives/post-selector.directive */ 2112);




function PostsContainerComponent_0_ng_template_0_Template(rf, ctx) { }
function PostsContainerComponent_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PostsContainerComponent_0_ng_template_0_Template, 0, 0, "ng-template");
} }
class PostsContainerComponent {
    constructor(postDataStorage, route) {
        this.postDataStorage = postDataStorage;
        this.route = route;
    }
    ngOnInit() {
        this.route.url.subscribe({
            next: (url) => this.setData(url[url.length - 1].toString())
        });
    }
    setData(idString) {
        const id = parseInt(idString);
        this.postDataStorage.getData(id).subscribe({
            next: (post) => this.postData = post
        });
    }
}
PostsContainerComponent.ɵfac = function PostsContainerComponent_Factory(t) { return new (t || PostsContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_post_data_storage_post_data_storage_service__WEBPACK_IMPORTED_MODULE_0__.PostDataStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
PostsContainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PostsContainerComponent, selectors: [["app-posts-container"]], decls: 1, vars: 1, consts: [[4, "appPostSelector"]], template: function PostsContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PostsContainerComponent_0_Template, 1, 0, null, 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("appPostSelector", ctx.postData);
    } }, dependencies: [_directives_post_selector_directive__WEBPACK_IMPORTED_MODULE_1__.PostSelectorDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0cy1jb250YWluZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 8934:
/*!****************************************************************************!*\
  !*** ./src/app/components/postComponents/user-post/user-post.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPostComponent": () => (/* binding */ UserPostComponent)
/* harmony export */ });
/* harmony import */ var _logged_in_post_logged_in_post_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logged-in-post/logged-in-post.component */ 631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _textInputComponents_reply_box_reply_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../textInputComponents/reply-box/reply-box.component */ 1394);
/* harmony import */ var _comment_container_comment_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comment-container/comment-container.component */ 3766);
/* harmony import */ var _textInputComponents_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../textInputComponents/post-edit/post-edit.component */ 2051);






function UserPostComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-post-edit", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("deleteDialog", function UserPostComponent_ng_container_15_Template_app_post_edit_deleteDialog_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.editButton()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", ctx_r0.postData.content)("postData", ctx_r0.postData);
} }
function UserPostComponent_ng_container_16_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserPostComponent_ng_container_16_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.replyButton()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserPostComponent_ng_container_16_div_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.editButton()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserPostComponent_ng_container_16_div_2_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.deleteButton()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} }
function UserPostComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, UserPostComponent_ng_container_16_div_2_Template, 13, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.postData.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.editActive && !ctx_r1.replyOpen);
} }
function UserPostComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20)(1, "app-reply-box", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("deleteDialog", function UserPostComponent_div_17_Template_app_reply_box_deleteDialog_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.replyButton()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("postID", ctx_r2.postData.postID);
} }
class UserPostComponent extends _logged_in_post_logged_in_post_component__WEBPACK_IMPORTED_MODULE_0__.LoggedInPostComponent {
    constructor() {
        super(...arguments);
        this.editActive = false;
    }
    editButton() {
        this.editActive = !this.editActive;
    }
    updatePostData(post) {
        this.postData.content = post.content;
    }
    deleteButton() {
        this.service.deletePost(this.postID)
            .subscribe(() => this.router.navigateByUrl(''));
    }
}
UserPostComponent.ɵfac = /*@__PURE__*/ function () { let ɵUserPostComponent_BaseFactory; return function UserPostComponent_Factory(t) { return (ɵUserPostComponent_BaseFactory || (ɵUserPostComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](UserPostComponent)))(t || UserPostComponent); }; }();
UserPostComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UserPostComponent, selectors: [["app-user-post"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 9, consts: [[1, "post-and-comments"], [1, "user-post"], [1, "user-info"], [1, "post-title"], [1, "content-and-votes"], [1, "upvote-container"], ["src", "assets/svg/down.svg", 3, "ngClass", "click"], [1, "voteTotal"], [1, "content"], [4, "ngIf"], ["class", "reply-dialog", 4, "ngIf"], [3, "text", "postData", "deleteDialog"], ["class", "button-container", 4, "ngIf"], [1, "button-container"], [1, "reply", 3, "click"], ["src", "assets/svg/comment.svg", "alt", "", 1, "button-graphic"], [1, "edit", 3, "click"], ["src", "assets/svg/edit.svg", "alt", "", 1, "button-graphic"], [1, "delete", 3, "click"], ["src", "assets/svg/delete.svg", "alt", "", 1, "button-graphic"], [1, "reply-dialog"], [3, "postID", "deleteDialog"]], template: function UserPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3)(6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserPostComponent_Template_img_click_10_listener() { return ctx.upvoteButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserPostComponent_Template_img_click_13_listener() { return ctx.downvoteButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, UserPostComponent_ng_container_15_Template, 2, 2, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, UserPostComponent_ng_container_16_Template, 3, 2, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, UserPostComponent_div_17_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "app-comment-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.postData.posterName, " | ", ctx.postData.timeString, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.postData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.upvoteHighlight ? "highlighted-upvote" : "unhighlighted-upvote");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.postData.voteTotal, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.downvoteHighlight ? "highlighted-downvote" : "unhighlighted-downvote");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.editActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.editActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.replyOpen);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _textInputComponents_reply_box_reply_box_component__WEBPACK_IMPORTED_MODULE_1__.ReplyBoxComponent, _comment_container_comment_container_component__WEBPACK_IMPORTED_MODULE_2__.CommentContainerComponent, _textInputComponents_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_3__.PostEditComponent], styles: [".post-and-comments[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--secondary-background);\n    box-sizing: border-box;\n    padding: 10px;\n    min-height: 100vh;\n}\n\n.user-post[_ngcontent-%COMP%]{\n    background-color: var(--primary-background);\n    display: block;\n    width: 80vw;\n    padding-bottom: 10px;\n    padding-top: 5px;\n    margin-top: 10px;\n}\n\n.user-info[_ngcontent-%COMP%]{\n    margin-left: 2.5%;\n    margin-top: 10px;\n    color: var(--light-text);\n    font-size: 0.8em;\n}\n\n.post-title[_ngcontent-%COMP%]{\n    margin-left: 2.5%;\n}\n\nh2[_ngcontent-%COMP%]{\n    margin-top: 10px;\n}\n\n.content-and-votes[_ngcontent-%COMP%]{\n    display: flex;\n    width: 95%;\n    flex-direction: row;\n    margin-left: 2.5%;\n    margin-right: 2.5%;\n}\n\n.content[_ngcontent-%COMP%]{\n    margin-left: 10px;\n    padding-top: 5px;\n    width: calc(100% - 45px);\n}\n\n.upvote-container[_ngcontent-%COMP%]{\n    display: flex;\n    height: 60px;\n    width: 25px;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    color: var(--primary-background);\n    background-color: var(--secondary-background);\n    border-radius: 10%;\n}\n\n.highlighted-upvote[_ngcontent-%COMP%]{\n    height: 40%;\n    transform: rotate(0.5turn);\n    filter: invert(32%) sepia(73%) saturate(1580%) hue-rotate(335deg) brightness(102%) contrast(93%);\n}\n\n.unhighlighted-upvote[_ngcontent-%COMP%]{\n    height: 40%;\n    transform: rotate(0.5turn);\n}\n\n.highlighted-downvote[_ngcontent-%COMP%]{\n    height: 40%;\n    filter: invert(32%) sepia(73%) saturate(1580%) hue-rotate(335deg) brightness(102%) contrast(93%);\n}\n\n.unhighlighted-downvote[_ngcontent-%COMP%]{\n    height: 40%;\n}\n\n.unhighlighted-upvote[_ngcontent-%COMP%]:hover{\n    filter: invert(32%) sepia(73%) saturate(1580%) hue-rotate(335deg) brightness(102%) contrast(93%);\n}\n\n.unhighlighted-downvote[_ngcontent-%COMP%]:hover{\n    filter: invert(32%) sepia(73%) saturate(1580%) hue-rotate(335deg) brightness(102%) contrast(93%);\n}\n\n.button-container[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: left;\n    margin-top: 10px;\n    margin-bottom: 5px;\n}\n\nbutton[_ngcontent-%COMP%]{\n    border: none;\n    background-color: var(--primary-background);\n    border-radius: 10%;\n    font-size: 0.8em;\n    display: flex;\n    flex-direction: row;\n    justify-content:space-around;\n    align-items: center;\n    color: var(--light-text);\n    font-weight: 700;\n}\n\nbutton[_ngcontent-%COMP%]:hover{\n    color: var(--active);\n    background-color: transparent;\n    filter: invert(32%) sepia(73%) saturate(1580%) hue-rotate(335deg) brightness(102%) contrast(93%);\n}\n\n.button-graphic[_ngcontent-%COMP%]{\n    padding-right: 3px;\n    height: 1em;\n}\n\nbutton-container[_ngcontent-%COMP%]{\n    padding-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkNBQTZDO0lBQzdDLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLGNBQWM7SUFDZCxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQ0FBZ0M7SUFDaEMsNkNBQTZDO0lBQzdDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsZ0dBQWdHO0FBQ3BHOztBQUVBO0lBQ0ksV0FBVztJQUNYLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnR0FBZ0c7QUFDcEc7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnR0FBZ0c7QUFDcEc7O0FBRUE7SUFDSSxnR0FBZ0c7QUFDcEc7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsNkJBQTZCO0lBQzdCLGdHQUFnRztBQUNwRzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoidXNlci1wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1hbmQtY29tbWVudHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLnVzZXItcG9zdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnVzZXItaW5mb3tcbiAgICBtYXJnaW4tbGVmdDogMi41JTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC10ZXh0KTtcbiAgICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4ucG9zdC10aXRsZXtcbiAgICBtYXJnaW4tbGVmdDogMi41JTtcbn1cblxuaDJ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNvbnRlbnQtYW5kLXZvdGVze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xuICAgIG1hcmdpbi1yaWdodDogMi41JTtcbn1cblxuLmNvbnRlbnR7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDVweCk7XG59XG5cbi51cHZvdGUtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xufSBcblxuLmhpZ2hsaWdodGVkLXVwdm90ZXtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwLjV0dXJuKTtcbiAgICBmaWx0ZXI6IGludmVydCgzMiUpIHNlcGlhKDczJSkgc2F0dXJhdGUoMTU4MCUpIGh1ZS1yb3RhdGUoMzM1ZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDkzJSk7XG59XG5cbi51bmhpZ2hsaWdodGVkLXVwdm90ZXtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwLjV0dXJuKTtcbn1cblxuLmhpZ2hsaWdodGVkLWRvd252b3Rle1xuICAgIGhlaWdodDogNDAlO1xuICAgIGZpbHRlcjogaW52ZXJ0KDMyJSkgc2VwaWEoNzMlKSBzYXR1cmF0ZSgxNTgwJSkgaHVlLXJvdGF0ZSgzMzVkZWcpIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoOTMlKTtcbn1cblxuLnVuaGlnaGxpZ2h0ZWQtZG93bnZvdGV7XG4gICAgaGVpZ2h0OiA0MCU7XG59XG5cbi51bmhpZ2hsaWdodGVkLXVwdm90ZTpob3ZlcntcbiAgICBmaWx0ZXI6IGludmVydCgzMiUpIHNlcGlhKDczJSkgc2F0dXJhdGUoMTU4MCUpIGh1ZS1yb3RhdGUoMzM1ZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDkzJSk7XG59XG5cbi51bmhpZ2hsaWdodGVkLWRvd252b3RlOmhvdmVye1xuICAgIGZpbHRlcjogaW52ZXJ0KDMyJSkgc2VwaWEoNzMlKSBzYXR1cmF0ZSgxNTgwJSkgaHVlLXJvdGF0ZSgzMzVkZWcpIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoOTMlKTtcbn1cblxuLmJ1dHRvbi1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbmJ1dHRvbntcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC10ZXh0KTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG5idXR0b246aG92ZXJ7XG4gICAgY29sb3I6IHZhcigtLWFjdGl2ZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZmlsdGVyOiBpbnZlcnQoMzIlKSBzZXBpYSg3MyUpIHNhdHVyYXRlKDE1ODAlKSBodWUtcm90YXRlKDMzNWRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCg5MyUpO1xufVxuXG4uYnV0dG9uLWdyYXBoaWN7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgIGhlaWdodDogMWVtO1xufVxuXG5idXR0b24tY29udGFpbmVye1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 3082:
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/searchComponents/search-results/search-results/search-results.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultsComponent": () => (/* binding */ SearchResultsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_post_post_data_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/post/post-data-service.service */ 3060);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-infinite-scroll */ 7364);
/* harmony import */ var _homepageComponents_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../homepageComponents/post-card/post-card.component */ 7079);









function SearchResultsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" No results found for \"", ctx_r0.query, "\" ");
  }
}

function SearchResultsComponent_div_2_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul")(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-post-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const post_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("postData", post_r5);
  }
}

function SearchResultsComponent_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div")(3, "div")(4, "div")(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function SearchResultsComponent_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No more posts match this search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function SearchResultsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scrolled", function SearchResultsComponent_div_2_Template_div_scrolled_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SearchResultsComponent_div_2_ul_3_Template, 3, 1, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SearchResultsComponent_div_2_div_5_Template, 6, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SearchResultsComponent_div_2_div_6_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Results found for \"", ctx_r1.query, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 6, ctx_r1.posts));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.outOfPosts);
  }
}

class SearchResultsComponent {
  constructor(activatedRoute, postService) {
    this.activatedRoute = activatedRoute;
    this.postService = postService;
    this.posts = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.postsExist = false;
    this.page = 0;
    this.outOfPosts = false;
    this.loading = false;
    activatedRoute.queryParamMap.subscribe(paramMap => {
      let queryStr = paramMap.get("query");

      if (!queryStr) {
        this.query = "";
      } else {
        this.query = queryStr;
      }

      let pageStr = paramMap.get("pageNumber");

      if (!pageStr || !parseInt(pageStr)) {
        this.page = 0;
      } else {
        this.page = parseInt(pageStr);
      }
    });
  }

  ngOnInit() {
    this.posts.subscribe(p => {
      this.postsExist = p.length > 0;
    });
    this.posts.next([]);
    this.page = 0;
    this.loadPage(0);
  }

  loadPage(page) {
    this.postService.search(this.query, page).subscribe(p => this.updatePosts(p));
  }

  updatePosts(newPosts) {
    if (newPosts.length > 0) {
      this.posts.next([...this.posts.value, ...newPosts]);
      this.loading = false;
      this.outOfPosts = false;
    } else {
      this.loading = false;
      this.outOfPosts = true;
    }
  }

  onScroll() {
    this.page += 1;
    this.loadPage(this.page);
  }

}

SearchResultsComponent.ɵfac = function SearchResultsComponent_Factory(t) {
  return new (t || SearchResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_post_post_data_service_service__WEBPACK_IMPORTED_MODULE_0__.PostDataService));
};

SearchResultsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SearchResultsComponent,
  selectors: [["app-search-results"]],
  decls: 3,
  vars: 2,
  consts: [["class", "empty-cards", 4, "ngIf"], ["class", "post-card-container", "infiniteScroll", "", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrolled", 4, "ngIf"], [1, "empty-cards"], ["infiniteScroll", "", 1, "post-card-container", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrolled"], [4, "ngFor", "ngForOf"], ["class", "loading-container", 4, "ngIf"], ["class", "out-of-posts-container", 4, "ngIf"], [3, "postData"], [1, "loading-container"], [1, "lds-ellipsis"], [1, "out-of-posts-container"]],
  template: function SearchResultsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchResultsComponent_div_1_Template, 2, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SearchResultsComponent_div_2_Template, 7, 8, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.postsExist);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.postsExist);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__.InfiniteScrollDirective, _homepageComponents_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_1__.PostCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["[_nghost-%COMP%]{\n    display: flex;\n    justify-content: center;\n    background-color: var(--secondary-background);\n    min-height: 100vh;\n}\n\n.post-card-container[_ngcontent-%COMP%]{\n    width: 80%;\n    margin: 0px;\n}\n\n.empty-cards[_ngcontent-%COMP%]{\n    margin-top: 10px;\n    color: var(--primary-background);\n    width: 100;\n}\n\nul[_ngcontent-%COMP%]{\n    list-style-type: none;\n    padding-inline-start: 0px;\n}\n\n.loading-container[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n}\n\n.out-of-posts-container[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    color: var(--primary-background);\n    margin-bottom: 15px;\n}\n\n.lds-ellipsis[_ngcontent-%COMP%] {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: var(--primary-background);\n    animation-timing-function: cubic-bezier(0, 1, 1, 0);\n  }\n\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n    left: 8px;\n    animation: lds-ellipsis1 0.6s infinite;\n  }\n\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n    left: 8px;\n    animation: lds-ellipsis2 0.6s infinite;\n  }\n\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n    left: 32px;\n    animation: lds-ellipsis2 0.6s infinite;\n  }\n\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n    left: 56px;\n    animation: lds-ellipsis3 0.6s infinite;\n  }\n\n@keyframes lds-ellipsis1 {\n    0% {\n      transform: scale(0);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n\n@keyframes lds-ellipsis3 {\n    0% {\n      transform: scale(1);\n    }\n    100% {\n      transform: scale(0);\n    }\n  }\n\n@keyframes lds-ellipsis2 {\n    0% {\n      transform: translate(0, 0);\n    }\n    100% {\n      transform: translate(24px, 0);\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtY2FyZC1jb250YWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsNkNBQTZDO0lBQzdDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtFQUNkOztBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckMsbURBQW1EO0VBQ3JEOztBQUNBO0lBQ0UsU0FBUztJQUNULHNDQUFzQztFQUN4Qzs7QUFDQTtJQUNFLFNBQVM7SUFDVCxzQ0FBc0M7RUFDeEM7O0FBQ0E7SUFDRSxVQUFVO0lBQ1Ysc0NBQXNDO0VBQ3hDOztBQUNBO0lBQ0UsVUFBVTtJQUNWLHNDQUFzQztFQUN4Qzs7QUFDQTtJQUNFO01BQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxtQkFBbUI7SUFDckI7RUFDRjs7QUFDQTtJQUNFO01BQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxtQkFBbUI7SUFDckI7RUFDRjs7QUFDQTtJQUNFO01BQ0UsMEJBQTBCO0lBQzVCO0lBQ0E7TUFDRSw2QkFBNkI7SUFDL0I7RUFDRiIsImZpbGUiOiJwb3N0LWNhcmQtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kKTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLnBvc3QtY2FyZC1jb250YWluZXJ7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLmVtcHR5LWNhcmRze1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZCk7XG4gICAgd2lkdGg6IDEwMDtcbn1cblxudWx7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG59XG5cbi5sb2FkaW5nLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ub3V0LW9mLXBvc3RzLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5sZHMtZWxsaXBzaXMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICB9XG4gIC5sZHMtZWxsaXBzaXMgZGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzM3B4O1xuICAgIHdpZHRoOiAxM3B4O1xuICAgIGhlaWdodDogMTNweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMSwgMSwgMCk7XG4gIH1cbiAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICBsZWZ0OiA4cHg7XG4gICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMxIDAuNnMgaW5maW5pdGU7XG4gIH1cbiAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICBsZWZ0OiA4cHg7XG4gICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XG4gIH1cbiAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICBsZWZ0OiAzMnB4O1xuICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xuICB9XG4gIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCg0KSB7XG4gICAgbGVmdDogNTZweDtcbiAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczMgMC42cyBpbmZpbml0ZTtcbiAgfVxuICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczEge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMzIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgMCk7XG4gICAgfVxuICB9XG4gICJdfQ== */", "h3[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    color: var(--primary-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdDQUFnQztBQUNwQyIsImZpbGUiOiJzZWFyY2gtcmVzdWx0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kKTtcbn0iXX0= */"]
});

/***/ }),

/***/ 7137:
/*!*************************************************************************************************!*\
  !*** ./src/app/components/textInputComponents/abstract-text-box/abstract-text-box.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractTextBoxComponent": () => (/* binding */ AbstractTextBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);




const _c0 = [[["", "submit", ""]]];
const _c1 = ["[submit]"];
class AbstractTextBoxComponent {
    constructor() {
        this.deleteDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.formText = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.text);
    }
    ngOnInit() {
        this.formText.setValue(this.text);
    }
    onSubmit() {
    }
    cancelButton() {
        this.deleteDialog.emit();
    }
}
AbstractTextBoxComponent.ɵfac = function AbstractTextBoxComponent_Factory(t) { return new (t || AbstractTextBoxComponent)(); };
AbstractTextBoxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AbstractTextBoxComponent, selectors: [["app-abstract-text-box"]], inputs: { text: "text" }, outputs: { deleteDialog: "deleteDialog" }, ngContentSelectors: _c1, decls: 5, vars: 1, consts: [[3, "ngSubmit"], ["type", "text", "name", "inputTextBox", 3, "formControl"], [1, "cancel", 3, "click"]], template: function AbstractTextBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AbstractTextBoxComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AbstractTextBoxComponent_Template_button_click_3_listener() { return ctx.cancelButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formText);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYnN0cmFjdC10ZXh0LWJveC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 7002:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/textInputComponents/character-count/character-count.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharacterCountComponent": () => (/* binding */ CharacterCountComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);



class CharacterCountComponent {
    constructor() {
        this.withinLengthEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.currentLength = 0;
        this.withinLength = true;
    }
    ngOnChanges(changes) {
        this.currentLength = this.content.length;
        if (this.content.length <= this.maxLength) {
            this.withinLengthEmitter.emit(true);
            this.withinLength = true;
        }
        else {
            this.withinLengthEmitter.emit(false);
            this.withinLength = false;
        }
    }
}
CharacterCountComponent.ɵfac = function CharacterCountComponent_Factory(t) { return new (t || CharacterCountComponent)(); };
CharacterCountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CharacterCountComponent, selectors: [["app-character-count"]], inputs: { maxLength: "maxLength", content: "content" }, outputs: { withinLengthEmitter: "withinLengthEmitter" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 3, consts: [[1, "message-container"], [3, "ngClass"]], template: function CharacterCountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.withinLength ? "within-length-message" : "overflow-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.currentLength, "/", ctx.maxLength, "");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["span[_ngcontent-%COMP%]{\n    font-size: 0.5em;\n}\n\n.overflow-message[_ngcontent-%COMP%]{\n    color: var(--active);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3Rlci1jb3VudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCIiwiZmlsZSI6ImNoYXJhY3Rlci1jb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbntcbiAgICBmb250LXNpemU6IDAuNWVtO1xufVxuXG4ub3ZlcmZsb3ctbWVzc2FnZXtcbiAgICBjb2xvcjogdmFyKC0tYWN0aXZlKTtcbn0iXX0= */"] });


/***/ }),

/***/ 4699:
/*!***************************************************************************************!*\
  !*** ./src/app/components/textInputComponents/comment-edit/comment-edit.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentEditComponent": () => (/* binding */ CommentEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _abstract_text_box_abstract_text_box_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-text-box/abstract-text-box.component */ 7137);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var src_app_services_comment_comment_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/comment/comment-service.service */ 7609);
/* harmony import */ var src_app_services_post_data_storage_post_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/post-data-storage/post-data-storage.service */ 9223);
/* harmony import */ var src_app_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/authorization.service */ 1874);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _character_count_character_count_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../character-count/character-count.component */ 7002);










class CommentEditComponent extends _abstract_text_box_abstract_text_box_component__WEBPACK_IMPORTED_MODULE_0__.AbstractTextBoxComponent {
    constructor(service, postDataStorage, auth) {
        super();
        this.service = service;
        this.auth = auth;
        this.commentDataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.withinLength = true;
        this.MAX_LENGTH = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.COMMENT_LENGTH;
        postDataStorage.getID().subscribe((id) => this.postID = id);
    }
    ngOnInit() {
        super.ngOnInit();
        this.currentText = this.formText.value;
        this.formText.valueChanges
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(200))
            .subscribe((text) => this.currentText = text);
    }
    updateView(text) {
        this.commentData.content = text;
        this.commentDataChange.emit(this.commentData);
        this.deleteDialog.emit();
    }
    onSubmit() {
        if (!this.validateEdit()) {
            return;
        }
        let comment = {
            userID: this.commentData.userID,
            postID: this.postID,
            content: this.formText.value
        };
        this.service.patchComment(comment, this.commentData.commentID)
            .subscribe({
            next: (rec) => { this.updateView(rec); },
            error: (err) => { alert(`Something went wrong with updating the comment: ${err}`); }
        });
    }
    updateLengthConstraint(b) {
        this.withinLength = b;
    }
    validateEdit() {
        if (!this.withinLength) {
            alert("Post too long to post");
            return false;
        }
        let userID = this.auth.getUserID();
        if (userID == null) {
            alert("Something went wrong. Please log in again");
            return false;
        }
        return true;
    }
}
CommentEditComponent.ɵfac = function CommentEditComponent_Factory(t) { return new (t || CommentEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_comment_comment_service_service__WEBPACK_IMPORTED_MODULE_2__.CommentService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_post_data_storage_post_data_storage_service__WEBPACK_IMPORTED_MODULE_3__.PostDataStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_4__.AuthorizationService)); };
CommentEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CommentEditComponent, selectors: [["app-comment-edit"]], inputs: { commentData: "commentData" }, outputs: { commentDataChange: "commentDataChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 14, vars: 3, consts: [[1, "edit-container"], ["name", "inputTextBox", 1, "comment-area", 3, "formControl"], [1, "buttons-and-length-container"], [1, "button-container"], ["type", "submit", 3, "click"], ["src", "assets/svg/submit.svg", "alt", "", 1, "button-graphic"], [1, "button-text"], [1, "cancel", 3, "click"], ["src", "assets/svg/cancel.svg", "alt", "", 1, "button-graphic"], [3, "maxLength", "content", "withinLengthEmitter"]], template: function CommentEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 0)(1, "textarea", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CommentEditComponent_Template_button_click_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CommentEditComponent_Template_button_click_9_listener() { return ctx.cancelButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "app-character-count", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("withinLengthEmitter", function CommentEditComponent_Template_app_character_count_withinLengthEmitter_13_listener($event) { return ctx.updateLengthConstraint($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.formText);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("maxLength", ctx.MAX_LENGTH)("content", ctx.currentText);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlDirective, _character_count_character_count_component__WEBPACK_IMPORTED_MODULE_5__.CharacterCountComponent], styles: [".comment-area[_ngcontent-%COMP%]{\n    width: 90%;\n    min-height: 100px;\n}\n\nbutton[_ngcontent-%COMP%]{\n    border: none;\n    background-color: var(--primary-background);\n    border-radius: 10%;\n    font-size: 0.8em;\n    display: flex;\n    flex-direction: row;\n    justify-content:space-around;\n    align-items: center;\n    color: var(--light-text);\n    font-weight: 700;\n}\n\nbutton[_ngcontent-%COMP%]:hover{\n    color: var(--active);\n    background-color: transparent;\n    filter: invert(32%) sepia(73%) saturate(1580%) hue-rotate(335deg) brightness(102%) contrast(93%);\n}\n\n.button-graphic[_ngcontent-%COMP%]{\n    padding-right: 3px;\n    height: 1em;\n}\n\n.buttons-and-length-container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.button-container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    padding-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwyQ0FBMkM7SUFDM0Msa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQiw2QkFBNkI7SUFDN0IsZ0dBQWdHO0FBQ3BHOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckIiLCJmaWxlIjoiY29tbWVudC1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWVudC1hcmVhe1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG59XG5cbmJ1dHRvbntcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC10ZXh0KTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG5idXR0b246aG92ZXJ7XG4gICAgY29sb3I6IHZhcigtLWFjdGl2ZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZmlsdGVyOiBpbnZlcnQoMzIlKSBzZXBpYSg3MyUpIHNhdHVyYXRlKDE1ODAlKSBodWUtcm90YXRlKDMzNWRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCg5MyUpO1xufVxuXG4uYnV0dG9uLWdyYXBoaWN7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgIGhlaWdodDogMWVtO1xufVxuXG4uYnV0dG9ucy1hbmQtbGVuZ3RoLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59Il19 */"] });


/***/ }),

/***/ 1001:
/*!*******************************************************************************!*\
  !*** ./src/app/components/textInputComponents/new-post/new-post.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPostComponent": () => (/* binding */ NewPostComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_post_post_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/post/post-data-service.service */ 3060);
/* harmony import */ var src_app_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/authorization.service */ 1874);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _character_count_character_count_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../character-count/character-count.component */ 7002);










class NewPostComponent {
    constructor(service, auth, router) {
        this.service = service;
        this.auth = auth;
        this.router = router;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("Title"),
            body: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("Body")
        });
        this.titleClicked = false;
        this.bodyClicked = false;
        this.withinLengthTitle = true;
        this.MAX_LENGTH_TITLE = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.TITLE_LENGTH;
        this.withinLengthContent = true;
        this.MAX_LENGTH_CONTENT = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.POST_LENGTH;
    }
    ngOnInit() {
        this.currentTitle = "Title";
        this.currentContent = "Body";
        this.form.controls.body.valueChanges
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(200))
            .subscribe((text) => this.currentContent = text);
        this.form.controls.title.valueChanges
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(200))
            .subscribe((text) => this.currentTitle = text);
    }
    post() {
        if (!this.validatePost()) {
            return;
        }
        let postRequest = {
            userID: this.auth.getUserID(),
            content: this.form.value.body,
            title: this.form.value.title
        };
        this.service.postPost(postRequest).subscribe({
            next: (post) => { this.router.navigateByUrl(`Posts/${post.postID}`); }
        });
    }
    cancelButton() {
        this.router.navigateByUrl('');
    }
    titleClick() {
        if (!this.titleClicked) {
            this.titleClicked = true;
            this.form.patchValue({ title: "" });
        }
    }
    bodyClick() {
        if (!this.bodyClicked) {
            this.bodyClicked = true;
            this.form.patchValue({ body: "" });
        }
    }
    updateLengthConstraintTitle(b) {
        this.withinLengthTitle = b;
    }
    updateLengthConstraintBody(b) {
        this.withinLengthContent = b;
    }
    validatePost() {
        if (!this.auth.testLogin()) {
            alert("Login expired. Please log back in to submit");
            return false;
        }
        if (!this.withinLengthContent) {
            alert("Content too long");
            return false;
        }
        if (!this.withinLengthTitle) {
            alert("Title too long");
            return false;
        }
        return true;
    }
}
NewPostComponent.ɵfac = function NewPostComponent_Factory(t) { return new (t || NewPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_post_post_data_service_service__WEBPACK_IMPORTED_MODULE_1__.PostDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_2__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
NewPostComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: NewPostComponent, selectors: [["app-new-post"]], decls: 10, vars: 7, consts: [[1, "form-page"], [1, "form-container", 3, "formGroup"], ["type", "text", "formControlName", "title", 3, "ngClass", "click"], [1, "character-count-container"], [3, "maxLength", "content", "withinLengthEmitter"], ["name", "inputTextBox", "formControlName", "body", 3, "ngClass", "click"], [3, "click"]], template: function NewPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NewPostComponent_Template_input_click_2_listener() { return ctx.titleClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3)(4, "app-character-count", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("withinLengthEmitter", function NewPostComponent_Template_app_character_count_withinLengthEmitter_4_listener($event) { return ctx.updateLengthConstraintTitle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NewPostComponent_Template_textarea_click_5_listener() { return ctx.bodyClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 3)(7, "app-character-count", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("withinLengthEmitter", function NewPostComponent_Template_app_character_count_withinLengthEmitter_7_listener($event) { return ctx.updateLengthConstraintBody($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NewPostComponent_Template_button_click_8_listener() { return ctx.post(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.titleClicked ? "title-input" : "title-area-unclicked");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("maxLength", ctx.MAX_LENGTH_TITLE)("content", ctx.currentTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.bodyClicked ? "body-area" : "body-area-unclicked");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("maxLength", ctx.MAX_LENGTH_CONTENT)("content", ctx.currentContent);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _character_count_character_count_component__WEBPACK_IMPORTED_MODULE_3__.CharacterCountComponent], styles: [".form-page[_ngcontent-%COMP%]{\n    display: flex;\n    background-color: var(--secondary-background);\n    justify-content: center;\n    min-height: 100vh;\n    align-items: baseline;\n}\n\n.form-container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    background-color: var(--primary-background);\n    width: 80vw;\n    margin-top: 15px;\n    border-radius: 10px;\n}\n\ninput[_ngcontent-%COMP%]{\n    margin: 7px;\n    margin-top: 10px;\n    margin-bottom: 0px;\n}\n\ntextarea[_ngcontent-%COMP%]{\n    margin: 7px;\n    margin-top: 0px;\n    min-height: 200px;\n    margin-bottom: 0px;\n}\n\nbutton[_ngcontent-%COMP%]{\n    margin-left: auto;\n    width: 40px;\n    background-color: var(--secondary-background);\n    border-radius: 5px;\n    border: none;\n    color: var(--primary-background);\n    margin-bottom: 10px;\n    margin-right: 5px;\n    margin-top: 3px;\n}\n\nbutton[_ngcontent-%COMP%]:hover{\n    background-color: var(--active);\n}\n\n.character-count-container[_ngcontent-%COMP%]{\n    margin-left: auto;\n    margin-right: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsNkNBQTZDO0lBQzdDLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQ0FBMkM7SUFDM0MsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsNkNBQTZDO0lBQzdDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckIiLCJmaWxlIjoibmV3LXBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXBhZ2V7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZCk7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuXG4uZm9ybS1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZCk7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5pbnB1dHtcbiAgICBtYXJnaW46IDdweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxudGV4dGFyZWF7XG4gICAgbWFyZ2luOiA3cHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuYnV0dG9ue1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG5idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlKTtcbn1cblxuLmNoYXJhY3Rlci1jb3VudC1jb250YWluZXJ7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 2051:
/*!*********************************************************************************!*\
  !*** ./src/app/components/textInputComponents/post-edit/post-edit.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostEditComponent": () => (/* binding */ PostEditComponent)
/* harmony export */ });
/* harmony import */ var _abstract_text_box_abstract_text_box_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-text-box/abstract-text-box.component */ 7137);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_post_post_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post/post-data-service.service */ 3060);
/* harmony import */ var src_app_services_post_data_storage_post_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/post-data-storage/post-data-storage.service */ 9223);
/* harmony import */ var src_app_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/authorization.service */ 1874);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _character_count_character_count_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../character-count/character-count.component */ 7002);









class PostEditComponent extends _abstract_text_box_abstract_text_box_component__WEBPACK_IMPORTED_MODULE_0__.AbstractTextBoxComponent {
    constructor(service, postDataStorage, auth) {
        super();
        this.service = service;
        this.postDataStorage = postDataStorage;
        this.auth = auth;
        this.withinLength = true;
        this.MAX_LENGTH = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.POST_LENGTH;
    }
    ngOnInit() {
        super.ngOnInit();
        this.currentText = this.formText.value;
        this.formText.valueChanges
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(200))
            .subscribe((text) => this.currentText = text);
    }
    updateView(text) {
        this.postData.content = text;
        this.postDataStorage.setData(this.postData);
        this.deleteDialog.emit();
    }
    updateLengthConstraint(b) {
        this.withinLength = b;
    }
    onSubmit() {
        if (!this.validateEdit()) {
            return;
        }
        let post = {
            userID: this.postData.userID,
            content: this.formText.value,
            title: this.postData.title
        };
        this.service.patchPost(post, this.postData.postID)
            .subscribe({
            next: (rec) => { this.updateView(rec); },
            error: (err) => { alert(`Something went wrong with updating the post: ${err}`); }
        });
    }
    validateEdit() {
        if (!this.withinLength) {
            alert("Post too long to post");
            return false;
        }
        let userID = this.auth.getUserID();
        if (userID == null) {
            alert("Something went wrong. Please log in again");
            return false;
        }
        return true;
    }
}
PostEditComponent.ɵfac = function PostEditComponent_Factory(t) { return new (t || PostEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_post_post_data_service_service__WEBPACK_IMPORTED_MODULE_2__.PostDataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_post_data_storage_post_data_storage_service__WEBPACK_IMPORTED_MODULE_3__.PostDataStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_4__.AuthorizationService)); };
PostEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: PostEditComponent, selectors: [["app-post-edit"]], inputs: { postData: "postData" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 14, vars: 3, consts: [["name", "inputTextBox", 1, "post-area", 3, "formControl"], [1, "buttons-and-length-container"], [1, "button-container"], ["type", "submit", 3, "click"], ["src", "assets/svg/submit.svg", "alt", "", 1, "button-graphic"], [1, "button-text"], [1, "cancel", 3, "click"], ["src", "assets/svg/cancel.svg", "alt", "", 1, "button-graphic"], [3, "maxLength", "content", "withinLengthEmitter"]], template: function PostEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form")(1, "textarea", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PostEditComponent_Template_button_click_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PostEditComponent_Template_button_click_9_listener() { return ctx.cancelButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "app-character-count", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("withinLengthEmitter", function PostEditComponent_Template_app_character_count_withinLengthEmitter_13_listener($event) { return ctx.updateLengthConstraint($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx.formText);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("maxLength", ctx.MAX_LENGTH)("content", ctx.currentText);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlDirective, _character_count_character_count_component__WEBPACK_IMPORTED_MODULE_5__.CharacterCountComponent], styles: [".post-area[_ngcontent-%COMP%]{\n    width: calc(100% - 5px);\n    min-height: 200px;\n}\n\nbutton[_ngcontent-%COMP%]{\n    border: none;\n    background-color: var(--primary-background);\n    border-radius: 10%;\n    font-size: 0.8em;\n    display: flex;\n    flex-direction: row;\n    justify-content:space-around;\n    align-items: center;\n    color: var(--light-text);\n    font-weight: 700;\n}\n\nbutton[_ngcontent-%COMP%]:hover{\n    color: var(--active);\n    background-color: transparent;\n    filter: invert(32%) sepia(73%) saturate(1580%) hue-rotate(335deg) brightness(102%) contrast(93%);\n}\n\n.button-graphic[_ngcontent-%COMP%]{\n    padding-right: 3px;\n    height: 1em;\n}\n\n.buttons-and-length-container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.button-container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    padding-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwyQ0FBMkM7SUFDM0Msa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQiw2QkFBNkI7SUFDN0IsZ0dBQWdHO0FBQ3BHOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckIiLCJmaWxlIjoicG9zdC1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1hcmVhe1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1cHgpO1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuXG5idXR0b257XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dCk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuYnV0dG9uOmhvdmVye1xuICAgIGNvbG9yOiB2YXIoLS1hY3RpdmUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZpbHRlcjogaW52ZXJ0KDMyJSkgc2VwaWEoNzMlKSBzYXR1cmF0ZSgxNTgwJSkgaHVlLXJvdGF0ZSgzMzVkZWcpIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoOTMlKTtcbn1cblxuLmJ1dHRvbi1ncmFwaGlje1xuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgICBoZWlnaHQ6IDFlbTtcbn1cblxuLmJ1dHRvbnMtYW5kLWxlbmd0aC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmJ1dHRvbi1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 1394:
/*!*********************************************************************************!*\
  !*** ./src/app/components/textInputComponents/reply-box/reply-box.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplyBoxComponent": () => (/* binding */ ReplyBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _abstract_text_box_abstract_text_box_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-text-box/abstract-text-box.component */ 7137);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var src_app_services_post_data_storage_post_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post-data-storage/post-data-storage.service */ 9223);
/* harmony import */ var src_app_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/authorization.service */ 1874);
/* harmony import */ var src_app_services_comment_comment_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/comment/comment-service.service */ 7609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _character_count_character_count_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../character-count/character-count.component */ 7002);











class ReplyBoxComponent extends _abstract_text_box_abstract_text_box_component__WEBPACK_IMPORTED_MODULE_0__.AbstractTextBoxComponent {
    constructor(service, auth, commentService) {
        super();
        this.service = service;
        this.auth = auth;
        this.commentService = commentService;
        this.newComment = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.withinLength = true;
        this.MAX_LENGTH = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.COMMENT_LENGTH;
    }
    ngOnInit() {
        super.ngOnInit();
        this.commentReply = this.commentID != null;
        this.currentText = "";
        this.formText.valueChanges
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(200))
            .subscribe((text) => this.currentText = text);
    }
    onSubmit() {
        if (!this.validateComment()) {
            return;
        }
        if (this.commentID == null) {
            this.postResponse();
        }
        else {
            this.commentResponse();
        }
    }
    postResponse() {
        let userID = this.auth.getUserID();
        let comment = {
            userID: userID,
            postID: this.postID,
            content: this.formText.value
        };
        this.service.addComment(comment)
            .subscribe({
            next: () => this.closeDialog(),
            error: (err) => { alert(`Posting Comment Failed.${err}`); }
        });
    }
    commentResponse() {
        let userID = this.auth.getUserID();
        let comment = {
            userID: userID,
            postID: this.postID,
            parentCommentID: this.commentID,
            content: this.formText.value
        };
        this.commentService.postComment(comment)
            .subscribe({
            next: (comment) => { this.outputommment(comment), this.closeDialog(); },
            error: (err) => { alert(`Posting Comment Failed.${err}`); }
        });
    }
    updateLengthConstraint(b) {
        this.withinLength = b;
    }
    outputommment(comment) {
        this.newComment.emit(comment);
    }
    closeDialog() {
        this.deleteDialog.emit();
    }
    validateComment() {
        if (!this.withinLength) {
            alert("Comment too long to post");
            return false;
        }
        let userID = this.auth.getUserID();
        if (userID == null) {
            alert("Something went wrong. Please log in again");
            return false;
        }
        if (this.formText.value == null) {
            alert("Comment must have a body");
            return false;
        }
        return true;
    }
}
ReplyBoxComponent.ɵfac = function ReplyBoxComponent_Factory(t) { return new (t || ReplyBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_post_data_storage_post_data_storage_service__WEBPACK_IMPORTED_MODULE_2__.PostDataStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_3__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_comment_comment_service_service__WEBPACK_IMPORTED_MODULE_4__.CommentService)); };
ReplyBoxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ReplyBoxComponent, selectors: [["app-reply-box"]], inputs: { commentID: "commentID", postID: "postID" }, outputs: { newComment: "newComment" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 14, vars: 4, consts: [[3, "ngClass"], ["name", "inputTextBox", 1, "comment-area", 3, "formControl"], [1, "buttons-and-length-container"], [1, "button-container"], ["type", "submit", 3, "click"], ["src", "assets/svg/submit.svg", "alt", "", 1, "button-graphic"], [1, "button-text"], [1, "cancel", 3, "click"], ["src", "assets/svg/cancel.svg", "alt", "", 1, "button-graphic"], [3, "maxLength", "content", "withinLengthEmitter"]], template: function ReplyBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "textarea", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ReplyBoxComponent_Template_button_click_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ReplyBoxComponent_Template_button_click_9_listener() { return ctx.cancelButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "app-character-count", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("withinLengthEmitter", function ReplyBoxComponent_Template_app_character_count_withinLengthEmitter_13_listener($event) { return ctx.updateLengthConstraint($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.commentReply ? "reply-container" : "post-reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.formText);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("maxLength", ctx.MAX_LENGTH)("content", ctx.currentText);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlDirective, _character_count_character_count_component__WEBPACK_IMPORTED_MODULE_5__.CharacterCountComponent], styles: [".reply-container[_ngcontent-%COMP%]{\n    margin-left: 15px;\n}\n\n.post-reply[_ngcontent-%COMP%]{\n    width: calc(100% - 2em);\n    margin-top: 1em;\n    margin-left: 1em;\n    margin-right: 1em;\n}\n\n.comment-area[_ngcontent-%COMP%]{\n    width: 100%;\n    min-height: 100px;\n}\n\n.buttons-and-length-container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\nbutton[_ngcontent-%COMP%]{\n    border: none;\n    background-color: var(--primary-background);\n    border-radius: 10%;\n    font-size: 0.8em;\n    display: flex;\n    flex-direction: row;\n    justify-content:space-around;\n    align-items: center;\n    color: var(--light-text);\n    font-weight: 700;\n}\n\nbutton[_ngcontent-%COMP%]:hover{\n    color: var(--active);\n    background-color: transparent;\n    filter: invert(32%) sepia(73%) saturate(1580%) hue-rotate(335deg) brightness(102%) contrast(93%);\n}\n\n.button-graphic[_ngcontent-%COMP%]{\n    padding-right: 3px;\n    height: 1em;\n}\n\n.button-container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    padding-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGx5LWJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDJDQUEyQztJQUMzQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDZCQUE2QjtJQUM3QixnR0FBZ0c7QUFDcEc7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckIiLCJmaWxlIjoicmVwbHktYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVwbHktY29udGFpbmVye1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4ucG9zdC1yZXBseXtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMmVtKTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuLmNvbW1lbnQtYXJlYXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbn1cblxuLmJ1dHRvbnMtYW5kLWxlbmd0aC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuYnV0dG9ue1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LXRleHQpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmJ1dHRvbjpob3ZlcntcbiAgICBjb2xvcjogdmFyKC0tYWN0aXZlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBmaWx0ZXI6IGludmVydCgzMiUpIHNlcGlhKDczJSkgc2F0dXJhdGUoMTU4MCUpIGh1ZS1yb3RhdGUoMzM1ZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDkzJSk7XG59XG5cbi5idXR0b24tZ3JhcGhpY3tcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gICAgaGVpZ2h0OiAxZW07XG59XG5cbi5idXR0b24tY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbn0iXX0= */"] });


/***/ }),

/***/ 6380:
/*!****************************************************************!*\
  !*** ./src/app/directives/comment-type-directive.directive.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentTypeDirective": () => (/* binding */ CommentTypeDirective)
/* harmony export */ });
/* harmony import */ var _enums_ContentType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/ContentType */ 1442);
/* harmony import */ var _components_commentComponents_logged_in_comment_logged_in_comment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/commentComponents/logged-in-comment/logged-in-comment.component */ 7063);
/* harmony import */ var _components_commentComponents_not_logged_in_comment_not_logged_in_comment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/commentComponents/not-logged-in-comment/not-logged-in-comment.component */ 4635);
/* harmony import */ var _components_commentComponents_user_comment_user_comment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/commentComponents/user-comment/user-comment.component */ 4549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth/authorization.service */ 1874);







class CommentTypeDirective {
    constructor(viewContainer, authService) {
        this.viewContainer = viewContainer;
        this.authService = authService;
    }
    set appCommentType(commentData) {
        switch (this.determineChildType(commentData)) {
            case (_enums_ContentType__WEBPACK_IMPORTED_MODULE_0__.ContentType.LoggedIn):
                let loggedRef = this.viewContainer.createComponent(_components_commentComponents_logged_in_comment_logged_in_comment_component__WEBPACK_IMPORTED_MODULE_1__.LoggedInCommentComponent);
                loggedRef.instance.commentData = commentData;
                break;
            case (_enums_ContentType__WEBPACK_IMPORTED_MODULE_0__.ContentType.NotLoggedIn):
                let notLoggedRef = this.viewContainer.createComponent(_components_commentComponents_not_logged_in_comment_not_logged_in_comment_component__WEBPACK_IMPORTED_MODULE_2__.NotLoggedInCommentComponent);
                notLoggedRef.instance.commentData = commentData;
                break;
            case (_enums_ContentType__WEBPACK_IMPORTED_MODULE_0__.ContentType.User):
                let userRef = this.viewContainer.createComponent(_components_commentComponents_user_comment_user_comment_component__WEBPACK_IMPORTED_MODULE_3__.UserCommentComponent);
                userRef.instance.commentData = commentData;
        }
    }
    determineChildType(comment) {
        let loggedIn = this.authService.testLogin();
        let userID = this.authService.getUserID();
        if (loggedIn && userID == comment.userID) {
            return _enums_ContentType__WEBPACK_IMPORTED_MODULE_0__.ContentType.User;
        }
        else if (loggedIn) {
            return _enums_ContentType__WEBPACK_IMPORTED_MODULE_0__.ContentType.LoggedIn;
        }
        return _enums_ContentType__WEBPACK_IMPORTED_MODULE_0__.ContentType.NotLoggedIn;
    }
}
CommentTypeDirective.ɵfac = function CommentTypeDirective_Factory(t) { return new (t || CommentTypeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_4__.AuthorizationService)); };
CommentTypeDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({ type: CommentTypeDirective, selectors: [["", "appCommentType", ""]], inputs: { appCommentType: "appCommentType" } });


/***/ }),

/***/ 2112:
/*!*******************************************************!*\
  !*** ./src/app/directives/post-selector.directive.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostSelectorDirective": () => (/* binding */ PostSelectorDirective)
/* harmony export */ });
/* harmony import */ var _enums_ContentType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/ContentType */ 1442);
/* harmony import */ var _components_postComponents_logged_in_post_logged_in_post_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/postComponents/logged-in-post/logged-in-post.component */ 631);
/* harmony import */ var _components_postComponents_not_logged_in_post_not_logged_in_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/postComponents/not-logged-in-post/not-logged-in-post.component */ 642);
/* harmony import */ var _components_postComponents_user_post_user_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/postComponents/user-post/user-post.component */ 8934);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth/authorization.service */ 1874);







class PostSelectorDirective {
    constructor(viewContainer, authService) {
        this.viewContainer = viewContainer;
        this.authService = authService;
    }
    set appPostSelector(postData) {
        this.viewContainer.clear();
        switch (this.determineChildType(postData)) {
            case (_enums_ContentType__WEBPACK_IMPORTED_MODULE_0__.ContentType.LoggedIn):
                let loggedRef = this.viewContainer.createComponent(_components_postComponents_logged_in_post_logged_in_post_component__WEBPACK_IMPORTED_MODULE_1__.LoggedInPostComponent);
                loggedRef.instance.postData = postData;
                break;
            case (_enums_ContentType__WEBPACK_IMPORTED_MODULE_0__.ContentType.NotLoggedIn):
                let notLoggedRef = this.viewContainer.createComponent(_components_postComponents_not_logged_in_post_not_logged_in_post_component__WEBPACK_IMPORTED_MODULE_2__.NotLoggedInPostComponent);
                notLoggedRef.instance.postData = postData;
                break;
            case (_enums_ContentType__WEBPACK_IMPORTED_MODULE_0__.ContentType.User):
                let userRef = this.viewContainer.createComponent(_components_postComponents_user_post_user_post_component__WEBPACK_IMPORTED_MODULE_3__.UserPostComponent);
                userRef.instance.postData = postData;
                break;
        }
    }
    determineChildType(post) {
        let loggedIn = this.authService.testLogin();
        let userID = this.authService.getUserID();
        if (loggedIn && userID == post.userID) {
            return _enums_ContentType__WEBPACK_IMPORTED_MODULE_0__.ContentType.User;
        }
        else if (loggedIn) {
            return _enums_ContentType__WEBPACK_IMPORTED_MODULE_0__.ContentType.LoggedIn;
        }
        return _enums_ContentType__WEBPACK_IMPORTED_MODULE_0__.ContentType.NotLoggedIn;
    }
}
PostSelectorDirective.ɵfac = function PostSelectorDirective_Factory(t) { return new (t || PostSelectorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_4__.AuthorizationService)); };
PostSelectorDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({ type: PostSelectorDirective, selectors: [["", "appPostSelector", ""]], inputs: { appPostSelector: "appPostSelector" } });


/***/ }),

/***/ 1442:
/*!**************************************!*\
  !*** ./src/app/enums/ContentType.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentType": () => (/* binding */ ContentType)
/* harmony export */ });
var ContentType;
(function (ContentType) {
    ContentType["User"] = "User";
    ContentType["LoggedIn"] = "LoggedIn";
    ContentType["NotLoggedIn"] = "NotLoggedIn";
})(ContentType || (ContentType = {}));


/***/ }),

/***/ 8983:
/*!************************************!*\
  !*** ./src/app/enums/Timeframe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Timeframe": () => (/* binding */ Timeframe)
/* harmony export */ });
var Timeframe;
(function (Timeframe) {
    Timeframe[Timeframe["Today"] = 1] = "Today";
    Timeframe[Timeframe["Week"] = 2] = "Week";
    Timeframe[Timeframe["Month"] = 3] = "Month";
    Timeframe[Timeframe["Year"] = 4] = "Year";
    Timeframe[Timeframe["Alltime"] = 5] = "Alltime";
})(Timeframe || (Timeframe = {}));


/***/ }),

/***/ 4520:
/*!**************************************!*\
  !*** ./src/app/enums/UpvoteScore.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpvoteScore": () => (/* binding */ UpvoteScore)
/* harmony export */ });
var UpvoteScore;
(function (UpvoteScore) {
    UpvoteScore[UpvoteScore["Upvote"] = 1] = "Upvote";
    UpvoteScore[UpvoteScore["NoVote"] = 0] = "NoVote";
    UpvoteScore[UpvoteScore["Downvote"] = -1] = "Downvote";
})(UpvoteScore || (UpvoteScore = {}));


/***/ }),

/***/ 2826:
/*!*****************************************!*\
  !*** ./src/app/services/addZeroVote.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addZeroVoteComment": () => (/* binding */ addZeroVoteComment),
/* harmony export */   "addZeroVotePost": () => (/* binding */ addZeroVotePost)
/* harmony export */ });
/* harmony import */ var _enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/UpvoteScore */ 4520);

const addZeroVoteComment = (comment) => {
    if (comment.userVote == null) {
        comment.userVote = _enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_0__.UpvoteScore.NoVote;
    }
    return comment;
};
const addZeroVotePost = (post) => {
    if (post.userVote == null) {
        post.userVote = _enums_UpvoteScore__WEBPACK_IMPORTED_MODULE_0__.UpvoteScore.NoVote;
    }
    return post;
};


/***/ }),

/***/ 1874:
/*!********************************************************!*\
  !*** ./src/app/services/auth/authorization.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizationService": () => (/* binding */ AuthorizationService)
/* harmony export */ });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ 9168);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 8947);
/* harmony import */ var _errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errorHandler */ 3551);
/* harmony import */ var _routeCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routeCreator */ 4011);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);







class AuthorizationService {
    constructor(http) {
        this.http = http;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
    }
    loginRequest(userInfo) {
        return this.http.post((0,_routeCreator__WEBPACK_IMPORTED_MODULE_2__.routeCreator)("Session"), userInfo, { responseType: 'text' })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(x => {
            if (Object(x) instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                throw x;
            }
            return x;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_1__.errorHandler));
    }
    setJWT(jwt) {
        localStorage.setItem("currentCredentials", jwt);
    }
    testLogin() {
        let token = localStorage.getItem("currentCredentials");
        let userID = localStorage.getItem("UserID");
        if (token == null || userID == null) {
            this.loggedIn.next(false);
            return false;
        }
        const expiry = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(token).exp;
        if ((Math.floor((new Date).getTime() / 1000)) >= expiry) {
            localStorage.removeItem("UserID");
            localStorage.removeItem("currentCredentials");
            this.loggedIn.next(false);
            return false;
        }
        this.loggedIn.next(true);
        return true;
    }
    getUserID() {
        let userID = localStorage.getItem("UserID");
        return userID ? parseInt(userID) : null;
    }
    getExpiration() {
        let expiration = localStorage.getItem("Expiration");
        return expiration ? parseInt(expiration) : null;
    }
    setUserID(jwt) {
        localStorage.setItem("UserID", (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(jwt).UserID);
    }
    setExpiration(jwt) {
        localStorage.setItem("Expiration", (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(jwt).exp.toString());
    }
    login(userInfo) {
        return this.loginRequest(userInfo)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((jwt) => {
            this.setJWT(jwt),
                this.setUserID(jwt),
                this.setExpiration(jwt);
            this.loggedIn.next(true),
                this.setSessionTimer();
        }));
    }
    logout() {
        localStorage.clear();
        this.loggedIn.next(false);
    }
    getToken() {
        return localStorage.getItem("currentCredentials");
    }
    getLoginSubject() {
        this.testLogin();
        return this.loggedIn;
    }
    setSessionTimer() {
        let date = new Date();
        date.setDate(this.getExpiration());
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.timer)(date).subscribe(() => this.loggedIn.next(false));
    }
}
AuthorizationService.ɵfac = function AuthorizationService_Factory(t) { return new (t || AuthorizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
AuthorizationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: AuthorizationService, factory: AuthorizationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7609:
/*!*************************************************************!*\
  !*** ./src/app/services/comment/comment-service.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentService": () => (/* binding */ CommentService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var _routeCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routeCreator */ 4011);
/* harmony import */ var _errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errorHandler */ 3551);
/* harmony import */ var _addZeroVote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addZeroVote */ 2826);
/* harmony import */ var _localTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../localTime */ 5331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);








class CommentService {
    constructor(http) {
        this.http = http;
    }
    postComment(commentRequest) {
        return this.http.post((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)("Comments"), commentRequest)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(x => {
            if (Object(x) instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                throw x;
            }
            return x;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((comment) => { return (0,_localTime__WEBPACK_IMPORTED_MODULE_3__.convertCommentTime)(comment); }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_1__.errorHandler));
    }
    getComment(commentID) {
        return this.http.get((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)(`Comments/${commentID}`))
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(x => {
            if (Object(x) instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                throw x;
            }
            return (0,_addZeroVote__WEBPACK_IMPORTED_MODULE_2__.addZeroVoteComment)(x);
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((comment) => { return (0,_localTime__WEBPACK_IMPORTED_MODULE_3__.convertCommentTime)(comment); }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_1__.errorHandler));
    }
    deleteComment(commentID) {
        return this.http.delete((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)(`Comments/${commentID}`))
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(x => {
            if (Object(x) instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                throw x;
            }
            return x;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_1__.errorHandler));
    }
    getChildren(commentID) {
        return this.http.get((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)(`Comments/${commentID}/Children`))
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(x => {
            if (Object(x) instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                throw x;
            }
            return x.map(c => (0,_addZeroVote__WEBPACK_IMPORTED_MODULE_2__.addZeroVoteComment)(c));
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((x) => { return x.map((comment) => (0,_localTime__WEBPACK_IMPORTED_MODULE_3__.convertCommentTime)(comment)); }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_1__.errorHandler));
    }
    patchComment(comment, id) {
        return this.http.patch((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)(`Comments/${id}`), comment, { responseType: "text" })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(x => {
            if (Object(x) instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                throw x;
            }
            return x;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_1__.errorHandler));
    }
    postCommentVote(vote) {
        return this.http.post((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)(`Comments/${vote.commentID}/Votes`), vote)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(x => {
            if (Object(x) instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                throw x;
            }
            return x;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_1__.errorHandler));
    }
    patchCommentVote(vote) {
        return this.http.patch((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)(`Comments/${vote.commentID}/Votes`), vote)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(x => {
            if (Object(x) instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                throw x;
            }
            return x;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_1__.errorHandler));
    }
    deleteCommentVote(vote) {
        return this.http.delete((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)(`Comments/${vote.commentID}/Votes`), { body: vote })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(x => {
            if (Object(x) instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                throw x;
            }
            return x;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_1__.errorHandler));
    }
}
CommentService.ɵfac = function CommentService_Factory(t) { return new (t || CommentService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
CommentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: CommentService, factory: CommentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8156:
/*!********************************************************************!*\
  !*** ./src/app/services/deletedComment/deleted-comment.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeletedCommentService": () => (/* binding */ DeletedCommentService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class DeletedCommentService {
    constructor() {
        this.commentID = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
    }
    updateID(id) {
        this.commentID.next(id);
        this.commentID.next(0);
    }
    getDeletedID() {
        return this.commentID;
    }
}
DeletedCommentService.ɵfac = function DeletedCommentService_Factory(t) { return new (t || DeletedCommentService)(); };
DeletedCommentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DeletedCommentService, factory: DeletedCommentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3551:
/*!******************************************!*\
  !*** ./src/app/services/errorHandler.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "errorHandler": () => (/* binding */ errorHandler)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5474);

const errorHandler = (error) => {
    if (error.status === 0) {
        console.error("Client Error:", error.message);
    }
    else {
        console.error("Backend Error", error.message);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(() => new Error(`Something went wrong: ${error.message}`));
};


/***/ }),

/***/ 8600:
/*!***********************************************************************!*\
  !*** ./src/app/services/headerInteceptor/header-intercept.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderInterceptService": () => (/* binding */ HeaderInterceptService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_authorization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/authorization.service */ 1874);



class HeaderInterceptService {
    constructor(authorization) {
        this.authorization = authorization;
    }
    intercept(req, next) {
        let jwt = this.authorization.getToken();
        if (jwt && this.authorization.testLogin() == false) {
            alert("Login credentials expired. Please log in again");
        }
        else if (jwt) {
            console.log(next.handle(req.clone({ headers: req.headers.set("Authorization", jwt) })));
            return next.handle(req.clone({ headers: req.headers.set("Authorization", jwt) }));
        }
        console.log(req);
        return next.handle(req);
    }
}
HeaderInterceptService.ɵfac = function HeaderInterceptService_Factory(t) { return new (t || HeaderInterceptService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_authorization_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizationService)); };
HeaderInterceptService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HeaderInterceptService, factory: HeaderInterceptService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 775:
/*!*******************************************************!*\
  !*** ./src/app/services/homepage/homepage.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepageService": () => (/* binding */ HomepageService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var _routeCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routeCreator */ 4011);
/* harmony import */ var _addZeroVote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addZeroVote */ 2826);
/* harmony import */ var _errorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errorHandler */ 3551);
/* harmony import */ var _localTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../localTime */ 5331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);








class HomepageService {
    constructor(http) {
        this.http = http;
    }
    getTopAllTime(page) {
        return this.http.get((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)(`Homepage/AllTime/${page}`))
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(x => {
            if (x instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                throw x;
            }
            return x.map(post => (0,_addZeroVote__WEBPACK_IMPORTED_MODULE_1__.addZeroVotePost)(post));
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((x) => { return x.map((post) => (0,_localTime__WEBPACK_IMPORTED_MODULE_3__.convertPostTime)(post)); }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_2__.errorHandler));
    }
    getTopYear(page) {
        return this.http.get((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)(`Homepage/Year/${page}`))
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(x => {
            if (x instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                throw x;
            }
            return x.map(post => (0,_addZeroVote__WEBPACK_IMPORTED_MODULE_1__.addZeroVotePost)(post));
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((x) => { return x.map((post) => (0,_localTime__WEBPACK_IMPORTED_MODULE_3__.convertPostTime)(post)); }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_2__.errorHandler));
    }
    getTopMonth(page) {
        return this.http.get((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)(`Homepage/Month/${page}`))
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(x => {
            if (x instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                throw x;
            }
            return x.map(post => (0,_addZeroVote__WEBPACK_IMPORTED_MODULE_1__.addZeroVotePost)(post));
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((x) => { return x.map((post) => (0,_localTime__WEBPACK_IMPORTED_MODULE_3__.convertPostTime)(post)); }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_2__.errorHandler));
    }
    getTopWeek(page) {
        return this.http.get((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)(`Homepage/Week/${page}`))
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(x => {
            if (x instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                throw x;
            }
            return x.map(post => (0,_addZeroVote__WEBPACK_IMPORTED_MODULE_1__.addZeroVotePost)(post));
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((x) => { return x.map((post) => (0,_localTime__WEBPACK_IMPORTED_MODULE_3__.convertPostTime)(post)); }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_2__.errorHandler));
    }
    getTopToday(page) {
        return this.http.get((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)(`Homepage/Today/${page}`))
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(x => {
            if (x instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                throw x;
            }
            return x.map(post => (0,_addZeroVote__WEBPACK_IMPORTED_MODULE_1__.addZeroVotePost)(post));
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((x) => { return x.map((post) => (0,_localTime__WEBPACK_IMPORTED_MODULE_3__.convertPostTime)(post)); }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_2__.errorHandler));
    }
}
HomepageService.ɵfac = function HomepageService_Factory(t) { return new (t || HomepageService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
HomepageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: HomepageService, factory: HomepageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5331:
/*!***************************************!*\
  !*** ./src/app/services/localTime.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertCommentTime": () => (/* binding */ convertCommentTime),
/* harmony export */   "convertPostTime": () => (/* binding */ convertPostTime)
/* harmony export */ });
const convertCommentTime = (comment) => {
    let time = new Date(comment.timeString + " UTC");
    comment.timeString = time.toLocaleString();
    return comment;
};
const convertPostTime = (post) => {
    let time = new Date(post.timeString + " UTC");
    post.timeString = time.toLocaleString();
    return post;
};


/***/ }),

/***/ 9223:
/*!*************************************************************************!*\
  !*** ./src/app/services/post-data-storage/post-data-storage.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostDataStorageService": () => (/* binding */ PostDataStorageService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _post_post_data_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../post/post-data-service.service */ 3060);
/* harmony import */ var _comment_comment_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comment/comment-service.service */ 7609);




class PostDataStorageService {
    constructor(postDataService, commentDataService) {
        this.postDataService = postDataService;
        this.commentDataService = commentDataService;
        this.comments = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.commentsLoaded = false;
    }
    setData(data) {
        this.data = data;
    }
    setID(data) {
        this.id = data.postID;
    }
    setComments(comments) {
        this.comments.next(comments);
    }
    getData(postID) {
        if (!this.data) {
            return this.postDataService.getPost(postID).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((data) => { this.setData(data); this.setID(data); return data; }));
        }
        else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.data);
        }
    }
    getComments(postID) {
        if (!this.commentsLoaded) {
            this.postDataService.getComments(postID).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((comments) => { this.setComments(comments); this.commentsLoaded = true; })).subscribe();
        }
        return this.comments;
    }
    addComment(comment) {
        return this.commentDataService.postComment(comment)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((c) => {
            this.setComments([...this.comments.getValue(), c]);
            return c;
        }));
    }
    clearData() {
        this.data = null;
        this.comments.next([]);
        this.commentsLoaded = false;
    }
    getID() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.id);
    }
}
PostDataStorageService.ɵfac = function PostDataStorageService_Factory(t) { return new (t || PostDataStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_post_post_data_service_service__WEBPACK_IMPORTED_MODULE_0__.PostDataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_comment_comment_service_service__WEBPACK_IMPORTED_MODULE_1__.CommentService)); };
PostDataStorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: PostDataStorageService, factory: PostDataStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3060:
/*!************************************************************!*\
  !*** ./src/app/services/post/post-data-service.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostDataService": () => (/* binding */ PostDataService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _routeCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routeCreator */ 4011);
/* harmony import */ var _errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errorHandler */ 3551);
/* harmony import */ var _addZeroVote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addZeroVote */ 2826);
/* harmony import */ var _localTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../localTime */ 5331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);









class PostDataService {
    constructor(http) {
        this.http = http;
    }
    postPost(postRequest) {
        return this.http.post((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)("Posts"), postRequest)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(x => {
            if (x instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                throw x;
            }
            return x;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((x) => { return (0,_localTime__WEBPACK_IMPORTED_MODULE_3__.convertPostTime)(x); }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_1__.errorHandler));
    }
    getPost(id) {
        return this.http.get((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)(`Posts/${id}`))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(x => {
            if (x instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                throw x;
            }
            return (0,_addZeroVote__WEBPACK_IMPORTED_MODULE_2__.addZeroVotePost)(x);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((x) => { return (0,_localTime__WEBPACK_IMPORTED_MODULE_3__.convertPostTime)(x); }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_1__.errorHandler));
    }
    patchPost(postRequest, postID) {
        return this.http.patch((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)(`Posts/${postID}`), postRequest, { responseType: "text" })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(x => {
            if (typeof x !== "string") {
                throw x;
            }
            return x;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_1__.errorHandler));
    }
    deletePost(id) {
        return this.http.delete((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)(`Posts/${id}`))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(x => {
            if (x instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                throw x;
            }
            return x;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_1__.errorHandler));
    }
    getComments(id) {
        return this.http.get((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)(`Posts/${id}/Comments`))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(x => {
            if (x instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                throw x;
            }
            return x.map(c => (0,_addZeroVote__WEBPACK_IMPORTED_MODULE_2__.addZeroVoteComment)(c));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((x) => { return x.map((comment) => (0,_localTime__WEBPACK_IMPORTED_MODULE_3__.convertCommentTime)(comment)); }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_1__.errorHandler));
    }
    postVote(voteRequest) {
        return this.http.post((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)(`Posts/${voteRequest.postID}/Votes`), voteRequest)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(x => {
            if (x instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                throw x;
            }
            return x;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_1__.errorHandler));
    }
    patchVote(voteRequest) {
        return this.http.patch((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)(`Posts/${voteRequest.postID}/Votes`), voteRequest)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(x => {
            if (x instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                throw x;
            }
            return x;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_1__.errorHandler));
    }
    deleteVote(voteRequest) {
        return this.http.delete((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)(`Posts/${voteRequest.postID}/Votes`), { body: voteRequest })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(x => {
            if (x instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                throw x;
            }
            return x;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_1__.errorHandler));
    }
    getSuggested(query) {
        if (!query || query.trim() === "") {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
        }
        return this.http.get((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)(`Posts/Suggested?query=${query.trim()}`))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(x => {
            if (x instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                throw x;
            }
            return x;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_1__.errorHandler));
    }
    search(query, page) {
        if (!query || query.trim() === "") {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
        }
        return this.http.get((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)(`Posts?query=${query.trim()}&pageNumber=${page}`))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(x => {
            if (x instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                throw x;
            }
            return x;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_1__.errorHandler));
    }
}
PostDataService.ɵfac = function PostDataService_Factory(t) { return new (t || PostDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
PostDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: PostDataService, factory: PostDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5049:
/*!***************************************************************!*\
  !*** ./src/app/services/previous-url/previous-url.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviousUrlService": () => (/* binding */ PreviousUrlService)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class PreviousUrlService {
    constructor(router) {
        this.router = router;
        this.history = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([""]);
        this.previous = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject("");
    }
    begin() {
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(eve => eve instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd))
            .subscribe((eve) => {
            let endEvent = eve;
            let previousURL = "";
            if (endEvent.urlAfterRedirects) {
                previousURL = endEvent.urlAfterRedirects;
            }
            let history = this.history.value;
            this.previous.next(history[history.length - 1]);
            this.history.next([...history, previousURL]);
        });
    }
    getHistory() {
        return this.history;
    }
    getPrevious() {
        return this.previous;
    }
}
PreviousUrlService.ɵfac = function PreviousUrlService_Factory(t) { return new (t || PreviousUrlService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
PreviousUrlService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PreviousUrlService, factory: PreviousUrlService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4011:
/*!******************************************!*\
  !*** ./src/app/services/routeCreator.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "frontendRoute": () => (/* binding */ frontendRoute),
/* harmony export */   "routeCreator": () => (/* binding */ routeCreator)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);

const routeCreator = (endOfURL) => {
    return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}${endOfURL}`;
};
const frontendRoute = (endOfURL) => {
    return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.FRONTEND_URL}${endOfURL}`;
};


/***/ }),

/***/ 798:
/*!*******************************************************!*\
  !*** ./src/app/services/user/user-service.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var _routeCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routeCreator */ 4011);
/* harmony import */ var _errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errorHandler */ 3551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);






class UserService {
    constructor(http) {
        this.http = http;
    }
    createUser(userRequest) {
        return this.http.post((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)('Users'), userRequest)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(x => {
            if (x instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpErrorResponse) {
                throw x;
            }
            return x;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_1__.errorHandler));
    }
    ;
    deleteUser(userID) {
        return this.http.delete((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)(`Users/${userID}`))
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(x => {
            if (x instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpErrorResponse) {
                throw x;
            }
            return x;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_1__.errorHandler));
    }
    ;
    getUser(userID) {
        return this.http.get((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)(`Users/${userID}`))
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(x => {
            if (x instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpErrorResponse) {
                throw x;
            }
            return x;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_1__.errorHandler));
    }
    ;
    checkUsernameUniqueness(username) {
        return this.http.get((0,_routeCreator__WEBPACK_IMPORTED_MODULE_0__.routeCreator)(`Users/unique?username=${username}`))
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(x => {
            if (typeof x !== "boolean") {
                throw x;
            }
            return x;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(_errorHandler__WEBPACK_IMPORTED_MODULE_1__.errorHandler));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    API_URL: "https://3b8n5a4xr7.execute-api.us-east-2.amazonaws.com/api/",
    FRONTEND_URL: "http://localhost:4200/",
    COMMENT_LENGTH: 1500,
    POST_LENGTH: 5000,
    TITLE_LENGTH: 200
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng_jhipster_1 = require("ng-jhipster");
var article_popup_service_1 = require("./article-popup.service");
var article_service_1 = require("./article.service");
var user_service_1 = require("../../shared/user/user.service");
var shared_1 = require("../../shared");
var ArticleDialogComponent = (function () {
    function ArticleDialogComponent(activeModal, jhiLanguageService, dataUtils, userService, principal, loginModalService, alertService, articleService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.dataUtils = dataUtils;
        this.userService = userService;
        this.principal = principal;
        this.loginModalService = loginModalService;
        this.alertService = alertService;
        this.articleService = articleService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['article']);
    }
    ArticleDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.account = account;
        });
        this.registerAuthenticationSuccess();
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    ArticleDialogComponent.prototype.loadAllusers = function () {
        var _this = this;
        this.userService.query().subscribe(function (res) {
            _this.accounts = res.json();
        }, function (res) { return _this.onError(res.json()); });
    };
    ArticleDialogComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    ArticleDialogComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    ArticleDialogComponent.prototype.setFileData = function ($event, article, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            var $file_1 = $event.target.files[0];
            if (isImage && !/^image\//.test($file_1.type)) {
                return;
            }
            this.dataUtils.toBase64($file_1, function (base64Data) {
                article[field] = base64Data;
                article[field + "ContentType"] = $file_1.type;
            });
        }
    };
    ArticleDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    ArticleDialogComponent.prototype.registerAuthenticationSuccess = function () {
        var _this = this;
        this.eventManager.subscribe('authenticationSuccess', function (message) {
            _this.principal.identity().then(function (account) {
                _this.account = account;
            });
        });
    };
    ArticleDialogComponent.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    ArticleDialogComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    ArticleDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.article.id !== undefined) {
            this.articleService.update(this.article)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.article.utilisateur = this.account.firstName;
            this.article.vote = 0;
            this.article.ispushed = false;
            this.articleService.create(this.article)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    ArticleDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'articleListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    ArticleDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    ArticleDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return ArticleDialogComponent;
}());
ArticleDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-article-dialog',
        templateUrl: './article-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.DataUtils,
        user_service_1.UserService,
        shared_1.Principal,
        shared_1.LoginModalService,
        ng_jhipster_1.AlertService,
        article_service_1.ArticleService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], ArticleDialogComponent);
exports.ArticleDialogComponent = ArticleDialogComponent;
var ArticlePopupComponent = (function () {
    function ArticlePopupComponent(route, articlePopupService) {
        this.route = route;
        this.articlePopupService = articlePopupService;
    }
    ArticlePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.articlePopupService
                    .open(ArticleDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.articlePopupService
                    .open(ArticleDialogComponent);
            }
        });
    };
    ArticlePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return ArticlePopupComponent;
}());
ArticlePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-article-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        article_popup_service_1.ArticlePopupService])
], ArticlePopupComponent);
exports.ArticlePopupComponent = ArticlePopupComponent;
//# sourceMappingURL=article-dialog.component.js.map
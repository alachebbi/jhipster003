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
var ArticleDeleteDialogComponent = (function () {
    function ArticleDeleteDialogComponent(jhiLanguageService, articleService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.articleService = articleService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['article']);
    }
    ArticleDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    ArticleDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.articleService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'articleListModification',
                content: 'Deleted an article'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return ArticleDeleteDialogComponent;
}());
ArticleDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-article-delete-dialog',
        templateUrl: './article-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        article_service_1.ArticleService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], ArticleDeleteDialogComponent);
exports.ArticleDeleteDialogComponent = ArticleDeleteDialogComponent;
var ArticleDeletePopupComponent = (function () {
    function ArticleDeletePopupComponent(route, articlePopupService) {
        this.route = route;
        this.articlePopupService = articlePopupService;
    }
    ArticleDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.articlePopupService
                .open(ArticleDeleteDialogComponent, params['id']);
        });
    };
    ArticleDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return ArticleDeletePopupComponent;
}());
ArticleDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-article-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        article_popup_service_1.ArticlePopupService])
], ArticleDeletePopupComponent);
exports.ArticleDeletePopupComponent = ArticleDeletePopupComponent;
//# sourceMappingURL=article-delete-dialog.component.js.map
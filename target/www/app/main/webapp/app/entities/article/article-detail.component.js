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
var ng_jhipster_1 = require("ng-jhipster");
var article_service_1 = require("./article.service");
var ArticleDetailComponent = (function () {
    function ArticleDetailComponent(jhiLanguageService, dataUtils, articleService, route) {
        this.jhiLanguageService = jhiLanguageService;
        this.dataUtils = dataUtils;
        this.articleService = articleService;
        this.route = route;
        this.jhiLanguageService.setLocations(['article']);
    }
    ArticleDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['id']);
        });
    };
    ArticleDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.articleService.find(id).subscribe(function (article) {
            _this.article = article;
        });
    };
    ArticleDetailComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    ArticleDetailComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    ArticleDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    ArticleDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return ArticleDetailComponent;
}());
ArticleDetailComponent = __decorate([
    core_1.Component({
        selector: 'jhi-article-detail',
        templateUrl: './article-detail.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.DataUtils,
        article_service_1.ArticleService,
        router_1.ActivatedRoute])
], ArticleDetailComponent);
exports.ArticleDetailComponent = ArticleDetailComponent;
//# sourceMappingURL=article-detail.component.js.map
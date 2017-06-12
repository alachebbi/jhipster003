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
var ng_jhipster_1 = require("ng-jhipster");
var article_component_1 = require("./article.component");
var article_detail_component_1 = require("./article-detail.component");
var article_dialog_component_1 = require("./article-dialog.component");
var article_delete_dialog_component_1 = require("./article-delete-dialog.component");
var ArticleResolvePagingParams = (function () {
    function ArticleResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    ArticleResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return ArticleResolvePagingParams;
}());
ArticleResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], ArticleResolvePagingParams);
exports.ArticleResolvePagingParams = ArticleResolvePagingParams;
exports.articleRoute = [
    {
        path: 'article',
        component: article_component_1.ArticleComponent,
        resolve: {
            'pagingParams': ArticleResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.article.home.title'
        }
    }, {
        path: 'article/:id',
        component: article_detail_component_1.ArticleDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.article.home.title'
        }
    }
];
exports.articlePopupRoute = [
    {
        path: 'article-new',
        component: article_dialog_component_1.ArticlePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.article.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'article/:id/edit',
        component: article_dialog_component_1.ArticlePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.article.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'article/:id/delete',
        component: article_delete_dialog_component_1.ArticleDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.article.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=article.route.js.map
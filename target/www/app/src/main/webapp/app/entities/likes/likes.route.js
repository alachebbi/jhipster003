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
var likes_component_1 = require("./likes.component");
var likes_detail_component_1 = require("./likes-detail.component");
var likes_dialog_component_1 = require("./likes-dialog.component");
var likes_delete_dialog_component_1 = require("./likes-delete-dialog.component");
var LikesResolvePagingParams = (function () {
    function LikesResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    LikesResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return LikesResolvePagingParams;
}());
LikesResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], LikesResolvePagingParams);
exports.LikesResolvePagingParams = LikesResolvePagingParams;
exports.likesRoute = [
    {
        path: 'likes',
        component: likes_component_1.LikesComponent,
        resolve: {
            'pagingParams': LikesResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.likes.home.title'
        }
    }, {
        path: 'likes/:id',
        component: likes_detail_component_1.LikesDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.likes.home.title'
        }
    }
];
exports.likesPopupRoute = [
    {
        path: 'likes-new',
        component: likes_dialog_component_1.LikesPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.likes.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'likes/:id/edit',
        component: likes_dialog_component_1.LikesPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.likes.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'likes/:id/delete',
        component: likes_delete_dialog_component_1.LikesDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.likes.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=likes.route.js.map
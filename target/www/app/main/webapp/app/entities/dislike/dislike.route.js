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
var dislike_component_1 = require("./dislike.component");
var dislike_detail_component_1 = require("./dislike-detail.component");
var dislike_dialog_component_1 = require("./dislike-dialog.component");
var dislike_delete_dialog_component_1 = require("./dislike-delete-dialog.component");
var DislikeResolvePagingParams = (function () {
    function DislikeResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    DislikeResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return DislikeResolvePagingParams;
}());
DislikeResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], DislikeResolvePagingParams);
exports.DislikeResolvePagingParams = DislikeResolvePagingParams;
exports.dislikeRoute = [
    {
        path: 'dislike',
        component: dislike_component_1.DislikeComponent,
        resolve: {
            'pagingParams': DislikeResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.dislike.home.title'
        }
    }, {
        path: 'dislike/:id',
        component: dislike_detail_component_1.DislikeDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.dislike.home.title'
        }
    }
];
exports.dislikePopupRoute = [
    {
        path: 'dislike-new',
        component: dislike_dialog_component_1.DislikePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.dislike.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'dislike/:id/edit',
        component: dislike_dialog_component_1.DislikePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.dislike.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'dislike/:id/delete',
        component: dislike_delete_dialog_component_1.DislikeDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.dislike.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=dislike.route.js.map
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
var forsys_component_1 = require("./forsys.component");
var forsys_detail_component_1 = require("./forsys-detail.component");
var forsys_dialog_component_1 = require("./forsys-dialog.component");
var forsys_delete_dialog_component_1 = require("./forsys-delete-dialog.component");
var ForsysResolvePagingParams = (function () {
    function ForsysResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    ForsysResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return ForsysResolvePagingParams;
}());
ForsysResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], ForsysResolvePagingParams);
exports.ForsysResolvePagingParams = ForsysResolvePagingParams;
exports.forsysRoute = [
    {
        path: 'forsys',
        component: forsys_component_1.ForsysComponent,
        resolve: {
            'pagingParams': ForsysResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.forsys.home.title'
        }
    }, {
        path: 'forsys/:id',
        component: forsys_detail_component_1.ForsysDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.forsys.home.title'
        }
    }
];
exports.forsysPopupRoute = [
    {
        path: 'forsys-new',
        component: forsys_dialog_component_1.ForsysPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.forsys.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'forsys/:id/edit',
        component: forsys_dialog_component_1.ForsysPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.forsys.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'forsys/:id/delete',
        component: forsys_delete_dialog_component_1.ForsysDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.forsys.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=forsys.route.js.map
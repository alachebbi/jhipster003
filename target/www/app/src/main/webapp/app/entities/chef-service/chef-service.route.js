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
var chef_service_component_1 = require("./chef-service.component");
var chef_service_detail_component_1 = require("./chef-service-detail.component");
var chef_service_dialog_component_1 = require("./chef-service-dialog.component");
var chef_service_delete_dialog_component_1 = require("./chef-service-delete-dialog.component");
var ChefServiceResolvePagingParams = (function () {
    function ChefServiceResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    ChefServiceResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return ChefServiceResolvePagingParams;
}());
ChefServiceResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], ChefServiceResolvePagingParams);
exports.ChefServiceResolvePagingParams = ChefServiceResolvePagingParams;
exports.chefServiceRoute = [
    {
        path: 'chef-service',
        component: chef_service_component_1.ChefServiceComponent,
        resolve: {
            'pagingParams': ChefServiceResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.chefService.home.title'
        }
    }, {
        path: 'chef-service/:id',
        component: chef_service_detail_component_1.ChefServiceDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.chefService.home.title'
        }
    }
];
exports.chefServicePopupRoute = [
    {
        path: 'chef-service-new',
        component: chef_service_dialog_component_1.ChefServicePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.chefService.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'chef-service/:id/edit',
        component: chef_service_dialog_component_1.ChefServicePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.chefService.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'chef-service/:id/delete',
        component: chef_service_delete_dialog_component_1.ChefServiceDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.chefService.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=chef-service.route.js.map
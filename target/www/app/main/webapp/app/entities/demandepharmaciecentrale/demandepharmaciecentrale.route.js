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
var demandepharmaciecentrale_component_1 = require("./demandepharmaciecentrale.component");
var demandepharmaciecentrale_detail_component_1 = require("./demandepharmaciecentrale-detail.component");
var demandepharmaciecentrale_dialog_component_1 = require("./demandepharmaciecentrale-dialog.component");
var demandepharmaciecentrale_delete_dialog_component_1 = require("./demandepharmaciecentrale-delete-dialog.component");
var DemandepharmaciecentraleResolvePagingParams = (function () {
    function DemandepharmaciecentraleResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    DemandepharmaciecentraleResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return DemandepharmaciecentraleResolvePagingParams;
}());
DemandepharmaciecentraleResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], DemandepharmaciecentraleResolvePagingParams);
exports.DemandepharmaciecentraleResolvePagingParams = DemandepharmaciecentraleResolvePagingParams;
exports.demandepharmaciecentraleRoute = [
    {
        path: 'demandepharmaciecentrale',
        component: demandepharmaciecentrale_component_1.DemandepharmaciecentraleComponent,
        resolve: {
            'pagingParams': DemandepharmaciecentraleResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandepharmaciecentrale.home.title'
        }
    }, {
        path: 'demandepharmaciecentrale/:id',
        component: demandepharmaciecentrale_detail_component_1.DemandepharmaciecentraleDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandepharmaciecentrale.home.title'
        }
    }
];
exports.demandepharmaciecentralePopupRoute = [
    {
        path: 'demandepharmaciecentrale-new',
        component: demandepharmaciecentrale_dialog_component_1.DemandepharmaciecentralePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandepharmaciecentrale.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'demandepharmaciecentrale/:id/edit',
        component: demandepharmaciecentrale_dialog_component_1.DemandepharmaciecentralePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandepharmaciecentrale.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'demandepharmaciecentrale/:id/delete',
        component: demandepharmaciecentrale_delete_dialog_component_1.DemandepharmaciecentraleDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandepharmaciecentrale.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=demandepharmaciecentrale.route.js.map
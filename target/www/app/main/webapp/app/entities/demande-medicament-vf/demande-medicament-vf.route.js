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
var demande_medicament_vf_component_1 = require("./demande-medicament-vf.component");
var demande_medicament_vf_detail_component_1 = require("./demande-medicament-vf-detail.component");
var demande_medicament_vf_dialog_component_1 = require("./demande-medicament-vf-dialog.component");
var demande_medicament_vf_delete_dialog_component_1 = require("./demande-medicament-vf-delete-dialog.component");
var DemandeMedicamentVfResolvePagingParams = (function () {
    function DemandeMedicamentVfResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    DemandeMedicamentVfResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return DemandeMedicamentVfResolvePagingParams;
}());
DemandeMedicamentVfResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], DemandeMedicamentVfResolvePagingParams);
exports.DemandeMedicamentVfResolvePagingParams = DemandeMedicamentVfResolvePagingParams;
exports.demandeMedicamentVfRoute = [
    {
        path: 'demande-medicament-vf',
        component: demande_medicament_vf_component_1.DemandeMedicamentVfComponent,
        resolve: {
            'pagingParams': DemandeMedicamentVfResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandeMedicamentVf.home.title'
        }
    }, {
        path: 'demande-medicament-vf/:id',
        component: demande_medicament_vf_detail_component_1.DemandeMedicamentVfDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandeMedicamentVf.home.title'
        }
    }
];
exports.demandeMedicamentVfPopupRoute = [
    {
        path: 'demande-medicament-vf-new',
        component: demande_medicament_vf_dialog_component_1.DemandeMedicamentVfPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandeMedicamentVf.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'demande-medicament-vf/:id/edit',
        component: demande_medicament_vf_dialog_component_1.DemandeMedicamentVfPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandeMedicamentVf.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'demande-medicament-vf/:id/delete',
        component: demande_medicament_vf_delete_dialog_component_1.DemandeMedicamentVfDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandeMedicamentVf.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=demande-medicament-vf.route.js.map
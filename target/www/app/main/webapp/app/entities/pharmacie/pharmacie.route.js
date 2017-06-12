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
var pharmacie_component_1 = require("./pharmacie.component");
var pharmacie_detail_component_1 = require("./pharmacie-detail.component");
var pharmacie_dialog_component_1 = require("./pharmacie-dialog.component");
var pharmacie_delete_dialog_component_1 = require("./pharmacie-delete-dialog.component");
var PharmacieResolvePagingParams = (function () {
    function PharmacieResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    PharmacieResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return PharmacieResolvePagingParams;
}());
PharmacieResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], PharmacieResolvePagingParams);
exports.PharmacieResolvePagingParams = PharmacieResolvePagingParams;
exports.pharmacieRoute = [
    {
        path: 'pharmacie',
        component: pharmacie_component_1.PharmacieComponent,
        resolve: {
            'pagingParams': PharmacieResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.pharmacie.home.title'
        }
    }, {
        path: 'pharmacie/:id',
        component: pharmacie_detail_component_1.PharmacieDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.pharmacie.home.title'
        }
    }
];
exports.pharmaciePopupRoute = [
    {
        path: 'pharmacie-new',
        component: pharmacie_dialog_component_1.PharmaciePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.pharmacie.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'pharmacie/:id/edit',
        component: pharmacie_dialog_component_1.PharmaciePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.pharmacie.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'pharmacie/:id/delete',
        component: pharmacie_delete_dialog_component_1.PharmacieDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.pharmacie.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=pharmacie.route.js.map
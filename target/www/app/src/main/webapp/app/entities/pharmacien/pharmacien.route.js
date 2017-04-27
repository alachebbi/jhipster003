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
var pharmacien_component_1 = require("./pharmacien.component");
var pharmacien_detail_component_1 = require("./pharmacien-detail.component");
var pharmacien_dialog_component_1 = require("./pharmacien-dialog.component");
var pharmacien_delete_dialog_component_1 = require("./pharmacien-delete-dialog.component");
var PharmacienResolvePagingParams = (function () {
    function PharmacienResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    PharmacienResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return PharmacienResolvePagingParams;
}());
PharmacienResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], PharmacienResolvePagingParams);
exports.PharmacienResolvePagingParams = PharmacienResolvePagingParams;
exports.pharmacienRoute = [
    {
        path: 'pharmacien',
        component: pharmacien_component_1.PharmacienComponent,
        resolve: {
            'pagingParams': PharmacienResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.pharmacien.home.title'
        }
    }, {
        path: 'pharmacien/:id',
        component: pharmacien_detail_component_1.PharmacienDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.pharmacien.home.title'
        }
    }
];
exports.pharmacienPopupRoute = [
    {
        path: 'pharmacien-new',
        component: pharmacien_dialog_component_1.PharmacienPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.pharmacien.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'pharmacien/:id/edit',
        component: pharmacien_dialog_component_1.PharmacienPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.pharmacien.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'pharmacien/:id/delete',
        component: pharmacien_delete_dialog_component_1.PharmacienDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.pharmacien.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=pharmacien.route.js.map
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
var medecin_component_1 = require("./medecin.component");
var medecin_detail_component_1 = require("./medecin-detail.component");
var medecin_dialog_component_1 = require("./medecin-dialog.component");
var medecin_delete_dialog_component_1 = require("./medecin-delete-dialog.component");
var MedecinResolvePagingParams = (function () {
    function MedecinResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    MedecinResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return MedecinResolvePagingParams;
}());
MedecinResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], MedecinResolvePagingParams);
exports.MedecinResolvePagingParams = MedecinResolvePagingParams;
exports.medecinRoute = [
    {
        path: 'medecin',
        component: medecin_component_1.MedecinComponent,
        resolve: {
            'pagingParams': MedecinResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.medecin.home.title'
        }
    }, {
        path: 'medecin/:id',
        component: medecin_detail_component_1.MedecinDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.medecin.home.title'
        }
    }
];
exports.medecinPopupRoute = [
    {
        path: 'medecin-new',
        component: medecin_dialog_component_1.MedecinPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.medecin.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'medecin/:id/edit',
        component: medecin_dialog_component_1.MedecinPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.medecin.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'medecin/:id/delete',
        component: medecin_delete_dialog_component_1.MedecinDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.medecin.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=medecin.route.js.map
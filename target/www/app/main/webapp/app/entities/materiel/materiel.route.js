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
var materiel_component_1 = require("./materiel.component");
var materiel_detail_component_1 = require("./materiel-detail.component");
var materiel_dialog_component_1 = require("./materiel-dialog.component");
var materiel_delete_dialog_component_1 = require("./materiel-delete-dialog.component");
var MaterielResolvePagingParams = (function () {
    function MaterielResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    MaterielResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return MaterielResolvePagingParams;
}());
MaterielResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], MaterielResolvePagingParams);
exports.MaterielResolvePagingParams = MaterielResolvePagingParams;
exports.materielRoute = [
    {
        path: 'materiel',
        component: materiel_component_1.MaterielComponent,
        resolve: {
            'pagingParams': MaterielResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.materiel.home.title'
        }
    }, {
        path: 'materiel/:id',
        component: materiel_detail_component_1.MaterielDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.materiel.home.title'
        }
    }
];
exports.materielPopupRoute = [
    {
        path: 'materiel-new',
        component: materiel_dialog_component_1.MaterielPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.materiel.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'materiel/:id/edit',
        component: materiel_dialog_component_1.MaterielPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.materiel.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'materiel/:id/delete',
        component: materiel_delete_dialog_component_1.MaterielDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.materiel.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=materiel.route.js.map
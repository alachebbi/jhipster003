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
var demandemateriel_component_1 = require("./demandemateriel.component");
var demandemateriel_detail_component_1 = require("./demandemateriel-detail.component");
var demandemateriel_dialog_component_1 = require("./demandemateriel-dialog.component");
var demandemateriel_delete_dialog_component_1 = require("./demandemateriel-delete-dialog.component");
var DemandematerielResolvePagingParams = (function () {
    function DemandematerielResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    DemandematerielResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return DemandematerielResolvePagingParams;
}());
DemandematerielResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], DemandematerielResolvePagingParams);
exports.DemandematerielResolvePagingParams = DemandematerielResolvePagingParams;
exports.demandematerielRoute = [
    {
        path: 'demandemateriel',
        component: demandemateriel_component_1.DemandematerielComponent,
        resolve: {
            'pagingParams': DemandematerielResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandemateriel.home.title'
        }
    }, {
        path: 'demandemateriel/:id',
        component: demandemateriel_detail_component_1.DemandematerielDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandemateriel.home.title'
        }
    }
];
exports.demandematerielPopupRoute = [
    {
        path: 'demandemateriel-new',
        component: demandemateriel_dialog_component_1.DemandematerielPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandemateriel.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'demandemateriel/:id/edit',
        component: demandemateriel_dialog_component_1.DemandematerielPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandemateriel.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'demandemateriel/:id/delete',
        component: demandemateriel_delete_dialog_component_1.DemandematerielDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandemateriel.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=demandemateriel.route.js.map
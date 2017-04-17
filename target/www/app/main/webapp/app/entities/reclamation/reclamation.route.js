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
var reclamation_component_1 = require("./reclamation.component");
var reclamation_detail_component_1 = require("./reclamation-detail.component");
var reclamation_dialog_component_1 = require("./reclamation-dialog.component");
var reclamation_delete_dialog_component_1 = require("./reclamation-delete-dialog.component");
var ReclamationResolvePagingParams = (function () {
    function ReclamationResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    ReclamationResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return ReclamationResolvePagingParams;
}());
ReclamationResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], ReclamationResolvePagingParams);
exports.ReclamationResolvePagingParams = ReclamationResolvePagingParams;
exports.reclamationRoute = [
    {
        path: 'reclamation',
        component: reclamation_component_1.ReclamationComponent,
        resolve: {
            'pagingParams': ReclamationResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.reclamation.home.title'
        }
    }, {
        path: 'reclamation/:id',
        component: reclamation_detail_component_1.ReclamationDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.reclamation.home.title'
        }
    }
];
exports.reclamationPopupRoute = [
    {
        path: 'reclamation-new',
        component: reclamation_dialog_component_1.ReclamationPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.reclamation.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'reclamation/:id/edit',
        component: reclamation_dialog_component_1.ReclamationPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.reclamation.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'reclamation/:id/delete',
        component: reclamation_delete_dialog_component_1.ReclamationDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.reclamation.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=reclamation.route.js.map
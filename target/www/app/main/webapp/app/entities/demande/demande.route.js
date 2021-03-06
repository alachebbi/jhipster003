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
var demande_component_1 = require("./demande.component");
var demande_detail_component_1 = require("./demande-detail.component");
var demande_dialog_component_1 = require("./demande-dialog.component");
var demande_delete_dialog_component_1 = require("./demande-delete-dialog.component");
var DemandeResolvePagingParams = (function () {
    function DemandeResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    DemandeResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return DemandeResolvePagingParams;
}());
DemandeResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], DemandeResolvePagingParams);
exports.DemandeResolvePagingParams = DemandeResolvePagingParams;
exports.demandeRoute = [
    {
        path: 'demande',
        component: demande_component_1.DemandeComponent,
        resolve: {
            'pagingParams': DemandeResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demande.home.title'
        }
    }, {
        path: 'demande/:id',
        component: demande_detail_component_1.DemandeDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demande.home.title'
        }
    }
];
exports.demandePopupRoute = [
    {
        path: 'demande-new',
        component: demande_dialog_component_1.DemandePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demande.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'demande/:id/edit',
        component: demande_dialog_component_1.DemandePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demande.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'demande/:id/delete',
        component: demande_delete_dialog_component_1.DemandeDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demande.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=demande.route.js.map
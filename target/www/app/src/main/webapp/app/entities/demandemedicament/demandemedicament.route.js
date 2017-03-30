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
var demandemedicament_component_1 = require("./demandemedicament.component");
var demandemedicament_detail_component_1 = require("./demandemedicament-detail.component");
var demandemedicament_dialog_component_1 = require("./demandemedicament-dialog.component");
var demandemedicament_delete_dialog_component_1 = require("./demandemedicament-delete-dialog.component");
var DemandemedicamentResolvePagingParams = (function () {
    function DemandemedicamentResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    DemandemedicamentResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return DemandemedicamentResolvePagingParams;
}());
DemandemedicamentResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], DemandemedicamentResolvePagingParams);
exports.DemandemedicamentResolvePagingParams = DemandemedicamentResolvePagingParams;
exports.demandemedicamentRoute = [
    {
        path: 'demandemedicament',
        component: demandemedicament_component_1.DemandemedicamentComponent,
        resolve: {
            'pagingParams': DemandemedicamentResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandemedicament.home.title'
        }
    }, {
        path: 'demandemedicament/:id',
        component: demandemedicament_detail_component_1.DemandemedicamentDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandemedicament.home.title'
        }
    }
];
exports.demandemedicamentPopupRoute = [
    {
        path: 'demandemedicament-new',
        component: demandemedicament_dialog_component_1.DemandemedicamentPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandemedicament.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'demandemedicament/:id/edit',
        component: demandemedicament_dialog_component_1.DemandemedicamentPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandemedicament.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'demandemedicament/:id/delete',
        component: demandemedicament_delete_dialog_component_1.DemandemedicamentDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandemedicament.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=demandemedicament.route.js.map
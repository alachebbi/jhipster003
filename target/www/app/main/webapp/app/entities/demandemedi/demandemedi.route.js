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
var demandemedi_component_1 = require("./demandemedi.component");
var demandemedi_detail_component_1 = require("./demandemedi-detail.component");
var demandemedi_dialog_component_1 = require("./demandemedi-dialog.component");
var demandemedi_delete_dialog_component_1 = require("./demandemedi-delete-dialog.component");
var DemandemediResolvePagingParams = (function () {
    function DemandemediResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    DemandemediResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return DemandemediResolvePagingParams;
}());
DemandemediResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], DemandemediResolvePagingParams);
exports.DemandemediResolvePagingParams = DemandemediResolvePagingParams;
exports.demandemediRoute = [
    {
        path: 'demandemedi',
        component: demandemedi_component_1.DemandemediComponent,
        resolve: {
            'pagingParams': DemandemediResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandemedi.home.title'
        }
    }, {
        path: 'demandemedi/:id',
        component: demandemedi_detail_component_1.DemandemediDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandemedi.home.title'
        }
    }
];
exports.demandemediPopupRoute = [
    {
        path: 'demandemedi-new',
        component: demandemedi_dialog_component_1.DemandemediPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandemedi.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'demandemedi/:id/edit',
        component: demandemedi_dialog_component_1.DemandemediPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandemedi.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'demandemedi/:id/delete',
        component: demandemedi_delete_dialog_component_1.DemandemediDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandemedi.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=demandemedi.route.js.map
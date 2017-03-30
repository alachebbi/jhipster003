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
var fichemedicale_component_1 = require("./fichemedicale.component");
var fichemedicale_detail_component_1 = require("./fichemedicale-detail.component");
var fichemedicale_dialog_component_1 = require("./fichemedicale-dialog.component");
var fichemedicale_delete_dialog_component_1 = require("./fichemedicale-delete-dialog.component");
var FichemedicaleResolvePagingParams = (function () {
    function FichemedicaleResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    FichemedicaleResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return FichemedicaleResolvePagingParams;
}());
FichemedicaleResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], FichemedicaleResolvePagingParams);
exports.FichemedicaleResolvePagingParams = FichemedicaleResolvePagingParams;
exports.fichemedicaleRoute = [
    {
        path: 'fichemedicale',
        component: fichemedicale_component_1.FichemedicaleComponent,
        resolve: {
            'pagingParams': FichemedicaleResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.fichemedicale.home.title'
        }
    }, {
        path: 'fichemedicale/:id',
        component: fichemedicale_detail_component_1.FichemedicaleDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.fichemedicale.home.title'
        }
    }
];
exports.fichemedicalePopupRoute = [
    {
        path: 'fichemedicale-new',
        component: fichemedicale_dialog_component_1.FichemedicalePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.fichemedicale.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'fichemedicale/:id/edit',
        component: fichemedicale_dialog_component_1.FichemedicalePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.fichemedicale.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'fichemedicale/:id/delete',
        component: fichemedicale_delete_dialog_component_1.FichemedicaleDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.fichemedicale.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=fichemedicale.route.js.map
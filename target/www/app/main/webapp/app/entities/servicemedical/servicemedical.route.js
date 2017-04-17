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
var servicemedical_component_1 = require("./servicemedical.component");
var servicemedical_detail_component_1 = require("./servicemedical-detail.component");
var servicemedical_dialog_component_1 = require("./servicemedical-dialog.component");
var servicemedical_delete_dialog_component_1 = require("./servicemedical-delete-dialog.component");
var ServicemedicalResolvePagingParams = (function () {
    function ServicemedicalResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    ServicemedicalResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return ServicemedicalResolvePagingParams;
}());
ServicemedicalResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], ServicemedicalResolvePagingParams);
exports.ServicemedicalResolvePagingParams = ServicemedicalResolvePagingParams;
exports.servicemedicalRoute = [
    {
        path: 'servicemedical',
        component: servicemedical_component_1.ServicemedicalComponent,
        resolve: {
            'pagingParams': ServicemedicalResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.servicemedical.home.title'
        }
    }, {
        path: 'servicemedical/:id',
        component: servicemedical_detail_component_1.ServicemedicalDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.servicemedical.home.title'
        }
    }
];
exports.servicemedicalPopupRoute = [
    {
        path: 'servicemedical-new',
        component: servicemedical_dialog_component_1.ServicemedicalPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.servicemedical.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'servicemedical/:id/edit',
        component: servicemedical_dialog_component_1.ServicemedicalPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.servicemedical.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'servicemedical/:id/delete',
        component: servicemedical_delete_dialog_component_1.ServicemedicalDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.servicemedical.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=servicemedical.route.js.map
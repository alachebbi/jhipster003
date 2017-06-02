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
var service_component_1 = require("./service.component");
var service_detail_component_1 = require("./service-detail.component");
var service_dialog_component_1 = require("./service-dialog.component");
var service_delete_dialog_component_1 = require("./service-delete-dialog.component");
var ServiceResolvePagingParams = (function () {
    function ServiceResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    ServiceResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return ServiceResolvePagingParams;
}());
ServiceResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], ServiceResolvePagingParams);
exports.ServiceResolvePagingParams = ServiceResolvePagingParams;
exports.serviceRoute = [
    {
        path: 'service',
        component: service_component_1.ServiceComponent,
        resolve: {
            'pagingParams': ServiceResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.service.home.title'
        }
    }, {
        path: 'service/:id',
        component: service_detail_component_1.ServiceDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.service.home.title'
        }
    }
];
exports.servicePopupRoute = [
    {
        path: 'service-new',
        component: service_dialog_component_1.ServicePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.service.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'service/:id/edit',
        component: service_dialog_component_1.ServicePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.service.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'service/:id/delete',
        component: service_delete_dialog_component_1.ServiceDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.service.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=service.route.js.map
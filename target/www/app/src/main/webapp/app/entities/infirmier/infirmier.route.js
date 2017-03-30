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
var infirmier_component_1 = require("./infirmier.component");
var infirmier_detail_component_1 = require("./infirmier-detail.component");
var infirmier_dialog_component_1 = require("./infirmier-dialog.component");
var infirmier_delete_dialog_component_1 = require("./infirmier-delete-dialog.component");
var InfirmierResolvePagingParams = (function () {
    function InfirmierResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    InfirmierResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return InfirmierResolvePagingParams;
}());
InfirmierResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], InfirmierResolvePagingParams);
exports.InfirmierResolvePagingParams = InfirmierResolvePagingParams;
exports.infirmierRoute = [
    {
        path: 'infirmier',
        component: infirmier_component_1.InfirmierComponent,
        resolve: {
            'pagingParams': InfirmierResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.infirmier.home.title'
        }
    }, {
        path: 'infirmier/:id',
        component: infirmier_detail_component_1.InfirmierDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.infirmier.home.title'
        }
    }
];
exports.infirmierPopupRoute = [
    {
        path: 'infirmier-new',
        component: infirmier_dialog_component_1.InfirmierPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.infirmier.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'infirmier/:id/edit',
        component: infirmier_dialog_component_1.InfirmierPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.infirmier.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'infirmier/:id/delete',
        component: infirmier_delete_dialog_component_1.InfirmierDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.infirmier.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=infirmier.route.js.map
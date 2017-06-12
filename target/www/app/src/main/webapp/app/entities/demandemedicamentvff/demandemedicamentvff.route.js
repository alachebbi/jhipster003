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
var demandemedicamentvff_component_1 = require("./demandemedicamentvff.component");
var demandemedicamentvff_detail_component_1 = require("./demandemedicamentvff-detail.component");
var demandemedicamentvff_dialog_component_1 = require("./demandemedicamentvff-dialog.component");
var demandemedicamentvff_delete_dialog_component_1 = require("./demandemedicamentvff-delete-dialog.component");
var DemandemedicamentvffResolvePagingParams = (function () {
    function DemandemedicamentvffResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    DemandemedicamentvffResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return DemandemedicamentvffResolvePagingParams;
}());
DemandemedicamentvffResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], DemandemedicamentvffResolvePagingParams);
exports.DemandemedicamentvffResolvePagingParams = DemandemedicamentvffResolvePagingParams;
exports.demandemedicamentvffRoute = [
    {
        path: 'demandemedicamentvff',
        component: demandemedicamentvff_component_1.DemandemedicamentvffComponent,
        resolve: {
            'pagingParams': DemandemedicamentvffResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandemedicamentvff.home.title'
        }
    }, {
        path: 'demandemedicamentvff/:id',
        component: demandemedicamentvff_detail_component_1.DemandemedicamentvffDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandemedicamentvff.home.title'
        }
    }
];
exports.demandemedicamentvffPopupRoute = [
    {
        path: 'demandemedicamentvff-new',
        component: demandemedicamentvff_dialog_component_1.DemandemedicamentvffPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandemedicamentvff.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'demandemedicamentvff/:id/edit',
        component: demandemedicamentvff_dialog_component_1.DemandemedicamentvffPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandemedicamentvff.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'demandemedicamentvff/:id/delete',
        component: demandemedicamentvff_delete_dialog_component_1.DemandemedicamentvffDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.demandemedicamentvff.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=demandemedicamentvff.route.js.map
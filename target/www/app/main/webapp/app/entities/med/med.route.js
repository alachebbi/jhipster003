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
var med_component_1 = require("./med.component");
var med_detail_component_1 = require("./med-detail.component");
var med_dialog_component_1 = require("./med-dialog.component");
var med_delete_dialog_component_1 = require("./med-delete-dialog.component");
var MedResolvePagingParams = (function () {
    function MedResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    MedResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return MedResolvePagingParams;
}());
MedResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], MedResolvePagingParams);
exports.MedResolvePagingParams = MedResolvePagingParams;
exports.medRoute = [
    {
        path: 'med',
        component: med_component_1.MedComponent,
        resolve: {
            'pagingParams': MedResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.med.home.title'
        }
    }, {
        path: 'med/:id',
        component: med_detail_component_1.MedDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.med.home.title'
        }
    }
];
exports.medPopupRoute = [
    {
        path: 'med-new',
        component: med_dialog_component_1.MedPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.med.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'med/:id/edit',
        component: med_dialog_component_1.MedPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.med.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'med/:id/delete',
        component: med_delete_dialog_component_1.MedDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.med.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=med.route.js.map
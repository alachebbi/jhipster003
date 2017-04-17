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
var medicament_component_1 = require("./medicament.component");
var medicament_detail_component_1 = require("./medicament-detail.component");
var medicament_dialog_component_1 = require("./medicament-dialog.component");
var medicament_delete_dialog_component_1 = require("./medicament-delete-dialog.component");
var MedicamentResolvePagingParams = (function () {
    function MedicamentResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    MedicamentResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return MedicamentResolvePagingParams;
}());
MedicamentResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], MedicamentResolvePagingParams);
exports.MedicamentResolvePagingParams = MedicamentResolvePagingParams;
exports.medicamentRoute = [
    {
        path: 'medicament',
        component: medicament_component_1.MedicamentComponent,
        resolve: {
            'pagingParams': MedicamentResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.medicament.home.title'
        }
    }, {
        path: 'medicament/:id',
        component: medicament_detail_component_1.MedicamentDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.medicament.home.title'
        }
    }
];
exports.medicamentPopupRoute = [
    {
        path: 'medicament-new',
        component: medicament_dialog_component_1.MedicamentPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.medicament.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'medicament/:id/edit',
        component: medicament_dialog_component_1.MedicamentPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.medicament.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'medicament/:id/delete',
        component: medicament_delete_dialog_component_1.MedicamentDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.medicament.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=medicament.route.js.map
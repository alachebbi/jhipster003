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
var dossier_medical_component_1 = require("./dossier-medical.component");
var dossier_medical_detail_component_1 = require("./dossier-medical-detail.component");
var dossier_medical_dialog_component_1 = require("./dossier-medical-dialog.component");
var dossier_medical_delete_dialog_component_1 = require("./dossier-medical-delete-dialog.component");
var DossierMedicalResolvePagingParams = (function () {
    function DossierMedicalResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    DossierMedicalResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return DossierMedicalResolvePagingParams;
}());
DossierMedicalResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], DossierMedicalResolvePagingParams);
exports.DossierMedicalResolvePagingParams = DossierMedicalResolvePagingParams;
exports.dossierMedicalRoute = [
    {
        path: 'dossier-medical',
        component: dossier_medical_component_1.DossierMedicalComponent,
        resolve: {
            'pagingParams': DossierMedicalResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.dossierMedical.home.title'
        }
    }, {
        path: 'dossier-medical/:id',
        component: dossier_medical_detail_component_1.DossierMedicalDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.dossierMedical.home.title'
        }
    }
];
exports.dossierMedicalPopupRoute = [
    {
        path: 'dossier-medical-new',
        component: dossier_medical_dialog_component_1.DossierMedicalPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.dossierMedical.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'dossier-medical/:id/edit',
        component: dossier_medical_dialog_component_1.DossierMedicalPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.dossierMedical.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'dossier-medical/:id/delete',
        component: dossier_medical_delete_dialog_component_1.DossierMedicalDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.dossierMedical.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=dossier-medical.route.js.map
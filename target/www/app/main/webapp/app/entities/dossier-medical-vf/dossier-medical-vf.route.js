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
var dossier_medical_vf_component_1 = require("./dossier-medical-vf.component");
var dossier_medical_vf_detail_component_1 = require("./dossier-medical-vf-detail.component");
var dossier_medical_vf_dialog_component_1 = require("./dossier-medical-vf-dialog.component");
var dossier_medical_vf_delete_dialog_component_1 = require("./dossier-medical-vf-delete-dialog.component");
var DossierMedicalVFResolvePagingParams = (function () {
    function DossierMedicalVFResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    DossierMedicalVFResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return DossierMedicalVFResolvePagingParams;
}());
DossierMedicalVFResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], DossierMedicalVFResolvePagingParams);
exports.DossierMedicalVFResolvePagingParams = DossierMedicalVFResolvePagingParams;
exports.dossierMedicalVFRoute = [
    {
        path: 'dossier-medical-vf',
        component: dossier_medical_vf_component_1.DossierMedicalVFComponent,
        resolve: {
            'pagingParams': DossierMedicalVFResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.dossierMedicalVF.home.title'
        }
    }, {
        path: 'dossier-medical-vf/:id',
        component: dossier_medical_vf_detail_component_1.DossierMedicalVFDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.dossierMedicalVF.home.title'
        }
    }
];
exports.dossierMedicalVFPopupRoute = [
    {
        path: 'dossier-medical-vf-new',
        component: dossier_medical_vf_dialog_component_1.DossierMedicalVFPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.dossierMedicalVF.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'dossier-medical-vf/:id/edit',
        component: dossier_medical_vf_dialog_component_1.DossierMedicalVFPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.dossierMedicalVF.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'dossier-medical-vf/:id/delete',
        component: dossier_medical_vf_delete_dialog_component_1.DossierMedicalVFDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.dossierMedicalVF.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=dossier-medical-vf.route.js.map
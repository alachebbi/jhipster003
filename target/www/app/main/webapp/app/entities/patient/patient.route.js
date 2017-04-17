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
var patient_component_1 = require("./patient.component");
var patient_detail_component_1 = require("./patient-detail.component");
var patient_dialog_component_1 = require("./patient-dialog.component");
var patient_delete_dialog_component_1 = require("./patient-delete-dialog.component");
var PatientResolvePagingParams = (function () {
    function PatientResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    PatientResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return PatientResolvePagingParams;
}());
PatientResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], PatientResolvePagingParams);
exports.PatientResolvePagingParams = PatientResolvePagingParams;
exports.patientRoute = [
    {
        path: 'patient',
        component: patient_component_1.PatientComponent,
        resolve: {
            'pagingParams': PatientResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.patient.home.title'
        }
    }, {
        path: 'patient/:id',
        component: patient_detail_component_1.PatientDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.patient.home.title'
        }
    }
];
exports.patientPopupRoute = [
    {
        path: 'patient-new',
        component: patient_dialog_component_1.PatientPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.patient.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'patient/:id/edit',
        component: patient_dialog_component_1.PatientPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.patient.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'patient/:id/delete',
        component: patient_delete_dialog_component_1.PatientDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.patient.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=patient.route.js.map
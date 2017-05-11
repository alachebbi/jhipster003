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
var doctor_component_1 = require("./doctor.component");
var doctor_detail_component_1 = require("./doctor-detail.component");
var doctor_dialog_component_1 = require("./doctor-dialog.component");
var doctor_delete_dialog_component_1 = require("./doctor-delete-dialog.component");
var DoctorResolvePagingParams = (function () {
    function DoctorResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    DoctorResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return DoctorResolvePagingParams;
}());
DoctorResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], DoctorResolvePagingParams);
exports.DoctorResolvePagingParams = DoctorResolvePagingParams;
exports.doctorRoute = [
    {
        path: 'doctor',
        component: doctor_component_1.DoctorComponent,
        resolve: {
            'pagingParams': DoctorResolvePagingParams
        },
        data: {
            authorities: ['ROLE_ADMIN'],
            pageTitle: 'avancementApp.doctor.home.title'
        }
    }, {
        path: 'doctor/:id',
        component: doctor_detail_component_1.DoctorDetailComponent,
        data: {
            authorities: ['ROLE_ADMIN'],
            pageTitle: 'avancementApp.doctor.home.title'
        }
    }
];
exports.doctorPopupRoute = [
    {
        path: 'doctor-new',
        component: doctor_dialog_component_1.DoctorPopupComponent,
        data: {
            authorities: ['ROLE_ADMIN'],
            pageTitle: 'avancementApp.doctor.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'doctor/:id/edit',
        component: doctor_dialog_component_1.DoctorPopupComponent,
        data: {
            authorities: ['ROLE_ADMIN'],
            pageTitle: 'avancementApp.doctor.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'doctor/:id/delete',
        component: doctor_delete_dialog_component_1.DoctorDeletePopupComponent,
        data: {
            authorities: ['ROLE_ADMIN'],
            pageTitle: 'avancementApp.doctor.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=doctor.route.js.map
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
var teacher_component_1 = require("./teacher.component");
var teacher_detail_component_1 = require("./teacher-detail.component");
var teacher_dialog_component_1 = require("./teacher-dialog.component");
var teacher_delete_dialog_component_1 = require("./teacher-delete-dialog.component");
var TeacherResolvePagingParams = (function () {
    function TeacherResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    TeacherResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return TeacherResolvePagingParams;
}());
TeacherResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], TeacherResolvePagingParams);
exports.TeacherResolvePagingParams = TeacherResolvePagingParams;
exports.teacherRoute = [
    {
        path: 'teacher',
        component: teacher_component_1.TeacherComponent,
        resolve: {
            'pagingParams': TeacherResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.teacher.home.title'
        }
    }, {
        path: 'teacher/:id',
        component: teacher_detail_component_1.TeacherDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.teacher.home.title'
        }
    }
];
exports.teacherPopupRoute = [
    {
        path: 'teacher-new',
        component: teacher_dialog_component_1.TeacherPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.teacher.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'teacher/:id/edit',
        component: teacher_dialog_component_1.TeacherPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.teacher.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'teacher/:id/delete',
        component: teacher_delete_dialog_component_1.TeacherDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.teacher.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=teacher.route.js.map
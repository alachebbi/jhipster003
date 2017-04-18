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
var router_1 = require("@angular/router");
var ng_jhipster_1 = require("ng-jhipster");
var teacher_service_1 = require("./teacher.service");
var TeacherDetailComponent = (function () {
    function TeacherDetailComponent(jhiLanguageService, teacherService, route) {
        this.jhiLanguageService = jhiLanguageService;
        this.teacherService = teacherService;
        this.route = route;
        this.jhiLanguageService.setLocations(['teacher']);
    }
    TeacherDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['id']);
        });
    };
    TeacherDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.teacherService.find(id).subscribe(function (teacher) {
            _this.teacher = teacher;
        });
    };
    TeacherDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    TeacherDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return TeacherDetailComponent;
}());
TeacherDetailComponent = __decorate([
    core_1.Component({
        selector: 'jhi-teacher-detail',
        templateUrl: './teacher-detail.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        teacher_service_1.TeacherService,
        router_1.ActivatedRoute])
], TeacherDetailComponent);
exports.TeacherDetailComponent = TeacherDetailComponent;
//# sourceMappingURL=teacher-detail.component.js.map
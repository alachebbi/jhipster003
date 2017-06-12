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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng_jhipster_1 = require("ng-jhipster");
var teacher_popup_service_1 = require("./teacher-popup.service");
var teacher_service_1 = require("./teacher.service");
var TeacherDialogComponent = (function () {
    function TeacherDialogComponent(activeModal, jhiLanguageService, alertService, teacherService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.alertService = alertService;
        this.teacherService = teacherService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['teacher']);
    }
    TeacherDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    TeacherDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    TeacherDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.teacher.id !== undefined) {
            this.teacherService.update(this.teacher)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.teacherService.create(this.teacher)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    TeacherDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'teacherListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    TeacherDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    TeacherDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return TeacherDialogComponent;
}());
TeacherDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-teacher-dialog',
        templateUrl: './teacher-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.AlertService,
        teacher_service_1.TeacherService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], TeacherDialogComponent);
exports.TeacherDialogComponent = TeacherDialogComponent;
var TeacherPopupComponent = (function () {
    function TeacherPopupComponent(route, teacherPopupService) {
        this.route = route;
        this.teacherPopupService = teacherPopupService;
    }
    TeacherPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.teacherPopupService
                    .open(TeacherDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.teacherPopupService
                    .open(TeacherDialogComponent);
            }
        });
    };
    TeacherPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return TeacherPopupComponent;
}());
TeacherPopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-teacher-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        teacher_popup_service_1.TeacherPopupService])
], TeacherPopupComponent);
exports.TeacherPopupComponent = TeacherPopupComponent;
//# sourceMappingURL=teacher-dialog.component.js.map
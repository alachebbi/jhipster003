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
var TeacherDeleteDialogComponent = (function () {
    function TeacherDeleteDialogComponent(jhiLanguageService, teacherService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.teacherService = teacherService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['teacher']);
    }
    TeacherDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    TeacherDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.teacherService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'teacherListModification',
                content: 'Deleted an teacher'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return TeacherDeleteDialogComponent;
}());
TeacherDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-teacher-delete-dialog',
        templateUrl: './teacher-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        teacher_service_1.TeacherService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], TeacherDeleteDialogComponent);
exports.TeacherDeleteDialogComponent = TeacherDeleteDialogComponent;
var TeacherDeletePopupComponent = (function () {
    function TeacherDeletePopupComponent(route, teacherPopupService) {
        this.route = route;
        this.teacherPopupService = teacherPopupService;
    }
    TeacherDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.teacherPopupService
                .open(TeacherDeleteDialogComponent, params['id']);
        });
    };
    TeacherDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return TeacherDeletePopupComponent;
}());
TeacherDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-teacher-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        teacher_popup_service_1.TeacherPopupService])
], TeacherDeletePopupComponent);
exports.TeacherDeletePopupComponent = TeacherDeletePopupComponent;
//# sourceMappingURL=teacher-delete-dialog.component.js.map
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
var servicemedical_service_1 = require("../servicemedical/servicemedical.service");
var doctor_popup_service_1 = require("./doctor-popup.service");
var doctor_service_1 = require("./doctor.service");
var DoctorDialogComponent = (function () {
    function DoctorDialogComponent(activeModal, servicemedicalService, jhiLanguageService, dataUtils, alertService, doctorService, eventManager, router) {
        this.activeModal = activeModal;
        this.servicemedicalService = servicemedicalService;
        this.jhiLanguageService = jhiLanguageService;
        this.dataUtils = dataUtils;
        this.alertService = alertService;
        this.doctorService = doctorService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['doctor']);
    }
    DoctorDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.loadAllserv();
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    DoctorDialogComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    DoctorDialogComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    DoctorDialogComponent.prototype.setFileData = function ($event, doctor, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            var $file_1 = $event.target.files[0];
            if (isImage && !/^image\//.test($file_1.type)) {
                return;
            }
            this.dataUtils.toBase64($file_1, function (base64Data) {
                doctor[field] = base64Data;
                doctor[field + "ContentType"] = $file_1.type;
            });
        }
    };
    DoctorDialogComponent.prototype.loadAllserv = function () {
        var _this = this;
        this.servicemedicalService.query().subscribe(function (res) {
            _this.servicemedicals = res.json();
        }, function (res) { return _this.onError(res.json()); });
    };
    DoctorDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DoctorDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.doctor.id !== undefined) {
            this.doctorService.update(this.doctor)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.doctorService.create(this.doctor)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    DoctorDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'doctorListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DoctorDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    DoctorDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return DoctorDialogComponent;
}());
DoctorDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-doctor-dialog',
        templateUrl: './doctor-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        servicemedical_service_1.ServicemedicalService,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.DataUtils,
        ng_jhipster_1.AlertService,
        doctor_service_1.DoctorService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], DoctorDialogComponent);
exports.DoctorDialogComponent = DoctorDialogComponent;
var DoctorPopupComponent = (function () {
    function DoctorPopupComponent(route, doctorPopupService) {
        this.route = route;
        this.doctorPopupService = doctorPopupService;
    }
    DoctorPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.doctorPopupService
                    .open(DoctorDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.doctorPopupService
                    .open(DoctorDialogComponent);
            }
        });
    };
    DoctorPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return DoctorPopupComponent;
}());
DoctorPopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-doctor-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        doctor_popup_service_1.DoctorPopupService])
], DoctorPopupComponent);
exports.DoctorPopupComponent = DoctorPopupComponent;
//# sourceMappingURL=doctor-dialog.component.js.map
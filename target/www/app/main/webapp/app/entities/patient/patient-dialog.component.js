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
var patient_popup_service_1 = require("./patient-popup.service");
var patient_service_1 = require("./patient.service");
var PatientDialogComponent = (function () {
    function PatientDialogComponent(activeModal, jhiLanguageService, dataUtils, alertService, patientService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.dataUtils = dataUtils;
        this.alertService = alertService;
        this.patientService = patientService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['patient']);
    }
    PatientDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    PatientDialogComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    PatientDialogComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    PatientDialogComponent.prototype.setFileData = function ($event, patient, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            var $file_1 = $event.target.files[0];
            if (isImage && !/^image\//.test($file_1.type)) {
                return;
            }
            this.dataUtils.toBase64($file_1, function (base64Data) {
                patient[field] = base64Data;
                patient[field + "ContentType"] = $file_1.type;
            });
        }
    };
    PatientDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    PatientDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.patient.id !== undefined) {
            this.patientService.update(this.patient)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.patientService.create(this.patient)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    PatientDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'patientListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    PatientDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    PatientDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return PatientDialogComponent;
}());
PatientDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-patient-dialog',
        templateUrl: './patient-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.DataUtils,
        ng_jhipster_1.AlertService,
        patient_service_1.PatientService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], PatientDialogComponent);
exports.PatientDialogComponent = PatientDialogComponent;
var PatientPopupComponent = (function () {
    function PatientPopupComponent(route, patientPopupService) {
        this.route = route;
        this.patientPopupService = patientPopupService;
    }
    PatientPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.patientPopupService
                    .open(PatientDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.patientPopupService
                    .open(PatientDialogComponent);
            }
        });
    };
    PatientPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return PatientPopupComponent;
}());
PatientPopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-patient-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        patient_popup_service_1.PatientPopupService])
], PatientPopupComponent);
exports.PatientPopupComponent = PatientPopupComponent;
//# sourceMappingURL=patient-dialog.component.js.map
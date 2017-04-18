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
var dossier_medical_popup_service_1 = require("./dossier-medical-popup.service");
var dossier_medical_service_1 = require("./dossier-medical.service");
var doctor_1 = require("../doctor");
var DossierMedicalDialogComponent = (function () {
    function DossierMedicalDialogComponent(activeModal, jhiLanguageService, dataUtils, alertService, dossierMedicalService, eventManager, doctorService, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.dataUtils = dataUtils;
        this.alertService = alertService;
        this.dossierMedicalService = dossierMedicalService;
        this.eventManager = eventManager;
        this.doctorService = doctorService;
        this.router = router;
        this.jhiLanguageService.setLocations(['dossierMedical']);
    }
    DossierMedicalDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        this.doctorService.query().subscribe(function (res) { return _this.doctors = res.json(); });
    };
    DossierMedicalDialogComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    DossierMedicalDialogComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    DossierMedicalDialogComponent.prototype.setFileData = function ($event, dossierMedical, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            var $file_1 = $event.target.files[0];
            if (isImage && !/^image\//.test($file_1.type)) {
                return;
            }
            this.dataUtils.toBase64($file_1, function (base64Data) {
                dossierMedical[field] = base64Data;
                dossierMedical[field + "ContentType"] = $file_1.type;
            });
        }
    };
    DossierMedicalDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DossierMedicalDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.dossierMedical.id !== undefined) {
            this.dossierMedicalService.update(this.dossierMedical)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.dossierMedicalService.create(this.dossierMedical)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    DossierMedicalDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'dossierMedicalListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DossierMedicalDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    DossierMedicalDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return DossierMedicalDialogComponent;
}());
DossierMedicalDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-dossier-medical-dialog',
        templateUrl: './dossier-medical-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.DataUtils,
        ng_jhipster_1.AlertService,
        dossier_medical_service_1.DossierMedicalService,
        ng_jhipster_1.EventManager,
        doctor_1.DoctorService,
        router_1.Router])
], DossierMedicalDialogComponent);
exports.DossierMedicalDialogComponent = DossierMedicalDialogComponent;
var DossierMedicalPopupComponent = (function () {
    function DossierMedicalPopupComponent(route, dossierMedicalPopupService) {
        this.route = route;
        this.dossierMedicalPopupService = dossierMedicalPopupService;
    }
    DossierMedicalPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.dossierMedicalPopupService
                    .open(DossierMedicalDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.dossierMedicalPopupService
                    .open(DossierMedicalDialogComponent);
            }
        });
    };
    DossierMedicalPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return DossierMedicalPopupComponent;
}());
DossierMedicalPopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-dossier-medical-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        dossier_medical_popup_service_1.DossierMedicalPopupService])
], DossierMedicalPopupComponent);
exports.DossierMedicalPopupComponent = DossierMedicalPopupComponent;
//# sourceMappingURL=dossier-medical-dialog.component.js.map
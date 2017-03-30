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
var PatientDeleteDialogComponent = (function () {
    function PatientDeleteDialogComponent(jhiLanguageService, patientService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.patientService = patientService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['patient']);
    }
    PatientDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    PatientDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.patientService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'patientListModification',
                content: 'Deleted an patient'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return PatientDeleteDialogComponent;
}());
PatientDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-patient-delete-dialog',
        templateUrl: './patient-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        patient_service_1.PatientService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], PatientDeleteDialogComponent);
exports.PatientDeleteDialogComponent = PatientDeleteDialogComponent;
var PatientDeletePopupComponent = (function () {
    function PatientDeletePopupComponent(route, patientPopupService) {
        this.route = route;
        this.patientPopupService = patientPopupService;
    }
    PatientDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.patientPopupService
                .open(PatientDeleteDialogComponent, params['id']);
        });
    };
    PatientDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return PatientDeletePopupComponent;
}());
PatientDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-patient-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        patient_popup_service_1.PatientPopupService])
], PatientDeletePopupComponent);
exports.PatientDeletePopupComponent = PatientDeletePopupComponent;
//# sourceMappingURL=patient-delete-dialog.component.js.map
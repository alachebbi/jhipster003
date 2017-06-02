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
var doctor_service_1 = require("../doctor/doctor.service");
var dossier_medical_vf_popup_service_1 = require("./dossier-medical-vf-popup.service");
var dossier_medical_vf_service_1 = require("./dossier-medical-vf.service");
var medicament_service_1 = require("../medicament/medicament.service");
var shared_1 = require("../../shared");
var DossierMedicalVF2DialogComponent = (function () {
    function DossierMedicalVF2DialogComponent(activeModal, jhiLanguageService, doctorService, medicamentService, principal, loginModalService, dataUtils, alertService, dossierMedicalVFService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.doctorService = doctorService;
        this.medicamentService = medicamentService;
        this.principal = principal;
        this.loginModalService = loginModalService;
        this.dataUtils = dataUtils;
        this.alertService = alertService;
        this.dossierMedicalVFService = dossierMedicalVFService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['dossierMedicalVF']);
    }
    DossierMedicalVF2DialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.account = account;
        });
        this.registerAuthenticationSuccess();
        this.isSaving = false;
        this.loadAlldoc();
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    DossierMedicalVF2DialogComponent.prototype.registerAuthenticationSuccess = function () {
        var _this = this;
        this.eventManager.subscribe('authenticationSuccess', function (message) {
            _this.principal.identity().then(function (account) {
                _this.account = account;
            });
        });
    };
    DossierMedicalVF2DialogComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    DossierMedicalVF2DialogComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    DossierMedicalVF2DialogComponent.prototype.setFileData = function ($event, dossierMedicalVF, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            var $file_1 = $event.target.files[0];
            if (isImage && !/^image\//.test($file_1.type)) {
                return;
            }
            this.dataUtils.toBase64($file_1, function (base64Data) {
                dossierMedicalVF[field] = base64Data;
                dossierMedicalVF[field + "ContentType"] = $file_1.type;
            });
        }
    };
    DossierMedicalVF2DialogComponent.prototype.loadAlldoc = function () {
        var _this = this;
        this.doctorService.query().subscribe(function (res) {
            _this.doctors = res.json();
        }, function (res) { return _this.onError(res.json()); });
    };
    DossierMedicalVF2DialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DossierMedicalVF2DialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.dossierMedicalVF.id !== undefined) {
            this.dossierMedicalVFService.update(this.dossierMedicalVF)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.dossierMedicalVF.medecintraitant = this.account.firstName;
            this.dossierMedicalVFService.create(this.dossierMedicalVF)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    DossierMedicalVF2DialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'dossierMedicalVFListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DossierMedicalVF2DialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    DossierMedicalVF2DialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return DossierMedicalVF2DialogComponent;
}());
DossierMedicalVF2DialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-dossier-medical-vf2-dialog',
        templateUrl: './dossier-medical-vf2-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        doctor_service_1.DoctorService,
        medicament_service_1.MedicamentService,
        shared_1.Principal,
        shared_1.LoginModalService,
        ng_jhipster_1.DataUtils,
        ng_jhipster_1.AlertService,
        dossier_medical_vf_service_1.DossierMedicalVFService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], DossierMedicalVF2DialogComponent);
exports.DossierMedicalVF2DialogComponent = DossierMedicalVF2DialogComponent;
var DossierMedicalVF2PopupComponent = (function () {
    function DossierMedicalVF2PopupComponent(route, dossierMedicalVFPopupService) {
        this.route = route;
        this.dossierMedicalVFPopupService = dossierMedicalVFPopupService;
    }
    DossierMedicalVF2PopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.dossierMedicalVFPopupService
                    .open(DossierMedicalVF2DialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.dossierMedicalVFPopupService
                    .open(DossierMedicalVF2DialogComponent);
            }
        });
    };
    DossierMedicalVF2PopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return DossierMedicalVF2PopupComponent;
}());
DossierMedicalVF2PopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-dossier-medical-vf2-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        dossier_medical_vf_popup_service_1.DossierMedicalVFPopupService])
], DossierMedicalVF2PopupComponent);
exports.DossierMedicalVF2PopupComponent = DossierMedicalVF2PopupComponent;
//# sourceMappingURL=dossier-medical-vf2-dailog.component.js.map
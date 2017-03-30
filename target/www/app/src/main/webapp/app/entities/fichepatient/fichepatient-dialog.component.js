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
var fichepatient_popup_service_1 = require("./fichepatient-popup.service");
var fichepatient_service_1 = require("./fichepatient.service");
var medecin_service_1 = require("../medecin/medecin.service");
var FichepatientDialogComponent = (function () {
    function FichepatientDialogComponent(activeModal, jhiLanguageService, dataUtils, alertService, medecinService, fichepatientService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.dataUtils = dataUtils;
        this.alertService = alertService;
        this.medecinService = medecinService;
        this.fichepatientService = fichepatientService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['fichepatient']);
    }
    FichepatientDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.loadAllserv();
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    FichepatientDialogComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    FichepatientDialogComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    FichepatientDialogComponent.prototype.setFileData = function ($event, fichepatient, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            var $file_1 = $event.target.files[0];
            if (isImage && !/^image\//.test($file_1.type)) {
                return;
            }
            this.dataUtils.toBase64($file_1, function (base64Data) {
                fichepatient[field] = base64Data;
                fichepatient[field + "ContentType"] = $file_1.type;
            });
        }
    };
    FichepatientDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    FichepatientDialogComponent.prototype.loadAllserv = function () {
        var _this = this;
        this.medecinService.query().subscribe(function (res) {
            _this.medecins = res.json();
        }, function (res) { return _this.onError(res.json()); });
    };
    FichepatientDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.fichepatient.id !== undefined) {
            this.fichepatientService.update(this.fichepatient)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.fichepatientService.create(this.fichepatient)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    FichepatientDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'fichepatientListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    FichepatientDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    FichepatientDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return FichepatientDialogComponent;
}());
FichepatientDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-fichepatient-dialog',
        templateUrl: './fichepatient-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.DataUtils,
        ng_jhipster_1.AlertService,
        medecin_service_1.MedecinService,
        fichepatient_service_1.FichepatientService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], FichepatientDialogComponent);
exports.FichepatientDialogComponent = FichepatientDialogComponent;
var FichepatientPopupComponent = (function () {
    function FichepatientPopupComponent(route, fichepatientPopupService) {
        this.route = route;
        this.fichepatientPopupService = fichepatientPopupService;
    }
    FichepatientPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.fichepatientPopupService
                    .open(FichepatientDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.fichepatientPopupService
                    .open(FichepatientDialogComponent);
            }
        });
    };
    FichepatientPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return FichepatientPopupComponent;
}());
FichepatientPopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-fichepatient-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        fichepatient_popup_service_1.FichepatientPopupService])
], FichepatientPopupComponent);
exports.FichepatientPopupComponent = FichepatientPopupComponent;
//# sourceMappingURL=fichepatient-dialog.component.js.map
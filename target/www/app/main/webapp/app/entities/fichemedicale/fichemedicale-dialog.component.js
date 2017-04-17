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
var fichemedicale_popup_service_1 = require("./fichemedicale-popup.service");
var fichemedicale_service_1 = require("./fichemedicale.service");
var medecin_service_1 = require("../medecin/medecin.service");
var FichemedicaleDialogComponent = (function () {
    function FichemedicaleDialogComponent(activeModal, jhiLanguageService, dataUtils, alertService, medecinService, fichemedicaleService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.dataUtils = dataUtils;
        this.alertService = alertService;
        this.medecinService = medecinService;
        this.fichemedicaleService = fichemedicaleService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['fichemedicale']);
    }
    FichemedicaleDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.loadAllmed();
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    FichemedicaleDialogComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    FichemedicaleDialogComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    FichemedicaleDialogComponent.prototype.setFileData = function ($event, fichemedicale, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            var $file_1 = $event.target.files[0];
            if (isImage && !/^image\//.test($file_1.type)) {
                return;
            }
            this.dataUtils.toBase64($file_1, function (base64Data) {
                fichemedicale[field] = base64Data;
                fichemedicale[field + "ContentType"] = $file_1.type;
            });
        }
    };
    FichemedicaleDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    FichemedicaleDialogComponent.prototype.loadAllmed = function () {
        var _this = this;
        this.medecinService.query().subscribe(function (res) {
            _this.medecins = res.json();
        }, function (res) { return _this.onError(res.json()); });
    };
    FichemedicaleDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.fichemedicale.id !== undefined) {
            this.fichemedicaleService.update(this.fichemedicale)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.fichemedicaleService.create(this.fichemedicale)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    FichemedicaleDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'fichemedicaleListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    FichemedicaleDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    FichemedicaleDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return FichemedicaleDialogComponent;
}());
FichemedicaleDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-fichemedicale-dialog',
        templateUrl: './fichemedicale-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.DataUtils,
        ng_jhipster_1.AlertService,
        medecin_service_1.MedecinService,
        fichemedicale_service_1.FichemedicaleService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], FichemedicaleDialogComponent);
exports.FichemedicaleDialogComponent = FichemedicaleDialogComponent;
var FichemedicalePopupComponent = (function () {
    function FichemedicalePopupComponent(route, fichemedicalePopupService) {
        this.route = route;
        this.fichemedicalePopupService = fichemedicalePopupService;
    }
    FichemedicalePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.fichemedicalePopupService
                    .open(FichemedicaleDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.fichemedicalePopupService
                    .open(FichemedicaleDialogComponent);
            }
        });
    };
    FichemedicalePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return FichemedicalePopupComponent;
}());
FichemedicalePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-fichemedicale-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        fichemedicale_popup_service_1.FichemedicalePopupService])
], FichemedicalePopupComponent);
exports.FichemedicalePopupComponent = FichemedicalePopupComponent;
//# sourceMappingURL=fichemedicale-dialog.component.js.map
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
var pharmacie_popup_service_1 = require("./pharmacie-popup.service");
var pharmacie_service_1 = require("./pharmacie.service");
var PharmacieDialogComponent = (function () {
    function PharmacieDialogComponent(activeModal, jhiLanguageService, dataUtils, alertService, pharmacieService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.dataUtils = dataUtils;
        this.alertService = alertService;
        this.pharmacieService = pharmacieService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['pharmacie']);
    }
    PharmacieDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    PharmacieDialogComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    PharmacieDialogComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    PharmacieDialogComponent.prototype.setFileData = function ($event, pharmacie, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            var $file_1 = $event.target.files[0];
            if (isImage && !/^image\//.test($file_1.type)) {
                return;
            }
            this.dataUtils.toBase64($file_1, function (base64Data) {
                pharmacie[field] = base64Data;
                pharmacie[field + "ContentType"] = $file_1.type;
            });
        }
    };
    PharmacieDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    PharmacieDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.pharmacie.id !== undefined) {
            this.pharmacieService.update(this.pharmacie)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.pharmacieService.create(this.pharmacie)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    PharmacieDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'pharmacieListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    PharmacieDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    PharmacieDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return PharmacieDialogComponent;
}());
PharmacieDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-pharmacie-dialog',
        templateUrl: './pharmacie-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.DataUtils,
        ng_jhipster_1.AlertService,
        pharmacie_service_1.PharmacieService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], PharmacieDialogComponent);
exports.PharmacieDialogComponent = PharmacieDialogComponent;
var PharmaciePopupComponent = (function () {
    function PharmaciePopupComponent(route, pharmaciePopupService) {
        this.route = route;
        this.pharmaciePopupService = pharmaciePopupService;
    }
    PharmaciePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.pharmaciePopupService
                    .open(PharmacieDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.pharmaciePopupService
                    .open(PharmacieDialogComponent);
            }
        });
    };
    PharmaciePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return PharmaciePopupComponent;
}());
PharmaciePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-pharmacie-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        pharmacie_popup_service_1.PharmaciePopupService])
], PharmaciePopupComponent);
exports.PharmaciePopupComponent = PharmaciePopupComponent;
//# sourceMappingURL=pharmacie-dialog.component.js.map
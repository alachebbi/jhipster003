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
var pharmacien_popup_service_1 = require("./pharmacien-popup.service");
var pharmacien_service_1 = require("./pharmacien.service");
var PharmacienDialogComponent = (function () {
    function PharmacienDialogComponent(activeModal, jhiLanguageService, dataUtils, alertService, pharmacienService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.dataUtils = dataUtils;
        this.alertService = alertService;
        this.pharmacienService = pharmacienService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['pharmacien']);
    }
    PharmacienDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    PharmacienDialogComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    PharmacienDialogComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    PharmacienDialogComponent.prototype.setFileData = function ($event, pharmacien, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            var $file_1 = $event.target.files[0];
            if (isImage && !/^image\//.test($file_1.type)) {
                return;
            }
            this.dataUtils.toBase64($file_1, function (base64Data) {
                pharmacien[field] = base64Data;
                pharmacien[field + "ContentType"] = $file_1.type;
            });
        }
    };
    PharmacienDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    PharmacienDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.pharmacien.id !== undefined) {
            this.pharmacienService.update(this.pharmacien)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.pharmacienService.create(this.pharmacien)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    PharmacienDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'pharmacienListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    PharmacienDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    PharmacienDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return PharmacienDialogComponent;
}());
PharmacienDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-pharmacien-dialog',
        templateUrl: './pharmacien-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.DataUtils,
        ng_jhipster_1.AlertService,
        pharmacien_service_1.PharmacienService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], PharmacienDialogComponent);
exports.PharmacienDialogComponent = PharmacienDialogComponent;
var PharmacienPopupComponent = (function () {
    function PharmacienPopupComponent(route, pharmacienPopupService) {
        this.route = route;
        this.pharmacienPopupService = pharmacienPopupService;
    }
    PharmacienPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.pharmacienPopupService
                    .open(PharmacienDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.pharmacienPopupService
                    .open(PharmacienDialogComponent);
            }
        });
    };
    PharmacienPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return PharmacienPopupComponent;
}());
PharmacienPopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-pharmacien-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        pharmacien_popup_service_1.PharmacienPopupService])
], PharmacienPopupComponent);
exports.PharmacienPopupComponent = PharmacienPopupComponent;
//# sourceMappingURL=pharmacien-dialog.component.js.map
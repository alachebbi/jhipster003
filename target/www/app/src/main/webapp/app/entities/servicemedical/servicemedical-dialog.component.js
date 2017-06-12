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
var servicemedical_popup_service_1 = require("./servicemedical-popup.service");
var servicemedical_service_1 = require("./servicemedical.service");
var ServicemedicalDialogComponent = (function () {
    function ServicemedicalDialogComponent(activeModal, jhiLanguageService, dataUtils, alertService, servicemedicalService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.dataUtils = dataUtils;
        this.alertService = alertService;
        this.servicemedicalService = servicemedicalService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['servicemedical']);
    }
    ServicemedicalDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    ServicemedicalDialogComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    ServicemedicalDialogComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    ServicemedicalDialogComponent.prototype.setFileData = function ($event, servicemedical, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            var $file_1 = $event.target.files[0];
            if (isImage && !/^image\//.test($file_1.type)) {
                return;
            }
            this.dataUtils.toBase64($file_1, function (base64Data) {
                servicemedical[field] = base64Data;
                servicemedical[field + "ContentType"] = $file_1.type;
            });
        }
    };
    ServicemedicalDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    ServicemedicalDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.servicemedical.id !== undefined) {
            this.servicemedicalService.update(this.servicemedical)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.servicemedical.chef == "a";
            this.servicemedicalService.create(this.servicemedical)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    ServicemedicalDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'servicemedicalListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    ServicemedicalDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    ServicemedicalDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return ServicemedicalDialogComponent;
}());
ServicemedicalDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-servicemedical-dialog',
        templateUrl: './servicemedical-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.DataUtils,
        ng_jhipster_1.AlertService,
        servicemedical_service_1.ServicemedicalService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], ServicemedicalDialogComponent);
exports.ServicemedicalDialogComponent = ServicemedicalDialogComponent;
var ServicemedicalPopupComponent = (function () {
    function ServicemedicalPopupComponent(route, servicemedicalPopupService) {
        this.route = route;
        this.servicemedicalPopupService = servicemedicalPopupService;
    }
    ServicemedicalPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.servicemedicalPopupService
                    .open(ServicemedicalDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.servicemedicalPopupService
                    .open(ServicemedicalDialogComponent);
            }
        });
    };
    ServicemedicalPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return ServicemedicalPopupComponent;
}());
ServicemedicalPopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-servicemedical-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        servicemedical_popup_service_1.ServicemedicalPopupService])
], ServicemedicalPopupComponent);
exports.ServicemedicalPopupComponent = ServicemedicalPopupComponent;
//# sourceMappingURL=servicemedical-dialog.component.js.map
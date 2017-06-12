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
var med_popup_service_1 = require("./med-popup.service");
var med_service_1 = require("./med.service");
var MedDialogComponent = (function () {
    function MedDialogComponent(activeModal, jhiLanguageService, alertService, medService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.alertService = alertService;
        this.medService = medService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['med']);
    }
    MedDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    MedDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    MedDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.med.id !== undefined) {
            this.medService.update(this.med)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.medService.create(this.med)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    MedDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'medListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    MedDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    MedDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return MedDialogComponent;
}());
MedDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-med-dialog',
        templateUrl: './med-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.AlertService,
        med_service_1.MedService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], MedDialogComponent);
exports.MedDialogComponent = MedDialogComponent;
var MedPopupComponent = (function () {
    function MedPopupComponent(route, medPopupService) {
        this.route = route;
        this.medPopupService = medPopupService;
    }
    MedPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.medPopupService
                    .open(MedDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.medPopupService
                    .open(MedDialogComponent);
            }
        });
    };
    MedPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return MedPopupComponent;
}());
MedPopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-med-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        med_popup_service_1.MedPopupService])
], MedPopupComponent);
exports.MedPopupComponent = MedPopupComponent;
//# sourceMappingURL=med-dialog.component.js.map
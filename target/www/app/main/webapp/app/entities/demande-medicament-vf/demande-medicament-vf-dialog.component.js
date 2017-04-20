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
var demande_medicament_vf_popup_service_1 = require("./demande-medicament-vf-popup.service");
var demande_medicament_vf_service_1 = require("./demande-medicament-vf.service");
var DemandeMedicamentVfDialogComponent = (function () {
    function DemandeMedicamentVfDialogComponent(activeModal, jhiLanguageService, alertService, demandeMedicamentVfService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.alertService = alertService;
        this.demandeMedicamentVfService = demandeMedicamentVfService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['demandeMedicamentVf']);
    }
    DemandeMedicamentVfDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    DemandeMedicamentVfDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DemandeMedicamentVfDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.demandeMedicamentVf.id !== undefined) {
            this.demandeMedicamentVfService.update(this.demandeMedicamentVf)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.demandeMedicamentVfService.create(this.demandeMedicamentVf)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    DemandeMedicamentVfDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'demandeMedicamentVfListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DemandeMedicamentVfDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    DemandeMedicamentVfDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return DemandeMedicamentVfDialogComponent;
}());
DemandeMedicamentVfDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demande-medicament-vf-dialog',
        templateUrl: './demande-medicament-vf-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.AlertService,
        demande_medicament_vf_service_1.DemandeMedicamentVfService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], DemandeMedicamentVfDialogComponent);
exports.DemandeMedicamentVfDialogComponent = DemandeMedicamentVfDialogComponent;
var DemandeMedicamentVfPopupComponent = (function () {
    function DemandeMedicamentVfPopupComponent(route, demandeMedicamentVfPopupService) {
        this.route = route;
        this.demandeMedicamentVfPopupService = demandeMedicamentVfPopupService;
    }
    DemandeMedicamentVfPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.demandeMedicamentVfPopupService
                    .open(DemandeMedicamentVfDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.demandeMedicamentVfPopupService
                    .open(DemandeMedicamentVfDialogComponent);
            }
        });
    };
    DemandeMedicamentVfPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return DemandeMedicamentVfPopupComponent;
}());
DemandeMedicamentVfPopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demande-medicament-vf-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        demande_medicament_vf_popup_service_1.DemandeMedicamentVfPopupService])
], DemandeMedicamentVfPopupComponent);
exports.DemandeMedicamentVfPopupComponent = DemandeMedicamentVfPopupComponent;
//# sourceMappingURL=demande-medicament-vf-dialog.component.js.map
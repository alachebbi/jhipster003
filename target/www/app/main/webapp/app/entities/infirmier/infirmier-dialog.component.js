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
var infirmier_popup_service_1 = require("./infirmier-popup.service");
var infirmier_service_1 = require("./infirmier.service");
var InfirmierDialogComponent = (function () {
    function InfirmierDialogComponent(activeModal, jhiLanguageService, alertService, infirmierService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.alertService = alertService;
        this.infirmierService = infirmierService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['infirmier']);
    }
    InfirmierDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    InfirmierDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    InfirmierDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.infirmier.id !== undefined) {
            this.infirmierService.update(this.infirmier)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.infirmierService.create(this.infirmier)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    InfirmierDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'infirmierListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    InfirmierDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    InfirmierDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return InfirmierDialogComponent;
}());
InfirmierDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-infirmier-dialog',
        templateUrl: './infirmier-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.AlertService,
        infirmier_service_1.InfirmierService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], InfirmierDialogComponent);
exports.InfirmierDialogComponent = InfirmierDialogComponent;
var InfirmierPopupComponent = (function () {
    function InfirmierPopupComponent(route, infirmierPopupService) {
        this.route = route;
        this.infirmierPopupService = infirmierPopupService;
    }
    InfirmierPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.infirmierPopupService
                    .open(InfirmierDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.infirmierPopupService
                    .open(InfirmierDialogComponent);
            }
        });
    };
    InfirmierPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return InfirmierPopupComponent;
}());
InfirmierPopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-infirmier-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        infirmier_popup_service_1.InfirmierPopupService])
], InfirmierPopupComponent);
exports.InfirmierPopupComponent = InfirmierPopupComponent;
//# sourceMappingURL=infirmier-dialog.component.js.map
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
var forsys_popup_service_1 = require("./forsys-popup.service");
var forsys_service_1 = require("./forsys.service");
var ForsysDialogComponent = (function () {
    function ForsysDialogComponent(activeModal, jhiLanguageService, alertService, forsysService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.alertService = alertService;
        this.forsysService = forsysService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['forsys']);
    }
    ForsysDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    ForsysDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    ForsysDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.forsys.id !== undefined) {
            this.forsysService.update(this.forsys)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.forsysService.create(this.forsys)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    ForsysDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'forsysListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    ForsysDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    ForsysDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return ForsysDialogComponent;
}());
ForsysDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-forsys-dialog',
        templateUrl: './forsys-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.AlertService,
        forsys_service_1.ForsysService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], ForsysDialogComponent);
exports.ForsysDialogComponent = ForsysDialogComponent;
var ForsysPopupComponent = (function () {
    function ForsysPopupComponent(route, forsysPopupService) {
        this.route = route;
        this.forsysPopupService = forsysPopupService;
    }
    ForsysPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.forsysPopupService
                    .open(ForsysDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.forsysPopupService
                    .open(ForsysDialogComponent);
            }
        });
    };
    ForsysPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return ForsysPopupComponent;
}());
ForsysPopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-forsys-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        forsys_popup_service_1.ForsysPopupService])
], ForsysPopupComponent);
exports.ForsysPopupComponent = ForsysPopupComponent;
//# sourceMappingURL=forsys-dialog.component.js.map
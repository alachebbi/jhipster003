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
var reclamation_popup_service_1 = require("./reclamation-popup.service");
var reclamation_service_1 = require("./reclamation.service");
var ReclamationDialogComponent = (function () {
    function ReclamationDialogComponent(activeModal, jhiLanguageService, alertService, reclamationService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.alertService = alertService;
        this.reclamationService = reclamationService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['reclamation']);
    }
    ReclamationDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    ReclamationDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    ReclamationDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.reclamation.id !== undefined) {
            this.reclamationService.update(this.reclamation)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.reclamationService.create(this.reclamation)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    ReclamationDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'reclamationListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    ReclamationDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    ReclamationDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return ReclamationDialogComponent;
}());
ReclamationDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-reclamation-dialog',
        templateUrl: './reclamation-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.AlertService,
        reclamation_service_1.ReclamationService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], ReclamationDialogComponent);
exports.ReclamationDialogComponent = ReclamationDialogComponent;
var ReclamationPopupComponent = (function () {
    function ReclamationPopupComponent(route, reclamationPopupService) {
        this.route = route;
        this.reclamationPopupService = reclamationPopupService;
    }
    ReclamationPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.reclamationPopupService
                    .open(ReclamationDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.reclamationPopupService
                    .open(ReclamationDialogComponent);
            }
        });
    };
    ReclamationPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return ReclamationPopupComponent;
}());
ReclamationPopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-reclamation-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        reclamation_popup_service_1.ReclamationPopupService])
], ReclamationPopupComponent);
exports.ReclamationPopupComponent = ReclamationPopupComponent;
//# sourceMappingURL=reclamation-dialog.component.js.map
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
var demande_popup_service_1 = require("./demande-popup.service");
var demande_service_1 = require("./demande.service");
var DemandeDialogComponent = (function () {
    function DemandeDialogComponent(activeModal, jhiLanguageService, alertService, demandeService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.alertService = alertService;
        this.demandeService = demandeService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['demande']);
    }
    DemandeDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    DemandeDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DemandeDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.demande.id !== undefined) {
            this.demandeService.update(this.demande)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.demandeService.create(this.demande)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    DemandeDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'demandeListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DemandeDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    DemandeDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return DemandeDialogComponent;
}());
DemandeDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demande-dialog',
        templateUrl: './demande-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.AlertService,
        demande_service_1.DemandeService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], DemandeDialogComponent);
exports.DemandeDialogComponent = DemandeDialogComponent;
var DemandePopupComponent = (function () {
    function DemandePopupComponent(route, demandePopupService) {
        this.route = route;
        this.demandePopupService = demandePopupService;
    }
    DemandePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.demandePopupService
                    .open(DemandeDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.demandePopupService
                    .open(DemandeDialogComponent);
            }
        });
    };
    DemandePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return DemandePopupComponent;
}());
DemandePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demande-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        demande_popup_service_1.DemandePopupService])
], DemandePopupComponent);
exports.DemandePopupComponent = DemandePopupComponent;
//# sourceMappingURL=demande-dialog.component.js.map
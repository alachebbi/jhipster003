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
var demandemateriel_popup_service_1 = require("./demandemateriel-popup.service");
var demandemateriel_service_1 = require("./demandemateriel.service");
var DemandematerielDialogComponent = (function () {
    function DemandematerielDialogComponent(activeModal, jhiLanguageService, alertService, demandematerielService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.alertService = alertService;
        this.demandematerielService = demandematerielService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['demandemateriel']);
    }
    DemandematerielDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    DemandematerielDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DemandematerielDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.demandemateriel.id !== undefined) {
            this.demandematerielService.update(this.demandemateriel)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.demandematerielService.create(this.demandemateriel)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    DemandematerielDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'demandematerielListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DemandematerielDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    DemandematerielDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return DemandematerielDialogComponent;
}());
DemandematerielDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demandemateriel-dialog',
        templateUrl: './demandemateriel-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.AlertService,
        demandemateriel_service_1.DemandematerielService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], DemandematerielDialogComponent);
exports.DemandematerielDialogComponent = DemandematerielDialogComponent;
var DemandematerielPopupComponent = (function () {
    function DemandematerielPopupComponent(route, demandematerielPopupService) {
        this.route = route;
        this.demandematerielPopupService = demandematerielPopupService;
    }
    DemandematerielPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.demandematerielPopupService
                    .open(DemandematerielDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.demandematerielPopupService
                    .open(DemandematerielDialogComponent);
            }
        });
    };
    DemandematerielPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return DemandematerielPopupComponent;
}());
DemandematerielPopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demandemateriel-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        demandemateriel_popup_service_1.DemandematerielPopupService])
], DemandematerielPopupComponent);
exports.DemandematerielPopupComponent = DemandematerielPopupComponent;
//# sourceMappingURL=demandemateriel-dialog.component.js.map
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
var demandemedicament_popup_service_1 = require("./demandemedicament-popup.service");
var demandemedicament_service_1 = require("./demandemedicament.service");
var DemandemedicamentDialogComponent = (function () {
    function DemandemedicamentDialogComponent(activeModal, jhiLanguageService, alertService, demandemedicamentService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.alertService = alertService;
        this.demandemedicamentService = demandemedicamentService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['demandemedicament']);
    }
    DemandemedicamentDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    DemandemedicamentDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DemandemedicamentDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.demandemedicament.id !== undefined) {
            this.demandemedicamentService.update(this.demandemedicament)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.demandemedicamentService.create(this.demandemedicament)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    DemandemedicamentDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'demandemedicamentListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DemandemedicamentDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    DemandemedicamentDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return DemandemedicamentDialogComponent;
}());
DemandemedicamentDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demandemedicament-dialog',
        templateUrl: './demandemedicament-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.AlertService,
        demandemedicament_service_1.DemandemedicamentService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], DemandemedicamentDialogComponent);
exports.DemandemedicamentDialogComponent = DemandemedicamentDialogComponent;
var DemandemedicamentPopupComponent = (function () {
    function DemandemedicamentPopupComponent(route, demandemedicamentPopupService) {
        this.route = route;
        this.demandemedicamentPopupService = demandemedicamentPopupService;
    }
    DemandemedicamentPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.demandemedicamentPopupService
                    .open(DemandemedicamentDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.demandemedicamentPopupService
                    .open(DemandemedicamentDialogComponent);
            }
        });
    };
    DemandemedicamentPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return DemandemedicamentPopupComponent;
}());
DemandemedicamentPopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demandemedicament-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        demandemedicament_popup_service_1.DemandemedicamentPopupService])
], DemandemedicamentPopupComponent);
exports.DemandemedicamentPopupComponent = DemandemedicamentPopupComponent;
//# sourceMappingURL=demandemedicament-dialog.component.js.map
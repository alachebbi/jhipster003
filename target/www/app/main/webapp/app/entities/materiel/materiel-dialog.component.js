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
var materiel_popup_service_1 = require("./materiel-popup.service");
var materiel_service_1 = require("./materiel.service");
var MaterielDialogComponent = (function () {
    function MaterielDialogComponent(activeModal, jhiLanguageService, alertService, materielService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.alertService = alertService;
        this.materielService = materielService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['materiel']);
    }
    MaterielDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    MaterielDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    MaterielDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.materiel.id !== undefined) {
            this.materielService.update(this.materiel)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.materielService.create(this.materiel)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    MaterielDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'materielListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    MaterielDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    MaterielDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return MaterielDialogComponent;
}());
MaterielDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-materiel-dialog',
        templateUrl: './materiel-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.AlertService,
        materiel_service_1.MaterielService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], MaterielDialogComponent);
exports.MaterielDialogComponent = MaterielDialogComponent;
var MaterielPopupComponent = (function () {
    function MaterielPopupComponent(route, materielPopupService) {
        this.route = route;
        this.materielPopupService = materielPopupService;
    }
    MaterielPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.materielPopupService
                    .open(MaterielDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.materielPopupService
                    .open(MaterielDialogComponent);
            }
        });
    };
    MaterielPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return MaterielPopupComponent;
}());
MaterielPopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-materiel-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        materiel_popup_service_1.MaterielPopupService])
], MaterielPopupComponent);
exports.MaterielPopupComponent = MaterielPopupComponent;
//# sourceMappingURL=materiel-dialog.component.js.map
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
var medicament_service_1 = require("../medicament/medicament.service");
var traitement_popup_service_1 = require("./traitement-popup.service");
var traitement_service_1 = require("./traitement.service");
var TraitementDialogComponent = (function () {
    function TraitementDialogComponent(activeModal, jhiLanguageService, alertService, medicamentService, traitementService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.alertService = alertService;
        this.medicamentService = medicamentService;
        this.traitementService = traitementService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['traitement']);
    }
    TraitementDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.loadAllmaladies();
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    TraitementDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    TraitementDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.traitement.id !== undefined) {
            this.traitementService.update(this.traitement)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.traitementService.create(this.traitement)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    TraitementDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'traitementListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    TraitementDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    TraitementDialogComponent.prototype.loadAllmaladies = function () {
        var _this = this;
        this.medicamentService.query().subscribe(function (res) {
            _this.medicaments = res.json();
        }, function (res) { return _this.onError(res.json()); });
    };
    TraitementDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return TraitementDialogComponent;
}());
TraitementDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-traitement-dialog',
        templateUrl: './traitement-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.AlertService,
        medicament_service_1.MedicamentService,
        traitement_service_1.TraitementService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], TraitementDialogComponent);
exports.TraitementDialogComponent = TraitementDialogComponent;
var TraitementPopupComponent = (function () {
    function TraitementPopupComponent(route, traitementPopupService) {
        this.route = route;
        this.traitementPopupService = traitementPopupService;
    }
    TraitementPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.traitementPopupService
                    .open(TraitementDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.traitementPopupService
                    .open(TraitementDialogComponent);
            }
        });
    };
    TraitementPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return TraitementPopupComponent;
}());
TraitementPopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-traitement-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        traitement_popup_service_1.TraitementPopupService])
], TraitementPopupComponent);
exports.TraitementPopupComponent = TraitementPopupComponent;
//# sourceMappingURL=traitement-dialog.component.js.map
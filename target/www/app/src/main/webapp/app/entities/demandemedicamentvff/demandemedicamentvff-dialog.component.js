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
var demandemedicamentvff_popup_service_1 = require("./demandemedicamentvff-popup.service");
var demandemedicamentvff_service_1 = require("./demandemedicamentvff.service");
var medicament_service_1 = require("../medicament/medicament.service");
var DemandemedicamentvffDialogComponent = (function () {
    function DemandemedicamentvffDialogComponent(activeModal, jhiLanguageService, alertService, medicamentService, demandemedicamentvffService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.alertService = alertService;
        this.medicamentService = medicamentService;
        this.demandemedicamentvffService = demandemedicamentvffService;
        this.eventManager = eventManager;
        this.router = router;
        this.today = new Date();
        this.jhiLanguageService.setLocations(['demandemedicamentvff']);
    }
    DemandemedicamentvffDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.loadAllmed();
        this.demandemedicamentvff.etat = "en attente ";
        // this.demandemedicamentvff.date = new Date().toISOString();
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    DemandemedicamentvffDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DemandemedicamentvffDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.demandemedicamentvff.id !== undefined) {
            this.demandemedicamentvffService.update(this.demandemedicamentvff)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.demandemedicamentvffService.create(this.demandemedicamentvff)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    DemandemedicamentvffDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'demandemedicamentvffListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DemandemedicamentvffDialogComponent.prototype.loadAllmed = function () {
        var _this = this;
        this.medicamentService.query().subscribe(function (res) {
            _this.medicaments = res.json();
        }, function (res) { return _this.onError(res.json()); });
    };
    DemandemedicamentvffDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    DemandemedicamentvffDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return DemandemedicamentvffDialogComponent;
}());
DemandemedicamentvffDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demandemedicamentvff-dialog',
        templateUrl: './demandemedicamentvff-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.AlertService,
        medicament_service_1.MedicamentService,
        demandemedicamentvff_service_1.DemandemedicamentvffService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], DemandemedicamentvffDialogComponent);
exports.DemandemedicamentvffDialogComponent = DemandemedicamentvffDialogComponent;
var DemandemedicamentvffPopupComponent = (function () {
    function DemandemedicamentvffPopupComponent(route, demandemedicamentvffPopupService) {
        this.route = route;
        this.demandemedicamentvffPopupService = demandemedicamentvffPopupService;
    }
    DemandemedicamentvffPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.demandemedicamentvffPopupService
                    .open(DemandemedicamentvffDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.demandemedicamentvffPopupService
                    .open(DemandemedicamentvffDialogComponent);
            }
        });
    };
    DemandemedicamentvffPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return DemandemedicamentvffPopupComponent;
}());
DemandemedicamentvffPopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demandemedicamentvff-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        demandemedicamentvff_popup_service_1.DemandemedicamentvffPopupService])
], DemandemedicamentvffPopupComponent);
exports.DemandemedicamentvffPopupComponent = DemandemedicamentvffPopupComponent;
//# sourceMappingURL=demandemedicamentvff-dialog.component.js.map
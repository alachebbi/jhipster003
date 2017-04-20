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
var medicament_popup_servic_1 = require("./medicament-popup.servic");
var medicament_service_1 = require("./medicament.service");
var MedicamentDialogComponent = (function () {
    function MedicamentDialogComponent(activeModal, jhiLanguageService, alertService, medicamentService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.alertService = alertService;
        this.medicamentService = medicamentService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['medicament']);
    }
    MedicamentDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.loadAlldoc();
        this.loadAllmedi();
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    MedicamentDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    MedicamentDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.medicament.id !== undefined) {
            this.medicamentService.update(this.medicament)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.medicamentService.create(this.medicament)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    MedicamentDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'medicamentListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    MedicamentDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    MedicamentDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return MedicamentDialogComponent;
}());
MedicamentDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-medicament-dialog',
        templateUrl: './medicament-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.AlertService,
        medicament_service_1.MedicamentService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], MedicamentDialogComponent);
exports.MedicamentDialogComponent = MedicamentDialogComponent;
var MedicamentPopupComponent = (function () {
    function MedicamentPopupComponent(route, medicamentPopupService) {
        this.route = route;
        this.medicamentPopupService = medicamentPopupService;
    }
    MedicamentPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.medicamentPopupService
                    .open(MedicamentDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.medicamentPopupService
                    .open(MedicamentDialogComponent);
            }
        });
    };
    MedicamentPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return MedicamentPopupComponent;
}());
MedicamentPopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-medicament-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, typeof (_a = typeof medicament_popup_servic_1.MedicamentPopupService !== "undefined" && medicament_popup_servic_1.MedicamentPopupService) === "function" && _a || Object])
], MedicamentPopupComponent);
exports.MedicamentPopupComponent = MedicamentPopupComponent;
var _a;
//# sourceMappingURL=medicament-dialog.component.js.map
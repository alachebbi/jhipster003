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
var demandemedi_popup_service_1 = require("./demandemedi-popup.service");
var demandemedi_service_1 = require("./demandemedi.service");
var DemandemediDialogComponent = (function () {
    function DemandemediDialogComponent(activeModal, jhiLanguageService, alertService, demandemediService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.alertService = alertService;
        this.demandemediService = demandemediService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['demandemedi']);
    }
    DemandemediDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    DemandemediDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DemandemediDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.demandemedi.id !== undefined) {
            this.demandemediService.update(this.demandemedi)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.demandemediService.create(this.demandemedi)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    DemandemediDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'demandemediListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DemandemediDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    DemandemediDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return DemandemediDialogComponent;
}());
DemandemediDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demandemedi-dialog',
        templateUrl: './demandemedi-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.AlertService,
        demandemedi_service_1.DemandemediService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], DemandemediDialogComponent);
exports.DemandemediDialogComponent = DemandemediDialogComponent;
var DemandemediPopupComponent = (function () {
    function DemandemediPopupComponent(route, demandemediPopupService) {
        this.route = route;
        this.demandemediPopupService = demandemediPopupService;
    }
    DemandemediPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.demandemediPopupService
                    .open(DemandemediDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.demandemediPopupService
                    .open(DemandemediDialogComponent);
            }
        });
    };
    DemandemediPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return DemandemediPopupComponent;
}());
DemandemediPopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demandemedi-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        demandemedi_popup_service_1.DemandemediPopupService])
], DemandemediPopupComponent);
exports.DemandemediPopupComponent = DemandemediPopupComponent;
//# sourceMappingURL=demandemedi-dialog.component.js.map
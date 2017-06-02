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
var shared_1 = require("../../shared");
var demandepharmaciecentrale_popup_service_1 = require("./demandepharmaciecentrale-popup.service");
var demandepharmaciecentrale_service_1 = require("./demandepharmaciecentrale.service");
var DemandepharmaciecentraleDialogComponent = (function () {
    function DemandepharmaciecentraleDialogComponent(activeModal, jhiLanguageService, principal, alertService, demandepharmaciecentraleService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.principal = principal;
        this.alertService = alertService;
        this.demandepharmaciecentraleService = demandepharmaciecentraleService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['demandepharmaciecentrale']);
    }
    DemandepharmaciecentraleDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.account = account;
        });
        this.registerAuthenticationSuccess();
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    DemandepharmaciecentraleDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DemandepharmaciecentraleDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.demandepharmaciecentrale.id !== undefined) {
            this.demandepharmaciecentraleService.update(this.demandepharmaciecentrale)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            // this.demandepharmaciecentrale=new Demandepharmaciecentrale();
            this.demandepharmaciecentrale.date = new Date();
            this.demandepharmaciecentrale.mail = "ala-eddine.chebbi@forsyslab.com";
            this.demandepharmaciecentrale.nompharmacien = this.account.firstName;
            this.demandepharmaciecentraleService.create(this.demandepharmaciecentrale)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    DemandepharmaciecentraleDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'demandepharmaciecentraleListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DemandepharmaciecentraleDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    DemandepharmaciecentraleDialogComponent.prototype.registerAuthenticationSuccess = function () {
        var _this = this;
        this.eventManager.subscribe('authenticationSuccess', function (message) {
            _this.principal.identity().then(function (account) {
                _this.account = account;
            });
        });
    };
    DemandepharmaciecentraleDialogComponent.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    DemandepharmaciecentraleDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return DemandepharmaciecentraleDialogComponent;
}());
DemandepharmaciecentraleDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demandepharmaciecentrale-dialog',
        templateUrl: './demandepharmaciecentrale-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        shared_1.Principal,
        ng_jhipster_1.AlertService,
        demandepharmaciecentrale_service_1.DemandepharmaciecentraleService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], DemandepharmaciecentraleDialogComponent);
exports.DemandepharmaciecentraleDialogComponent = DemandepharmaciecentraleDialogComponent;
var DemandepharmaciecentralePopupComponent = (function () {
    function DemandepharmaciecentralePopupComponent(route, demandepharmaciecentralePopupService) {
        this.route = route;
        this.demandepharmaciecentralePopupService = demandepharmaciecentralePopupService;
    }
    DemandepharmaciecentralePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.demandepharmaciecentralePopupService
                    .open(DemandepharmaciecentraleDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.demandepharmaciecentralePopupService
                    .open(DemandepharmaciecentraleDialogComponent);
            }
        });
    };
    DemandepharmaciecentralePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return DemandepharmaciecentralePopupComponent;
}());
DemandepharmaciecentralePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demandepharmaciecentrale-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        demandepharmaciecentrale_popup_service_1.DemandepharmaciecentralePopupService])
], DemandepharmaciecentralePopupComponent);
exports.DemandepharmaciecentralePopupComponent = DemandepharmaciecentralePopupComponent;
//# sourceMappingURL=demandepharmaciecentrale-dialog.component.js.map
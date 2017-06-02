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
var service_popup_service_1 = require("./service-popup.service");
var service_service_1 = require("./service.service");
var ServiceDialogComponent = (function () {
    function ServiceDialogComponent(activeModal, jhiLanguageService, alertService, serviceService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.alertService = alertService;
        this.serviceService = serviceService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['service']);
    }
    ServiceDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    ServiceDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    ServiceDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.service.id !== undefined) {
            this.serviceService.update(this.service)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.serviceService.create(this.service)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    ServiceDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'serviceListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    ServiceDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    ServiceDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return ServiceDialogComponent;
}());
ServiceDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-service-dialog',
        templateUrl: './service-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.AlertService,
        service_service_1.ServiceService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], ServiceDialogComponent);
exports.ServiceDialogComponent = ServiceDialogComponent;
var ServicePopupComponent = (function () {
    function ServicePopupComponent(route, servicePopupService) {
        this.route = route;
        this.servicePopupService = servicePopupService;
    }
    ServicePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.servicePopupService
                    .open(ServiceDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.servicePopupService
                    .open(ServiceDialogComponent);
            }
        });
    };
    ServicePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return ServicePopupComponent;
}());
ServicePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-service-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        service_popup_service_1.ServicePopupService])
], ServicePopupComponent);
exports.ServicePopupComponent = ServicePopupComponent;
//# sourceMappingURL=service-dialog.component.js.map
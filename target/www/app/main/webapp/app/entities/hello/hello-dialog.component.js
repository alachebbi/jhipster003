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
var hello_popup_service_1 = require("./hello-popup.service");
var hello_service_1 = require("./hello.service");
var HelloDialogComponent = (function () {
    function HelloDialogComponent(activeModal, jhiLanguageService, medicamentService, alertService, helloService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.medicamentService = medicamentService;
        this.alertService = alertService;
        this.helloService = helloService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['hello']);
    }
    HelloDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.loadAllserv();
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    HelloDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    HelloDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.hello.id !== undefined) {
            this.helloService.update(this.hello)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.helloService.create(this.hello)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    HelloDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'helloListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    HelloDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    HelloDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    HelloDialogComponent.prototype.loadAllserv = function () {
        var _this = this;
        this.medicamentService.query().subscribe(function (res) {
            _this.medicaments = res.json();
        }, function (res) { return _this.onError(res.json()); });
    };
    return HelloDialogComponent;
}());
HelloDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-hello-dialog',
        templateUrl: './hello-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        medicament_service_1.MedicamentService,
        ng_jhipster_1.AlertService,
        hello_service_1.HelloService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], HelloDialogComponent);
exports.HelloDialogComponent = HelloDialogComponent;
var HelloPopupComponent = (function () {
    function HelloPopupComponent(route, helloPopupService) {
        this.route = route;
        this.helloPopupService = helloPopupService;
    }
    HelloPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.helloPopupService
                    .open(HelloDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.helloPopupService
                    .open(HelloDialogComponent);
            }
        });
    };
    HelloPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return HelloPopupComponent;
}());
HelloPopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-hello-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        hello_popup_service_1.HelloPopupService])
], HelloPopupComponent);
exports.HelloPopupComponent = HelloPopupComponent;
//# sourceMappingURL=hello-dialog.component.js.map
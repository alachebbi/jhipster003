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
var servicemedical_popup_service_1 = require("./servicemedical-popup.service");
var servicemedical_service_1 = require("./servicemedical.service");
var ServicemedicalDeleteDialogComponent = (function () {
    function ServicemedicalDeleteDialogComponent(jhiLanguageService, servicemedicalService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.servicemedicalService = servicemedicalService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['servicemedical']);
    }
    ServicemedicalDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    ServicemedicalDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.servicemedicalService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'servicemedicalListModification',
                content: 'Deleted an servicemedical'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return ServicemedicalDeleteDialogComponent;
}());
ServicemedicalDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-servicemedical-delete-dialog',
        templateUrl: './servicemedical-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        servicemedical_service_1.ServicemedicalService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], ServicemedicalDeleteDialogComponent);
exports.ServicemedicalDeleteDialogComponent = ServicemedicalDeleteDialogComponent;
var ServicemedicalDeletePopupComponent = (function () {
    function ServicemedicalDeletePopupComponent(route, servicemedicalPopupService) {
        this.route = route;
        this.servicemedicalPopupService = servicemedicalPopupService;
    }
    ServicemedicalDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.servicemedicalPopupService
                .open(ServicemedicalDeleteDialogComponent, params['id']);
        });
    };
    ServicemedicalDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return ServicemedicalDeletePopupComponent;
}());
ServicemedicalDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-servicemedical-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        servicemedical_popup_service_1.ServicemedicalPopupService])
], ServicemedicalDeletePopupComponent);
exports.ServicemedicalDeletePopupComponent = ServicemedicalDeletePopupComponent;
//# sourceMappingURL=servicemedical-delete-dialog.component.js.map
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
var pharmacien_popup_service_1 = require("./pharmacien-popup.service");
var pharmacien_service_1 = require("./pharmacien.service");
var PharmacienDeleteDialogComponent = (function () {
    function PharmacienDeleteDialogComponent(jhiLanguageService, pharmacienService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.pharmacienService = pharmacienService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['pharmacien']);
    }
    PharmacienDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    PharmacienDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.pharmacienService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'pharmacienListModification',
                content: 'Deleted an pharmacien'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return PharmacienDeleteDialogComponent;
}());
PharmacienDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-pharmacien-delete-dialog',
        templateUrl: './pharmacien-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        pharmacien_service_1.PharmacienService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], PharmacienDeleteDialogComponent);
exports.PharmacienDeleteDialogComponent = PharmacienDeleteDialogComponent;
var PharmacienDeletePopupComponent = (function () {
    function PharmacienDeletePopupComponent(route, pharmacienPopupService) {
        this.route = route;
        this.pharmacienPopupService = pharmacienPopupService;
    }
    PharmacienDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.pharmacienPopupService
                .open(PharmacienDeleteDialogComponent, params['id']);
        });
    };
    PharmacienDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return PharmacienDeletePopupComponent;
}());
PharmacienDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-pharmacien-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        pharmacien_popup_service_1.PharmacienPopupService])
], PharmacienDeletePopupComponent);
exports.PharmacienDeletePopupComponent = PharmacienDeletePopupComponent;
//# sourceMappingURL=pharmacien-delete-dialog.component.js.map
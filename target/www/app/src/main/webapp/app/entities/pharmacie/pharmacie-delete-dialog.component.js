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
var pharmacie_popup_service_1 = require("./pharmacie-popup.service");
var pharmacie_service_1 = require("./pharmacie.service");
var PharmacieDeleteDialogComponent = (function () {
    function PharmacieDeleteDialogComponent(jhiLanguageService, pharmacieService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.pharmacieService = pharmacieService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['pharmacie']);
    }
    PharmacieDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    PharmacieDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.pharmacieService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'pharmacieListModification',
                content: 'Deleted an pharmacie'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return PharmacieDeleteDialogComponent;
}());
PharmacieDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-pharmacie-delete-dialog',
        templateUrl: './pharmacie-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        pharmacie_service_1.PharmacieService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], PharmacieDeleteDialogComponent);
exports.PharmacieDeleteDialogComponent = PharmacieDeleteDialogComponent;
var PharmacieDeletePopupComponent = (function () {
    function PharmacieDeletePopupComponent(route, pharmaciePopupService) {
        this.route = route;
        this.pharmaciePopupService = pharmaciePopupService;
    }
    PharmacieDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.pharmaciePopupService
                .open(PharmacieDeleteDialogComponent, params['id']);
        });
    };
    PharmacieDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return PharmacieDeletePopupComponent;
}());
PharmacieDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-pharmacie-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        pharmacie_popup_service_1.PharmaciePopupService])
], PharmacieDeletePopupComponent);
exports.PharmacieDeletePopupComponent = PharmacieDeletePopupComponent;
//# sourceMappingURL=pharmacie-delete-dialog.component.js.map
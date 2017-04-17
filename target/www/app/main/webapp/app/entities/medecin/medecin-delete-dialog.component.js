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
var medecin_popup_service_1 = require("./medecin-popup.service");
var medecin_service_1 = require("./medecin.service");
var MedecinDeleteDialogComponent = (function () {
    function MedecinDeleteDialogComponent(jhiLanguageService, medecinService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.medecinService = medecinService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['medecin']);
    }
    MedecinDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    MedecinDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.medecinService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'medecinListModification',
                content: 'Deleted an medecin'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return MedecinDeleteDialogComponent;
}());
MedecinDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-medecin-delete-dialog',
        templateUrl: './medecin-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        medecin_service_1.MedecinService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], MedecinDeleteDialogComponent);
exports.MedecinDeleteDialogComponent = MedecinDeleteDialogComponent;
var MedecinDeletePopupComponent = (function () {
    function MedecinDeletePopupComponent(route, medecinPopupService) {
        this.route = route;
        this.medecinPopupService = medecinPopupService;
    }
    MedecinDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.medecinPopupService
                .open(MedecinDeleteDialogComponent, params['id']);
        });
    };
    MedecinDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return MedecinDeletePopupComponent;
}());
MedecinDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-medecin-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        medecin_popup_service_1.MedecinPopupService])
], MedecinDeletePopupComponent);
exports.MedecinDeletePopupComponent = MedecinDeletePopupComponent;
//# sourceMappingURL=medecin-delete-dialog.component.js.map
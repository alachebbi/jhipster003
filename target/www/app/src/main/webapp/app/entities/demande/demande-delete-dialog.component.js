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
var demande_popup_service_1 = require("./demande-popup.service");
var demande_service_1 = require("./demande.service");
var DemandeDeleteDialogComponent = (function () {
    function DemandeDeleteDialogComponent(jhiLanguageService, demandeService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.demandeService = demandeService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['demande']);
    }
    DemandeDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DemandeDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.demandeService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'demandeListModification',
                content: 'Deleted an demande'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return DemandeDeleteDialogComponent;
}());
DemandeDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demande-delete-dialog',
        templateUrl: './demande-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        demande_service_1.DemandeService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], DemandeDeleteDialogComponent);
exports.DemandeDeleteDialogComponent = DemandeDeleteDialogComponent;
var DemandeDeletePopupComponent = (function () {
    function DemandeDeletePopupComponent(route, demandePopupService) {
        this.route = route;
        this.demandePopupService = demandePopupService;
    }
    DemandeDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.demandePopupService
                .open(DemandeDeleteDialogComponent, params['id']);
        });
    };
    DemandeDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return DemandeDeletePopupComponent;
}());
DemandeDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demande-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        demande_popup_service_1.DemandePopupService])
], DemandeDeletePopupComponent);
exports.DemandeDeletePopupComponent = DemandeDeletePopupComponent;
//# sourceMappingURL=demande-delete-dialog.component.js.map
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
var demandepharmaciecentrale_popup_service_1 = require("./demandepharmaciecentrale-popup.service");
var demandepharmaciecentrale_service_1 = require("./demandepharmaciecentrale.service");
var DemandepharmaciecentraleDeleteDialogComponent = (function () {
    function DemandepharmaciecentraleDeleteDialogComponent(jhiLanguageService, demandepharmaciecentraleService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.demandepharmaciecentraleService = demandepharmaciecentraleService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['demandepharmaciecentrale']);
    }
    DemandepharmaciecentraleDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DemandepharmaciecentraleDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.demandepharmaciecentraleService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'demandepharmaciecentraleListModification',
                content: 'Deleted an demandepharmaciecentrale'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return DemandepharmaciecentraleDeleteDialogComponent;
}());
DemandepharmaciecentraleDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demandepharmaciecentrale-delete-dialog',
        templateUrl: './demandepharmaciecentrale-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        demandepharmaciecentrale_service_1.DemandepharmaciecentraleService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], DemandepharmaciecentraleDeleteDialogComponent);
exports.DemandepharmaciecentraleDeleteDialogComponent = DemandepharmaciecentraleDeleteDialogComponent;
var DemandepharmaciecentraleDeletePopupComponent = (function () {
    function DemandepharmaciecentraleDeletePopupComponent(route, demandepharmaciecentralePopupService) {
        this.route = route;
        this.demandepharmaciecentralePopupService = demandepharmaciecentralePopupService;
    }
    DemandepharmaciecentraleDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.demandepharmaciecentralePopupService
                .open(DemandepharmaciecentraleDeleteDialogComponent, params['id']);
        });
    };
    DemandepharmaciecentraleDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return DemandepharmaciecentraleDeletePopupComponent;
}());
DemandepharmaciecentraleDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demandepharmaciecentrale-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        demandepharmaciecentrale_popup_service_1.DemandepharmaciecentralePopupService])
], DemandepharmaciecentraleDeletePopupComponent);
exports.DemandepharmaciecentraleDeletePopupComponent = DemandepharmaciecentraleDeletePopupComponent;
//# sourceMappingURL=demandepharmaciecentrale-delete-dialog.component.js.map
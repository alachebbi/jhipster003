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
var chef_service_popup_service_1 = require("./chef-service-popup.service");
var chef_service_service_1 = require("./chef-service.service");
var ChefServiceDeleteDialogComponent = (function () {
    function ChefServiceDeleteDialogComponent(jhiLanguageService, chefServiceService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.chefServiceService = chefServiceService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['chefService']);
    }
    ChefServiceDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    ChefServiceDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.chefServiceService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'chefServiceListModification',
                content: 'Deleted an chefService'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return ChefServiceDeleteDialogComponent;
}());
ChefServiceDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-chef-service-delete-dialog',
        templateUrl: './chef-service-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        chef_service_service_1.ChefServiceService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], ChefServiceDeleteDialogComponent);
exports.ChefServiceDeleteDialogComponent = ChefServiceDeleteDialogComponent;
var ChefServiceDeletePopupComponent = (function () {
    function ChefServiceDeletePopupComponent(route, chefServicePopupService) {
        this.route = route;
        this.chefServicePopupService = chefServicePopupService;
    }
    ChefServiceDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.chefServicePopupService
                .open(ChefServiceDeleteDialogComponent, params['id']);
        });
    };
    ChefServiceDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return ChefServiceDeletePopupComponent;
}());
ChefServiceDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-chef-service-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        chef_service_popup_service_1.ChefServicePopupService])
], ChefServiceDeletePopupComponent);
exports.ChefServiceDeletePopupComponent = ChefServiceDeletePopupComponent;
//# sourceMappingURL=chef-service-delete-dialog.component.js.map
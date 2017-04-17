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
var infirmier_popup_service_1 = require("./infirmier-popup.service");
var infirmier_service_1 = require("./infirmier.service");
var InfirmierDeleteDialogComponent = (function () {
    function InfirmierDeleteDialogComponent(jhiLanguageService, infirmierService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.infirmierService = infirmierService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['infirmier']);
    }
    InfirmierDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    InfirmierDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.infirmierService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'infirmierListModification',
                content: 'Deleted an infirmier'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return InfirmierDeleteDialogComponent;
}());
InfirmierDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-infirmier-delete-dialog',
        templateUrl: './infirmier-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        infirmier_service_1.InfirmierService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], InfirmierDeleteDialogComponent);
exports.InfirmierDeleteDialogComponent = InfirmierDeleteDialogComponent;
var InfirmierDeletePopupComponent = (function () {
    function InfirmierDeletePopupComponent(route, infirmierPopupService) {
        this.route = route;
        this.infirmierPopupService = infirmierPopupService;
    }
    InfirmierDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.infirmierPopupService
                .open(InfirmierDeleteDialogComponent, params['id']);
        });
    };
    InfirmierDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return InfirmierDeletePopupComponent;
}());
InfirmierDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-infirmier-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        infirmier_popup_service_1.InfirmierPopupService])
], InfirmierDeletePopupComponent);
exports.InfirmierDeletePopupComponent = InfirmierDeletePopupComponent;
//# sourceMappingURL=infirmier-delete-dialog.component.js.map
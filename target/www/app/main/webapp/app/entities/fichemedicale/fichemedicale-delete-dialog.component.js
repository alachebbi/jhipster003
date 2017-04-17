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
var fichemedicale_popup_service_1 = require("./fichemedicale-popup.service");
var fichemedicale_service_1 = require("./fichemedicale.service");
var FichemedicaleDeleteDialogComponent = (function () {
    function FichemedicaleDeleteDialogComponent(jhiLanguageService, fichemedicaleService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.fichemedicaleService = fichemedicaleService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['fichemedicale']);
    }
    FichemedicaleDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    FichemedicaleDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.fichemedicaleService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'fichemedicaleListModification',
                content: 'Deleted an fichemedicale'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return FichemedicaleDeleteDialogComponent;
}());
FichemedicaleDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-fichemedicale-delete-dialog',
        templateUrl: './fichemedicale-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        fichemedicale_service_1.FichemedicaleService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], FichemedicaleDeleteDialogComponent);
exports.FichemedicaleDeleteDialogComponent = FichemedicaleDeleteDialogComponent;
var FichemedicaleDeletePopupComponent = (function () {
    function FichemedicaleDeletePopupComponent(route, fichemedicalePopupService) {
        this.route = route;
        this.fichemedicalePopupService = fichemedicalePopupService;
    }
    FichemedicaleDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.fichemedicalePopupService
                .open(FichemedicaleDeleteDialogComponent, params['id']);
        });
    };
    FichemedicaleDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return FichemedicaleDeletePopupComponent;
}());
FichemedicaleDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-fichemedicale-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        fichemedicale_popup_service_1.FichemedicalePopupService])
], FichemedicaleDeletePopupComponent);
exports.FichemedicaleDeletePopupComponent = FichemedicaleDeletePopupComponent;
//# sourceMappingURL=fichemedicale-delete-dialog.component.js.map
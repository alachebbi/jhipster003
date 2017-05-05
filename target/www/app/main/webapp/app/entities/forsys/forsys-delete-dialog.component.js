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
var forsys_popup_service_1 = require("./forsys-popup.service");
var forsys_service_1 = require("./forsys.service");
var ForsysDeleteDialogComponent = (function () {
    function ForsysDeleteDialogComponent(jhiLanguageService, forsysService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.forsysService = forsysService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['forsys']);
    }
    ForsysDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    ForsysDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.forsysService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'forsysListModification',
                content: 'Deleted an forsys'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return ForsysDeleteDialogComponent;
}());
ForsysDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-forsys-delete-dialog',
        templateUrl: './forsys-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        forsys_service_1.ForsysService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], ForsysDeleteDialogComponent);
exports.ForsysDeleteDialogComponent = ForsysDeleteDialogComponent;
var ForsysDeletePopupComponent = (function () {
    function ForsysDeletePopupComponent(route, forsysPopupService) {
        this.route = route;
        this.forsysPopupService = forsysPopupService;
    }
    ForsysDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.forsysPopupService
                .open(ForsysDeleteDialogComponent, params['id']);
        });
    };
    ForsysDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return ForsysDeletePopupComponent;
}());
ForsysDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-forsys-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        forsys_popup_service_1.ForsysPopupService])
], ForsysDeletePopupComponent);
exports.ForsysDeletePopupComponent = ForsysDeletePopupComponent;
//# sourceMappingURL=forsys-delete-dialog.component.js.map
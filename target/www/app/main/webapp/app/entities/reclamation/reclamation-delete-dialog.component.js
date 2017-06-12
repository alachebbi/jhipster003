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
var reclamation_popup_service_1 = require("./reclamation-popup.service");
var reclamation_service_1 = require("./reclamation.service");
var ReclamationDeleteDialogComponent = (function () {
    function ReclamationDeleteDialogComponent(jhiLanguageService, reclamationService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.reclamationService = reclamationService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['reclamation']);
    }
    ReclamationDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    ReclamationDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.reclamationService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'reclamationListModification',
                content: 'Deleted an reclamation'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return ReclamationDeleteDialogComponent;
}());
ReclamationDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-reclamation-delete-dialog',
        templateUrl: './reclamation-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        reclamation_service_1.ReclamationService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], ReclamationDeleteDialogComponent);
exports.ReclamationDeleteDialogComponent = ReclamationDeleteDialogComponent;
var ReclamationDeletePopupComponent = (function () {
    function ReclamationDeletePopupComponent(route, reclamationPopupService) {
        this.route = route;
        this.reclamationPopupService = reclamationPopupService;
    }
    ReclamationDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.reclamationPopupService
                .open(ReclamationDeleteDialogComponent, params['id']);
        });
    };
    ReclamationDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return ReclamationDeletePopupComponent;
}());
ReclamationDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-reclamation-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        reclamation_popup_service_1.ReclamationPopupService])
], ReclamationDeletePopupComponent);
exports.ReclamationDeletePopupComponent = ReclamationDeletePopupComponent;
//# sourceMappingURL=reclamation-delete-dialog.component.js.map
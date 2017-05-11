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
var evenement_popup_service_1 = require("./evenement-popup.service");
var evenement_service_1 = require("./evenement.service");
var EvenementDeleteDialogComponent = (function () {
    function EvenementDeleteDialogComponent(jhiLanguageService, evenementService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.evenementService = evenementService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['evenement']);
    }
    EvenementDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    EvenementDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.evenementService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'evenementListModification',
                content: 'Deleted an evenement'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return EvenementDeleteDialogComponent;
}());
EvenementDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-evenement-delete-dialog',
        templateUrl: './evenement-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        evenement_service_1.EvenementService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], EvenementDeleteDialogComponent);
exports.EvenementDeleteDialogComponent = EvenementDeleteDialogComponent;
var EvenementDeletePopupComponent = (function () {
    function EvenementDeletePopupComponent(route, evenementPopupService) {
        this.route = route;
        this.evenementPopupService = evenementPopupService;
    }
    EvenementDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.evenementPopupService
                .open(EvenementDeleteDialogComponent, params['id']);
        });
    };
    EvenementDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return EvenementDeletePopupComponent;
}());
EvenementDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-evenement-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        evenement_popup_service_1.EvenementPopupService])
], EvenementDeletePopupComponent);
exports.EvenementDeletePopupComponent = EvenementDeletePopupComponent;
//# sourceMappingURL=evenement-delete-dialog.component.js.map
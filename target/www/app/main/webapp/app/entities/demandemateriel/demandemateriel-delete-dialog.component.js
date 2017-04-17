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
var demandemateriel_popup_service_1 = require("./demandemateriel-popup.service");
var demandemateriel_service_1 = require("./demandemateriel.service");
var DemandematerielDeleteDialogComponent = (function () {
    function DemandematerielDeleteDialogComponent(jhiLanguageService, demandematerielService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.demandematerielService = demandematerielService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['demandemateriel']);
    }
    DemandematerielDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DemandematerielDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.demandematerielService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'demandematerielListModification',
                content: 'Deleted an demandemateriel'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return DemandematerielDeleteDialogComponent;
}());
DemandematerielDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demandemateriel-delete-dialog',
        templateUrl: './demandemateriel-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        demandemateriel_service_1.DemandematerielService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], DemandematerielDeleteDialogComponent);
exports.DemandematerielDeleteDialogComponent = DemandematerielDeleteDialogComponent;
var DemandematerielDeletePopupComponent = (function () {
    function DemandematerielDeletePopupComponent(route, demandematerielPopupService) {
        this.route = route;
        this.demandematerielPopupService = demandematerielPopupService;
    }
    DemandematerielDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.demandematerielPopupService
                .open(DemandematerielDeleteDialogComponent, params['id']);
        });
    };
    DemandematerielDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return DemandematerielDeletePopupComponent;
}());
DemandematerielDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demandemateriel-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        demandemateriel_popup_service_1.DemandematerielPopupService])
], DemandematerielDeletePopupComponent);
exports.DemandematerielDeletePopupComponent = DemandematerielDeletePopupComponent;
//# sourceMappingURL=demandemateriel-delete-dialog.component.js.map
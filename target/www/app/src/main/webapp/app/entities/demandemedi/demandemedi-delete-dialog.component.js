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
var demandemedi_popup_service_1 = require("./demandemedi-popup.service");
var demandemedi_service_1 = require("./demandemedi.service");
var DemandemediDeleteDialogComponent = (function () {
    function DemandemediDeleteDialogComponent(jhiLanguageService, demandemediService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.demandemediService = demandemediService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['demandemedi']);
    }
    DemandemediDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DemandemediDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.demandemediService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'demandemediListModification',
                content: 'Deleted an demandemedi'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return DemandemediDeleteDialogComponent;
}());
DemandemediDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demandemedi-delete-dialog',
        templateUrl: './demandemedi-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        demandemedi_service_1.DemandemediService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], DemandemediDeleteDialogComponent);
exports.DemandemediDeleteDialogComponent = DemandemediDeleteDialogComponent;
var DemandemediDeletePopupComponent = (function () {
    function DemandemediDeletePopupComponent(route, demandemediPopupService) {
        this.route = route;
        this.demandemediPopupService = demandemediPopupService;
    }
    DemandemediDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.demandemediPopupService
                .open(DemandemediDeleteDialogComponent, params['id']);
        });
    };
    DemandemediDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return DemandemediDeletePopupComponent;
}());
DemandemediDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demandemedi-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        demandemedi_popup_service_1.DemandemediPopupService])
], DemandemediDeletePopupComponent);
exports.DemandemediDeletePopupComponent = DemandemediDeletePopupComponent;
//# sourceMappingURL=demandemedi-delete-dialog.component.js.map
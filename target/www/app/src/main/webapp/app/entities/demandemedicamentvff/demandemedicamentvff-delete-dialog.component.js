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
var demandemedicamentvff_popup_service_1 = require("./demandemedicamentvff-popup.service");
var demandemedicamentvff_service_1 = require("./demandemedicamentvff.service");
var DemandemedicamentvffDeleteDialogComponent = (function () {
    function DemandemedicamentvffDeleteDialogComponent(jhiLanguageService, demandemedicamentvffService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.demandemedicamentvffService = demandemedicamentvffService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['demandemedicamentvff']);
    }
    DemandemedicamentvffDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DemandemedicamentvffDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.demandemedicamentvffService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'demandemedicamentvffListModification',
                content: 'Deleted an demandemedicamentvff'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return DemandemedicamentvffDeleteDialogComponent;
}());
DemandemedicamentvffDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demandemedicamentvff-delete-dialog',
        templateUrl: './demandemedicamentvff-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        demandemedicamentvff_service_1.DemandemedicamentvffService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], DemandemedicamentvffDeleteDialogComponent);
exports.DemandemedicamentvffDeleteDialogComponent = DemandemedicamentvffDeleteDialogComponent;
var DemandemedicamentvffDeletePopupComponent = (function () {
    function DemandemedicamentvffDeletePopupComponent(route, demandemedicamentvffPopupService) {
        this.route = route;
        this.demandemedicamentvffPopupService = demandemedicamentvffPopupService;
    }
    DemandemedicamentvffDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.demandemedicamentvffPopupService
                .open(DemandemedicamentvffDeleteDialogComponent, params['id']);
        });
    };
    DemandemedicamentvffDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return DemandemedicamentvffDeletePopupComponent;
}());
DemandemedicamentvffDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demandemedicamentvff-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        demandemedicamentvff_popup_service_1.DemandemedicamentvffPopupService])
], DemandemedicamentvffDeletePopupComponent);
exports.DemandemedicamentvffDeletePopupComponent = DemandemedicamentvffDeletePopupComponent;
//# sourceMappingURL=demandemedicamentvff-delete-dialog.component.js.map
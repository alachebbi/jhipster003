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
var demandemedicament_popup_service_1 = require("./demandemedicament-popup.service");
var demandemedicament_service_1 = require("./demandemedicament.service");
var DemandemedicamentDeleteDialogComponent = (function () {
    function DemandemedicamentDeleteDialogComponent(jhiLanguageService, demandemedicamentService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.demandemedicamentService = demandemedicamentService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['demandemedicament']);
    }
    DemandemedicamentDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DemandemedicamentDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.demandemedicamentService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'demandemedicamentListModification',
                content: 'Deleted an demandemedicament'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return DemandemedicamentDeleteDialogComponent;
}());
DemandemedicamentDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demandemedicament-delete-dialog',
        templateUrl: './demandemedicament-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        demandemedicament_service_1.DemandemedicamentService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], DemandemedicamentDeleteDialogComponent);
exports.DemandemedicamentDeleteDialogComponent = DemandemedicamentDeleteDialogComponent;
var DemandemedicamentDeletePopupComponent = (function () {
    function DemandemedicamentDeletePopupComponent(route, demandemedicamentPopupService) {
        this.route = route;
        this.demandemedicamentPopupService = demandemedicamentPopupService;
    }
    DemandemedicamentDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.demandemedicamentPopupService
                .open(DemandemedicamentDeleteDialogComponent, params['id']);
        });
    };
    DemandemedicamentDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return DemandemedicamentDeletePopupComponent;
}());
DemandemedicamentDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demandemedicament-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        demandemedicament_popup_service_1.DemandemedicamentPopupService])
], DemandemedicamentDeletePopupComponent);
exports.DemandemedicamentDeletePopupComponent = DemandemedicamentDeletePopupComponent;
//# sourceMappingURL=demandemedicament-delete-dialog.component.js.map
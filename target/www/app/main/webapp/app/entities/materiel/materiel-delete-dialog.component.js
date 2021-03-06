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
var materiel_popup_service_1 = require("./materiel-popup.service");
var materiel_service_1 = require("./materiel.service");
var MaterielDeleteDialogComponent = (function () {
    function MaterielDeleteDialogComponent(jhiLanguageService, materielService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.materielService = materielService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['materiel']);
    }
    MaterielDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    MaterielDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.materielService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'materielListModification',
                content: 'Deleted an materiel'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return MaterielDeleteDialogComponent;
}());
MaterielDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-materiel-delete-dialog',
        templateUrl: './materiel-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        materiel_service_1.MaterielService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], MaterielDeleteDialogComponent);
exports.MaterielDeleteDialogComponent = MaterielDeleteDialogComponent;
var MaterielDeletePopupComponent = (function () {
    function MaterielDeletePopupComponent(route, materielPopupService) {
        this.route = route;
        this.materielPopupService = materielPopupService;
    }
    MaterielDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.materielPopupService
                .open(MaterielDeleteDialogComponent, params['id']);
        });
    };
    MaterielDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return MaterielDeletePopupComponent;
}());
MaterielDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-materiel-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        materiel_popup_service_1.MaterielPopupService])
], MaterielDeletePopupComponent);
exports.MaterielDeletePopupComponent = MaterielDeletePopupComponent;
//# sourceMappingURL=materiel-delete-dialog.component.js.map
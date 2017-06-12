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
var dossier_medical_popup_service_1 = require("./dossier-medical-popup.service");
var dossier_medical_service_1 = require("./dossier-medical.service");
var DossierMedicalDeleteDialogComponent = (function () {
    function DossierMedicalDeleteDialogComponent(jhiLanguageService, dossierMedicalService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.dossierMedicalService = dossierMedicalService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['dossierMedical']);
    }
    DossierMedicalDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DossierMedicalDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.dossierMedicalService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'dossierMedicalListModification',
                content: 'Deleted an dossierMedical'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return DossierMedicalDeleteDialogComponent;
}());
DossierMedicalDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-dossier-medical-delete-dialog',
        templateUrl: './dossier-medical-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        dossier_medical_service_1.DossierMedicalService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], DossierMedicalDeleteDialogComponent);
exports.DossierMedicalDeleteDialogComponent = DossierMedicalDeleteDialogComponent;
var DossierMedicalDeletePopupComponent = (function () {
    function DossierMedicalDeletePopupComponent(route, dossierMedicalPopupService) {
        this.route = route;
        this.dossierMedicalPopupService = dossierMedicalPopupService;
    }
    DossierMedicalDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.dossierMedicalPopupService
                .open(DossierMedicalDeleteDialogComponent, params['id']);
        });
    };
    DossierMedicalDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return DossierMedicalDeletePopupComponent;
}());
DossierMedicalDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-dossier-medical-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        dossier_medical_popup_service_1.DossierMedicalPopupService])
], DossierMedicalDeletePopupComponent);
exports.DossierMedicalDeletePopupComponent = DossierMedicalDeletePopupComponent;
//# sourceMappingURL=dossier-medical-delete-dialog.component.js.map
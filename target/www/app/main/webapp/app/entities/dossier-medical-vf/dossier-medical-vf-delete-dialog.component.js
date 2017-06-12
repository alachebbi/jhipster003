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
var dossier_medical_vf_popup_service_1 = require("./dossier-medical-vf-popup.service");
var dossier_medical_vf_service_1 = require("./dossier-medical-vf.service");
var DossierMedicalVFDeleteDialogComponent = (function () {
    function DossierMedicalVFDeleteDialogComponent(jhiLanguageService, dossierMedicalVFService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.dossierMedicalVFService = dossierMedicalVFService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['dossierMedicalVF']);
    }
    DossierMedicalVFDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DossierMedicalVFDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.dossierMedicalVFService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'dossierMedicalVFListModification',
                content: 'Deleted an dossierMedicalVF'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return DossierMedicalVFDeleteDialogComponent;
}());
DossierMedicalVFDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-dossier-medical-vf-delete-dialog',
        templateUrl: './dossier-medical-vf-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        dossier_medical_vf_service_1.DossierMedicalVFService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], DossierMedicalVFDeleteDialogComponent);
exports.DossierMedicalVFDeleteDialogComponent = DossierMedicalVFDeleteDialogComponent;
var DossierMedicalVFDeletePopupComponent = (function () {
    function DossierMedicalVFDeletePopupComponent(route, dossierMedicalVFPopupService) {
        this.route = route;
        this.dossierMedicalVFPopupService = dossierMedicalVFPopupService;
    }
    DossierMedicalVFDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.dossierMedicalVFPopupService
                .open(DossierMedicalVFDeleteDialogComponent, params['id']);
        });
    };
    DossierMedicalVFDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return DossierMedicalVFDeletePopupComponent;
}());
DossierMedicalVFDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-dossier-medical-vf-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        dossier_medical_vf_popup_service_1.DossierMedicalVFPopupService])
], DossierMedicalVFDeletePopupComponent);
exports.DossierMedicalVFDeletePopupComponent = DossierMedicalVFDeletePopupComponent;
//# sourceMappingURL=dossier-medical-vf-delete-dialog.component.js.map
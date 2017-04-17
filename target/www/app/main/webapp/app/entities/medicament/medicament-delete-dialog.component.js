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
var medicament_popup_service_1 = require("./medicament-popup.service");
var medicament_service_1 = require("./medicament.service");
var MedicamentDeleteDialogComponent = (function () {
    function MedicamentDeleteDialogComponent(jhiLanguageService, medicamentService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.medicamentService = medicamentService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['medicament']);
    }
    MedicamentDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    MedicamentDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.medicamentService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'medicamentListModification',
                content: 'Deleted an medicament'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return MedicamentDeleteDialogComponent;
}());
MedicamentDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-medicament-delete-dialog',
        templateUrl: './medicament-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        medicament_service_1.MedicamentService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], MedicamentDeleteDialogComponent);
exports.MedicamentDeleteDialogComponent = MedicamentDeleteDialogComponent;
var MedicamentDeletePopupComponent = (function () {
    function MedicamentDeletePopupComponent(route, medicamentPopupService) {
        this.route = route;
        this.medicamentPopupService = medicamentPopupService;
    }
    MedicamentDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.medicamentPopupService
                .open(MedicamentDeleteDialogComponent, params['id']);
        });
    };
    MedicamentDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return MedicamentDeletePopupComponent;
}());
MedicamentDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-medicament-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        medicament_popup_service_1.MedicamentPopupService])
], MedicamentDeletePopupComponent);
exports.MedicamentDeletePopupComponent = MedicamentDeletePopupComponent;
//# sourceMappingURL=medicament-delete-dialog.component.js.map
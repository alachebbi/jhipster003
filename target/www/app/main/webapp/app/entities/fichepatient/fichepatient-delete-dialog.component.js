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
var fichepatient_popup_service_1 = require("./fichepatient-popup.service");
var fichepatient_service_1 = require("./fichepatient.service");
var FichepatientDeleteDialogComponent = (function () {
    function FichepatientDeleteDialogComponent(jhiLanguageService, fichepatientService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.fichepatientService = fichepatientService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['fichepatient']);
    }
    FichepatientDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    FichepatientDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.fichepatientService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'fichepatientListModification',
                content: 'Deleted an fichepatient'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return FichepatientDeleteDialogComponent;
}());
FichepatientDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-fichepatient-delete-dialog',
        templateUrl: './fichepatient-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        fichepatient_service_1.FichepatientService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], FichepatientDeleteDialogComponent);
exports.FichepatientDeleteDialogComponent = FichepatientDeleteDialogComponent;
var FichepatientDeletePopupComponent = (function () {
    function FichepatientDeletePopupComponent(route, fichepatientPopupService) {
        this.route = route;
        this.fichepatientPopupService = fichepatientPopupService;
    }
    FichepatientDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.fichepatientPopupService
                .open(FichepatientDeleteDialogComponent, params['id']);
        });
    };
    FichepatientDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return FichepatientDeletePopupComponent;
}());
FichepatientDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-fichepatient-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        fichepatient_popup_service_1.FichepatientPopupService])
], FichepatientDeletePopupComponent);
exports.FichepatientDeletePopupComponent = FichepatientDeletePopupComponent;
//# sourceMappingURL=fichepatient-delete-dialog.component.js.map
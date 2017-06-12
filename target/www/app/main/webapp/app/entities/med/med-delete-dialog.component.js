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
var med_popup_service_1 = require("./med-popup.service");
var med_service_1 = require("./med.service");
var MedDeleteDialogComponent = (function () {
    function MedDeleteDialogComponent(jhiLanguageService, medService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.medService = medService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['med']);
    }
    MedDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    MedDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.medService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'medListModification',
                content: 'Deleted an med'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return MedDeleteDialogComponent;
}());
MedDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-med-delete-dialog',
        templateUrl: './med-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        med_service_1.MedService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], MedDeleteDialogComponent);
exports.MedDeleteDialogComponent = MedDeleteDialogComponent;
var MedDeletePopupComponent = (function () {
    function MedDeletePopupComponent(route, medPopupService) {
        this.route = route;
        this.medPopupService = medPopupService;
    }
    MedDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.medPopupService
                .open(MedDeleteDialogComponent, params['id']);
        });
    };
    MedDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return MedDeletePopupComponent;
}());
MedDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-med-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        med_popup_service_1.MedPopupService])
], MedDeletePopupComponent);
exports.MedDeletePopupComponent = MedDeletePopupComponent;
//# sourceMappingURL=med-delete-dialog.component.js.map
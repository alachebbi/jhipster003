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
var doctor_popup_service_1 = require("./doctor-popup.service");
var doctor_service_1 = require("./doctor.service");
var DoctorDeleteDialogComponent = (function () {
    function DoctorDeleteDialogComponent(jhiLanguageService, doctorService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.doctorService = doctorService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['doctor']);
    }
    DoctorDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DoctorDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.doctorService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'doctorListModification',
                content: 'Deleted an doctor'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return DoctorDeleteDialogComponent;
}());
DoctorDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-doctor-delete-dialog',
        templateUrl: './doctor-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        doctor_service_1.DoctorService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], DoctorDeleteDialogComponent);
exports.DoctorDeleteDialogComponent = DoctorDeleteDialogComponent;
var DoctorDeletePopupComponent = (function () {
    function DoctorDeletePopupComponent(route, doctorPopupService) {
        this.route = route;
        this.doctorPopupService = doctorPopupService;
    }
    DoctorDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.doctorPopupService
                .open(DoctorDeleteDialogComponent, params['id']);
        });
    };
    DoctorDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return DoctorDeletePopupComponent;
}());
DoctorDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-doctor-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        doctor_popup_service_1.DoctorPopupService])
], DoctorDeletePopupComponent);
exports.DoctorDeletePopupComponent = DoctorDeletePopupComponent;
//# sourceMappingURL=doctor-delete-dialog.component.js.map
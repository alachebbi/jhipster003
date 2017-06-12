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
var participation_popup_service_1 = require("./participation-popup.service");
var participation_service_1 = require("./participation.service");
var ParticipationDialogComponent = (function () {
    function ParticipationDialogComponent(activeModal, jhiLanguageService, alertService, participationService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.alertService = alertService;
        this.participationService = participationService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['participation']);
    }
    ParticipationDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    ParticipationDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    ParticipationDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.participation.id !== undefined) {
            this.participationService.update(this.participation)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.participationService.create(this.participation)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    ParticipationDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'participationListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    ParticipationDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    ParticipationDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return ParticipationDialogComponent;
}());
ParticipationDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-participation-dialog',
        templateUrl: './participation-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.AlertService,
        participation_service_1.ParticipationService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], ParticipationDialogComponent);
exports.ParticipationDialogComponent = ParticipationDialogComponent;
var ParticipationPopupComponent = (function () {
    function ParticipationPopupComponent(route, participationPopupService) {
        this.route = route;
        this.participationPopupService = participationPopupService;
    }
    ParticipationPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.participationPopupService
                    .open(ParticipationDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.participationPopupService
                    .open(ParticipationDialogComponent);
            }
        });
    };
    ParticipationPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return ParticipationPopupComponent;
}());
ParticipationPopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-participation-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        participation_popup_service_1.ParticipationPopupService])
], ParticipationPopupComponent);
exports.ParticipationPopupComponent = ParticipationPopupComponent;
//# sourceMappingURL=participation-dialog.component.js.map
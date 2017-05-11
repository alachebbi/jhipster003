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
var evenement_popup_service_1 = require("./evenement-popup.service");
var evenement_service_1 = require("./evenement.service");
var EvenementDialogComponent = (function () {
    function EvenementDialogComponent(activeModal, jhiLanguageService, dataUtils, alertService, evenementService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.dataUtils = dataUtils;
        this.alertService = alertService;
        this.evenementService = evenementService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['evenement']);
    }
    EvenementDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    EvenementDialogComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    EvenementDialogComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    EvenementDialogComponent.prototype.setFileData = function ($event, evenement, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            var $file_1 = $event.target.files[0];
            if (isImage && !/^image\//.test($file_1.type)) {
                return;
            }
            this.dataUtils.toBase64($file_1, function (base64Data) {
                evenement[field] = base64Data;
                evenement[field + "ContentType"] = $file_1.type;
            });
        }
    };
    EvenementDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    EvenementDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.evenement.id !== undefined) {
            this.evenementService.update(this.evenement)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.evenementService.create(this.evenement)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    EvenementDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'evenementListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    EvenementDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    EvenementDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return EvenementDialogComponent;
}());
EvenementDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-evenement-dialog',
        templateUrl: './evenement-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.DataUtils,
        ng_jhipster_1.AlertService,
        evenement_service_1.EvenementService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], EvenementDialogComponent);
exports.EvenementDialogComponent = EvenementDialogComponent;
var EvenementPopupComponent = (function () {
    function EvenementPopupComponent(route, evenementPopupService) {
        this.route = route;
        this.evenementPopupService = evenementPopupService;
    }
    EvenementPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.evenementPopupService
                    .open(EvenementDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.evenementPopupService
                    .open(EvenementDialogComponent);
            }
        });
    };
    EvenementPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return EvenementPopupComponent;
}());
EvenementPopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-evenement-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        evenement_popup_service_1.EvenementPopupService])
], EvenementPopupComponent);
exports.EvenementPopupComponent = EvenementPopupComponent;
//# sourceMappingURL=evenement-dialog.component.js.map
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
var dislike_popup_service_1 = require("./dislike-popup.service");
var dislike_service_1 = require("./dislike.service");
var DislikeDialogComponent = (function () {
    function DislikeDialogComponent(activeModal, jhiLanguageService, alertService, dislikeService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.alertService = alertService;
        this.dislikeService = dislikeService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['dislike']);
    }
    DislikeDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    DislikeDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DislikeDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.dislike.id !== undefined) {
            this.dislikeService.update(this.dislike)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.dislikeService.create(this.dislike)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    DislikeDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'dislikeListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DislikeDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    DislikeDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return DislikeDialogComponent;
}());
DislikeDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-dislike-dialog',
        templateUrl: './dislike-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.AlertService,
        dislike_service_1.DislikeService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], DislikeDialogComponent);
exports.DislikeDialogComponent = DislikeDialogComponent;
var DislikePopupComponent = (function () {
    function DislikePopupComponent(route, dislikePopupService) {
        this.route = route;
        this.dislikePopupService = dislikePopupService;
    }
    DislikePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.dislikePopupService
                    .open(DislikeDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.dislikePopupService
                    .open(DislikeDialogComponent);
            }
        });
    };
    DislikePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return DislikePopupComponent;
}());
DislikePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-dislike-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        dislike_popup_service_1.DislikePopupService])
], DislikePopupComponent);
exports.DislikePopupComponent = DislikePopupComponent;
//# sourceMappingURL=dislike-dialog.component.js.map
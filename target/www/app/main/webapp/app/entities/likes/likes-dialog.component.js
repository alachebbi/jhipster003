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
var likes_popup_service_1 = require("./likes-popup.service");
var likes_service_1 = require("./likes.service");
var LikesDialogComponent = (function () {
    function LikesDialogComponent(activeModal, jhiLanguageService, alertService, likesService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.alertService = alertService;
        this.likesService = likesService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['likes']);
    }
    LikesDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    LikesDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    LikesDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.likes.id !== undefined) {
            this.likesService.update(this.likes)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.likesService.create(this.likes)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    LikesDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'likesListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    LikesDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    LikesDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return LikesDialogComponent;
}());
LikesDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-likes-dialog',
        templateUrl: './likes-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.AlertService,
        likes_service_1.LikesService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], LikesDialogComponent);
exports.LikesDialogComponent = LikesDialogComponent;
var LikesPopupComponent = (function () {
    function LikesPopupComponent(route, likesPopupService) {
        this.route = route;
        this.likesPopupService = likesPopupService;
    }
    LikesPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.likesPopupService
                    .open(LikesDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.likesPopupService
                    .open(LikesDialogComponent);
            }
        });
    };
    LikesPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return LikesPopupComponent;
}());
LikesPopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-likes-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        likes_popup_service_1.LikesPopupService])
], LikesPopupComponent);
exports.LikesPopupComponent = LikesPopupComponent;
//# sourceMappingURL=likes-dialog.component.js.map
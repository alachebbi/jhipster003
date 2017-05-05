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
var LikesDeleteDialogComponent = (function () {
    function LikesDeleteDialogComponent(jhiLanguageService, likesService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.likesService = likesService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['likes']);
    }
    LikesDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    LikesDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.likesService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'likesListModification',
                content: 'Deleted an likes'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return LikesDeleteDialogComponent;
}());
LikesDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-likes-delete-dialog',
        templateUrl: './likes-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        likes_service_1.LikesService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], LikesDeleteDialogComponent);
exports.LikesDeleteDialogComponent = LikesDeleteDialogComponent;
var LikesDeletePopupComponent = (function () {
    function LikesDeletePopupComponent(route, likesPopupService) {
        this.route = route;
        this.likesPopupService = likesPopupService;
    }
    LikesDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.likesPopupService
                .open(LikesDeleteDialogComponent, params['id']);
        });
    };
    LikesDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return LikesDeletePopupComponent;
}());
LikesDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-likes-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        likes_popup_service_1.LikesPopupService])
], LikesDeletePopupComponent);
exports.LikesDeletePopupComponent = LikesDeletePopupComponent;
//# sourceMappingURL=likes-delete-dialog.component.js.map
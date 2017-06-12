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
var DislikeDeleteDialogComponent = (function () {
    function DislikeDeleteDialogComponent(jhiLanguageService, dislikeService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.dislikeService = dislikeService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['dislike']);
    }
    DislikeDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    DislikeDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.dislikeService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'dislikeListModification',
                content: 'Deleted an dislike'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return DislikeDeleteDialogComponent;
}());
DislikeDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-dislike-delete-dialog',
        templateUrl: './dislike-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        dislike_service_1.DislikeService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], DislikeDeleteDialogComponent);
exports.DislikeDeleteDialogComponent = DislikeDeleteDialogComponent;
var DislikeDeletePopupComponent = (function () {
    function DislikeDeletePopupComponent(route, dislikePopupService) {
        this.route = route;
        this.dislikePopupService = dislikePopupService;
    }
    DislikeDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.dislikePopupService
                .open(DislikeDeleteDialogComponent, params['id']);
        });
    };
    DislikeDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return DislikeDeletePopupComponent;
}());
DislikeDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-dislike-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        dislike_popup_service_1.DislikePopupService])
], DislikeDeletePopupComponent);
exports.DislikeDeletePopupComponent = DislikeDeletePopupComponent;
//# sourceMappingURL=dislike-delete-dialog.component.js.map
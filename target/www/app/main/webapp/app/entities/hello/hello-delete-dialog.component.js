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
var hello_popup_service_1 = require("./hello-popup.service");
var hello_service_1 = require("./hello.service");
var HelloDeleteDialogComponent = (function () {
    function HelloDeleteDialogComponent(jhiLanguageService, helloService, activeModal, eventManager, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.helloService = helloService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['hello']);
    }
    HelloDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    HelloDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.helloService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'helloListModification',
                content: 'Deleted an hello'
            });
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.activeModal.dismiss(true);
        });
    };
    return HelloDeleteDialogComponent;
}());
HelloDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-hello-delete-dialog',
        templateUrl: './hello-delete-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        hello_service_1.HelloService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], HelloDeleteDialogComponent);
exports.HelloDeleteDialogComponent = HelloDeleteDialogComponent;
var HelloDeletePopupComponent = (function () {
    function HelloDeletePopupComponent(route, helloPopupService) {
        this.route = route;
        this.helloPopupService = helloPopupService;
    }
    HelloDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.helloPopupService
                .open(HelloDeleteDialogComponent, params['id']);
        });
    };
    HelloDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return HelloDeletePopupComponent;
}());
HelloDeletePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-hello-delete-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        hello_popup_service_1.HelloPopupService])
], HelloDeletePopupComponent);
exports.HelloDeletePopupComponent = HelloDeletePopupComponent;
//# sourceMappingURL=hello-delete-dialog.component.js.map
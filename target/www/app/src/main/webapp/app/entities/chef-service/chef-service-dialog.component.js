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
var servicemedical_service_1 = require("../servicemedical/servicemedical.service");
var chef_service_popup_service_1 = require("./chef-service-popup.service");
var chef_service_service_1 = require("./chef-service.service");
var ChefServiceDialogComponent = (function () {
    function ChefServiceDialogComponent(activeModal, jhiLanguageService, servicemedicalService, dataUtils, alertService, chefServiceService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.servicemedicalService = servicemedicalService;
        this.dataUtils = dataUtils;
        this.alertService = alertService;
        this.chefServiceService = chefServiceService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['chefService']);
    }
    ChefServiceDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        //this.loadAllserv();
        this.loadService();
        this.loadAllserv();
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    ChefServiceDialogComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    ChefServiceDialogComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    ChefServiceDialogComponent.prototype.loadService = function () {
        var _this = this;
        this.servicemedicalService.query().subscribe(function (res) {
            _this.servicemedicals = res.json().filter(function (servicemedical) { return servicemedical.chef == null; });
        }, function (res) { return _this.onError(res.json()); });
    };
    ChefServiceDialogComponent.prototype.setFileData = function ($event, chefService, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            var $file_1 = $event.target.files[0];
            if (isImage && !/^image\//.test($file_1.type)) {
                return;
            }
            this.dataUtils.toBase64($file_1, function (base64Data) {
                chefService[field] = base64Data;
                chefService[field + "ContentType"] = $file_1.type;
            });
        }
    };
    ChefServiceDialogComponent.prototype.modifierservicechef = function () {
        var _this = this;
        this.services.forEach(function (item, index) {
            _this.servicemedicalService.find(_this.chefService.servicemedi)
                .subscribe(function (servicemedical) {
                _this.servicemedical.chef == _this.chefService.nometprenom;
                _this.servicemedicalService.update(_this.servicemedical);
            });
        });
    };
    ChefServiceDialogComponent.prototype.loadAllserv = function () {
        var _this = this;
        this.servicemedicalService.query().subscribe(function (res) {
            _this.services = res.json();
        }, function (res) { return _this.onError(res.json()); });
    };
    ChefServiceDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    ChefServiceDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.chefService.id !== undefined) {
            this.chefServiceService.update(this.chefService)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.chefServiceService.create(this.chefService)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
            this.modifierservicechef();
        }
    };
    ChefServiceDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'chefServiceListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    ChefServiceDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    ChefServiceDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return ChefServiceDialogComponent;
}());
ChefServiceDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-chef-service-dialog',
        templateUrl: './chef-service-dialog.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        servicemedical_service_1.ServicemedicalService,
        ng_jhipster_1.DataUtils,
        ng_jhipster_1.AlertService,
        chef_service_service_1.ChefServiceService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], ChefServiceDialogComponent);
exports.ChefServiceDialogComponent = ChefServiceDialogComponent;
var ChefServicePopupComponent = (function () {
    function ChefServicePopupComponent(route, chefServicePopupService) {
        this.route = route;
        this.chefServicePopupService = chefServicePopupService;
    }
    ChefServicePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.chefServicePopupService
                    .open(ChefServiceDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.chefServicePopupService
                    .open(ChefServiceDialogComponent);
            }
        });
    };
    ChefServicePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return ChefServicePopupComponent;
}());
ChefServicePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-chef-service-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        chef_service_popup_service_1.ChefServicePopupService])
], ChefServicePopupComponent);
exports.ChefServicePopupComponent = ChefServicePopupComponent;
//# sourceMappingURL=chef-service-dialog.component.js.map
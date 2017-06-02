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
var ng_jhipster_1 = require("ng-jhipster");
var chef_service_service_1 = require("./chef-service.service");
var ChefServiceDetailComponent = (function () {
    function ChefServiceDetailComponent(jhiLanguageService, dataUtils, chefServiceService, route) {
        this.jhiLanguageService = jhiLanguageService;
        this.dataUtils = dataUtils;
        this.chefServiceService = chefServiceService;
        this.route = route;
        this.jhiLanguageService.setLocations(['chefService']);
    }
    ChefServiceDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['id']);
        });
    };
    ChefServiceDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.chefServiceService.find(id).subscribe(function (chefService) {
            _this.chefService = chefService;
        });
    };
    ChefServiceDetailComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    ChefServiceDetailComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    ChefServiceDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    ChefServiceDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return ChefServiceDetailComponent;
}());
ChefServiceDetailComponent = __decorate([
    core_1.Component({
        selector: 'jhi-chef-service-detail',
        templateUrl: './chef-service-detail.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.DataUtils,
        chef_service_service_1.ChefServiceService,
        router_1.ActivatedRoute])
], ChefServiceDetailComponent);
exports.ChefServiceDetailComponent = ChefServiceDetailComponent;
//# sourceMappingURL=chef-service-detail.component.js.map
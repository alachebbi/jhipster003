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
var pharmacie_service_1 = require("./pharmacie.service");
var PharmacieDetailComponent = (function () {
    function PharmacieDetailComponent(jhiLanguageService, dataUtils, pharmacieService, route) {
        this.jhiLanguageService = jhiLanguageService;
        this.dataUtils = dataUtils;
        this.pharmacieService = pharmacieService;
        this.route = route;
        this.jhiLanguageService.setLocations(['pharmacie']);
    }
    PharmacieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['id']);
        });
    };
    PharmacieDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.pharmacieService.find(id).subscribe(function (pharmacie) {
            _this.pharmacie = pharmacie;
        });
    };
    PharmacieDetailComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    PharmacieDetailComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    PharmacieDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    PharmacieDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return PharmacieDetailComponent;
}());
PharmacieDetailComponent = __decorate([
    core_1.Component({
        selector: 'jhi-pharmacie-detail',
        templateUrl: './pharmacie-detail.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.DataUtils,
        pharmacie_service_1.PharmacieService,
        router_1.ActivatedRoute])
], PharmacieDetailComponent);
exports.PharmacieDetailComponent = PharmacieDetailComponent;
//# sourceMappingURL=pharmacie-detail.component.js.map
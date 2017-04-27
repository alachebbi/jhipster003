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
var pharmacien_service_1 = require("./pharmacien.service");
var PharmacienDetailComponent = (function () {
    function PharmacienDetailComponent(jhiLanguageService, dataUtils, pharmacienService, route) {
        this.jhiLanguageService = jhiLanguageService;
        this.dataUtils = dataUtils;
        this.pharmacienService = pharmacienService;
        this.route = route;
        this.jhiLanguageService.setLocations(['pharmacien']);
    }
    PharmacienDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['id']);
        });
    };
    PharmacienDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.pharmacienService.find(id).subscribe(function (pharmacien) {
            _this.pharmacien = pharmacien;
        });
    };
    PharmacienDetailComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    PharmacienDetailComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    PharmacienDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    PharmacienDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return PharmacienDetailComponent;
}());
PharmacienDetailComponent = __decorate([
    core_1.Component({
        selector: 'jhi-pharmacien-detail',
        templateUrl: './pharmacien-detail.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.DataUtils,
        pharmacien_service_1.PharmacienService,
        router_1.ActivatedRoute])
], PharmacienDetailComponent);
exports.PharmacienDetailComponent = PharmacienDetailComponent;
//# sourceMappingURL=pharmacien-detail.component.js.map
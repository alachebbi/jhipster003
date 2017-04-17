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
var medecin_service_1 = require("./medecin.service");
var MedecinDetailComponent = (function () {
    function MedecinDetailComponent(jhiLanguageService, dataUtils, medecinService, route) {
        this.jhiLanguageService = jhiLanguageService;
        this.dataUtils = dataUtils;
        this.medecinService = medecinService;
        this.route = route;
        this.jhiLanguageService.setLocations(['medecin']);
    }
    MedecinDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['id']);
        });
    };
    MedecinDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.medecinService.find(id).subscribe(function (medecin) {
            _this.medecin = medecin;
        });
    };
    MedecinDetailComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    MedecinDetailComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    MedecinDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    MedecinDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return MedecinDetailComponent;
}());
MedecinDetailComponent = __decorate([
    core_1.Component({
        selector: 'jhi-medecin-detail',
        templateUrl: './medecin-detail.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.DataUtils,
        medecin_service_1.MedecinService,
        router_1.ActivatedRoute])
], MedecinDetailComponent);
exports.MedecinDetailComponent = MedecinDetailComponent;
//# sourceMappingURL=medecin-detail.component.js.map
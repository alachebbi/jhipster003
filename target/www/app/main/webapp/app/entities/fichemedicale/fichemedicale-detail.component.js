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
var fichemedicale_service_1 = require("./fichemedicale.service");
var medecin_service_1 = require("../medecin/medecin.service");
var FichemedicaleDetailComponent = (function () {
    function FichemedicaleDetailComponent(jhiLanguageService, dataUtils, medecinService, alertService, fichemedicaleService, route) {
        this.jhiLanguageService = jhiLanguageService;
        this.dataUtils = dataUtils;
        this.medecinService = medecinService;
        this.alertService = alertService;
        this.fichemedicaleService = fichemedicaleService;
        this.route = route;
        this.jhiLanguageService.setLocations(['fichemedicale']);
    }
    FichemedicaleDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['id']);
            _this.loadAllmed(params['medid']);
        });
    };
    FichemedicaleDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.fichemedicaleService.find(id).subscribe(function (fichemedicale) {
            _this.fichemedicale = fichemedicale;
        });
    };
    FichemedicaleDetailComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    FichemedicaleDetailComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    FichemedicaleDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    FichemedicaleDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    FichemedicaleDetailComponent.prototype.loadAllmed = function (medid) {
        var _this = this;
        this.fichemedicaleService.query().subscribe(function (res) {
            _this.medecin = res.json().filter((function (medecin) { return medecin.id === medid; }));
        }, function (res) { return _this.onError(res.json()); });
    };
    FichemedicaleDetailComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return FichemedicaleDetailComponent;
}());
FichemedicaleDetailComponent = __decorate([
    core_1.Component({
        selector: 'jhi-fichemedicale-detail',
        templateUrl: './fichemedicale-detail.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.DataUtils,
        medecin_service_1.MedecinService,
        ng_jhipster_1.AlertService,
        fichemedicale_service_1.FichemedicaleService,
        router_1.ActivatedRoute])
], FichemedicaleDetailComponent);
exports.FichemedicaleDetailComponent = FichemedicaleDetailComponent;
//# sourceMappingURL=fichemedicale-detail.component.js.map
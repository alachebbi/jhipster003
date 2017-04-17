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
var fichepatient_service_1 = require("./fichepatient.service");
var medecin_service_1 = require("../medecin/medecin.service");
var FichepatientDetailComponent = (function () {
    function FichepatientDetailComponent(jhiLanguageService, dataUtils, alertService, medecinService, fichepatientService, route) {
        this.jhiLanguageService = jhiLanguageService;
        this.dataUtils = dataUtils;
        this.alertService = alertService;
        this.medecinService = medecinService;
        this.fichepatientService = fichepatientService;
        this.route = route;
        this.jhiLanguageService.setLocations(['fichepatient']);
    }
    FichepatientDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['id']);
            _this.loadAllmed(params['med']);
            _this.loadAllser(params['medid']);
        });
    };
    FichepatientDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.fichepatientService.find(id).subscribe(function (fichepatient) {
            _this.fichepatient = fichepatient;
        });
    };
    FichepatientDetailComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    FichepatientDetailComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    FichepatientDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    FichepatientDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    FichepatientDetailComponent.prototype.loadAllser = function (medid) {
        var _this = this;
        this.fichepatientService.query().subscribe(function (res) {
            _this.medecin = res.json().filter((function (medecin) { return medecin.id === medid; }));
        }, function (res) { return _this.onError(res.json()); });
    };
    FichepatientDetailComponent.prototype.loadAllmed = function (med) {
        var _this = this;
        this.fichepatientService.query().subscribe(function (res) {
            _this.medecin = res.json().filter((function (medecin) { return medecin.id === med; }));
        }, function (res) { return _this.onError(res.json()); });
    };
    FichepatientDetailComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return FichepatientDetailComponent;
}());
FichepatientDetailComponent = __decorate([
    core_1.Component({
        selector: 'jhi-fichepatient-detail',
        templateUrl: './fichepatient-detail.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.DataUtils,
        ng_jhipster_1.AlertService,
        medecin_service_1.MedecinService,
        fichepatient_service_1.FichepatientService,
        router_1.ActivatedRoute])
], FichepatientDetailComponent);
exports.FichepatientDetailComponent = FichepatientDetailComponent;
//# sourceMappingURL=fichepatient-detail.component.js.map
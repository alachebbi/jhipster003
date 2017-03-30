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
var servicemedical_service_1 = require("./servicemedical.service");
var doctor_service_1 = require("../doctor/doctor.service");
var ServicemedicalDetailComponent = (function () {
    function ServicemedicalDetailComponent(jhiLanguageService, doctorService, alertService, servicemedicalService, route) {
        this.jhiLanguageService = jhiLanguageService;
        this.doctorService = doctorService;
        this.alertService = alertService;
        this.servicemedicalService = servicemedicalService;
        this.route = route;
        this.jhiLanguageService.setLocations(['servicemedical']);
    }
    ServicemedicalDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['id']);
        });
    };
    ServicemedicalDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.servicemedicalService.find(id).subscribe(function (servicemedical) {
            _this.servicemedical = servicemedical;
            _this.name = _this.servicemedical.nom;
            _this.loadAll(_this.name);
        });
    };
    ServicemedicalDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    ServicemedicalDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ServicemedicalDetailComponent.prototype.loadAll = function (nom) {
        var _this = this;
        this.doctorService.query().subscribe(function (res) {
            _this.doctors = res.json().filter(function (doctor) { return doctor.servicemedi == nom; });
        }, function (res) { return _this.onError(res.json()); });
    };
    ServicemedicalDetailComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return ServicemedicalDetailComponent;
}());
ServicemedicalDetailComponent = __decorate([
    core_1.Component({
        selector: 'jhi-servicemedical-detail',
        templateUrl: './servicemedical-detail.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        doctor_service_1.DoctorService,
        ng_jhipster_1.AlertService,
        servicemedical_service_1.ServicemedicalService,
        router_1.ActivatedRoute])
], ServicemedicalDetailComponent);
exports.ServicemedicalDetailComponent = ServicemedicalDetailComponent;
//# sourceMappingURL=servicemedical-detail.component.js.map
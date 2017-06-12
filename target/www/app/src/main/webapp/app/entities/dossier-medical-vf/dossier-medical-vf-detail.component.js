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
var dossier_medical_vf_service_1 = require("./dossier-medical-vf.service");
var DossierMedicalVFDetailComponent = (function () {
    function DossierMedicalVFDetailComponent(jhiLanguageService, dataUtils, dossierMedicalVFService, route) {
        this.jhiLanguageService = jhiLanguageService;
        this.dataUtils = dataUtils;
        this.dossierMedicalVFService = dossierMedicalVFService;
        this.route = route;
        this.jhiLanguageService.setLocations(['dossierMedicalVF']);
    }
    DossierMedicalVFDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['id']);
        });
    };
    DossierMedicalVFDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.dossierMedicalVFService.find(id).subscribe(function (dossierMedicalVF) {
            _this.dossierMedicalVF = dossierMedicalVF;
        });
    };
    DossierMedicalVFDetailComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    DossierMedicalVFDetailComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    DossierMedicalVFDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    DossierMedicalVFDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return DossierMedicalVFDetailComponent;
}());
DossierMedicalVFDetailComponent = __decorate([
    core_1.Component({
        selector: 'jhi-dossier-medical-vf-detail',
        templateUrl: './dossier-medical-vf-detail.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.DataUtils,
        dossier_medical_vf_service_1.DossierMedicalVFService,
        router_1.ActivatedRoute])
], DossierMedicalVFDetailComponent);
exports.DossierMedicalVFDetailComponent = DossierMedicalVFDetailComponent;
//# sourceMappingURL=dossier-medical-vf-detail.component.js.map
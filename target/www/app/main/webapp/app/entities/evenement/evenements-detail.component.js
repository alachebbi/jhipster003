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
var evenement_service_1 = require("./evenement.service");
var participation_service_1 = require("../participation/participation.service");
var EvenementsDetailComponent = (function () {
    function EvenementsDetailComponent(jhiLanguageService, dataUtils, participationService, alertService, evenementService, route) {
        this.jhiLanguageService = jhiLanguageService;
        this.dataUtils = dataUtils;
        this.participationService = participationService;
        this.alertService = alertService;
        this.evenementService = evenementService;
        this.route = route;
        this.jhiLanguageService.setLocations(['evenement']);
    }
    EvenementsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['id']);
        });
    };
    EvenementsDetailComponent.prototype.loadAll = function (nom) {
        var _this = this;
        this.participationService.query().subscribe(function (res) {
            _this.participations = res.json().filter(function (participation) { return participation.evenement == nom; });
        }, function (res) { return _this.onError(res.json()); });
    };
    EvenementsDetailComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    EvenementsDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.evenementService.find(id).subscribe(function (evenement) {
            _this.evenement = evenement;
            _this.name = _this.evenement.nom;
            _this.loadAll(_this.name);
        });
    };
    EvenementsDetailComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    EvenementsDetailComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    EvenementsDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    EvenementsDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return EvenementsDetailComponent;
}());
EvenementsDetailComponent = __decorate([
    core_1.Component({
        selector: 'jhi-evenement-detail',
        templateUrl: './evenements-detail.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.DataUtils,
        participation_service_1.ParticipationService,
        ng_jhipster_1.AlertService,
        evenement_service_1.EvenementService,
        router_1.ActivatedRoute])
], EvenementsDetailComponent);
exports.EvenementsDetailComponent = EvenementsDetailComponent;
//# sourceMappingURL=evenements-detail.component.js.map
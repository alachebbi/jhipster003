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
var EvenementDetailComponent = (function () {
    function EvenementDetailComponent(jhiLanguageService, dataUtils, evenementService, route) {
        this.jhiLanguageService = jhiLanguageService;
        this.dataUtils = dataUtils;
        this.evenementService = evenementService;
        this.route = route;
        this.jhiLanguageService.setLocations(['evenement']);
    }
    EvenementDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['id']);
        });
    };
    EvenementDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.evenementService.find(id).subscribe(function (evenement) {
            _this.evenement = evenement;
        });
    };
    EvenementDetailComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    EvenementDetailComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    EvenementDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    EvenementDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return EvenementDetailComponent;
}());
EvenementDetailComponent = __decorate([
    core_1.Component({
        selector: 'jhi-evenement-detail',
        templateUrl: './evenement-detail.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.DataUtils,
        evenement_service_1.EvenementService,
        router_1.ActivatedRoute])
], EvenementDetailComponent);
exports.EvenementDetailComponent = EvenementDetailComponent;
//# sourceMappingURL=evenement-detail.component.js.map
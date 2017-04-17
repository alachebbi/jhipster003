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
var traitement_service_1 = require("./traitement.service");
var TraitementDetailComponent = (function () {
    function TraitementDetailComponent(jhiLanguageService, traitementService, route) {
        this.jhiLanguageService = jhiLanguageService;
        this.traitementService = traitementService;
        this.route = route;
        this.jhiLanguageService.setLocations(['traitement']);
    }
    TraitementDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['id']);
        });
    };
    TraitementDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.traitementService.find(id).subscribe(function (traitement) {
            _this.traitement = traitement;
        });
    };
    TraitementDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    TraitementDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return TraitementDetailComponent;
}());
TraitementDetailComponent = __decorate([
    core_1.Component({
        selector: 'jhi-traitement-detail',
        templateUrl: './traitement-detail.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        traitement_service_1.TraitementService,
        router_1.ActivatedRoute])
], TraitementDetailComponent);
exports.TraitementDetailComponent = TraitementDetailComponent;
//# sourceMappingURL=traitement-detail.component.js.map
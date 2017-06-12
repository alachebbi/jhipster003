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
var demande_service_1 = require("./demande.service");
var DemandeDetailComponent = (function () {
    function DemandeDetailComponent(jhiLanguageService, demandeService, route) {
        this.jhiLanguageService = jhiLanguageService;
        this.demandeService = demandeService;
        this.route = route;
        this.jhiLanguageService.setLocations(['demande']);
    }
    DemandeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['id']);
        });
    };
    DemandeDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.demandeService.find(id).subscribe(function (demande) {
            _this.demande = demande;
        });
    };
    DemandeDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    DemandeDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return DemandeDetailComponent;
}());
DemandeDetailComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demande-detail',
        templateUrl: './demande-detail.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        demande_service_1.DemandeService,
        router_1.ActivatedRoute])
], DemandeDetailComponent);
exports.DemandeDetailComponent = DemandeDetailComponent;
//# sourceMappingURL=demande-detail.component.js.map
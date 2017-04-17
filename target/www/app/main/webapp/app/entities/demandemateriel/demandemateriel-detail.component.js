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
var demandemateriel_service_1 = require("./demandemateriel.service");
var DemandematerielDetailComponent = (function () {
    function DemandematerielDetailComponent(jhiLanguageService, demandematerielService, route) {
        this.jhiLanguageService = jhiLanguageService;
        this.demandematerielService = demandematerielService;
        this.route = route;
        this.jhiLanguageService.setLocations(['demandemateriel']);
    }
    DemandematerielDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['id']);
        });
    };
    DemandematerielDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.demandematerielService.find(id).subscribe(function (demandemateriel) {
            _this.demandemateriel = demandemateriel;
        });
    };
    DemandematerielDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    DemandematerielDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return DemandematerielDetailComponent;
}());
DemandematerielDetailComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demandemateriel-detail',
        templateUrl: './demandemateriel-detail.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        demandemateriel_service_1.DemandematerielService,
        router_1.ActivatedRoute])
], DemandematerielDetailComponent);
exports.DemandematerielDetailComponent = DemandematerielDetailComponent;
//# sourceMappingURL=demandemateriel-detail.component.js.map
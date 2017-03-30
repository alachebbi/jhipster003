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
var reclamation_service_1 = require("./reclamation.service");
var ReclamationDetailComponent = (function () {
    function ReclamationDetailComponent(jhiLanguageService, reclamationService, route) {
        this.jhiLanguageService = jhiLanguageService;
        this.reclamationService = reclamationService;
        this.route = route;
        this.jhiLanguageService.setLocations(['reclamation']);
    }
    ReclamationDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['id']);
        });
    };
    ReclamationDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.reclamationService.find(id).subscribe(function (reclamation) {
            _this.reclamation = reclamation;
        });
    };
    ReclamationDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    ReclamationDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return ReclamationDetailComponent;
}());
ReclamationDetailComponent = __decorate([
    core_1.Component({
        selector: 'jhi-reclamation-detail',
        templateUrl: './reclamation-detail.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        reclamation_service_1.ReclamationService,
        router_1.ActivatedRoute])
], ReclamationDetailComponent);
exports.ReclamationDetailComponent = ReclamationDetailComponent;
//# sourceMappingURL=reclamation-detail.component.js.map
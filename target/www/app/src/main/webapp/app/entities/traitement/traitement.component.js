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
var ng_jhipster_1 = require("ng-jhipster");
var traitement_service_1 = require("./traitement.service");
var shared_1 = require("../../shared");
var TraitementComponent = (function () {
    function TraitementComponent(jhiLanguageService, traitementService, alertService, eventManager, principal) {
        this.jhiLanguageService = jhiLanguageService;
        this.traitementService = traitementService;
        this.alertService = alertService;
        this.eventManager = eventManager;
        this.principal = principal;
        this.jhiLanguageService.setLocations(['traitement']);
    }
    TraitementComponent.prototype.loadAll = function () {
        var _this = this;
        this.traitementService.query().subscribe(function (res) {
            _this.traitements = res.json();
        }, function (res) { return _this.onError(res.json()); });
    };
    TraitementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAll();
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInTraitements();
    };
    TraitementComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    TraitementComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    TraitementComponent.prototype.registerChangeInTraitements = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('traitementListModification', function (response) { return _this.loadAll(); });
    };
    TraitementComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return TraitementComponent;
}());
TraitementComponent = __decorate([
    core_1.Component({
        selector: 'jhi-traitement',
        templateUrl: './traitement.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        traitement_service_1.TraitementService,
        ng_jhipster_1.AlertService,
        ng_jhipster_1.EventManager,
        shared_1.Principal])
], TraitementComponent);
exports.TraitementComponent = TraitementComponent;
//# sourceMappingURL=traitement.component.js.map
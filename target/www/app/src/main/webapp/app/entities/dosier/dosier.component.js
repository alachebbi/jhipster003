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
var dosier_service_1 = require("./dosier.service");
var shared_1 = require("../../shared");
var DosierComponent = (function () {
    function DosierComponent(jhiLanguageService, dosierService, alertService, dataUtils, eventManager, principal) {
        this.jhiLanguageService = jhiLanguageService;
        this.dosierService = dosierService;
        this.alertService = alertService;
        this.dataUtils = dataUtils;
        this.eventManager = eventManager;
        this.principal = principal;
        this.jhiLanguageService.setLocations(['dosier', 'antecedents']);
    }
    DosierComponent.prototype.loadAll = function () {
        var _this = this;
        this.dosierService.query().subscribe(function (res) {
            _this.dosiers = res.json();
        }, function (res) { return _this.onError(res.json()); });
    };
    DosierComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAll();
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInDosiers();
    };
    DosierComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    DosierComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    DosierComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    DosierComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    DosierComponent.prototype.registerChangeInDosiers = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('dosierListModification', function (response) { return _this.loadAll(); });
    };
    DosierComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return DosierComponent;
}());
DosierComponent = __decorate([
    core_1.Component({
        selector: 'jhi-dosier',
        templateUrl: './dosier.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        dosier_service_1.DosierService,
        ng_jhipster_1.AlertService,
        ng_jhipster_1.DataUtils,
        ng_jhipster_1.EventManager,
        shared_1.Principal])
], DosierComponent);
exports.DosierComponent = DosierComponent;
//# sourceMappingURL=dosier.component.js.map
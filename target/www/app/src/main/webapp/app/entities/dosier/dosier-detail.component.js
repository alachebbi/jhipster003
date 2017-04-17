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
var dosier_service_1 = require("./dosier.service");
var DosierDetailComponent = (function () {
    function DosierDetailComponent(jhiLanguageService, dataUtils, dosierService, route) {
        this.jhiLanguageService = jhiLanguageService;
        this.dataUtils = dataUtils;
        this.dosierService = dosierService;
        this.route = route;
        this.jhiLanguageService.setLocations(['dosier', 'antecedents']);
    }
    DosierDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['id']);
        });
    };
    DosierDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.dosierService.find(id).subscribe(function (dosier) {
            _this.dosier = dosier;
        });
    };
    DosierDetailComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    DosierDetailComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    DosierDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    DosierDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return DosierDetailComponent;
}());
DosierDetailComponent = __decorate([
    core_1.Component({
        selector: 'jhi-dosier-detail',
        templateUrl: './dosier-detail.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.DataUtils,
        dosier_service_1.DosierService,
        router_1.ActivatedRoute])
], DosierDetailComponent);
exports.DosierDetailComponent = DosierDetailComponent;
//# sourceMappingURL=dosier-detail.component.js.map
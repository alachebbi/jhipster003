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
var demandemedicamentvff_service_1 = require("./demandemedicamentvff.service");
var DemandemedicamentvffDetailComponent = (function () {
    function DemandemedicamentvffDetailComponent(jhiLanguageService, demandemedicamentvffService, route) {
        this.jhiLanguageService = jhiLanguageService;
        this.demandemedicamentvffService = demandemedicamentvffService;
        this.route = route;
        this.jhiLanguageService.setLocations(['demandemedicamentvff']);
    }
    DemandemedicamentvffDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['id']);
        });
    };
    DemandemedicamentvffDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.demandemedicamentvffService.find(id).subscribe(function (demandemedicamentvff) {
            _this.demandemedicamentvff = demandemedicamentvff;
        });
    };
    DemandemedicamentvffDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    DemandemedicamentvffDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return DemandemedicamentvffDetailComponent;
}());
DemandemedicamentvffDetailComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demandemedicamentvff-detail',
        templateUrl: './demandemedicamentvff-detail.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        demandemedicamentvff_service_1.DemandemedicamentvffService,
        router_1.ActivatedRoute])
], DemandemedicamentvffDetailComponent);
exports.DemandemedicamentvffDetailComponent = DemandemedicamentvffDetailComponent;
//# sourceMappingURL=demandemedicamentvff-detail.component.js.map
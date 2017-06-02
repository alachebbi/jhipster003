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
var participation_service_1 = require("./participation.service");
var ParticipationDetailComponent = (function () {
    function ParticipationDetailComponent(jhiLanguageService, participationService, route) {
        this.jhiLanguageService = jhiLanguageService;
        this.participationService = participationService;
        this.route = route;
        this.jhiLanguageService.setLocations(['participation']);
    }
    ParticipationDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['id']);
        });
    };
    ParticipationDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.participationService.find(id).subscribe(function (participation) {
            _this.participation = participation;
        });
    };
    ParticipationDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    ParticipationDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return ParticipationDetailComponent;
}());
ParticipationDetailComponent = __decorate([
    core_1.Component({
        selector: 'jhi-participation-detail',
        templateUrl: './participation-detail.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        participation_service_1.ParticipationService,
        router_1.ActivatedRoute])
], ParticipationDetailComponent);
exports.ParticipationDetailComponent = ParticipationDetailComponent;
//# sourceMappingURL=participation-detail.component.js.map
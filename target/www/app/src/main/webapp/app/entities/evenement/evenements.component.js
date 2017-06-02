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
var shared_1 = require("../../shared");
var uib_pagination_config_1 = require("../../blocks/config/uib-pagination.config");
var participation_service_1 = require("../participation/participation.service");
var participation_model_1 = require("../participation/participation.model");
var EvenementsComponent = (function () {
    function EvenementsComponent(jhiLanguageService, evenementService, parseLinks, alertService, principal, activatedRoute, dataUtils, router, eventManager, participationService, paginationUtil, paginationConfig) {
        var _this = this;
        this.jhiLanguageService = jhiLanguageService;
        this.evenementService = evenementService;
        this.parseLinks = parseLinks;
        this.alertService = alertService;
        this.principal = principal;
        this.activatedRoute = activatedRoute;
        this.dataUtils = dataUtils;
        this.router = router;
        this.eventManager = eventManager;
        this.participationService = participationService;
        this.paginationUtil = paginationUtil;
        this.paginationConfig = paginationConfig;
        this.itemsPerPage = shared_1.ITEMS_PER_PAGE;
        this.routeData = this.activatedRoute.data.subscribe(function (data) {
            _this.page = data['pagingParams'].page;
            _this.previousPage = data['pagingParams'].page;
            _this.reverse = data['pagingParams'].ascending;
            _this.predicate = data['pagingParams'].predicate;
        });
        this.jhiLanguageService.setLocations(['evenement']);
    }
    EvenementsComponent.prototype.loadAll = function () {
        var _this = this;
        this.evenementService.query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort()
        }).subscribe(function (res) { return _this.onSuccess(res.json(), res.headers); }, function (res) { return _this.onError(res.json()); });
    };
    EvenementsComponent.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    };
    EvenementsComponent.prototype.onSaveSuccess2 = function (result) {
        this.eventManager.broadcast({ name: 'articleListModification', content: 'OK' });
        this.isSaving = false;
    };
    EvenementsComponent.prototype.VoterPour = function (Evenement, participation) {
        var _this = this;
        // Article.ispushed=true;
        Evenement.nombreparticipants += 1;
        this.evenementService.modifier(Evenement)
            .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        this.paticipation = new participation_model_1.Participation();
        this.paticipation.evenement = Evenement.nom;
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.paticipation.participant = this.currentAccount.firstName;
        this.participationService.create(this.paticipation)
            .subscribe(function (res) { return _this.onSaveSuccess2(res); }, function (res) { return _this.onSaveError(res.json()); });
        this.loadAlllikes();
    };
    EvenementsComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'articleListModification', content: 'OK' });
        this.isSaving = false;
    };
    EvenementsComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    EvenementsComponent.prototype.loadAlllikes = function () {
        var _this = this;
        this.evenements.forEach(function (item, index) {
            _this.participationService.findByidandname(item.nom, _this.currentAccount.firstName)
                .subscribe(function (participation) {
                if (participation.participant == _this.currentAccount.firstName) {
                    document.getElementById("l" + index).setAttribute("disabled", "disabled");
                    document.getElementById("l" + index).style.opacity = "0.4";
                }
            });
        });
    };
    EvenementsComponent.prototype.transition = function () {
        this.router.navigate(['/evenement'], { queryParams: {
                page: this.page,
                size: this.itemsPerPage,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
        });
        this.loadAll();
    };
    EvenementsComponent.prototype.clear = function () {
        this.page = 0;
        this.router.navigate(['/evenement', {
                page: this.page,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }]);
        this.loadAll();
    };
    EvenementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAll();
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInEvenements();
    };
    EvenementsComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    EvenementsComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    EvenementsComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    EvenementsComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    EvenementsComponent.prototype.registerChangeInEvenements = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('evenementListModification', function (response) { return _this.loadAll(); });
    };
    EvenementsComponent.prototype.sort = function () {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    EvenementsComponent.prototype.onSuccess = function (data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = headers.get('X-Total-Count');
        this.queryCount = this.totalItems;
        // this.page = pagingParams.page;
        this.evenements = data;
        this.loadAlllikes();
    };
    EvenementsComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return EvenementsComponent;
}());
EvenementsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-evenement',
        templateUrl: './evenements.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        evenement_service_1.EvenementService,
        ng_jhipster_1.ParseLinks,
        ng_jhipster_1.AlertService,
        shared_1.Principal,
        router_1.ActivatedRoute,
        ng_jhipster_1.DataUtils,
        router_1.Router,
        ng_jhipster_1.EventManager,
        participation_service_1.ParticipationService,
        ng_jhipster_1.PaginationUtil,
        uib_pagination_config_1.PaginationConfig])
], EvenementsComponent);
exports.EvenementsComponent = EvenementsComponent;
//# sourceMappingURL=evenements.component.js.map
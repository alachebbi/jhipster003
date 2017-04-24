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
var shared_1 = require("../../shared");
var uib_pagination_config_1 = require("../../blocks/config/uib-pagination.config");
var medicament_service_1 = require("../medicament/medicament.service");
var DemandeComponent = (function () {
    function DemandeComponent(jhiLanguageService, demandeService, parseLinks, alertService, principal, activatedRoute, router, eventManager, paginationUtil, medicamentService, paginationConfig) {
        var _this = this;
        this.jhiLanguageService = jhiLanguageService;
        this.demandeService = demandeService;
        this.parseLinks = parseLinks;
        this.alertService = alertService;
        this.principal = principal;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.eventManager = eventManager;
        this.paginationUtil = paginationUtil;
        this.medicamentService = medicamentService;
        this.paginationConfig = paginationConfig;
        this.itemsPerPage = shared_1.ITEMS_PER_PAGE;
        this.routeData = this.activatedRoute.data.subscribe(function (data) {
            _this.page = data['pagingParams'].page;
            _this.previousPage = data['pagingParams'].page;
            _this.reverse = data['pagingParams'].ascending;
            _this.predicate = data['pagingParams'].predicate;
        });
        this.jhiLanguageService.setLocations(['demande']);
    }
    DemandeComponent.prototype.loadAll = function () {
        var _this = this;
        this.demandeService.query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort()
        }).subscribe(function (res) { return _this.onSuccess(res.json(), res.headers); }, function (res) { return _this.onError(res.json()); });
    };
    DemandeComponent.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    };
    DemandeComponent.prototype.transition = function () {
        this.router.navigate(['/demande'], { queryParams: {
                page: this.page,
                size: this.itemsPerPage,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
        });
        this.loadAll();
    };
    DemandeComponent.prototype.clear = function () {
        this.page = 0;
        this.router.navigate(['/demande', {
                page: this.page,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }]);
        this.loadAll();
    };
    DemandeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAll();
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInDemandes();
    };
    DemandeComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    DemandeComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    DemandeComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'demandeModification', content: 'OK' });
        this.isSaving = false;
    };
    DemandeComponent.prototype.Accepter = function (Demande) {
        var _this = this;
        this.medicamentService.query().subscribe(function (res) {
            _this.medicaments = res.json();
            _this.medicaments.forEach(function (item, index) {
                if (item.nom == Demande.medicamentid && Demande.etat == "oui") {
                    item.quantity = item.quantity - Demande.quatity;
                    _this.medicamentService.update(item).subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onError(res.json()); });
                }
            });
        }, function (res) { return _this.onError(res.json()); });
        Demande.etat = "oui";
        this.demandeService.update(Demande).subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onError(res.json()); });
    };
    DemandeComponent.prototype.Refuser = function (Demande) {
        var _this = this;
        Demande.etat = "non";
        this.demandeService.update(Demande).subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onError(res.json()); });
    };
    DemandeComponent.prototype.registerChangeInDemandes = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('demandeListModification', function (response) { return _this.loadAll(); });
    };
    DemandeComponent.prototype.sort = function () {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    DemandeComponent.prototype.onSuccess = function (data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = headers.get('X-Total-Count');
        this.queryCount = this.totalItems;
        // this.page = pagingParams.page;
        this.demandes = data;
    };
    DemandeComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return DemandeComponent;
}());
DemandeComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demande',
        templateUrl: './demande.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        demande_service_1.DemandeService,
        ng_jhipster_1.ParseLinks,
        ng_jhipster_1.AlertService,
        shared_1.Principal,
        router_1.ActivatedRoute,
        router_1.Router,
        ng_jhipster_1.EventManager,
        ng_jhipster_1.PaginationUtil,
        medicament_service_1.MedicamentService,
        uib_pagination_config_1.PaginationConfig])
], DemandeComponent);
exports.DemandeComponent = DemandeComponent;
//# sourceMappingURL=demande.component.js.map
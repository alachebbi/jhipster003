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
var demande_medicament_vf_service_1 = require("./demande-medicament-vf.service");
var shared_1 = require("../../shared");
var uib_pagination_config_1 = require("../../blocks/config/uib-pagination.config");
var DemandeMedicamentVfComponent = (function () {
    function DemandeMedicamentVfComponent(jhiLanguageService, demandeMedicamentVfService, parseLinks, alertService, principal, activatedRoute, router, eventManager, paginationUtil, paginationConfig) {
        var _this = this;
        this.jhiLanguageService = jhiLanguageService;
        this.demandeMedicamentVfService = demandeMedicamentVfService;
        this.parseLinks = parseLinks;
        this.alertService = alertService;
        this.principal = principal;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.eventManager = eventManager;
        this.paginationUtil = paginationUtil;
        this.paginationConfig = paginationConfig;
        this.itemsPerPage = shared_1.ITEMS_PER_PAGE;
        this.routeData = this.activatedRoute.data.subscribe(function (data) {
            _this.page = data['pagingParams'].page;
            _this.previousPage = data['pagingParams'].page;
            _this.reverse = data['pagingParams'].ascending;
            _this.predicate = data['pagingParams'].predicate;
        });
        this.jhiLanguageService.setLocations(['demandeMedicamentVf']);
    }
    DemandeMedicamentVfComponent.prototype.loadAll = function () {
        var _this = this;
        this.demandeMedicamentVfService.query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort()
        }).subscribe(function (res) { return _this.onSuccess(res.json(), res.headers); }, function (res) { return _this.onError(res.json()); });
    };
    DemandeMedicamentVfComponent.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    };
    DemandeMedicamentVfComponent.prototype.transition = function () {
        this.router.navigate(['/demande-medicament-vf'], { queryParams: {
                page: this.page,
                size: this.itemsPerPage,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
        });
        this.loadAll();
    };
    DemandeMedicamentVfComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'demandemedicamentListModification', content: 'OK' });
        this.isSaving = false;
    };
    DemandeMedicamentVfComponent.prototype.Accepter = function (DemandeMedicamentVf) {
        var _this = this;
        DemandeMedicamentVf.etat = 300;
        this.demandeMedicamentVfService.update(DemandeMedicamentVf).subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onError(res.json()); });
    };
    DemandeMedicamentVfComponent.prototype.clear = function () {
        this.page = 0;
        this.router.navigate(['/demande-medicament-vf', {
                page: this.page,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }]);
        this.loadAll();
    };
    DemandeMedicamentVfComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    DemandeMedicamentVfComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAll();
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInDemandeMedicamentVfs();
    };
    DemandeMedicamentVfComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    DemandeMedicamentVfComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    DemandeMedicamentVfComponent.prototype.registerChangeInDemandeMedicamentVfs = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('demandeMedicamentVfListModification', function (response) { return _this.loadAll(); });
    };
    DemandeMedicamentVfComponent.prototype.sort = function () {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    DemandeMedicamentVfComponent.prototype.onSuccess = function (data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = headers.get('X-Total-Count');
        this.queryCount = this.totalItems;
        // this.page = pagingParams.page;
        this.demandeMedicamentVfs = data;
    };
    DemandeMedicamentVfComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return DemandeMedicamentVfComponent;
}());
DemandeMedicamentVfComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demande-medicament-vf',
        templateUrl: './demande-medicament-vf.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        demande_medicament_vf_service_1.DemandeMedicamentVfService,
        ng_jhipster_1.ParseLinks,
        ng_jhipster_1.AlertService,
        shared_1.Principal,
        router_1.ActivatedRoute,
        router_1.Router,
        ng_jhipster_1.EventManager,
        ng_jhipster_1.PaginationUtil,
        uib_pagination_config_1.PaginationConfig])
], DemandeMedicamentVfComponent);
exports.DemandeMedicamentVfComponent = DemandeMedicamentVfComponent;
//# sourceMappingURL=demande-medicament-vf.component.js.map
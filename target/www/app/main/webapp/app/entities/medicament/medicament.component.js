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
var medicament_service_1 = require("./medicament.service");
var shared_1 = require("../../shared");
var uib_pagination_config_1 = require("../../blocks/config/uib-pagination.config");
var demande_medicament_vf_service_1 = require("../demande-medicament-vf/demande-medicament-vf.service");
var MedicamentComponent = (function () {
    function MedicamentComponent(jhiLanguageService, medicamentService, parseLinks, alertService, principal, demandemedicamentService, activatedRoute, router, eventManager, paginationUtil, paginationConfig) {
        var _this = this;
        this.jhiLanguageService = jhiLanguageService;
        this.medicamentService = medicamentService;
        this.parseLinks = parseLinks;
        this.alertService = alertService;
        this.principal = principal;
        this.demandemedicamentService = demandemedicamentService;
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
        this.jhiLanguageService.setLocations(['medicament']);
    }
    MedicamentComponent.prototype.loadAll = function () {
        var _this = this;
        this.medicamentService.query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort()
        }).subscribe(function (res) { return _this.onSuccess(res.json(), res.headers); }, function (res) { return _this.onError(res.json()); });
    };
    MedicamentComponent.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    };
    MedicamentComponent.prototype.transition = function () {
        this.router.navigate(['/medicament'], { queryParams: {
                page: this.page,
                size: this.itemsPerPage,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
        });
        this.loadAll();
    };
    MedicamentComponent.prototype.clear = function () {
        this.page = 0;
        this.router.navigate(['/medicament', {
                page: this.page,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }]);
        this.loadAll();
    };
    MedicamentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAll();
        this.loadAllDemandes();
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInMedicaments();
    };
    MedicamentComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    MedicamentComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    MedicamentComponent.prototype.loadAllDemandes = function () {
        var _this = this;
        this.demandemedicamentService.query().subscribe(function (res) {
            _this.demandes = res.json();
        }, function (res) { return _this.onError(res.json()); });
    };
    MedicamentComponent.prototype.registerChangeInMedicaments = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('medicamentListModification', function (response) { return _this.loadAll(); });
    };
    MedicamentComponent.prototype.sort = function () {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    MedicamentComponent.prototype.onSuccess = function (data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = headers.get('X-Total-Count');
        this.queryCount = this.totalItems;
        // this.page = pagingParams.page;
        this.medicaments = data;
    };
    MedicamentComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return MedicamentComponent;
}());
MedicamentComponent = __decorate([
    core_1.Component({
        selector: 'jhi-medicament',
        templateUrl: './medicament.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        medicament_service_1.MedicamentService,
        ng_jhipster_1.ParseLinks,
        ng_jhipster_1.AlertService,
        shared_1.Principal,
        demande_medicament_vf_service_1.DemandeMedicamentVfService,
        router_1.ActivatedRoute,
        router_1.Router,
        ng_jhipster_1.EventManager,
        ng_jhipster_1.PaginationUtil,
        uib_pagination_config_1.PaginationConfig])
], MedicamentComponent);
exports.MedicamentComponent = MedicamentComponent;
//# sourceMappingURL=medicament.component.js.map
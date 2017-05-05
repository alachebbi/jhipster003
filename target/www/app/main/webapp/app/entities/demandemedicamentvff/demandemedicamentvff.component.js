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
var shared_1 = require("../../shared");
var uib_pagination_config_1 = require("../../blocks/config/uib-pagination.config");
var medicament_service_1 = require("../medicament/medicament.service");
var DemandemedicamentvffComponent = (function () {
    function DemandemedicamentvffComponent(jhiLanguageService, demandemedicamentvffService, medicamentService, parseLinks, alertService, principal, activatedRoute, router, eventManager, paginationUtil, paginationConfig) {
        var _this = this;
        this.jhiLanguageService = jhiLanguageService;
        this.demandemedicamentvffService = demandemedicamentvffService;
        this.medicamentService = medicamentService;
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
        this.jhiLanguageService.setLocations(['demandemedicamentvff']);
    }
    DemandemedicamentvffComponent.prototype.loadAll = function () {
        var _this = this;
        this.demandemedicamentvffService.query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort()
        }).subscribe(function (res) { return _this.onSuccess(res.json(), res.headers); }, function (res) { return _this.onError(res.json()); });
    };
    DemandemedicamentvffComponent.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    };
    DemandemedicamentvffComponent.prototype.transition = function () {
        this.router.navigate(['/demandemedicamentvff'], { queryParams: {
                page: this.page,
                size: this.itemsPerPage,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
        });
        this.loadAll();
    };
    DemandemedicamentvffComponent.prototype.clear = function () {
        this.page = 0;
        this.router.navigate(['/demandemedicamentvff', {
                page: this.page,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }]);
        this.loadAll();
    };
    DemandemedicamentvffComponent.prototype.Accepter = function (Demandemedicamentvff, Medicament) {
        var _this = this;
        Demandemedicamentvff.etat = "Acceptée";
        this.demandemedicamentvffService.update(Demandemedicamentvff).subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onError(res.json()); });
        this.medicamentService.findbyname(Demandemedicamentvff.medicamentid)
            .subscribe(function (med) {
            med.quantity -= Demandemedicamentvff.quatite;
            _this.medicamentService.modifier(med).subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onError(res.json()); });
        });
    };
    DemandemedicamentvffComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'demandeModification', content: 'OK' });
        this.isSaving = false;
    };
    DemandemedicamentvffComponent.prototype.onSaveSuccess2 = function (result) {
        this.eventManager.broadcast({ name: 'demandeModification', content: 'OK' });
        this.isSaving = false;
    };
    DemandemedicamentvffComponent.prototype.loadAllmed = function () {
        var _this = this;
        this.medicamentService.query().subscribe(function (res) {
            _this.medicaments = res.json();
        }, function (res) { return _this.onError(res.json()); });
    };
    DemandemedicamentvffComponent.prototype.Refuser = function (Demandemedicamentvff) {
        var _this = this;
        Demandemedicamentvff.etat = "Refusée";
        this.demandemedicamentvffService.update(Demandemedicamentvff).subscribe(function (res) { return _this.onSaveSuccess2(res); }, function (res) { return _this.onError(res.json()); });
    };
    DemandemedicamentvffComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAll();
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInDemandemedicamentvffs();
    };
    DemandemedicamentvffComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    DemandemedicamentvffComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    DemandemedicamentvffComponent.prototype.registerChangeInDemandemedicamentvffs = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('demandemedicamentvffListModification', function (response) { return _this.loadAll(); });
    };
    DemandemedicamentvffComponent.prototype.sort = function () {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    DemandemedicamentvffComponent.prototype.onSuccess = function (data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = headers.get('X-Total-Count');
        this.queryCount = this.totalItems;
        // this.page = pagingParams.page;
        this.demandemedicamentvffs = data;
    };
    DemandemedicamentvffComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return DemandemedicamentvffComponent;
}());
DemandemedicamentvffComponent = __decorate([
    core_1.Component({
        selector: 'jhi-demandemedicamentvff',
        templateUrl: './demandemedicamentvff.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        demandemedicamentvff_service_1.DemandemedicamentvffService,
        medicament_service_1.MedicamentService,
        ng_jhipster_1.ParseLinks,
        ng_jhipster_1.AlertService,
        shared_1.Principal,
        router_1.ActivatedRoute,
        router_1.Router,
        ng_jhipster_1.EventManager,
        ng_jhipster_1.PaginationUtil,
        uib_pagination_config_1.PaginationConfig])
], DemandemedicamentvffComponent);
exports.DemandemedicamentvffComponent = DemandemedicamentvffComponent;
//# sourceMappingURL=demandemedicamentvff.component.js.map
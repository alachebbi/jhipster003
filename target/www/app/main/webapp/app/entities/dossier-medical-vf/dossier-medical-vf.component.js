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
var dossier_medical_vf_service_1 = require("./dossier-medical-vf.service");
var shared_1 = require("../../shared");
var uib_pagination_config_1 = require("../../blocks/config/uib-pagination.config");
var DossierMedicalVFComponent = (function () {
    function DossierMedicalVFComponent(jhiLanguageService, dossierMedicalVFService, parseLinks, alertService, principal, activatedRoute, dataUtils, router, eventManager, paginationUtil, paginationConfig) {
        var _this = this;
        this.jhiLanguageService = jhiLanguageService;
        this.dossierMedicalVFService = dossierMedicalVFService;
        this.parseLinks = parseLinks;
        this.alertService = alertService;
        this.principal = principal;
        this.activatedRoute = activatedRoute;
        this.dataUtils = dataUtils;
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
        this.jhiLanguageService.setLocations(['dossierMedicalVF']);
    }
    DossierMedicalVFComponent.prototype.loadAll = function () {
        var _this = this;
        this.dossierMedicalVFService.query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort()
        }).subscribe(function (res) { return _this.onSuccess(res.json(), res.headers); }, function (res) { return _this.onError(res.json()); });
    };
    DossierMedicalVFComponent.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    };
    DossierMedicalVFComponent.prototype.transition = function () {
        this.router.navigate(['/dossier-medical-vf'], { queryParams: {
                page: this.page,
                size: this.itemsPerPage,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
        });
        this.loadAll();
    };
    DossierMedicalVFComponent.prototype.clear = function () {
        this.page = 0;
        this.router.navigate(['/dossier-medical-vf', {
                page: this.page,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }]);
        this.loadAll();
    };
    DossierMedicalVFComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAll();
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInDossierMedicalVFS();
    };
    DossierMedicalVFComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    DossierMedicalVFComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    DossierMedicalVFComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    DossierMedicalVFComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    DossierMedicalVFComponent.prototype.registerChangeInDossierMedicalVFS = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('dossierMedicalVFListModification', function (response) { return _this.loadAll(); });
    };
    DossierMedicalVFComponent.prototype.sort = function () {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    DossierMedicalVFComponent.prototype.onSuccess = function (data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = headers.get('X-Total-Count');
        this.queryCount = this.totalItems;
        // this.page = pagingParams.page;
        this.dossierMedicalVFS = data;
    };
    DossierMedicalVFComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return DossierMedicalVFComponent;
}());
DossierMedicalVFComponent = __decorate([
    core_1.Component({
        selector: 'jhi-dossier-medical-vf',
        templateUrl: './dossier-medical-vf.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        dossier_medical_vf_service_1.DossierMedicalVFService,
        ng_jhipster_1.ParseLinks,
        ng_jhipster_1.AlertService,
        shared_1.Principal,
        router_1.ActivatedRoute,
        ng_jhipster_1.DataUtils,
        router_1.Router,
        ng_jhipster_1.EventManager,
        ng_jhipster_1.PaginationUtil,
        uib_pagination_config_1.PaginationConfig])
], DossierMedicalVFComponent);
exports.DossierMedicalVFComponent = DossierMedicalVFComponent;
//# sourceMappingURL=dossier-medical-vf.component.js.map
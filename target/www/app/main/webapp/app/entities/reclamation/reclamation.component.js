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
var reclamation_service_1 = require("./reclamation.service");
var shared_1 = require("../../shared");
var uib_pagination_config_1 = require("../../blocks/config/uib-pagination.config");
var ReclamationComponent = (function () {
    function ReclamationComponent(jhiLanguageService, reclamationService, parseLinks, alertService, principal, activatedRoute, router, eventManager, paginationUtil, paginationConfig) {
        var _this = this;
        this.jhiLanguageService = jhiLanguageService;
        this.reclamationService = reclamationService;
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
        this.jhiLanguageService.setLocations(['reclamation']);
    }
    ReclamationComponent.prototype.loadAll = function () {
        var _this = this;
        this.reclamationService.query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort(),
        }).subscribe(function (res) { return _this.onSuccess(res.json(), res.headers); }, function (res) { return _this.onError(res.json()); });
    };
    ReclamationComponent.prototype.loadAlllikes = function () {
        var _this = this;
        this.reclamations.forEach(function (item, index) {
            _this.reclamationService.find(item.id)
                .subscribe(function (reclamation) {
                if (reclamation.etat == "Traitée") {
                    document.getElementById("l" + index).setAttribute("disabled", "disabled");
                    document.getElementById("l" + index).style.opacity = "0.3";
                }
            });
        });
    };
    ReclamationComponent.prototype.loadAlllike = function () {
        var _this = this;
        this.reclamations.forEach(function (item, index2) {
            _this.reclamationService.find(item.id)
                .subscribe(function (reclamation) {
                if (reclamation.etat == "Traitée") {
                    document.getElementById("k" + index2).setAttribute("disabled", "disabled");
                    document.getElementById("k" + index2).style.opacity = "0.3";
                }
            });
        });
    };
    ReclamationComponent.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    };
    ReclamationComponent.prototype.transition = function () {
        this.router.navigate(['/reclamation'], {
            queryParams: {
                page: this.page,
                size: this.itemsPerPage,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
        });
        this.loadAll();
    };
    ReclamationComponent.prototype.clear = function () {
        this.page = 0;
        this.router.navigate(['/reclamation', {
                page: this.page,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }]);
        this.loadAll();
    };
    ReclamationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAll();
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInReclamations();
    };
    ReclamationComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    ReclamationComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    ReclamationComponent.prototype.registerChangeInReclamations = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('reclamationListModification', function (response) { return _this.loadAll(); });
    };
    /*reclamationTraiter(){
            this.loadAll();
        this.reclamations.forEach((item,index)=>{
    
                if (item.etat=="Traitée" )
                {
                    document.getElementById("l" ).setAttribute("disabled","disabled")
                    document.getElementById("l" + index).style.opacity="0.3"
    
    
                }
            }
        );
    
    }*/
    ReclamationComponent.prototype.Traiter = function (Reclamation) {
        var _this = this;
        /*   this.reclamations.forEach((item,index)=>{
   
                   if (item.etat=="Traitée" )
                   {
                       // document.getElementById("l" + index).setAttribute("disabled","disabled")
                       document.getElementById("l" + index).style.opacity="0.3";
                       console.log("asslema");
   
                   }
               }
           );
   */
        Reclamation.etat = "Traitée";
        this.reclamationService.update(Reclamation)
            .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onError(res.json()); });
    };
    ReclamationComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'reclamationListModification', content: 'OK' });
        this.isSaving = false;
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    ReclamationComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    ReclamationComponent.prototype.sort = function () {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    ReclamationComponent.prototype.onSuccess = function (data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = headers.get('X-Total-Count');
        this.queryCount = this.totalItems;
        // this.page = pagingParams.page;
        this.reclamations = data;
        this.loadAlllikes();
        this.loadAlllike();
        /*this.reclamations.forEach((item,index)=>{

                if (item.etat=="Traitée" )
                {
                    // document.getElementById("l" + index).setAttribute("disabled","disabled")
                    document.getElementById("l" + index).style.opacity="0.3";
console.log("asslema");

                }
            }
        );*/
    };
    return ReclamationComponent;
}());
ReclamationComponent = __decorate([
    core_1.Component({
        selector: 'jhi-reclamation',
        templateUrl: './reclamation.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        reclamation_service_1.ReclamationService,
        ng_jhipster_1.ParseLinks,
        ng_jhipster_1.AlertService,
        shared_1.Principal,
        router_1.ActivatedRoute,
        router_1.Router,
        ng_jhipster_1.EventManager,
        ng_jhipster_1.PaginationUtil,
        uib_pagination_config_1.PaginationConfig])
], ReclamationComponent);
exports.ReclamationComponent = ReclamationComponent;
//# sourceMappingURL=reclamation.component.js.map
webpackHotUpdate(0,{

/***/ "./src/main/webapp/app/entities/demandemedicamentvff/demandemedicamentvff.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var ng_jhipster_1 = __webpack_require__(1);
var demandemedicamentvff_service_1 = __webpack_require__("./src/main/webapp/app/entities/demandemedicamentvff/demandemedicamentvff.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var uib_pagination_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/uib-pagination.config.ts");
var medicament_service_1 = __webpack_require__("./src/main/webapp/app/entities/medicament/medicament.service.ts");
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
        /* this.medicamentService.query().subscribe((res: Response) => {
         this.medicaments = res.json();
         this.medicaments.forEach((Medicament,index)=>
         {
         if (Medicament.nom == Demandemedicamentvff.medicamentid )
         {
         Medicament.quantity = 30;
         this.medicamentService.update(Medicament).subscribe((res: Medicament) => this.onSaveSuccess(res),
         (res: Response) => this.onError(res.json()));

         }
         })
         },
         (res: Response) => this.onError(res.json())
         );*/
        this.medicamentService.findbyname(Demandemedicamentvff.medicamentid)
            .subscribe(function (med) {
            med.quantity = med.quantity - Demandemedicamentvff.quatite;
            _this.medicamentService.update(med).subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onError(res.json()); });
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
        template: __webpack_require__("./src/main/webapp/app/entities/demandemedicamentvff/demandemedicamentvff.component.html")
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


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2RlbWFuZGVtZWRpY2FtZW50dmZmL2RlbWFuZGVtZWRpY2FtZW50dmZmLmNvbXBvbmVudC50cz80YWY4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBNkQ7QUFFN0Qsc0NBQXlEO0FBRXpELDJDQUF5RztBQUd6RyxnSkFBNkU7QUFDN0UsNEVBQXlEO0FBQ3pELGtIQUE2RTtBQUU3RSxrSEFBcUU7QUFPckUsSUFBYSw2QkFBNkI7SUFtQnRDLHVDQUNZLGtCQUFzQyxFQUN0QywyQkFBd0QsRUFDeEQsaUJBQW9DLEVBQ3BDLFVBQXNCLEVBQ3RCLFlBQTBCLEVBQzFCLFNBQW9CLEVBQ3BCLGNBQThCLEVBQzlCLE1BQWMsRUFDZCxZQUEwQixFQUMxQixjQUE4QixFQUM5QixnQkFBa0M7UUFYOUMsaUJBcUJDO1FBcEJXLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtRQUN4RCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRTFDLElBQUksQ0FBQyxZQUFZLEdBQUcsdUJBQWMsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFJO1lBQ3BELEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxD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QVk7UUFDViw0QkFBYztRQUNaLHdDQUFnQjtHQTlCckMsNkJBQTZCLENBbUx6QztBQW5MWSxzRUFBNkIiLCJmaWxlIjoiMC43OTdjNzE0NDkwN2FkOTU3NWEwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBFdmVudE1hbmFnZXIsIFBhcnNlTGlua3MsIFBhZ2luYXRpb25VdGlsLCBKaGlMYW5ndWFnZVNlcnZpY2UsIEFsZXJ0U2VydmljZSB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgRGVtYW5kZW1lZGljYW1lbnR2ZmYgfSBmcm9tICcuL2RlbWFuZGVtZWRpY2FtZW50dmZmLm1vZGVsJztcbmltcG9ydCB7IERlbWFuZGVtZWRpY2FtZW50dmZmU2VydmljZSB9IGZyb20gJy4vZGVtYW5kZW1lZGljYW1lbnR2ZmYuc2VydmljZSc7XG5pbXBvcnQgeyBJVEVNU19QRVJfUEFHRSwgUHJpbmNpcGFsIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IFBhZ2luYXRpb25Db25maWcgfSBmcm9tICcuLi8uLi9ibG9ja3MvY29uZmlnL3VpYi1wYWdpbmF0aW9uLmNvbmZpZyc7XG5cbmltcG9ydCB7IE1lZGljYW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vbWVkaWNhbWVudC9tZWRpY2FtZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVkaWNhbWVudCB9IGZyb20gJy4uL21lZGljYW1lbnQvbWVkaWNhbWVudC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWRlbWFuZGVtZWRpY2FtZW50dmZmJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGVtYW5kZW1lZGljYW1lbnR2ZmYuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERlbWFuZGVtZWRpY2FtZW50dmZmQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5jdXJyZW50QWNjb3VudDogYW55O1xuICAgIGRlbWFuZGVtZWRpY2FtZW50dmZmczogRGVtYW5kZW1lZGljYW1lbnR2ZmZbXTtcbiAgICBlcnJvcjogYW55O1xuICAgIG1lZGljYW1lbnRzIDogTWVkaWNhbWVudCBbXTtcbiAgICBzdWNjZXNzOiBhbnk7XG4gICAgZXZlbnRTdWJzY3JpYmVyOiBTdWJzY3JpcHRpb247XG4gICAgcm91dGVEYXRhOiBhbnk7XG4gICAgbGlua3M6IGFueTtcbiAgICB0b3RhbEl0ZW1zOiBhbnk7XG4gICAgcXVlcnlDb3VudDogYW55O1xuICAgIGl0ZW1zUGVyUGFnZTogYW55O1xuICAgIHBhZ2U6IGFueTtcbiAgICBwcmVkaWNhdGU6IGFueTtcbiAgICBwcmV2aW91c1BhZ2U6IGFueTtcbiAgICByZXZlcnNlOiBhbnk7XG4gICAgaXNTYXZpbmc6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBqaGlMYW5ndWFnZVNlcnZpY2U6IEpoaUxhbmd1YWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBkZW1hbmRlbWVkaWNhbWVudHZmZlNlcnZpY2U6IERlbWFuZGVtZWRpY2FtZW50dmZmU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBtZWRpY2FtZW50U2VydmljZSA6TWVkaWNhbWVudFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcGFyc2VMaW5rczogUGFyc2VMaW5rcyxcbiAgICAgICAgcHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBwcmluY2lwYWw6IFByaW5jaXBhbCxcbiAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXIsXG4gICAgICAgIHByaXZhdGUgcGFnaW5hdGlvblV0aWw6IFBhZ2luYXRpb25VdGlsLFxuICAgICAgICBwcml2YXRlIHBhZ2luYXRpb25Db25maWc6IFBhZ2luYXRpb25Db25maWdcbiAgICApIHtcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBJVEVNU19QRVJfUEFHRTtcbiAgICAgICAgdGhpcy5yb3V0ZURhdGEgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGEuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYWdlID0gZGF0YVsncGFnaW5nUGFyYW1zJ10ucGFnZTtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNQYWdlID0gZGF0YVsncGFnaW5nUGFyYW1zJ10ucGFnZTtcbiAgICAgICAgICAgIHRoaXMucmV2ZXJzZSA9IGRhdGFbJ3BhZ2luZ1BhcmFtcyddLmFzY2VuZGluZztcbiAgICAgICAgICAgIHRoaXMucHJlZGljYXRlID0gZGF0YVsncGFnaW5nUGFyYW1zJ10ucHJlZGljYXRlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5qaGlMYW5ndWFnZVNlcnZpY2Uuc2V0TG9jYXRpb25zKFsnZGVtYW5kZW1lZGljYW1lbnR2ZmYnXSk7XG4gICAgfVxuXG4gICAgbG9hZEFsbCgpIHtcbiAgICAgICAgdGhpcy5kZW1hbmRlbWVkaWNhbWVudHZmZlNlcnZpY2UucXVlcnkoe1xuICAgICAgICAgICAgcGFnZTogdGhpcy5wYWdlIC0gMSxcbiAgICAgICAgICAgIHNpemU6IHRoaXMuaXRlbXNQZXJQYWdlLFxuICAgICAgICAgICAgc29ydDogdGhpcy5zb3J0KCl9KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vblN1Y2Nlc3MocmVzLmpzb24oKSwgcmVzLmhlYWRlcnMpLFxuICAgICAgICAgICAgKHJlczogUmVzcG9uc2UpID0+IHRoaXMub25FcnJvcihyZXMuanNvbigpKVxuICAgICAgICApO1xuICAgIH1cbiAgICBsb2FkUGFnZSAocGFnZTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChwYWdlICE9PSB0aGlzLnByZXZpb3VzUGFnZSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1BhZ2UgPSBwYWdlO1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdHJhbnNpdGlvbigpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGVtYW5kZW1lZGljYW1lbnR2ZmYnXSwge3F1ZXJ5UGFyYW1zOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgICAgICAgICAgICBzaXplOiB0aGlzLml0ZW1zUGVyUGFnZSxcbiAgICAgICAgICAgICAgICBzb3J0OiB0aGlzLnByZWRpY2F0ZSArICcsJyArICh0aGlzLnJldmVyc2UgPyAnYXNjJyA6ICdkZXNjJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubG9hZEFsbCgpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnBhZ2UgPSAwO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9kZW1hbmRlbWVkaWNhbWVudHZmZicsIHtcbiAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgICAgICAgIHNvcnQ6IHRoaXMucHJlZGljYXRlICsgJywnICsgKHRoaXMucmV2ZXJzZSA/ICdhc2MnIDogJ2Rlc2MnKVxuICAgICAgICB9XSk7XG4gICAgICAgIHRoaXMubG9hZEFsbCgpO1xuICAgIH1cbiAgICBBY2NlcHRlcihEZW1hbmRlbWVkaWNhbWVudHZmZixNZWRpY2FtZW50KSB7XG4gICAgICAgIERlbWFuZGVtZWRpY2FtZW50dmZmLmV0YXQgPSBcIkFjY2VwdMOpZVwiO1xuICAgICAgICB0aGlzLmRlbWFuZGVtZWRpY2FtZW50dmZmU2VydmljZS51cGRhdGUoRGVtYW5kZW1lZGljYW1lbnR2ZmYpLnN1YnNjcmliZSgocmVzOiBEZW1hbmRlbWVkaWNhbWVudHZmZikgPT4gdGhpcy5vblNhdmVTdWNjZXNzKHJlcyksXG4gICAgICAgICAgICAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vbkVycm9yKHJlcy5qc29uKCkpKTtcblxuXG4gICAgICAgIC8qIHRoaXMubWVkaWNhbWVudFNlcnZpY2UucXVlcnkoKS5zdWJzY3JpYmUoKHJlczogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgIHRoaXMubWVkaWNhbWVudHMgPSByZXMuanNvbigpO1xuICAgICAgICAgdGhpcy5tZWRpY2FtZW50cy5mb3JFYWNoKChNZWRpY2FtZW50LGluZGV4KT0+XG4gICAgICAgICB7XG4gICAgICAgICBpZiAoTWVkaWNhbWVudC5ub20gPT0gRGVtYW5kZW1lZGljYW1lbnR2ZmYubWVkaWNhbWVudGlkIClcbiAgICAgICAgIHtcbiAgICAgICAgIE1lZGljYW1lbnQucXVhbnRpdHkgPSAzMDtcbiAgICAgICAgIHRoaXMubWVkaWNhbWVudFNlcnZpY2UudXBkYXRlKE1lZGljYW1lbnQpLnN1YnNjcmliZSgocmVzOiBNZWRpY2FtZW50KSA9PiB0aGlzLm9uU2F2ZVN1Y2Nlc3MocmVzKSxcbiAgICAgICAgIChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLm9uRXJyb3IocmVzLmpzb24oKSkpO1xuXG4gICAgICAgICB9XG4gICAgICAgICB9KVxuICAgICAgICAgfSxcbiAgICAgICAgIChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLm9uRXJyb3IocmVzLmpzb24oKSlcbiAgICAgICAgICk7Ki9cblxuXG4gICAgICAgIHRoaXMubWVkaWNhbWVudFNlcnZpY2UuZmluZGJ5bmFtZShEZW1hbmRlbWVkaWNhbWVudHZmZi5tZWRpY2FtZW50aWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKG1lZCA9PiB7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgbWVkLnF1YW50aXR5ID0gbWVkLnF1YW50aXR5IC0gRGVtYW5kZW1lZGljYW1lbnR2ZmYucXVhdGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVkaWNhbWVudFNlcnZpY2UudXBkYXRlKG1lZCkuc3Vic2NyaWJlKChyZXM6IE1lZGljYW1lbnQpID0+IHRoaXMub25TYXZlU3VjY2VzcyhyZXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLm9uRXJyb3IocmVzLmpzb24oKSkpO1xuXG5cbiAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNhdmVTdWNjZXNzIChyZXN1bHQ6IERlbWFuZGVtZWRpY2FtZW50dmZmKSB7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLmJyb2FkY2FzdCh7IG5hbWU6ICdkZW1hbmRlTW9kaWZpY2F0aW9uJywgY29udGVudDogJ09LJ30pO1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG5cblxuICAgIH1cbiAgICBwcml2YXRlIG9uU2F2ZVN1Y2Nlc3MyIChyZXN1bHQ6IE1lZGljYW1lbnQpIHtcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuYnJvYWRjYXN0KHsgbmFtZTogJ2RlbWFuZGVNb2RpZmljYXRpb24nLCBjb250ZW50OiAnT0snfSk7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcblxuXG4gICAgfVxuICAgIGxvYWRBbGxtZWQoKSB7XG4gICAgICAgIHRoaXMubWVkaWNhbWVudFNlcnZpY2UucXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWVkaWNhbWVudHMgPSByZXMuanNvbigpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLm9uRXJyb3IocmVzLmpzb24oKSlcbiAgICAgICAgKTtcbiAgICB9XG4gICAgUmVmdXNlcihEZW1hbmRlbWVkaWNhbWVudHZmZil7XG4gICAgICAgIERlbWFuZGVtZWRpY2FtZW50dmZmLmV0YXQ9XCJSZWZ1c8OpZVwiO1xuICAgICAgICB0aGlzLmRlbWFuZGVtZWRpY2FtZW50dmZmU2VydmljZS51cGRhdGUoRGVtYW5kZW1lZGljYW1lbnR2ZmYpLnN1YnNjcmliZSgocmVzOiBEZW1hbmRlbWVkaWNhbWVudHZmZikgPT4gdGhpcy5vblNhdmVTdWNjZXNzMihyZXMpLFxuICAgICAgICAgICAgKHJlczogUmVzcG9uc2UpID0+IHRoaXMub25FcnJvcihyZXMuanNvbigpKSk7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmxvYWRBbGwoKTtcbiAgICAgICAgdGhpcy5wcmluY2lwYWwuaWRlbnRpdHkoKS50aGVuKChhY2NvdW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50ID0gYWNjb3VudDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2VJbkRlbWFuZGVtZWRpY2FtZW50dmZmcygpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5kZXN0cm95KHRoaXMuZXZlbnRTdWJzY3JpYmVyKTtcbiAgICB9XG5cbiAgICB0cmFja0lkIChpbmRleDogbnVtYmVyLCBpdGVtOiBEZW1hbmRlbWVkaWNhbWVudHZmZikge1xuICAgICAgICByZXR1cm4gaXRlbS5pZDtcbiAgICB9XG5cblxuXG4gICAgcmVnaXN0ZXJDaGFuZ2VJbkRlbWFuZGVtZWRpY2FtZW50dmZmcygpIHtcbiAgICAgICAgdGhpcy5ldmVudFN1YnNjcmliZXIgPSB0aGlzLmV2ZW50TWFuYWdlci5zdWJzY3JpYmUoJ2RlbWFuZGVtZWRpY2FtZW50dmZmTGlzdE1vZGlmaWNhdGlvbicsIChyZXNwb25zZSkgPT4gdGhpcy5sb2FkQWxsKCkpO1xuICAgIH1cblxuICAgIHNvcnQgKCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gW3RoaXMucHJlZGljYXRlICsgJywnICsgKHRoaXMucmV2ZXJzZSA/ICdhc2MnIDogJ2Rlc2MnKV07XG4gICAgICAgIGlmICh0aGlzLnByZWRpY2F0ZSAhPT0gJ2lkJykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goJ2lkJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU3VjY2VzcyAoZGF0YSwgaGVhZGVycykge1xuICAgICAgICB0aGlzLmxpbmtzID0gdGhpcy5wYXJzZUxpbmtzLnBhcnNlKGhlYWRlcnMuZ2V0KCdsaW5rJykpO1xuICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSBoZWFkZXJzLmdldCgnWC1Ub3RhbC1Db3VudCcpO1xuICAgICAgICB0aGlzLnF1ZXJ5Q291bnQgPSB0aGlzLnRvdGFsSXRlbXM7XG4gICAgICAgIC8vIHRoaXMucGFnZSA9IHBhZ2luZ1BhcmFtcy5wYWdlO1xuICAgICAgICB0aGlzLmRlbWFuZGVtZWRpY2FtZW50dmZmcyA9IGRhdGE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkVycm9yIChlcnJvcikge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcihlcnJvci5tZXNzYWdlLCBudWxsLCBudWxsKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2RlbWFuZGVtZWRpY2FtZW50dmZmL2RlbWFuZGVtZWRpY2FtZW50dmZmLmNvbXBvbmVudC50cyJdLCJzb3VyY2VSb290IjoiIn0=
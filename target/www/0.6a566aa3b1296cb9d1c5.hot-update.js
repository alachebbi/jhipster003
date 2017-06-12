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
            med.quantity = Demandemedicamentvff.quatite;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2RlbWFuZGVtZWRpY2FtZW50dmZmL2RlbWFuZGVtZWRpY2FtZW50dmZmLmNvbXBvbmVudC50cz80YWY4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBNkQ7QUFFN0Qsc0NBQXlEO0FBRXpELDJDQUF5RztBQUd6RyxnSkFBNkU7QUFDN0UsNEVBQXlEO0FBQ3pELGtIQUE2RTtBQUU3RSxrSEFBcUU7QUFPckUsSUFBYSw2QkFBNkI7SUFtQnRDLHVDQUNZLGtCQUFzQyxFQUN0QywyQkFBd0QsRUFDeEQsaUJBQW9DLEVBQ3BDLFVBQXNCLEVBQ3RCLFlBQTBCLEVBQzFCLFNBQW9CLEVBQ3BCLGNBQThCLEVBQzlCLE1BQWMsRUFDZCxZQUEwQixFQUMxQixjQUE4QixFQUM5QixnQkFBa0M7UUFYOUMsaUJBcUJDO1FBcEJXLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtRQUN4RCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRTFDLElBQUksQ0FBQyxZQUFZLEdBQUcsdUJBQWMsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFJO1lBQ3BELEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxD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Q0FBZ0I7R0E5QnJDLDZCQUE2QixDQW1MekM7QUFuTFksc0VBQTZCIiwiZmlsZSI6IjAuNmE1NjZhYTNiMTI5NmNiOWQxYzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgRXZlbnRNYW5hZ2VyLCBQYXJzZUxpbmtzLCBQYWdpbmF0aW9uVXRpbCwgSmhpTGFuZ3VhZ2VTZXJ2aWNlLCBBbGVydFNlcnZpY2UgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IERlbWFuZGVtZWRpY2FtZW50dmZmIH0gZnJvbSAnLi9kZW1hbmRlbWVkaWNhbWVudHZmZi5tb2RlbCc7XG5pbXBvcnQgeyBEZW1hbmRlbWVkaWNhbWVudHZmZlNlcnZpY2UgfSBmcm9tICcuL2RlbWFuZGVtZWRpY2FtZW50dmZmLnNlcnZpY2UnO1xuaW1wb3J0IHsgSVRFTVNfUEVSX1BBR0UsIFByaW5jaXBhbCB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vYmxvY2tzL2NvbmZpZy91aWItcGFnaW5hdGlvbi5jb25maWcnO1xuXG5pbXBvcnQgeyBNZWRpY2FtZW50U2VydmljZSB9IGZyb20gJy4uL21lZGljYW1lbnQvbWVkaWNhbWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IE1lZGljYW1lbnQgfSBmcm9tICcuLi9tZWRpY2FtZW50L21lZGljYW1lbnQubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1kZW1hbmRlbWVkaWNhbWVudHZmZicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RlbWFuZGVtZWRpY2FtZW50dmZmLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEZW1hbmRlbWVkaWNhbWVudHZmZkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuY3VycmVudEFjY291bnQ6IGFueTtcbiAgICBkZW1hbmRlbWVkaWNhbWVudHZmZnM6IERlbWFuZGVtZWRpY2FtZW50dmZmW107XG4gICAgZXJyb3I6IGFueTtcbiAgICBtZWRpY2FtZW50cyA6IE1lZGljYW1lbnQgW107XG4gICAgc3VjY2VzczogYW55O1xuICAgIGV2ZW50U3Vic2NyaWJlcjogU3Vic2NyaXB0aW9uO1xuICAgIHJvdXRlRGF0YTogYW55O1xuICAgIGxpbmtzOiBhbnk7XG4gICAgdG90YWxJdGVtczogYW55O1xuICAgIHF1ZXJ5Q291bnQ6IGFueTtcbiAgICBpdGVtc1BlclBhZ2U6IGFueTtcbiAgICBwYWdlOiBhbnk7XG4gICAgcHJlZGljYXRlOiBhbnk7XG4gICAgcHJldmlvdXNQYWdlOiBhbnk7XG4gICAgcmV2ZXJzZTogYW55O1xuICAgIGlzU2F2aW5nOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgamhpTGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZGVtYW5kZW1lZGljYW1lbnR2ZmZTZXJ2aWNlOiBEZW1hbmRlbWVkaWNhbWVudHZmZlNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbWVkaWNhbWVudFNlcnZpY2UgOk1lZGljYW1lbnRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBhcnNlTGlua3M6IFBhcnNlTGlua3MsXG4gICAgICAgIHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWwsXG4gICAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyLFxuICAgICAgICBwcml2YXRlIHBhZ2luYXRpb25VdGlsOiBQYWdpbmF0aW9uVXRpbCxcbiAgICAgICAgcHJpdmF0ZSBwYWdpbmF0aW9uQ29uZmlnOiBQYWdpbmF0aW9uQ29uZmlnXG4gICAgKSB7XG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gSVRFTVNfUEVSX1BBR0U7XG4gICAgICAgIHRoaXMucm91dGVEYXRhID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5kYXRhLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMucGFnZSA9IGRhdGFbJ3BhZ2luZ1BhcmFtcyddLnBhZ2U7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzUGFnZSA9IGRhdGFbJ3BhZ2luZ1BhcmFtcyddLnBhZ2U7XG4gICAgICAgICAgICB0aGlzLnJldmVyc2UgPSBkYXRhWydwYWdpbmdQYXJhbXMnXS5hc2NlbmRpbmc7XG4gICAgICAgICAgICB0aGlzLnByZWRpY2F0ZSA9IGRhdGFbJ3BhZ2luZ1BhcmFtcyddLnByZWRpY2F0ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuamhpTGFuZ3VhZ2VTZXJ2aWNlLnNldExvY2F0aW9ucyhbJ2RlbWFuZGVtZWRpY2FtZW50dmZmJ10pO1xuICAgIH1cblxuICAgIGxvYWRBbGwoKSB7XG4gICAgICAgIHRoaXMuZGVtYW5kZW1lZGljYW1lbnR2ZmZTZXJ2aWNlLnF1ZXJ5KHtcbiAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnZSAtIDEsXG4gICAgICAgICAgICBzaXplOiB0aGlzLml0ZW1zUGVyUGFnZSxcbiAgICAgICAgICAgIHNvcnQ6IHRoaXMuc29ydCgpfSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJlczogUmVzcG9uc2UpID0+IHRoaXMub25TdWNjZXNzKHJlcy5qc29uKCksIHJlcy5oZWFkZXJzKSxcbiAgICAgICAgICAgIChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLm9uRXJyb3IocmVzLmpzb24oKSlcbiAgICAgICAgKTtcbiAgICB9XG4gICAgbG9hZFBhZ2UgKHBhZ2U6IG51bWJlcikge1xuICAgICAgICBpZiAocGFnZSAhPT0gdGhpcy5wcmV2aW91c1BhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNQYWdlID0gcGFnZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRyYW5zaXRpb24oKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2RlbWFuZGVtZWRpY2FtZW50dmZmJ10sIHtxdWVyeVBhcmFtczpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2UsXG4gICAgICAgICAgICAgICAgc2l6ZTogdGhpcy5pdGVtc1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgc29ydDogdGhpcy5wcmVkaWNhdGUgKyAnLCcgKyAodGhpcy5yZXZlcnNlID8gJ2FzYycgOiAnZGVzYycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxvYWRBbGwoKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5wYWdlID0gMDtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGVtYW5kZW1lZGljYW1lbnR2ZmYnLCB7XG4gICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2UsXG4gICAgICAgICAgICBzb3J0OiB0aGlzLnByZWRpY2F0ZSArICcsJyArICh0aGlzLnJldmVyc2UgPyAnYXNjJyA6ICdkZXNjJylcbiAgICAgICAgfV0pO1xuICAgICAgICB0aGlzLmxvYWRBbGwoKTtcbiAgICB9XG4gICAgQWNjZXB0ZXIoRGVtYW5kZW1lZGljYW1lbnR2ZmYsTWVkaWNhbWVudCkge1xuICAgICAgICBEZW1hbmRlbWVkaWNhbWVudHZmZi5ldGF0ID0gXCJBY2NlcHTDqWVcIjtcbiAgICAgICAgdGhpcy5kZW1hbmRlbWVkaWNhbWVudHZmZlNlcnZpY2UudXBkYXRlKERlbWFuZGVtZWRpY2FtZW50dmZmKS5zdWJzY3JpYmUoKHJlczogRGVtYW5kZW1lZGljYW1lbnR2ZmYpID0+IHRoaXMub25TYXZlU3VjY2VzcyhyZXMpLFxuICAgICAgICAgICAgKHJlczogUmVzcG9uc2UpID0+IHRoaXMub25FcnJvcihyZXMuanNvbigpKSk7XG5cblxuICAgICAgICAvKiB0aGlzLm1lZGljYW1lbnRTZXJ2aWNlLnF1ZXJ5KCkuc3Vic2NyaWJlKChyZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICB0aGlzLm1lZGljYW1lbnRzID0gcmVzLmpzb24oKTtcbiAgICAgICAgIHRoaXMubWVkaWNhbWVudHMuZm9yRWFjaCgoTWVkaWNhbWVudCxpbmRleCk9PlxuICAgICAgICAge1xuICAgICAgICAgaWYgKE1lZGljYW1lbnQubm9tID09IERlbWFuZGVtZWRpY2FtZW50dmZmLm1lZGljYW1lbnRpZCApXG4gICAgICAgICB7XG4gICAgICAgICBNZWRpY2FtZW50LnF1YW50aXR5ID0gMzA7XG4gICAgICAgICB0aGlzLm1lZGljYW1lbnRTZXJ2aWNlLnVwZGF0ZShNZWRpY2FtZW50KS5zdWJzY3JpYmUoKHJlczogTWVkaWNhbWVudCkgPT4gdGhpcy5vblNhdmVTdWNjZXNzKHJlcyksXG4gICAgICAgICAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vbkVycm9yKHJlcy5qc29uKCkpKTtcblxuICAgICAgICAgfVxuICAgICAgICAgfSlcbiAgICAgICAgIH0sXG4gICAgICAgICAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vbkVycm9yKHJlcy5qc29uKCkpXG4gICAgICAgICApOyovXG5cblxuICAgICAgICB0aGlzLm1lZGljYW1lbnRTZXJ2aWNlLmZpbmRieW5hbWUoRGVtYW5kZW1lZGljYW1lbnR2ZmYubWVkaWNhbWVudGlkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShtZWQgPT4ge1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZC5xdWFudGl0eSA9ICBEZW1hbmRlbWVkaWNhbWVudHZmZi5xdWF0aXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZWRpY2FtZW50U2VydmljZS51cGRhdGUobWVkKS5zdWJzY3JpYmUoKHJlczogTWVkaWNhbWVudCkgPT4gdGhpcy5vblNhdmVTdWNjZXNzKHJlcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlczogUmVzcG9uc2UpID0+IHRoaXMub25FcnJvcihyZXMuanNvbigpKSk7XG5cblxuICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2F2ZVN1Y2Nlc3MgKHJlc3VsdDogRGVtYW5kZW1lZGljYW1lbnR2ZmYpIHtcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuYnJvYWRjYXN0KHsgbmFtZTogJ2RlbWFuZGVNb2RpZmljYXRpb24nLCBjb250ZW50OiAnT0snfSk7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcblxuXG4gICAgfVxuICAgIHByaXZhdGUgb25TYXZlU3VjY2VzczIgKHJlc3VsdDogTWVkaWNhbWVudCkge1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3QoeyBuYW1lOiAnZGVtYW5kZU1vZGlmaWNhdGlvbicsIGNvbnRlbnQ6ICdPSyd9KTtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuXG5cbiAgICB9XG4gICAgbG9hZEFsbG1lZCgpIHtcbiAgICAgICAgdGhpcy5tZWRpY2FtZW50U2VydmljZS5xdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZWRpY2FtZW50cyA9IHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKHJlczogUmVzcG9uc2UpID0+IHRoaXMub25FcnJvcihyZXMuanNvbigpKVxuICAgICAgICApO1xuICAgIH1cbiAgICBSZWZ1c2VyKERlbWFuZGVtZWRpY2FtZW50dmZmKXtcbiAgICAgICAgRGVtYW5kZW1lZGljYW1lbnR2ZmYuZXRhdD1cIlJlZnVzw6llXCI7XG4gICAgICAgIHRoaXMuZGVtYW5kZW1lZGljYW1lbnR2ZmZTZXJ2aWNlLnVwZGF0ZShEZW1hbmRlbWVkaWNhbWVudHZmZikuc3Vic2NyaWJlKChyZXM6IERlbWFuZGVtZWRpY2FtZW50dmZmKSA9PiB0aGlzLm9uU2F2ZVN1Y2Nlc3MyKHJlcyksXG4gICAgICAgICAgICAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vbkVycm9yKHJlcy5qc29uKCkpKTtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubG9hZEFsbCgpO1xuICAgICAgICB0aGlzLnByaW5jaXBhbC5pZGVudGl0eSgpLnRoZW4oKGFjY291bnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjY291bnQgPSBhY2NvdW50O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZUluRGVtYW5kZW1lZGljYW1lbnR2ZmZzKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLmRlc3Ryb3kodGhpcy5ldmVudFN1YnNjcmliZXIpO1xuICAgIH1cblxuICAgIHRyYWNrSWQgKGluZGV4OiBudW1iZXIsIGl0ZW06IERlbWFuZGVtZWRpY2FtZW50dmZmKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmlkO1xuICAgIH1cblxuXG5cbiAgICByZWdpc3RlckNoYW5nZUluRGVtYW5kZW1lZGljYW1lbnR2ZmZzKCkge1xuICAgICAgICB0aGlzLmV2ZW50U3Vic2NyaWJlciA9IHRoaXMuZXZlbnRNYW5hZ2VyLnN1YnNjcmliZSgnZGVtYW5kZW1lZGljYW1lbnR2ZmZMaXN0TW9kaWZpY2F0aW9uJywgKHJlc3BvbnNlKSA9PiB0aGlzLmxvYWRBbGwoKSk7XG4gICAgfVxuXG4gICAgc29ydCAoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbdGhpcy5wcmVkaWNhdGUgKyAnLCcgKyAodGhpcy5yZXZlcnNlID8gJ2FzYycgOiAnZGVzYycpXTtcbiAgICAgICAgaWYgKHRoaXMucHJlZGljYXRlICE9PSAnaWQnKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCgnaWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TdWNjZXNzIChkYXRhLCBoZWFkZXJzKSB7XG4gICAgICAgIHRoaXMubGlua3MgPSB0aGlzLnBhcnNlTGlua3MucGFyc2UoaGVhZGVycy5nZXQoJ2xpbmsnKSk7XG4gICAgICAgIHRoaXMudG90YWxJdGVtcyA9IGhlYWRlcnMuZ2V0KCdYLVRvdGFsLUNvdW50Jyk7XG4gICAgICAgIHRoaXMucXVlcnlDb3VudCA9IHRoaXMudG90YWxJdGVtcztcbiAgICAgICAgLy8gdGhpcy5wYWdlID0gcGFnaW5nUGFyYW1zLnBhZ2U7XG4gICAgICAgIHRoaXMuZGVtYW5kZW1lZGljYW1lbnR2ZmZzID0gZGF0YTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRXJyb3IgKGVycm9yKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKGVycm9yLm1lc3NhZ2UsIG51bGwsIG51bGwpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvZGVtYW5kZW1lZGljYW1lbnR2ZmYvZGVtYW5kZW1lZGljYW1lbnR2ZmYuY29tcG9uZW50LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==
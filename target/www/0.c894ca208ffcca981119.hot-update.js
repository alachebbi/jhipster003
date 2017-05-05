webpackHotUpdate(0,{

/***/ "./src/main/webapp/app/entities/reclamation/reclamation.component.ts":
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
var reclamation_service_1 = __webpack_require__("./src/main/webapp/app/entities/reclamation/reclamation.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var uib_pagination_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/uib-pagination.config.ts");
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
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
            _this.loadAll();
            _this.reclamationTraiter();
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
    ReclamationComponent.prototype.button = function () {
    };
    ReclamationComponent.prototype.reclamationTraiter = function () {
        this.reclamations.forEach(function (item, index) {
            if (item.etat == "Traitée") {
                document.getElementById("l" + index).style.opacity = "0.3";
            }
        });
    };
    ReclamationComponent.prototype.Traiter = function (Reclamation) {
        var _this = this;
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
    };
    return ReclamationComponent;
}());
ReclamationComponent = __decorate([
    core_1.Component({
        selector: 'jhi-reclamation',
        template: __webpack_require__("./src/main/webapp/app/entities/reclamation/reclamation.component.html")
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


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3JlY2xhbWF0aW9uL3JlY2xhbWF0aW9uLmNvbXBvbmVudC50cz84YjQxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBNkQ7QUFFN0Qsc0NBQXlEO0FBRXpELDJDQUF5RztBQUd6RyxxSEFBMkQ7QUFDM0QsNEVBQXlEO0FBQ3pELGtIQUE2RTtBQU03RSxJQUFhLG9CQUFvQjtJQW1CN0IsOEJBQW9CLGtCQUFzQyxFQUN0QyxrQkFBc0MsRUFDdEMsVUFBc0IsRUFDdEIsWUFBMEIsRUFDMUIsU0FBb0IsRUFDcEIsY0FBOEIsRUFDOUIsTUFBYyxFQUNkLFlBQTBCLEVBQzFCLGNBQThCLEVBQzlCLGdCQUFrQztRQVR0RCxpQkFrQkM7UUFsQm1CLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFHLHVCQUFjLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBSTtZQUNwRCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDdEMsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzlDLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUM5QyxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsc0NBQU8sR0FBUDtRQUFBLGlCQWFDO1FBWkcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQztZQUMxQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRTtTQUVwQixDQUFDLENBQUMsU0FBUyxDQUNSLFVBQUMsR0FBYSxJQUFLLFlBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBdkMsQ0FBdUMsRUFDMUQsVUFBQyxHQUFhLElBQUssWUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBeEIsQ0FBd0IsQ0FDOUMsQ0FBQztJQUlOLENBQUM7SUFFRCx1Q0FBUSxHQUFSLFVBQVMsSUFBWTtRQUNqQixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUM7SUFDTCxDQUFDO0lBRUQseUNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDbkMsV0FBVyxFQUFFO2dCQUNULElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVk7Z0JBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQzthQUMvRDtTQUNKLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsb0NBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLEVBQUU7Z0JBQ2xDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUM7YUFDL0QsQ0FBQyxDQUFDLENBQUM7UUFDSixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFBQSxpQkFXQztRQU5HLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBTztZQUNuQyxLQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztZQUM5QixLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCwwQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxzQ0FBTyxHQUFQLFVBQVEsS0FBYSxFQUFFLElBQWlCO1FBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFHRCwyREFBNEIsR0FBNUI7UUFBQSxpQkFFQztRQURHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsNkJBQTZCLEVBQUUsVUFBQyxRQUFRLElBQUssWUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDO0lBQ3BILENBQUM7SUFFTCxxQ0FBTSxHQUFOO0lBRUEsQ0FBQztJQUNELGlEQUFrQixHQUFsQjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFDLEtBQUs7WUFFN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBRSxTQUFVLENBQUMsQ0FDMUIsQ0FBQztnQkFDRyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFDLEtBQUs7WUFHNUQsQ0FBQztRQUNMLENBQUMsQ0FDSixDQUFDO0lBRU4sQ0FBQztJQUNHLHNDQUFPLEdBQVAsVUFBUyxXQUFXO1FBQXBCLGlCQVVDO1FBUkcsV0FBVyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7YUFDdEMsU0FBUyxDQUFDLFVBQUMsR0FBZ0IsSUFBSyxZQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUF2QixDQUF1QixFQUNwRCxVQUFDLEdBQWEsSUFBSyxZQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUM7SUFLekQsQ0FBQztJQUNPLDRDQUFhLEdBQXJCLFVBQXNCLE1BQW1CO1FBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUMsSUFBSSxFQUFFLDZCQUE2QixFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBRXRCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxPQUFPLEVBQUUsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVPLHNDQUFPLEdBQWYsVUFBZ0IsS0FBSztRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBb0JELG1DQUFJLEdBQUo7UUFDSSxJQUFJLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN0RSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixDQUFDO1FBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRU8sd0NBQVMsR0FBakIsVUFBbUIsSUFBSSxFQUFFLE9BQU87UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNsQyxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFFN0IsQ0FBQztJQUdMLDJCQUFDO0FBQUQsQ0FBQztBQXJMWSxvQkFBb0I7SUFKaEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsNkJBQWEsd0VBQThCO0tBQzlDLENBQUM7cUNBb0IwQyxnQ0FBa0I7UUFDbEIsd0NBQWtCO1FBQzFCLHdCQUFVO1FBQ1IsMEJBQVk7UUFDZixrQkFBUztRQUNKLHVCQUFjO1FBQ3RCLGVBQU07UUFDQSwwQkFBWTtRQUNWLDRCQUFjO1FBQ1osd0NBQWdCO0dBNUI3QyxvQkFBb0IsQ0FxTGhDO0FBckxZLG9EQUFvQiIsImZpbGUiOiIwLmM4OTRjYTIwOGZmY2NhOTgxMTE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IEV2ZW50TWFuYWdlciwgUGFyc2VMaW5rcywgUGFnaW5hdGlvblV0aWwsIEpoaUxhbmd1YWdlU2VydmljZSwgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBSZWNsYW1hdGlvbiB9IGZyb20gJy4vcmVjbGFtYXRpb24ubW9kZWwnO1xuaW1wb3J0IHsgUmVjbGFtYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9yZWNsYW1hdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IElURU1TX1BFUl9QQUdFLCBQcmluY2lwYWwgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uL2Jsb2Nrcy9jb25maWcvdWliLXBhZ2luYXRpb24uY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktcmVjbGFtYXRpb24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZWNsYW1hdGlvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUmVjbGFtYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBjdXJyZW50QWNjb3VudDogYW55O1xuICAgIHJlY2xhbWF0aW9uczogUmVjbGFtYXRpb25bXTtcbiAgICByZWNsYW1hdGlvbjogUmVjbGFtYXRpb247XG4gICAgZXJyb3I6IGFueTtcbiAgICBzdWNjZXNzOiBhbnk7XG4gICAgZXZlbnRTdWJzY3JpYmVyOiBTdWJzY3JpcHRpb247XG4gICAgcm91dGVEYXRhOiBhbnk7XG4gICAgbGlua3M6IGFueTtcbiAgICB0b3RhbEl0ZW1zOiBhbnk7XG4gICAgcXVlcnlDb3VudDogYW55O1xuICAgIGl0ZW1zUGVyUGFnZTogYW55O1xuICAgIHBhZ2U6IGFueTtcbiAgICBwcmVkaWNhdGU6IGFueTtcbiAgICBwcmV2aW91c1BhZ2U6IGFueTtcbiAgICByZXZlcnNlOiBhbnk7XG4gICAgaXNTYXZpbmc6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGpoaUxhbmd1YWdlU2VydmljZTogSmhpTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVjbGFtYXRpb25TZXJ2aWNlOiBSZWNsYW1hdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYXJzZUxpbmtzOiBQYXJzZUxpbmtzLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwcmluY2lwYWw6IFByaW5jaXBhbCxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdpbmF0aW9uVXRpbDogUGFnaW5hdGlvblV0aWwsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdpbmF0aW9uQ29uZmlnOiBQYWdpbmF0aW9uQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gSVRFTVNfUEVSX1BBR0U7XG4gICAgICAgIHRoaXMucm91dGVEYXRhID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5kYXRhLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMucGFnZSA9IGRhdGFbJ3BhZ2luZ1BhcmFtcyddLnBhZ2U7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzUGFnZSA9IGRhdGFbJ3BhZ2luZ1BhcmFtcyddLnBhZ2U7XG4gICAgICAgICAgICB0aGlzLnJldmVyc2UgPSBkYXRhWydwYWdpbmdQYXJhbXMnXS5hc2NlbmRpbmc7XG4gICAgICAgICAgICB0aGlzLnByZWRpY2F0ZSA9IGRhdGFbJ3BhZ2luZ1BhcmFtcyddLnByZWRpY2F0ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuamhpTGFuZ3VhZ2VTZXJ2aWNlLnNldExvY2F0aW9ucyhbJ3JlY2xhbWF0aW9uJ10pO1xuICAgIH1cblxuICAgIGxvYWRBbGwoKSB7XG4gICAgICAgIHRoaXMucmVjbGFtYXRpb25TZXJ2aWNlLnF1ZXJ5KHtcbiAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnZSAtIDEsXG4gICAgICAgICAgICBzaXplOiB0aGlzLml0ZW1zUGVyUGFnZSxcbiAgICAgICAgICAgIHNvcnQ6IHRoaXMuc29ydCgpLFxuXG4gICAgICAgIH0pLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLm9uU3VjY2VzcyhyZXMuanNvbigpLCByZXMuaGVhZGVycyksXG4gICAgICAgICAgICAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vbkVycm9yKHJlcy5qc29uKCkpXG4gICAgICAgICk7XG5cblxuXG4gICAgfVxuXG4gICAgbG9hZFBhZ2UocGFnZTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChwYWdlICE9PSB0aGlzLnByZXZpb3VzUGFnZSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1BhZ2UgPSBwYWdlO1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc2l0aW9uKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9yZWNsYW1hdGlvbiddLCB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgICAgICAgICAgICBzaXplOiB0aGlzLml0ZW1zUGVyUGFnZSxcbiAgICAgICAgICAgICAgICBzb3J0OiB0aGlzLnByZWRpY2F0ZSArICcsJyArICh0aGlzLnJldmVyc2UgPyAnYXNjJyA6ICdkZXNjJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubG9hZEFsbCgpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnBhZ2UgPSAwO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9yZWNsYW1hdGlvbicsIHtcbiAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgICAgICAgIHNvcnQ6IHRoaXMucHJlZGljYXRlICsgJywnICsgKHRoaXMucmV2ZXJzZSA/ICdhc2MnIDogJ2Rlc2MnKVxuICAgICAgICB9XSk7XG4gICAgICAgIHRoaXMubG9hZEFsbCgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG5cblxuXG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudCA9IGFjY291bnQ7XG4gICAgICAgICAgICB0aGlzLmxvYWRBbGwoKTtcbiAgICAgICAgICAgIHRoaXMucmVjbGFtYXRpb25UcmFpdGVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlSW5SZWNsYW1hdGlvbnMoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuZGVzdHJveSh0aGlzLmV2ZW50U3Vic2NyaWJlcik7XG4gICAgfVxuXG4gICAgdHJhY2tJZChpbmRleDogbnVtYmVyLCBpdGVtOiBSZWNsYW1hdGlvbikge1xuICAgICAgICByZXR1cm4gaXRlbS5pZDtcbiAgICB9XG5cblxuICAgIHJlZ2lzdGVyQ2hhbmdlSW5SZWNsYW1hdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRTdWJzY3JpYmVyID0gdGhpcy5ldmVudE1hbmFnZXIuc3Vic2NyaWJlKCdyZWNsYW1hdGlvbkxpc3RNb2RpZmljYXRpb24nLCAocmVzcG9uc2UpID0+IHRoaXMubG9hZEFsbCgpKTtcbiAgICB9XG5cbmJ1dHRvbigpIHtcblxufVxucmVjbGFtYXRpb25UcmFpdGVyKCl7XG4gICAgdGhpcy5yZWNsYW1hdGlvbnMuZm9yRWFjaCgoaXRlbSxpbmRleCk9PntcblxuICAgICAgICAgICAgaWYgKGl0ZW0uZXRhdD09XCJUcmFpdMOpZVwiIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxcIiArIGluZGV4KS5zdHlsZS5vcGFjaXR5PVwiMC4zXCJcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApO1xuXG59XG4gICAgVHJhaXRlciggUmVjbGFtYXRpb24gICkge1xuXG4gICAgICAgIFJlY2xhbWF0aW9uLmV0YXQgPSBcIlRyYWl0w6llXCI7XG4gICAgICAgIHRoaXMucmVjbGFtYXRpb25TZXJ2aWNlLnVwZGF0ZShSZWNsYW1hdGlvbilcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlczogUmVjbGFtYXRpb24pID0+IHRoaXMub25TYXZlU3VjY2VzcyhyZXMpLFxuICAgICAgICAgICAgICAgIChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLm9uRXJyb3IocmVzLmpzb24oKSkpO1xuXG5cblxuXG4gICAgfVxuICAgIHByaXZhdGUgb25TYXZlU3VjY2VzcyhyZXN1bHQ6IFJlY2xhbWF0aW9uKSB7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLmJyb2FkY2FzdCh7bmFtZTogJ3JlY2xhbWF0aW9uTGlzdE1vZGlmaWNhdGlvbicsIGNvbnRlbnQ6ICdPSyd9KTtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt7b3V0bGV0czoge3BvcHVwOiBudWxsfX1dLCB7cmVwbGFjZVVybDogdHJ1ZX0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25FcnJvcihlcnJvcikge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcihlcnJvci5tZXNzYWdlLCBudWxsLCBudWxsKTtcbiAgICB9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICBzb3J0ICgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFt0aGlzLnByZWRpY2F0ZSArICcsJyArICh0aGlzLnJldmVyc2UgPyAnYXNjJyA6ICdkZXNjJyldO1xuICAgICAgICBpZiAodGhpcy5wcmVkaWNhdGUgIT09ICdpZCcpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKCdpZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblN1Y2Nlc3MgKGRhdGEsIGhlYWRlcnMpIHtcbiAgICAgICAgdGhpcy5saW5rcyA9IHRoaXMucGFyc2VMaW5rcy5wYXJzZShoZWFkZXJzLmdldCgnbGluaycpKTtcbiAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gaGVhZGVycy5nZXQoJ1gtVG90YWwtQ291bnQnKTtcbiAgICAgICAgdGhpcy5xdWVyeUNvdW50ID0gdGhpcy50b3RhbEl0ZW1zO1xuICAgICAgICAvLyB0aGlzLnBhZ2UgPSBwYWdpbmdQYXJhbXMucGFnZTtcbiAgICAgICAgdGhpcy5yZWNsYW1hdGlvbnMgPSBkYXRhO1xuXG4gICAgfVxuXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvcmVjbGFtYXRpb24vcmVjbGFtYXRpb24uY29tcG9uZW50LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==
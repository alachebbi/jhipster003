webpackHotUpdate(0,{

/***/ "./src/main/webapp/app/entities/evenement/evenement.component.ts":
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
var evenement_service_1 = __webpack_require__("./src/main/webapp/app/entities/evenement/evenement.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var uib_pagination_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/uib-pagination.config.ts");
var participation_service_1 = __webpack_require__("./src/main/webapp/app/entities/participation/participation.service.ts");
var participation_model_1 = __webpack_require__("./src/main/webapp/app/entities/participation/participation.model.ts");
var EvenementComponent = (function () {
    function EvenementComponent(jhiLanguageService, evenementService, parseLinks, alertService, principal, activatedRoute, dataUtils, router, eventManager, participationService, paginationUtil, paginationConfig) {
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
    EvenementComponent.prototype.loadAll = function () {
        var _this = this;
        this.evenementService.query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort()
        }).subscribe(function (res) { return _this.onSuccess(res.json(), res.headers); }, function (res) { return _this.onError(res.json()); });
    };
    EvenementComponent.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    };
    EvenementComponent.prototype.onSaveSuccess2 = function (result) {
        this.eventManager.broadcast({ name: 'articleListModification', content: 'OK' });
        this.isSaving = false;
    };
    EvenementComponent.prototype.VoterPour = function (Evenement, participation) {
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
    EvenementComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'articleListModification', content: 'OK' });
        this.isSaving = false;
    };
    EvenementComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    EvenementComponent.prototype.loadAlllikes = function () {
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
    EvenementComponent.prototype.transition = function () {
        this.router.navigate(['/evenement'], { queryParams: {
                page: this.page,
                size: this.itemsPerPage,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
        });
        this.loadAll();
    };
    EvenementComponent.prototype.clear = function () {
        this.page = 0;
        this.router.navigate(['/evenement', {
                page: this.page,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }]);
        this.loadAll();
    };
    EvenementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAll();
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInEvenements();
    };
    EvenementComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    EvenementComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    EvenementComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    EvenementComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    EvenementComponent.prototype.registerChangeInEvenements = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('evenementListModification', function (response) { return _this.loadAll(); });
    };
    EvenementComponent.prototype.sort = function () {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    EvenementComponent.prototype.onSuccess = function (data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = headers.get('X-Total-Count');
        this.queryCount = this.totalItems;
        // this.page = pagingParams.page;
        this.evenements = data;
        this.loadAlllikes();
    };
    EvenementComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return EvenementComponent;
}());
EvenementComponent = __decorate([
    core_1.Component({
        selector: 'jhi-evenement',
        template: __webpack_require__("./src/main/webapp/app/entities/evenement/evenement.component.html")
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
], EvenementComponent);
exports.EvenementComponent = EvenementComponent;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2V2ZW5lbWVudC9ldmVuZW1lbnQuY29tcG9uZW50LnRzP2UyYWMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9DQUE2RDtBQUU3RCxzQ0FBeUQ7QUFFekQsMkNBQW9IO0FBR3BILCtHQUF1RDtBQUN2RCw0RUFBeUQ7QUFDekQsa0hBQTZFO0FBRTdFLDJIQUE4RTtBQUM5RSx1SEFBcUU7QUFNckUsSUFBYSxrQkFBa0I7SUFtQjNCLDRCQUNZLGtCQUFzQyxFQUN0QyxnQkFBa0MsRUFDbEMsVUFBc0IsRUFDdEIsWUFBMEIsRUFDMUIsU0FBb0IsRUFDcEIsY0FBOEIsRUFDOUIsU0FBb0IsRUFDcEIsTUFBYyxFQUNkLFlBQTBCLEVBQzFCLG9CQUEwQyxFQUMxQyxjQUE4QixFQUM5QixnQkFBa0M7UUFaOUMsaUJBc0JDO1FBckJXLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFFMUMsSUFBSSxDQUFDLFlBQVksR0FBRyx1QkFBYyxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQUk7WUFDcEQsS0FBSSxDQUFDLElB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ZSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2xDLGlDQUFpQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVPLG9DQUFPLEdBQWYsVUFBaUIsS0FBSztRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQUFDO0FBaExZLGtCQUFrQjtJQUo5QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGVBQWU7UUFDekIsNkJBQWEsb0VBQTRCO0tBQzVDLENBQUM7cUNBcUJrQyxnQ0FBa0I7UUFDcEIsb0NBQWdCO1FBQ3RCLHdCQUFVO1FBQ1IsMEJBQVk7UUFDZixrQkFBUztRQUNKLHVCQUFjO1FBQ25CLHVCQUFTO1FBQ1osZUFBTTtRQUNBLDBCQUFZO1FBQ0osNENBQW9CO1FBQzFCLDRCQUFjO1FBQ1osd0NBQWdCO0dBL0JyQyxrQkFBa0IsQ0FnTDlCO0FBaExZLGdEQUFrQiIsImZpbGUiOiIwLmEzZGM2MDc2ZmUyYTE5MDA4MDc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IEV2ZW50TWFuYWdlciwgUGFyc2VMaW5rcywgUGFnaW5hdGlvblV0aWwsIEpoaUxhbmd1YWdlU2VydmljZSwgQWxlcnRTZXJ2aWNlLCBEYXRhVXRpbHMgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IEV2ZW5lbWVudCB9IGZyb20gJy4vZXZlbmVtZW50Lm1vZGVsJztcbmltcG9ydCB7IEV2ZW5lbWVudFNlcnZpY2UgfSBmcm9tICcuL2V2ZW5lbWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IElURU1TX1BFUl9QQUdFLCBQcmluY2lwYWwgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uL2Jsb2Nrcy9jb25maWcvdWliLXBhZ2luYXRpb24uY29uZmlnJztcblxuaW1wb3J0IHsgUGFydGljaXBhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9wYXJ0aWNpcGF0aW9uL3BhcnRpY2lwYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBQYXJ0aWNpcGF0aW9uIH0gZnJvbSAnLi4vcGFydGljaXBhdGlvbi9wYXJ0aWNpcGF0aW9uLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktZXZlbmVtZW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZXZlbmVtZW50LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBFdmVuZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbmN1cnJlbnRBY2NvdW50OiBhbnk7XG4gICAgZXZlbmVtZW50czogRXZlbmVtZW50W107XG4gICAgcGF0aWNpcGF0aW9uOiBQYXJ0aWNpcGF0aW9uO1xuICAgIGVycm9yOiBhbnk7XG4gICAgc3VjY2VzczogYW55O1xuICAgIGV2ZW50U3Vic2NyaWJlcjogU3Vic2NyaXB0aW9uO1xuICAgIHJvdXRlRGF0YTogYW55O1xuICAgIGxpbmtzOiBhbnk7XG4gICAgdG90YWxJdGVtczogYW55O1xuICAgIHF1ZXJ5Q291bnQ6IGFueTtcbiAgICBpdGVtc1BlclBhZ2U6IGFueTtcbiAgICBwYWdlOiBhbnk7XG4gICAgcHJlZGljYXRlOiBhbnk7XG4gICAgcHJldmlvdXNQYWdlOiBhbnk7XG4gICAgcmV2ZXJzZTogYW55O1xuICAgIGlzU2F2aW5nOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgamhpTGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZXZlbmVtZW50U2VydmljZTogRXZlbmVtZW50U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBwYXJzZUxpbmtzOiBQYXJzZUxpbmtzLFxuICAgICAgICBwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsLFxuICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBkYXRhVXRpbHM6IERhdGFVdGlscyxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlcixcbiAgICAgICAgcHJpdmF0ZSBwYXJ0aWNpcGF0aW9uU2VydmljZTogUGFydGljaXBhdGlvblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcGFnaW5hdGlvblV0aWw6IFBhZ2luYXRpb25VdGlsLFxuICAgICAgICBwcml2YXRlIHBhZ2luYXRpb25Db25maWc6IFBhZ2luYXRpb25Db25maWdcbiAgICApIHtcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBJVEVNU19QRVJfUEFHRTtcbiAgICAgICAgdGhpcy5yb3V0ZURhdGEgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGEuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYWdlID0gZGF0YVsncGFnaW5nUGFyYW1zJ10ucGFnZTtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNQYWdlID0gZGF0YVsncGFnaW5nUGFyYW1zJ10ucGFnZTtcbiAgICAgICAgICAgIHRoaXMucmV2ZXJzZSA9IGRhdGFbJ3BhZ2luZ1BhcmFtcyddLmFzY2VuZGluZztcbiAgICAgICAgICAgIHRoaXMucHJlZGljYXRlID0gZGF0YVsncGFnaW5nUGFyYW1zJ10ucHJlZGljYXRlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5qaGlMYW5ndWFnZVNlcnZpY2Uuc2V0TG9jYXRpb25zKFsnZXZlbmVtZW50J10pO1xuICAgIH1cblxuICAgIGxvYWRBbGwoKSB7XG4gICAgICAgIHRoaXMuZXZlbmVtZW50U2VydmljZS5xdWVyeSh7XG4gICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2UgLSAxLFxuICAgICAgICAgICAgc2l6ZTogdGhpcy5pdGVtc1BlclBhZ2UsXG4gICAgICAgICAgICBzb3J0OiB0aGlzLnNvcnQoKX0pLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLm9uU3VjY2VzcyhyZXMuanNvbigpLCByZXMuaGVhZGVycyksXG4gICAgICAgICAgICAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vbkVycm9yKHJlcy5qc29uKCkpXG4gICAgICAgICk7XG4gICAgfVxuICAgIGxvYWRQYWdlIChwYWdlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHBhZ2UgIT09IHRoaXMucHJldmlvdXNQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzUGFnZSA9IHBhZ2U7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIG9uU2F2ZVN1Y2Nlc3MyIChyZXN1bHQ6IFBhcnRpY2lwYXRpb24pIHtcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuYnJvYWRjYXN0KHsgbmFtZTogJ2FydGljbGVMaXN0TW9kaWZpY2F0aW9uJywgY29udGVudDogJ09LJ30pO1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG5cbiAgICB9XG4gICAgVm90ZXJQb3VyKEV2ZW5lbWVudCxwYXJ0aWNpcGF0aW9uOlBhcnRpY2lwYXRpb24pIHtcbiAgICAgICAgLy8gQXJ0aWNsZS5pc3B1c2hlZD10cnVlO1xuICAgICAgICBFdmVuZW1lbnQubm9tYnJlcGFydGljaXBhbnRzICs9IDE7XG4gICAgICAgIHRoaXMuZXZlbmVtZW50U2VydmljZS5tb2RpZmllcihFdmVuZW1lbnQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXM6IEV2ZW5lbWVudCkgPT4gdGhpcy5vblNhdmVTdWNjZXNzKHJlcyksIChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLm9uU2F2ZUVycm9yKHJlcy5qc29uKCkpKTtcblxuICAgICAgICB0aGlzLnBhdGljaXBhdGlvbj0gbmV3IFBhcnRpY2lwYXRpb24oKTtcbiAgICAgICAgdGhpcy5wYXRpY2lwYXRpb24uZXZlbmVtZW50PUV2ZW5lbWVudC5ub207XG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudCA9IGFjY291bnQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnBhdGljaXBhdGlvbi5wYXJ0aWNpcGFudD10aGlzLmN1cnJlbnRBY2NvdW50LmZpcnN0TmFtZTtcbiAgICAgICAgdGhpcy5wYXJ0aWNpcGF0aW9uU2VydmljZS5jcmVhdGUodGhpcy5wYXRpY2lwYXRpb24pXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXM6IFBhcnRpY2lwYXRpb24pID0+IHRoaXMub25TYXZlU3VjY2VzczIocmVzKSwgKHJlczogUmVzcG9uc2UpID0+IHRoaXMub25TYXZlRXJyb3IocmVzLmpzb24oKSkpO1xuICAgICAgICB0aGlzLmxvYWRBbGxsaWtlcygpO1xuICAgIH1cbiAgICBwcml2YXRlIG9uU2F2ZVN1Y2Nlc3MgKHJlc3VsdDogRXZlbmVtZW50KSB7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLmJyb2FkY2FzdCh7IG5hbWU6ICdhcnRpY2xlTGlzdE1vZGlmaWNhdGlvbicsIGNvbnRlbnQ6ICdPSyd9KTtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNhdmVFcnJvciAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgICBsb2FkQWxsbGlrZXMoKSB7XG4gICAgICAgIHRoaXMuZXZlbmVtZW50cy5mb3JFYWNoKChpdGVtLGluZGV4KT0+e1xuICAgICAgICAgICAgICAgIHRoaXMucGFydGljaXBhdGlvblNlcnZpY2UuZmluZEJ5aWRhbmRuYW1lKGl0ZW0ubm9tLHRoaXMuY3VycmVudEFjY291bnQuZmlyc3ROYW1lKVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGlvbj0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0aWNpcGF0aW9uLnBhcnRpY2lwYW50PT10aGlzLmN1cnJlbnRBY2NvdW50LmZpcnN0TmFtZSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxcIiArIGluZGV4KS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLFwiZGlzYWJsZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsXCIgKyBpbmRleCkuc3R5bGUub3BhY2l0eT1cIjAuNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc3R5bGUub3BhY2l0eT1cIjAuM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGwuZGlzYWJsZWQ9dHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgIH1cbiAgICB0cmFuc2l0aW9uKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ldmVuZW1lbnQnXSwge3F1ZXJ5UGFyYW1zOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgICAgICAgICAgICBzaXplOiB0aGlzLml0ZW1zUGVyUGFnZSxcbiAgICAgICAgICAgICAgICBzb3J0OiB0aGlzLnByZWRpY2F0ZSArICcsJyArICh0aGlzLnJldmVyc2UgPyAnYXNjJyA6ICdkZXNjJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubG9hZEFsbCgpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnBhZ2UgPSAwO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ldmVuZW1lbnQnLCB7XG4gICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2UsXG4gICAgICAgICAgICBzb3J0OiB0aGlzLnByZWRpY2F0ZSArICcsJyArICh0aGlzLnJldmVyc2UgPyAnYXNjJyA6ICdkZXNjJylcbiAgICAgICAgfV0pO1xuICAgICAgICB0aGlzLmxvYWRBbGwoKTtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubG9hZEFsbCgpO1xuICAgICAgICB0aGlzLnByaW5jaXBhbC5pZGVudGl0eSgpLnRoZW4oKGFjY291bnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjY291bnQgPSBhY2NvdW50O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZUluRXZlbmVtZW50cygpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5kZXN0cm95KHRoaXMuZXZlbnRTdWJzY3JpYmVyKTtcbiAgICB9XG5cbiAgICB0cmFja0lkIChpbmRleDogbnVtYmVyLCBpdGVtOiBFdmVuZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uaWQ7XG4gICAgfVxuXG5cblxuICAgIGJ5dGVTaXplKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFVdGlscy5ieXRlU2l6ZShmaWVsZCk7XG4gICAgfVxuXG4gICAgb3BlbkZpbGUoY29udGVudFR5cGUsIGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFVdGlscy5vcGVuRmlsZShjb250ZW50VHlwZSwgZmllbGQpO1xuICAgIH1cbiAgICByZWdpc3RlckNoYW5nZUluRXZlbmVtZW50cygpIHtcbiAgICAgICAgdGhpcy5ldmVudFN1YnNjcmliZXIgPSB0aGlzLmV2ZW50TWFuYWdlci5zdWJzY3JpYmUoJ2V2ZW5lbWVudExpc3RNb2RpZmljYXRpb24nLCAocmVzcG9uc2UpID0+IHRoaXMubG9hZEFsbCgpKTtcbiAgICB9XG5cbiAgICBzb3J0ICgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFt0aGlzLnByZWRpY2F0ZSArICcsJyArICh0aGlzLnJldmVyc2UgPyAnYXNjJyA6ICdkZXNjJyldO1xuICAgICAgICBpZiAodGhpcy5wcmVkaWNhdGUgIT09ICdpZCcpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKCdpZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblN1Y2Nlc3MgKGRhdGEsIGhlYWRlcnMpIHtcbiAgICAgICAgdGhpcy5saW5rcyA9IHRoaXMucGFyc2VMaW5rcy5wYXJzZShoZWFkZXJzLmdldCgnbGluaycpKTtcbiAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gaGVhZGVycy5nZXQoJ1gtVG90YWwtQ291bnQnKTtcbiAgICAgICAgdGhpcy5xdWVyeUNvdW50ID0gdGhpcy50b3RhbEl0ZW1zO1xuICAgICAgICAvLyB0aGlzLnBhZ2UgPSBwYWdpbmdQYXJhbXMucGFnZTtcbiAgICAgICAgdGhpcy5ldmVuZW1lbnRzID0gZGF0YTtcbiAgICAgICAgdGhpcy5sb2FkQWxsbGlrZXMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRXJyb3IgKGVycm9yKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKGVycm9yLm1lc3NhZ2UsIG51bGwsIG51bGwpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvZXZlbmVtZW50L2V2ZW5lbWVudC5jb21wb25lbnQudHMiXSwic291cmNlUm9vdCI6IiJ9
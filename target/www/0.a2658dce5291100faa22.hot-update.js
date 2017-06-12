webpackHotUpdate(0,{

/***/ "./src/main/webapp/app/entities/article/article.component.ts":
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
var article_service_1 = __webpack_require__("./src/main/webapp/app/entities/article/article.service.ts");
var likes_service_1 = __webpack_require__("./src/main/webapp/app/entities/likes/likes.service.ts");
var likes_model_1 = __webpack_require__("./src/main/webapp/app/entities/likes/likes.model.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var uib_pagination_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/uib-pagination.config.ts");
var ArticleComponent = (function () {
    function ArticleComponent(jhiLanguageService, articleService, parseLinks, alertService, principal, activatedRoute, dataUtils, router, likesService, eventManager, paginationUtil, paginationConfig) {
        var _this = this;
        this.jhiLanguageService = jhiLanguageService;
        this.articleService = articleService;
        this.parseLinks = parseLinks;
        this.alertService = alertService;
        this.principal = principal;
        this.activatedRoute = activatedRoute;
        this.dataUtils = dataUtils;
        this.router = router;
        this.likesService = likesService;
        this.eventManager = eventManager;
        this.paginationUtil = paginationUtil;
        this.paginationConfig = paginationConfig;
        this.isPushed = 1;
        this.itemsPerPage = shared_1.ITEMS_PER_PAGE;
        this.routeData = this.activatedRoute.data.subscribe(function (data) {
            _this.page = data['pagingParams'].page;
            _this.previousPage = data['pagingParams'].page;
            _this.reverse = data['pagingParams'].ascending;
            _this.predicate = data['pagingParams'].predicate;
        });
        this.jhiLanguageService.setLocations(['article']);
    }
    ArticleComponent.prototype.loadAll = function () {
        var _this = this;
        this.articleService.query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort()
        }).subscribe(function (res) { return _this.onSuccess(res.json(), res.headers); }, function (res) { return _this.onError(res.json()); });
    };
    ArticleComponent.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    };
    ArticleComponent.prototype.transition = function () {
        this.router.navigate(['/article'], { queryParams: {
                page: this.page,
                size: this.itemsPerPage,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
        });
        this.loadAll();
    };
    ArticleComponent.prototype.clear = function () {
        this.page = 0;
        this.router.navigate(['/article', {
                page: this.page,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }]);
        this.loadAll();
    };
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAll();
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInArticles();
        this.registerAuthenticationSuccess();
    };
    ArticleComponent.prototype.registerAuthenticationSuccess = function () {
        var _this = this;
        this.eventManager.subscribe('authenticationSuccess', function (message) {
            _this.principal.identity().then(function (account) {
                _this.account = account;
            });
        });
    };
    ArticleComponent.prototype.VoterPour = function (Article, isPushed, likes) {
        var _this = this;
        this.isPushed = 0;
        //this.likes.articleid="aze";
        //  this.likes.userid="azer";
        Article.vote += 1;
        this.articleService.modifier(Article)
            .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        this.likes = new likes_model_1.Likes;
        this.likes.articleid = Article.id;
        this.likes.userid = "hello";
        this.likesService.create(this.likes)
            .subscribe(function (res) { return _this.onSaveSuccess2(res); }, function (res) { return _this.onSaveError(res.json()); });
    };
    ArticleComponent.prototype.VoterContre = function (Article) {
        var _this = this;
        Article.vote -= 1;
        this.articleService.modifier(Article)
            .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
    };
    ArticleComponent.prototype.onSaveSuccess2 = function (result) {
        this.eventManager.broadcast({ name: 'articleListModification', content: 'OK' });
        this.isSaving = false;
    };
    ArticleComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'articleListModification', content: 'OK' });
        this.isSaving = false;
    };
    ArticleComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    ArticleComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    ArticleComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    ArticleComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    ArticleComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    ArticleComponent.prototype.registerChangeInArticles = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('articleListModification', function (response) { return _this.loadAll(); });
    };
    ArticleComponent.prototype.sort = function () {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    ArticleComponent.prototype.onSuccess = function (data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = headers.get('X-Total-Count');
        this.queryCount = this.totalItems;
        // this.page = pagingParams.page;
        this.articles = data;
    };
    ArticleComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return ArticleComponent;
}());
ArticleComponent = __decorate([
    core_1.Component({
        selector: 'jhi-article',
        template: __webpack_require__("./src/main/webapp/app/entities/article/article.component.html")
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        article_service_1.ArticleService,
        ng_jhipster_1.ParseLinks,
        ng_jhipster_1.AlertService,
        shared_1.Principal,
        router_1.ActivatedRoute,
        ng_jhipster_1.DataUtils,
        router_1.Router,
        likes_service_1.LikesService,
        ng_jhipster_1.EventManager,
        ng_jhipster_1.PaginationUtil,
        uib_pagination_config_1.PaginationConfig])
], ArticleComponent);
exports.ArticleComponent = ArticleComponent;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQudHM/ODY3ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0NBQTZEO0FBRTdELHNDQUF5RDtBQUV6RCwyQ0FBb0g7QUFHcEgseUdBQW1EO0FBRW5ELG1HQUFzRDtBQUN0RCwrRkFBNkM7QUFJN0MsNEVBQWlFO0FBQ2pFLGtIQUE2RTtBQU83RSxJQUFhLGdCQUFnQjtJQXNCekIsMEJBQ1ksa0JBQXNDLEVBRXRDLGNBQThCLEVBQzlCLFVBQXNCLEVBQ3RCLFlBQTBCLEVBQzFCLFNBQW9CLEVBQ3BCLGNBQThCLEVBQzlCLFNBQW9CLEVBQ3BCLE1BQWMsRUFDZCxZQUEwQixFQUMxQixZQUEwQixFQUMxQixjQUE4QixFQUM5QixnQkFBa0M7UUFiOUMsaUJBdUJDO1FBdEJXLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFFdEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUE3QjlDLGFBQVEsR0FBRyxDQUFDLENBQUM7UUErQlQsSUFBSSxDQUFDLFlBQVksR0FBRyx1QkFBYyxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQUk7WUFDcEQs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LENBQUM7UUFDbEMsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFTyxrQ0FBTyxHQUFmLFVBQWlCLEtBQUs7UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQztBQWpMWSxnQkFBZ0I7SUFKNUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLDZCQUFhLGdFQUEwQjtLQUMxQyxDQUFDO3FDQXdCa0MsZ0NBQWtCO1FBRXRCLGdDQUFjO1FBQ2xCLHdCQUFVO1FBQ1IsMEJBQVk7UUFDZixrQkFBUztRQUNKLHVCQUFjO1FBQ25CLHVCQUFTO1FBQ1osZUFBTTtRQUNBLDRCQUFZO1FBQ1osMEJBQVk7UUFDViw0QkFBYztRQUNaLHdDQUFnQjtHQW5DckMsZ0JBQWdCLENBaUw1QjtBQWpMWSw0Q0FBZ0IiLCJmaWxlIjoiMC5hMjY1OGRjZTUyOTExMDBmYWEyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBFdmVudE1hbmFnZXIsIFBhcnNlTGlua3MsIFBhZ2luYXRpb25VdGlsLCBKaGlMYW5ndWFnZVNlcnZpY2UsIEFsZXJ0U2VydmljZSwgRGF0YVV0aWxzIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBBcnRpY2xlIH0gZnJvbSAnLi9hcnRpY2xlLm1vZGVsJztcbmltcG9ydCB7IEFydGljbGVTZXJ2aWNlIH0gZnJvbSAnLi9hcnRpY2xlLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBMaWtlc1NlcnZpY2UgfSBmcm9tICcuLi9saWtlcy9saWtlcy5zZXJ2aWNlJztcbmltcG9ydCB7IExpa2VzIH0gZnJvbSAnLi4vbGlrZXMvbGlrZXMubW9kZWwnO1xuXG5cblxuaW1wb3J0IHsgSVRFTVNfUEVSX1BBR0UsIFByaW5jaXBhbCxBY2NvdW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IFBhZ2luYXRpb25Db25maWcgfSBmcm9tICcuLi8uLi9ibG9ja3MvY29uZmlnL3VpYi1wYWdpbmF0aW9uLmNvbmZpZyc7XG5pbXBvcnQge05nYkFjdGl2ZU1vZGFsfSBmcm9tIFwiQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXBcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktYXJ0aWNsZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FydGljbGUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFydGljbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbmN1cnJlbnRBY2NvdW50OiBhbnk7XG4gICAgYXJ0aWNsZXM6IEFydGljbGVbXTtcbiAgICBsaWtlc3MgOiBMaWtlc1tdO1xuICAgIGxpa2VzOiBMaWtlcztcbiAgICBpc1B1c2hlZCA9IDE7XG4gICAgYWNjb3VudDogQWNjb3VudDtcbiAgICBlcnJvcjogYW55O1xuICAgIHN1Y2Nlc3M6IGFueTtcbiAgICBldmVudFN1YnNjcmliZXI6IFN1YnNjcmlwdGlvbjtcbiAgICByb3V0ZURhdGE6IGFueTtcbiAgICBsaW5rczogYW55O1xuICAgIHRvdGFsSXRlbXM6IGFueTtcbiAgICBxdWVyeUNvdW50OiBhbnk7XG4gICAgaXRlbXNQZXJQYWdlOiBhbnk7XG4gICAgcGFnZTogYW55O1xuICAgIHByZWRpY2F0ZTogYW55O1xuICAgIHByZXZpb3VzUGFnZTogYW55O1xuICAgIHJldmVyc2U6IGFueTtcbiAgICBpc1NhdmluZzogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGpoaUxhbmd1YWdlU2VydmljZTogSmhpTGFuZ3VhZ2VTZXJ2aWNlLFxuXG4gICAgICAgIHByaXZhdGUgYXJ0aWNsZVNlcnZpY2U6IEFydGljbGVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBhcnNlTGlua3M6IFBhcnNlTGlua3MsXG4gICAgICAgIHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWwsXG4gICAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIGRhdGFVdGlsczogRGF0YVV0aWxzLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGxpa2VzU2VydmljZTogTGlrZXNTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyLFxuICAgICAgICBwcml2YXRlIHBhZ2luYXRpb25VdGlsOiBQYWdpbmF0aW9uVXRpbCxcbiAgICAgICAgcHJpdmF0ZSBwYWdpbmF0aW9uQ29uZmlnOiBQYWdpbmF0aW9uQ29uZmlnXG4gICAgKSB7XG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gSVRFTVNfUEVSX1BBR0U7XG4gICAgICAgIHRoaXMucm91dGVEYXRhID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5kYXRhLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMucGFnZSA9IGRhdGFbJ3BhZ2luZ1BhcmFtcyddLnBhZ2U7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzUGFnZSA9IGRhdGFbJ3BhZ2luZ1BhcmFtcyddLnBhZ2U7XG4gICAgICAgICAgICB0aGlzLnJldmVyc2UgPSBkYXRhWydwYWdpbmdQYXJhbXMnXS5hc2NlbmRpbmc7XG4gICAgICAgICAgICB0aGlzLnByZWRpY2F0ZSA9IGRhdGFbJ3BhZ2luZ1BhcmFtcyddLnByZWRpY2F0ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuamhpTGFuZ3VhZ2VTZXJ2aWNlLnNldExvY2F0aW9ucyhbJ2FydGljbGUnXSk7XG4gICAgfVxuXG4gICAgbG9hZEFsbCgpIHtcbiAgICAgICAgdGhpcy5hcnRpY2xlU2VydmljZS5xdWVyeSh7XG4gICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2UgLSAxLFxuICAgICAgICAgICAgc2l6ZTogdGhpcy5pdGVtc1BlclBhZ2UsXG4gICAgICAgICAgICBzb3J0OiB0aGlzLnNvcnQoKX0pLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLm9uU3VjY2VzcyhyZXMuanNvbigpLCByZXMuaGVhZGVycyksXG4gICAgICAgICAgICAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vbkVycm9yKHJlcy5qc29uKCkpXG4gICAgICAgICk7XG4gICAgfVxuICAgIGxvYWRQYWdlIChwYWdlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHBhZ2UgIT09IHRoaXMucHJldmlvdXNQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzUGFnZSA9IHBhZ2U7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0cmFuc2l0aW9uKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcnRpY2xlJ10sIHtxdWVyeVBhcmFtczpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2UsXG4gICAgICAgICAgICAgICAgc2l6ZTogdGhpcy5pdGVtc1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgc29ydDogdGhpcy5wcmVkaWNhdGUgKyAnLCcgKyAodGhpcy5yZXZlcnNlID8gJ2FzYycgOiAnZGVzYycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxvYWRBbGwoKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5wYWdlID0gMDtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXJ0aWNsZScsIHtcbiAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgICAgICAgIHNvcnQ6IHRoaXMucHJlZGljYXRlICsgJywnICsgKHRoaXMucmV2ZXJzZSA/ICdhc2MnIDogJ2Rlc2MnKVxuICAgICAgICB9XSk7XG4gICAgICAgIHRoaXMubG9hZEFsbCgpO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5sb2FkQWxsKCk7XG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudCA9IGFjY291bnQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlSW5BcnRpY2xlcygpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQXV0aGVudGljYXRpb25TdWNjZXNzKCk7XG4gICAgfVxuICAgIHJlZ2lzdGVyQXV0aGVudGljYXRpb25TdWNjZXNzKCkge1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5zdWJzY3JpYmUoJ2F1dGhlbnRpY2F0aW9uU3VjY2VzcycsIChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByaW5jaXBhbC5pZGVudGl0eSgpLnRoZW4oKGFjY291bnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjY291bnQgPSBhY2NvdW50O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBWb3RlclBvdXIoQXJ0aWNsZSxpc1B1c2hlZCxsaWtlczpMaWtlcykge1xuICAgICAgICB0aGlzLmlzUHVzaGVkID0gMDtcbiAgICAgICAgLy90aGlzLmxpa2VzLmFydGljbGVpZD1cImF6ZVwiO1xuICAgICAgLy8gIHRoaXMubGlrZXMudXNlcmlkPVwiYXplclwiO1xuICAgICAgICBBcnRpY2xlLnZvdGUgKz0gMTtcbiAgICAgICAgdGhpcy5hcnRpY2xlU2VydmljZS5tb2RpZmllcihBcnRpY2xlKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzOiBBcnRpY2xlKSA9PiB0aGlzLm9uU2F2ZVN1Y2Nlc3MocmVzKSwgKHJlczogUmVzcG9uc2UpID0+IHRoaXMub25TYXZlRXJyb3IocmVzLmpzb24oKSkpO1xuXG50aGlzLmxpa2VzPSBuZXcgTGlrZXM7XG4gICAgICAgdGhpcy5saWtlcy5hcnRpY2xlaWQ9QXJ0aWNsZS5pZDtcbiAgICAgICAgdGhpcy5saWtlcy51c2VyaWQ9XCJoZWxsb1wiO1xuICAgICAgICB0aGlzLmxpa2VzU2VydmljZS5jcmVhdGUodGhpcy5saWtlcylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlczogTGlrZXMpID0+IHRoaXMub25TYXZlU3VjY2VzczIocmVzKSwgKHJlczogUmVzcG9uc2UpID0+IHRoaXMub25TYXZlRXJyb3IocmVzLmpzb24oKSkpO1xuXG5cblxuXG5cbiAgICB9XG4gICAgVm90ZXJDb250cmUoQXJ0aWNsZSkge1xuICAgICAgICBBcnRpY2xlLnZvdGUgLT0gMTtcbiAgICAgICAgdGhpcy5hcnRpY2xlU2VydmljZS5tb2RpZmllcihBcnRpY2xlKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzOiBBcnRpY2xlKSA9PiB0aGlzLm9uU2F2ZVN1Y2Nlc3MocmVzKSwgKHJlczogUmVzcG9uc2UpID0+IHRoaXMub25TYXZlRXJyb3IocmVzLmpzb24oKSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TYXZlU3VjY2VzczIgKHJlc3VsdDogTGlrZXMpIHtcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuYnJvYWRjYXN0KHsgbmFtZTogJ2FydGljbGVMaXN0TW9kaWZpY2F0aW9uJywgY29udGVudDogJ09LJ30pO1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG5cbiAgICB9XG4gICAgcHJpdmF0ZSBvblNhdmVTdWNjZXNzIChyZXN1bHQ6IEFydGljbGUpIHtcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuYnJvYWRjYXN0KHsgbmFtZTogJ2FydGljbGVMaXN0TW9kaWZpY2F0aW9uJywgY29udGVudDogJ09LJ30pO1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2F2ZUVycm9yIChlcnJvcikge1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25FcnJvcihlcnJvcik7XG4gICAgfVxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5kZXN0cm95KHRoaXMuZXZlbnRTdWJzY3JpYmVyKTtcbiAgICB9XG5cbiAgICB0cmFja0lkIChpbmRleDogbnVtYmVyLCBpdGVtOiBBcnRpY2xlKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmlkO1xuICAgIH1cblxuXG5cblxuICAgIGJ5dGVTaXplKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFVdGlscy5ieXRlU2l6ZShmaWVsZCk7XG4gICAgfVxuXG4gICAgb3BlbkZpbGUoY29udGVudFR5cGUsIGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFVdGlscy5vcGVuRmlsZShjb250ZW50VHlwZSwgZmllbGQpO1xuICAgIH1cbiAgICByZWdpc3RlckNoYW5nZUluQXJ0aWNsZXMoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRTdWJzY3JpYmVyID0gdGhpcy5ldmVudE1hbmFnZXIuc3Vic2NyaWJlKCdhcnRpY2xlTGlzdE1vZGlmaWNhdGlvbicsIChyZXNwb25zZSkgPT4gdGhpcy5sb2FkQWxsKCkpO1xuICAgIH1cblxuICAgIHNvcnQgKCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gW3RoaXMucHJlZGljYXRlICsgJywnICsgKHRoaXMucmV2ZXJzZSA/ICdhc2MnIDogJ2Rlc2MnKV07XG4gICAgICAgIGlmICh0aGlzLnByZWRpY2F0ZSAhPT0gJ2lkJykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goJ2lkJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU3VjY2VzcyAoZGF0YSwgaGVhZGVycykge1xuICAgICAgICB0aGlzLmxpbmtzID0gdGhpcy5wYXJzZUxpbmtzLnBhcnNlKGhlYWRlcnMuZ2V0KCdsaW5rJykpO1xuICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSBoZWFkZXJzLmdldCgnWC1Ub3RhbC1Db3VudCcpO1xuICAgICAgICB0aGlzLnF1ZXJ5Q291bnQgPSB0aGlzLnRvdGFsSXRlbXM7XG4gICAgICAgIC8vIHRoaXMucGFnZSA9IHBhZ2luZ1BhcmFtcy5wYWdlO1xuICAgICAgICB0aGlzLmFydGljbGVzID0gZGF0YTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRXJyb3IgKGVycm9yKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKGVycm9yLm1lc3NhZ2UsIG51bGwsIG51bGwpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC50cyJdLCJzb3VyY2VSb290IjoiIn0=
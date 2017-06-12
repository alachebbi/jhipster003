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
var dislike_service_1 = __webpack_require__("./src/main/webapp/app/entities/dislike/dislike.service.ts");
var dislike_model_1 = __webpack_require__("./src/main/webapp/app/entities/dislike/dislike.model.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var uib_pagination_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/uib-pagination.config.ts");
var ArticleComponent = (function () {
    function ArticleComponent(jhiLanguageService, articleService, parseLinks, alertService, principal, activatedRoute, dataUtils, router, likesService, dislikeService, eventManager, paginationUtil, paginationConfig) {
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
        this.dislikeService = dislikeService;
        this.eventManager = eventManager;
        this.paginationUtil = paginationUtil;
        this.paginationConfig = paginationConfig;
        this.isPushed = false;
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
    ArticleComponent.prototype.loadAlllikes = function () {
        var _this = this;
        this.articles.forEach(function (item, index) {
            _this.likesService.findByidandname(item.id, _this.currentAccount.firstName)
                .subscribe(function (likes) {
                if (likes.userid == _this.currentAccount.firstName) {
                    document.getElementById("l" + index).setAttribute("disabled", "disabled");
                    document.getElementById("l" + index).style.opacity = "0.3";
                }
            });
        });
    };
    ArticleComponent.prototype.loadAlldislikes = function () {
        var _this = this;
        this.articles.forEach(function (item, index) {
            _this.dislikeService.findByidandname(item.id, _this.currentAccount.firstName)
                .subscribe(function (dislike) {
                if (dislike.utilisateur == _this.currentAccount.firstName) {
                    // this.likesService.delete(dislike.article);
                    document.getElementById("p" + index).setAttribute("disabled", "disabled");
                    document.getElementById("p" + index).style.opacity = "0.3";
                    var element = document.getElementById("l" + index);
                }
            });
        });
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
    ArticleComponent.prototype.VoterPour = function (Article, likes) {
        var _this = this;
        // Article.ispushed=true;
        Article.vote += 1;
        this.articleService.modifier(Article)
            .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        this.likes = new likes_model_1.Likes;
        this.likes.articleid = Article.id;
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.likes.userid = this.currentAccount.firstName;
        this.likesService.create(this.likes)
            .subscribe(function (res) { return _this.onSaveSuccess2(res); }, function (res) { return _this.onSaveError(res.json()); });
    };
    ArticleComponent.prototype.VoterContre = function (Article) {
        var _this = this;
        Article.vote -= 1;
        this.articleService.modifier(Article)
            .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        this.dislike = new dislike_model_1.Dislike;
        this.dislike.article = Article.id;
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.dislike.utilisateur = this.currentAccount.firstName;
        this.dislikeService.create(this.dislike)
            .subscribe(function (res) { return _this.onSaveSuccess3(res); }, function (res) { return _this.onSaveError(res.json()); });
    };
    ArticleComponent.prototype.onSaveSuccess2 = function (result) {
        this.eventManager.broadcast({ name: 'articleListModification', content: 'OK' });
        this.isSaving = false;
    };
    ArticleComponent.prototype.onSaveSuccess3 = function (result) {
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
        this.loadAlllikes();
        this.loadAlldislikes();
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
        dislike_service_1.DislikeService,
        ng_jhipster_1.EventManager,
        ng_jhipster_1.PaginationUtil,
        uib_pagination_config_1.PaginationConfig])
], ArticleComponent);
exports.ArticleComponent = ArticleComponent;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQudHM/ODY3ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0NBQTZEO0FBRTdELHNDQUF5RDtBQUV6RCwyQ0FBb0g7QUFHcEgseUdBQW1EO0FBRW5ELG1HQUFzRDtBQUN0RCwrRkFBNkM7QUFFN0MseUdBQTREO0FBQzVELHFHQUFtRDtBQUluRCw0RUFBaUU7QUFDakUsa0hBQTZFO0FBTzdFLElBQWEsZ0JBQWdCO0lBeUJ6QiwwQkFDWSxrQkFBc0MsRUFFdEMsY0FBOEIsRUFDOUIsVUFBc0IsRUFDdEIsWUFBMEIsRUFDMUIsU0FBb0IsRUFDcEIsY0FBOEIsRUFDOUIsU0FBb0IsRUFDcEIsTUFBYyxFQUNkLFlBQTBCLEVBQzFCLGNBQThCLEVBQzlCLFlBQTBCLEVBQzFCLGNBQThCLEVBQzlCLGdCQUFrQztRQWQ5QyxpQkF3QkM7UUF2QlcsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUV0QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFoQzlDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFrQ2IsSUFBSSxDQUFDLFlBQVksR0FBRyx1QkFBYyxDQUFDO1FBQ25DLElBQUks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QUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbEMsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVPLGtDQUFPLEdBQWYsVUFBaUIsS0FBSztRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDO0FBN09ZLGdCQUFnQjtJQUo1QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsNkJBQWEsZ0VBQTBCO0tBQzFDLENBQUM7cUNBMkJrQyxnQ0FBa0I7UUFFdEIsZ0NBQWM7UUFDbEIsd0JBQVU7UUFDUiwwQkFBWTtRQUNmLGtCQUFTO1FBQ0osdUJBQWM7UUFDbkIsdUJBQVM7UUFDWixlQUFNO1FBQ0EsNEJBQVk7UUFDVixnQ0FBYztRQUNoQiwwQkFBWTtRQUNWLDRCQUFjO1FBQ1osd0NBQWdCO0dBdkNyQyxnQkFBZ0IsQ0E2TzVCO0FBN09ZLDRDQUFnQiIsImZpbGUiOiIwLjAxN2FkOWFjZmE5YjBmZjUyMzg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IEV2ZW50TWFuYWdlciwgUGFyc2VMaW5rcywgUGFnaW5hdGlvblV0aWwsIEpoaUxhbmd1YWdlU2VydmljZSwgQWxlcnRTZXJ2aWNlLCBEYXRhVXRpbHMgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IEFydGljbGUgfSBmcm9tICcuL2FydGljbGUubW9kZWwnO1xuaW1wb3J0IHsgQXJ0aWNsZVNlcnZpY2UgfSBmcm9tICcuL2FydGljbGUuc2VydmljZSc7XG5cbmltcG9ydCB7IExpa2VzU2VydmljZSB9IGZyb20gJy4uL2xpa2VzL2xpa2VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGlrZXMgfSBmcm9tICcuLi9saWtlcy9saWtlcy5tb2RlbCc7XG5cbmltcG9ydCB7IERpc2xpa2VTZXJ2aWNlIH0gZnJvbSAnLi4vZGlzbGlrZS9kaXNsaWtlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGlzbGlrZSB9IGZyb20gJy4uL2Rpc2xpa2UvZGlzbGlrZS5tb2RlbCc7XG5cblxuXG5pbXBvcnQgeyBJVEVNU19QRVJfUEFHRSwgUHJpbmNpcGFsLEFjY291bnQgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uL2Jsb2Nrcy9jb25maWcvdWliLXBhZ2luYXRpb24uY29uZmlnJztcbmltcG9ydCB7TmdiQWN0aXZlTW9kYWx9IGZyb20gXCJAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1hcnRpY2xlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXJ0aWNsZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQXJ0aWNsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuY3VycmVudEFjY291bnQ6IGFueTtcbiAgICBhcnRpY2xlczogQXJ0aWNsZVtdO1xuICAgIGxpa2VzcyA6IExpa2VzW107XG4gICAgbGlrZXM6IExpa2VzO1xuICAgIGRpc2xpa2U6IERpc2xpa2U7XG4gICAgaXNQdXNoZWQgPSBmYWxzZTtcbiAgICBhY2NvdW50OiBBY2NvdW50O1xuICAgIGVycm9yOiBhbnk7XG4gICAgc3VjY2VzczogYW55O1xuICAgIGV2ZW50U3Vic2NyaWJlcjogU3Vic2NyaXB0aW9uO1xuICAgIHJvdXRlRGF0YTogYW55O1xuICAgIGxpbmtzOiBhbnk7XG5cbiAgICB0b3RhbEl0ZW1zOiBhbnk7XG4gICAgcXVlcnlDb3VudDogYW55O1xuICAgIGl0ZW1zUGVyUGFnZTogYW55O1xuICAgIHBhZ2U6IGFueTtcbiAgICBwcmVkaWNhdGU6IGFueTtcbiAgICBwcmV2aW91c1BhZ2U6IGFueTtcbiAgICByZXZlcnNlOiBhbnk7XG4gICAgaXNTYXZpbmc6IGJvb2xlYW47XG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGpoaUxhbmd1YWdlU2VydmljZTogSmhpTGFuZ3VhZ2VTZXJ2aWNlLFxuXG4gICAgICAgIHByaXZhdGUgYXJ0aWNsZVNlcnZpY2U6IEFydGljbGVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBhcnNlTGlua3M6IFBhcnNlTGlua3MsXG4gICAgICAgIHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWwsXG4gICAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIGRhdGFVdGlsczogRGF0YVV0aWxzLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGxpa2VzU2VydmljZTogTGlrZXNTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGRpc2xpa2VTZXJ2aWNlOiBEaXNsaWtlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlcixcbiAgICAgICAgcHJpdmF0ZSBwYWdpbmF0aW9uVXRpbDogUGFnaW5hdGlvblV0aWwsXG4gICAgICAgIHByaXZhdGUgcGFnaW5hdGlvbkNvbmZpZzogUGFnaW5hdGlvbkNvbmZpZ1xuICAgICkge1xuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IElURU1TX1BFUl9QQUdFO1xuICAgICAgICB0aGlzLnJvdXRlRGF0YSA9IHRoaXMuYWN0aXZhdGVkUm91dGUuZGF0YS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhZ2UgPSBkYXRhWydwYWdpbmdQYXJhbXMnXS5wYWdlO1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1BhZ2UgPSBkYXRhWydwYWdpbmdQYXJhbXMnXS5wYWdlO1xuICAgICAgICAgICAgdGhpcy5yZXZlcnNlID0gZGF0YVsncGFnaW5nUGFyYW1zJ10uYXNjZW5kaW5nO1xuICAgICAgICAgICAgdGhpcy5wcmVkaWNhdGUgPSBkYXRhWydwYWdpbmdQYXJhbXMnXS5wcmVkaWNhdGU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmpoaUxhbmd1YWdlU2VydmljZS5zZXRMb2NhdGlvbnMoWydhcnRpY2xlJ10pO1xuICAgIH1cblxuICAgIGxvYWRBbGwoKSB7XG4gICAgICAgIHRoaXMuYXJ0aWNsZVNlcnZpY2UucXVlcnkoe1xuICAgICAgICAgICAgcGFnZTogdGhpcy5wYWdlIC0gMSxcbiAgICAgICAgICAgIHNpemU6IHRoaXMuaXRlbXNQZXJQYWdlLFxuICAgICAgICAgICAgc29ydDogdGhpcy5zb3J0KCl9KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vblN1Y2Nlc3MocmVzLmpzb24oKSwgcmVzLmhlYWRlcnMpLFxuICAgICAgICAgICAgKHJlczogUmVzcG9uc2UpID0+IHRoaXMub25FcnJvcihyZXMuanNvbigpKVxuICAgICAgICApO1xuICAgIH1cbiAgICBsb2FkUGFnZSAocGFnZTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChwYWdlICE9PSB0aGlzLnByZXZpb3VzUGFnZSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1BhZ2UgPSBwYWdlO1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdHJhbnNpdGlvbigpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXJ0aWNsZSddLCB7cXVlcnlQYXJhbXM6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGFnZTogdGhpcy5wYWdlLFxuICAgICAgICAgICAgICAgIHNpemU6IHRoaXMuaXRlbXNQZXJQYWdlLFxuICAgICAgICAgICAgICAgIHNvcnQ6IHRoaXMucHJlZGljYXRlICsgJywnICsgKHRoaXMucmV2ZXJzZSA/ICdhc2MnIDogJ2Rlc2MnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sb2FkQWxsKCk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMucGFnZSA9IDA7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FydGljbGUnLCB7XG4gICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2UsXG4gICAgICAgICAgICBzb3J0OiB0aGlzLnByZWRpY2F0ZSArICcsJyArICh0aGlzLnJldmVyc2UgPyAnYXNjJyA6ICdkZXNjJylcbiAgICAgICAgfV0pO1xuICAgICAgICB0aGlzLmxvYWRBbGwoKTtcbiAgICB9XG4gICAgbG9hZEFsbGxpa2VzKCkge1xuICAgICAgICB0aGlzLmFydGljbGVzLmZvckVhY2goKGl0ZW0saW5kZXgpPT57XG4gICAgICAgICAgICB0aGlzLmxpa2VzU2VydmljZS5maW5kQnlpZGFuZG5hbWUoaXRlbS5pZCx0aGlzLmN1cnJlbnRBY2NvdW50LmZpcnN0TmFtZSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICBsaWtlcz0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpa2VzLnVzZXJpZD09dGhpcy5jdXJyZW50QWNjb3VudC5maXJzdE5hbWUgKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibFwiICsgaW5kZXgpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsXCJkaXNhYmxlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibFwiICsgaW5kZXgpLnN0eWxlLm9wYWNpdHk9XCIwLjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3N0eWxlLm9wYWNpdHk9XCIwLjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsLmRpc2FibGVkPXRydWU7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4gICAgbG9hZEFsbGRpc2xpa2VzKCkge1xuICAgICAgICB0aGlzLmFydGljbGVzLmZvckVhY2goKGl0ZW0saW5kZXgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNsaWtlU2VydmljZS5maW5kQnlpZGFuZG5hbWUoaXRlbS5pZCx0aGlzLmN1cnJlbnRBY2NvdW50LmZpcnN0TmFtZSlcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2xpa2U9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlzbGlrZS51dGlsaXNhdGV1cj09dGhpcy5jdXJyZW50QWNjb3VudC5maXJzdE5hbWUgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubGlrZXNTZXJ2aWNlLmRlbGV0ZShkaXNsaWtlLmFydGljbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBcIiArIGluZGV4KS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLFwiZGlzYWJsZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwXCIgKyBpbmRleCkuc3R5bGUub3BhY2l0eT1cIjAuM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibFwiICsgaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc3R5bGUub3BhY2l0eT1cIjAuM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGwuZGlzYWJsZWQ9dHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubG9hZEFsbCgpO1xuXG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudCA9IGFjY291bnQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlSW5BcnRpY2xlcygpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQXV0aGVudGljYXRpb25TdWNjZXNzKCk7XG5cbiAgICB9XG4gICAgcmVnaXN0ZXJBdXRoZW50aWNhdGlvblN1Y2Nlc3MoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLnN1YnNjcmliZSgnYXV0aGVudGljYXRpb25TdWNjZXNzJywgKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWNjb3VudCA9IGFjY291bnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgVm90ZXJQb3VyKEFydGljbGUsbGlrZXM6TGlrZXMpIHtcbiAgICAgICAvLyBBcnRpY2xlLmlzcHVzaGVkPXRydWU7XG4gICAgICAgIEFydGljbGUudm90ZSArPSAxO1xuICAgICAgICB0aGlzLmFydGljbGVTZXJ2aWNlLm1vZGlmaWVyKEFydGljbGUpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXM6IEFydGljbGUpID0+IHRoaXMub25TYXZlU3VjY2VzcyhyZXMpLCAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vblNhdmVFcnJvcihyZXMuanNvbigpKSk7XG5cbiAgICAgICB0aGlzLmxpa2VzPSBuZXcgTGlrZXM7XG4gICAgICAgdGhpcy5saWtlcy5hcnRpY2xlaWQ9QXJ0aWNsZS5pZDtcbiAgICAgICAgdGhpcy5wcmluY2lwYWwuaWRlbnRpdHkoKS50aGVuKChhY2NvdW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50ID0gYWNjb3VudDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlrZXMudXNlcmlkPXRoaXMuY3VycmVudEFjY291bnQuZmlyc3ROYW1lO1xuICAgICAgICB0aGlzLmxpa2VzU2VydmljZS5jcmVhdGUodGhpcy5saWtlcylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlczogTGlrZXMpID0+IHRoaXMub25TYXZlU3VjY2VzczIocmVzKSwgKHJlczogUmVzcG9uc2UpID0+IHRoaXMub25TYXZlRXJyb3IocmVzLmpzb24oKSkpO1xuICAgIH1cbiAgICBWb3RlckNvbnRyZShBcnRpY2xlKSB7XG4gICAgICAgIEFydGljbGUudm90ZSAtPSAxO1xuICAgICAgICB0aGlzLmFydGljbGVTZXJ2aWNlLm1vZGlmaWVyKEFydGljbGUpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXM6IEFydGljbGUpID0+IHRoaXMub25TYXZlU3VjY2VzcyhyZXMpLCAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vblNhdmVFcnJvcihyZXMuanNvbigpKSk7XG5cbiAgICAgICAgdGhpcy5kaXNsaWtlPSBuZXcgRGlzbGlrZTtcbiAgICAgICAgdGhpcy5kaXNsaWtlLmFydGljbGU9QXJ0aWNsZS5pZDtcbiAgICAgICAgdGhpcy5wcmluY2lwYWwuaWRlbnRpdHkoKS50aGVuKChhY2NvdW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50ID0gYWNjb3VudDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGlzbGlrZS51dGlsaXNhdGV1cj10aGlzLmN1cnJlbnRBY2NvdW50LmZpcnN0TmFtZTtcbiAgICAgICAgdGhpcy5kaXNsaWtlU2VydmljZS5jcmVhdGUodGhpcy5kaXNsaWtlKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzOiBMaWtlcykgPT4gdGhpcy5vblNhdmVTdWNjZXNzMyhyZXMpLCAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vblNhdmVFcnJvcihyZXMuanNvbigpKSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2F2ZVN1Y2Nlc3MyIChyZXN1bHQ6IExpa2VzKSB7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLmJyb2FkY2FzdCh7IG5hbWU6ICdhcnRpY2xlTGlzdE1vZGlmaWNhdGlvbicsIGNvbnRlbnQ6ICdPSyd9KTtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuXG4gICAgfVxuICAgIHByaXZhdGUgb25TYXZlU3VjY2VzczMgKHJlc3VsdDogRGlzbGlrZSkge1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3QoeyBuYW1lOiAnYXJ0aWNsZUxpc3RNb2RpZmljYXRpb24nLCBjb250ZW50OiAnT0snfSk7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcblxuICAgIH1cbiAgICBwcml2YXRlIG9uU2F2ZVN1Y2Nlc3MgKHJlc3VsdDogQXJ0aWNsZSkge1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3QoeyBuYW1lOiAnYXJ0aWNsZUxpc3RNb2RpZmljYXRpb24nLCBjb250ZW50OiAnT0snfSk7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25TYXZlRXJyb3IgKGVycm9yKSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkVycm9yKGVycm9yKTtcbiAgICB9XG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLmRlc3Ryb3kodGhpcy5ldmVudFN1YnNjcmliZXIpO1xuICAgIH1cblxuICAgIHRyYWNrSWQgKGluZGV4OiBudW1iZXIsIGl0ZW06IEFydGljbGUpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uaWQ7XG4gICAgfVxuXG5cblxuXG4gICAgYnl0ZVNpemUoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVV0aWxzLmJ5dGVTaXplKGZpZWxkKTtcbiAgICB9XG5cbiAgICBvcGVuRmlsZShjb250ZW50VHlwZSwgZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVV0aWxzLm9wZW5GaWxlKGNvbnRlbnRUeXBlLCBmaWVsZCk7XG4gICAgfVxuICAgIHJlZ2lzdGVyQ2hhbmdlSW5BcnRpY2xlcygpIHtcbiAgICAgICAgdGhpcy5ldmVudFN1YnNjcmliZXIgPSB0aGlzLmV2ZW50TWFuYWdlci5zdWJzY3JpYmUoJ2FydGljbGVMaXN0TW9kaWZpY2F0aW9uJywgKHJlc3BvbnNlKSA9PiB0aGlzLmxvYWRBbGwoKSk7XG4gICAgfVxuXG4gICAgc29ydCAoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbdGhpcy5wcmVkaWNhdGUgKyAnLCcgKyAodGhpcy5yZXZlcnNlID8gJ2FzYycgOiAnZGVzYycpXTtcbiAgICAgICAgaWYgKHRoaXMucHJlZGljYXRlICE9PSAnaWQnKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCgnaWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TdWNjZXNzIChkYXRhLCBoZWFkZXJzKSB7XG4gICAgICAgIHRoaXMubGlua3MgPSB0aGlzLnBhcnNlTGlua3MucGFyc2UoaGVhZGVycy5nZXQoJ2xpbmsnKSk7XG4gICAgICAgIHRoaXMudG90YWxJdGVtcyA9IGhlYWRlcnMuZ2V0KCdYLVRvdGFsLUNvdW50Jyk7XG4gICAgICAgIHRoaXMucXVlcnlDb3VudCA9IHRoaXMudG90YWxJdGVtcztcbiAgICAgICAgLy8gdGhpcy5wYWdlID0gcGFnaW5nUGFyYW1zLnBhZ2U7XG4gICAgICAgIHRoaXMuYXJ0aWNsZXMgPSBkYXRhO1xuICAgICAgICB0aGlzLmxvYWRBbGxsaWtlcygpO1xuICAgICAgICB0aGlzLmxvYWRBbGxkaXNsaWtlcygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25FcnJvciAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UuZXJyb3IoZXJyb3IubWVzc2FnZSwgbnVsbCwgbnVsbCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==
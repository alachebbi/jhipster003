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
        // this.likes.articleid=Article.id;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQudHM/ODY3ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0NBQTZEO0FBRTdELHNDQUF5RDtBQUV6RCwyQ0FBb0g7QUFHcEgseUdBQW1EO0FBRW5ELG1HQUFzRDtBQUN0RCwrRkFBNkM7QUFJN0MsNEVBQWlFO0FBQ2pFLGtIQUE2RTtBQU83RSxJQUFhLGdCQUFnQjtJQXNCekIsMEJBQ1ksa0JBQXNDLEVBRXRDLGNBQThCLEVBQzlCLFVBQXNCLEVBQ3RCLFlBQTBCLEVBQzFCLFNBQW9CLEVBQ3BCLGNBQThCLEVBQzlCLFNBQW9CLEVBQ3BCLE1BQWMsRUFDZCxZQUEwQixFQUMxQixZQUEwQixFQUMxQixjQUE4QixFQUM5QixnQkFBa0M7UUFiOUMsaUJBdUJDO1FBdEJXLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFFdEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUE3QjlDLGFBQVEsR0FBRyxDQUFDLENBQUM7UUErQlQsSUFBSSxDQUFDLFlBQVksR0FBRyx1QkFBYyxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQUk7WUFDcEQsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM5QyxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDOUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGtDQUFPLEdBQVA7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUM7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFO1NBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FDN0IsVUFBQyxHQUFhLElBQUssWUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUF2QyxDQUF1QyxFQUMxRCxVQUFDLEdBQWEsSUFBSyxZQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixDQUM5QyxDQUFDO0lBQ04sQ0FBQztJQUNELG1DQUFRLEdBQVIsVUFBVSxJQUFZO1FBQ2xCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEIsQ0FBQztJQUNMLENBQUM7SUFDRCxxQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFDLFdBQVcsRUFDM0M7Z0JBQ0ksSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWTtnQkFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDO2FBQy9EO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxnQ0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBRTtnQkFDOUIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQzthQUMvRCxDQUFDLENBQUMsQ0FBQztRQUNKLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ0QsbUNBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFPO1lBQ25DLEtBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLDZCQUE2QixFQUFFLENBQUM7SUFDekMsQ0FBQztJQUNELHdEQUE2QixHQUE3QjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLEVBQUUsVUFBQyxPQUFPO1lBQ3pELEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBTztnQkFDbkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxvQ0FBUyxHQUFULFVBQVUsT0FBTyxFQUFDLFFBQVEsRUFBQyxLQUFXO1FBQXRDLGlCQWtCQztRQWpCRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQiw2QkFBNkI7UUFDL0IsNkJBQTZCO1FBQzNCLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzthQUNoQyxTQUFTLENBQUMsVUFBQyxHQUFZLElBQUssWUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBdkIsQ0FBdUIsRUFBRSxVQUFDLEdBQWEsSUFBSyxZQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7UUFFbkgsSUFBSSxDQUFDLEtBQUssR0FBRSxJQUFJLG1CQUFLLENBQUM7UUFDZixtQ0FBbUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsT0FBTyxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDL0IsU0FBUyxDQUFDLFVBQUMsR0FBVSxJQUFLLFlBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQXhCLENBQXdCLEVBQUUsVUFBQyxHQUFhLElBQUssWUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO0lBTTlHLENBQUM7SUFDRCxzQ0FBVyxHQUFYLFVBQVksT0FBTztRQUFuQixpQkFJQztRQUhHLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzthQUNoQyxTQUFTLENBQUMsVUFBQyxHQUFZLElBQUssWUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBdkIsQ0FBdUIsRUFBRSxVQUFDLEdBQWEsSUFBSyxZQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7SUFDL0csQ0FBQztJQUVPLHlDQUFjLEdBQXRCLFVBQXdCLE1BQWE7UUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFFMUIsQ0FBQztJQUNPLHdDQUFhLEdBQXJCLFVBQXVCLE1BQWU7UUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFFMUIsQ0FBQztJQUVPLHNDQUFXLEdBQW5CLFVBQXFCLEtBQUs7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ0Qsc0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsa0NBQU8sR0FBUCxVQUFTLEtBQWEsRUFBRSxJQUFhO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFLRCxtQ0FBUSxHQUFSLFVBQVMsS0FBSztRQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsbUNBQVEsR0FBUixVQUFTLFdBQVcsRUFBRSxLQUFLO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNELG1EQUF3QixHQUF4QjtRQUFBLGlCQUVDO1FBREcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsRUFBRSxVQUFDLFFBQVEsSUFBSyxZQUFJLENBQUMsT0FBTyxFQUFFLEVBQWQsQ0FBYyxDQUFDLENBQUM7SUFDaEgsQ0FBQztJQUVELCtCQUFJLEdBQUo7UUFDSSxJQUFJLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN0RSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixDQUFDO1FBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRU8sb0NBQVMsR0FBakIsVUFBbUIsSUFBSSxFQUFFLE9BQU87UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNsQyxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVPLGtDQUFPLEdBQWYsVUFBaUIsS0FBSztRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDO0FBakxZLGdCQUFnQjtJQUo1QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsNkJBQWEsZ0VBQTBCO0tBQzFDLENBQUM7cUNBd0JrQyxnQ0FBa0I7UUFFdEIsZ0NBQWM7UUFDbEIsd0JBQVU7UUFDUiwwQkFBWTtRQUNmLGtCQUFTO1FBQ0osdUJBQWM7UUFDbkIsdUJBQVM7UUFDWixlQUFNO1FBQ0EsNEJBQVk7UUFDWiwwQkFBWTtRQUNWLDRCQUFjO1FBQ1osd0NBQWdCO0dBbkNyQyxnQkFBZ0IsQ0FpTDVCO0FBakxZLDRDQUFnQiIsImZpbGUiOiIwLjg2ZjQ3Y2Y4MWU4MjhiMjczODc1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IEV2ZW50TWFuYWdlciwgUGFyc2VMaW5rcywgUGFnaW5hdGlvblV0aWwsIEpoaUxhbmd1YWdlU2VydmljZSwgQWxlcnRTZXJ2aWNlLCBEYXRhVXRpbHMgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IEFydGljbGUgfSBmcm9tICcuL2FydGljbGUubW9kZWwnO1xuaW1wb3J0IHsgQXJ0aWNsZVNlcnZpY2UgfSBmcm9tICcuL2FydGljbGUuc2VydmljZSc7XG5cbmltcG9ydCB7IExpa2VzU2VydmljZSB9IGZyb20gJy4uL2xpa2VzL2xpa2VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGlrZXMgfSBmcm9tICcuLi9saWtlcy9saWtlcy5tb2RlbCc7XG5cblxuXG5pbXBvcnQgeyBJVEVNU19QRVJfUEFHRSwgUHJpbmNpcGFsLEFjY291bnQgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uL2Jsb2Nrcy9jb25maWcvdWliLXBhZ2luYXRpb24uY29uZmlnJztcbmltcG9ydCB7TmdiQWN0aXZlTW9kYWx9IGZyb20gXCJAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1hcnRpY2xlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXJ0aWNsZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQXJ0aWNsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuY3VycmVudEFjY291bnQ6IGFueTtcbiAgICBhcnRpY2xlczogQXJ0aWNsZVtdO1xuICAgIGxpa2VzcyA6IExpa2VzW107XG4gICAgbGlrZXM6IExpa2VzO1xuICAgIGlzUHVzaGVkID0gMTtcbiAgICBhY2NvdW50OiBBY2NvdW50O1xuICAgIGVycm9yOiBhbnk7XG4gICAgc3VjY2VzczogYW55O1xuICAgIGV2ZW50U3Vic2NyaWJlcjogU3Vic2NyaXB0aW9uO1xuICAgIHJvdXRlRGF0YTogYW55O1xuICAgIGxpbmtzOiBhbnk7XG4gICAgdG90YWxJdGVtczogYW55O1xuICAgIHF1ZXJ5Q291bnQ6IGFueTtcbiAgICBpdGVtc1BlclBhZ2U6IGFueTtcbiAgICBwYWdlOiBhbnk7XG4gICAgcHJlZGljYXRlOiBhbnk7XG4gICAgcHJldmlvdXNQYWdlOiBhbnk7XG4gICAgcmV2ZXJzZTogYW55O1xuICAgIGlzU2F2aW5nOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgamhpTGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG5cbiAgICAgICAgcHJpdmF0ZSBhcnRpY2xlU2VydmljZTogQXJ0aWNsZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcGFyc2VMaW5rczogUGFyc2VMaW5rcyxcbiAgICAgICAgcHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBwcmluY2lwYWw6IFByaW5jaXBhbCxcbiAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgZGF0YVV0aWxzOiBEYXRhVXRpbHMsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgbGlrZXNTZXJ2aWNlOiBMaWtlc1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXIsXG4gICAgICAgIHByaXZhdGUgcGFnaW5hdGlvblV0aWw6IFBhZ2luYXRpb25VdGlsLFxuICAgICAgICBwcml2YXRlIHBhZ2luYXRpb25Db25maWc6IFBhZ2luYXRpb25Db25maWdcbiAgICApIHtcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBJVEVNU19QRVJfUEFHRTtcbiAgICAgICAgdGhpcy5yb3V0ZURhdGEgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGEuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYWdlID0gZGF0YVsncGFnaW5nUGFyYW1zJ10ucGFnZTtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNQYWdlID0gZGF0YVsncGFnaW5nUGFyYW1zJ10ucGFnZTtcbiAgICAgICAgICAgIHRoaXMucmV2ZXJzZSA9IGRhdGFbJ3BhZ2luZ1BhcmFtcyddLmFzY2VuZGluZztcbiAgICAgICAgICAgIHRoaXMucHJlZGljYXRlID0gZGF0YVsncGFnaW5nUGFyYW1zJ10ucHJlZGljYXRlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5qaGlMYW5ndWFnZVNlcnZpY2Uuc2V0TG9jYXRpb25zKFsnYXJ0aWNsZSddKTtcbiAgICB9XG5cbiAgICBsb2FkQWxsKCkge1xuICAgICAgICB0aGlzLmFydGljbGVTZXJ2aWNlLnF1ZXJ5KHtcbiAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnZSAtIDEsXG4gICAgICAgICAgICBzaXplOiB0aGlzLml0ZW1zUGVyUGFnZSxcbiAgICAgICAgICAgIHNvcnQ6IHRoaXMuc29ydCgpfSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJlczogUmVzcG9uc2UpID0+IHRoaXMub25TdWNjZXNzKHJlcy5qc29uKCksIHJlcy5oZWFkZXJzKSxcbiAgICAgICAgICAgIChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLm9uRXJyb3IocmVzLmpzb24oKSlcbiAgICAgICAgKTtcbiAgICB9XG4gICAgbG9hZFBhZ2UgKHBhZ2U6IG51bWJlcikge1xuICAgICAgICBpZiAocGFnZSAhPT0gdGhpcy5wcmV2aW91c1BhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNQYWdlID0gcGFnZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRyYW5zaXRpb24oKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FydGljbGUnXSwge3F1ZXJ5UGFyYW1zOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgICAgICAgICAgICBzaXplOiB0aGlzLml0ZW1zUGVyUGFnZSxcbiAgICAgICAgICAgICAgICBzb3J0OiB0aGlzLnByZWRpY2F0ZSArICcsJyArICh0aGlzLnJldmVyc2UgPyAnYXNjJyA6ICdkZXNjJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubG9hZEFsbCgpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnBhZ2UgPSAwO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcnRpY2xlJywge1xuICAgICAgICAgICAgcGFnZTogdGhpcy5wYWdlLFxuICAgICAgICAgICAgc29ydDogdGhpcy5wcmVkaWNhdGUgKyAnLCcgKyAodGhpcy5yZXZlcnNlID8gJ2FzYycgOiAnZGVzYycpXG4gICAgICAgIH1dKTtcbiAgICAgICAgdGhpcy5sb2FkQWxsKCk7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmxvYWRBbGwoKTtcbiAgICAgICAgdGhpcy5wcmluY2lwYWwuaWRlbnRpdHkoKS50aGVuKChhY2NvdW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50ID0gYWNjb3VudDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2VJbkFydGljbGVzKCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJBdXRoZW50aWNhdGlvblN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmVnaXN0ZXJBdXRoZW50aWNhdGlvblN1Y2Nlc3MoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLnN1YnNjcmliZSgnYXV0aGVudGljYXRpb25TdWNjZXNzJywgKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWNjb3VudCA9IGFjY291bnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFZvdGVyUG91cihBcnRpY2xlLGlzUHVzaGVkLGxpa2VzOkxpa2VzKSB7XG4gICAgICAgIHRoaXMuaXNQdXNoZWQgPSAwO1xuICAgICAgICAvL3RoaXMubGlrZXMuYXJ0aWNsZWlkPVwiYXplXCI7XG4gICAgICAvLyAgdGhpcy5saWtlcy51c2VyaWQ9XCJhemVyXCI7XG4gICAgICAgIEFydGljbGUudm90ZSArPSAxO1xuICAgICAgICB0aGlzLmFydGljbGVTZXJ2aWNlLm1vZGlmaWVyKEFydGljbGUpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXM6IEFydGljbGUpID0+IHRoaXMub25TYXZlU3VjY2VzcyhyZXMpLCAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vblNhdmVFcnJvcihyZXMuanNvbigpKSk7XG5cbnRoaXMubGlrZXM9IG5ldyBMaWtlcztcbiAgICAgICAvLyB0aGlzLmxpa2VzLmFydGljbGVpZD1BcnRpY2xlLmlkO1xuICAgICAgICB0aGlzLmxpa2VzLnVzZXJpZD1cImhlbGxvXCI7XG4gICAgICAgIHRoaXMubGlrZXNTZXJ2aWNlLmNyZWF0ZSh0aGlzLmxpa2VzKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzOiBMaWtlcykgPT4gdGhpcy5vblNhdmVTdWNjZXNzMihyZXMpLCAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vblNhdmVFcnJvcihyZXMuanNvbigpKSk7XG5cblxuXG5cblxuICAgIH1cbiAgICBWb3RlckNvbnRyZShBcnRpY2xlKSB7XG4gICAgICAgIEFydGljbGUudm90ZSAtPSAxO1xuICAgICAgICB0aGlzLmFydGljbGVTZXJ2aWNlLm1vZGlmaWVyKEFydGljbGUpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXM6IEFydGljbGUpID0+IHRoaXMub25TYXZlU3VjY2VzcyhyZXMpLCAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vblNhdmVFcnJvcihyZXMuanNvbigpKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNhdmVTdWNjZXNzMiAocmVzdWx0OiBMaWtlcykge1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3QoeyBuYW1lOiAnYXJ0aWNsZUxpc3RNb2RpZmljYXRpb24nLCBjb250ZW50OiAnT0snfSk7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcblxuICAgIH1cbiAgICBwcml2YXRlIG9uU2F2ZVN1Y2Nlc3MgKHJlc3VsdDogQXJ0aWNsZSkge1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3QoeyBuYW1lOiAnYXJ0aWNsZUxpc3RNb2RpZmljYXRpb24nLCBjb250ZW50OiAnT0snfSk7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25TYXZlRXJyb3IgKGVycm9yKSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkVycm9yKGVycm9yKTtcbiAgICB9XG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLmRlc3Ryb3kodGhpcy5ldmVudFN1YnNjcmliZXIpO1xuICAgIH1cblxuICAgIHRyYWNrSWQgKGluZGV4OiBudW1iZXIsIGl0ZW06IEFydGljbGUpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uaWQ7XG4gICAgfVxuXG5cblxuXG4gICAgYnl0ZVNpemUoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVV0aWxzLmJ5dGVTaXplKGZpZWxkKTtcbiAgICB9XG5cbiAgICBvcGVuRmlsZShjb250ZW50VHlwZSwgZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVV0aWxzLm9wZW5GaWxlKGNvbnRlbnRUeXBlLCBmaWVsZCk7XG4gICAgfVxuICAgIHJlZ2lzdGVyQ2hhbmdlSW5BcnRpY2xlcygpIHtcbiAgICAgICAgdGhpcy5ldmVudFN1YnNjcmliZXIgPSB0aGlzLmV2ZW50TWFuYWdlci5zdWJzY3JpYmUoJ2FydGljbGVMaXN0TW9kaWZpY2F0aW9uJywgKHJlc3BvbnNlKSA9PiB0aGlzLmxvYWRBbGwoKSk7XG4gICAgfVxuXG4gICAgc29ydCAoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbdGhpcy5wcmVkaWNhdGUgKyAnLCcgKyAodGhpcy5yZXZlcnNlID8gJ2FzYycgOiAnZGVzYycpXTtcbiAgICAgICAgaWYgKHRoaXMucHJlZGljYXRlICE9PSAnaWQnKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCgnaWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TdWNjZXNzIChkYXRhLCBoZWFkZXJzKSB7XG4gICAgICAgIHRoaXMubGlua3MgPSB0aGlzLnBhcnNlTGlua3MucGFyc2UoaGVhZGVycy5nZXQoJ2xpbmsnKSk7XG4gICAgICAgIHRoaXMudG90YWxJdGVtcyA9IGhlYWRlcnMuZ2V0KCdYLVRvdGFsLUNvdW50Jyk7XG4gICAgICAgIHRoaXMucXVlcnlDb3VudCA9IHRoaXMudG90YWxJdGVtcztcbiAgICAgICAgLy8gdGhpcy5wYWdlID0gcGFnaW5nUGFyYW1zLnBhZ2U7XG4gICAgICAgIHRoaXMuYXJ0aWNsZXMgPSBkYXRhO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25FcnJvciAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UuZXJyb3IoZXJyb3IubWVzc2FnZSwgbnVsbCwgbnVsbCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==
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
                    document.getElementById("p" + index).setAttribute("disabled", "disabled");
                    document.getElementById("p" + index).style.opacity = "0.3";
                }
            });
        });
    };
    ArticleComponent.prototype.enableLike = function () {
        var _this = this;
        this.likess.forEach(function (item, index) {
            _this.dislikeService.findByidandname(item.id, _this.likes.userid)
                .subscribe(function (dislike) {
                if (dislike.utilisateur == _this.likes.userid) {
                    _this.likesService.delete(_this.likes.id);
                }
            });
        });
    };
    ArticleComponent.prototype.load = function () {
        var _this = this;
        this.likesService.query().subscribe(function (res) {
            _this.likess = res.json();
        }, function (res) { return _this.onError(res.json()); });
    };
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAll();
        this.load();
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
    ArticleComponent.prototype.VoterContre = function (Article, dislike) {
        var _this = this;
        Article.vote -= 1;
        this.articleService.modifier(Article)
            .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        this.dislike = new dislike_model_1.Dislike;
        this.dislike.article = Article.id;
        this.dislike.c = 1;
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
        this.loadAlldislikes();
        this.loadAlllikes();
        this.enableLike();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQudHM/ODY3ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0NBQTZEO0FBRTdELHNDQUF5RDtBQUV6RCwyQ0FBb0g7QUFHcEgseUdBQW1EO0FBRW5ELG1HQUFzRDtBQUN0RCwrRkFBNkM7QUFFN0MseUdBQTREO0FBQzVELHFHQUFtRDtBQUluRCw0RUFBaUU7QUFDakUsa0hBQTZFO0FBTzdFLElBQWEsZ0JBQWdCO0lBeUJ6QiwwQkFDWSxrQkFBc0MsRUFFdEMsY0FBOEIsRUFDOUIsVUFBc0IsRUFDdEIsWUFBMEIsRUFDMUIsU0FBb0IsRUFDcEIsY0FBOEIsRUFDOUIsU0FBb0IsRUFDcEIsTUFBYyxFQUNkLFlBQTBCLEVBQzFCLGNBQThCLEVBQzlCLFlBQTBCLEVBQzFCLGNBQThCLEVBQzlCLGdCQUFrQztRQWQ5QyxpQkF3QkM7UUF2QlcsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUV0QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFoQzlDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFrQ2IsSUFBSSxDQUFDLFlBQVksR0FBRyx1QkFBYyxDQUFDO1FBQ25DLElBQUks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RU8sa0NBQU8sR0FBZixVQUFpQixLQUFLO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDTCx1QkFBQztBQUFELENBQUM7QUFyUlksZ0JBQWdCO0lBSjVCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2Qiw2QkFBYSxnRUFBMEI7S0FDMUMsQ0FBQztxQ0EyQmtDLGdDQUFrQjtRQUV0QixnQ0FBYztRQUNsQix3QkFBVTtRQUNSLDBCQUFZO1FBQ2Ysa0JBQVM7UUFDSix1QkFBYztRQUNuQix1QkFBUztRQUNaLGVBQU07UUFDQSw0QkFBWTtRQUNWLGdDQUFjO1FBQ2hCLDBCQUFZO1FBQ1YsNEJBQWM7UUFDWix3Q0FBZ0I7R0F2Q3JDLGdCQUFnQixDQXFSNUI7QUFyUlksNENBQWdCIiwiZmlsZSI6IjAuMTU2ZjVkYjE0YmMxYzhiYzhlNzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgRXZlbnRNYW5hZ2VyLCBQYXJzZUxpbmtzLCBQYWdpbmF0aW9uVXRpbCwgSmhpTGFuZ3VhZ2VTZXJ2aWNlLCBBbGVydFNlcnZpY2UsIERhdGFVdGlscyB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgQXJ0aWNsZSB9IGZyb20gJy4vYXJ0aWNsZS5tb2RlbCc7XG5pbXBvcnQgeyBBcnRpY2xlU2VydmljZSB9IGZyb20gJy4vYXJ0aWNsZS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTGlrZXNTZXJ2aWNlIH0gZnJvbSAnLi4vbGlrZXMvbGlrZXMuc2VydmljZSc7XG5pbXBvcnQgeyBMaWtlcyB9IGZyb20gJy4uL2xpa2VzL2xpa2VzLm1vZGVsJztcblxuaW1wb3J0IHsgRGlzbGlrZVNlcnZpY2UgfSBmcm9tICcuLi9kaXNsaWtlL2Rpc2xpa2Uuc2VydmljZSc7XG5pbXBvcnQgeyBEaXNsaWtlIH0gZnJvbSAnLi4vZGlzbGlrZS9kaXNsaWtlLm1vZGVsJztcblxuXG5cbmltcG9ydCB7IElURU1TX1BFUl9QQUdFLCBQcmluY2lwYWwsQWNjb3VudCB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vYmxvY2tzL2NvbmZpZy91aWItcGFnaW5hdGlvbi5jb25maWcnO1xuaW1wb3J0IHtOZ2JBY3RpdmVNb2RhbH0gZnJvbSBcIkBuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWFydGljbGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcnRpY2xlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBcnRpY2xlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5jdXJyZW50QWNjb3VudDogYW55O1xuICAgIGFydGljbGVzOiBBcnRpY2xlW107XG4gICAgbGlrZXNzIDogTGlrZXNbXTtcbiAgICBsaWtlczogTGlrZXM7XG4gICAgZGlzbGlrZTogRGlzbGlrZTtcbiAgICBpc1B1c2hlZCA9IGZhbHNlO1xuICAgIGFjY291bnQ6IEFjY291bnQ7XG4gICAgZXJyb3I6IGFueTtcbiAgICBzdWNjZXNzOiBhbnk7XG4gICAgZXZlbnRTdWJzY3JpYmVyOiBTdWJzY3JpcHRpb247XG4gICAgcm91dGVEYXRhOiBhbnk7XG4gICAgbGlua3M6IGFueTtcblxuICAgIHRvdGFsSXRlbXM6IGFueTtcbiAgICBxdWVyeUNvdW50OiBhbnk7XG4gICAgaXRlbXNQZXJQYWdlOiBhbnk7XG4gICAgcGFnZTogYW55O1xuICAgIHByZWRpY2F0ZTogYW55O1xuICAgIHByZXZpb3VzUGFnZTogYW55O1xuICAgIHJldmVyc2U6IGFueTtcbiAgICBpc1NhdmluZzogYm9vbGVhbjtcblxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgamhpTGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG5cbiAgICAgICAgcHJpdmF0ZSBhcnRpY2xlU2VydmljZTogQXJ0aWNsZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcGFyc2VMaW5rczogUGFyc2VMaW5rcyxcbiAgICAgICAgcHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBwcmluY2lwYWw6IFByaW5jaXBhbCxcbiAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgZGF0YVV0aWxzOiBEYXRhVXRpbHMsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgbGlrZXNTZXJ2aWNlOiBMaWtlc1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZGlzbGlrZVNlcnZpY2U6IERpc2xpa2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyLFxuICAgICAgICBwcml2YXRlIHBhZ2luYXRpb25VdGlsOiBQYWdpbmF0aW9uVXRpbCxcbiAgICAgICAgcHJpdmF0ZSBwYWdpbmF0aW9uQ29uZmlnOiBQYWdpbmF0aW9uQ29uZmlnXG4gICAgKSB7XG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gSVRFTVNfUEVSX1BBR0U7XG4gICAgICAgIHRoaXMucm91dGVEYXRhID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5kYXRhLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMucGFnZSA9IGRhdGFbJ3BhZ2luZ1BhcmFtcyddLnBhZ2U7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzUGFnZSA9IGRhdGFbJ3BhZ2luZ1BhcmFtcyddLnBhZ2U7XG4gICAgICAgICAgICB0aGlzLnJldmVyc2UgPSBkYXRhWydwYWdpbmdQYXJhbXMnXS5hc2NlbmRpbmc7XG4gICAgICAgICAgICB0aGlzLnByZWRpY2F0ZSA9IGRhdGFbJ3BhZ2luZ1BhcmFtcyddLnByZWRpY2F0ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuamhpTGFuZ3VhZ2VTZXJ2aWNlLnNldExvY2F0aW9ucyhbJ2FydGljbGUnXSk7XG4gICAgfVxuXG4gICAgbG9hZEFsbCgpIHtcbiAgICAgICAgdGhpcy5hcnRpY2xlU2VydmljZS5xdWVyeSh7XG4gICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2UgLSAxLFxuICAgICAgICAgICAgc2l6ZTogdGhpcy5pdGVtc1BlclBhZ2UsXG4gICAgICAgICAgICBzb3J0OiB0aGlzLnNvcnQoKX0pLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLm9uU3VjY2VzcyhyZXMuanNvbigpLCByZXMuaGVhZGVycyksXG4gICAgICAgICAgICAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vbkVycm9yKHJlcy5qc29uKCkpXG4gICAgICAgICk7XG4gICAgfVxuICAgIGxvYWRQYWdlIChwYWdlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHBhZ2UgIT09IHRoaXMucHJldmlvdXNQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzUGFnZSA9IHBhZ2U7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0cmFuc2l0aW9uKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcnRpY2xlJ10sIHtxdWVyeVBhcmFtczpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2UsXG4gICAgICAgICAgICAgICAgc2l6ZTogdGhpcy5pdGVtc1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgc29ydDogdGhpcy5wcmVkaWNhdGUgKyAnLCcgKyAodGhpcy5yZXZlcnNlID8gJ2FzYycgOiAnZGVzYycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxvYWRBbGwoKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5wYWdlID0gMDtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXJ0aWNsZScsIHtcbiAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgICAgICAgIHNvcnQ6IHRoaXMucHJlZGljYXRlICsgJywnICsgKHRoaXMucmV2ZXJzZSA/ICdhc2MnIDogJ2Rlc2MnKVxuICAgICAgICB9XSk7XG4gICAgICAgIHRoaXMubG9hZEFsbCgpO1xuICAgIH1cbiAgICBsb2FkQWxsbGlrZXMoKSB7XG4gICAgICAgIHRoaXMuYXJ0aWNsZXMuZm9yRWFjaCgoaXRlbSxpbmRleCk9PntcbiAgICAgICAgICAgIHRoaXMubGlrZXNTZXJ2aWNlLmZpbmRCeWlkYW5kbmFtZShpdGVtLmlkLHRoaXMuY3VycmVudEFjY291bnQuZmlyc3ROYW1lKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIGxpa2VzPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGlrZXMudXNlcmlkPT10aGlzLmN1cnJlbnRBY2NvdW50LmZpcnN0TmFtZSApXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsXCIgKyBpbmRleCkuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIixcImRpc2FibGVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsXCIgKyBpbmRleCkuc3R5bGUub3BhY2l0eT1cIjAuM1wiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicFwiICsgaW5kZXgpLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc3R5bGUub3BhY2l0eT1cIjAuM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGwuZGlzYWJsZWQ9dHJ1ZTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgICBsb2FkQWxsZGlzbGlrZXMoKSB7XG4gICAgICAgIHRoaXMuYXJ0aWNsZXMuZm9yRWFjaCgoaXRlbSxpbmRleCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2xpa2VTZXJ2aWNlLmZpbmRCeWlkYW5kbmFtZShpdGVtLmlkLHRoaXMuY3VycmVudEFjY291bnQuZmlyc3ROYW1lKVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzbGlrZT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXNsaWtlLnV0aWxpc2F0ZXVyPT10aGlzLmN1cnJlbnRBY2NvdW50LmZpcnN0TmFtZSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicFwiICsgaW5kZXgpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsXCJkaXNhYmxlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBcIiArIGluZGV4KS5zdHlsZS5vcGFjaXR5PVwiMC4zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibFwiICsgaW5kZXgpLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3N0eWxlLm9wYWNpdHk9XCIwLjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsLmRpc2FibGVkPXRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICB9XG5cbmVuYWJsZUxpa2UoKXtcblxuXG4gICAgdGhpcy5saWtlc3MuZm9yRWFjaCgoaXRlbSxpbmRleCk9PntcbiAgICAgICAgICAgIHRoaXMuZGlzbGlrZVNlcnZpY2UuZmluZEJ5aWRhbmRuYW1lKGl0ZW0uaWQsdGhpcy5saWtlcy51c2VyaWQpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgZGlzbGlrZT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpc2xpa2UudXRpbGlzYXRldXI9PXRoaXMubGlrZXMudXNlcmlkIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlrZXNTZXJ2aWNlLmRlbGV0ZSh0aGlzLmxpa2VzLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICApO1xufVxubG9hZCgpe1xuICAgIHRoaXMubGlrZXNTZXJ2aWNlLnF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAocmVzOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5saWtlc3MgPSByZXMuanNvbigpO1xuICAgICAgICB9LFxuICAgICAgICAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vbkVycm9yKHJlcy5qc29uKCkpXG4gICAgKTtcbn1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmxvYWRBbGwoKTtcbiAgICAgICAgdGhpcy5sb2FkKCk7XG5cbiAgICAgICAgdGhpcy5wcmluY2lwYWwuaWRlbnRpdHkoKS50aGVuKChhY2NvdW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50ID0gYWNjb3VudDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2VJbkFydGljbGVzKCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJBdXRoZW50aWNhdGlvblN1Y2Nlc3MoKTtcblxuICAgIH1cbiAgICByZWdpc3RlckF1dGhlbnRpY2F0aW9uU3VjY2VzcygpIHtcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuc3Vic2NyaWJlKCdhdXRoZW50aWNhdGlvblN1Y2Nlc3MnLCAobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmluY2lwYWwuaWRlbnRpdHkoKS50aGVuKChhY2NvdW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gYWNjb3VudDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBWb3RlclBvdXIoQXJ0aWNsZSxsaWtlczpMaWtlcykge1xuICAgICAgIC8vIEFydGljbGUuaXNwdXNoZWQ9dHJ1ZTtcbiAgICAgICAgQXJ0aWNsZS52b3RlICs9IDE7XG4gICAgICAgIHRoaXMuYXJ0aWNsZVNlcnZpY2UubW9kaWZpZXIoQXJ0aWNsZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlczogQXJ0aWNsZSkgPT4gdGhpcy5vblNhdmVTdWNjZXNzKHJlcyksIChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLm9uU2F2ZUVycm9yKHJlcy5qc29uKCkpKTtcblxuICAgICAgIHRoaXMubGlrZXM9IG5ldyBMaWtlcztcbiAgICAgICB0aGlzLmxpa2VzLmFydGljbGVpZD1BcnRpY2xlLmlkO1xuICAgICAgICB0aGlzLnByaW5jaXBhbC5pZGVudGl0eSgpLnRoZW4oKGFjY291bnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjY291bnQgPSBhY2NvdW50O1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxpa2VzLnVzZXJpZD10aGlzLmN1cnJlbnRBY2NvdW50LmZpcnN0TmFtZTtcbiAgICAgICAgdGhpcy5saWtlc1NlcnZpY2UuY3JlYXRlKHRoaXMubGlrZXMpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXM6IExpa2VzKSA9PiB0aGlzLm9uU2F2ZVN1Y2Nlc3MyKHJlcyksIChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLm9uU2F2ZUVycm9yKHJlcy5qc29uKCkpKTtcblxuXG5cblxuICAgIH1cbiAgICBWb3RlckNvbnRyZShBcnRpY2xlLGRpc2xpa2U6RGlzbGlrZSkge1xuICAgICAgICBBcnRpY2xlLnZvdGUgLT0gMTtcbiAgICAgICAgdGhpcy5hcnRpY2xlU2VydmljZS5tb2RpZmllcihBcnRpY2xlKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzOiBBcnRpY2xlKSA9PiB0aGlzLm9uU2F2ZVN1Y2Nlc3MocmVzKSwgKHJlczogUmVzcG9uc2UpID0+IHRoaXMub25TYXZlRXJyb3IocmVzLmpzb24oKSkpO1xuXG4gICAgICAgIHRoaXMuZGlzbGlrZT0gbmV3IERpc2xpa2U7XG4gICAgICAgIHRoaXMuZGlzbGlrZS5hcnRpY2xlPUFydGljbGUuaWQ7XG4gICAgICAgIHRoaXMuZGlzbGlrZS5jPTE7XG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudCA9IGFjY291bnQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpc2xpa2UudXRpbGlzYXRldXI9dGhpcy5jdXJyZW50QWNjb3VudC5maXJzdE5hbWU7XG4gICAgICAgIHRoaXMuZGlzbGlrZVNlcnZpY2UuY3JlYXRlKHRoaXMuZGlzbGlrZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlczogTGlrZXMpID0+IHRoaXMub25TYXZlU3VjY2VzczMocmVzKSwgKHJlczogUmVzcG9uc2UpID0+IHRoaXMub25TYXZlRXJyb3IocmVzLmpzb24oKSkpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNhdmVTdWNjZXNzMiAocmVzdWx0OiBMaWtlcykge1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3QoeyBuYW1lOiAnYXJ0aWNsZUxpc3RNb2RpZmljYXRpb24nLCBjb250ZW50OiAnT0snfSk7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcblxuICAgIH1cbiAgICBwcml2YXRlIG9uU2F2ZVN1Y2Nlc3MzIChyZXN1bHQ6IERpc2xpa2UpIHtcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuYnJvYWRjYXN0KHsgbmFtZTogJ2FydGljbGVMaXN0TW9kaWZpY2F0aW9uJywgY29udGVudDogJ09LJ30pO1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG5cbiAgICB9XG4gICAgcHJpdmF0ZSBvblNhdmVTdWNjZXNzIChyZXN1bHQ6IEFydGljbGUpIHtcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuYnJvYWRjYXN0KHsgbmFtZTogJ2FydGljbGVMaXN0TW9kaWZpY2F0aW9uJywgY29udGVudDogJ09LJ30pO1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2F2ZUVycm9yIChlcnJvcikge1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25FcnJvcihlcnJvcik7XG4gICAgfVxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5kZXN0cm95KHRoaXMuZXZlbnRTdWJzY3JpYmVyKTtcbiAgICB9XG5cbiAgICB0cmFja0lkIChpbmRleDogbnVtYmVyLCBpdGVtOiBBcnRpY2xlKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmlkO1xuICAgIH1cblxuXG5cblxuICAgIGJ5dGVTaXplKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFVdGlscy5ieXRlU2l6ZShmaWVsZCk7XG4gICAgfVxuXG4gICAgb3BlbkZpbGUoY29udGVudFR5cGUsIGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFVdGlscy5vcGVuRmlsZShjb250ZW50VHlwZSwgZmllbGQpO1xuICAgIH1cbiAgICByZWdpc3RlckNoYW5nZUluQXJ0aWNsZXMoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRTdWJzY3JpYmVyID0gdGhpcy5ldmVudE1hbmFnZXIuc3Vic2NyaWJlKCdhcnRpY2xlTGlzdE1vZGlmaWNhdGlvbicsIChyZXNwb25zZSkgPT4gdGhpcy5sb2FkQWxsKCkpO1xuICAgIH1cblxuICAgIHNvcnQgKCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gW3RoaXMucHJlZGljYXRlICsgJywnICsgKHRoaXMucmV2ZXJzZSA/ICdhc2MnIDogJ2Rlc2MnKV07XG4gICAgICAgIGlmICh0aGlzLnByZWRpY2F0ZSAhPT0gJ2lkJykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goJ2lkJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU3VjY2VzcyAoZGF0YSwgaGVhZGVycykge1xuICAgICAgICB0aGlzLmxpbmtzID0gdGhpcy5wYXJzZUxpbmtzLnBhcnNlKGhlYWRlcnMuZ2V0KCdsaW5rJykpO1xuICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSBoZWFkZXJzLmdldCgnWC1Ub3RhbC1Db3VudCcpO1xuICAgICAgICB0aGlzLnF1ZXJ5Q291bnQgPSB0aGlzLnRvdGFsSXRlbXM7XG4gICAgICAgIC8vIHRoaXMucGFnZSA9IHBhZ2luZ1BhcmFtcy5wYWdlO1xuICAgICAgICB0aGlzLmFydGljbGVzID0gZGF0YTtcbiAgICAgICAgdGhpcy5sb2FkQWxsZGlzbGlrZXMoKTtcbiAgICAgICAgdGhpcy5sb2FkQWxsbGlrZXMoKTtcbiAgICAgICAgdGhpcy5lbmFibGVMaWtlKCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRXJyb3IgKGVycm9yKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKGVycm9yLm1lc3NhZ2UsIG51bGwsIG51bGwpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC50cyJdLCJzb3VyY2VSb290IjoiIn0=
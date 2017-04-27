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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var article_model_1 = require("./article.model");
var article_service_1 = require("./article.service");
var ArticlePopupService = (function () {
    function ArticlePopupService(modalService, articleService) {
        this.modalService = modalService;
        this.articleService = articleService;
        this.isOpen = false;
    }
    ArticlePopupService.prototype.open = function (component, id) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (id) {
            this.articleService.find(id).subscribe(function (article) {
                _this.articleModalRef(component, article);
            });
        }
        else {
            return this.articleModalRef(component, new article_model_1.Article());
        }
    };
    ArticlePopupService.prototype.articleModalRef = function (component, article) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.article = article;
        modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.isOpen = false;
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.isOpen = false;
        });
        return modalRef;
    };
    return ArticlePopupService;
}());
ArticlePopupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        article_service_1.ArticleService])
], ArticlePopupService);
exports.ArticlePopupService = ArticlePopupService;
//# sourceMappingURL=article-popup.service.js.map
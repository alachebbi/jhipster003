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
var likes_model_1 = require("./likes.model");
var likes_service_1 = require("./likes.service");
var LikesPopupService = (function () {
    function LikesPopupService(modalService, likesService) {
        this.modalService = modalService;
        this.likesService = likesService;
        this.isOpen = false;
    }
    LikesPopupService.prototype.open = function (component, id) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (id) {
            this.likesService.find(id).subscribe(function (likes) {
                _this.likesModalRef(component, likes);
            });
        }
        else {
            return this.likesModalRef(component, new likes_model_1.Likes());
        }
    };
    LikesPopupService.prototype.likesModalRef = function (component, likes) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.likes = likes;
        modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.isOpen = false;
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.isOpen = false;
        });
        return modalRef;
    };
    return LikesPopupService;
}());
LikesPopupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        likes_service_1.LikesService])
], LikesPopupService);
exports.LikesPopupService = LikesPopupService;
//# sourceMappingURL=likes-popup.service.js.map
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
var dislike_model_1 = require("./dislike.model");
var dislike_service_1 = require("./dislike.service");
var DislikePopupService = (function () {
    function DislikePopupService(modalService, dislikeService) {
        this.modalService = modalService;
        this.dislikeService = dislikeService;
        this.isOpen = false;
    }
    DislikePopupService.prototype.open = function (component, id) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (id) {
            this.dislikeService.find(id).subscribe(function (dislike) {
                _this.dislikeModalRef(component, dislike);
            });
        }
        else {
            return this.dislikeModalRef(component, new dislike_model_1.Dislike());
        }
    };
    DislikePopupService.prototype.dislikeModalRef = function (component, dislike) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.dislike = dislike;
        modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.isOpen = false;
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.isOpen = false;
        });
        return modalRef;
    };
    return DislikePopupService;
}());
DislikePopupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        dislike_service_1.DislikeService])
], DislikePopupService);
exports.DislikePopupService = DislikePopupService;
//# sourceMappingURL=dislike-popup.service.js.map
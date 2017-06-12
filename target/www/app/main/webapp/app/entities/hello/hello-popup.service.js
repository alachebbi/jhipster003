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
var hello_model_1 = require("./hello.model");
var hello_service_1 = require("./hello.service");
var HelloPopupService = (function () {
    function HelloPopupService(modalService, helloService) {
        this.modalService = modalService;
        this.helloService = helloService;
        this.isOpen = false;
    }
    HelloPopupService.prototype.open = function (component, id) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (id) {
            this.helloService.find(id).subscribe(function (hello) {
                _this.helloModalRef(component, hello);
            });
        }
        else {
            return this.helloModalRef(component, new hello_model_1.Hello());
        }
    };
    HelloPopupService.prototype.helloModalRef = function (component, hello) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.hello = hello;
        modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.isOpen = false;
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.isOpen = false;
        });
        return modalRef;
    };
    return HelloPopupService;
}());
HelloPopupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        hello_service_1.HelloService])
], HelloPopupService);
exports.HelloPopupService = HelloPopupService;
//# sourceMappingURL=hello-popup.service.js.map
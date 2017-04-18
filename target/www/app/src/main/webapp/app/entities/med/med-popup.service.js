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
var med_model_1 = require("./med.model");
var med_service_1 = require("./med.service");
var user_model_1 = require("../../shared/user/user.model");
var MedPopupService = (function () {
    function MedPopupService(modalService, medService) {
        this.modalService = modalService;
        this.medService = medService;
        this.isOpen = false;
    }
    MedPopupService.prototype.open = function (component, id) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (id) {
            this.medService.find(id).subscribe(function (med) {
                _this.medModalRef(component, med);
            });
        }
        else {
            var med = new med_model_1.Med();
            med.user = new user_model_1.User();
            return this.medModalRef(component, new med_model_1.Med());
        }
    };
    MedPopupService.prototype.medModalRef = function (component, med) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.med = med;
        modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.isOpen = false;
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.isOpen = false;
        });
        return modalRef;
    };
    return MedPopupService;
}());
MedPopupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        med_service_1.MedService])
], MedPopupService);
exports.MedPopupService = MedPopupService;
//# sourceMappingURL=med-popup.service.js.map
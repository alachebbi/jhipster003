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
var fichemedicale_model_1 = require("./fichemedicale.model");
var fichemedicale_service_1 = require("./fichemedicale.service");
var FichemedicalePopupService = (function () {
    function FichemedicalePopupService(modalService, fichemedicaleService) {
        this.modalService = modalService;
        this.fichemedicaleService = fichemedicaleService;
        this.isOpen = false;
    }
    FichemedicalePopupService.prototype.open = function (component, id) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (id) {
            this.fichemedicaleService.find(id).subscribe(function (fichemedicale) {
                if (fichemedicale.datenaissance) {
                    fichemedicale.datenaissance = {
                        year: fichemedicale.datenaissance.getFullYear(),
                        month: fichemedicale.datenaissance.getMonth() + 1,
                        day: fichemedicale.datenaissance.getDate()
                    };
                }
                _this.fichemedicaleModalRef(component, fichemedicale);
            });
        }
        else {
            return this.fichemedicaleModalRef(component, new fichemedicale_model_1.Fichemedicale());
        }
    };
    FichemedicalePopupService.prototype.fichemedicaleModalRef = function (component, fichemedicale) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.fichemedicale = fichemedicale;
        modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.isOpen = false;
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.isOpen = false;
        });
        return modalRef;
    };
    return FichemedicalePopupService;
}());
FichemedicalePopupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        fichemedicale_service_1.FichemedicaleService])
], FichemedicalePopupService);
exports.FichemedicalePopupService = FichemedicalePopupService;
//# sourceMappingURL=fichemedicale-popup.service.js.map
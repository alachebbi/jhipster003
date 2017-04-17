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
var dosier_model_1 = require("./dosier.model");
var dosier_service_1 = require("./dosier.service");
var DosierPopupService = (function () {
    function DosierPopupService(modalService, dosierService) {
        this.modalService = modalService;
        this.dosierService = dosierService;
        this.isOpen = false;
    }
    DosierPopupService.prototype.open = function (component, id) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (id) {
            this.dosierService.find(id).subscribe(function (dosier) {
                if (dosier.date) {
                    dosier.date = {
                        year: dosier.date.getFullYear(),
                        month: dosier.date.getMonth() + 1,
                        day: dosier.date.getDate()
                    };
                }
                _this.dosierModalRef(component, dosier);
            });
        }
        else {
            return this.dosierModalRef(component, new dosier_model_1.Dosier());
        }
    };
    DosierPopupService.prototype.dosierModalRef = function (component, dosier) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.dosier = dosier;
        modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.isOpen = false;
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.isOpen = false;
        });
        return modalRef;
    };
    return DosierPopupService;
}());
DosierPopupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        dosier_service_1.DosierService])
], DosierPopupService);
exports.DosierPopupService = DosierPopupService;
//# sourceMappingURL=dosier-popup.service.js.map
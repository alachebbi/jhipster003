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
var pharmacien_model_1 = require("./pharmacien.model");
var pharmacien_service_1 = require("./pharmacien.service");
var PharmacienPopupService = (function () {
    function PharmacienPopupService(modalService, pharmacienService) {
        this.modalService = modalService;
        this.pharmacienService = pharmacienService;
        this.isOpen = false;
    }
    PharmacienPopupService.prototype.open = function (component, id) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (id) {
            this.pharmacienService.find(id).subscribe(function (pharmacien) {
                if (pharmacien.datedenaissance) {
                    pharmacien.datedenaissance = {
                        year: pharmacien.datedenaissance.getFullYear(),
                        month: pharmacien.datedenaissance.getMonth() + 1,
                        day: pharmacien.datedenaissance.getDate()
                    };
                }
                _this.pharmacienModalRef(component, pharmacien);
            });
        }
        else {
            return this.pharmacienModalRef(component, new pharmacien_model_1.Pharmacien());
        }
    };
    PharmacienPopupService.prototype.pharmacienModalRef = function (component, pharmacien) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.pharmacien = pharmacien;
        modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.isOpen = false;
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.isOpen = false;
        });
        return modalRef;
    };
    return PharmacienPopupService;
}());
PharmacienPopupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        pharmacien_service_1.PharmacienService])
], PharmacienPopupService);
exports.PharmacienPopupService = PharmacienPopupService;
//# sourceMappingURL=pharmacien-popup.service.js.map
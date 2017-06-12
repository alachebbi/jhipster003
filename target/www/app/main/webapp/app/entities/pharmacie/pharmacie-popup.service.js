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
var pharmacie_model_1 = require("./pharmacie.model");
var pharmacie_service_1 = require("./pharmacie.service");
var PharmaciePopupService = (function () {
    function PharmaciePopupService(modalService, pharmacieService) {
        this.modalService = modalService;
        this.pharmacieService = pharmacieService;
        this.isOpen = false;
    }
    PharmaciePopupService.prototype.open = function (component, id) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (id) {
            this.pharmacieService.find(id).subscribe(function (pharmacie) {
                if (pharmacie.datedenaissance) {
                    pharmacie.datedenaissance = {
                        year: pharmacie.datedenaissance.getFullYear(),
                        month: pharmacie.datedenaissance.getMonth() + 1,
                        day: pharmacie.datedenaissance.getDate()
                    };
                }
                _this.pharmacieModalRef(component, pharmacie);
            });
        }
        else {
            return this.pharmacieModalRef(component, new pharmacie_model_1.Pharmacie());
        }
    };
    PharmaciePopupService.prototype.pharmacieModalRef = function (component, pharmacie) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.pharmacie = pharmacie;
        modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.isOpen = false;
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.isOpen = false;
        });
        return modalRef;
    };
    return PharmaciePopupService;
}());
PharmaciePopupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        pharmacie_service_1.PharmacieService])
], PharmaciePopupService);
exports.PharmaciePopupService = PharmaciePopupService;
//# sourceMappingURL=pharmacie-popup.service.js.map
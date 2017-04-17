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
var medecin_model_1 = require("./medecin.model");
var medecin_service_1 = require("./medecin.service");
var MedecinPopupService = (function () {
    function MedecinPopupService(modalService, medecinService) {
        this.modalService = modalService;
        this.medecinService = medecinService;
        this.isOpen = false;
    }
    MedecinPopupService.prototype.open = function (component, id) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (id) {
            this.medecinService.find(id).subscribe(function (medecin) {
                if (medecin.datenaissance) {
                    medecin.datenaissance = {
                        year: medecin.datenaissance.getFullYear(),
                        month: medecin.datenaissance.getMonth() + 1,
                        day: medecin.datenaissance.getDate()
                    };
                }
                _this.medecinModalRef(component, medecin);
            });
        }
        else {
            return this.medecinModalRef(component, new medecin_model_1.Medecin());
        }
    };
    MedecinPopupService.prototype.medecinModalRef = function (component, medecin) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.medecin = medecin;
        modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.isOpen = false;
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.isOpen = false;
        });
        return modalRef;
    };
    return MedecinPopupService;
}());
MedecinPopupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        medecin_service_1.MedecinService])
], MedecinPopupService);
exports.MedecinPopupService = MedecinPopupService;
//# sourceMappingURL=medecin-popup.service.js.map
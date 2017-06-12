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
var demande_model_1 = require("./demande.model");
var demande_service_1 = require("./demande.service");
var DemandePopupService = (function () {
    function DemandePopupService(modalService, demandeService) {
        this.modalService = modalService;
        this.demandeService = demandeService;
        this.isOpen = false;
    }
    DemandePopupService.prototype.open = function (component, id) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (id) {
            this.demandeService.find(id).subscribe(function (demande) {
                if (demande.date) {
                    demande.date = {
                        year: demande.date.getFullYear(),
                        month: demande.date.getMonth() + 1,
                        day: demande.date.getDate()
                    };
                }
                _this.demandeModalRef(component, demande);
            });
        }
        else {
            return this.demandeModalRef(component, new demande_model_1.Demande());
        }
    };
    DemandePopupService.prototype.demandeModalRef = function (component, demande) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.demande = demande;
        modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.isOpen = false;
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.isOpen = false;
        });
        return modalRef;
    };
    return DemandePopupService;
}());
DemandePopupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        demande_service_1.DemandeService])
], DemandePopupService);
exports.DemandePopupService = DemandePopupService;
//# sourceMappingURL=demande-popup.service.js.map
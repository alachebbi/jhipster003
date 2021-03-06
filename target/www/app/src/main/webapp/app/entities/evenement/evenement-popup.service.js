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
var evenement_model_1 = require("./evenement.model");
var evenement_service_1 = require("./evenement.service");
var EvenementPopupService = (function () {
    function EvenementPopupService(modalService, evenementService) {
        this.modalService = modalService;
        this.evenementService = evenementService;
        this.isOpen = false;
    }
    EvenementPopupService.prototype.open = function (component, id) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (id) {
            this.evenementService.find(id).subscribe(function (evenement) {
                if (evenement.date) {
                    evenement.date = {
                        year: evenement.date.getFullYear(),
                        month: evenement.date.getMonth() + 1,
                        day: evenement.date.getDate()
                    };
                }
                _this.evenementModalRef(component, evenement);
            });
        }
        else {
            return this.evenementModalRef(component, new evenement_model_1.Evenement());
        }
    };
    EvenementPopupService.prototype.evenementModalRef = function (component, evenement) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.evenement = evenement;
        modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.isOpen = false;
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.isOpen = false;
        });
        return modalRef;
    };
    return EvenementPopupService;
}());
EvenementPopupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        evenement_service_1.EvenementService])
], EvenementPopupService);
exports.EvenementPopupService = EvenementPopupService;
//# sourceMappingURL=evenement-popup.service.js.map
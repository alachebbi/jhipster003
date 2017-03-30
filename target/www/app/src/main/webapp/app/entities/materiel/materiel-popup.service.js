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
var materiel_model_1 = require("./materiel.model");
var materiel_service_1 = require("./materiel.service");
var MaterielPopupService = (function () {
    function MaterielPopupService(modalService, materielService) {
        this.modalService = modalService;
        this.materielService = materielService;
        this.isOpen = false;
    }
    MaterielPopupService.prototype.open = function (component, id) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (id) {
            this.materielService.find(id).subscribe(function (materiel) {
                if (materiel.dateproduction) {
                    materiel.dateproduction = {
                        year: materiel.dateproduction.getFullYear(),
                        month: materiel.dateproduction.getMonth() + 1,
                        day: materiel.dateproduction.getDate()
                    };
                }
                if (materiel.datevalidite) {
                    materiel.datevalidite = {
                        year: materiel.datevalidite.getFullYear(),
                        month: materiel.datevalidite.getMonth() + 1,
                        day: materiel.datevalidite.getDate()
                    };
                }
                _this.materielModalRef(component, materiel);
            });
        }
        else {
            return this.materielModalRef(component, new materiel_model_1.Materiel());
        }
    };
    MaterielPopupService.prototype.materielModalRef = function (component, materiel) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.materiel = materiel;
        modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.isOpen = false;
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.isOpen = false;
        });
        return modalRef;
    };
    return MaterielPopupService;
}());
MaterielPopupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        materiel_service_1.MaterielService])
], MaterielPopupService);
exports.MaterielPopupService = MaterielPopupService;
//# sourceMappingURL=materiel-popup.service.js.map
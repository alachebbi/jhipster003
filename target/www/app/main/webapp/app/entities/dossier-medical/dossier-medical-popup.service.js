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
var dossier_medical_model_1 = require("./dossier-medical.model");
var dossier_medical_service_1 = require("./dossier-medical.service");
var DossierMedicalPopupService = (function () {
    function DossierMedicalPopupService(modalService, dossierMedicalService) {
        this.modalService = modalService;
        this.dossierMedicalService = dossierMedicalService;
        this.isOpen = false;
    }
    DossierMedicalPopupService.prototype.open = function (component, id) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (id) {
            this.dossierMedicalService.find(id).subscribe(function (dossierMedical) {
                if (dossierMedical.datedenaissance) {
                    dossierMedical.datedenaissance = {
                        year: dossierMedical.datedenaissance.getFullYear(),
                        month: dossierMedical.datedenaissance.getMonth() + 1,
                        day: dossierMedical.datedenaissance.getDate()
                    };
                }
                _this.dossierMedicalModalRef(component, dossierMedical);
            });
        }
        else {
            return this.dossierMedicalModalRef(component, new dossier_medical_model_1.DossierMedical());
        }
    };
    DossierMedicalPopupService.prototype.dossierMedicalModalRef = function (component, dossierMedical) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.dossierMedical = dossierMedical;
        modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.isOpen = false;
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.isOpen = false;
        });
        return modalRef;
    };
    return DossierMedicalPopupService;
}());
DossierMedicalPopupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        dossier_medical_service_1.DossierMedicalService])
], DossierMedicalPopupService);
exports.DossierMedicalPopupService = DossierMedicalPopupService;
//# sourceMappingURL=dossier-medical-popup.service.js.map
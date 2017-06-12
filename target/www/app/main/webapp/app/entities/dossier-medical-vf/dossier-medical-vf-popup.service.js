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
var dossier_medical_vf_model_1 = require("./dossier-medical-vf.model");
var dossier_medical_vf_service_1 = require("./dossier-medical-vf.service");
var DossierMedicalVFPopupService = (function () {
    function DossierMedicalVFPopupService(modalService, dossierMedicalVFService) {
        this.modalService = modalService;
        this.dossierMedicalVFService = dossierMedicalVFService;
        this.isOpen = false;
    }
    DossierMedicalVFPopupService.prototype.open = function (component, id) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (id) {
            this.dossierMedicalVFService.find(id).subscribe(function (dossierMedicalVF) {
                if (dossierMedicalVF.datenaissance) {
                    dossierMedicalVF.datenaissance = {
                        year: dossierMedicalVF.datenaissance.getFullYear(),
                        month: dossierMedicalVF.datenaissance.getMonth() + 1,
                        day: dossierMedicalVF.datenaissance.getDate()
                    };
                }
                _this.dossierMedicalVFModalRef(component, dossierMedicalVF);
            });
        }
        else {
            return this.dossierMedicalVFModalRef(component, new dossier_medical_vf_model_1.DossierMedicalVF());
        }
    };
    DossierMedicalVFPopupService.prototype.dossierMedicalVFModalRef = function (component, dossierMedicalVF) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.dossierMedicalVF = dossierMedicalVF;
        modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.isOpen = false;
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.isOpen = false;
        });
        return modalRef;
    };
    return DossierMedicalVFPopupService;
}());
DossierMedicalVFPopupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        dossier_medical_vf_service_1.DossierMedicalVFService])
], DossierMedicalVFPopupService);
exports.DossierMedicalVFPopupService = DossierMedicalVFPopupService;
//# sourceMappingURL=dossier-medical-vf-popup.service.js.map
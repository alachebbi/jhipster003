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
var patient_model_1 = require("./patient.model");
var patient_service_1 = require("./patient.service");
var PatientPopupService = (function () {
    function PatientPopupService(modalService, patientService) {
        this.modalService = modalService;
        this.patientService = patientService;
        this.isOpen = false;
    }
    PatientPopupService.prototype.open = function (component, id) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (id) {
            this.patientService.find(id).subscribe(function (patient) {
                if (patient.datedenaissance) {
                    patient.datedenaissance = {
                        year: patient.datedenaissance.getFullYear(),
                        month: patient.datedenaissance.getMonth() + 1,
                        day: patient.datedenaissance.getDate()
                    };
                }
                _this.patientModalRef(component, patient);
            });
        }
        else {
            return this.patientModalRef(component, new patient_model_1.Patient());
        }
    };
    PatientPopupService.prototype.patientModalRef = function (component, patient) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.patient = patient;
        modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.isOpen = false;
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.isOpen = false;
        });
        return modalRef;
    };
    return PatientPopupService;
}());
PatientPopupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        patient_service_1.PatientService])
], PatientPopupService);
exports.PatientPopupService = PatientPopupService;
//# sourceMappingURL=patient-popup.service.js.map
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
var doctor_model_1 = require("./doctor.model");
var doctor_service_1 = require("./doctor.service");
var DoctorPopupService = (function () {
    function DoctorPopupService(modalService, doctorService) {
        this.modalService = modalService;
        this.doctorService = doctorService;
        this.isOpen = false;
    }
    DoctorPopupService.prototype.open = function (component, id) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (id) {
            this.doctorService.find(id).subscribe(function (doctor) {
                if (doctor.datenaissance) {
                    doctor.datenaissance = {
                        year: doctor.datenaissance.getFullYear(),
                        month: doctor.datenaissance.getMonth() + 1,
                        day: doctor.datenaissance.getDate()
                    };
                }
                if (doctor.daten) {
                    doctor.daten = {
                        year: doctor.daten.getFullYear(),
                        month: doctor.daten.getMonth() + 1,
                        day: doctor.daten.getDate()
                    };
                }
                _this.doctorModalRef(component, doctor);
            });
        }
        else {
            return this.doctorModalRef(component, new doctor_model_1.Doctor());
        }
    };
    DoctorPopupService.prototype.doctorModalRef = function (component, doctor) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.doctor = doctor;
        modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.isOpen = false;
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.isOpen = false;
        });
        return modalRef;
    };
    return DoctorPopupService;
}());
DoctorPopupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        doctor_service_1.DoctorService])
], DoctorPopupService);
exports.DoctorPopupService = DoctorPopupService;
//# sourceMappingURL=doctor-popup.service.js.map
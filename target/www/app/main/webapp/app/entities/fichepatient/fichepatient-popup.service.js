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
var fichepatient_model_1 = require("./fichepatient.model");
var fichepatient_service_1 = require("./fichepatient.service");
var FichepatientPopupService = (function () {
    function FichepatientPopupService(modalService, fichepatientService) {
        this.modalService = modalService;
        this.fichepatientService = fichepatientService;
        this.isOpen = false;
    }
    FichepatientPopupService.prototype.open = function (component, id) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (id) {
            this.fichepatientService.find(id).subscribe(function (fichepatient) {
                if (fichepatient.datedenaissance) {
                    fichepatient.datedenaissance = {
                        year: fichepatient.datedenaissance.getFullYear(),
                        month: fichepatient.datedenaissance.getMonth() + 1,
                        day: fichepatient.datedenaissance.getDate()
                    };
                }
                _this.fichepatientModalRef(component, fichepatient);
            });
        }
        else {
            return this.fichepatientModalRef(component, new fichepatient_model_1.Fichepatient());
        }
    };
    FichepatientPopupService.prototype.fichepatientModalRef = function (component, fichepatient) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.fichepatient = fichepatient;
        modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.isOpen = false;
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.isOpen = false;
        });
        return modalRef;
    };
    return FichepatientPopupService;
}());
FichepatientPopupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        fichepatient_service_1.FichepatientService])
], FichepatientPopupService);
exports.FichepatientPopupService = FichepatientPopupService;
//# sourceMappingURL=fichepatient-popup.service.js.map
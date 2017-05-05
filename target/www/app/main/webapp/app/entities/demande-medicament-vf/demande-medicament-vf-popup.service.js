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
var common_1 = require("@angular/common");
var demande_medicament_vf_model_1 = require("./demande-medicament-vf.model");
var demande_medicament_vf_service_1 = require("./demande-medicament-vf.service");
var DemandeMedicamentVfPopupService = (function () {
    function DemandeMedicamentVfPopupService(datePipe, modalService, demandeMedicamentVfService) {
        this.datePipe = datePipe;
        this.modalService = modalService;
        this.demandeMedicamentVfService = demandeMedicamentVfService;
        this.isOpen = false;
    }
    DemandeMedicamentVfPopupService.prototype.open = function (component, id) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (id) {
            this.demandeMedicamentVfService.find(id).subscribe(function (demandeMedicamentVf) {
                demandeMedicamentVf.date = _this.datePipe.transform(demandeMedicamentVf.date, 'yyyy-MM-ddThh:mm');
                _this.demandeMedicamentVfModalRef(component, demandeMedicamentVf);
            });
        }
        else {
            return this.demandeMedicamentVfModalRef(component, new demande_medicament_vf_model_1.DemandeMedicamentVf());
        }
    };
    DemandeMedicamentVfPopupService.prototype.demandeMedicamentVfModalRef = function (component, demandeMedicamentVf) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.demandeMedicamentVf = demandeMedicamentVf;
        modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.isOpen = false;
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.isOpen = false;
        });
        return modalRef;
    };
    return DemandeMedicamentVfPopupService;
}());
DemandeMedicamentVfPopupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [common_1.DatePipe,
        ng_bootstrap_1.NgbModal,
        demande_medicament_vf_service_1.DemandeMedicamentVfService])
], DemandeMedicamentVfPopupService);
exports.DemandeMedicamentVfPopupService = DemandeMedicamentVfPopupService;
//# sourceMappingURL=demande-medicament-vf-popup.service.js.map
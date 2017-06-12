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
var demandemateriel_model_1 = require("./demandemateriel.model");
var demandemateriel_service_1 = require("./demandemateriel.service");
var DemandematerielPopupService = (function () {
    function DemandematerielPopupService(datePipe, modalService, demandematerielService) {
        this.datePipe = datePipe;
        this.modalService = modalService;
        this.demandematerielService = demandematerielService;
        this.isOpen = false;
    }
    DemandematerielPopupService.prototype.open = function (component, id) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (id) {
            this.demandematerielService.find(id).subscribe(function (demandemateriel) {
                if (demandemateriel.date) {
                    demandemateriel.date = {
                        year: demandemateriel.date.getFullYear(),
                        month: demandemateriel.date.getMonth() + 1,
                        day: demandemateriel.date.getDate()
                    };
                }
                demandemateriel.time = _this.datePipe.transform(demandemateriel.time, 'yyyy-MM-ddThh:mm');
                _this.demandematerielModalRef(component, demandemateriel);
            });
        }
        else {
            return this.demandematerielModalRef(component, new demandemateriel_model_1.Demandemateriel());
        }
    };
    DemandematerielPopupService.prototype.demandematerielModalRef = function (component, demandemateriel) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.demandemateriel = demandemateriel;
        modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.isOpen = false;
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.isOpen = false;
        });
        return modalRef;
    };
    return DemandematerielPopupService;
}());
DemandematerielPopupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [common_1.DatePipe,
        ng_bootstrap_1.NgbModal,
        demandemateriel_service_1.DemandematerielService])
], DemandematerielPopupService);
exports.DemandematerielPopupService = DemandematerielPopupService;
//# sourceMappingURL=demandemateriel-popup.service.js.map
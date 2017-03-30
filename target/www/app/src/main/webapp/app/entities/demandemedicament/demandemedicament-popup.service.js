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
var demandemedicament_model_1 = require("./demandemedicament.model");
var demandemedicament_service_1 = require("./demandemedicament.service");
var DemandemedicamentPopupService = (function () {
    function DemandemedicamentPopupService(datePipe, modalService, demandemedicamentService) {
        this.datePipe = datePipe;
        this.modalService = modalService;
        this.demandemedicamentService = demandemedicamentService;
        this.isOpen = false;
    }
    DemandemedicamentPopupService.prototype.open = function (component, id) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (id) {
            this.demandemedicamentService.find(id).subscribe(function (demandemedicament) {
                if (demandemedicament.date) {
                    demandemedicament.date = {
                        year: demandemedicament.date.getFullYear(),
                        month: demandemedicament.date.getMonth() + 1,
                        day: demandemedicament.date.getDate()
                    };
                }
                demandemedicament.time = _this.datePipe.transform(demandemedicament.time, 'yyyy-MM-ddThh:mm');
                _this.demandemedicamentModalRef(component, demandemedicament);
            });
        }
        else {
            return this.demandemedicamentModalRef(component, new demandemedicament_model_1.Demandemedicament());
        }
    };
    DemandemedicamentPopupService.prototype.demandemedicamentModalRef = function (component, demandemedicament) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.demandemedicament = demandemedicament;
        modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.isOpen = false;
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.isOpen = false;
        });
        return modalRef;
    };
    return DemandemedicamentPopupService;
}());
DemandemedicamentPopupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [common_1.DatePipe,
        ng_bootstrap_1.NgbModal,
        demandemedicament_service_1.DemandemedicamentService])
], DemandemedicamentPopupService);
exports.DemandemedicamentPopupService = DemandemedicamentPopupService;
//# sourceMappingURL=demandemedicament-popup.service.js.map
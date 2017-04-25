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
var demandemedicamentvff_model_1 = require("./demandemedicamentvff.model");
var demandemedicamentvff_service_1 = require("./demandemedicamentvff.service");
var DemandemedicamentvffPopupService = (function () {
    function DemandemedicamentvffPopupService(modalService, demandemedicamentvffService) {
        this.modalService = modalService;
        this.demandemedicamentvffService = demandemedicamentvffService;
        this.isOpen = false;
    }
    DemandemedicamentvffPopupService.prototype.open = function (component, id) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (id) {
            this.demandemedicamentvffService.find(id).subscribe(function (demandemedicamentvff) {
                if (demandemedicamentvff.date) {
                    demandemedicamentvff.date = {
                        year: demandemedicamentvff.date.getFullYear(),
                        month: demandemedicamentvff.date.getMonth() + 1,
                        day: demandemedicamentvff.date.getDate()
                    };
                }
                _this.demandemedicamentvffModalRef(component, demandemedicamentvff);
            });
        }
        else {
            return this.demandemedicamentvffModalRef(component, new demandemedicamentvff_model_1.Demandemedicamentvff());
        }
    };
    DemandemedicamentvffPopupService.prototype.demandemedicamentvffModalRef = function (component, demandemedicamentvff) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.demandemedicamentvff = demandemedicamentvff;
        modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.isOpen = false;
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.isOpen = false;
        });
        return modalRef;
    };
    return DemandemedicamentvffPopupService;
}());
DemandemedicamentvffPopupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        demandemedicamentvff_service_1.DemandemedicamentvffService])
], DemandemedicamentvffPopupService);
exports.DemandemedicamentvffPopupService = DemandemedicamentvffPopupService;
//# sourceMappingURL=demandemedicamentvff-popup.service.js.map
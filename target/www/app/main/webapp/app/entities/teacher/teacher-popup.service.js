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
var teacher_model_1 = require("./teacher.model");
var teacher_service_1 = require("./teacher.service");
var TeacherPopupService = (function () {
    function TeacherPopupService(modalService, teacherService) {
        this.modalService = modalService;
        this.teacherService = teacherService;
        this.isOpen = false;
    }
    TeacherPopupService.prototype.open = function (component, id) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (id) {
            this.teacherService.find(id).subscribe(function (teacher) {
                _this.teacherModalRef(component, teacher);
            });
        }
        else {
            return this.teacherModalRef(component, new teacher_model_1.Teacher());
        }
    };
    TeacherPopupService.prototype.teacherModalRef = function (component, teacher) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.teacher = teacher;
        modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.isOpen = false;
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.isOpen = false;
        });
        return modalRef;
    };
    return TeacherPopupService;
}());
TeacherPopupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        teacher_service_1.TeacherService])
], TeacherPopupService);
exports.TeacherPopupService = TeacherPopupService;
//# sourceMappingURL=teacher-popup.service.js.map
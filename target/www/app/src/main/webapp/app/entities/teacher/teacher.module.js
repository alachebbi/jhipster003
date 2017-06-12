"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_1 = require("../../shared");
var _1 = require("./");
var ENTITY_STATES = _1.teacherRoute.concat(_1.teacherPopupRoute);
var AvancementTeacherModule = (function () {
    function AvancementTeacherModule() {
    }
    return AvancementTeacherModule;
}());
AvancementTeacherModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.AvancementSharedModule,
            router_1.RouterModule.forRoot(ENTITY_STATES, { useHash: true })
        ],
        declarations: [
            _1.TeacherComponent,
            _1.TeacherDetailComponent,
            _1.TeacherDialogComponent,
            _1.TeacherDeleteDialogComponent,
            _1.TeacherPopupComponent,
            _1.TeacherDeletePopupComponent,
        ],
        entryComponents: [
            _1.TeacherComponent,
            _1.TeacherDialogComponent,
            _1.TeacherPopupComponent,
            _1.TeacherDeleteDialogComponent,
            _1.TeacherDeletePopupComponent,
        ],
        providers: [
            _1.TeacherService,
            _1.TeacherPopupService,
            _1.TeacherResolvePagingParams,
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], AvancementTeacherModule);
exports.AvancementTeacherModule = AvancementTeacherModule;
//# sourceMappingURL=teacher.module.js.map
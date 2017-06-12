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
var ENTITY_STATES = _1.patientRoute.concat(_1.patientPopupRoute);
var AvancementPatientModule = (function () {
    function AvancementPatientModule() {
    }
    return AvancementPatientModule;
}());
AvancementPatientModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.AvancementSharedModule,
            router_1.RouterModule.forRoot(ENTITY_STATES, { useHash: true })
        ],
        declarations: [
            _1.PatientComponent,
            _1.PatientDetailComponent,
            _1.PatientDialogComponent,
            _1.PatientDeleteDialogComponent,
            _1.PatientPopupComponent,
            _1.PatientDeletePopupComponent,
        ],
        entryComponents: [
            _1.PatientComponent,
            _1.PatientDialogComponent,
            _1.PatientPopupComponent,
            _1.PatientDeleteDialogComponent,
            _1.PatientDeletePopupComponent,
        ],
        providers: [
            _1.PatientService,
            _1.PatientPopupService,
            _1.PatientResolvePagingParams,
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], AvancementPatientModule);
exports.AvancementPatientModule = AvancementPatientModule;
//# sourceMappingURL=patient.module.js.map
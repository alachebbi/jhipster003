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
var ENTITY_STATES = _1.medRoute.concat(_1.medPopupRoute);
var AvancementMedModule = (function () {
    function AvancementMedModule() {
    }
    return AvancementMedModule;
}());
AvancementMedModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.AvancementSharedModule,
            router_1.RouterModule.forRoot(ENTITY_STATES, { useHash: true })
        ],
        declarations: [
            _1.MedComponent,
            _1.MedDetailComponent,
            _1.MedDialogComponent,
            _1.MedDeleteDialogComponent,
            _1.MedPopupComponent,
            _1.MedDeletePopupComponent,
        ],
        entryComponents: [
            _1.MedComponent,
            _1.MedDialogComponent,
            _1.MedPopupComponent,
            _1.MedDeleteDialogComponent,
            _1.MedDeletePopupComponent,
        ],
        providers: [
            _1.MedService,
            _1.MedPopupService,
            _1.MedResolvePagingParams,
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], AvancementMedModule);
exports.AvancementMedModule = AvancementMedModule;
//# sourceMappingURL=med.module.js.map
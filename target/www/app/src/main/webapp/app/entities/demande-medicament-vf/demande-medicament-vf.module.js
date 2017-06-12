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
var ENTITY_STATES = _1.demandeMedicamentVfRoute.concat(_1.demandeMedicamentVfPopupRoute);
var AvancementDemandeMedicamentVfModule = (function () {
    function AvancementDemandeMedicamentVfModule() {
    }
    return AvancementDemandeMedicamentVfModule;
}());
AvancementDemandeMedicamentVfModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.AvancementSharedModule,
            router_1.RouterModule.forRoot(ENTITY_STATES, { useHash: true })
        ],
        declarations: [
            _1.DemandeMedicamentVfComponent,
            _1.DemandeMedicamentVfDetailComponent,
            _1.DemandeMedicamentVfDialogComponent,
            _1.DemandeMedicamentVfDeleteDialogComponent,
            _1.DemandeMedicamentVfPopupComponent,
            _1.DemandeMedicamentVfDeletePopupComponent,
        ],
        entryComponents: [
            _1.DemandeMedicamentVfComponent,
            _1.DemandeMedicamentVfDialogComponent,
            _1.DemandeMedicamentVfPopupComponent,
            _1.DemandeMedicamentVfDeleteDialogComponent,
            _1.DemandeMedicamentVfDeletePopupComponent,
        ],
        providers: [
            _1.DemandeMedicamentVfService,
            _1.DemandeMedicamentVfPopupService,
            _1.DemandeMedicamentVfResolvePagingParams,
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], AvancementDemandeMedicamentVfModule);
exports.AvancementDemandeMedicamentVfModule = AvancementDemandeMedicamentVfModule;
//# sourceMappingURL=demande-medicament-vf.module.js.map
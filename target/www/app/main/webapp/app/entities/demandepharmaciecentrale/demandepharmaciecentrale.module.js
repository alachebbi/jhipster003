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
var ENTITY_STATES = _1.demandepharmaciecentraleRoute.concat(_1.demandepharmaciecentralePopupRoute);
var AvancementDemandepharmaciecentraleModule = (function () {
    function AvancementDemandepharmaciecentraleModule() {
    }
    return AvancementDemandepharmaciecentraleModule;
}());
AvancementDemandepharmaciecentraleModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.AvancementSharedModule,
            router_1.RouterModule.forRoot(ENTITY_STATES, { useHash: true })
        ],
        declarations: [
            _1.DemandepharmaciecentraleComponent,
            _1.DemandepharmaciecentraleDetailComponent,
            _1.DemandepharmaciecentraleDialogComponent,
            _1.DemandepharmaciecentraleDeleteDialogComponent,
            _1.DemandepharmaciecentralePopupComponent,
            _1.DemandepharmaciecentraleDeletePopupComponent,
        ],
        entryComponents: [
            _1.DemandepharmaciecentraleComponent,
            _1.DemandepharmaciecentraleDialogComponent,
            _1.DemandepharmaciecentralePopupComponent,
            _1.DemandepharmaciecentraleDeleteDialogComponent,
            _1.DemandepharmaciecentraleDeletePopupComponent,
        ],
        providers: [
            _1.DemandepharmaciecentraleService,
            _1.DemandepharmaciecentralePopupService,
            _1.DemandepharmaciecentraleResolvePagingParams,
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], AvancementDemandepharmaciecentraleModule);
exports.AvancementDemandepharmaciecentraleModule = AvancementDemandepharmaciecentraleModule;
//# sourceMappingURL=demandepharmaciecentrale.module.js.map
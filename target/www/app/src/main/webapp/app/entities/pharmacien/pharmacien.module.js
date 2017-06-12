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
var ENTITY_STATES = _1.pharmacienRoute.concat(_1.pharmacienPopupRoute);
var AvancementPharmacienModule = (function () {
    function AvancementPharmacienModule() {
    }
    return AvancementPharmacienModule;
}());
AvancementPharmacienModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.AvancementSharedModule,
            router_1.RouterModule.forRoot(ENTITY_STATES, { useHash: true })
        ],
        declarations: [
            _1.PharmacienComponent,
            _1.PharmacienDetailComponent,
            _1.PharmacienDialogComponent,
            _1.PharmacienDeleteDialogComponent,
            _1.PharmacienPopupComponent,
            _1.PharmacienDeletePopupComponent,
        ],
        entryComponents: [
            _1.PharmacienComponent,
            _1.PharmacienDialogComponent,
            _1.PharmacienPopupComponent,
            _1.PharmacienDeleteDialogComponent,
            _1.PharmacienDeletePopupComponent,
        ],
        providers: [
            _1.PharmacienService,
            _1.PharmacienPopupService,
            _1.PharmacienResolvePagingParams,
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], AvancementPharmacienModule);
exports.AvancementPharmacienModule = AvancementPharmacienModule;
//# sourceMappingURL=pharmacien.module.js.map
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
var ENTITY_STATES = _1.traitementRoute.concat(_1.traitementPopupRoute);
var AvancementTraitementModule = (function () {
    function AvancementTraitementModule() {
    }
    return AvancementTraitementModule;
}());
AvancementTraitementModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.AvancementSharedModule,
            router_1.RouterModule.forRoot(ENTITY_STATES, { useHash: true })
        ],
        declarations: [
            _1.TraitementComponent,
            _1.TraitementDetailComponent,
            _1.TraitementDialogComponent,
            _1.TraitementDeleteDialogComponent,
            _1.TraitementPopupComponent,
            _1.TraitementDeletePopupComponent,
        ],
        entryComponents: [
            _1.TraitementComponent,
            _1.TraitementDialogComponent,
            _1.TraitementPopupComponent,
            _1.TraitementDeleteDialogComponent,
            _1.TraitementDeletePopupComponent,
        ],
        providers: [
            _1.TraitementService,
            _1.TraitementPopupService,
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], AvancementTraitementModule);
exports.AvancementTraitementModule = AvancementTraitementModule;
//# sourceMappingURL=traitement.module.js.map
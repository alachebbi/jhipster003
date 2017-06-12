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
var ENTITY_STATES = _1.demandemedicamentvffRoute.concat(_1.demandemedicamentvffPopupRoute);
var AvancementDemandemedicamentvffModule = (function () {
    function AvancementDemandemedicamentvffModule() {
    }
    return AvancementDemandemedicamentvffModule;
}());
AvancementDemandemedicamentvffModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.AvancementSharedModule,
            router_1.RouterModule.forRoot(ENTITY_STATES, { useHash: true })
        ],
        declarations: [
            _1.DemandemedicamentvffComponent,
            _1.DemandemedicamentvffDetailComponent,
            _1.DemandemedicamentvffDialogComponent,
            _1.DemandemedicamentvffDeleteDialogComponent,
            _1.DemandemedicamentvffPopupComponent,
            _1.DemandemedicamentvffDeletePopupComponent,
        ],
        entryComponents: [
            _1.DemandemedicamentvffComponent,
            _1.DemandemedicamentvffDialogComponent,
            _1.DemandemedicamentvffPopupComponent,
            _1.DemandemedicamentvffDeleteDialogComponent,
            _1.DemandemedicamentvffDeletePopupComponent,
        ],
        providers: [
            _1.DemandemedicamentvffService,
            _1.DemandemedicamentvffPopupService,
            _1.DemandemedicamentvffResolvePagingParams,
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], AvancementDemandemedicamentvffModule);
exports.AvancementDemandemedicamentvffModule = AvancementDemandemedicamentvffModule;
//# sourceMappingURL=demandemedicamentvff.module.js.map
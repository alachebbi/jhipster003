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
var ENTITY_STATES = _1.evenementRoute.concat(_1.evenementPopupRoute);
var AvancementEvenementModule = (function () {
    function AvancementEvenementModule() {
    }
    return AvancementEvenementModule;
}());
AvancementEvenementModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.AvancementSharedModule,
            router_1.RouterModule.forRoot(ENTITY_STATES, { useHash: true })
        ],
        declarations: [
            _1.EvenementComponent,
            _1.EvenementsComponent,
            _1.EvenementDetailComponent,
            _1.EvenementsDetailComponent,
            _1.EvenementDialogComponent,
            _1.EvenementDeleteDialogComponent,
            _1.EvenementPopupComponent,
            _1.EvenementDeletePopupComponent,
        ],
        entryComponents: [
            _1.EvenementComponent,
            _1.EvenementsComponent,
            _1.EvenementDialogComponent,
            _1.EvenementPopupComponent,
            _1.EvenementDeleteDialogComponent,
            _1.EvenementDeletePopupComponent,
        ],
        providers: [
            _1.EvenementService,
            _1.EvenementPopupService,
            _1.EvenementResolvePagingParams,
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], AvancementEvenementModule);
exports.AvancementEvenementModule = AvancementEvenementModule;
//# sourceMappingURL=evenement.module.js.map
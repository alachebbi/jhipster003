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
var ENTITY_STATES = _1.infirmierRoute.concat(_1.infirmierPopupRoute);
var AvancementInfirmierModule = (function () {
    function AvancementInfirmierModule() {
    }
    return AvancementInfirmierModule;
}());
AvancementInfirmierModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.AvancementSharedModule,
            router_1.RouterModule.forRoot(ENTITY_STATES, { useHash: true })
        ],
        declarations: [
            _1.InfirmierComponent,
            _1.InfirmierDetailComponent,
            _1.InfirmierDialogComponent,
            _1.InfirmierDeleteDialogComponent,
            _1.InfirmierPopupComponent,
            _1.InfirmierDeletePopupComponent,
        ],
        entryComponents: [
            _1.InfirmierComponent,
            _1.InfirmierDialogComponent,
            _1.InfirmierPopupComponent,
            _1.InfirmierDeleteDialogComponent,
            _1.InfirmierDeletePopupComponent,
        ],
        providers: [
            _1.InfirmierService,
            _1.InfirmierPopupService,
            _1.InfirmierResolvePagingParams,
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], AvancementInfirmierModule);
exports.AvancementInfirmierModule = AvancementInfirmierModule;
//# sourceMappingURL=infirmier.module.js.map
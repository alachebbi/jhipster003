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
var ENTITY_STATES = _1.helloRoute.concat(_1.helloPopupRoute);
var AvancementHelloModule = (function () {
    function AvancementHelloModule() {
    }
    return AvancementHelloModule;
}());
AvancementHelloModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.AvancementSharedModule,
            router_1.RouterModule.forRoot(ENTITY_STATES, { useHash: true })
        ],
        declarations: [
            _1.HelloComponent,
            _1.HelloDetailComponent,
            _1.HelloDialogComponent,
            _1.HelloDeleteDialogComponent,
            _1.HelloPopupComponent,
            _1.HelloDeletePopupComponent,
        ],
        entryComponents: [
            _1.HelloComponent,
            _1.HelloDialogComponent,
            _1.HelloPopupComponent,
            _1.HelloDeleteDialogComponent,
            _1.HelloDeletePopupComponent,
        ],
        providers: [
            _1.HelloService,
            _1.HelloPopupService,
            _1.HelloResolvePagingParams,
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], AvancementHelloModule);
exports.AvancementHelloModule = AvancementHelloModule;
//# sourceMappingURL=hello.module.js.map
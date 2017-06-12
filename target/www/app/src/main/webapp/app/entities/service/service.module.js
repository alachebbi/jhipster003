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
var ENTITY_STATES = _1.serviceRoute.concat(_1.servicePopupRoute);
var AvancementServiceModule = (function () {
    function AvancementServiceModule() {
    }
    return AvancementServiceModule;
}());
AvancementServiceModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.AvancementSharedModule,
            router_1.RouterModule.forRoot(ENTITY_STATES, { useHash: true })
        ],
        declarations: [
            _1.ServiceComponent,
            _1.ServiceDetailComponent,
            _1.ServiceDialogComponent,
            _1.ServiceDeleteDialogComponent,
            _1.ServicePopupComponent,
            _1.ServiceDeletePopupComponent,
        ],
        entryComponents: [
            _1.ServiceComponent,
            _1.ServiceDialogComponent,
            _1.ServicePopupComponent,
            _1.ServiceDeleteDialogComponent,
            _1.ServiceDeletePopupComponent,
        ],
        providers: [
            _1.ServiceService,
            _1.ServicePopupService,
            _1.ServiceResolvePagingParams,
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], AvancementServiceModule);
exports.AvancementServiceModule = AvancementServiceModule;
//# sourceMappingURL=service.module.js.map
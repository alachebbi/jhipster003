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
var ngx_pipes_1 = require("ngx-pipes");
var _1 = require("./");
var ENTITY_STATES = _1.forsysRoute.concat(_1.forsysPopupRoute);
var AvancementForsysModule = (function () {
    function AvancementForsysModule() {
    }
    return AvancementForsysModule;
}());
AvancementForsysModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.AvancementSharedModule,
            ngx_pipes_1.NgPipesModule,
            router_1.RouterModule.forRoot(ENTITY_STATES, { useHash: true })
        ],
        declarations: [
            _1.ForsysComponent,
            _1.ForsysDetailComponent,
            _1.ForsysDialogComponent,
            _1.ForsysDeleteDialogComponent,
            _1.ForsysPopupComponent,
            _1.ForsysDeletePopupComponent,
        ],
        entryComponents: [
            _1.ForsysComponent,
            _1.ForsysDialogComponent,
            _1.ForsysPopupComponent,
            _1.ForsysDeleteDialogComponent,
            _1.ForsysDeletePopupComponent,
        ],
        providers: [
            _1.ForsysService,
            _1.ForsysPopupService,
            _1.ForsysResolvePagingParams,
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], AvancementForsysModule);
exports.AvancementForsysModule = AvancementForsysModule;
//# sourceMappingURL=forsys.module.js.map
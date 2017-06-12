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
var ENTITY_STATES = _1.reclamationRoute.concat(_1.reclamationPopupRoute);
var AvancementReclamationModule = (function () {
    function AvancementReclamationModule() {
    }
    return AvancementReclamationModule;
}());
AvancementReclamationModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.AvancementSharedModule,
            ngx_pipes_1.NgPipesModule,
            router_1.RouterModule.forRoot(ENTITY_STATES, { useHash: true })
        ],
        declarations: [
            _1.ReclamationComponent,
            _1.ReclamationDetailComponent,
            _1.ReclamationDialogComponent,
            _1.MesreclamationsComponent,
            _1.ReclamationDeleteDialogComponent,
            _1.ReclamationPopupComponent,
            _1.ReclamationDeletePopupComponent,
        ],
        entryComponents: [
            _1.ReclamationComponent,
            _1.ReclamationDialogComponent,
            _1.MesreclamationsComponent,
            _1.ReclamationPopupComponent,
            _1.ReclamationDeleteDialogComponent,
            _1.ReclamationDeletePopupComponent,
        ],
        providers: [
            _1.ReclamationService,
            _1.ReclamationPopupService,
            _1.ReclamationResolvePagingParams,
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], AvancementReclamationModule);
exports.AvancementReclamationModule = AvancementReclamationModule;
//# sourceMappingURL=reclamation.module.js.map
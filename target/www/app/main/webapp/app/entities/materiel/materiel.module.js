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
var ENTITY_STATES = _1.materielRoute.concat(_1.materielPopupRoute);
var AvancementMaterielModule = (function () {
    function AvancementMaterielModule() {
    }
    return AvancementMaterielModule;
}());
AvancementMaterielModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.AvancementSharedModule,
            router_1.RouterModule.forRoot(ENTITY_STATES, { useHash: true })
        ],
        declarations: [
            _1.MaterielComponent,
            _1.MaterielDetailComponent,
            _1.MaterielDialogComponent,
            _1.MaterielDeleteDialogComponent,
            _1.MaterielPopupComponent,
            _1.MaterielDeletePopupComponent,
        ],
        entryComponents: [
            _1.MaterielComponent,
            _1.MaterielDialogComponent,
            _1.MaterielPopupComponent,
            _1.MaterielDeleteDialogComponent,
            _1.MaterielDeletePopupComponent,
        ],
        providers: [
            _1.MaterielService,
            _1.MaterielPopupService,
            _1.MaterielResolvePagingParams,
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], AvancementMaterielModule);
exports.AvancementMaterielModule = AvancementMaterielModule;
//# sourceMappingURL=materiel.module.js.map
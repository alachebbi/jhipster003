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
var ENTITY_STATES = _1.dossierMedicalRoute.concat(_1.dossierMedicalPopupRoute);
var AvancementDossierMedicalModule = (function () {
    function AvancementDossierMedicalModule() {
    }
    return AvancementDossierMedicalModule;
}());
AvancementDossierMedicalModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.AvancementSharedModule,
            ngx_pipes_1.NgPipesModule,
            router_1.RouterModule.forRoot(ENTITY_STATES, { useHash: true })
        ],
        declarations: [
            _1.DossierMedicalComponent,
            _1.DossierMedicalDetailComponent,
            _1.DossierMedicalDialogComponent,
            _1.DossierMedicalDeleteDialogComponent,
            _1.DossierMedicalPopupComponent,
            _1.DossierMedicalDeletePopupComponent,
        ],
        entryComponents: [
            _1.DossierMedicalComponent,
            _1.DossierMedicalDialogComponent,
            _1.DossierMedicalPopupComponent,
            _1.DossierMedicalDeleteDialogComponent,
            _1.DossierMedicalDeletePopupComponent,
        ],
        providers: [
            _1.DossierMedicalService,
            _1.DossierMedicalPopupService,
            _1.DossierMedicalResolvePagingParams,
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], AvancementDossierMedicalModule);
exports.AvancementDossierMedicalModule = AvancementDossierMedicalModule;
//# sourceMappingURL=dossier-medical.module.js.map
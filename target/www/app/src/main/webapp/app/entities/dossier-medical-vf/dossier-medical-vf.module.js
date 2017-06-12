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
var ENTITY_STATES = _1.dossierMedicalVFRoute.concat(_1.dossierMedicalVFPopupRoute);
var AvancementDossierMedicalVFModule = (function () {
    function AvancementDossierMedicalVFModule() {
    }
    return AvancementDossierMedicalVFModule;
}());
AvancementDossierMedicalVFModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.AvancementSharedModule,
            ngx_pipes_1.NgPipesModule,
            router_1.RouterModule.forRoot(ENTITY_STATES, { useHash: true })
        ],
        declarations: [
            _1.DossierMedicalVFComponent,
            _1.DossierMedicalVFDetailComponent,
            _1.DossierMedicalVFDialogComponent,
            _1.DossierMedicalVFDeleteDialogComponent,
            _1.DossierMedicalVFPopupComponent,
            _1.DossierMedicalVFDeletePopupComponent,
        ],
        entryComponents: [
            _1.DossierMedicalVFComponent,
            _1.DossierMedicalVFDialogComponent,
            _1.DossierMedicalVFPopupComponent,
            _1.DossierMedicalVFDeleteDialogComponent,
            _1.DossierMedicalVFDeletePopupComponent,
        ],
        providers: [
            _1.DossierMedicalVFService,
            _1.DossierMedicalVFPopupService,
            _1.DossierMedicalVFResolvePagingParams,
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], AvancementDossierMedicalVFModule);
exports.AvancementDossierMedicalVFModule = AvancementDossierMedicalVFModule;
//# sourceMappingURL=dossier-medical-vf.module.js.map
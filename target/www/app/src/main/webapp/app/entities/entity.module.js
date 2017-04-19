"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var medecin_module_1 = require("./medecin/medecin.module");
var servicemedical_module_1 = require("./servicemedical/servicemedical.module");
var fichemedicale_module_1 = require("./fichemedicale/fichemedicale.module");
var reclamation_module_1 = require("./reclamation/reclamation.module");
var patient_module_1 = require("./patient/patient.module");
var materiel_module_1 = require("./materiel/materiel.module");
var medicament_module_1 = require("./medicament/medicament.module");
var demandemedicament_module_1 = require("./demandemedicament/demandemedicament.module");
var demandemateriel_module_1 = require("./demandemateriel/demandemateriel.module");
var hello_module_1 = require("./hello/hello.module");
var fichepatient_module_1 = require("./fichepatient/fichepatient.module");
var doctor_module_1 = require("./doctor/doctor.module");
var traitement_module_1 = require("./traitement/traitement.module");
var infirmier_module_1 = require("./infirmier/infirmier.module");
var dosier_module_1 = require("./dosier/dosier.module");
var dossier_medical_module_1 = require("./dossier-medical/dossier-medical.module");
var forsys_module_1 = require("./forsys/forsys.module");
var dossier_medical_vf_module_1 = require("./dossier-medical-vf/dossier-medical-vf.module");
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */
var AvancementEntityModule = (function () {
    function AvancementEntityModule() {
    }
    return AvancementEntityModule;
}());
AvancementEntityModule = __decorate([
    core_1.NgModule({
        imports: [
            medecin_module_1.AvancementMedecinModule,
            servicemedical_module_1.AvancementServicemedicalModule,
            fichemedicale_module_1.AvancementFichemedicaleModule,
            reclamation_module_1.AvancementReclamationModule,
            patient_module_1.AvancementPatientModule,
            materiel_module_1.AvancementMaterielModule,
            medicament_module_1.AvancementMedicamentModule,
            demandemedicament_module_1.AvancementDemandemedicamentModule,
            demandemateriel_module_1.AvancementDemandematerielModule,
            hello_module_1.AvancementHelloModule,
            fichepatient_module_1.AvancementFichepatientModule,
            doctor_module_1.AvancementDoctorModule,
            traitement_module_1.AvancementTraitementModule,
            infirmier_module_1.AvancementInfirmierModule,
            dosier_module_1.AvancementDosierModule,
            dossier_medical_module_1.AvancementDossierMedicalModule,
            forsys_module_1.AvancementForsysModule,
            dossier_medical_vf_module_1.AvancementDossierMedicalVFModule,
        ],
        declarations: [],
        entryComponents: [],
        providers: [],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], AvancementEntityModule);
exports.AvancementEntityModule = AvancementEntityModule;
//# sourceMappingURL=entity.module.js.map
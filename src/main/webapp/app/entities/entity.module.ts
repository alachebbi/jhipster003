import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AvancementMedecinModule } from './medecin/medecin.module';
import { AvancementServicemedicalModule } from './servicemedical/servicemedical.module';
import { AvancementFichemedicaleModule } from './fichemedicale/fichemedicale.module';
import { AvancementReclamationModule } from './reclamation/reclamation.module';
import { AvancementPatientModule } from './patient/patient.module';
import { AvancementMaterielModule } from './materiel/materiel.module';
import { AvancementMedicamentModule } from './medicament/medicament.module';
import { AvancementDemandemedicamentModule } from './demandemedicament/demandemedicament.module';
import { AvancementDemandematerielModule } from './demandemateriel/demandemateriel.module';
import { AvancementHelloModule } from './hello/hello.module';

import { AvancementFichepatientModule } from './fichepatient/fichepatient.module';
import { AvancementDoctorModule } from './doctor/doctor.module';
import { AvancementTraitementModule } from './traitement/traitement.module';
import { AvancementInfirmierModule } from './infirmier/infirmier.module';
import { AvancementDosierModule } from './dosier/dosier.module';
import { AvancementDossierMedicalModule } from './dossier-medical/dossier-medical.module';


import { AvancementForsysModule } from './forsys/forsys.module';
import { AvancementDossierMedicalVFModule } from './dossier-medical-vf/dossier-medical-vf.module';
import { AvancementDemandeMedicamentVfModule } from './demande-medicament-vf/demande-medicament-vf.module';
import { AvancementDemandeModule } from './demande/demande.module';
import { AvancementDemandemedicamentvffModule } from './demandemedicamentvff/demandemedicamentvff.module';
import { AvancementArticleModule } from './article/article.module';

import { AvancementPharmacieModule } from './pharmacie/pharmacie.module';
import { AvancementLikesModule } from './likes/likes.module';
import { AvancementParticipationModule } from './participation/participation.module';
import { AvancementEvenementModule } from './evenement/evenement.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        AvancementMedecinModule,
        AvancementServicemedicalModule,
        AvancementFichemedicaleModule,
        AvancementReclamationModule,
        AvancementPatientModule,
        AvancementMaterielModule,
        AvancementMedicamentModule,
        AvancementDemandemedicamentModule,
        AvancementDemandematerielModule,
        AvancementHelloModule,
        AvancementFichepatientModule,
        AvancementDoctorModule,
        AvancementTraitementModule,
        AvancementInfirmierModule,
        AvancementDosierModule,
        AvancementDossierMedicalModule,


        AvancementForsysModule,
        AvancementDossierMedicalVFModule,
        AvancementDemandeMedicamentVfModule,
        AvancementDemandeModule,
        AvancementDemandemedicamentvffModule,
        AvancementArticleModule,
        AvancementPharmacieModule,
        AvancementLikesModule,
        AvancementParticipationModule,
        AvancementEvenementModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AvancementEntityModule {}

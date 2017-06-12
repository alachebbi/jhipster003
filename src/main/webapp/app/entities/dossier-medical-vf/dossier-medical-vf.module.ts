import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvancementSharedModule } from '../../shared';
import {NgPipesModule} from 'ngx-pipes';

import {
    DossierMedicalVFService,
    DossierMedicalVFPopupService,
    DossierMedicalVFComponent,
    DossierMedicalVFDetailComponent,
    DossierMedicalVFDialogComponent,
    DossierMedicalVFPopupComponent,
    DossierMedicalVFDeletePopupComponent,
    DossierMedicalVFDeleteDialogComponent,
    dossierMedicalVFRoute,
    dossierMedicalVFPopupRoute,
    DossierMedicalVFResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...dossierMedicalVFRoute,
    ...dossierMedicalVFPopupRoute,
];

@NgModule({
    imports: [
        AvancementSharedModule,
        NgPipesModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        DossierMedicalVFComponent,
        DossierMedicalVFDetailComponent,
        DossierMedicalVFDialogComponent,
        DossierMedicalVFDeleteDialogComponent,
        DossierMedicalVFPopupComponent,
        DossierMedicalVFDeletePopupComponent,
    ],
    entryComponents: [
        DossierMedicalVFComponent,
        DossierMedicalVFDialogComponent,
        DossierMedicalVFPopupComponent,
        DossierMedicalVFDeleteDialogComponent,
        DossierMedicalVFDeletePopupComponent,
    ],
    providers: [
        DossierMedicalVFService,
        DossierMedicalVFPopupService,
        DossierMedicalVFResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AvancementDossierMedicalVFModule {}

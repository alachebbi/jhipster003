import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvancementSharedModule } from '../../shared';
import {NgPipesModule} from 'ngx-pipes';

import {
    DossierMedicalService,
    DossierMedicalPopupService,
    DossierMedicalComponent,
    DossierMedicalDetailComponent,
    DossierMedicalDialogComponent,
    DossierMedicalPopupComponent,
    DossierMedicalDeletePopupComponent,
    DossierMedicalDeleteDialogComponent,
    dossierMedicalRoute,
    dossierMedicalPopupRoute,
    DossierMedicalResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...dossierMedicalRoute,
    ...dossierMedicalPopupRoute,
];

@NgModule({
    imports: [
        AvancementSharedModule,
        NgPipesModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        DossierMedicalComponent,
        DossierMedicalDetailComponent,
        DossierMedicalDialogComponent,
        DossierMedicalDeleteDialogComponent,
        DossierMedicalPopupComponent,
        DossierMedicalDeletePopupComponent,
    ],
    entryComponents: [
        DossierMedicalComponent,
        DossierMedicalDialogComponent,
        DossierMedicalPopupComponent,
        DossierMedicalDeleteDialogComponent,
        DossierMedicalDeletePopupComponent,
    ],
    providers: [
        DossierMedicalService,
        DossierMedicalPopupService,
        DossierMedicalResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AvancementDossierMedicalModule {}

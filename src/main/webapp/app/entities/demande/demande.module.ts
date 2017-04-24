import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvancementSharedModule } from '../../shared';

import {
    DemandeService,
    DemandePopupService,
    DemandeComponent,
    DemandeDetailComponent,
    DemandeDialogComponent,
    DemandePopupComponent,
    DemandeDeletePopupComponent,
    DemandeDeleteDialogComponent,
    demandeRoute,
    demandePopupRoute,
    DemandeResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...demandeRoute,
    ...demandePopupRoute,
];

@NgModule({
    imports: [
        AvancementSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        DemandeComponent,
        DemandeDetailComponent,
        DemandeDialogComponent,
        DemandeDeleteDialogComponent,
        DemandePopupComponent,
        DemandeDeletePopupComponent,
    ],
    entryComponents: [
        DemandeComponent,
        DemandeDialogComponent,
        DemandePopupComponent,
        DemandeDeleteDialogComponent,
        DemandeDeletePopupComponent,
    ],
    providers: [
        DemandeService,
        DemandePopupService,
        DemandeResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AvancementDemandeModule {}

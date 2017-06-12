import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvancementSharedModule } from '../../shared';

import {
    DemandeMedicamentVfService,
    DemandeMedicamentVfPopupService,
    DemandeMedicamentVfComponent,
    DemandeMedicamentVfDetailComponent,
    DemandeMedicamentVfDialogComponent,
    DemandeMedicamentVfPopupComponent,
    DemandeMedicamentVfDeletePopupComponent,
    DemandeMedicamentVfDeleteDialogComponent,
    demandeMedicamentVfRoute,
    demandeMedicamentVfPopupRoute,
    DemandeMedicamentVfResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...demandeMedicamentVfRoute,
    ...demandeMedicamentVfPopupRoute,
];

@NgModule({
    imports: [
        AvancementSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        DemandeMedicamentVfComponent,
        DemandeMedicamentVfDetailComponent,
        DemandeMedicamentVfDialogComponent,
        DemandeMedicamentVfDeleteDialogComponent,
        DemandeMedicamentVfPopupComponent,
        DemandeMedicamentVfDeletePopupComponent,
    ],
    entryComponents: [
        DemandeMedicamentVfComponent,
        DemandeMedicamentVfDialogComponent,
        DemandeMedicamentVfPopupComponent,
        DemandeMedicamentVfDeleteDialogComponent,
        DemandeMedicamentVfDeletePopupComponent,
    ],
    providers: [
        DemandeMedicamentVfService,
        DemandeMedicamentVfPopupService,
        DemandeMedicamentVfResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AvancementDemandeMedicamentVfModule {}

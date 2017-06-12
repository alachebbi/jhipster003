import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvancementSharedModule } from '../../shared';

import {
    DemandepharmaciecentraleService,
    DemandepharmaciecentralePopupService,
    DemandepharmaciecentraleComponent,
    DemandepharmaciecentraleDetailComponent,
    DemandepharmaciecentraleDialogComponent,
    DemandepharmaciecentralePopupComponent,
    DemandepharmaciecentraleDeletePopupComponent,
    DemandepharmaciecentraleDeleteDialogComponent,
    demandepharmaciecentraleRoute,
    demandepharmaciecentralePopupRoute,
    DemandepharmaciecentraleResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...demandepharmaciecentraleRoute,
    ...demandepharmaciecentralePopupRoute,
];

@NgModule({
    imports: [
        AvancementSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        DemandepharmaciecentraleComponent,
        DemandepharmaciecentraleDetailComponent,
        DemandepharmaciecentraleDialogComponent,
        DemandepharmaciecentraleDeleteDialogComponent,
        DemandepharmaciecentralePopupComponent,
        DemandepharmaciecentraleDeletePopupComponent,
    ],
    entryComponents: [
        DemandepharmaciecentraleComponent,
        DemandepharmaciecentraleDialogComponent,
        DemandepharmaciecentralePopupComponent,
        DemandepharmaciecentraleDeleteDialogComponent,
        DemandepharmaciecentraleDeletePopupComponent,
    ],
    providers: [
        DemandepharmaciecentraleService,
        DemandepharmaciecentralePopupService,
        DemandepharmaciecentraleResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AvancementDemandepharmaciecentraleModule {}

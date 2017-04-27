import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvancementSharedModule } from '../../shared';

import {
    PharmacieService,
    PharmaciePopupService,
    PharmacieComponent,
    PharmacieDetailComponent,
    PharmacieDialogComponent,
    PharmaciePopupComponent,
    PharmacieDeletePopupComponent,
    PharmacieDeleteDialogComponent,
    pharmacieRoute,
    pharmaciePopupRoute,
    PharmacieResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...pharmacieRoute,
    ...pharmaciePopupRoute,
];

@NgModule({
    imports: [
        AvancementSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        PharmacieComponent,
        PharmacieDetailComponent,
        PharmacieDialogComponent,
        PharmacieDeleteDialogComponent,
        PharmaciePopupComponent,
        PharmacieDeletePopupComponent,
    ],
    entryComponents: [
        PharmacieComponent,
        PharmacieDialogComponent,
        PharmaciePopupComponent,
        PharmacieDeleteDialogComponent,
        PharmacieDeletePopupComponent,
    ],
    providers: [
        PharmacieService,
        PharmaciePopupService,
        PharmacieResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AvancementPharmacieModule {}

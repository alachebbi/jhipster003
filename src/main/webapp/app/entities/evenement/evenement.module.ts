import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvancementSharedModule } from '../../shared';

import {
    EvenementService,
    EvenementPopupService,
    EvenementComponent,
    EvenementsComponent,
    EvenementDetailComponent,
    EvenementsDetailComponent,
    EvenementDialogComponent,
    EvenementPopupComponent,
    EvenementDeletePopupComponent,
    EvenementDeleteDialogComponent,
    evenementRoute,
    evenementPopupRoute,
    EvenementResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...evenementRoute,
    ...evenementPopupRoute,
];

@NgModule({
    imports: [
        AvancementSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        EvenementComponent,
        EvenementsComponent,
        EvenementDetailComponent,
        EvenementsDetailComponent,
        EvenementDialogComponent,
        EvenementDeleteDialogComponent,
        EvenementPopupComponent,
        EvenementDeletePopupComponent,
    ],
    entryComponents: [
        EvenementComponent,
        EvenementsComponent,
        EvenementDialogComponent,
        EvenementPopupComponent,
        EvenementDeleteDialogComponent,
        EvenementDeletePopupComponent,
    ],
    providers: [
        EvenementService,
        EvenementPopupService,
        EvenementResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AvancementEvenementModule {}

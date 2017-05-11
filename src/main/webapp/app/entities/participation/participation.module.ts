import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvancementSharedModule } from '../../shared';

import {
    ParticipationService,
    ParticipationPopupService,
    ParticipationComponent,
    ParticipationDetailComponent,
    ParticipationDialogComponent,
    ParticipationPopupComponent,
    ParticipationDeletePopupComponent,
    ParticipationDeleteDialogComponent,
    participationRoute,
    participationPopupRoute,
    ParticipationResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...participationRoute,
    ...participationPopupRoute,
];

@NgModule({
    imports: [
        AvancementSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        ParticipationComponent,
        ParticipationDetailComponent,
        ParticipationDialogComponent,
        ParticipationDeleteDialogComponent,
        ParticipationPopupComponent,
        ParticipationDeletePopupComponent,
    ],
    entryComponents: [
        ParticipationComponent,
        ParticipationDialogComponent,
        ParticipationPopupComponent,
        ParticipationDeleteDialogComponent,
        ParticipationDeletePopupComponent,
    ],
    providers: [
        ParticipationService,
        ParticipationPopupService,
        ParticipationResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AvancementParticipationModule {}

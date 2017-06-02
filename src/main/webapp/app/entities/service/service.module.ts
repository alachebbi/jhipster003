import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvancementSharedModule } from '../../shared';

import {
    ServiceService,
    ServicePopupService,
    ServiceComponent,
    ServiceDetailComponent,
    ServiceDialogComponent,
    ServicePopupComponent,
    ServiceDeletePopupComponent,
    ServiceDeleteDialogComponent,
    serviceRoute,
    servicePopupRoute,
    ServiceResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...serviceRoute,
    ...servicePopupRoute,
];

@NgModule({
    imports: [
        AvancementSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        ServiceComponent,
        ServiceDetailComponent,
        ServiceDialogComponent,
        ServiceDeleteDialogComponent,
        ServicePopupComponent,
        ServiceDeletePopupComponent,
    ],
    entryComponents: [
        ServiceComponent,
        ServiceDialogComponent,
        ServicePopupComponent,
        ServiceDeleteDialogComponent,
        ServiceDeletePopupComponent,
    ],
    providers: [
        ServiceService,
        ServicePopupService,
        ServiceResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AvancementServiceModule {}

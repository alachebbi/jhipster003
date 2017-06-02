import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvancementSharedModule } from '../../shared';

import {
    DemandemediService,
    DemandemediPopupService,
    DemandemediComponent,
    DemandemediDetailComponent,
    DemandemediDialogComponent,
    DemandemediPopupComponent,
    DemandemediDeletePopupComponent,
    DemandemediDeleteDialogComponent,
    demandemediRoute,
    demandemediPopupRoute,
    DemandemediResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...demandemediRoute,
    ...demandemediPopupRoute,
];

@NgModule({
    imports: [
        AvancementSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        DemandemediComponent,
        DemandemediDetailComponent,
        DemandemediDialogComponent,
        DemandemediDeleteDialogComponent,
        DemandemediPopupComponent,
        DemandemediDeletePopupComponent,
    ],
    entryComponents: [
        DemandemediComponent,
        DemandemediDialogComponent,
        DemandemediPopupComponent,
        DemandemediDeleteDialogComponent,
        DemandemediDeletePopupComponent,
    ],
    providers: [
        DemandemediService,
        DemandemediPopupService,
        DemandemediResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AvancementDemandemediModule {}

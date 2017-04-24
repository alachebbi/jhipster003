import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvancementSharedModule } from '../../shared';

import {
    DemandemedicamentvffService,
    DemandemedicamentvffPopupService,
    DemandemedicamentvffComponent,
    DemandemedicamentvffDetailComponent,
    DemandemedicamentvffDialogComponent,
    DemandemedicamentvffPopupComponent,
    DemandemedicamentvffDeletePopupComponent,
    DemandemedicamentvffDeleteDialogComponent,
    demandemedicamentvffRoute,
    demandemedicamentvffPopupRoute,
    DemandemedicamentvffResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...demandemedicamentvffRoute,
    ...demandemedicamentvffPopupRoute,
];

@NgModule({
    imports: [
        AvancementSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        DemandemedicamentvffComponent,
        DemandemedicamentvffDetailComponent,
        DemandemedicamentvffDialogComponent,
        DemandemedicamentvffDeleteDialogComponent,
        DemandemedicamentvffPopupComponent,
        DemandemedicamentvffDeletePopupComponent,
    ],
    entryComponents: [
        DemandemedicamentvffComponent,
        DemandemedicamentvffDialogComponent,
        DemandemedicamentvffPopupComponent,
        DemandemedicamentvffDeleteDialogComponent,
        DemandemedicamentvffDeletePopupComponent,
    ],
    providers: [
        DemandemedicamentvffService,
        DemandemedicamentvffPopupService,
        DemandemedicamentvffResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AvancementDemandemedicamentvffModule {}

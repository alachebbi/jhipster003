import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvancementSharedModule } from '../../shared';

import {
    DosierService,
    DosierPopupService,
    DosierComponent,
    DosierDetailComponent,
    DosierDialogComponent,
    DosierPopupComponent,
    DosierDeletePopupComponent,
    DosierDeleteDialogComponent,
    dosierRoute,
    dosierPopupRoute,
} from './';

let ENTITY_STATES = [
    ...dosierRoute,
    ...dosierPopupRoute,
];

@NgModule({
    imports: [
        AvancementSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        DosierComponent,
        DosierDetailComponent,
        DosierDialogComponent,
        DosierDeleteDialogComponent,
        DosierPopupComponent,
        DosierDeletePopupComponent,
    ],
    entryComponents: [
        DosierComponent,
        DosierDialogComponent,
        DosierPopupComponent,
        DosierDeleteDialogComponent,
        DosierDeletePopupComponent,
    ],
    providers: [
        DosierService,
        DosierPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AvancementDosierModule {}

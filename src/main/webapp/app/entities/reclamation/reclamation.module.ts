import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvancementSharedModule } from '../../shared';
import {NgPipesModule} from 'ngx-pipes';

import {
    ReclamationService,
    ReclamationPopupService,
    ReclamationComponent,
    ReclamationDetailComponent,
    MesreclamationsComponent,
    ReclamationDialogComponent,
    ReclamationPopupComponent,
    ReclamationDeletePopupComponent,
    ReclamationDeleteDialogComponent,
    reclamationRoute,
    reclamationPopupRoute,
    ReclamationResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...reclamationRoute,
    ...reclamationPopupRoute,
];

@NgModule({
    imports: [
        AvancementSharedModule,
        NgPipesModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        ReclamationComponent,
        ReclamationDetailComponent,
        ReclamationDialogComponent,
        MesreclamationsComponent,
        ReclamationDeleteDialogComponent,
        ReclamationPopupComponent,
        ReclamationDeletePopupComponent,
    ],
    entryComponents: [
        ReclamationComponent,
        ReclamationDialogComponent,
        MesreclamationsComponent,
        ReclamationPopupComponent,
        ReclamationDeleteDialogComponent,
        ReclamationDeletePopupComponent,
    ],
    providers: [
        ReclamationService,
        ReclamationPopupService,
        ReclamationResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AvancementReclamationModule {}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvancementSharedModule } from '../../shared';

import {
    DislikeService,
    DislikePopupService,
    DislikeComponent,
    DislikeDetailComponent,
    DislikeDialogComponent,
    DislikePopupComponent,
    DislikeDeletePopupComponent,
    DislikeDeleteDialogComponent,
    dislikeRoute,
    dislikePopupRoute,
    DislikeResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...dislikeRoute,
    ...dislikePopupRoute,
];

@NgModule({
    imports: [
        AvancementSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        DislikeComponent,
        DislikeDetailComponent,
        DislikeDialogComponent,
        DislikeDeleteDialogComponent,
        DislikePopupComponent,
        DislikeDeletePopupComponent,
    ],
    entryComponents: [
        DislikeComponent,
        DislikeDialogComponent,
        DislikePopupComponent,
        DislikeDeleteDialogComponent,
        DislikeDeletePopupComponent,
    ],
    providers: [
        DislikeService,
        DislikePopupService,
        DislikeResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AvancementDislikeModule {}

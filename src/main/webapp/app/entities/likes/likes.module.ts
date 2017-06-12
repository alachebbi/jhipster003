import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvancementSharedModule } from '../../shared';

import {
    LikesService,
    LikesPopupService,
    LikesComponent,
    LikesDetailComponent,
    LikesDialogComponent,
    LikesPopupComponent,
    LikesDeletePopupComponent,
    LikesDeleteDialogComponent,
    likesRoute,
    likesPopupRoute,
    LikesResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...likesRoute,
    ...likesPopupRoute,
];

@NgModule({
    imports: [
        AvancementSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        LikesComponent,
        LikesDetailComponent,
        LikesDialogComponent,
        LikesDeleteDialogComponent,
        LikesPopupComponent,
        LikesDeletePopupComponent,
    ],
    entryComponents: [
        LikesComponent,
        LikesDialogComponent,
        LikesPopupComponent,
        LikesDeleteDialogComponent,
        LikesDeletePopupComponent,
    ],
    providers: [
        LikesService,
        LikesPopupService,
        LikesResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AvancementLikesModule {}

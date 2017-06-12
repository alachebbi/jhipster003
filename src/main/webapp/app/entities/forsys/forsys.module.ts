import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvancementSharedModule } from '../../shared';
import {NgPipesModule} from 'ngx-pipes';

import {
    ForsysService,
    ForsysPopupService,
    ForsysComponent,
    ForsysDetailComponent,
    ForsysDialogComponent,
    ForsysPopupComponent,
    ForsysDeletePopupComponent,
    ForsysDeleteDialogComponent,
    forsysRoute,
    forsysPopupRoute,
    ForsysResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...forsysRoute,
    ...forsysPopupRoute,
];

@NgModule({
    imports: [
        AvancementSharedModule,
        NgPipesModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        ForsysComponent,
        ForsysDetailComponent,
        ForsysDialogComponent,
        ForsysDeleteDialogComponent,
        ForsysPopupComponent,
        ForsysDeletePopupComponent,
    ],
    entryComponents: [
        ForsysComponent,
        ForsysDialogComponent,
        ForsysPopupComponent,
        ForsysDeleteDialogComponent,
        ForsysDeletePopupComponent,
    ],
    providers: [
        ForsysService,
        ForsysPopupService,
        ForsysResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AvancementForsysModule {}

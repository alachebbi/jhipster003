import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvancementSharedModule } from '../../shared';

import {
    ChefServiceService,
    ChefServicePopupService,
    ChefServiceComponent,
    ChefServiceDetailComponent,
    ChefServiceDialogComponent,
    ChefServicePopupComponent,
    ChefServiceDeletePopupComponent,
    ChefServiceDeleteDialogComponent,
    chefServiceRoute,
    chefServicePopupRoute,
    ChefServiceResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...chefServiceRoute,
    ...chefServicePopupRoute,
];

@NgModule({
    imports: [
        AvancementSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        ChefServiceComponent,
        ChefServiceDetailComponent,
        ChefServiceDialogComponent,
        ChefServiceDeleteDialogComponent,
        ChefServicePopupComponent,
        ChefServiceDeletePopupComponent,
    ],
    entryComponents: [
        ChefServiceComponent,
        ChefServiceDialogComponent,
        ChefServicePopupComponent,
        ChefServiceDeleteDialogComponent,
        ChefServiceDeletePopupComponent,
    ],
    providers: [
        ChefServiceService,
        ChefServicePopupService,
        ChefServiceResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AvancementChefServiceModule {}

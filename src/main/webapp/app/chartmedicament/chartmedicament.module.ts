import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvancementSharedModule } from '../shared';

import { CHARTMEDICAMENT_ROUTE, ChartmedicamentComponent } from './';

require('chart.js');
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
    imports: [
        AvancementSharedModule,
        RouterModule.forRoot([ CHARTMEDICAMENT_ROUTE ], { useHash: true }),
        ChartsModule
    ],
    declarations: [
        ChartmedicamentComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AvancementChartmedicamentModule {}

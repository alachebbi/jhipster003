import { Route } from '@angular/router';

import { UserRouteAccessService } from '../shared';
import { ChartmedicamentComponent } from './';

export const CHARTMEDICAMENT_ROUTE: Route = {
  path: 'chartmedicament',
  component: ChartmedicamentComponent,
  data: {
    authorities: ['ROLE_ADMIN'],
    pageTitle: 'Welcome, Medicament Chart !'
  },
  canActivate: [UserRouteAccessService]
};


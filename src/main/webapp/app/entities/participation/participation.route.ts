import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { ParticipationComponent } from './participation.component';
import { ParticipationDetailComponent } from './participation-detail.component';
import { ParticipationPopupComponent } from './participation-dialog.component';
import { ParticipationDeletePopupComponent } from './participation-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class ParticipationResolvePagingParams implements Resolve<any> {

  constructor(private paginationUtil: PaginationUtil) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      let page = route.queryParams['page'] ? route.queryParams['page'] : '1';
      let sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
      return {
          page: this.paginationUtil.parsePage(page),
          predicate: this.paginationUtil.parsePredicate(sort),
          ascending: this.paginationUtil.parseAscending(sort)
    };
  }
}

export const participationRoute: Routes = [
  {
    path: 'participation',
    component: ParticipationComponent,
    resolve: {
      'pagingParams': ParticipationResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.participation.home.title'
    }
  }, {
    path: 'participation/:id',
    component: ParticipationDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.participation.home.title'
    }
  }
];

export const participationPopupRoute: Routes = [
  {
    path: 'participation-new',
    component: ParticipationPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.participation.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'participation/:id/edit',
    component: ParticipationPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.participation.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'participation/:id/delete',
    component: ParticipationDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.participation.home.title'
    },
    outlet: 'popup'
  }
];

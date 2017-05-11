import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { EvenementComponent } from './evenement.component';
import { EvenementDetailComponent } from './evenement-detail.component';
import { EvenementPopupComponent } from './evenement-dialog.component';
import { EvenementDeletePopupComponent } from './evenement-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class EvenementResolvePagingParams implements Resolve<any> {

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

export const evenementRoute: Routes = [
  {
    path: 'evenement',
    component: EvenementComponent,
    resolve: {
      'pagingParams': EvenementResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.evenement.home.title'
    }
  }, {
    path: 'evenement/:id',
    component: EvenementDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.evenement.home.title'
    }
  }
];

export const evenementPopupRoute: Routes = [
  {
    path: 'evenement-new',
    component: EvenementPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.evenement.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'evenement/:id/edit',
    component: EvenementPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.evenement.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'evenement/:id/delete',
    component: EvenementDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.evenement.home.title'
    },
    outlet: 'popup'
  }
];

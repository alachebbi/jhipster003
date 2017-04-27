import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { PharmacieComponent } from './pharmacie.component';
import { PharmacieDetailComponent } from './pharmacie-detail.component';
import { PharmaciePopupComponent } from './pharmacie-dialog.component';
import { PharmacieDeletePopupComponent } from './pharmacie-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class PharmacieResolvePagingParams implements Resolve<any> {

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

export const pharmacieRoute: Routes = [
  {
    path: 'pharmacie',
    component: PharmacieComponent,
    resolve: {
      'pagingParams': PharmacieResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.pharmacie.home.title'
    }
  }, {
    path: 'pharmacie/:id',
    component: PharmacieDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.pharmacie.home.title'
    }
  }
];

export const pharmaciePopupRoute: Routes = [
  {
    path: 'pharmacie-new',
    component: PharmaciePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.pharmacie.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'pharmacie/:id/edit',
    component: PharmaciePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.pharmacie.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'pharmacie/:id/delete',
    component: PharmacieDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.pharmacie.home.title'
    },
    outlet: 'popup'
  }
];

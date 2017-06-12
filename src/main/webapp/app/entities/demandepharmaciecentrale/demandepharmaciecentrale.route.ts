import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { DemandepharmaciecentraleComponent } from './demandepharmaciecentrale.component';
import { DemandepharmaciecentraleDetailComponent } from './demandepharmaciecentrale-detail.component';
import { DemandepharmaciecentralePopupComponent } from './demandepharmaciecentrale-dialog.component';
import { DemandepharmaciecentraleDeletePopupComponent } from './demandepharmaciecentrale-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class DemandepharmaciecentraleResolvePagingParams implements Resolve<any> {

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

export const demandepharmaciecentraleRoute: Routes = [
  {
    path: 'demandepharmaciecentrale',
    component: DemandepharmaciecentraleComponent,
    resolve: {
      'pagingParams': DemandepharmaciecentraleResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.demandepharmaciecentrale.home.title'
    }
  }, {
    path: 'demandepharmaciecentrale/:id',
    component: DemandepharmaciecentraleDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.demandepharmaciecentrale.home.title'
    }
  }
];

export const demandepharmaciecentralePopupRoute: Routes = [
  {
    path: 'demandepharmaciecentrale-new',
    component: DemandepharmaciecentralePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.demandepharmaciecentrale.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'demandepharmaciecentrale/:id/edit',
    component: DemandepharmaciecentralePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.demandepharmaciecentrale.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'demandepharmaciecentrale/:id/delete',
    component: DemandepharmaciecentraleDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.demandepharmaciecentrale.home.title'
    },
    outlet: 'popup'
  }
];

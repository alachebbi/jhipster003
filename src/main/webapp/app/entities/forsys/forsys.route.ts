import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { ForsysComponent } from './forsys.component';
import { ForsysDetailComponent } from './forsys-detail.component';
import { ForsysPopupComponent } from './forsys-dialog.component';
import { ForsysDeletePopupComponent } from './forsys-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class ForsysResolvePagingParams implements Resolve<any> {

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

export const forsysRoute: Routes = [
  {
    path: 'forsys',
    component: ForsysComponent,
    resolve: {
      'pagingParams': ForsysResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.forsys.home.title'
    }
  }, {
    path: 'forsys/:id',
    component: ForsysDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.forsys.home.title'
    }
  }
];

export const forsysPopupRoute: Routes = [
  {
    path: 'forsys-new',
    component: ForsysPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.forsys.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'forsys/:id/edit',
    component: ForsysPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.forsys.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'forsys/:id/delete',
    component: ForsysDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.forsys.home.title'
    },
    outlet: 'popup'
  }
];

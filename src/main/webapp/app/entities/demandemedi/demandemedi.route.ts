import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { DemandemediComponent } from './demandemedi.component';
import { DemandemediDetailComponent } from './demandemedi-detail.component';
import { DemandemediPopupComponent } from './demandemedi-dialog.component';
import { DemandemediDeletePopupComponent } from './demandemedi-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class DemandemediResolvePagingParams implements Resolve<any> {

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

export const demandemediRoute: Routes = [
  {
    path: 'demandemedi',
    component: DemandemediComponent,
    resolve: {
      'pagingParams': DemandemediResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.demandemedi.home.title'
    }
  }, {
    path: 'demandemedi/:id',
    component: DemandemediDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.demandemedi.home.title'
    }
  }
];

export const demandemediPopupRoute: Routes = [
  {
    path: 'demandemedi-new',
    component: DemandemediPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.demandemedi.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'demandemedi/:id/edit',
    component: DemandemediPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.demandemedi.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'demandemedi/:id/delete',
    component: DemandemediDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.demandemedi.home.title'
    },
    outlet: 'popup'
  }
];

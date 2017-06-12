import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { DemandemedicamentvffComponent } from './demandemedicamentvff.component';
import { DemandemedicamentvffDetailComponent } from './demandemedicamentvff-detail.component';
import { DemandemedicamentvffPopupComponent } from './demandemedicamentvff-dialog.component';
import { DemandemedicamentvffDeletePopupComponent } from './demandemedicamentvff-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class DemandemedicamentvffResolvePagingParams implements Resolve<any> {

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

export const demandemedicamentvffRoute: Routes = [
  {
    path: 'demandemedicamentvff',
    component: DemandemedicamentvffComponent,
    resolve: {
      'pagingParams': DemandemedicamentvffResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.demandemedicamentvff.home.title'
    }
  }, {
    path: 'demandemedicamentvff/:id',
    component: DemandemedicamentvffDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.demandemedicamentvff.home.title'
    }
  }
];

export const demandemedicamentvffPopupRoute: Routes = [
  {
    path: 'demandemedicamentvff-new',
    component: DemandemedicamentvffPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.demandemedicamentvff.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'demandemedicamentvff/:id/edit',
    component: DemandemedicamentvffPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.demandemedicamentvff.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'demandemedicamentvff/:id/delete',
    component: DemandemedicamentvffDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.demandemedicamentvff.home.title'
    },
    outlet: 'popup'
  }
];

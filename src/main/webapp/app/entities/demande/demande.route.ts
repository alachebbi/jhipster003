import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { DemandeComponent } from './demande.component';
import { DemandeDetailComponent } from './demande-detail.component';
import { DemandePopupComponent } from './demande-dialog.component';
import { DemandeDeletePopupComponent } from './demande-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class DemandeResolvePagingParams implements Resolve<any> {

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

export const demandeRoute: Routes = [
  {
    path: 'demande',
    component: DemandeComponent,
    resolve: {
      'pagingParams': DemandeResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.demande.home.title'
    }
  }, {
    path: 'demande/:id',
    component: DemandeDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.demande.home.title'
    }
  }
];

export const demandePopupRoute: Routes = [
  {
    path: 'demande-new',
    component: DemandePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.demande.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'demande/:id/edit',
    component: DemandePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.demande.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'demande/:id/delete',
    component: DemandeDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.demande.home.title'
    },
    outlet: 'popup'
  }
];

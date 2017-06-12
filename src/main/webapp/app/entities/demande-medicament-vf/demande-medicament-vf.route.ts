import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { DemandeMedicamentVfComponent } from './demande-medicament-vf.component';
import { DemandeMedicamentVfDetailComponent } from './demande-medicament-vf-detail.component';
import { DemandeMedicamentVfPopupComponent } from './demande-medicament-vf-dialog.component';
import { DemandeMedicamentVfDeletePopupComponent } from './demande-medicament-vf-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class DemandeMedicamentVfResolvePagingParams implements Resolve<any> {

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

export const demandeMedicamentVfRoute: Routes = [
  {
    path: 'demande-medicament-vf',
    component: DemandeMedicamentVfComponent,
    resolve: {
      'pagingParams': DemandeMedicamentVfResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.demandeMedicamentVf.home.title'
    }
  }, {
    path: 'demande-medicament-vf/:id',
    component: DemandeMedicamentVfDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.demandeMedicamentVf.home.title'
    }
  }
];

export const demandeMedicamentVfPopupRoute: Routes = [
  {
    path: 'demande-medicament-vf-new',
    component: DemandeMedicamentVfPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.demandeMedicamentVf.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'demande-medicament-vf/:id/edit',
    component: DemandeMedicamentVfPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.demandeMedicamentVf.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'demande-medicament-vf/:id/delete',
    component: DemandeMedicamentVfDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.demandeMedicamentVf.home.title'
    },
    outlet: 'popup'
  }
];

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { ServiceComponent } from './service.component';
import { ServiceDetailComponent } from './service-detail.component';
import { ServicePopupComponent } from './service-dialog.component';
import { ServiceDeletePopupComponent } from './service-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class ServiceResolvePagingParams implements Resolve<any> {

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

export const serviceRoute: Routes = [
  {
    path: 'service',
    component: ServiceComponent,
    resolve: {
      'pagingParams': ServiceResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.service.home.title'
    }
  }, {
    path: 'service/:id',
    component: ServiceDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.service.home.title'
    }
  }
];

export const servicePopupRoute: Routes = [
  {
    path: 'service-new',
    component: ServicePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.service.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'service/:id/edit',
    component: ServicePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.service.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'service/:id/delete',
    component: ServiceDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.service.home.title'
    },
    outlet: 'popup'
  }
];

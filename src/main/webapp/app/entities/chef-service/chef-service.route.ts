import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { ChefServiceComponent } from './chef-service.component';
import { ChefServiceDetailComponent } from './chef-service-detail.component';
import { ChefServicePopupComponent } from './chef-service-dialog.component';
import { ChefServiceDeletePopupComponent } from './chef-service-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class ChefServiceResolvePagingParams implements Resolve<any> {

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

export const chefServiceRoute: Routes = [
  {
    path: 'chef-service',
    component: ChefServiceComponent,
    resolve: {
      'pagingParams': ChefServiceResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.chefService.home.title'
    }
  }, {
    path: 'chef-service/:id',
    component: ChefServiceDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.chefService.home.title'
    }
  }
];

export const chefServicePopupRoute: Routes = [
  {
    path: 'chef-service-new',
    component: ChefServicePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.chefService.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'chef-service/:id/edit',
    component: ChefServicePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.chefService.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'chef-service/:id/delete',
    component: ChefServiceDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.chefService.home.title'
    },
    outlet: 'popup'
  }
];

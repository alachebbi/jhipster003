import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { DislikeComponent } from './dislike.component';
import { DislikeDetailComponent } from './dislike-detail.component';
import { DislikePopupComponent } from './dislike-dialog.component';
import { DislikeDeletePopupComponent } from './dislike-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class DislikeResolvePagingParams implements Resolve<any> {

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

export const dislikeRoute: Routes = [
  {
    path: 'dislike',
    component: DislikeComponent,
    resolve: {
      'pagingParams': DislikeResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.dislike.home.title'
    }
  }, {
    path: 'dislike/:id',
    component: DislikeDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.dislike.home.title'
    }
  }
];

export const dislikePopupRoute: Routes = [
  {
    path: 'dislike-new',
    component: DislikePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.dislike.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'dislike/:id/edit',
    component: DislikePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.dislike.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'dislike/:id/delete',
    component: DislikeDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.dislike.home.title'
    },
    outlet: 'popup'
  }
];

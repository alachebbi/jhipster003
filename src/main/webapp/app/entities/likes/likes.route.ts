import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { LikesComponent } from './likes.component';
import { LikesDetailComponent } from './likes-detail.component';
import { LikesPopupComponent } from './likes-dialog.component';
import { LikesDeletePopupComponent } from './likes-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class LikesResolvePagingParams implements Resolve<any> {

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

export const likesRoute: Routes = [
  {
    path: 'likes',
    component: LikesComponent,
    resolve: {
      'pagingParams': LikesResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.likes.home.title'
    }
  }, {
    path: 'likes/:id',
    component: LikesDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.likes.home.title'
    }
  }
];

export const likesPopupRoute: Routes = [
  {
    path: 'likes-new',
    component: LikesPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.likes.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'likes/:id/edit',
    component: LikesPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.likes.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'likes/:id/delete',
    component: LikesDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.likes.home.title'
    },
    outlet: 'popup'
  }
];

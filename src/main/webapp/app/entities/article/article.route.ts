import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { ArticleComponent } from './article.component';
import { ArticleDetailComponent } from './article-detail.component';
import { ArticlePopupComponent } from './article-dialog.component';
import { ArticleDeletePopupComponent } from './article-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class ArticleResolvePagingParams implements Resolve<any> {

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

export const articleRoute: Routes = [
  {
    path: 'article',
    component: ArticleComponent,
    resolve: {
      'pagingParams': ArticleResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.article.home.title'
    }
  }, {
    path: 'article/:id',
    component: ArticleDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.article.home.title'
    }
  }
];

export const articlePopupRoute: Routes = [
  {
    path: 'article-new',
    component: ArticlePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.article.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'article/:id/edit',
    component: ArticlePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.article.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'article/:id/delete',
    component: ArticleDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.article.home.title'
    },
    outlet: 'popup'
  }
];

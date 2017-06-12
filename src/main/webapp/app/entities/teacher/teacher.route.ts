import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { TeacherComponent } from './teacher.component';
import { TeacherDetailComponent } from './teacher-detail.component';
import { TeacherPopupComponent } from './teacher-dialog.component';
import { TeacherDeletePopupComponent } from './teacher-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class TeacherResolvePagingParams implements Resolve<any> {

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

export const teacherRoute: Routes = [
  {
    path: 'teacher',
    component: TeacherComponent,
    resolve: {
      'pagingParams': TeacherResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.teacher.home.title'
    }
  }, {
    path: 'teacher/:id',
    component: TeacherDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.teacher.home.title'
    }
  }
];

export const teacherPopupRoute: Routes = [
  {
    path: 'teacher-new',
    component: TeacherPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.teacher.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'teacher/:id/edit',
    component: TeacherPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.teacher.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'teacher/:id/delete',
    component: TeacherDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.teacher.home.title'
    },
    outlet: 'popup'
  }
];

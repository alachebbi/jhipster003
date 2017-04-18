import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { DossierMedicalComponent } from './dossier-medical.component';
import { DossierMedicalDetailComponent } from './dossier-medical-detail.component';
import { DossierMedicalPopupComponent } from './dossier-medical-dialog.component';
import { DossierMedicalDeletePopupComponent } from './dossier-medical-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class DossierMedicalResolvePagingParams implements Resolve<any> {

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

export const dossierMedicalRoute: Routes = [
  {
    path: 'dossier-medical',
    component: DossierMedicalComponent,
    resolve: {
      'pagingParams': DossierMedicalResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.dossierMedical.home.title'
    }
  }, {
    path: 'dossier-medical/:id',
    component: DossierMedicalDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.dossierMedical.home.title'
    }
  }
];

export const dossierMedicalPopupRoute: Routes = [
  {
    path: 'dossier-medical-new',
    component: DossierMedicalPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.dossierMedical.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'dossier-medical/:id/edit',
    component: DossierMedicalPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.dossierMedical.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'dossier-medical/:id/delete',
    component: DossierMedicalDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.dossierMedical.home.title'
    },
    outlet: 'popup'
  }
];

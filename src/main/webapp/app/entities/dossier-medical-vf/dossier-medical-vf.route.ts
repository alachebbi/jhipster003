import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { DossierMedicalVFComponent } from './dossier-medical-vf.component';
import { DossierMedicalVFDetailComponent } from './dossier-medical-vf-detail.component';
import { DossierMedicalVFPopupComponent } from './dossier-medical-vf-dialog.component';
import { DossierMedicalVFDeletePopupComponent } from './dossier-medical-vf-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class DossierMedicalVFResolvePagingParams implements Resolve<any> {

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

export const dossierMedicalVFRoute: Routes = [
  {
    path: 'dossier-medical-vf',
    component: DossierMedicalVFComponent,
    resolve: {
      'pagingParams': DossierMedicalVFResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.dossierMedicalVF.home.title'
    }
  }, {
    path: 'dossier-medical-vf/:id',
    component: DossierMedicalVFDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.dossierMedicalVF.home.title'
    }
  }
];

export const dossierMedicalVFPopupRoute: Routes = [
  {
    path: 'dossier-medical-vf-new',
    component: DossierMedicalVFPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.dossierMedicalVF.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'dossier-medical-vf/:id/edit',
    component: DossierMedicalVFPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.dossierMedicalVF.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'dossier-medical-vf/:id/delete',
    component: DossierMedicalVFDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.dossierMedicalVF.home.title'
    },
    outlet: 'popup'
  }
];

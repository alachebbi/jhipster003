import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { DosierComponent } from './dosier.component';
import { DosierDetailComponent } from './dosier-detail.component';
import { DosierPopupComponent } from './dosier-dialog.component';
import { DosierDeletePopupComponent } from './dosier-delete-dialog.component';

import { Principal } from '../../shared';


export const dosierRoute: Routes = [
  {
    path: 'dosier',
    component: DosierComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.dosier.home.title'
    }
  }, {
    path: 'dosier/:id',
    component: DosierDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.dosier.home.title'
    }
  }
];

export const dosierPopupRoute: Routes = [
  {
    path: 'dosier-new',
    component: DosierPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.dosier.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'dosier/:id/edit',
    component: DosierPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.dosier.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'dosier/:id/delete',
    component: DosierDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avancementApp.dosier.home.title'
    },
    outlet: 'popup'
  }
];

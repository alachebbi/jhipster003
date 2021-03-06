import { Component, OnInit, OnDestroy, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { Reclamation } from './reclamation.model';
import { ReclamationPopupService } from './reclamation-popup.service';
import { ReclamationService } from './reclamation.service';
import {BrowserModule} from "@angular/platform-browser";

import  { UserService} from  '../../shared/user/user.service'
import { Account, LoginModalService, Principal,LoginService } from '../../shared';

@Component({
    selector: 'jhi-reclamation-dialog',
    templateUrl: './reclamation-dialog.component.html'
})
export class ReclamationDialogComponent implements OnInit {



    account: Account;
    accounts:Account[];
    reclamation: Reclamation;
    authorities: any[];
    isSaving: boolean;
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private userService : UserService,
        private principal: Principal,
        private loginModalService: LoginModalService,
        private reclamationService: ReclamationService,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['reclamation']);
    }

    ngOnInit() {

        this.principal.identity().then((account) => {
            this.account = account;

        });
        this.registerAuthenticationSuccess();


        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    }
    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    save () {
        this.isSaving = true;
        if (this.reclamation.id !== undefined) {
            this.reclamationService.update(this.reclamation)
                .subscribe((res: Reclamation) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {

            this.reclamation.date=new Date();
            this.reclamation.etat="En atente";
            this.reclamation.recusername=this.account.firstName;
            this.reclamation.recusermail=this.account.email;
            this.reclamationService.create(this.reclamation)
                .subscribe((res: Reclamation) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', (message) => {
            this.principal.identity().then((account) => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }



    private onSaveSuccess (result: Reclamation) {
        this.eventManager.broadcast({ name: 'reclamationListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    private onSaveError (error) {
        this.isSaving = false;
        this.onError(error);
    }

    private onError (error) {
        this.alertService.error(error.message, null, null);
    }
}

@Component({
    selector: 'jhi-reclamation-popup',
    template: ''
})
export class ReclamationPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private reclamationPopupService: ReclamationPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.reclamationPopupService
                    .open(ReclamationDialogComponent, params['id']);
            } else {
                this.modalRef = this.reclamationPopupService
                    .open(ReclamationDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';
import  { UserService} from  '../../shared/user/user.service'
import { Account, LoginModalService, Principal,LoginService } from '../../shared';

import { Demandepharmaciecentrale } from './demandepharmaciecentrale.model';
import { DemandepharmaciecentralePopupService } from './demandepharmaciecentrale-popup.service';
import { DemandepharmaciecentraleService } from './demandepharmaciecentrale.service';
@Component({
    selector: 'jhi-demandepharmaciecentrale-dialog',
    templateUrl: './demandepharmaciecentrale-dialog.component.html'
})
export class DemandepharmaciecentraleDialogComponent implements OnInit {

    demandepharmaciecentrale: Demandepharmaciecentrale;
    authorities: any[];
    account: Account;
    isSaving: boolean;
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private principal: Principal,
        private alertService: AlertService,
        private demandepharmaciecentraleService: DemandepharmaciecentraleService,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['demandepharmaciecentrale']);
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
        if (this.demandepharmaciecentrale.id !== undefined) {
            this.demandepharmaciecentraleService.update(this.demandepharmaciecentrale)
                .subscribe((res: Demandepharmaciecentrale) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
           // this.demandepharmaciecentrale=new Demandepharmaciecentrale();
            this.demandepharmaciecentrale.date=new Date();
         this.demandepharmaciecentrale.mail="ala-eddine.chebbi@forsyslab.com";
         this.demandepharmaciecentrale.nompharmacien=this.account.firstName;

            this.demandepharmaciecentraleService.create(this.demandepharmaciecentrale)
                .subscribe((res: Demandepharmaciecentrale) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Demandepharmaciecentrale) {
        this.eventManager.broadcast({ name: 'demandepharmaciecentraleListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    private onSaveError (error) {
        this.isSaving = false;
        this.onError(error);
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

    private onError (error) {
        this.alertService.error(error.message, null, null);
    }
}

@Component({
    selector: 'jhi-demandepharmaciecentrale-popup',
    template: ''
})
export class DemandepharmaciecentralePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private demandepharmaciecentralePopupService: DemandepharmaciecentralePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.demandepharmaciecentralePopupService
                    .open(DemandepharmaciecentraleDialogComponent, params['id']);
            } else {
                this.modalRef = this.demandepharmaciecentralePopupService
                    .open(DemandepharmaciecentraleDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { Demande } from './demande.model';
import { DemandePopupService } from './demande-popup.service';
import { DemandeService } from './demande.service';
@Component({
    selector: 'jhi-demande-dialog',
    templateUrl: './demande-dialog.component.html'
})
export class DemandeDialogComponent implements OnInit {

    demande: Demande;
    authorities: any[];
    isSaving: boolean;
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private demandeService: DemandeService,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['demande']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    }
    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    save () {
        this.isSaving = true;
        if (this.demande.id !== undefined) {
            this.demandeService.update(this.demande)
                .subscribe((res: Demande) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.demandeService.create(this.demande)
                .subscribe((res: Demande) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Demande) {
        this.eventManager.broadcast({ name: 'demandeListModification', content: 'OK'});
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
    selector: 'jhi-demande-popup',
    template: ''
})
export class DemandePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private demandePopupService: DemandePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.demandePopupService
                    .open(DemandeDialogComponent, params['id']);
            } else {
                this.modalRef = this.demandePopupService
                    .open(DemandeDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

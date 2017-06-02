import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { Demandemedi } from './demandemedi.model';
import { DemandemediPopupService } from './demandemedi-popup.service';
import { DemandemediService } from './demandemedi.service';
@Component({
    selector: 'jhi-demandemedi-dialog',
    templateUrl: './demandemedi-dialog.component.html'
})
export class DemandemediDialogComponent implements OnInit {

    demandemedi: Demandemedi;
    authorities: any[];
    isSaving: boolean;
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private demandemediService: DemandemediService,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['demandemedi']);
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
        if (this.demandemedi.id !== undefined) {
            this.demandemediService.update(this.demandemedi)
                .subscribe((res: Demandemedi) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.demandemediService.create(this.demandemedi)
                .subscribe((res: Demandemedi) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Demandemedi) {
        this.eventManager.broadcast({ name: 'demandemediListModification', content: 'OK'});
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
    selector: 'jhi-demandemedi-popup',
    template: ''
})
export class DemandemediPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private demandemediPopupService: DemandemediPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.demandemediPopupService
                    .open(DemandemediDialogComponent, params['id']);
            } else {
                this.modalRef = this.demandemediPopupService
                    .open(DemandemediDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

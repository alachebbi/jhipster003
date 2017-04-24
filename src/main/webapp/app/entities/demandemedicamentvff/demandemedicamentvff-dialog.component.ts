import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { Demandemedicamentvff } from './demandemedicamentvff.model';
import { DemandemedicamentvffPopupService } from './demandemedicamentvff-popup.service';
import { DemandemedicamentvffService } from './demandemedicamentvff.service';

import { MedicamentService } from '../medicament/medicament.service';
import { Medicament } from '../medicament/medicament.model';
@Component({
    selector: 'jhi-demandemedicamentvff-dialog',
    templateUrl: './demandemedicamentvff-dialog.component.html'
})
export class DemandemedicamentvffDialogComponent implements OnInit {

    demandemedicamentvff: Demandemedicamentvff;
    authorities: any[];
    medicaments:Medicament[];
    isSaving: boolean;
    dem : any;
    today = new Date();
    dd: any;
    mm: any;
    yyyy: any;
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private medicamentService :MedicamentService,
        private demandemedicamentvffService: DemandemedicamentvffService,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['demandemedicamentvff']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.loadAllmed();
        this.dd = this.today.getDate();
        this.mm = this.today.getMonth()+1; //January is 0!
        this.yyyy = this.today.getFullYear();

        if(this.dd<10) {
            this.dd='0'+this.dd
        }

        if(this.mm<10) {
            this.mm='0'+this.mm
        }

        var date = this.mm+'/'+this.dd+'/'+this.yyyy;
        this.dem = { "date": date}
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    }
    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    save () {
        this.isSaving = true;
        if (this.demandemedicamentvff.id !== undefined) {
            this.demandemedicamentvffService.update(this.demandemedicamentvff)
                .subscribe((res: Demandemedicamentvff) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.demandemedicamentvffService.create(this.demandemedicamentvff)
                .subscribe((res: Demandemedicamentvff) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Demandemedicamentvff) {
        this.eventManager.broadcast({ name: 'demandemedicamentvffListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    loadAllmed() {
        this.medicamentService.query().subscribe(
            (res: Response) => {
                this.medicaments = res.json();
            },
            (res: Response) => this.onError(res.json())
        );
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
    selector: 'jhi-demandemedicamentvff-popup',
    template: ''
})
export class DemandemedicamentvffPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private demandemedicamentvffPopupService: DemandemedicamentvffPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.demandemedicamentvffPopupService
                    .open(DemandemedicamentvffDialogComponent, params['id']);
            } else {
                this.modalRef = this.demandemedicamentvffPopupService
                    .open(DemandemedicamentvffDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

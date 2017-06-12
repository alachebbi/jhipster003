import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { DemandeMedicamentVf } from './demande-medicament-vf.model';
import { DemandeMedicamentVfPopupService } from './demande-medicament-vf-popup.service';
import { DemandeMedicamentVfService } from './demande-medicament-vf.service';

import {Doctor} from "../doctor/doctor.model";
import {DoctorService} from "../doctor/doctor.service";


import { MedicamentService } from '../medicament/medicament.service';
import { Medicament } from '../medicament/medicament.model';








@Component({
    selector: 'jhi-demande-medicament-vf-dialog',
    templateUrl: './demande-medicament-vf-dialog.component.html'
})
export class DemandeMedicamentVfDialogComponent implements OnInit {

    demandeMedicamentVf: DemandeMedicamentVf;
    doctors : Doctor [];
    medicaments : Medicament [];
    authorities: any[];
    isSaving: boolean;
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private doctorService : DoctorService,
        private medicamentService :MedicamentService,
        private alertService: AlertService,
        private demandeMedicamentVfService: DemandeMedicamentVfService,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['demandeMedicamentVf']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.loadAlldoctors();
        this.loadAllmedicaments();
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    }
    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    loadAllmedicaments(){
        this.medicamentService.query().subscribe(
            (res: Response) => {
                this.medicaments = res.json();
            },
            (res: Response) => this.onError(res.json())
        );

}
    loadAlldoctors() {
        this.doctorService.query().subscribe(
            (res: Response) => {
                this.doctors = res.json();
            },
            (res: Response) => this.onError(res.json())
        );
    }
    save () {
        this.isSaving = true;
        if (this.demandeMedicamentVf.id !== undefined) {
            this.demandeMedicamentVfService.update(this.demandeMedicamentVf)
                .subscribe((res: DemandeMedicamentVf) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.demandeMedicamentVfService.create(this.demandeMedicamentVf)
                .subscribe((res: DemandeMedicamentVf) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: DemandeMedicamentVf) {
        this.eventManager.broadcast({ name: 'demandeMedicamentVfListModification', content: 'OK'});
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
    selector: 'jhi-demande-medicament-vf-popup',
    template: ''
})
export class DemandeMedicamentVfPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private demandeMedicamentVfPopupService: DemandeMedicamentVfPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.demandeMedicamentVfPopupService
                    .open(DemandeMedicamentVfDialogComponent, params['id']);
            } else {
                this.modalRef = this.demandeMedicamentVfPopupService
                    .open(DemandeMedicamentVfDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService, DataUtils } from 'ng-jhipster';


import {Doctor} from "../doctor/doctor.model";
import {DoctorService} from "../doctor/doctor.service";


import { DossierMedicalVF } from './dossier-medical-vf.model';
import { DossierMedicalVFPopupService } from './dossier-medical-vf-popup.service';
import { DossierMedicalVFService } from './dossier-medical-vf.service';
@Component({
    selector: 'jhi-dossier-medical-vf-dialog',
    templateUrl: './dossier-medical-vf-dialog.component.html'
})
export class DossierMedicalVFDialogComponent implements OnInit {

    dossierMedicalVF: DossierMedicalVF;
    doctors:Doctor[];
    authorities: any[];
    isSaving: boolean;
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private doctorService: DoctorService,
        private dataUtils: DataUtils,
        private alertService: AlertService,
        private dossierMedicalVFService: DossierMedicalVFService,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['dossierMedicalVF']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.loadAlldoc();
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    }
    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    setFileData($event, dossierMedicalVF, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            let $file = $event.target.files[0];
            if (isImage && !/^image\//.test($file.type)) {
                return;
            }
            this.dataUtils.toBase64($file, (base64Data) => {
                dossierMedicalVF[field] = base64Data;
                dossierMedicalVF[`${field}ContentType`] = $file.type;
            });
        }
    }
    loadAlldoc() {
        this.doctorService.query().subscribe(
            (res: Response) => {
                this.doctors = res.json();
            },
            (res: Response) => this.onError(res.json())
        );
    }
    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    save () {
        this.isSaving = true;
        if (this.dossierMedicalVF.id !== undefined) {
            this.dossierMedicalVFService.update(this.dossierMedicalVF)
                .subscribe((res: DossierMedicalVF) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.dossierMedicalVFService.create(this.dossierMedicalVF)
                .subscribe((res: DossierMedicalVF) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: DossierMedicalVF) {
        this.eventManager.broadcast({ name: 'dossierMedicalVFListModification', content: 'OK'});
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
    selector: 'jhi-dossier-medical-vf-popup',
    template: ''
})
export class DossierMedicalVFPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private dossierMedicalVFPopupService: DossierMedicalVFPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.dossierMedicalVFPopupService
                    .open(DossierMedicalVFDialogComponent, params['id']);
            } else {
                this.modalRef = this.dossierMedicalVFPopupService
                    .open(DossierMedicalVFDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

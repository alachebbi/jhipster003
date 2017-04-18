import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService, DataUtils } from 'ng-jhipster';

import { DossierMedical } from './dossier-medical.model';
import { DossierMedicalPopupService } from './dossier-medical-popup.service';
import { DossierMedicalService } from './dossier-medical.service';
import { DoctorService, Doctor } from  '../doctor'
@Component({
    selector: 'jhi-dossier-medical-dialog',
    templateUrl: './dossier-medical-dialog.component.html'
})
export class DossierMedicalDialogComponent implements OnInit {

    dossierMedical: DossierMedical;
    authorities: any[];
    isSaving: boolean;
    doctors:Doctor[];
    doctor:string ;
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private alertService: AlertService,
        private dossierMedicalService: DossierMedicalService,
        private eventManager: EventManager,
        private doctorService : DoctorService,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['dossierMedical']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
      this.doctorService.query().subscribe(
            (res:Response) => this.doctors = res.json())
    }
    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    setFileData($event, dossierMedical, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            let $file = $event.target.files[0];
            if (isImage && !/^image\//.test($file.type)) {
                return;
            }
            this.dataUtils.toBase64($file, (base64Data) => {
                dossierMedical[field] = base64Data;
                dossierMedical[`${field}ContentType`] = $file.type;
            });
        }
    }
    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    save () {
        this.isSaving = true;
        if (this.dossierMedical.id !== undefined) {
            this.dossierMedicalService.update(this.dossierMedical)
                .subscribe((res: DossierMedical) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.dossierMedicalService.create(this.dossierMedical)
                .subscribe((res: DossierMedical) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: DossierMedical) {
        this.eventManager.broadcast({ name: 'dossierMedicalListModification', content: 'OK'});
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
    selector: 'jhi-dossier-medical-popup',
    template: ''
})
export class DossierMedicalPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private dossierMedicalPopupService: DossierMedicalPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.dossierMedicalPopupService
                    .open(DossierMedicalDialogComponent, params['id']);
            } else {
                this.modalRef = this.dossierMedicalPopupService
                    .open(DossierMedicalDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

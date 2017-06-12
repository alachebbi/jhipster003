import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService, DataUtils } from 'ng-jhipster';

import { Pharmacie } from './pharmacie.model';
import { PharmaciePopupService } from './pharmacie-popup.service';
import { PharmacieService } from './pharmacie.service';
@Component({
    selector: 'jhi-pharmacie-dialog',
    templateUrl: './pharmacie-dialog.component.html'
})
export class PharmacieDialogComponent implements OnInit {

    pharmacie: Pharmacie;
    authorities: any[];
    isSaving: boolean;
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private alertService: AlertService,
        private pharmacieService: PharmacieService,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['pharmacie']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    }
    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    setFileData($event, pharmacie, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            let $file = $event.target.files[0];
            if (isImage && !/^image\//.test($file.type)) {
                return;
            }
            this.dataUtils.toBase64($file, (base64Data) => {
                pharmacie[field] = base64Data;
                pharmacie[`${field}ContentType`] = $file.type;
            });
        }
    }
    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    save () {
        this.isSaving = true;
        if (this.pharmacie.id !== undefined) {
            this.pharmacieService.update(this.pharmacie)
                .subscribe((res: Pharmacie) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.pharmacieService.create(this.pharmacie)
                .subscribe((res: Pharmacie) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Pharmacie) {
        this.eventManager.broadcast({ name: 'pharmacieListModification', content: 'OK'});
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
    selector: 'jhi-pharmacie-popup',
    template: ''
})
export class PharmaciePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private pharmaciePopupService: PharmaciePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.pharmaciePopupService
                    .open(PharmacieDialogComponent, params['id']);
            } else {
                this.modalRef = this.pharmaciePopupService
                    .open(PharmacieDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

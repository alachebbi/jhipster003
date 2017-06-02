import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService, DataUtils } from 'ng-jhipster';

import { Evenement } from './evenement.model';
import { EvenementPopupService } from './evenement-popup.service';
import { EvenementService } from './evenement.service';
@Component({
    selector: 'jhi-evenement-dialog',
    templateUrl: './evenement-dialog.component.html'
})
export class EvenementDialogComponent implements OnInit {

    evenement: Evenement;
    authorities: any[];
    isSaving: boolean;
    isPushed: boolean;
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private alertService: AlertService,
        private evenementService: EvenementService,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['evenement']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.isPushed = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    }
    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }
    pushed(){
        this.isPushed = true ;
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    setFileData($event, evenement, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            let $file = $event.target.files[0];
            if (isImage && !/^image\//.test($file.type)) {
                return;
            }
            this.dataUtils.toBase64($file, (base64Data) => {
                evenement[field] = base64Data;
                evenement[`${field}ContentType`] = $file.type;
            });
        }
    }
    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    save () {
        this.isSaving = true;
        if (this.evenement.id !== undefined) {
            this.evenementService.update(this.evenement)
                .subscribe((res: Evenement) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.evenementService.create(this.evenement)
                .subscribe((res: Evenement) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Evenement) {
        this.eventManager.broadcast({ name: 'evenementListModification', content: 'OK'});
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
    selector: 'jhi-evenement-popup',
    template: ''
})
export class EvenementPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private evenementPopupService: EvenementPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.evenementPopupService
                    .open(EvenementDialogComponent, params['id']);
            } else {
                this.modalRef = this.evenementPopupService
                    .open(EvenementDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

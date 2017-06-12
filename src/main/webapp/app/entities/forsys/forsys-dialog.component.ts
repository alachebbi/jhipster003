import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { Forsys } from './forsys.model';
import { ForsysPopupService } from './forsys-popup.service';
import { ForsysService } from './forsys.service';
@Component({
    selector: 'jhi-forsys-dialog',
    templateUrl: './forsys-dialog.component.html'
})
export class ForsysDialogComponent implements OnInit {

    forsys: Forsys;
    authorities: any[];
    isSaving: boolean;
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private forsysService: ForsysService,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['forsys']);
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
        if (this.forsys.id !== undefined) {
            this.forsysService.update(this.forsys)
                .subscribe((res: Forsys) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.forsysService.create(this.forsys)
                .subscribe((res: Forsys) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Forsys) {
        this.eventManager.broadcast({ name: 'forsysListModification', content: 'OK'});
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
    selector: 'jhi-forsys-popup',
    template: ''
})
export class ForsysPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private forsysPopupService: ForsysPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.forsysPopupService
                    .open(ForsysDialogComponent, params['id']);
            } else {
                this.modalRef = this.forsysPopupService
                    .open(ForsysDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

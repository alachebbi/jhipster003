import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { Dislike } from './dislike.model';
import { DislikePopupService } from './dislike-popup.service';
import { DislikeService } from './dislike.service';
@Component({
    selector: 'jhi-dislike-dialog',
    templateUrl: './dislike-dialog.component.html'
})
export class DislikeDialogComponent implements OnInit {

    dislike: Dislike;
    authorities: any[];
    isSaving: boolean;
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private dislikeService: DislikeService,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['dislike']);
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
        if (this.dislike.id !== undefined) {
            this.dislikeService.update(this.dislike)
                .subscribe((res: Dislike) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.dislikeService.create(this.dislike)
                .subscribe((res: Dislike) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Dislike) {
        this.eventManager.broadcast({ name: 'dislikeListModification', content: 'OK'});
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
    selector: 'jhi-dislike-popup',
    template: ''
})
export class DislikePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private dislikePopupService: DislikePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.dislikePopupService
                    .open(DislikeDialogComponent, params['id']);
            } else {
                this.modalRef = this.dislikePopupService
                    .open(DislikeDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

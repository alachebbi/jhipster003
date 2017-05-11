import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { Participation } from './participation.model';
import { ParticipationPopupService } from './participation-popup.service';
import { ParticipationService } from './participation.service';
@Component({
    selector: 'jhi-participation-dialog',
    templateUrl: './participation-dialog.component.html'
})
export class ParticipationDialogComponent implements OnInit {

    participation: Participation;
    authorities: any[];
    isSaving: boolean;
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private participationService: ParticipationService,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['participation']);
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
        if (this.participation.id !== undefined) {
            this.participationService.update(this.participation)
                .subscribe((res: Participation) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.participationService.create(this.participation)
                .subscribe((res: Participation) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Participation) {
        this.eventManager.broadcast({ name: 'participationListModification', content: 'OK'});
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
    selector: 'jhi-participation-popup',
    template: ''
})
export class ParticipationPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private participationPopupService: ParticipationPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.participationPopupService
                    .open(ParticipationDialogComponent, params['id']);
            } else {
                this.modalRef = this.participationPopupService
                    .open(ParticipationDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

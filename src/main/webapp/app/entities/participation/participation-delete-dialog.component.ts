import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Participation } from './participation.model';
import { ParticipationPopupService } from './participation-popup.service';
import { ParticipationService } from './participation.service';

@Component({
    selector: 'jhi-participation-delete-dialog',
    templateUrl: './participation-delete-dialog.component.html'
})
export class ParticipationDeleteDialogComponent {

    participation: Participation;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private participationService: ParticipationService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['participation']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    confirmDelete (id: number) {
        this.participationService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'participationListModification',
                content: 'Deleted an participation'
            });
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-participation-delete-popup',
    template: ''
})
export class ParticipationDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private participationPopupService: ParticipationPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.participationPopupService
                .open(ParticipationDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

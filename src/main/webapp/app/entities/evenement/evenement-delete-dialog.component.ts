import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Evenement } from './evenement.model';
import { EvenementPopupService } from './evenement-popup.service';
import { EvenementService } from './evenement.service';

@Component({
    selector: 'jhi-evenement-delete-dialog',
    templateUrl: './evenement-delete-dialog.component.html'
})
export class EvenementDeleteDialogComponent {

    evenement: Evenement;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private evenementService: EvenementService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['evenement']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    confirmDelete (id: number) {
        this.evenementService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'evenementListModification',
                content: 'Deleted an evenement'
            });
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-evenement-delete-popup',
    template: ''
})
export class EvenementDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private evenementPopupService: EvenementPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.evenementPopupService
                .open(EvenementDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

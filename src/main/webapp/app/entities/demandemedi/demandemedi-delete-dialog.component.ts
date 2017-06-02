import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Demandemedi } from './demandemedi.model';
import { DemandemediPopupService } from './demandemedi-popup.service';
import { DemandemediService } from './demandemedi.service';

@Component({
    selector: 'jhi-demandemedi-delete-dialog',
    templateUrl: './demandemedi-delete-dialog.component.html'
})
export class DemandemediDeleteDialogComponent {

    demandemedi: Demandemedi;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private demandemediService: DemandemediService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['demandemedi']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    confirmDelete (id: number) {
        this.demandemediService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'demandemediListModification',
                content: 'Deleted an demandemedi'
            });
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-demandemedi-delete-popup',
    template: ''
})
export class DemandemediDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private demandemediPopupService: DemandemediPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.demandemediPopupService
                .open(DemandemediDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

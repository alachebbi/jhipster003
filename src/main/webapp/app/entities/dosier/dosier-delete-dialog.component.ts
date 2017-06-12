import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Dosier } from './dosier.model';
import { DosierPopupService } from './dosier-popup.service';
import { DosierService } from './dosier.service';

@Component({
    selector: 'jhi-dosier-delete-dialog',
    templateUrl: './dosier-delete-dialog.component.html'
})
export class DosierDeleteDialogComponent {

    dosier: Dosier;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private dosierService: DosierService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['dosier', 'antecedents']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    confirmDelete (id: number) {
        this.dosierService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'dosierListModification',
                content: 'Deleted an dosier'
            });
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-dosier-delete-popup',
    template: ''
})
export class DosierDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private dosierPopupService: DosierPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.dosierPopupService
                .open(DosierDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

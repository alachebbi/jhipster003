import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Pharmacie } from './pharmacie.model';
import { PharmaciePopupService } from './pharmacie-popup.service';
import { PharmacieService } from './pharmacie.service';

@Component({
    selector: 'jhi-pharmacie-delete-dialog',
    templateUrl: './pharmacie-delete-dialog.component.html'
})
export class PharmacieDeleteDialogComponent {

    pharmacie: Pharmacie;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private pharmacieService: PharmacieService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['pharmacie']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    confirmDelete (id: number) {
        this.pharmacieService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'pharmacieListModification',
                content: 'Deleted an pharmacie'
            });
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-pharmacie-delete-popup',
    template: ''
})
export class PharmacieDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private pharmaciePopupService: PharmaciePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.pharmaciePopupService
                .open(PharmacieDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

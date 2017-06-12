import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Demande } from './demande.model';
import { DemandePopupService } from './demande-popup.service';
import { DemandeService } from './demande.service';

@Component({
    selector: 'jhi-demande-delete-dialog',
    templateUrl: './demande-delete-dialog.component.html'
})
export class DemandeDeleteDialogComponent {

    demande: Demande;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private demandeService: DemandeService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['demande']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    confirmDelete (id: number) {
        this.demandeService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'demandeListModification',
                content: 'Deleted an demande'
            });
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-demande-delete-popup',
    template: ''
})
export class DemandeDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private demandePopupService: DemandePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.demandePopupService
                .open(DemandeDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

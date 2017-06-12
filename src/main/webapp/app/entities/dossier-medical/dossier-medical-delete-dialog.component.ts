import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { DossierMedical } from './dossier-medical.model';
import { DossierMedicalPopupService } from './dossier-medical-popup.service';
import { DossierMedicalService } from './dossier-medical.service';

@Component({
    selector: 'jhi-dossier-medical-delete-dialog',
    templateUrl: './dossier-medical-delete-dialog.component.html'
})
export class DossierMedicalDeleteDialogComponent {

    dossierMedical: DossierMedical;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private dossierMedicalService: DossierMedicalService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['dossierMedical']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    confirmDelete (id: number) {
        this.dossierMedicalService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'dossierMedicalListModification',
                content: 'Deleted an dossierMedical'
            });
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-dossier-medical-delete-popup',
    template: ''
})
export class DossierMedicalDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private dossierMedicalPopupService: DossierMedicalPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.dossierMedicalPopupService
                .open(DossierMedicalDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

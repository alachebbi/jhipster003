import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { DossierMedicalVF } from './dossier-medical-vf.model';
import { DossierMedicalVFPopupService } from './dossier-medical-vf-popup.service';
import { DossierMedicalVFService } from './dossier-medical-vf.service';

@Component({
    selector: 'jhi-dossier-medical-vf-delete-dialog',
    templateUrl: './dossier-medical-vf-delete-dialog.component.html'
})
export class DossierMedicalVFDeleteDialogComponent {

    dossierMedicalVF: DossierMedicalVF;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private dossierMedicalVFService: DossierMedicalVFService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['dossierMedicalVF']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    confirmDelete (id: number) {
        this.dossierMedicalVFService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'dossierMedicalVFListModification',
                content: 'Deleted an dossierMedicalVF'
            });
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-dossier-medical-vf-delete-popup',
    template: ''
})
export class DossierMedicalVFDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private dossierMedicalVFPopupService: DossierMedicalVFPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.dossierMedicalVFPopupService
                .open(DossierMedicalVFDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

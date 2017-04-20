import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { DemandeMedicamentVf } from './demande-medicament-vf.model';
import { DemandeMedicamentVfPopupService } from './demande-medicament-vf-popup.service';
import { DemandeMedicamentVfService } from './demande-medicament-vf.service';

@Component({
    selector: 'jhi-demande-medicament-vf-delete-dialog',
    templateUrl: './demande-medicament-vf-delete-dialog.component.html'
})
export class DemandeMedicamentVfDeleteDialogComponent {

    demandeMedicamentVf: DemandeMedicamentVf;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private demandeMedicamentVfService: DemandeMedicamentVfService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['demandeMedicamentVf']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    confirmDelete (id: number) {
        this.demandeMedicamentVfService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'demandeMedicamentVfListModification',
                content: 'Deleted an demandeMedicamentVf'
            });
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-demande-medicament-vf-delete-popup',
    template: ''
})
export class DemandeMedicamentVfDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private demandeMedicamentVfPopupService: DemandeMedicamentVfPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.demandeMedicamentVfPopupService
                .open(DemandeMedicamentVfDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

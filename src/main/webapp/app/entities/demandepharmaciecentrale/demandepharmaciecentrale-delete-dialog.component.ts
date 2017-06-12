import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Demandepharmaciecentrale } from './demandepharmaciecentrale.model';
import { DemandepharmaciecentralePopupService } from './demandepharmaciecentrale-popup.service';
import { DemandepharmaciecentraleService } from './demandepharmaciecentrale.service';

@Component({
    selector: 'jhi-demandepharmaciecentrale-delete-dialog',
    templateUrl: './demandepharmaciecentrale-delete-dialog.component.html'
})
export class DemandepharmaciecentraleDeleteDialogComponent {

    demandepharmaciecentrale: Demandepharmaciecentrale;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private demandepharmaciecentraleService: DemandepharmaciecentraleService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['demandepharmaciecentrale']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    confirmDelete (id: number) {
        this.demandepharmaciecentraleService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'demandepharmaciecentraleListModification',
                content: 'Deleted an demandepharmaciecentrale'
            });
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-demandepharmaciecentrale-delete-popup',
    template: ''
})
export class DemandepharmaciecentraleDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private demandepharmaciecentralePopupService: DemandepharmaciecentralePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.demandepharmaciecentralePopupService
                .open(DemandepharmaciecentraleDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

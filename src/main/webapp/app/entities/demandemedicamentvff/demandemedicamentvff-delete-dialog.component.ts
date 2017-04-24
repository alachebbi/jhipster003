import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Demandemedicamentvff } from './demandemedicamentvff.model';
import { DemandemedicamentvffPopupService } from './demandemedicamentvff-popup.service';
import { DemandemedicamentvffService } from './demandemedicamentvff.service';

@Component({
    selector: 'jhi-demandemedicamentvff-delete-dialog',
    templateUrl: './demandemedicamentvff-delete-dialog.component.html'
})
export class DemandemedicamentvffDeleteDialogComponent {

    demandemedicamentvff: Demandemedicamentvff;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private demandemedicamentvffService: DemandemedicamentvffService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['demandemedicamentvff']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    confirmDelete (id: number) {
        this.demandemedicamentvffService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'demandemedicamentvffListModification',
                content: 'Deleted an demandemedicamentvff'
            });
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-demandemedicamentvff-delete-popup',
    template: ''
})
export class DemandemedicamentvffDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private demandemedicamentvffPopupService: DemandemedicamentvffPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.demandemedicamentvffPopupService
                .open(DemandemedicamentvffDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

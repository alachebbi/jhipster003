import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Forsys } from './forsys.model';
import { ForsysPopupService } from './forsys-popup.service';
import { ForsysService } from './forsys.service';

@Component({
    selector: 'jhi-forsys-delete-dialog',
    templateUrl: './forsys-delete-dialog.component.html'
})
export class ForsysDeleteDialogComponent {

    forsys: Forsys;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private forsysService: ForsysService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['forsys']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    confirmDelete (id: number) {
        this.forsysService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'forsysListModification',
                content: 'Deleted an forsys'
            });
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-forsys-delete-popup',
    template: ''
})
export class ForsysDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private forsysPopupService: ForsysPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.forsysPopupService
                .open(ForsysDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

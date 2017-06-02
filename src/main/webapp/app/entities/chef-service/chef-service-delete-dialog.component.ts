import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { ChefService } from './chef-service.model';
import { ChefServicePopupService } from './chef-service-popup.service';
import { ChefServiceService } from './chef-service.service';

@Component({
    selector: 'jhi-chef-service-delete-dialog',
    templateUrl: './chef-service-delete-dialog.component.html'
})
export class ChefServiceDeleteDialogComponent {

    chefService: ChefService;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private chefServiceService: ChefServiceService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['chefService']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    confirmDelete (id: number) {
        this.chefServiceService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'chefServiceListModification',
                content: 'Deleted an chefService'
            });
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-chef-service-delete-popup',
    template: ''
})
export class ChefServiceDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private chefServicePopupService: ChefServicePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.chefServicePopupService
                .open(ChefServiceDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

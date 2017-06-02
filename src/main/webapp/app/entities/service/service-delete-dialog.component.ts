import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Service } from './service.model';
import { ServicePopupService } from './service-popup.service';
import { ServiceService } from './service.service';

@Component({
    selector: 'jhi-service-delete-dialog',
    templateUrl: './service-delete-dialog.component.html'
})
export class ServiceDeleteDialogComponent {

    service: Service;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private serviceService: ServiceService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['service']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    confirmDelete (id: number) {
        this.serviceService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'serviceListModification',
                content: 'Deleted an service'
            });
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-service-delete-popup',
    template: ''
})
export class ServiceDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private servicePopupService: ServicePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.servicePopupService
                .open(ServiceDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

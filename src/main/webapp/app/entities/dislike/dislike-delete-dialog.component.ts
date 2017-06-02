import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Dislike } from './dislike.model';
import { DislikePopupService } from './dislike-popup.service';
import { DislikeService } from './dislike.service';

@Component({
    selector: 'jhi-dislike-delete-dialog',
    templateUrl: './dislike-delete-dialog.component.html'
})
export class DislikeDeleteDialogComponent {

    dislike: Dislike;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private dislikeService: DislikeService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['dislike']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    confirmDelete (id: number) {
        this.dislikeService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'dislikeListModification',
                content: 'Deleted an dislike'
            });
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-dislike-delete-popup',
    template: ''
})
export class DislikeDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private dislikePopupService: DislikePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.dislikePopupService
                .open(DislikeDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Teacher } from './teacher.model';
import { TeacherPopupService } from './teacher-popup.service';
import { TeacherService } from './teacher.service';

@Component({
    selector: 'jhi-teacher-delete-dialog',
    templateUrl: './teacher-delete-dialog.component.html'
})
export class TeacherDeleteDialogComponent {

    teacher: Teacher;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private teacherService: TeacherService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['teacher']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    confirmDelete (id: number) {
        this.teacherService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'teacherListModification',
                content: 'Deleted an teacher'
            });
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-teacher-delete-popup',
    template: ''
})
export class TeacherDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private teacherPopupService: TeacherPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.teacherPopupService
                .open(TeacherDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

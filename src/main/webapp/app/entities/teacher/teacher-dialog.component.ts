import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { Teacher } from './teacher.model';
import { TeacherPopupService } from './teacher-popup.service';
import { TeacherService } from './teacher.service';
@Component({
    selector: 'jhi-teacher-dialog',
    templateUrl: './teacher-dialog.component.html'
})
export class TeacherDialogComponent implements OnInit {

    teacher: Teacher;
    authorities: any[];
    isSaving: boolean;
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private teacherService: TeacherService,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['teacher']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    }
    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    save () {
        this.isSaving = true;
        if (this.teacher.id !== undefined) {
            this.teacherService.update(this.teacher)
                .subscribe((res: Teacher) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.teacherService.create(this.teacher)
                .subscribe((res: Teacher) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Teacher) {
        this.eventManager.broadcast({ name: 'teacherListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    private onSaveError (error) {
        this.isSaving = false;
        this.onError(error);
    }

    private onError (error) {
        this.alertService.error(error.message, null, null);
    }
}

@Component({
    selector: 'jhi-teacher-popup',
    template: ''
})
export class TeacherPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private teacherPopupService: TeacherPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.teacherPopupService
                    .open(TeacherDialogComponent, params['id']);
            } else {
                this.modalRef = this.teacherPopupService
                    .open(TeacherDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

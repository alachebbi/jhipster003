import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { Teacher } from './teacher.model';
import { TeacherService } from './teacher.service';

@Component({
    selector: 'jhi-teacher-detail',
    templateUrl: './teacher-detail.component.html'
})
export class TeacherDetailComponent implements OnInit, OnDestroy {

    teacher: Teacher;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private teacherService: TeacherService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['teacher']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.teacherService.find(id).subscribe(teacher => {
            this.teacher = teacher;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}

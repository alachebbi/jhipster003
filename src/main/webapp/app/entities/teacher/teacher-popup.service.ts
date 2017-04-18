import { Injectable, Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Teacher } from './teacher.model';
import { TeacherService } from './teacher.service';
@Injectable()
export class TeacherPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private teacherService: TeacherService
    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.teacherService.find(id).subscribe(teacher => {
                this.teacherModalRef(component, teacher);
            });
        } else {
            return this.teacherModalRef(component, new Teacher());
        }
    }

    teacherModalRef(component: Component, teacher: Teacher): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.teacher = teacher;
        modalRef.result.then(result => {
            console.log(`Closed with: ${result}`);
            this.isOpen = false;
        }, (reason) => {
            console.log(`Dismissed ${reason}`);
            this.isOpen = false;
        });
        return modalRef;
    }
}

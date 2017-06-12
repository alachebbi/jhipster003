import { Injectable, Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Demandemedi } from './demandemedi.model';
import { DemandemediService } from './demandemedi.service';
@Injectable()
export class DemandemediPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private demandemediService: DemandemediService
    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.demandemediService.find(id).subscribe(demandemedi => {
                if (demandemedi.date) {
                    demandemedi.date = {
                        year: demandemedi.date.getFullYear(),
                        month: demandemedi.date.getMonth() + 1,
                        day: demandemedi.date.getDate()
                    };
                }
                this.demandemediModalRef(component, demandemedi);
            });
        } else {
            return this.demandemediModalRef(component, new Demandemedi());
        }
    }

    demandemediModalRef(component: Component, demandemedi: Demandemedi): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.demandemedi = demandemedi;
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

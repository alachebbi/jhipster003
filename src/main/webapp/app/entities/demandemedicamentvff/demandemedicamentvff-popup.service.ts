import { Injectable, Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Demandemedicamentvff } from './demandemedicamentvff.model';
import { DemandemedicamentvffService } from './demandemedicamentvff.service';
@Injectable()
export class DemandemedicamentvffPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private demandemedicamentvffService: DemandemedicamentvffService
    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.demandemedicamentvffService.find(id).subscribe(demandemedicamentvff => {
                if (demandemedicamentvff.date) {
                    demandemedicamentvff.date = {
                        year: demandemedicamentvff.date.getFullYear(),
                        month: demandemedicamentvff.date.getMonth() + 1,
                        day: demandemedicamentvff.date.getDate()
                    };
                }
                this.demandemedicamentvffModalRef(component, demandemedicamentvff);
            });
        } else {
            return this.demandemedicamentvffModalRef(component, new Demandemedicamentvff());
        }
    }

    demandemedicamentvffModalRef(component: Component, demandemedicamentvff: Demandemedicamentvff): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.demandemedicamentvff = demandemedicamentvff;
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

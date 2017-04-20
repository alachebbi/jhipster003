import { Injectable, Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { DemandeMedicamentVf } from './demande-medicament-vf.model';
import { DemandeMedicamentVfService } from './demande-medicament-vf.service';
@Injectable()
export class DemandeMedicamentVfPopupService {
    private isOpen = false;
    constructor (
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private demandeMedicamentVfService: DemandeMedicamentVfService
    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.demandeMedicamentVfService.find(id).subscribe(demandeMedicamentVf => {
                demandeMedicamentVf.date = this.datePipe.transform(demandeMedicamentVf.date, 'yyyy-MM-ddThh:mm');
                this.demandeMedicamentVfModalRef(component, demandeMedicamentVf);
            });
        } else {
            return this.demandeMedicamentVfModalRef(component, new DemandeMedicamentVf());
        }
    }

    demandeMedicamentVfModalRef(component: Component, demandeMedicamentVf: DemandeMedicamentVf): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.demandeMedicamentVf = demandeMedicamentVf;
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

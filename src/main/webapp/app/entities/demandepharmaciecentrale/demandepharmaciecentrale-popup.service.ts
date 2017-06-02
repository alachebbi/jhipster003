import { Injectable, Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Demandepharmaciecentrale } from './demandepharmaciecentrale.model';
import { DemandepharmaciecentraleService } from './demandepharmaciecentrale.service';
@Injectable()
export class DemandepharmaciecentralePopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private demandepharmaciecentraleService: DemandepharmaciecentraleService
    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.demandepharmaciecentraleService.find(id).subscribe(demandepharmaciecentrale => {
                if (demandepharmaciecentrale.date) {
                    demandepharmaciecentrale.date = {
                        year: demandepharmaciecentrale.date.getFullYear(),
                        month: demandepharmaciecentrale.date.getMonth() + 1,
                        day: demandepharmaciecentrale.date.getDate()
                    };
                }
                this.demandepharmaciecentraleModalRef(component, demandepharmaciecentrale);
            });
        } else {
            return this.demandepharmaciecentraleModalRef(component, new Demandepharmaciecentrale());
        }
    }

    demandepharmaciecentraleModalRef(component: Component, demandepharmaciecentrale: Demandepharmaciecentrale): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.demandepharmaciecentrale = demandepharmaciecentrale;
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

import { Injectable, Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Evenement } from './evenement.model';
import { EvenementService } from './evenement.service';
@Injectable()
export class EvenementPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private evenementService: EvenementService
    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.evenementService.find(id).subscribe(evenement => {
                if (evenement.date) {
                    evenement.date = {
                        year: evenement.date.getFullYear(),
                        month: evenement.date.getMonth() + 1,
                        day: evenement.date.getDate()
                    };
                }
                this.evenementModalRef(component, evenement);
            });
        } else {
            return this.evenementModalRef(component, new Evenement());
        }
    }

    evenementModalRef(component: Component, evenement: Evenement): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.evenement = evenement;
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

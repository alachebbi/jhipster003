import { Injectable, Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Demande } from './demande.model';
import { DemandeService } from './demande.service';
@Injectable()
export class DemandePopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private demandeService: DemandeService
    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.demandeService.find(id).subscribe(demande => {
                if (demande.date) {
                    demande.date = {
                        year: demande.date.getFullYear(),
                        month: demande.date.getMonth() + 1,
                        day: demande.date.getDate()
                    };
                }
                this.demandeModalRef(component, demande);
            });
        } else {
            return this.demandeModalRef(component, new Demande());
        }
    }

    demandeModalRef(component: Component, demande: Demande): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.demande = demande;
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

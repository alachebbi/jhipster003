import { Injectable, Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Pharmacie } from './pharmacie.model';
import { PharmacieService } from './pharmacie.service';
@Injectable()
export class PharmaciePopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private pharmacieService: PharmacieService
    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.pharmacieService.find(id).subscribe(pharmacie => {
                if (pharmacie.datedenaissance) {
                    pharmacie.datedenaissance = {
                        year: pharmacie.datedenaissance.getFullYear(),
                        month: pharmacie.datedenaissance.getMonth() + 1,
                        day: pharmacie.datedenaissance.getDate()
                    };
                }
                this.pharmacieModalRef(component, pharmacie);
            });
        } else {
            return this.pharmacieModalRef(component, new Pharmacie());
        }
    }

    pharmacieModalRef(component: Component, pharmacie: Pharmacie): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.pharmacie = pharmacie;
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

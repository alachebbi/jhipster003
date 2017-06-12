import { Injectable, Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Dosier } from './dosier.model';
import { DosierService } from './dosier.service';
@Injectable()
export class DosierPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private dosierService: DosierService
    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.dosierService.find(id).subscribe(dosier => {
                if (dosier.date) {
                    dosier.date = {
                        year: dosier.date.getFullYear(),
                        month: dosier.date.getMonth() + 1,
                        day: dosier.date.getDate()
                    };
                }
                this.dosierModalRef(component, dosier);
            });
        } else {
            return this.dosierModalRef(component, new Dosier());
        }
    }

    dosierModalRef(component: Component, dosier: Dosier): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.dosier = dosier;
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

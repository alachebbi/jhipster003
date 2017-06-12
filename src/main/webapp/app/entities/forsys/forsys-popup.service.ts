import { Injectable, Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Forsys } from './forsys.model';
import { ForsysService } from './forsys.service';
@Injectable()
export class ForsysPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private forsysService: ForsysService
    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.forsysService.find(id).subscribe(forsys => {
                this.forsysModalRef(component, forsys);
            });
        } else {
            return this.forsysModalRef(component, new Forsys());
        }
    }

    forsysModalRef(component: Component, forsys: Forsys): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.forsys = forsys;
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

import { Injectable, Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Service } from './service.model';
import { ServiceService } from './service.service';
@Injectable()
export class ServicePopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private serviceService: ServiceService
    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.serviceService.find(id).subscribe(service => {
                this.serviceModalRef(component, service);
            });
        } else {
            return this.serviceModalRef(component, new Service());
        }
    }

    serviceModalRef(component: Component, service: Service): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.service = service;
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

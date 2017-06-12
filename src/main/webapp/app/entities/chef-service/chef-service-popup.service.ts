import { Injectable, Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ChefService } from './chef-service.model';
import { ChefServiceService } from './chef-service.service';
@Injectable()
export class ChefServicePopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private chefServiceService: ChefServiceService
    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.chefServiceService.find(id).subscribe(chefService => {
                if (chefService.datedenaissance) {
                    chefService.datedenaissance = {
                        year: chefService.datedenaissance.getFullYear(),
                        month: chefService.datedenaissance.getMonth() + 1,
                        day: chefService.datedenaissance.getDate()
                    };
                }
                this.chefServiceModalRef(component, chefService);
            });
        } else {
            return this.chefServiceModalRef(component, new ChefService());
        }
    }

    chefServiceModalRef(component: Component, chefService: ChefService): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.chefService = chefService;
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

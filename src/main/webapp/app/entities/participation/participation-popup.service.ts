import { Injectable, Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Participation } from './participation.model';
import { ParticipationService } from './participation.service';
@Injectable()
export class ParticipationPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private participationService: ParticipationService
    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.participationService.find(id).subscribe(participation => {
                this.participationModalRef(component, participation);
            });
        } else {
            return this.participationModalRef(component, new Participation());
        }
    }

    participationModalRef(component: Component, participation: Participation): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.participation = participation;
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

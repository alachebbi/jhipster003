import { Injectable, Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Dislike } from './dislike.model';
import { DislikeService } from './dislike.service';
@Injectable()
export class DislikePopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private dislikeService: DislikeService
    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.dislikeService.find(id).subscribe(dislike => {
                this.dislikeModalRef(component, dislike);
            });
        } else {
            return this.dislikeModalRef(component, new Dislike());
        }
    }

    dislikeModalRef(component: Component, dislike: Dislike): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.dislike = dislike;
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

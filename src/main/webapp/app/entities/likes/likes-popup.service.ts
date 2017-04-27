import { Injectable, Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Likes } from './likes.model';
import { LikesService } from './likes.service';
@Injectable()
export class LikesPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private likesService: LikesService
    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.likesService.find(id).subscribe(likes => {
                this.likesModalRef(component, likes);
            });
        } else {
            return this.likesModalRef(component, new Likes());
        }
    }

    likesModalRef(component: Component, likes: Likes): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.likes = likes;
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

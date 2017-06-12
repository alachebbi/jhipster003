import { Injectable, Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DossierMedical } from './dossier-medical.model';
import { DossierMedicalService } from './dossier-medical.service';
@Injectable()
export class DossierMedicalPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private dossierMedicalService: DossierMedicalService
    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.dossierMedicalService.find(id).subscribe(dossierMedical => {
                if (dossierMedical.datedenaissance) {
                    dossierMedical.datedenaissance = {
                        year: dossierMedical.datedenaissance.getFullYear(),
                        month: dossierMedical.datedenaissance.getMonth() + 1,
                        day: dossierMedical.datedenaissance.getDate()
                    };
                }
                this.dossierMedicalModalRef(component, dossierMedical);
            });
        } else {
            return this.dossierMedicalModalRef(component, new DossierMedical());
        }
    }

    dossierMedicalModalRef(component: Component, dossierMedical: DossierMedical): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.dossierMedical = dossierMedical;
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

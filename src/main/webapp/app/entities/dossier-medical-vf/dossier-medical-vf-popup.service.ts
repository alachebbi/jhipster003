import { Injectable, Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DossierMedicalVF } from './dossier-medical-vf.model';
import { DossierMedicalVFService } from './dossier-medical-vf.service';
@Injectable()
export class DossierMedicalVFPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private dossierMedicalVFService: DossierMedicalVFService
    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.dossierMedicalVFService.find(id).subscribe(dossierMedicalVF => {
                if (dossierMedicalVF.datenaissance) {
                    dossierMedicalVF.datenaissance = {
                        year: dossierMedicalVF.datenaissance.getFullYear(),
                        month: dossierMedicalVF.datenaissance.getMonth() + 1,
                        day: dossierMedicalVF.datenaissance.getDate()
                    };
                }
                this.dossierMedicalVFModalRef(component, dossierMedicalVF);
            });
        } else {
            return this.dossierMedicalVFModalRef(component, new DossierMedicalVF());
        }
    }

    dossierMedicalVFModalRef(component: Component, dossierMedicalVF: DossierMedicalVF): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.dossierMedicalVF = dossierMedicalVF;
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

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService, DataUtils } from 'ng-jhipster';

import {Servicemedical} from "../servicemedical/servicemedical.model";
import {ServicemedicalService} from "../servicemedical/servicemedical.service";

import { ChefService } from './chef-service.model';
import { ChefServicePopupService } from './chef-service-popup.service';
import { ChefServiceService } from './chef-service.service';
@Component({
    selector: 'jhi-chef-service-dialog',
    templateUrl: './chef-service-dialog.component.html'
})
export class ChefServiceDialogComponent implements OnInit {

    chefService: ChefService;
    servicemedicals:Servicemedical[];
    servicemedical:Servicemedical;
    services:Servicemedical[];
    authorities: any[];
    isSaving: boolean;
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private servicemedicalService: ServicemedicalService,
        private dataUtils: DataUtils,
        private alertService: AlertService,
        private chefServiceService: ChefServiceService,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['chefService']);
    }

    ngOnInit() {
        this.isSaving = false;
        //this.loadAllserv();
        this.loadService();
       this.loadAllserv();

        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    }
    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }



    loadService() {
        this.servicemedicalService.query().subscribe(
            (res: Response) => {
                this.servicemedicals = res.json().filter(servicemedical =>servicemedical.chef==null);
            },
            (res: Response) => this.onError(res.json())
        );

    }
    setFileData($event, chefService, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            let $file = $event.target.files[0];
            if (isImage && !/^image\//.test($file.type)) {
                return;
            }
            this.dataUtils.toBase64($file, (base64Data) => {
                chefService[field] = base64Data;
                chefService[`${field}ContentType`] = $file.type;
            });
        }
    }
    modifierservicechef(){
        this.services.forEach((item,index)=>{
                this.servicemedicalService.find(this.chefService.servicemedi)
                    .subscribe(
                        servicemedical=>{
                            this.servicemedical.chef==this.chefService.nometprenom;


                                this.servicemedicalService.update(this.servicemedical);

                        }
                    );
            }
        );
    }
    loadAllserv() {
        this.servicemedicalService.query().subscribe(
            (res: Response) => {
                this.services = res.json();
            },
            (res: Response) => this.onError(res.json())
        );
    }
    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    save () {
        this.isSaving = true;
        if (this.chefService.id !== undefined) {
            this.chefServiceService.update(this.chefService)
                .subscribe((res: ChefService) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.chefServiceService.create(this.chefService)
                .subscribe((res: ChefService) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
            this.modifierservicechef();
        }
    }

    private onSaveSuccess (result: ChefService) {
        this.eventManager.broadcast({ name: 'chefServiceListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    private onSaveError (error) {
        this.isSaving = false;
        this.onError(error);
    }

    private onError (error) {
        this.alertService.error(error.message, null, null);
    }
}

@Component({
    selector: 'jhi-chef-service-popup',
    template: ''
})
export class ChefServicePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private chefServicePopupService: ChefServicePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.chefServicePopupService
                    .open(ChefServiceDialogComponent, params['id']);
            } else {
                this.modalRef = this.chefServicePopupService
                    .open(ChefServiceDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { EventManager, ParseLinks, PaginationUtil, JhiLanguageService, AlertService } from 'ng-jhipster';

import { Demandemedicamentvff } from './demandemedicamentvff.model';
import { DemandemedicamentvffService } from './demandemedicamentvff.service';
import { ITEMS_PER_PAGE, Principal } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

import { MedicamentService } from '../medicament/medicament.service';
import { Medicament } from '../medicament/medicament.model';

@Component({
    selector: 'jhi-demandemedicamentvff',
    templateUrl: './demandemedicamentvff.component.html'
})
export class DemandemedicamentvffComponent implements OnInit, OnDestroy {

currentAccount: any;
    demandemedicamentvffs: Demandemedicamentvff[];
    demandemedicamentvff: Demandemedicamentvff;
    error: any;
    medicaments : Medicament [];
    success: any;
    eventSubscriber: Subscription;
    routeData: any;
    links: any;
    totalItems: any;
    queryCount: any;
    itemsPerPage: any;
    page: any;
    predicate: any;
    previousPage: any;
    reverse: any;
    isSaving: boolean;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private demandemedicamentvffService: DemandemedicamentvffService,
        private medicamentService :MedicamentService,
        private parseLinks: ParseLinks,
        private alertService: AlertService,
        private principal: Principal,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private eventManager: EventManager,
        private paginationUtil: PaginationUtil,
        private paginationConfig: PaginationConfig
    ) {
        this.itemsPerPage = ITEMS_PER_PAGE;
        this.routeData = this.activatedRoute.data.subscribe(data => {
            this.page = data['pagingParams'].page;
            this.previousPage = data['pagingParams'].page;
            this.reverse = data['pagingParams'].ascending;
            this.predicate = data['pagingParams'].predicate;
        });
        this.jhiLanguageService.setLocations(['demandemedicamentvff']);
    }

    loadAll() {
        this.demandemedicamentvffService.query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort()}).subscribe(
            (res: Response) => this.onSuccess(res.json(), res.headers),
            (res: Response) => this.onError(res.json())
        );
    }
    loadPage (page: number) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    }
    transition() {
        this.router.navigate(['/demandemedicamentvff'], {queryParams:
            {
                page: this.page,
                size: this.itemsPerPage,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
        });
        this.loadAll();
    }

    clear() {
        this.page = 0;
        this.router.navigate(['/demandemedicamentvff', {
            page: this.page,
            sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
        }]);
        this.loadAll();
    }
    Accepter(Demandemedicamentvff,Medicament) {
        Demandemedicamentvff.etat = "Acceptée";
        this.demandemedicamentvffService.update(Demandemedicamentvff).subscribe((res: Demandemedicamentvff) => this.onSaveSuccess(res),
            (res: Response) => this.onError(res.json()));





        this.medicamentService.findbyname(Demandemedicamentvff.medicamentid)
            .subscribe(med => {


                        med.quantity -=  Demandemedicamentvff.quatite;
                        this.medicamentService.modifier(med).subscribe((res: Medicament) => this.onSaveSuccess(res),
                            (res: Response) => this.onError(res.json()));


                });
        this.loadAccepter();


    }

    loadAccepter() {
        this.demandemedicamentvffs.forEach((item,index)=>{
                this.demandemedicamentvffService.find(item.id)
                    .subscribe(
                        demandemedicamentvff=>{
                            if (demandemedicamentvff.etat !== "en attente " )
                            {
                                document.getElementById("l" + index).setAttribute("disabled","disabled")
                                document.getElementById("l" + index).style.opacity="0.3"
                                document.getElementById("k" + index).setAttribute("disabled","disabled")
                                document.getElementById("k" + index).style.opacity="0.3"

                                //style.opacity="0.3"
                                // l.disabled=true;

                            }
                        }
                    );
            }
        );
    }


    private onSaveSuccess (result: Demandemedicamentvff) {
        this.eventManager.broadcast({ name: 'demandeModification', content: 'OK'});
        this.isSaving = false;


    }
    private onSaveSuccess2 (result: Medicament) {
        this.eventManager.broadcast({ name: 'demandeModification', content: 'OK'});
        this.isSaving = false;


    }
    loadAllmed() {
        this.medicamentService.query().subscribe(
            (res: Response) => {
                this.medicaments = res.json();
            },
            (res: Response) => this.onError(res.json())
        );
    }
    Refuser(Demandemedicamentvff){
        Demandemedicamentvff.etat="Refusée";
        this.demandemedicamentvffService.update(Demandemedicamentvff).subscribe((res: Demandemedicamentvff) => this.onSaveSuccess2(res),
            (res: Response) => this.onError(res.json()));
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInDemandemedicamentvffs();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId (index: number, item: Demandemedicamentvff) {
        return item.id;
    }



    registerChangeInDemandemedicamentvffs() {
        this.eventSubscriber = this.eventManager.subscribe('demandemedicamentvffListModification', (response) => this.loadAll());
    }

    sort () {
        let result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }

    private onSuccess (data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = headers.get('X-Total-Count');
        this.queryCount = this.totalItems;
        // this.page = pagingParams.page;
        this.demandemedicamentvffs = data;
        this.loadAccepter();

    }

    private onError (error) {
        this.alertService.error(error.message, null, null);
    }
}

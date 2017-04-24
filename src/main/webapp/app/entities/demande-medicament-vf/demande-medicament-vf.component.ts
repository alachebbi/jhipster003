import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { EventManager, ParseLinks, PaginationUtil, JhiLanguageService, AlertService } from 'ng-jhipster';

import { DemandeMedicamentVf } from './demande-medicament-vf.model';
import { DemandeMedicamentVfService } from './demande-medicament-vf.service';
import { ITEMS_PER_PAGE, Principal } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';
import { NgbModalRef} from "@ng-bootstrap/ng-bootstrap";


import { MedicamentService } from '../medicament/medicament.service';
import { Medicament } from '../medicament/medicament.model';
@Component({
    selector: 'jhi-demande-medicament-vf',
    templateUrl: './demande-medicament-vf.component.html'
})
export class DemandeMedicamentVfComponent implements OnInit, OnDestroy {

currentAccount: any;
    demandeMedicamentVfs: DemandeMedicamentVf[];
    error: any;
    success: any;
    medicaments : Medicament [];
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
    r: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private demandeMedicamentVfService: DemandeMedicamentVfService,
        private parseLinks: ParseLinks,
        private alertService: AlertService,
        private medicamentService :MedicamentService,
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
        this.jhiLanguageService.setLocations(['demandeMedicamentVf']);
    }

    loadAll() {
        this.demandeMedicamentVfService.query({
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
        this.router.navigate(['/demande-medicament-vf'], {queryParams:
            {
                page: this.page,
                size: this.itemsPerPage,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
        });
        this.loadAll();
    }
    private onSaveSuccess (result: DemandeMedicamentVf) {
        this.eventManager.broadcast({ name: 'demandemedicamentListModification', content: 'OK'});
        this.isSaving = false;


    }
    Accepter(DemandeMedicamentVf){

        DemandeMedicamentVf.etat=300;
        this.demandeMedicamentVfService.update(DemandeMedicamentVf).subscribe((res: DemandeMedicamentVf) => this.onSaveSuccess(res),
            (res: Response) => this.onError(res.json()));
    }


    clear() {
        this.page = 0;
        this.router.navigate(['/demande-medicament-vf', {
            page: this.page,
            sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
        }]);
        this.loadAll();
    }

    private onSaveError (error) {
        this.isSaving = false;
        this.onError(error);
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInDemandeMedicamentVfs();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId (index: number, item: DemandeMedicamentVf) {
        return item.id;
    }



    registerChangeInDemandeMedicamentVfs() {
        this.eventSubscriber = this.eventManager.subscribe('demandeMedicamentVfListModification', (response) => this.loadAll());
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
        this.demandeMedicamentVfs = data;
    }

    private onError (error) {
        this.alertService.error(error.message, null, null);
    }
}

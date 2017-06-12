import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { EventManager, ParseLinks, PaginationUtil, JhiLanguageService, AlertService, DataUtils } from 'ng-jhipster';

import { Evenement } from './evenement.model';
import { EvenementService } from './evenement.service';
import { ITEMS_PER_PAGE, Principal } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

import { ParticipationService } from '../participation/participation.service';
import { Participation } from '../participation/participation.model';

@Component({
    selector: 'jhi-evenement',
    templateUrl: './evenements.component.html'
})
export class EvenementsComponent implements OnInit, OnDestroy {

    currentAccount: any;
    evenements: Evenement[];
    paticipation: Participation;
    error: any;
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
        private evenementService: EvenementService,
        private parseLinks: ParseLinks,
        private alertService: AlertService,
        private principal: Principal,
        private activatedRoute: ActivatedRoute,
        private dataUtils: DataUtils,
        private router: Router,
        private eventManager: EventManager,
        private participationService: ParticipationService,
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
        this.jhiLanguageService.setLocations(['evenement']);
    }

    loadAll() {
        this.evenementService.query({
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
    private onSaveSuccess2 (result: Participation) {
        this.eventManager.broadcast({ name: 'articleListModification', content: 'OK'});
        this.isSaving = false;

    }
    VoterPour(Evenement,participation:Participation) {
        // Article.ispushed=true;
        Evenement.nombreparticipants += 1;
        this.evenementService.modifier(Evenement)
            .subscribe((res: Evenement) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));

        this.paticipation= new Participation();
        this.paticipation.evenement=Evenement.nom;
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.paticipation.participant=this.currentAccount.firstName;
        this.participationService.create(this.paticipation)
            .subscribe((res: Participation) => this.onSaveSuccess2(res), (res: Response) => this.onSaveError(res.json()));
        this.loadAlllikes();
    }
    private onSaveSuccess (result: Evenement) {
        this.eventManager.broadcast({ name: 'articleListModification', content: 'OK'});
        this.isSaving = false;

    }

    private onSaveError (error) {
        this.isSaving = false;
        this.onError(error);
    }
    loadAlllikes() {
        this.evenements.forEach((item,index)=>{
                this.participationService.findByidandname(item.nom,this.currentAccount.firstName)
                    .subscribe(
                        participation=>{
                            if (participation.participant==this.currentAccount.firstName )
                            {
                                document.getElementById("l" + index).setAttribute("disabled","disabled")
                                document.getElementById("l" + index).style.opacity="0.4"
                                //style.opacity="0.3"
                                // l.disabled=true;

                            }
                        }
                    );
            }
        );

    }
    transition() {
        this.router.navigate(['/evenement'], {queryParams:
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
        this.router.navigate(['/evenement', {
            page: this.page,
            sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
        }]);
        this.loadAll();
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInEvenements();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId (index: number, item: Evenement) {
        return item.id;
    }



    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }
    registerChangeInEvenements() {
        this.eventSubscriber = this.eventManager.subscribe('evenementListModification', (response) => this.loadAll());
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
        this.evenements = data;
        this.loadAlllikes();
    }

    private onError (error) {
        this.alertService.error(error.message, null, null);
    }
}

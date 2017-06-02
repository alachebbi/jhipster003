import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { EventManager, ParseLinks, PaginationUtil, JhiLanguageService, AlertService } from 'ng-jhipster';

import { Reclamation } from './reclamation.model';
import { ReclamationService } from './reclamation.service';
import { ITEMS_PER_PAGE, Principal } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-mesreclamations',
    templateUrl: './mesreclamations.component.html'
})
export class MesreclamationsComponent implements OnInit, OnDestroy {

    currentAccount: any;
    reclamations: Reclamation[];
    reclamation: Reclamation;
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

    constructor(private jhiLanguageService: JhiLanguageService,
                private reclamationService: ReclamationService,
                private parseLinks: ParseLinks,
                private alertService: AlertService,
                private principal: Principal,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private eventManager: EventManager,
                private paginationUtil: PaginationUtil,
                private paginationConfig: PaginationConfig) {
        this.itemsPerPage = ITEMS_PER_PAGE;
        this.routeData = this.activatedRoute.data.subscribe(data => {
            this.page = data['pagingParams'].page;
            this.previousPage = data['pagingParams'].page;
            this.reverse = data['pagingParams'].ascending;
            this.predicate = data['pagingParams'].predicate;
        });
        this.jhiLanguageService.setLocations(['reclamation']);
    }

    loadAll() {
        this.reclamationService.findByrecusername(this.currentAccount).
        subscribe(reclamations=>{this.reclamations=reclamations;
            this.reclamations.forEach((item,index2)=>{
                    this.reclamationService.find(item.id)
                        .subscribe(
                            reclamation=>{
                                if (reclamation.etat=="Traitée" )
                                {
                                    document.getElementById("k" + index2).setAttribute("disabled","disabled")
                                    document.getElementById("k" + index2).style.opacity="0.3"

                                    //style.opacity="0.3"
                                    // l.disabled=true;

                                }
                            }
                        );
                }
            );


        })



    }



    loadAlllikes() {
        this.reclamations.forEach((item,index)=>{
                this.reclamationService.find(item.id)
                    .subscribe(
                        reclamation=>{
                            if (reclamation.etat=="Traitée" )
                            {
                                document.getElementById("l" + index).setAttribute("disabled","disabled")
                                document.getElementById("l" + index).style.opacity="0.3"

                                //style.opacity="0.3"
                                // l.disabled=true;

                            }
                        }
                    );
            }
        );
    }

    loadAlllike() {
        this.reclamations.forEach((item,index2)=>{
                this.reclamationService.find(item.id)
                    .subscribe(
                        reclamation=>{
                            if (reclamation.etat=="Traitée" )
                            {
                                document.getElementById("k" + index2).setAttribute("disabled","disabled")
                                document.getElementById("k" + index2).style.opacity="0.3"

                                //style.opacity="0.3"
                                // l.disabled=true;

                            }
                        }
                    );
            }
        );
    }

    loadPage(page: number) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    }

    transition() {
        this.router.navigate(['/reclamation'], {
            queryParams: {
                page: this.page,
                size: this.itemsPerPage,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
        });
        this.loadAll();
    }

    clear() {
        this.page = 0;
        this.router.navigate(['/reclamation', {
            page: this.page,
            sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
        }]);
        this.loadAll();
    }

    ngOnInit() {




        this.principal.identity().then((account) => {
            this.currentAccount = account;

            this.loadAll();
            this.loadAlllikes();
            this.loadAlllike();

        });
        this.registerChangeInReclamations();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Reclamation) {
        return item.id;
    }


    registerChangeInReclamations() {
        this.eventSubscriber = this.eventManager.subscribe('reclamationListModification', (response) => this.loadAll());
    }




    private onSaveSuccess(result: Reclamation) {
        this.eventManager.broadcast({name: 'reclamationListModification', content: 'OK'});
        this.isSaving = false;

        this.router.navigate([{outlets: {popup: null}}], {replaceUrl: true});
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
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
        this.reclamations = data;
        this.loadAlllikes();
        this.loadAlllike();
        /*this.reclamations.forEach((item,index)=>{

         if (item.etat=="Traitée" )
         {
         // document.getElementById("l" + index).setAttribute("disabled","disabled")
         document.getElementById("l" + index).style.opacity="0.3";
         console.log("asslema");

         }
         }
         );*/

    }


}

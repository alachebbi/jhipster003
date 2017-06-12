import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { Demandepharmaciecentrale } from './demandepharmaciecentrale.model';
import { DemandepharmaciecentraleService } from './demandepharmaciecentrale.service';

@Component({
    selector: 'jhi-demandepharmaciecentrale-detail',
    templateUrl: './demandepharmaciecentrale-detail.component.html'
})
export class DemandepharmaciecentraleDetailComponent implements OnInit, OnDestroy {

    demandepharmaciecentrale: Demandepharmaciecentrale;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private demandepharmaciecentraleService: DemandepharmaciecentraleService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['demandepharmaciecentrale']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.demandepharmaciecentraleService.find(id).subscribe(demandepharmaciecentrale => {
            this.demandepharmaciecentrale = demandepharmaciecentrale;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}

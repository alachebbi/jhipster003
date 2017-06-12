import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { DemandeMedicamentVf } from './demande-medicament-vf.model';
import { DemandeMedicamentVfService } from './demande-medicament-vf.service';

@Component({
    selector: 'jhi-demande-medicament-vf-detail',
    templateUrl: './demande-medicament-vf-detail.component.html'
})
export class DemandeMedicamentVfDetailComponent implements OnInit, OnDestroy {

    demandeMedicamentVf: DemandeMedicamentVf;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private demandeMedicamentVfService: DemandeMedicamentVfService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['demandeMedicamentVf']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.demandeMedicamentVfService.find(id).subscribe(demandeMedicamentVf => {
            this.demandeMedicamentVf = demandeMedicamentVf;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}

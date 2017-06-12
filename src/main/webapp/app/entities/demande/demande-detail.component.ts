import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { Demande } from './demande.model';
import { DemandeService } from './demande.service';

@Component({
    selector: 'jhi-demande-detail',
    templateUrl: './demande-detail.component.html'
})
export class DemandeDetailComponent implements OnInit, OnDestroy {

    demande: Demande;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private demandeService: DemandeService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['demande']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.demandeService.find(id).subscribe(demande => {
            this.demande = demande;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}

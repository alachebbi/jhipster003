import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { Demandemedi } from './demandemedi.model';
import { DemandemediService } from './demandemedi.service';

@Component({
    selector: 'jhi-demandemedi-detail',
    templateUrl: './demandemedi-detail.component.html'
})
export class DemandemediDetailComponent implements OnInit, OnDestroy {

    demandemedi: Demandemedi;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private demandemediService: DemandemediService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['demandemedi']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.demandemediService.find(id).subscribe(demandemedi => {
            this.demandemedi = demandemedi;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}

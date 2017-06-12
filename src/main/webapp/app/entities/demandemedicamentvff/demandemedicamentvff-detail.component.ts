import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { Demandemedicamentvff } from './demandemedicamentvff.model';
import { DemandemedicamentvffService } from './demandemedicamentvff.service';

@Component({
    selector: 'jhi-demandemedicamentvff-detail',
    templateUrl: './demandemedicamentvff-detail.component.html'
})
export class DemandemedicamentvffDetailComponent implements OnInit, OnDestroy {

    demandemedicamentvff: Demandemedicamentvff;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private demandemedicamentvffService: DemandemedicamentvffService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['demandemedicamentvff']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.demandemedicamentvffService.find(id).subscribe(demandemedicamentvff => {
            this.demandemedicamentvff = demandemedicamentvff;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}

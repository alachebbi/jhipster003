import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService, DataUtils } from 'ng-jhipster';
import { Evenement } from './evenement.model';
import { EvenementService } from './evenement.service';

@Component({
    selector: 'jhi-evenement-detail',
    templateUrl: './evenement-detail.component.html'
})
export class EvenementDetailComponent implements OnInit, OnDestroy {

    evenement: Evenement;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private evenementService: EvenementService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['evenement']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.evenementService.find(id).subscribe(evenement => {
            this.evenement = evenement;
        });
    }
    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}

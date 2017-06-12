import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService, DataUtils } from 'ng-jhipster';
import { Pharmacie } from './pharmacie.model';
import { PharmacieService } from './pharmacie.service';

@Component({
    selector: 'jhi-pharmacie-detail',
    templateUrl: './pharmacie-detail.component.html'
})
export class PharmacieDetailComponent implements OnInit, OnDestroy {

    pharmacie: Pharmacie;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private pharmacieService: PharmacieService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['pharmacie']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.pharmacieService.find(id).subscribe(pharmacie => {
            this.pharmacie = pharmacie;
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

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { Forsys } from './forsys.model';
import { ForsysService } from './forsys.service';

@Component({
    selector: 'jhi-forsys-detail',
    templateUrl: './forsys-detail.component.html'
})
export class ForsysDetailComponent implements OnInit, OnDestroy {

    forsys: Forsys;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private forsysService: ForsysService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['forsys']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.forsysService.find(id).subscribe(forsys => {
            this.forsys = forsys;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService, DataUtils } from 'ng-jhipster';
import { Dosier } from './dosier.model';
import { DosierService } from './dosier.service';

@Component({
    selector: 'jhi-dosier-detail',
    templateUrl: './dosier-detail.component.html'
})
export class DosierDetailComponent implements OnInit, OnDestroy {

    dosier: Dosier;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private dosierService: DosierService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['dosier', 'antecedents']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.dosierService.find(id).subscribe(dosier => {
            this.dosier = dosier;
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

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService, DataUtils } from 'ng-jhipster';
import { ChefService } from './chef-service.model';
import { ChefServiceService } from './chef-service.service';

@Component({
    selector: 'jhi-chef-service-detail',
    templateUrl: './chef-service-detail.component.html'
})
export class ChefServiceDetailComponent implements OnInit, OnDestroy {

    chefService: ChefService;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private chefServiceService: ChefServiceService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['chefService']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.chefServiceService.find(id).subscribe(chefService => {
            this.chefService = chefService;
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

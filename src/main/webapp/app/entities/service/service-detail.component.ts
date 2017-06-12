import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { Service } from './service.model';
import { ServiceService } from './service.service';

@Component({
    selector: 'jhi-service-detail',
    templateUrl: './service-detail.component.html'
})
export class ServiceDetailComponent implements OnInit, OnDestroy {

    service: Service;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private serviceService: ServiceService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['service']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['nom']);
        });
    }

    load (nom) {
        this.serviceService.find(nom).subscribe(service => {
            this.service = service;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}

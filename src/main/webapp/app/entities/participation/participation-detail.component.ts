import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { Participation } from './participation.model';
import { ParticipationService } from './participation.service';

@Component({
    selector: 'jhi-participation-detail',
    templateUrl: './participation-detail.component.html'
})
export class ParticipationDetailComponent implements OnInit, OnDestroy {

    participation: Participation;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private participationService: ParticipationService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['participation']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.participationService.find(id).subscribe(participation => {
            this.participation = participation;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { Dislike } from './dislike.model';
import { DislikeService } from './dislike.service';

@Component({
    selector: 'jhi-dislike-detail',
    templateUrl: './dislike-detail.component.html'
})
export class DislikeDetailComponent implements OnInit, OnDestroy {

    dislike: Dislike;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private dislikeService: DislikeService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['dislike']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.dislikeService.find(id).subscribe(dislike => {
            this.dislike = dislike;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}

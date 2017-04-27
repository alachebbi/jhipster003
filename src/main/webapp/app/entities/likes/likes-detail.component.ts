import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { Likes } from './likes.model';
import { LikesService } from './likes.service';

@Component({
    selector: 'jhi-likes-detail',
    templateUrl: './likes-detail.component.html'
})
export class LikesDetailComponent implements OnInit, OnDestroy {

    likes: Likes;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private likesService: LikesService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['likes']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.likesService.find(id).subscribe(likes => {
            this.likes = likes;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService, DataUtils } from 'ng-jhipster';
import { Article } from './article.model';
import { ArticleService } from './article.service';

@Component({
    selector: 'jhi-article-detail',
    templateUrl: './article-detail.component.html'
})
export class ArticleDetailComponent implements OnInit, OnDestroy {

    article: Article;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private articleService: ArticleService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['article']);
    }

    ngOnInit() {

        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.articleService.find(id).subscribe(article => {
            this.article = article;
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

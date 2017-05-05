import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { EventManager, ParseLinks, PaginationUtil, JhiLanguageService, AlertService, DataUtils } from 'ng-jhipster';

import { Article } from './article.model';
import { ArticleService } from './article.service';

import { LikesService } from '../likes/likes.service';
import { Likes } from '../likes/likes.model';



import { ITEMS_PER_PAGE, Principal,Account } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'jhi-article',
    templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit, OnDestroy {

currentAccount: any;
    articles: Article[];
    likess : Likes[];
    likes: Likes;
    isPushed = false;
    account: Account;
    error: any;
    success: any;
    eventSubscriber: Subscription;
    routeData: any;
    links: any;

    totalItems: any;
    queryCount: any;
    itemsPerPage: any;
    page: any;
    predicate: any;
    previousPage: any;
    reverse: any;
    isSaving: boolean;

    constructor(
        private jhiLanguageService: JhiLanguageService,

        private articleService: ArticleService,
        private parseLinks: ParseLinks,
        private alertService: AlertService,
        private principal: Principal,
        private activatedRoute: ActivatedRoute,
        private dataUtils: DataUtils,
        private router: Router,
        private likesService: LikesService,
        private eventManager: EventManager,
        private paginationUtil: PaginationUtil,
        private paginationConfig: PaginationConfig
    ) {
        this.itemsPerPage = ITEMS_PER_PAGE;
        this.routeData = this.activatedRoute.data.subscribe(data => {
            this.page = data['pagingParams'].page;
            this.previousPage = data['pagingParams'].page;
            this.reverse = data['pagingParams'].ascending;
            this.predicate = data['pagingParams'].predicate;
        });
        this.jhiLanguageService.setLocations(['article']);
    }

    loadAll() {
        this.articleService.query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort()}).subscribe(
            (res: Response) => this.onSuccess(res.json(), res.headers),
            (res: Response) => this.onError(res.json())
        );
    }
    loadPage (page: number) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    }
    transition() {
        this.router.navigate(['/article'], {queryParams:
            {
                page: this.page,
                size: this.itemsPerPage,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
        });
        this.loadAll();
    }

    clear() {
        this.page = 0;
        this.router.navigate(['/article', {
            page: this.page,
            sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
        }]);
        this.loadAll();
    }
    loadAlllikes() {
        this.articles.forEach((item,index)=>{
            this.likesService.findByidandname(item.id,this.currentAccount.firstName)
                .subscribe(
                    likes=>{
                        if (likes.userid==this.currentAccount.firstName )
                        {
                            document.getElementById("l" + index).setAttribute("disabled","disabled")
                            document.getElementById("l" + index).style.opacity="0.3"
                                //style.opacity="0.3"
                             // l.disabled=true;

                        }
                    }
                );
            }
        );
    }
    ngOnInit() {
        this.loadAll();

        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInArticles();
        this.registerAuthenticationSuccess();

    }
    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', (message) => {
            this.principal.identity().then((account) => {
                this.account = account;
            });
        });
    }

    VoterPour(Article,likes:Likes) {
       // Article.ispushed=true;
        Article.vote += 1;
        this.articleService.modifier(Article)
            .subscribe((res: Article) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));

       this.likes= new Likes;
       this.likes.articleid=Article.id;
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.likes.userid=this.currentAccount.firstName;
        this.likesService.create(this.likes)
            .subscribe((res: Likes) => this.onSaveSuccess2(res), (res: Response) => this.onSaveError(res.json()));
    }
    VoterContre(Article) {
        Article.vote -= 1;
        this.articleService.modifier(Article)
            .subscribe((res: Article) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
    }

    private onSaveSuccess2 (result: Likes) {
        this.eventManager.broadcast({ name: 'articleListModification', content: 'OK'});
        this.isSaving = false;

    }
    private onSaveSuccess (result: Article) {
        this.eventManager.broadcast({ name: 'articleListModification', content: 'OK'});
        this.isSaving = false;

    }

    private onSaveError (error) {
        this.isSaving = false;
        this.onError(error);
    }
    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId (index: number, item: Article) {
        return item.id;
    }




    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }
    registerChangeInArticles() {
        this.eventSubscriber = this.eventManager.subscribe('articleListModification', (response) => this.loadAll());
    }

    sort () {
        let result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }

    private onSuccess (data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = headers.get('X-Total-Count');
        this.queryCount = this.totalItems;
        // this.page = pagingParams.page;
        this.articles = data;
        this.loadAlllikes();
    }

    private onError (error) {
        this.alertService.error(error.message, null, null);
    }
}

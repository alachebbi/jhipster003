import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService, DataUtils } from 'ng-jhipster';

import { Article } from './article.model';
import { ArticlePopupService } from './article-popup.service';
import { ArticleService } from './article.service';


import  { UserService} from  '../../shared/user/user.service'
import { Account, LoginModalService, Principal,LoginService, } from '../../shared';

@Component({
    selector: 'jhi-article-dialog',
    templateUrl: './article-dialog.component.html'
})
export class ArticleDialogComponent implements OnInit {

    account: Account;
    accounts:Account[];
    article: Article;
    modalRef: NgbModalRef;
    authorities: any[];
    isSaving: boolean;
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private userService : UserService,
        private principal: Principal,
        private loginModalService: LoginModalService,
        private alertService: AlertService,
        private articleService: ArticleService,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['article']);
    }

    ngOnInit() {

        this.principal.identity().then((account) => {
            this.account = account;

        });
        this.registerAuthenticationSuccess();





        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    }

    loadAllusers() {
        this.userService.query().subscribe(
            (res: Response) => {
                this.accounts = res.json();
            },
            (res: Response) => this.onError(res.json())
        );
    }
    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }


    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    setFileData($event, article, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            let $file = $event.target.files[0];
            if (isImage && !/^image\//.test($file.type)) {
                return;
            }
            this.dataUtils.toBase64($file, (base64Data) => {
                article[field] = base64Data;
                article[`${field}ContentType`] = $file.type;
            });
        }
    }
    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', (message) => {
            this.principal.identity().then((account) => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }
    save () {
        this.isSaving = true;
        if (this.article.id !== undefined) {
            this.articleService.update(this.article)
                .subscribe((res: Article) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else { this.article.utilisateur=this.account.firstName;
        this.article.vote=0;
       this.article.ispushed=false;
            this.articleService.create(this.article)
                .subscribe((res: Article) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Article) {
        this.eventManager.broadcast({ name: 'articleListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    private onSaveError (error) {
        this.isSaving = false;
        this.onError(error);
    }

    private onError (error) {
        this.alertService.error(error.message, null, null);
    }
}

@Component({
    selector: 'jhi-article-popup',
    template: ''
})
export class ArticlePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private articlePopupService: ArticlePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.articlePopupService
                    .open(ArticleDialogComponent, params['id']);
            } else {
                this.modalRef = this.articlePopupService
                    .open(ArticleDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

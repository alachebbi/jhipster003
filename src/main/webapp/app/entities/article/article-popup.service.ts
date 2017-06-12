import { Injectable, Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Article } from './article.model';
import { ArticleService } from './article.service';
@Injectable()
export class ArticlePopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private articleService: ArticleService
    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.articleService.find(id).subscribe(article => {
                if (article.date) {
                    article.date = {
                        year: article.date.getFullYear(),
                        month: article.date.getMonth() + 1,
                        day: article.date.getDate()
                    };
                }
                this.articleModalRef(component, article);
            });
        } else {
            return this.articleModalRef(component, new Article());
        }
    }

    articleModalRef(component: Component, article: Article): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.article = article;
        modalRef.result.then(result => {
            console.log(`Closed with: ${result}`);
            this.isOpen = false;
        }, (reason) => {
            console.log(`Dismissed ${reason}`);
            this.isOpen = false;
        });
        return modalRef;
    }
}

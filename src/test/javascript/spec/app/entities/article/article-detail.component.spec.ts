import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DateUtils, DataUtils } from 'ng-jhipster';
import { JhiLanguageService } from 'ng-jhipster';
import { MockLanguageService } from '../../../helpers/mock-language.service';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { ArticleDetailComponent } from '../../../../../../main/webapp/app/entities/article/article-detail.component';
import { ArticleService } from '../../../../../../main/webapp/app/entities/article/article.service';
import { Article } from '../../../../../../main/webapp/app/entities/article/article.model';

describe('Component Tests', () => {

    describe('Article Management Detail Component', () => {
        let comp: ArticleDetailComponent;
        let fixture: ComponentFixture<ArticleDetailComponent>;
        let service: ArticleService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [ArticleDetailComponent],
                providers: [
                    MockBackend,
                    BaseRequestOptions,
                    DateUtils,
                    DataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    {
                        provide: Http,
                        useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                            return new Http(backendInstance, defaultOptions);
                        },
                        deps: [MockBackend, BaseRequestOptions]
                    },
                    {
                        provide: JhiLanguageService,
                        useClass: MockLanguageService
                    },
                    ArticleService
                ]
            }).overrideComponent(ArticleDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ArticleDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ArticleService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN
            spyOn(service, 'find').and.returnValue(Observable.of(new Article('aaa')));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.article).toEqual(jasmine.objectContaining({id:'aaa'}));
            });
        });
    });

});

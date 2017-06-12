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
import { LikesDetailComponent } from '../../../../../../main/webapp/app/entities/likes/likes-detail.component';
import { LikesService } from '../../../../../../main/webapp/app/entities/likes/likes.service';
import { Likes } from '../../../../../../main/webapp/app/entities/likes/likes.model';

describe('Component Tests', () => {

    describe('Likes Management Detail Component', () => {
        let comp: LikesDetailComponent;
        let fixture: ComponentFixture<LikesDetailComponent>;
        let service: LikesService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [LikesDetailComponent],
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
                    LikesService
                ]
            }).overrideComponent(LikesDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(LikesDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(LikesService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN
            spyOn(service, 'find').and.returnValue(Observable.of(new Likes('aaa')));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.likes).toEqual(jasmine.objectContaining({id:'aaa'}));
            });
        });
    });

});

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
import { DislikeDetailComponent } from '../../../../../../main/webapp/app/entities/dislike/dislike-detail.component';
import { DislikeService } from '../../../../../../main/webapp/app/entities/dislike/dislike.service';
import { Dislike } from '../../../../../../main/webapp/app/entities/dislike/dislike.model';

describe('Component Tests', () => {

    describe('Dislike Management Detail Component', () => {
        let comp: DislikeDetailComponent;
        let fixture: ComponentFixture<DislikeDetailComponent>;
        let service: DislikeService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [DislikeDetailComponent],
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
                    DislikeService
                ]
            }).overrideComponent(DislikeDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DislikeDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DislikeService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN
            spyOn(service, 'find').and.returnValue(Observable.of(new Dislike('aaa')));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.dislike).toEqual(jasmine.objectContaining({id:'aaa'}));
            });
        });
    });

});

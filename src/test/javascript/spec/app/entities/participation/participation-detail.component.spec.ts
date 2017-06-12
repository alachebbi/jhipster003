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
import { ParticipationDetailComponent } from '../../../../../../main/webapp/app/entities/participation/participation-detail.component';
import { ParticipationService } from '../../../../../../main/webapp/app/entities/participation/participation.service';
import { Participation } from '../../../../../../main/webapp/app/entities/participation/participation.model';

describe('Component Tests', () => {

    describe('Participation Management Detail Component', () => {
        let comp: ParticipationDetailComponent;
        let fixture: ComponentFixture<ParticipationDetailComponent>;
        let service: ParticipationService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [ParticipationDetailComponent],
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
                    ParticipationService
                ]
            }).overrideComponent(ParticipationDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ParticipationDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ParticipationService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN
            spyOn(service, 'find').and.returnValue(Observable.of(new Participation('aaa')));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.participation).toEqual(jasmine.objectContaining({id:'aaa'}));
            });
        });
    });

});

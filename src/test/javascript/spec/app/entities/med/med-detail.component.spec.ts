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
import { MedDetailComponent } from '../../../../../../main/webapp/app/entities/med/med-detail.component';
import { MedService } from '../../../../../../main/webapp/app/entities/med/med.service';
import { Med } from '../../../../../../main/webapp/app/entities/med/med.model';

describe('Component Tests', () => {

    describe('Med Management Detail Component', () => {
        let comp: MedDetailComponent;
        let fixture: ComponentFixture<MedDetailComponent>;
        let service: MedService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [MedDetailComponent],
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
                    MedService
                ]
            }).overrideComponent(MedDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MedDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MedService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN
            spyOn(service, 'find').and.returnValue(Observable.of(new Med('aaa')));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.med).toEqual(jasmine.objectContaining({id:'aaa'}));
            });
        });
    });

});

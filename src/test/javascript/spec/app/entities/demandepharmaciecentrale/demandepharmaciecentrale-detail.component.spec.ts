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
import { DemandepharmaciecentraleDetailComponent } from '../../../../../../main/webapp/app/entities/demandepharmaciecentrale/demandepharmaciecentrale-detail.component';
import { DemandepharmaciecentraleService } from '../../../../../../main/webapp/app/entities/demandepharmaciecentrale/demandepharmaciecentrale.service';
import { Demandepharmaciecentrale } from '../../../../../../main/webapp/app/entities/demandepharmaciecentrale/demandepharmaciecentrale.model';

describe('Component Tests', () => {

    describe('Demandepharmaciecentrale Management Detail Component', () => {
        let comp: DemandepharmaciecentraleDetailComponent;
        let fixture: ComponentFixture<DemandepharmaciecentraleDetailComponent>;
        let service: DemandepharmaciecentraleService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [DemandepharmaciecentraleDetailComponent],
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
                    DemandepharmaciecentraleService
                ]
            }).overrideComponent(DemandepharmaciecentraleDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DemandepharmaciecentraleDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DemandepharmaciecentraleService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN
            spyOn(service, 'find').and.returnValue(Observable.of(new Demandepharmaciecentrale('aaa')));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.demandepharmaciecentrale).toEqual(jasmine.objectContaining({id:'aaa'}));
            });
        });
    });

});

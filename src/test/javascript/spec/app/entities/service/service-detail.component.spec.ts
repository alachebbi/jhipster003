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
import { ServiceDetailComponent } from '../../../../../../main/webapp/app/entities/service/service-detail.component';
import { ServiceService } from '../../../../../../main/webapp/app/entities/service/service.service';
import { Service } from '../../../../../../main/webapp/app/entities/service/service.model';

describe('Component Tests', () => {

    describe('Service Management Detail Component', () => {
        let comp: ServiceDetailComponent;
        let fixture: ComponentFixture<ServiceDetailComponent>;
        let service: ServiceService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [ServiceDetailComponent],
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
                    ServiceService
                ]
            }).overrideComponent(ServiceDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ServiceDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ServiceService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN
            spyOn(service, 'find').and.returnValue(Observable.of(new Service('aaa')));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.service).toEqual(jasmine.objectContaining({id:'aaa'}));
            });
        });
    });

});

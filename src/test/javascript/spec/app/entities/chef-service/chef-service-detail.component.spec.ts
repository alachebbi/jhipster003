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
import { ChefServiceDetailComponent } from '../../../../../../main/webapp/app/entities/chef-service/chef-service-detail.component';
import { ChefServiceService } from '../../../../../../main/webapp/app/entities/chef-service/chef-service.service';
import { ChefService } from '../../../../../../main/webapp/app/entities/chef-service/chef-service.model';

describe('Component Tests', () => {

    describe('ChefService Management Detail Component', () => {
        let comp: ChefServiceDetailComponent;
        let fixture: ComponentFixture<ChefServiceDetailComponent>;
        let service: ChefServiceService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [ChefServiceDetailComponent],
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
                    ChefServiceService
                ]
            }).overrideComponent(ChefServiceDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ChefServiceDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ChefServiceService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN
            spyOn(service, 'find').and.returnValue(Observable.of(new ChefService('aaa')));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.chefService).toEqual(jasmine.objectContaining({id:'aaa'}));
            });
        });
    });

});

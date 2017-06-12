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
import { ForsysDetailComponent } from '../../../../../../main/webapp/app/entities/forsys/forsys-detail.component';
import { ForsysService } from '../../../../../../main/webapp/app/entities/forsys/forsys.service';
import { Forsys } from '../../../../../../main/webapp/app/entities/forsys/forsys.model';

describe('Component Tests', () => {

    describe('Forsys Management Detail Component', () => {
        let comp: ForsysDetailComponent;
        let fixture: ComponentFixture<ForsysDetailComponent>;
        let service: ForsysService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [ForsysDetailComponent],
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
                    ForsysService
                ]
            }).overrideComponent(ForsysDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ForsysDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ForsysService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN
            spyOn(service, 'find').and.returnValue(Observable.of(new Forsys('aaa')));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.forsys).toEqual(jasmine.objectContaining({id:'aaa'}));
            });
        });
    });

});

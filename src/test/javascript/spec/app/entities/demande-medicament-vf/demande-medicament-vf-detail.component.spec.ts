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
import { DemandeMedicamentVfDetailComponent } from '../../../../../../main/webapp/app/entities/demande-medicament-vf/demande-medicament-vf-detail.component';
import { DemandeMedicamentVfService } from '../../../../../../main/webapp/app/entities/demande-medicament-vf/demande-medicament-vf.service';
import { DemandeMedicamentVf } from '../../../../../../main/webapp/app/entities/demande-medicament-vf/demande-medicament-vf.model';

describe('Component Tests', () => {

    describe('DemandeMedicamentVf Management Detail Component', () => {
        let comp: DemandeMedicamentVfDetailComponent;
        let fixture: ComponentFixture<DemandeMedicamentVfDetailComponent>;
        let service: DemandeMedicamentVfService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [DemandeMedicamentVfDetailComponent],
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
                    DemandeMedicamentVfService
                ]
            }).overrideComponent(DemandeMedicamentVfDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DemandeMedicamentVfDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DemandeMedicamentVfService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN
            spyOn(service, 'find').and.returnValue(Observable.of(new DemandeMedicamentVf('aaa')));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.demandeMedicamentVf).toEqual(jasmine.objectContaining({id:'aaa'}));
            });
        });
    });

});

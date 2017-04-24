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
import { DemandemedicamentvffDetailComponent } from '../../../../../../main/webapp/app/entities/demandemedicamentvff/demandemedicamentvff-detail.component';
import { DemandemedicamentvffService } from '../../../../../../main/webapp/app/entities/demandemedicamentvff/demandemedicamentvff.service';
import { Demandemedicamentvff } from '../../../../../../main/webapp/app/entities/demandemedicamentvff/demandemedicamentvff.model';

describe('Component Tests', () => {

    describe('Demandemedicamentvff Management Detail Component', () => {
        let comp: DemandemedicamentvffDetailComponent;
        let fixture: ComponentFixture<DemandemedicamentvffDetailComponent>;
        let service: DemandemedicamentvffService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [DemandemedicamentvffDetailComponent],
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
                    DemandemedicamentvffService
                ]
            }).overrideComponent(DemandemedicamentvffDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DemandemedicamentvffDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DemandemedicamentvffService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN
            spyOn(service, 'find').and.returnValue(Observable.of(new Demandemedicamentvff('aaa')));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.demandemedicamentvff).toEqual(jasmine.objectContaining({id:'aaa'}));
            });
        });
    });

});

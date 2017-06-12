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
import { DemandeDetailComponent } from '../../../../../../main/webapp/app/entities/demande/demande-detail.component';
import { DemandeService } from '../../../../../../main/webapp/app/entities/demande/demande.service';
import { Demande } from '../../../../../../main/webapp/app/entities/demande/demande.model';

describe('Component Tests', () => {

    describe('Demande Management Detail Component', () => {
        let comp: DemandeDetailComponent;
        let fixture: ComponentFixture<DemandeDetailComponent>;
        let service: DemandeService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [DemandeDetailComponent],
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
                    DemandeService
                ]
            }).overrideComponent(DemandeDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DemandeDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DemandeService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN
            spyOn(service, 'find').and.returnValue(Observable.of(new Demande('aaa')));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.demande).toEqual(jasmine.objectContaining({id:'aaa'}));
            });
        });
    });

});

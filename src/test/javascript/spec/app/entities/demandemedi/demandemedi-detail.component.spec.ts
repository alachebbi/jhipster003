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
import { DemandemediDetailComponent } from '../../../../../../main/webapp/app/entities/demandemedi/demandemedi-detail.component';
import { DemandemediService } from '../../../../../../main/webapp/app/entities/demandemedi/demandemedi.service';
import { Demandemedi } from '../../../../../../main/webapp/app/entities/demandemedi/demandemedi.model';

describe('Component Tests', () => {

    describe('Demandemedi Management Detail Component', () => {
        let comp: DemandemediDetailComponent;
        let fixture: ComponentFixture<DemandemediDetailComponent>;
        let service: DemandemediService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [DemandemediDetailComponent],
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
                    DemandemediService
                ]
            }).overrideComponent(DemandemediDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DemandemediDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DemandemediService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN
            spyOn(service, 'find').and.returnValue(Observable.of(new Demandemedi('aaa')));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.demandemedi).toEqual(jasmine.objectContaining({id:'aaa'}));
            });
        });
    });

});

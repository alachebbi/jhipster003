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
import { EvenementDetailComponent } from '../../../../../../main/webapp/app/entities/evenement/evenement-detail.component';
import { EvenementService } from '../../../../../../main/webapp/app/entities/evenement/evenement.service';
import { Evenement } from '../../../../../../main/webapp/app/entities/evenement/evenement.model';

describe('Component Tests', () => {

    describe('Evenement Management Detail Component', () => {
        let comp: EvenementDetailComponent;
        let fixture: ComponentFixture<EvenementDetailComponent>;
        let service: EvenementService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [EvenementDetailComponent],
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
                    EvenementService
                ]
            }).overrideComponent(EvenementDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(EvenementDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(EvenementService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN
            spyOn(service, 'find').and.returnValue(Observable.of(new Evenement('aaa')));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.evenement).toEqual(jasmine.objectContaining({id:'aaa'}));
            });
        });
    });

});

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
import { PharmacieDetailComponent } from '../../../../../../main/webapp/app/entities/pharmacie/pharmacie-detail.component';
import { PharmacieService } from '../../../../../../main/webapp/app/entities/pharmacie/pharmacie.service';
import { Pharmacie } from '../../../../../../main/webapp/app/entities/pharmacie/pharmacie.model';

describe('Component Tests', () => {

    describe('Pharmacie Management Detail Component', () => {
        let comp: PharmacieDetailComponent;
        let fixture: ComponentFixture<PharmacieDetailComponent>;
        let service: PharmacieService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [PharmacieDetailComponent],
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
                    PharmacieService
                ]
            }).overrideComponent(PharmacieDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(PharmacieDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(PharmacieService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN
            spyOn(service, 'find').and.returnValue(Observable.of(new Pharmacie('aaa')));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.pharmacie).toEqual(jasmine.objectContaining({id:'aaa'}));
            });
        });
    });

});

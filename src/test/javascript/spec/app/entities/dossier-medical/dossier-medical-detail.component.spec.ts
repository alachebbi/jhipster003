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
import { DossierMedicalDetailComponent } from '../../../../../../main/webapp/app/entities/dossier-medical/dossier-medical-detail.component';
import { DossierMedicalService } from '../../../../../../main/webapp/app/entities/dossier-medical/dossier-medical.service';
import { DossierMedical } from '../../../../../../main/webapp/app/entities/dossier-medical/dossier-medical.model';

describe('Component Tests', () => {

    describe('DossierMedical Management Detail Component', () => {
        let comp: DossierMedicalDetailComponent;
        let fixture: ComponentFixture<DossierMedicalDetailComponent>;
        let service: DossierMedicalService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [DossierMedicalDetailComponent],
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
                    DossierMedicalService
                ]
            }).overrideComponent(DossierMedicalDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DossierMedicalDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DossierMedicalService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN
            spyOn(service, 'find').and.returnValue(Observable.of(new DossierMedical('aaa')));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.dossierMedical).toEqual(jasmine.objectContaining({id:'aaa'}));
            });
        });
    });

});

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
import { DossierMedicalVFDetailComponent } from '../../../../../../main/webapp/app/entities/dossier-medical-vf/dossier-medical-vf-detail.component';
import { DossierMedicalVFService } from '../../../../../../main/webapp/app/entities/dossier-medical-vf/dossier-medical-vf.service';
import { DossierMedicalVF } from '../../../../../../main/webapp/app/entities/dossier-medical-vf/dossier-medical-vf.model';

describe('Component Tests', () => {

    describe('DossierMedicalVF Management Detail Component', () => {
        let comp: DossierMedicalVFDetailComponent;
        let fixture: ComponentFixture<DossierMedicalVFDetailComponent>;
        let service: DossierMedicalVFService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [DossierMedicalVFDetailComponent],
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
                    DossierMedicalVFService
                ]
            }).overrideComponent(DossierMedicalVFDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DossierMedicalVFDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DossierMedicalVFService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN
            spyOn(service, 'find').and.returnValue(Observable.of(new DossierMedicalVF('aaa')));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.dossierMedicalVF).toEqual(jasmine.objectContaining({id:'aaa'}));
            });
        });
    });

});

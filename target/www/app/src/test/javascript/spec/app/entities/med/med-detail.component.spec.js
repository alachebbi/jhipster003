"use strict";
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/http/testing");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var Rx_1 = require("rxjs/Rx");
var ng_jhipster_1 = require("ng-jhipster");
var ng_jhipster_2 = require("ng-jhipster");
var mock_language_service_1 = require("../../../helpers/mock-language.service");
var mock_route_service_1 = require("../../../helpers/mock-route.service");
var med_detail_component_1 = require("../../../../../../main/webapp/app/entities/med/med-detail.component");
var med_service_1 = require("../../../../../../main/webapp/app/entities/med/med.service");
var med_model_1 = require("../../../../../../main/webapp/app/entities/med/med.model");
describe('Component Tests', function () {
    describe('Med Management Detail Component', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [med_detail_component_1.MedDetailComponent],
                providers: [
                    testing_2.MockBackend,
                    http_1.BaseRequestOptions,
                    ng_jhipster_1.DateUtils,
                    ng_jhipster_1.DataUtils,
                    common_1.DatePipe,
                    {
                        provide: router_1.ActivatedRoute,
                        useValue: new mock_route_service_1.MockActivatedRoute({ id: 123 })
                    },
                    {
                        provide: http_1.Http,
                        useFactory: function (backendInstance, defaultOptions) {
                            return new http_1.Http(backendInstance, defaultOptions);
                        },
                        deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
                    },
                    {
                        provide: ng_jhipster_2.JhiLanguageService,
                        useClass: mock_language_service_1.MockLanguageService
                    },
                    med_service_1.MedService
                ]
            }).overrideComponent(med_detail_component_1.MedDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(med_detail_component_1.MedDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(med_service_1.MedService);
        });
        describe('OnInit', function () {
            it('Should call load all on init', function () {
                // GIVEN
                spyOn(service, 'find').and.returnValue(Rx_1.Observable.of(new med_model_1.Med('aaa')));
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.med).toEqual(jasmine.objectContaining({ id: 'aaa' }));
            });
        });
    });
});
//# sourceMappingURL=med-detail.component.spec.js.map
"use strict";
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/http/testing");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var ng_jhipster_1 = require("ng-jhipster");
var shared_1 = require("../../../../../../main/webapp/app/shared");
var mock_language_service_1 = require("../../../helpers/mock-language.service");
var shared_2 = require("../../../../../../main/webapp/app/shared");
var settings_component_1 = require("../../../../../../main/webapp/app/account/settings/settings.component");
var mock_account_service_1 = require("../../../helpers/mock-account.service");
var mock_principal_service_1 = require("../../../helpers/mock-principal.service");
describe('Component Tests', function () {
    describe('SettingsComponent', function () {
        var comp;
        var fixture;
        var mockAuth;
        var mockPrincipal;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [settings_component_1.SettingsComponent],
                providers: [
                    testing_2.MockBackend,
                    {
                        provide: shared_2.Principal,
                        useClass: mock_principal_service_1.MockPrincipal
                    },
                    {
                        provide: shared_2.AccountService,
                        useClass: mock_account_service_1.MockAccountService
                    },
                    http_1.BaseRequestOptions,
                    {
                        provide: shared_1.JhiLanguageHelper,
                        useValue: null
                    },
                    {
                        provide: ng_jhipster_1.JhiLanguageService,
                        useClass: mock_language_service_1.MockLanguageService
                    },
                    {
                        provide: http_1.Http,
                        useFactory: function (backendInstance, defaultOptions) {
                            return new http_1.Http(backendInstance, defaultOptions);
                        },
                        deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
                    }
                ]
            }).overrideComponent(settings_component_1.SettingsComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(settings_component_1.SettingsComponent);
            comp = fixture.componentInstance;
            mockAuth = fixture.debugElement.injector.get(shared_2.AccountService);
            mockPrincipal = fixture.debugElement.injector.get(shared_2.Principal);
        });
        it('should send the current identity upon save', function () {
            // GIVEN
            var accountValues = {
                firstName: 'John',
                lastName: 'Doe',
                activated: true,
                email: 'john.doe@mail.com',
                langKey: 'fr',
                login: 'john'
            };
            mockPrincipal.setResponse(accountValues);
            // WHEN
            comp.settingsAccount = accountValues;
            comp.save();
            // THEN
            expect(mockPrincipal.identitySpy).toHaveBeenCalled();
            expect(mockAuth.saveSpy).toHaveBeenCalledWith(accountValues);
            expect(comp.settingsAccount).toEqual(accountValues);
        });
        it('should notify of success upon successful save', function () {
            // GIVEN
            var accountValues = {
                firstName: 'John',
                lastName: 'Doe'
            };
            mockPrincipal.setResponse(accountValues);
            // WHEN
            comp.save();
            // THEN
            expect(comp.error).toBeNull();
            expect(comp.success).toBe('OK');
        });
        it('should notify of error upon failed save', function () {
            // GIVEN
            mockAuth.saveSpy.and.returnValue(Rx_1.Observable.throw('ERROR'));
            // WHEN
            comp.save();
            // THEN
            expect(comp.error).toEqual('ERROR');
            expect(comp.success).toBeNull();
        });
    });
});
//# sourceMappingURL=settings.component.spec.js.map
"use strict";
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/http/testing");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var ng_jhipster_1 = require("ng-jhipster");
var mock_language_service_1 = require("../../../helpers/mock-language.service");
var password_component_1 = require("../../../../../../main/webapp/app/account/password/password.component");
var password_service_1 = require("../../../../../../main/webapp/app/account/password/password.service");
var principal_service_1 = require("../../../../../../main/webapp/app/shared/auth/principal.service");
var account_service_1 = require("../../../../../../main/webapp/app/shared/auth/account.service");
describe('Component Tests', function () {
    describe('PasswordComponent', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [password_component_1.PasswordComponent],
                providers: [
                    testing_2.MockBackend,
                    principal_service_1.Principal,
                    account_service_1.AccountService,
                    http_1.BaseRequestOptions,
                    {
                        provide: http_1.Http,
                        useFactory: function (backendInstance, defaultOptions) {
                            return new http_1.Http(backendInstance, defaultOptions);
                        },
                        deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
                    },
                    {
                        provide: ng_jhipster_1.JhiLanguageService,
                        useClass: mock_language_service_1.MockLanguageService
                    },
                    password_service_1.Password
                ]
            }).overrideComponent(password_component_1.PasswordComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(password_component_1.PasswordComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(password_service_1.Password);
        });
        it('should show error if passwords do not match', function () {
            // GIVEN
            comp.password = 'password1';
            comp.confirmPassword = 'password2';
            // WHEN
            comp.changePassword();
            // THEN
            expect(comp.doNotMatch).toBe('ERROR');
            expect(comp.error).toBeNull();
            expect(comp.success).toBeNull();
        });
        it('should call Auth.changePassword when passwords match', function () {
            // GIVEN
            spyOn(service, 'save').and.returnValue(Rx_1.Observable.of(true));
            comp.password = comp.confirmPassword = 'myPassword';
            // WHEN
            comp.changePassword();
            // THEN
            expect(service.save).toHaveBeenCalledWith('myPassword');
        });
        it('should set success to OK upon success', function () {
            // GIVEN
            spyOn(service, 'save').and.returnValue(Rx_1.Observable.of(true));
            comp.password = comp.confirmPassword = 'myPassword';
            // WHEN
            comp.changePassword();
            // THEN
            expect(comp.doNotMatch).toBeNull();
            expect(comp.error).toBeNull();
            expect(comp.success).toBe('OK');
        });
        it('should notify of error if change password fails', function () {
            // GIVEN
            spyOn(service, 'save').and.returnValue(Rx_1.Observable.throw('ERROR'));
            comp.password = comp.confirmPassword = 'myPassword';
            // WHEN
            comp.changePassword();
            // THEN
            expect(comp.doNotMatch).toBeNull();
            expect(comp.success).toBeNull();
            expect(comp.error).toBe('ERROR');
        });
    });
});
//# sourceMappingURL=password.component.spec.js.map
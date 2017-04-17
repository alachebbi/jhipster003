"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng_jhipster_1 = require("ng-jhipster");
var shared_1 = require("../shared");
var state_storage_service_1 = require("../shared/auth/state-storage.service");
var router_1 = require("@angular/router");
var login_service_1 = require("../shared/login/login.service");
var HomeComponent = (function () {
    function HomeComponent(jhiLanguageService, languageHelper, principal, languageService, loginService, stateStorageService, elementRef, renderer, activeModal, router, eventManager) {
        this.jhiLanguageService = jhiLanguageService;
        this.languageHelper = languageHelper;
        this.principal = principal;
        this.languageService = languageService;
        this.loginService = loginService;
        this.stateStorageService = stateStorageService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.activeModal = activeModal;
        this.router = router;
        this.eventManager = eventManager;
        this.jhiLanguageService.setLocations(['home']);
        this.credentials = {};
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.languageService.addLocation('login');
        this.principal.identity().then(function (account) {
            _this.account = account;
        });
        this.registerAuthenticationSuccess();
        this.languageHelper.getAll().then(function (languages) {
            _this.languages = languages;
        });
    };
    HomeComponent.prototype.changeLanguage = function (languageKey) {
        this.jhiLanguageService.changeLanguage(languageKey);
    };
    HomeComponent.prototype.registerAuthenticationSuccess = function () {
        var _this = this;
        this.eventManager.subscribe('authenticationSuccess', function (message) {
            _this.principal.identity().then(function (account) {
                _this.account = account;
            });
        });
    };
    HomeComponent.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    /*  login() {
          this.modalRef = this.loginModalService.open();
      }*/
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#username'), 'focus', []);
    };
    HomeComponent.prototype.cancel = function () {
        this.credentials = {
            username: null,
            password: null,
            rememberMe: true
        };
        this.authenticationError = false;
        this.activeModal.dismiss('cancel');
    };
    HomeComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login({
            username: this.username,
            password: this.password,
            rememberMe: this.rememberMe
        }).then(function (account) {
            _this.authenticationError = false;
            _this.activeModal.dismiss('login success');
            if (_this.router.url === '/register' || _this.router.url === '/activate' ||
                _this.router.url === '/finishReset' || _this.router.url === '/requestReset') {
                _this.router.navigate(['']);
            }
            _this.eventManager.broadcast({
                name: 'authenticationSuccess',
                content: 'Sending Authentication Success'
            });
            // // previousState was set in the authExpiredInterceptor before being redirected to login modal.
            // // since login is succesful, go to stored previousState and clear previousState
            var previousState = _this.stateStorageService.getPreviousState();
            //**CHANGED** check if we have are a manager
            var isManager = account.authorities.indexOf("ROLE_MANAGER") > -1;
            if (isManager) {
                _this.stateStorageService.resetPreviousState();
                _this.router.navigate(['your-manager-specific-state']);
            }
            else if (previousState) {
                _this.stateStorageService.resetPreviousState();
                _this.router.navigate([previousState.name], { queryParams: previousState.params });
            }
        }).catch(function () {
            _this.authenticationError = true;
        });
    };
    HomeComponent.prototype.register = function () {
        this.activeModal.dismiss('to state register');
        this.router.navigate(['/register']);
    };
    HomeComponent.prototype.requestResetPassword = function () {
        this.activeModal.dismiss('to state requestReset');
        this.router.navigate(['/reset', 'request']);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'jhi-home',
        templateUrl: '../shared/login/login.component.html',
        styleUrls: [
            'home.css'
        ]
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        shared_1.JhiLanguageHelper,
        shared_1.Principal,
        ng_jhipster_1.JhiLanguageService,
        login_service_1.LoginService,
        state_storage_service_1.StateStorageService,
        core_1.ElementRef,
        core_1.Renderer,
        ng_bootstrap_1.NgbActiveModal,
        router_1.Router,
        ng_jhipster_1.EventManager])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map
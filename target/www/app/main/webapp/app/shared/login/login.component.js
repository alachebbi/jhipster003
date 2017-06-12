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
var router_1 = require("@angular/router");
var ng_jhipster_1 = require("ng-jhipster");
var login_service_1 = require("../login/login.service");
var state_storage_service_1 = require("../auth/state-storage.service");
var JhiLoginModalComponent = (function () {
    function JhiLoginModalComponent(eventManager, languageService, loginService, stateStorageService, elementRef, renderer, activeModal, router) {
        this.eventManager = eventManager;
        this.languageService = languageService;
        this.loginService = loginService;
        this.stateStorageService = stateStorageService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.activeModal = activeModal;
        this.router = router;
        this.credentials = {};
    }
    JhiLoginModalComponent.prototype.ngOnInit = function () {
        this.languageService.addLocation('login');
    };
    JhiLoginModalComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#username'), 'focus', []);
    };
    JhiLoginModalComponent.prototype.cancel = function () {
        this.credentials = {
            username: null,
            password: null,
            rememberMe: true
        };
        this.authenticationError = false;
        this.activeModal.dismiss('cancel');
    };
    JhiLoginModalComponent.prototype.login = function () {
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
    JhiLoginModalComponent.prototype.register = function () {
        this.activeModal.dismiss('to state register');
        this.router.navigate(['/register']);
    };
    JhiLoginModalComponent.prototype.requestResetPassword = function () {
        this.activeModal.dismiss('to state requestReset');
        this.router.navigate(['/reset', 'request']);
    };
    return JhiLoginModalComponent;
}());
JhiLoginModalComponent = __decorate([
    core_1.Component({
        selector: 'jhi-login-modal',
        templateUrl: './login.component.html'
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.EventManager,
        ng_jhipster_1.JhiLanguageService,
        login_service_1.LoginService,
        state_storage_service_1.StateStorageService,
        core_1.ElementRef,
        core_1.Renderer,
        ng_bootstrap_1.NgbActiveModal,
        router_1.Router])
], JhiLoginModalComponent);
exports.JhiLoginModalComponent = JhiLoginModalComponent;
//# sourceMappingURL=login.component.js.map
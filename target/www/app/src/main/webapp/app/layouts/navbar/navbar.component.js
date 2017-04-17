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
var router_1 = require("@angular/router");
var ng_jhipster_1 = require("ng-jhipster");
var profile_service_1 = require("../profiles/profile.service"); // FIXME barrel doesnt work here
var shared_1 = require("../../shared");
var app_constants_1 = require("../../app.constants");
var NavbarComponent = (function () {
    function NavbarComponent(loginService, languageHelper, languageService, principal, loginModalService, profileService, eventManager, router) {
        this.loginService = loginService;
        this.languageHelper = languageHelper;
        this.languageService = languageService;
        this.principal = principal;
        this.loginModalService = loginModalService;
        this.profileService = profileService;
        this.eventManager = eventManager;
        this.router = router;
        this.version = app_constants_1.DEBUG_INFO_ENABLED ? 'v' + app_constants_1.VERSION : '';
        this.isNavbarCollapsed = true;
        this.languageService.addLocation('home');
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.account = account;
        });
        this.languageHelper.getAll().then(function (languages) {
            _this.languages = languages;
        });
        this.registerAuthenticationSuccess();
        this.profileService.getProfileInfo().subscribe(function (profileInfo) {
            _this.inProduction = profileInfo.inProduction;
            _this.swaggerEnabled = profileInfo.swaggerEnabled;
        });
    };
    NavbarComponent.prototype.changeLanguage = function (languageKey) {
        this.languageService.changeLanguage(languageKey);
    };
    NavbarComponent.prototype.collapseNavbar = function () {
        this.isNavbarCollapsed = true;
    };
    NavbarComponent.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    NavbarComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    NavbarComponent.prototype.registerAuthenticationSuccess = function () {
        var _this = this;
        this.eventManager.subscribe('authenticationSuccess', function (message) {
            _this.principal.identity().then(function (account) {
                _this.account = account;
            });
        });
    };
    NavbarComponent.prototype.logout = function () {
        this.collapseNavbar();
        this.loginService.logout();
        this.router.navigate(['']);
    };
    NavbarComponent.prototype.toggleNavbar = function () {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    };
    NavbarComponent.prototype.getImageUrl = function () {
        return this.isAuthenticated() ? this.principal.getImageUrl() : null;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'jhi-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: [
            'navbar.css'
        ]
    }),
    __metadata("design:paramtypes", [shared_1.LoginService,
        shared_1.JhiLanguageHelper,
        ng_jhipster_1.JhiLanguageService,
        shared_1.Principal,
        shared_1.LoginModalService,
        profile_service_1.ProfileService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map
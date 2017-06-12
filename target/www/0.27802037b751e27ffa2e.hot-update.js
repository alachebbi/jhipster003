webpackHotUpdate(0,{

/***/ "./src/main/webapp/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(1);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var HomeComponent = (function () {
    function HomeComponent(jhiLanguageService, languageHelper, principal, loginModalService, eventManager) {
        this.jhiLanguageService = jhiLanguageService;
        this.languageHelper = languageHelper;
        this.principal = principal;
        this.loginModalService = loginModalService;
        this.eventManager = eventManager;
        this.jhiLanguageService.setLocations(['home']);
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
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
    HomeComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'jhi-home',
        template: __webpack_require__("./src/main/webapp/app/home/home.component.html"),
        styles: [
            __webpack_require__("./src/main/webapp/app/home/home.css")
        ]
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        shared_1.JhiLanguageHelper,
        shared_1.Principal,
        shared_1.LoginModalService,
        ng_jhipster_1.EventManager])
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHM/OTRiOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0NBQWtEO0FBRWxELDJDQUErRDtBQUcvRCw0RUFBb0Y7QUFXcEYsSUFBYSxhQUFhO0lBS3RCLHVCQUNZLGtCQUFzQyxFQUN0QyxjQUFpQyxFQUNqQyxTQUFvQixFQUNwQixpQkFBb0MsRUFFcEMsWUFBMEI7UUFMMUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRXBDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRWxDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBYUM7UUFSRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQU87WUFDbkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFM0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLFNBQVM7WUFDeEMsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0Qsc0NBQWMsR0FBZCxVQUFlLFdBQW1CO1FBQzlCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNELHFEQUE2QixHQUE3QjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLEVBQUUsVUFBQyxPQUFPO1lBQ3pELEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBTztnQkFDbkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx1Q0FBZSxHQUFmO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDO0FBaERZLGFBQWE7SUFSekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLDZCQUFhLGlEQUF1QjtRQUNwQyxTQUFXO1lBQ1AseURBQVU7U0FDYjtLQUVKLENBQUM7cUNBT2tDLGdDQUFrQjtRQUN0QiwwQkFBaUI7UUFDdEIsa0JBQVM7UUFDRCwwQkFBaUI7UUFFdEIsMEJBQVk7R0FYN0IsYUFBYSxDQWdEekI7QUFoRFksc0NBQWEiLCJmaWxlIjoiMC4yNzgwMjAzN2I3NTFlMjdmZmEyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYk1vZGFsUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgRXZlbnRNYW5hZ2VyLCBKaGlMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cblxuaW1wb3J0IHsgQWNjb3VudCwgTG9naW5Nb2RhbFNlcnZpY2UsIFByaW5jaXBhbCxKaGlMYW5ndWFnZUhlbHBlciB9IGZyb20gJy4uL3NoYXJlZCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWhvbWUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtcbiAgICAgICAgJ2hvbWUuY3NzJ1xuICAgIF1cblxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBhY2NvdW50OiBBY2NvdW50O1xuICAgIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcbiAgICBsYW5ndWFnZXM6IGFueVtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgamhpTGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbGFuZ3VhZ2VIZWxwZXI6IEpoaUxhbmd1YWdlSGVscGVyLFxuICAgICAgICBwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsLFxuICAgICAgICBwcml2YXRlIGxvZ2luTW9kYWxTZXJ2aWNlOiBMb2dpbk1vZGFsU2VydmljZSxcblxuICAgICAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyXG4gICAgKSB7XG4gICAgICAgIHRoaXMuamhpTGFuZ3VhZ2VTZXJ2aWNlLnNldExvY2F0aW9ucyhbJ2hvbWUnXSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAgICBcblxuXG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gYWNjb3VudDtcblxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckF1dGhlbnRpY2F0aW9uU3VjY2VzcygpO1xuICAgICAgICB0aGlzLmxhbmd1YWdlSGVscGVyLmdldEFsbCgpLnRoZW4oKGxhbmd1YWdlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXMgPSBsYW5ndWFnZXM7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGFuZ2VMYW5ndWFnZShsYW5ndWFnZUtleTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuamhpTGFuZ3VhZ2VTZXJ2aWNlLmNoYW5nZUxhbmd1YWdlKGxhbmd1YWdlS2V5KTtcbiAgICB9XG4gICAgcmVnaXN0ZXJBdXRoZW50aWNhdGlvblN1Y2Nlc3MoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLnN1YnNjcmliZSgnYXV0aGVudGljYXRpb25TdWNjZXNzJywgKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWNjb3VudCA9IGFjY291bnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaXNBdXRoZW50aWNhdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmluY2lwYWwuaXNBdXRoZW50aWNhdGVkKCk7XG4gICAgfVxuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLmxvZ2luTW9kYWxTZXJ2aWNlLm9wZW4oKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiXSwic291cmNlUm9vdCI6IiJ9
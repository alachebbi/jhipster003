webpackHotUpdate(0,{

/***/ "./src/main/webapp/app/entities/servicemedical/servicemedical-dialog.component.ts":
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
var router_1 = __webpack_require__(2);
var ng_bootstrap_1 = __webpack_require__(3);
var ng_jhipster_1 = __webpack_require__(1);
var servicemedical_popup_service_1 = __webpack_require__("./src/main/webapp/app/entities/servicemedical/servicemedical-popup.service.ts");
var servicemedical_service_1 = __webpack_require__("./src/main/webapp/app/entities/servicemedical/servicemedical.service.ts");
var ServicemedicalDialogComponent = (function () {
    function ServicemedicalDialogComponent(activeModal, jhiLanguageService, dataUtils, alertService, servicemedicalService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.dataUtils = dataUtils;
        this.alertService = alertService;
        this.servicemedicalService = servicemedicalService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['servicemedical']);
    }
    ServicemedicalDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    ServicemedicalDialogComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    ServicemedicalDialogComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    ServicemedicalDialogComponent.prototype.setFileData = function ($event, servicemedical, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            var $file_1 = $event.target.files[0];
            if (isImage && !/^image\//.test($file_1.type)) {
                return;
            }
            this.dataUtils.toBase64($file_1, function (base64Data) {
                servicemedical[field] = base64Data;
                servicemedical[field + "ContentType"] = $file_1.type;
            });
        }
    };
    ServicemedicalDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    ServicemedicalDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.servicemedical.id !== undefined) {
            this.servicemedicalService.update(this.servicemedical)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.servicemedical.chef == "a";
            this.servicemedicalService.create(this.servicemedical)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    ServicemedicalDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'servicemedicalListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    ServicemedicalDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    ServicemedicalDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return ServicemedicalDialogComponent;
}());
ServicemedicalDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-servicemedical-dialog',
        template: __webpack_require__("./src/main/webapp/app/entities/servicemedical/servicemedical-dialog.component.html")
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        ng_jhipster_1.DataUtils,
        ng_jhipster_1.AlertService,
        servicemedical_service_1.ServicemedicalService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], ServicemedicalDialogComponent);
exports.ServicemedicalDialogComponent = ServicemedicalDialogComponent;
var ServicemedicalPopupComponent = (function () {
    function ServicemedicalPopupComponent(route, servicemedicalPopupService) {
        this.route = route;
        this.servicemedicalPopupService = servicemedicalPopupService;
    }
    ServicemedicalPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.servicemedicalPopupService
                    .open(ServicemedicalDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.servicemedicalPopupService
                    .open(ServicemedicalDialogComponent);
            }
        });
    };
    ServicemedicalPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return ServicemedicalPopupComponent;
}());
ServicemedicalPopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-servicemedical-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        servicemedical_popup_service_1.ServicemedicalPopupService])
], ServicemedicalPopupComponent);
exports.ServicemedicalPopupComponent = ServicemedicalPopupComponent;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3NlcnZpY2VtZWRpY2FsL3NlcnZpY2VtZWRpY2FsLWRpYWxvZy5jb21wb25lbnQudHM/OGRjNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0NBQTZEO0FBQzdELHNDQUF5RDtBQUd6RCw0Q0FBeUU7QUFDekUsMkNBQXdGO0FBR3hGLDBJQUE0RTtBQUM1RSw4SEFBaUU7QUFLakUsSUFBYSw2QkFBNkI7SUFLdEMsdUNBQ1csV0FBMkIsRUFDMUIsa0JBQXNDLEVBQ3RDLFNBQW9CLEVBQ3BCLFlBQTBCLEVBQzFCLHFCQUE0QyxFQUM1QyxZQUEwQixFQUMxQixNQUFjO1FBTmYsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBQzFCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsZ0RBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELGdEQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxnREFBUSxHQUFSLFVBQVMsV0FBVyxFQUFFLEtBQUs7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxT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QUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsMEJBQTBCO3FCQUMxQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUM3QyxDQUFDO1FBRUwsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsa0RBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUNMLG1DQUFDO0FBQUQsQ0FBQztBQTFCWSw0QkFBNEI7SUFKeEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSwwQkFBMEI7UUFDcEMsUUFBUSxFQUFFLEVBQUU7S0FDZixDQUFDO3FDQU9xQix1QkFBYztRQUNPLHlEQUEwQjtHQVB6RCw0QkFBNEIsQ0EwQnhDO0FBMUJZLG9FQUE0QiIsImZpbGUiOiIwLmIxOWJhNjZhNDYyNDY2YTcyZWM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsLCBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IEV2ZW50TWFuYWdlciwgQWxlcnRTZXJ2aWNlLCBKaGlMYW5ndWFnZVNlcnZpY2UsIERhdGFVdGlscyB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgU2VydmljZW1lZGljYWwgfSBmcm9tICcuL3NlcnZpY2VtZWRpY2FsLm1vZGVsJztcbmltcG9ydCB7IFNlcnZpY2VtZWRpY2FsUG9wdXBTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlbWVkaWNhbC1wb3B1cC5zZXJ2aWNlJztcbmltcG9ydCB7IFNlcnZpY2VtZWRpY2FsU2VydmljZSB9IGZyb20gJy4vc2VydmljZW1lZGljYWwuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1zZXJ2aWNlbWVkaWNhbC1kaWFsb2cnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zZXJ2aWNlbWVkaWNhbC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VtZWRpY2FsRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHNlcnZpY2VtZWRpY2FsOiBTZXJ2aWNlbWVkaWNhbDtcbiAgICBhdXRob3JpdGllczogYW55W107XG4gICAgaXNTYXZpbmc6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwsXG4gICAgICAgIHByaXZhdGUgamhpTGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZGF0YVV0aWxzOiBEYXRhVXRpbHMsXG4gICAgICAgIHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgc2VydmljZW1lZGljYWxTZXJ2aWNlOiBTZXJ2aWNlbWVkaWNhbFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXIsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgICApIHtcbiAgICAgICAgdGhpcy5qaGlMYW5ndWFnZVNlcnZpY2Uuc2V0TG9jYXRpb25zKFsnc2VydmljZW1lZGljYWwnXSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hdXRob3JpdGllcyA9IFsnUk9MRV9VU0VSJywgJ1JPTEVfQURNSU4nXTtcbiAgICB9XG4gICAgYnl0ZVNpemUoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVV0aWxzLmJ5dGVTaXplKGZpZWxkKTtcbiAgICB9XG5cbiAgICBvcGVuRmlsZShjb250ZW50VHlwZSwgZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVV0aWxzLm9wZW5GaWxlKGNvbnRlbnRUeXBlLCBmaWVsZCk7XG4gICAgfVxuXG4gICAgc2V0RmlsZURhdGEoJGV2ZW50LCBzZXJ2aWNlbWVkaWNhbCwgZmllbGQsIGlzSW1hZ2UpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuZmlsZXMgJiYgJGV2ZW50LnRhcmdldC5maWxlc1swXSkge1xuICAgICAgICAgICAgbGV0ICRmaWxlID0gJGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgICAgIGlmIChpc0ltYWdlICYmICEvXmltYWdlXFwvLy50ZXN0KCRmaWxlLnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhVXRpbHMudG9CYXNlNjQoJGZpbGUsIChiYXNlNjREYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VydmljZW1lZGljYWxbZmllbGRdID0gYmFzZTY0RGF0YTtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlbWVkaWNhbFtgJHtmaWVsZH1Db250ZW50VHlwZWBdID0gJGZpbGUudHlwZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNsZWFyICgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVNb2RhbC5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3sgb3V0bGV0czogeyBwb3B1cDogbnVsbCB9fV0sIHsgcmVwbGFjZVVybDogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBzYXZlICgpIHtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2VtZWRpY2FsLmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZW1lZGljYWxTZXJ2aWNlLnVwZGF0ZSh0aGlzLnNlcnZpY2VtZWRpY2FsKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlczogU2VydmljZW1lZGljYWwpID0+IHRoaXMub25TYXZlU3VjY2VzcyhyZXMpLCAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vblNhdmVFcnJvcihyZXMuanNvbigpKSk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMuc2VydmljZW1lZGljYWwuY2hlZj09XCJhXCI7XG4gICAgICAgICAgICB0aGlzLnNlcnZpY2VtZWRpY2FsU2VydmljZS5jcmVhdGUodGhpcy5zZXJ2aWNlbWVkaWNhbClcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXM6IFNlcnZpY2VtZWRpY2FsKSA9PiB0aGlzLm9uU2F2ZVN1Y2Nlc3MocmVzKSwgKHJlczogUmVzcG9uc2UpID0+IHRoaXMub25TYXZlRXJyb3IocmVzLmpzb24oKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNhdmVTdWNjZXNzIChyZXN1bHQ6IFNlcnZpY2VtZWRpY2FsKSB7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLmJyb2FkY2FzdCh7IG5hbWU6ICdzZXJ2aWNlbWVkaWNhbExpc3RNb2RpZmljYXRpb24nLCBjb250ZW50OiAnT0snfSk7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3RpdmVNb2RhbC5kaXNtaXNzKHJlc3VsdCk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt7IG91dGxldHM6IHsgcG9wdXA6IG51bGwgfX1dLCB7IHJlcGxhY2VVcmw6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNhdmVFcnJvciAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uRXJyb3IoZXJyb3IpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25FcnJvciAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UuZXJyb3IoZXJyb3IubWVzc2FnZSwgbnVsbCwgbnVsbCk7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1zZXJ2aWNlbWVkaWNhbC1wb3B1cCcsXG4gICAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VtZWRpY2FsUG9wdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBtb2RhbFJlZjogTmdiTW9kYWxSZWY7XG4gICAgcm91dGVTdWI6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yIChcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgc2VydmljZW1lZGljYWxQb3B1cFNlcnZpY2U6IFNlcnZpY2VtZWRpY2FsUG9wdXBTZXJ2aWNlXG4gICAgKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucm91dGVTdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIGlmICggcGFyYW1zWydpZCddICkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLnNlcnZpY2VtZWRpY2FsUG9wdXBTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgIC5vcGVuKFNlcnZpY2VtZWRpY2FsRGlhbG9nQ29tcG9uZW50LCBwYXJhbXNbJ2lkJ10pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5zZXJ2aWNlbWVkaWNhbFBvcHVwU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAub3BlbihTZXJ2aWNlbWVkaWNhbERpYWxvZ0NvbXBvbmVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucm91dGVTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3NlcnZpY2VtZWRpY2FsL3NlcnZpY2VtZWRpY2FsLWRpYWxvZy5jb21wb25lbnQudHMiXSwic291cmNlUm9vdCI6IiJ9
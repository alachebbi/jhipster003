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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3NlcnZpY2VtZWRpY2FsL3NlcnZpY2VtZWRpY2FsLWRpYWxvZy5jb21wb25lbnQudHM/OGRjNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0NBQTZEO0FBQzdELHNDQUF5RDtBQUd6RCw0Q0FBeUU7QUFDekUsMkNBQXdGO0FBR3hGLDBJQUE0RTtBQUM1RSw4SEFBaUU7QUFLakUsSUFBYSw2QkFBNkI7SUFLdEMsdUNBQ1csV0FBMkIsRUFDMUIsa0JBQXNDLEVBQ3RDLFNBQW9CLEVBQ3BCLFlBQTBCLEVBQzFCLHFCQUE0QyxFQUM1QyxZQUEwQixFQUMxQixNQUFjO1FBTmYsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBQzFCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsZ0RBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELGdEQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxnREFBUSxHQUFSLFVBQVMsV0FBVyxFQUFFLEtBQUs7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxT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QUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsMEJBQTBCO3FCQUMxQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUM3QyxDQUFDO1FBRUwsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsa0RBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUNMLG1DQUFDO0FBQUQsQ0FBQztBQTFCWSw0QkFBNEI7SUFKeEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSwwQkFBMEI7UUFDcEMsUUFBUSxFQUFFLEVBQUU7S0FDZixDQUFDO3FDQU9xQix1QkFBYztRQUNPLHlEQUEwQjtHQVB6RCw0QkFBNEIsQ0EwQnhDO0FBMUJZLG9FQUE0QiIsImZpbGUiOiIwLmU2NDZiZWE1YzBkMDQ1M2NiMzY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsLCBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IEV2ZW50TWFuYWdlciwgQWxlcnRTZXJ2aWNlLCBKaGlMYW5ndWFnZVNlcnZpY2UsIERhdGFVdGlscyB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgU2VydmljZW1lZGljYWwgfSBmcm9tICcuL3NlcnZpY2VtZWRpY2FsLm1vZGVsJztcbmltcG9ydCB7IFNlcnZpY2VtZWRpY2FsUG9wdXBTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlbWVkaWNhbC1wb3B1cC5zZXJ2aWNlJztcbmltcG9ydCB7IFNlcnZpY2VtZWRpY2FsU2VydmljZSB9IGZyb20gJy4vc2VydmljZW1lZGljYWwuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1zZXJ2aWNlbWVkaWNhbC1kaWFsb2cnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zZXJ2aWNlbWVkaWNhbC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VtZWRpY2FsRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHNlcnZpY2VtZWRpY2FsOiBTZXJ2aWNlbWVkaWNhbDtcbiAgICBhdXRob3JpdGllczogYW55W107XG4gICAgaXNTYXZpbmc6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwsXG4gICAgICAgIHByaXZhdGUgamhpTGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZGF0YVV0aWxzOiBEYXRhVXRpbHMsXG4gICAgICAgIHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgc2VydmljZW1lZGljYWxTZXJ2aWNlOiBTZXJ2aWNlbWVkaWNhbFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXIsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgICApIHtcbiAgICAgICAgdGhpcy5qaGlMYW5ndWFnZVNlcnZpY2Uuc2V0TG9jYXRpb25zKFsnc2VydmljZW1lZGljYWwnXSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hdXRob3JpdGllcyA9IFsnUk9MRV9VU0VSJywgJ1JPTEVfQURNSU4nXTtcbiAgICB9XG4gICAgYnl0ZVNpemUoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVV0aWxzLmJ5dGVTaXplKGZpZWxkKTtcbiAgICB9XG5cbiAgICBvcGVuRmlsZShjb250ZW50VHlwZSwgZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVV0aWxzLm9wZW5GaWxlKGNvbnRlbnRUeXBlLCBmaWVsZCk7XG4gICAgfVxuXG4gICAgc2V0RmlsZURhdGEoJGV2ZW50LCBzZXJ2aWNlbWVkaWNhbCwgZmllbGQsIGlzSW1hZ2UpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuZmlsZXMgJiYgJGV2ZW50LnRhcmdldC5maWxlc1swXSkge1xuICAgICAgICAgICAgbGV0ICRmaWxlID0gJGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgICAgIGlmIChpc0ltYWdlICYmICEvXmltYWdlXFwvLy50ZXN0KCRmaWxlLnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhVXRpbHMudG9CYXNlNjQoJGZpbGUsIChiYXNlNjREYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VydmljZW1lZGljYWxbZmllbGRdID0gYmFzZTY0RGF0YTtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlbWVkaWNhbFtgJHtmaWVsZH1Db250ZW50VHlwZWBdID0gJGZpbGUudHlwZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNsZWFyICgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVNb2RhbC5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3sgb3V0bGV0czogeyBwb3B1cDogbnVsbCB9fV0sIHsgcmVwbGFjZVVybDogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBzYXZlICgpIHtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2VtZWRpY2FsLmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZW1lZGljYWxTZXJ2aWNlLnVwZGF0ZSh0aGlzLnNlcnZpY2VtZWRpY2FsKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlczogU2VydmljZW1lZGljYWwpID0+IHRoaXMub25TYXZlU3VjY2VzcyhyZXMpLCAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vblNhdmVFcnJvcihyZXMuanNvbigpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlbWVkaWNhbC5jaGVmPT1cImFcIjtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZW1lZGljYWxTZXJ2aWNlLmNyZWF0ZSh0aGlzLnNlcnZpY2VtZWRpY2FsKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlczogU2VydmljZW1lZGljYWwpID0+IHRoaXMub25TYXZlU3VjY2VzcyhyZXMpLCAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vblNhdmVFcnJvcihyZXMuanNvbigpKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2F2ZVN1Y2Nlc3MgKHJlc3VsdDogU2VydmljZW1lZGljYWwpIHtcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuYnJvYWRjYXN0KHsgbmFtZTogJ3NlcnZpY2VtZWRpY2FsTGlzdE1vZGlmaWNhdGlvbicsIGNvbnRlbnQ6ICdPSyd9KTtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFjdGl2ZU1vZGFsLmRpc21pc3MocmVzdWx0KTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3sgb3V0bGV0czogeyBwb3B1cDogbnVsbCB9fV0sIHsgcmVwbGFjZVVybDogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2F2ZUVycm9yIChlcnJvcikge1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25FcnJvcihlcnJvcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkVycm9yIChlcnJvcikge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcihlcnJvci5tZXNzYWdlLCBudWxsLCBudWxsKTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXNlcnZpY2VtZWRpY2FsLXBvcHVwJyxcbiAgICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgU2VydmljZW1lZGljYWxQb3B1cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcbiAgICByb3V0ZVN1YjogYW55O1xuXG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBzZXJ2aWNlbWVkaWNhbFBvcHVwU2VydmljZTogU2VydmljZW1lZGljYWxQb3B1cFNlcnZpY2VcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZVN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgaWYgKCBwYXJhbXNbJ2lkJ10gKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMuc2VydmljZW1lZGljYWxQb3B1cFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgLm9wZW4oU2VydmljZW1lZGljYWxEaWFsb2dDb21wb25lbnQsIHBhcmFtc1snaWQnXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLnNlcnZpY2VtZWRpY2FsUG9wdXBTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgIC5vcGVuKFNlcnZpY2VtZWRpY2FsRGlhbG9nQ29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvc2VydmljZW1lZGljYWwvc2VydmljZW1lZGljYWwtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJzb3VyY2VSb290IjoiIn0=
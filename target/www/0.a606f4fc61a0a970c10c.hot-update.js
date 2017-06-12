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
            this.servicemedical;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3NlcnZpY2VtZWRpY2FsL3NlcnZpY2VtZWRpY2FsLWRpYWxvZy5jb21wb25lbnQudHM/OGRjNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0NBQTZEO0FBQzdELHNDQUF5RDtBQUd6RCw0Q0FBeUU7QUFDekUsMkNBQXdGO0FBR3hGLDBJQUE0RTtBQUM1RSw4SEFBaUU7QUFLakUsSUFBYSw2QkFBNkI7SUFLdEMsdUNBQ1csV0FBMkIsRUFDMUIsa0JBQXNDLEVBQ3RDLFNBQW9CLEVBQ3BCLFlBQTBCLEVBQzFCLHFCQUE0QyxFQUM1QyxZQUEwQixFQUMxQixNQUFjO1FBTmYsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBQzFCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsZ0RBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELGdEQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxnREFBUSxHQUFSLFVBQVMsV0FBVyxFQUFFLEtBQUs7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxT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QkFBMEI7cUJBQzFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQzdDLENBQUM7UUFFTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxrREFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsbUNBQUM7QUFBRCxDQUFDO0FBMUJZLDRCQUE0QjtJQUp4QyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLDBCQUEwQjtRQUNwQyxRQUFRLEVBQUUsRUFBRTtLQUNmLENBQUM7cUNBT3FCLHVCQUFjO1FBQ08seURBQTBCO0dBUHpELDRCQUE0QixDQTBCeEM7QUExQlksb0VBQTRCIiwiZmlsZSI6IjAuYTYwNmY0ZmM2MWEwYTk3MGMxMGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwsIE5nYk1vZGFsUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgRXZlbnRNYW5hZ2VyLCBBbGVydFNlcnZpY2UsIEpoaUxhbmd1YWdlU2VydmljZSwgRGF0YVV0aWxzIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBTZXJ2aWNlbWVkaWNhbCB9IGZyb20gJy4vc2VydmljZW1lZGljYWwubW9kZWwnO1xuaW1wb3J0IHsgU2VydmljZW1lZGljYWxQb3B1cFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VtZWRpY2FsLXBvcHVwLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VydmljZW1lZGljYWxTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlbWVkaWNhbC5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXNlcnZpY2VtZWRpY2FsLWRpYWxvZycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NlcnZpY2VtZWRpY2FsLWRpYWxvZy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU2VydmljZW1lZGljYWxEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgc2VydmljZW1lZGljYWw6IFNlcnZpY2VtZWRpY2FsO1xuICAgIGF1dGhvcml0aWVzOiBhbnlbXTtcbiAgICBpc1NhdmluZzogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCxcbiAgICAgICAgcHJpdmF0ZSBqaGlMYW5ndWFnZVNlcnZpY2U6IEpoaUxhbmd1YWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBkYXRhVXRpbHM6IERhdGFVdGlscyxcbiAgICAgICAgcHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBzZXJ2aWNlbWVkaWNhbFNlcnZpY2U6IFNlcnZpY2VtZWRpY2FsU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlcixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICAgICkge1xuICAgICAgICB0aGlzLmpoaUxhbmd1YWdlU2VydmljZS5zZXRMb2NhdGlvbnMoWydzZXJ2aWNlbWVkaWNhbCddKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmF1dGhvcml0aWVzID0gWydST0xFX1VTRVInLCAnUk9MRV9BRE1JTiddO1xuICAgIH1cbiAgICBieXRlU2l6ZShmaWVsZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhVXRpbHMuYnl0ZVNpemUoZmllbGQpO1xuICAgIH1cblxuICAgIG9wZW5GaWxlKGNvbnRlbnRUeXBlLCBmaWVsZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhVXRpbHMub3BlbkZpbGUoY29udGVudFR5cGUsIGZpZWxkKTtcbiAgICB9XG5cbiAgICBzZXRGaWxlRGF0YSgkZXZlbnQsIHNlcnZpY2VtZWRpY2FsLCBmaWVsZCwgaXNJbWFnZSkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5maWxlcyAmJiAkZXZlbnQudGFyZ2V0LmZpbGVzWzBdKSB7XG4gICAgICAgICAgICBsZXQgJGZpbGUgPSAkZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICAgICAgaWYgKGlzSW1hZ2UgJiYgIS9eaW1hZ2VcXC8vLnRlc3QoJGZpbGUudHlwZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhdGFVdGlscy50b0Jhc2U2NCgkZmlsZSwgKGJhc2U2NERhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlbWVkaWNhbFtmaWVsZF0gPSBiYXNlNjREYXRhO1xuICAgICAgICAgICAgICAgIHNlcnZpY2VtZWRpY2FsW2Ake2ZpZWxkfUNvbnRlbnRUeXBlYF0gPSAkZmlsZS50eXBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xlYXIgKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZU1vZGFsLmRpc21pc3MoJ2NhbmNlbCcpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbeyBvdXRsZXRzOiB7IHBvcHVwOiBudWxsIH19XSwgeyByZXBsYWNlVXJsOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHNhdmUgKCkge1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZW1lZGljYWwuaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlbWVkaWNhbFNlcnZpY2UudXBkYXRlKHRoaXMuc2VydmljZW1lZGljYWwpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzOiBTZXJ2aWNlbWVkaWNhbCkgPT4gdGhpcy5vblNhdmVTdWNjZXNzKHJlcyksIChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLm9uU2F2ZUVycm9yKHJlcy5qc29uKCkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZW1lZGljYWxcbiAgICAgICAgICAgIHRoaXMuc2VydmljZW1lZGljYWxTZXJ2aWNlLmNyZWF0ZSh0aGlzLnNlcnZpY2VtZWRpY2FsKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlczogU2VydmljZW1lZGljYWwpID0+IHRoaXMub25TYXZlU3VjY2VzcyhyZXMpLCAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vblNhdmVFcnJvcihyZXMuanNvbigpKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2F2ZVN1Y2Nlc3MgKHJlc3VsdDogU2VydmljZW1lZGljYWwpIHtcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuYnJvYWRjYXN0KHsgbmFtZTogJ3NlcnZpY2VtZWRpY2FsTGlzdE1vZGlmaWNhdGlvbicsIGNvbnRlbnQ6ICdPSyd9KTtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFjdGl2ZU1vZGFsLmRpc21pc3MocmVzdWx0KTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3sgb3V0bGV0czogeyBwb3B1cDogbnVsbCB9fV0sIHsgcmVwbGFjZVVybDogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2F2ZUVycm9yIChlcnJvcikge1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25FcnJvcihlcnJvcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkVycm9yIChlcnJvcikge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcihlcnJvci5tZXNzYWdlLCBudWxsLCBudWxsKTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXNlcnZpY2VtZWRpY2FsLXBvcHVwJyxcbiAgICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgU2VydmljZW1lZGljYWxQb3B1cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcbiAgICByb3V0ZVN1YjogYW55O1xuXG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBzZXJ2aWNlbWVkaWNhbFBvcHVwU2VydmljZTogU2VydmljZW1lZGljYWxQb3B1cFNlcnZpY2VcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZVN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgaWYgKCBwYXJhbXNbJ2lkJ10gKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMuc2VydmljZW1lZGljYWxQb3B1cFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgLm9wZW4oU2VydmljZW1lZGljYWxEaWFsb2dDb21wb25lbnQsIHBhcmFtc1snaWQnXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLnNlcnZpY2VtZWRpY2FsUG9wdXBTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgIC5vcGVuKFNlcnZpY2VtZWRpY2FsRGlhbG9nQ29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvc2VydmljZW1lZGljYWwvc2VydmljZW1lZGljYWwtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJzb3VyY2VSb290IjoiIn0=
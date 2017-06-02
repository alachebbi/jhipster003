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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3NlcnZpY2VtZWRpY2FsL3NlcnZpY2VtZWRpY2FsLWRpYWxvZy5jb21wb25lbnQudHM/OGRjNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0NBQTZEO0FBQzdELHNDQUF5RDtBQUd6RCw0Q0FBeUU7QUFDekUsMkNBQXdGO0FBR3hGLDBJQUE0RTtBQUM1RSw4SEFBaUU7QUFLakUsSUFBYSw2QkFBNkI7SUFLdEMsdUNBQ1csV0FBMkIsRUFDMUIsa0JBQXNDLEVBQ3RDLFNBQW9CLEVBQ3BCLFlBQTBCLEVBQzFCLHFCQUE0QyxFQUM1QyxZQUEwQixFQUMxQixNQUFjO1FBTmYsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBQzFCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsZ0RBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELGdEQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxnREFBUSxHQUFSLFVBQVMsV0FBVyxFQUFFLEtBQUs7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxT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QUFRLEdBQUcsS0FBSSxDQUFDLDBCQUEwQjtxQkFDMUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7WUFDN0MsQ0FBQztRQUVMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGtEQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFDTCxtQ0FBQztBQUFELENBQUM7QUExQlksNEJBQTRCO0lBSnhDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsMEJBQTBCO1FBQ3BDLFFBQVEsRUFBRSxFQUFFO0tBQ2YsQ0FBQztxQ0FPcUIsdUJBQWM7UUFDTyx5REFBMEI7R0FQekQsNEJBQTRCLENBMEJ4QztBQTFCWSxvRUFBNEIiLCJmaWxlIjoiMC5lZWNkZjc4YTI3YmNmZmEzMzY4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCwgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBFdmVudE1hbmFnZXIsIEFsZXJ0U2VydmljZSwgSmhpTGFuZ3VhZ2VTZXJ2aWNlLCBEYXRhVXRpbHMgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IFNlcnZpY2VtZWRpY2FsIH0gZnJvbSAnLi9zZXJ2aWNlbWVkaWNhbC5tb2RlbCc7XG5pbXBvcnQgeyBTZXJ2aWNlbWVkaWNhbFBvcHVwU2VydmljZSB9IGZyb20gJy4vc2VydmljZW1lZGljYWwtcG9wdXAuc2VydmljZSc7XG5pbXBvcnQgeyBTZXJ2aWNlbWVkaWNhbFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VtZWRpY2FsLnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktc2VydmljZW1lZGljYWwtZGlhbG9nJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2VydmljZW1lZGljYWwtZGlhbG9nLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlbWVkaWNhbERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBzZXJ2aWNlbWVkaWNhbDogU2VydmljZW1lZGljYWw7XG4gICAgYXV0aG9yaXRpZXM6IGFueVtdO1xuICAgIGlzU2F2aW5nOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsLFxuICAgICAgICBwcml2YXRlIGpoaUxhbmd1YWdlU2VydmljZTogSmhpTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGRhdGFVdGlsczogRGF0YVV0aWxzLFxuICAgICAgICBwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHNlcnZpY2VtZWRpY2FsU2VydmljZTogU2VydmljZW1lZGljYWxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICAgKSB7XG4gICAgICAgIHRoaXMuamhpTGFuZ3VhZ2VTZXJ2aWNlLnNldExvY2F0aW9ucyhbJ3NlcnZpY2VtZWRpY2FsJ10pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXV0aG9yaXRpZXMgPSBbJ1JPTEVfVVNFUicsICdST0xFX0FETUlOJ107XG4gICAgfVxuICAgIGJ5dGVTaXplKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFVdGlscy5ieXRlU2l6ZShmaWVsZCk7XG4gICAgfVxuXG4gICAgb3BlbkZpbGUoY29udGVudFR5cGUsIGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFVdGlscy5vcGVuRmlsZShjb250ZW50VHlwZSwgZmllbGQpO1xuICAgIH1cblxuICAgIHNldEZpbGVEYXRhKCRldmVudCwgc2VydmljZW1lZGljYWwsIGZpZWxkLCBpc0ltYWdlKSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmZpbGVzICYmICRldmVudC50YXJnZXQuZmlsZXNbMF0pIHtcbiAgICAgICAgICAgIGxldCAkZmlsZSA9ICRldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgICAgICBpZiAoaXNJbWFnZSAmJiAhL15pbWFnZVxcLy8udGVzdCgkZmlsZS50eXBlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0YVV0aWxzLnRvQmFzZTY0KCRmaWxlLCAoYmFzZTY0RGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlcnZpY2VtZWRpY2FsW2ZpZWxkXSA9IGJhc2U2NERhdGE7XG4gICAgICAgICAgICAgICAgc2VydmljZW1lZGljYWxbYCR7ZmllbGR9Q29udGVudFR5cGVgXSA9ICRmaWxlLnR5cGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGVhciAoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygnY2FuY2VsJyk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt7IG91dGxldHM6IHsgcG9wdXA6IG51bGwgfX1dLCB7IHJlcGxhY2VVcmw6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgc2F2ZSAoKSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5zZXJ2aWNlbWVkaWNhbC5pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNlcnZpY2VtZWRpY2FsU2VydmljZS51cGRhdGUodGhpcy5zZXJ2aWNlbWVkaWNhbClcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXM6IFNlcnZpY2VtZWRpY2FsKSA9PiB0aGlzLm9uU2F2ZVN1Y2Nlc3MocmVzKSwgKHJlczogUmVzcG9uc2UpID0+IHRoaXMub25TYXZlRXJyb3IocmVzLmpzb24oKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlbWVkaWNhbC5jaGVmPT1cImFcIlxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlbWVkaWNhbFNlcnZpY2UuY3JlYXRlKHRoaXMuc2VydmljZW1lZGljYWwpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzOiBTZXJ2aWNlbWVkaWNhbCkgPT4gdGhpcy5vblNhdmVTdWNjZXNzKHJlcyksIChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLm9uU2F2ZUVycm9yKHJlcy5qc29uKCkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25TYXZlU3VjY2VzcyAocmVzdWx0OiBTZXJ2aWNlbWVkaWNhbCkge1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3QoeyBuYW1lOiAnc2VydmljZW1lZGljYWxMaXN0TW9kaWZpY2F0aW9uJywgY29udGVudDogJ09LJ30pO1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcyhyZXN1bHQpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbeyBvdXRsZXRzOiB7IHBvcHVwOiBudWxsIH19XSwgeyByZXBsYWNlVXJsOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TYXZlRXJyb3IgKGVycm9yKSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkVycm9yKGVycm9yKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRXJyb3IgKGVycm9yKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKGVycm9yLm1lc3NhZ2UsIG51bGwsIG51bGwpO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktc2VydmljZW1lZGljYWwtcG9wdXAnLFxuICAgIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlbWVkaWNhbFBvcHVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuICAgIHJvdXRlU3ViOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHNlcnZpY2VtZWRpY2FsUG9wdXBTZXJ2aWNlOiBTZXJ2aWNlbWVkaWNhbFBvcHVwU2VydmljZVxuICAgICkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvdXRlU3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICBpZiAoIHBhcmFtc1snaWQnXSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5zZXJ2aWNlbWVkaWNhbFBvcHVwU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAub3BlbihTZXJ2aWNlbWVkaWNhbERpYWxvZ0NvbXBvbmVudCwgcGFyYW1zWydpZCddKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMuc2VydmljZW1lZGljYWxQb3B1cFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgLm9wZW4oU2VydmljZW1lZGljYWxEaWFsb2dDb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnJvdXRlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9zZXJ2aWNlbWVkaWNhbC9zZXJ2aWNlbWVkaWNhbC1kaWFsb2cuY29tcG9uZW50LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==
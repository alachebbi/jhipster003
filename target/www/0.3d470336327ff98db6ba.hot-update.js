webpackHotUpdate(0,{

/***/ "./src/main/webapp/app/entities/chef-service/chef-service-dialog.component.ts":
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
var servicemedical_service_1 = __webpack_require__("./src/main/webapp/app/entities/servicemedical/servicemedical.service.ts");
var chef_service_popup_service_1 = __webpack_require__("./src/main/webapp/app/entities/chef-service/chef-service-popup.service.ts");
var chef_service_service_1 = __webpack_require__("./src/main/webapp/app/entities/chef-service/chef-service.service.ts");
var ChefServiceDialogComponent = (function () {
    function ChefServiceDialogComponent(activeModal, jhiLanguageService, servicemedicalService, dataUtils, alertService, chefServiceService, eventManager, router) {
        this.activeModal = activeModal;
        this.jhiLanguageService = jhiLanguageService;
        this.servicemedicalService = servicemedicalService;
        this.dataUtils = dataUtils;
        this.alertService = alertService;
        this.chefServiceService = chefServiceService;
        this.eventManager = eventManager;
        this.router = router;
        this.jhiLanguageService.setLocations(['chefService']);
    }
    ChefServiceDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        //this.loadAllserv();
        this.loadService();
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    ChefServiceDialogComponent.prototype.byteSize = function (field) {
        return this.dataUtils.byteSize(field);
    };
    ChefServiceDialogComponent.prototype.openFile = function (contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    };
    ChefServiceDialogComponent.prototype.loadService = function () {
        var _this = this;
        this.servicemedicalService.query().subscribe(function (res) {
            _this.servicemedicals = res.json().filter(function (servicemedical) { return servicemedical.chef == null; });
        }, function (res) { return _this.onError(res.json()); });
    };
    ChefServiceDialogComponent.prototype.setFileData = function ($event, chefService, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            var $file_1 = $event.target.files[0];
            if (isImage && !/^image\//.test($file_1.type)) {
                return;
            }
            this.dataUtils.toBase64($file_1, function (base64Data) {
                chefService[field] = base64Data;
                chefService[field + "ContentType"] = $file_1.type;
            });
        }
    };
    ChefServiceDialogComponent.prototype.modifierservicechef = function () {
    };
    ChefServiceDialogComponent.prototype.loadAllserv = function () {
        var _this = this;
        this.servicemedicalService.query().subscribe(function (res) {
            _this.servicemedicals = res.json();
        }, function (res) { return _this.onError(res.json()); });
    };
    ChefServiceDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    ChefServiceDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.chefService.id !== undefined) {
            this.chefServiceService.update(this.chefService)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
        else {
            this.chefServiceService.create(this.chefService)
                .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onSaveError(res.json()); });
        }
    };
    ChefServiceDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'chefServiceListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    ChefServiceDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        this.onError(error);
    };
    ChefServiceDialogComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    return ChefServiceDialogComponent;
}());
ChefServiceDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-chef-service-dialog',
        template: __webpack_require__("./src/main/webapp/app/entities/chef-service/chef-service-dialog.component.html")
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiLanguageService,
        servicemedical_service_1.ServicemedicalService,
        ng_jhipster_1.DataUtils,
        ng_jhipster_1.AlertService,
        chef_service_service_1.ChefServiceService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], ChefServiceDialogComponent);
exports.ChefServiceDialogComponent = ChefServiceDialogComponent;
var ChefServicePopupComponent = (function () {
    function ChefServicePopupComponent(route, chefServicePopupService) {
        this.route = route;
        this.chefServicePopupService = chefServicePopupService;
    }
    ChefServicePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.modalRef = _this.chefServicePopupService
                    .open(ChefServiceDialogComponent, params['id']);
            }
            else {
                _this.modalRef = _this.chefServicePopupService
                    .open(ChefServiceDialogComponent);
            }
        });
    };
    ChefServicePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return ChefServicePopupComponent;
}());
ChefServicePopupComponent = __decorate([
    core_1.Component({
        selector: 'jhi-chef-service-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        chef_service_popup_service_1.ChefServicePopupService])
], ChefServicePopupComponent);
exports.ChefServicePopupComponent = ChefServicePopupComponent;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2NoZWYtc2VydmljZS9jaGVmLXNlcnZpY2UtZGlhbG9nLmNvbXBvbmVudC50cz9kMDE0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBNkQ7QUFDN0Qsc0NBQXlEO0FBR3pELDRDQUF5RTtBQUN6RSwyQ0FBd0Y7QUFHeEYsOEhBQStFO0FBRy9FLG9JQUF1RTtBQUN2RSx3SEFBNEQ7QUFLNUQsSUFBYSwwQkFBMEI7SUFNbkMsb0NBQ1csV0FBMkIsRUFDMUIsa0JBQXNDLEVBQ3RDLHFCQUE0QyxFQUM1QyxTQUFvQixFQUNwQixZQUEwQixFQUMxQixrQkFBc0MsRUFDdEMsWUFBMEIsRUFDMUIsTUFBYztRQVBmLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUMxQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELDZDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixxQkFBcUI7UUFDckIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5CLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELDZDQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFB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d0I7UUFDbEMsUUFBUSxFQUFFLEVBQUU7S0FDZixDQUFDO3FDQU9xQix1QkFBYztRQUNJLG9EQUF1QjtHQVBuRCx5QkFBeUIsQ0EwQnJDO0FBMUJZLDhEQUF5QiIsImZpbGUiOiIwLjNkNDcwMzM2MzI3ZmY5OGRiNmJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsLCBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IEV2ZW50TWFuYWdlciwgQWxlcnRTZXJ2aWNlLCBKaGlMYW5ndWFnZVNlcnZpY2UsIERhdGFVdGlscyB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHtTZXJ2aWNlbWVkaWNhbH0gZnJvbSBcIi4uL3NlcnZpY2VtZWRpY2FsL3NlcnZpY2VtZWRpY2FsLm1vZGVsXCI7XG5pbXBvcnQge1NlcnZpY2VtZWRpY2FsU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VtZWRpY2FsL3NlcnZpY2VtZWRpY2FsLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgQ2hlZlNlcnZpY2UgfSBmcm9tICcuL2NoZWYtc2VydmljZS5tb2RlbCc7XG5pbXBvcnQgeyBDaGVmU2VydmljZVBvcHVwU2VydmljZSB9IGZyb20gJy4vY2hlZi1zZXJ2aWNlLXBvcHVwLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hlZlNlcnZpY2VTZXJ2aWNlIH0gZnJvbSAnLi9jaGVmLXNlcnZpY2Uuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1jaGVmLXNlcnZpY2UtZGlhbG9nJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2hlZi1zZXJ2aWNlLWRpYWxvZy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ2hlZlNlcnZpY2VEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY2hlZlNlcnZpY2U6IENoZWZTZXJ2aWNlO1xuICAgIHNlcnZpY2VtZWRpY2FsczpTZXJ2aWNlbWVkaWNhbFtdO1xuICAgIGF1dGhvcml0aWVzOiBhbnlbXTtcbiAgICBpc1NhdmluZzogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCxcbiAgICAgICAgcHJpdmF0ZSBqaGlMYW5ndWFnZVNlcnZpY2U6IEpoaUxhbmd1YWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBzZXJ2aWNlbWVkaWNhbFNlcnZpY2U6IFNlcnZpY2VtZWRpY2FsU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBkYXRhVXRpbHM6IERhdGFVdGlscyxcbiAgICAgICAgcHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBjaGVmU2VydmljZVNlcnZpY2U6IENoZWZTZXJ2aWNlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlcixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICAgICkge1xuICAgICAgICB0aGlzLmpoaUxhbmd1YWdlU2VydmljZS5zZXRMb2NhdGlvbnMoWydjaGVmU2VydmljZSddKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICAgICAgICAvL3RoaXMubG9hZEFsbHNlcnYoKTtcbiAgICAgICAgdGhpcy5sb2FkU2VydmljZSgpO1xuXG4gICAgICAgIHRoaXMuYXV0aG9yaXRpZXMgPSBbJ1JPTEVfVVNFUicsICdST0xFX0FETUlOJ107XG4gICAgfVxuICAgIGJ5dGVTaXplKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFVdGlscy5ieXRlU2l6ZShmaWVsZCk7XG4gICAgfVxuXG4gICAgb3BlbkZpbGUoY29udGVudFR5cGUsIGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFVdGlscy5vcGVuRmlsZShjb250ZW50VHlwZSwgZmllbGQpO1xuICAgIH1cblxuXG5cbiAgICBsb2FkU2VydmljZSgpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlbWVkaWNhbFNlcnZpY2UucXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZW1lZGljYWxzID0gcmVzLmpzb24oKS5maWx0ZXIoc2VydmljZW1lZGljYWwgPT5zZXJ2aWNlbWVkaWNhbC5jaGVmPT1udWxsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vbkVycm9yKHJlcy5qc29uKCkpXG4gICAgICAgICk7XG5cbiAgICB9XG4gICAgc2V0RmlsZURhdGEoJGV2ZW50LCBjaGVmU2VydmljZSwgZmllbGQsIGlzSW1hZ2UpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuZmlsZXMgJiYgJGV2ZW50LnRhcmdldC5maWxlc1swXSkge1xuICAgICAgICAgICAgbGV0ICRmaWxlID0gJGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgICAgIGlmIChpc0ltYWdlICYmICEvXmltYWdlXFwvLy50ZXN0KCRmaWxlLnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhVXRpbHMudG9CYXNlNjQoJGZpbGUsIChiYXNlNjREYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY2hlZlNlcnZpY2VbZmllbGRdID0gYmFzZTY0RGF0YTtcbiAgICAgICAgICAgICAgICBjaGVmU2VydmljZVtgJHtmaWVsZH1Db250ZW50VHlwZWBdID0gJGZpbGUudHlwZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1vZGlmaWVyc2VydmljZWNoZWYoKXtcbiAgICAgICAgXG4gICAgfVxuICAgIGxvYWRBbGxzZXJ2KCkge1xuICAgICAgICB0aGlzLnNlcnZpY2VtZWRpY2FsU2VydmljZS5xdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlbWVkaWNhbHMgPSByZXMuanNvbigpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLm9uRXJyb3IocmVzLmpzb24oKSlcbiAgICAgICAgKTtcbiAgICB9XG4gICAgY2xlYXIgKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZU1vZGFsLmRpc21pc3MoJ2NhbmNlbCcpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbeyBvdXRsZXRzOiB7IHBvcHVwOiBudWxsIH19XSwgeyByZXBsYWNlVXJsOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHNhdmUgKCkge1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuY2hlZlNlcnZpY2UuaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5jaGVmU2VydmljZVNlcnZpY2UudXBkYXRlKHRoaXMuY2hlZlNlcnZpY2UpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzOiBDaGVmU2VydmljZSkgPT4gdGhpcy5vblNhdmVTdWNjZXNzKHJlcyksIChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLm9uU2F2ZUVycm9yKHJlcy5qc29uKCkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hlZlNlcnZpY2VTZXJ2aWNlLmNyZWF0ZSh0aGlzLmNoZWZTZXJ2aWNlKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlczogQ2hlZlNlcnZpY2UpID0+IHRoaXMub25TYXZlU3VjY2VzcyhyZXMpLCAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vblNhdmVFcnJvcihyZXMuanNvbigpKSk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25TYXZlU3VjY2VzcyAocmVzdWx0OiBDaGVmU2VydmljZSkge1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3QoeyBuYW1lOiAnY2hlZlNlcnZpY2VMaXN0TW9kaWZpY2F0aW9uJywgY29udGVudDogJ09LJ30pO1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcyhyZXN1bHQpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbeyBvdXRsZXRzOiB7IHBvcHVwOiBudWxsIH19XSwgeyByZXBsYWNlVXJsOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TYXZlRXJyb3IgKGVycm9yKSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkVycm9yKGVycm9yKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRXJyb3IgKGVycm9yKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKGVycm9yLm1lc3NhZ2UsIG51bGwsIG51bGwpO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktY2hlZi1zZXJ2aWNlLXBvcHVwJyxcbiAgICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgQ2hlZlNlcnZpY2VQb3B1cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcbiAgICByb3V0ZVN1YjogYW55O1xuXG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBjaGVmU2VydmljZVBvcHVwU2VydmljZTogQ2hlZlNlcnZpY2VQb3B1cFNlcnZpY2VcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZVN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgaWYgKCBwYXJhbXNbJ2lkJ10gKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMuY2hlZlNlcnZpY2VQb3B1cFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgLm9wZW4oQ2hlZlNlcnZpY2VEaWFsb2dDb21wb25lbnQsIHBhcmFtc1snaWQnXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLmNoZWZTZXJ2aWNlUG9wdXBTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgIC5vcGVuKENoZWZTZXJ2aWNlRGlhbG9nQ29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvY2hlZi1zZXJ2aWNlL2NoZWYtc2VydmljZS1kaWFsb2cuY29tcG9uZW50LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==
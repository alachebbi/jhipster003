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
        this.loadAllserv();
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
        var _this = this;
        this.services.forEach(function (item, index) {
            _this.servicemedicalService.trouver(_this.chefService.servicemedi)
                .subscribe(function (servicemedical) {
                _this.servicemedical.chef == _this.chefService.nometprenom;
                _this.servicemedicalService.update(_this.servicemedical);
            });
        });
    };
    ChefServiceDialogComponent.prototype.loadAllserv = function () {
        var _this = this;
        this.servicemedicalService.query().subscribe(function (res) {
            _this.services = res.json();
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
            this.modifierservicechef();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2NoZWYtc2VydmljZS9jaGVmLXNlcnZpY2UtZGlhbG9nLmNvbXBvbmVudC50cz9kMDE0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBNkQ7QUFDN0Qsc0NBQXlEO0FBR3pELDRDQUF5RTtBQUN6RSwyQ0FBd0Y7QUFHeEYsOEhBQStFO0FBRy9FLG9JQUF1RTtBQUN2RSx3SEFBNEQ7QUFLNUQsSUFBYSwwQkFBMEI7SUFRbkMsb0NBQ1csV0FBMkIsRUFDMUIsa0JBQXNDLEVBQ3RDLHFCQUE0QyxFQUM1QyxTQUFvQixFQUNwQixZQUEwQixFQUMxQixrQkFBc0MsRUFDdEMsWUFBMEIsRUFDMUIsTUFBYztRQVBmLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUMxQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELDZDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixxQkFBcUI7UUFDckIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVsQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCw2Q0FBUSxHQUFSLFVBQVMsS0FBSztRQUNWLE1B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QUFDO2dCQUNqQixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyx1QkFBdUI7cUJBQ3ZDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4RCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsdUJBQXVCO3FCQUN2QyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUMxQyxDQUFDO1FBRUwsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsK0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUNMLGdDQUFDO0FBQUQsQ0FBQztBQTFCWSx5QkFBeUI7SUFKckMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSx3QkFBd0I7UUFDbEMsUUFBUSxFQUFFLEVBQUU7S0FDZixDQUFDO3FDQU9xQix1QkFBYztRQUNJLG9EQUF1QjtHQVBuRCx5QkFBeUIsQ0EwQnJDO0FBMUJZLDhEQUF5QiIsImZpbGUiOiIwLjcwOTg4NTdmMDQ2ODlmN2JmZWQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsLCBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IEV2ZW50TWFuYWdlciwgQWxlcnRTZXJ2aWNlLCBKaGlMYW5ndWFnZVNlcnZpY2UsIERhdGFVdGlscyB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHtTZXJ2aWNlbWVkaWNhbH0gZnJvbSBcIi4uL3NlcnZpY2VtZWRpY2FsL3NlcnZpY2VtZWRpY2FsLm1vZGVsXCI7XG5pbXBvcnQge1NlcnZpY2VtZWRpY2FsU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VtZWRpY2FsL3NlcnZpY2VtZWRpY2FsLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgQ2hlZlNlcnZpY2UgfSBmcm9tICcuL2NoZWYtc2VydmljZS5tb2RlbCc7XG5pbXBvcnQgeyBDaGVmU2VydmljZVBvcHVwU2VydmljZSB9IGZyb20gJy4vY2hlZi1zZXJ2aWNlLXBvcHVwLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hlZlNlcnZpY2VTZXJ2aWNlIH0gZnJvbSAnLi9jaGVmLXNlcnZpY2Uuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1jaGVmLXNlcnZpY2UtZGlhbG9nJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2hlZi1zZXJ2aWNlLWRpYWxvZy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ2hlZlNlcnZpY2VEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY2hlZlNlcnZpY2U6IENoZWZTZXJ2aWNlO1xuICAgIHNlcnZpY2VtZWRpY2FsczpTZXJ2aWNlbWVkaWNhbFtdO1xuICAgIHNlcnZpY2VtZWRpY2FsOlNlcnZpY2VtZWRpY2FsO1xuICAgIHNlcnZpY2VzOlNlcnZpY2VtZWRpY2FsW107XG4gICAgYXV0aG9yaXRpZXM6IGFueVtdO1xuICAgIGlzU2F2aW5nOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsLFxuICAgICAgICBwcml2YXRlIGpoaUxhbmd1YWdlU2VydmljZTogSmhpTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHNlcnZpY2VtZWRpY2FsU2VydmljZTogU2VydmljZW1lZGljYWxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGRhdGFVdGlsczogRGF0YVV0aWxzLFxuICAgICAgICBwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGNoZWZTZXJ2aWNlU2VydmljZTogQ2hlZlNlcnZpY2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICAgKSB7XG4gICAgICAgIHRoaXMuamhpTGFuZ3VhZ2VTZXJ2aWNlLnNldExvY2F0aW9ucyhbJ2NoZWZTZXJ2aWNlJ10pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIC8vdGhpcy5sb2FkQWxsc2VydigpO1xuICAgICAgICB0aGlzLmxvYWRTZXJ2aWNlKCk7XG4gICAgICAgdGhpcy5sb2FkQWxsc2VydigpO1xuXG4gICAgICAgIHRoaXMuYXV0aG9yaXRpZXMgPSBbJ1JPTEVfVVNFUicsICdST0xFX0FETUlOJ107XG4gICAgfVxuICAgIGJ5dGVTaXplKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFVdGlscy5ieXRlU2l6ZShmaWVsZCk7XG4gICAgfVxuXG4gICAgb3BlbkZpbGUoY29udGVudFR5cGUsIGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFVdGlscy5vcGVuRmlsZShjb250ZW50VHlwZSwgZmllbGQpO1xuICAgIH1cblxuXG5cbiAgICBsb2FkU2VydmljZSgpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlbWVkaWNhbFNlcnZpY2UucXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZW1lZGljYWxzID0gcmVzLmpzb24oKS5maWx0ZXIoc2VydmljZW1lZGljYWwgPT5zZXJ2aWNlbWVkaWNhbC5jaGVmPT1udWxsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vbkVycm9yKHJlcy5qc29uKCkpXG4gICAgICAgICk7XG5cbiAgICB9XG4gICAgc2V0RmlsZURhdGEoJGV2ZW50LCBjaGVmU2VydmljZSwgZmllbGQsIGlzSW1hZ2UpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuZmlsZXMgJiYgJGV2ZW50LnRhcmdldC5maWxlc1swXSkge1xuICAgICAgICAgICAgbGV0ICRmaWxlID0gJGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgICAgIGlmIChpc0ltYWdlICYmICEvXmltYWdlXFwvLy50ZXN0KCRmaWxlLnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhVXRpbHMudG9CYXNlNjQoJGZpbGUsIChiYXNlNjREYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY2hlZlNlcnZpY2VbZmllbGRdID0gYmFzZTY0RGF0YTtcbiAgICAgICAgICAgICAgICBjaGVmU2VydmljZVtgJHtmaWVsZH1Db250ZW50VHlwZWBdID0gJGZpbGUudHlwZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1vZGlmaWVyc2VydmljZWNoZWYoKXtcbiAgICAgICAgdGhpcy5zZXJ2aWNlcy5mb3JFYWNoKChpdGVtLGluZGV4KT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZW1lZGljYWxTZXJ2aWNlLnRyb3V2ZXIodGhpcy5jaGVmU2VydmljZS5zZXJ2aWNlbWVkaSlcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VtZWRpY2FsPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlbWVkaWNhbC5jaGVmPT10aGlzLmNoZWZTZXJ2aWNlLm5vbWV0cHJlbm9tO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlbWVkaWNhbFNlcnZpY2UudXBkYXRlKHRoaXMuc2VydmljZW1lZGljYWwpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICAgIGxvYWRBbGxzZXJ2KCkge1xuICAgICAgICB0aGlzLnNlcnZpY2VtZWRpY2FsU2VydmljZS5xdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlcyA9IHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKHJlczogUmVzcG9uc2UpID0+IHRoaXMub25FcnJvcihyZXMuanNvbigpKVxuICAgICAgICApO1xuICAgIH1cbiAgICBjbGVhciAoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygnY2FuY2VsJyk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt7IG91dGxldHM6IHsgcG9wdXA6IG51bGwgfX1dLCB7IHJlcGxhY2VVcmw6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgc2F2ZSAoKSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5jaGVmU2VydmljZS5pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWZTZXJ2aWNlU2VydmljZS51cGRhdGUodGhpcy5jaGVmU2VydmljZSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXM6IENoZWZTZXJ2aWNlKSA9PiB0aGlzLm9uU2F2ZVN1Y2Nlc3MocmVzKSwgKHJlczogUmVzcG9uc2UpID0+IHRoaXMub25TYXZlRXJyb3IocmVzLmpzb24oKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGVmU2VydmljZVNlcnZpY2UuY3JlYXRlKHRoaXMuY2hlZlNlcnZpY2UpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzOiBDaGVmU2VydmljZSkgPT4gdGhpcy5vblNhdmVTdWNjZXNzKHJlcyksIChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLm9uU2F2ZUVycm9yKHJlcy5qc29uKCkpKTtcbiAgICAgICAgICAgIHRoaXMubW9kaWZpZXJzZXJ2aWNlY2hlZigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNhdmVTdWNjZXNzIChyZXN1bHQ6IENoZWZTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLmJyb2FkY2FzdCh7IG5hbWU6ICdjaGVmU2VydmljZUxpc3RNb2RpZmljYXRpb24nLCBjb250ZW50OiAnT0snfSk7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3RpdmVNb2RhbC5kaXNtaXNzKHJlc3VsdCk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt7IG91dGxldHM6IHsgcG9wdXA6IG51bGwgfX1dLCB7IHJlcGxhY2VVcmw6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNhdmVFcnJvciAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uRXJyb3IoZXJyb3IpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25FcnJvciAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UuZXJyb3IoZXJyb3IubWVzc2FnZSwgbnVsbCwgbnVsbCk7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1jaGVmLXNlcnZpY2UtcG9wdXAnLFxuICAgIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBDaGVmU2VydmljZVBvcHVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuICAgIHJvdXRlU3ViOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIGNoZWZTZXJ2aWNlUG9wdXBTZXJ2aWNlOiBDaGVmU2VydmljZVBvcHVwU2VydmljZVxuICAgICkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvdXRlU3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICBpZiAoIHBhcmFtc1snaWQnXSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5jaGVmU2VydmljZVBvcHVwU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAub3BlbihDaGVmU2VydmljZURpYWxvZ0NvbXBvbmVudCwgcGFyYW1zWydpZCddKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMuY2hlZlNlcnZpY2VQb3B1cFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgLm9wZW4oQ2hlZlNlcnZpY2VEaWFsb2dDb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnJvdXRlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9jaGVmLXNlcnZpY2UvY2hlZi1zZXJ2aWNlLWRpYWxvZy5jb21wb25lbnQudHMiXSwic291cmNlUm9vdCI6IiJ9
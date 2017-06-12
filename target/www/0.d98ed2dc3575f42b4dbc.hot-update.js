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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2NoZWYtc2VydmljZS9jaGVmLXNlcnZpY2UtZGlhbG9nLmNvbXBvbmVudC50cz9kMDE0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBNkQ7QUFDN0Qsc0NBQXlEO0FBR3pELDRDQUF5RTtBQUN6RSwyQ0FBd0Y7QUFHeEYsOEhBQStFO0FBRy9FLG9JQUF1RTtBQUN2RSx3SEFBNEQ7QUFLNUQsSUFBYSwwQkFBMEI7SUFNbkMsb0NBQ1csV0FBMkIsRUFDMUIsa0JBQXNDLEVBQ3RDLHFCQUE0QyxFQUM1QyxTQUFvQixFQUNwQixZQUEwQixFQUMxQixrQkFBc0MsRUFDdEMsWUFBMEIsRUFDMUIsTUFBYztRQVBmLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUMxQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELDZDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixxQkFBcUI7UUFDckIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5CLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELDZDQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCw2Q0FBUSxHQUFSLFVBQVMsV0FBVyxFQUFFLEtBQUs7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBSUQsZ0RBQVcsR0FBWDtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FDeEMsVUFBQyxHQUFhO1lBQ1YsS0FBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLHdCQUFjLElBQUcscUJBQWMsQ0FBQyxJQUFJLElBQUUsSUFBSSxFQUF6QixDQUF5QixDQUFDLENBQUM7UUFDekYsQ0FBQyxFQUNELFVBQUMsR0FBYSxJQUFLLFlBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQXhCLENBQXdCLENBQzlDLENBQUM7SUFFTixDQUFDO0lBQ0QsZ0RBQVcsR0FBWCxVQUFZLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE9BQU87UUFDM0MsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hELElBQUksT0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUMsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUNELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQUssRUFBRSxVQUFDLFVBQVU7Z0JBQ3RDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxVQUFVLENBQUM7Z0JBQ2hDLFdBQVcsQ0FBSSxLQUFLLGdCQUFhLENBQUMsR0FBRyxPQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3BELENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUM7SUFDRCxnREFBVyxHQUFYO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUN4QyxVQUFDLEdBQWE7WUFDVixLQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QyxDQUFDLEVBQ0QsVUFBQyxHQUFhLElBQUssWUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBeEIsQ0FBd0IsQ0FDOUMsQ0FBQztJQUNOLENBQUM7SUFDRCwwQ0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBQyxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQseUNBQUksR0FBSjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7aUJBQzNDLFNBQVMsQ0FBQyxVQUFDLEdBQWdCLElBQUssWUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBdkIsQ0FBdUIsRUFBRSxVQUFDLEdBQWEsSUFBSyxZQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7UUFDbkgsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2lCQUMzQyxTQUFTLENBQUMsVUFBQyxHQUFnQixJQUFLLFlBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQXZCLENBQXVCLEVBQUUsVUFBQyxHQUFhLElBQUssWUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO1FBQ25ILENBQUM7SUFDTCxDQUFDO0lBRU8sa0RBQWEsR0FBckIsVUFBdUIsTUFBbUI7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsNkJBQTZCLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBQyxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRU8sZ0RBQVcsR0FBbkIsVUFBcUIsS0FBSztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTyw0Q0FBTyxHQUFmLFVBQWlCLEtBQUs7UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNMLGlDQUFDO0FBQUQsQ0FBQztBQWhHWSwwQkFBMEI7SUFKdEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSx5QkFBeUI7UUFDbkMsNkJBQWEsaUZBQXNDO0tBQ3RELENBQUM7cUNBUTBCLDZCQUFjO1FBQ04sZ0NBQWtCO1FBQ2YsOENBQXFCO1FBQ2pDLHVCQUFTO1FBQ04sMEJBQVk7UUFDTix5Q0FBa0I7UUFDeEIsMEJBQVk7UUFDbEIsZUFBTTtHQWRqQiwwQkFBMEIsQ0FnR3RDO0FBaEdZLGdFQUEwQjtBQXNHdkMsSUFBYSx5QkFBeUI7SUFLbEMsbUNBQ1ksS0FBcUIsRUFDckIsdUJBQWdEO1FBRGhELFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7SUFDekQsQ0FBQztJQUVKLDRDQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGdCQUFNO1lBQzlDLEVBQUUsQ0FBQyxDQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLHVCQUF1QjtxQkFDdkMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3hELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyx1QkFBdUI7cUJBQ3ZDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQzFDLENBQUM7UUFFTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwrQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsZ0NBQUM7QUFBRCxDQUFDO0FBMUJZLHlCQUF5QjtJQUpyQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLHdCQUF3QjtRQUNsQyxRQUFRLEVBQUUsRUFBRTtLQUNmLENBQUM7cUNBT3FCLHVCQUFjO1FBQ0ksb0RBQXVCO0dBUG5ELHlCQUF5QixDQTBCckM7QUExQlksOERBQXlCIiwiZmlsZSI6IjAuZDk4ZWQyZGMzNTc1ZjQyYjRkYmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwsIE5nYk1vZGFsUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgRXZlbnRNYW5hZ2VyLCBBbGVydFNlcnZpY2UsIEpoaUxhbmd1YWdlU2VydmljZSwgRGF0YVV0aWxzIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQge1NlcnZpY2VtZWRpY2FsfSBmcm9tIFwiLi4vc2VydmljZW1lZGljYWwvc2VydmljZW1lZGljYWwubW9kZWxcIjtcbmltcG9ydCB7U2VydmljZW1lZGljYWxTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZW1lZGljYWwvc2VydmljZW1lZGljYWwuc2VydmljZVwiO1xuXG5pbXBvcnQgeyBDaGVmU2VydmljZSB9IGZyb20gJy4vY2hlZi1zZXJ2aWNlLm1vZGVsJztcbmltcG9ydCB7IENoZWZTZXJ2aWNlUG9wdXBTZXJ2aWNlIH0gZnJvbSAnLi9jaGVmLXNlcnZpY2UtcG9wdXAuc2VydmljZSc7XG5pbXBvcnQgeyBDaGVmU2VydmljZVNlcnZpY2UgfSBmcm9tICcuL2NoZWYtc2VydmljZS5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWNoZWYtc2VydmljZS1kaWFsb2cnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jaGVmLXNlcnZpY2UtZGlhbG9nLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDaGVmU2VydmljZURpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjaGVmU2VydmljZTogQ2hlZlNlcnZpY2U7XG4gICAgc2VydmljZW1lZGljYWxzOlNlcnZpY2VtZWRpY2FsW107XG4gICAgYXV0aG9yaXRpZXM6IGFueVtdO1xuICAgIGlzU2F2aW5nOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsLFxuICAgICAgICBwcml2YXRlIGpoaUxhbmd1YWdlU2VydmljZTogSmhpTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHNlcnZpY2VtZWRpY2FsU2VydmljZTogU2VydmljZW1lZGljYWxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGRhdGFVdGlsczogRGF0YVV0aWxzLFxuICAgICAgICBwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGNoZWZTZXJ2aWNlU2VydmljZTogQ2hlZlNlcnZpY2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICAgKSB7XG4gICAgICAgIHRoaXMuamhpTGFuZ3VhZ2VTZXJ2aWNlLnNldExvY2F0aW9ucyhbJ2NoZWZTZXJ2aWNlJ10pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIC8vdGhpcy5sb2FkQWxsc2VydigpO1xuICAgICAgICB0aGlzLmxvYWRTZXJ2aWNlKCk7XG5cbiAgICAgICAgdGhpcy5hdXRob3JpdGllcyA9IFsnUk9MRV9VU0VSJywgJ1JPTEVfQURNSU4nXTtcbiAgICB9XG4gICAgYnl0ZVNpemUoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVV0aWxzLmJ5dGVTaXplKGZpZWxkKTtcbiAgICB9XG5cbiAgICBvcGVuRmlsZShjb250ZW50VHlwZSwgZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVV0aWxzLm9wZW5GaWxlKGNvbnRlbnRUeXBlLCBmaWVsZCk7XG4gICAgfVxuXG5cblxuICAgIGxvYWRTZXJ2aWNlKCkge1xuICAgICAgICB0aGlzLnNlcnZpY2VtZWRpY2FsU2VydmljZS5xdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlbWVkaWNhbHMgPSByZXMuanNvbigpLmZpbHRlcihzZXJ2aWNlbWVkaWNhbCA9PnNlcnZpY2VtZWRpY2FsLmNoZWY9PW51bGwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLm9uRXJyb3IocmVzLmpzb24oKSlcbiAgICAgICAgKTtcblxuICAgIH1cbiAgICBzZXRGaWxlRGF0YSgkZXZlbnQsIGNoZWZTZXJ2aWNlLCBmaWVsZCwgaXNJbWFnZSkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5maWxlcyAmJiAkZXZlbnQudGFyZ2V0LmZpbGVzWzBdKSB7XG4gICAgICAgICAgICBsZXQgJGZpbGUgPSAkZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICAgICAgaWYgKGlzSW1hZ2UgJiYgIS9eaW1hZ2VcXC8vLnRlc3QoJGZpbGUudHlwZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhdGFVdGlscy50b0Jhc2U2NCgkZmlsZSwgKGJhc2U2NERhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBjaGVmU2VydmljZVtmaWVsZF0gPSBiYXNlNjREYXRhO1xuICAgICAgICAgICAgICAgIGNoZWZTZXJ2aWNlW2Ake2ZpZWxkfUNvbnRlbnRUeXBlYF0gPSAkZmlsZS50eXBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9hZEFsbHNlcnYoKSB7XG4gICAgICAgIHRoaXMuc2VydmljZW1lZGljYWxTZXJ2aWNlLnF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJlczogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VtZWRpY2FscyA9IHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKHJlczogUmVzcG9uc2UpID0+IHRoaXMub25FcnJvcihyZXMuanNvbigpKVxuICAgICAgICApO1xuICAgIH1cbiAgICBjbGVhciAoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygnY2FuY2VsJyk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt7IG91dGxldHM6IHsgcG9wdXA6IG51bGwgfX1dLCB7IHJlcGxhY2VVcmw6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgc2F2ZSAoKSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5jaGVmU2VydmljZS5pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWZTZXJ2aWNlU2VydmljZS51cGRhdGUodGhpcy5jaGVmU2VydmljZSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXM6IENoZWZTZXJ2aWNlKSA9PiB0aGlzLm9uU2F2ZVN1Y2Nlc3MocmVzKSwgKHJlczogUmVzcG9uc2UpID0+IHRoaXMub25TYXZlRXJyb3IocmVzLmpzb24oKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGVmU2VydmljZVNlcnZpY2UuY3JlYXRlKHRoaXMuY2hlZlNlcnZpY2UpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzOiBDaGVmU2VydmljZSkgPT4gdGhpcy5vblNhdmVTdWNjZXNzKHJlcyksIChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLm9uU2F2ZUVycm9yKHJlcy5qc29uKCkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25TYXZlU3VjY2VzcyAocmVzdWx0OiBDaGVmU2VydmljZSkge1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3QoeyBuYW1lOiAnY2hlZlNlcnZpY2VMaXN0TW9kaWZpY2F0aW9uJywgY29udGVudDogJ09LJ30pO1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcyhyZXN1bHQpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbeyBvdXRsZXRzOiB7IHBvcHVwOiBudWxsIH19XSwgeyByZXBsYWNlVXJsOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TYXZlRXJyb3IgKGVycm9yKSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkVycm9yKGVycm9yKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRXJyb3IgKGVycm9yKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKGVycm9yLm1lc3NhZ2UsIG51bGwsIG51bGwpO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktY2hlZi1zZXJ2aWNlLXBvcHVwJyxcbiAgICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgQ2hlZlNlcnZpY2VQb3B1cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcbiAgICByb3V0ZVN1YjogYW55O1xuXG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBjaGVmU2VydmljZVBvcHVwU2VydmljZTogQ2hlZlNlcnZpY2VQb3B1cFNlcnZpY2VcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZVN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgaWYgKCBwYXJhbXNbJ2lkJ10gKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMuY2hlZlNlcnZpY2VQb3B1cFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgLm9wZW4oQ2hlZlNlcnZpY2VEaWFsb2dDb21wb25lbnQsIHBhcmFtc1snaWQnXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLmNoZWZTZXJ2aWNlUG9wdXBTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgIC5vcGVuKENoZWZTZXJ2aWNlRGlhbG9nQ29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvY2hlZi1zZXJ2aWNlL2NoZWYtc2VydmljZS1kaWFsb2cuY29tcG9uZW50LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==
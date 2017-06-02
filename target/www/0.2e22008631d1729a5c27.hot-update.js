webpackHotUpdate(0,{

/***/ "./src/main/webapp/app/entities/reclamation/mesreclamations.component.ts":
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
var ng_jhipster_1 = __webpack_require__(1);
var reclamation_service_1 = __webpack_require__("./src/main/webapp/app/entities/reclamation/reclamation.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var uib_pagination_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/uib-pagination.config.ts");
var MesreclamationsComponent = (function () {
    function MesreclamationsComponent(jhiLanguageService, reclamationService, parseLinks, alertService, principal, activatedRoute, router, eventManager, paginationUtil, paginationConfig) {
        var _this = this;
        this.jhiLanguageService = jhiLanguageService;
        this.reclamationService = reclamationService;
        this.parseLinks = parseLinks;
        this.alertService = alertService;
        this.principal = principal;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.eventManager = eventManager;
        this.paginationUtil = paginationUtil;
        this.paginationConfig = paginationConfig;
        this.itemsPerPage = shared_1.ITEMS_PER_PAGE;
        this.routeData = this.activatedRoute.data.subscribe(function (data) {
            _this.page = data['pagingParams'].page;
            _this.previousPage = data['pagingParams'].page;
            _this.reverse = data['pagingParams'].ascending;
            _this.predicate = data['pagingParams'].predicate;
        });
        this.jhiLanguageService.setLocations(['reclamation']);
    }
    MesreclamationsComponent.prototype.loadAlllike = function () {
        var _this = this;
        this.reclamations.forEach(function (item, index2) {
            _this.reclamationService.find(item.id)
                .subscribe(function (reclamation) {
                if (reclamation.etat == "Traitée") {
                    document.getElementById("k" + index2).setAttribute("disabled", "disabled");
                    document.getElementById("k" + index2).style.opacity = "0.3";
                }
            });
        });
    };
    /* loadAll() {
        this.reclamationService.findByrecusername(this.currentAccount).
            subscribe(reclamations=>{this.reclamations=reclamations;
            this.reclamations.forEach((item,index2)=>{
                    this.reclamationService.find(item.id)
                        .subscribe(
                            reclamation=>{
                                if (reclamation.etat=="Traitée" )
                                {
                                    document.getElementById("k" + index2).setAttribute("disabled","disabled")
                                    document.getElementById("k" + index2).style.opacity="0.3"
 
                                    //style.opacity="0.3"
                                    // l.disabled=true;
 
                                }
                            }
                        );
                }
            );
 
 
        })
     }
     */
    MesreclamationsComponent.prototype.loadAlllikes = function () {
        var _this = this;
        this.reclamations.forEach(function (item, index) {
            _this.reclamationService.find(item.id)
                .subscribe(function (reclamation) {
                if (reclamation.etat == "Traitée") {
                    document.getElementById("l" + index).setAttribute("disabled", "disabled");
                    document.getElementById("l" + index).style.opacity = "0.3";
                }
            });
        });
    };
    /*  loadAlllike() {
          this.reclamations.forEach((item,index2)=>{
                  this.reclamationService.find(item.id)
                      .subscribe(
                          reclamation=>{
                              if (reclamation.etat=="Traitée" )
                              {
                                  document.getElementById("p" + index2).setAttribute("disabled","disabled")
                                  document.getElementById("p" + index2).style.opacity="0.3"
  
                                  //style.opacity="0.3"
                                  // l.disabled=true;
  
                              }
                          }
                      );
              }
          );
      }
  */
    MesreclamationsComponent.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    };
    MesreclamationsComponent.prototype.transition = function () {
        this.router.navigate(['/reclamation'], {
            queryParams: {
                page: this.page,
                size: this.itemsPerPage,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
        });
        this.loadAlllikes();
    };
    MesreclamationsComponent.prototype.clear = function () {
        this.page = 0;
        this.router.navigate(['/reclamation', {
                page: this.page,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }]);
        this.loadAlllikes();
    };
    MesreclamationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
            _this.loadAlllikes();
            _this.loadAlllike();
        });
        this.registerChangeInReclamations();
    };
    MesreclamationsComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    MesreclamationsComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    MesreclamationsComponent.prototype.registerChangeInReclamations = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('reclamationListModification', function (response) { return _this.loadAlllikes(); });
    };
    /*reclamationTraiter(){
     this.loadAll();
     this.reclamations.forEach((item,index)=>{

     if (item.etat=="Traitée" )
     {
     document.getElementById("l" ).setAttribute("disabled","disabled")
     document.getElementById("l" + index).style.opacity="0.3"


     }
     }
     );

     }*/
    MesreclamationsComponent.prototype.Traiter = function (Reclamation) {
        var _this = this;
        /*   this.reclamations.forEach((item,index)=>{

         if (item.etat=="Traitée" )
         {
         // document.getElementById("l" + index).setAttribute("disabled","disabled")
         document.getElementById("l" + index).style.opacity="0.3";
         console.log("asslema");

         }
         }
         );
         */
        Reclamation.etat = "Traitée";
        this.reclamationService.update(Reclamation)
            .subscribe(function (res) { return _this.onSaveSuccess(res); }, function (res) { return _this.onError(res.json()); });
    };
    MesreclamationsComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'reclamationListModification', content: 'OK' });
        this.isSaving = false;
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    MesreclamationsComponent.prototype.onError = function (error) {
        this.alertService.error(error.message, null, null);
    };
    MesreclamationsComponent.prototype.sort = function () {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    MesreclamationsComponent.prototype.onSuccess = function (data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = headers.get('X-Total-Count');
        this.queryCount = this.totalItems;
        // this.page = pagingParams.page;
        this.reclamations = data;
        this.loadAlllikes();
        this.loadAlllike();
        /*this.reclamations.forEach((item,index)=>{

         if (item.etat=="Traitée" )
         {
         // document.getElementById("l" + index).setAttribute("disabled","disabled")
         document.getElementById("l" + index).style.opacity="0.3";
         console.log("asslema");

         }
         }
         );*/
    };
    return MesreclamationsComponent;
}());
MesreclamationsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-mesreclamations',
        template: __webpack_require__("./src/main/webapp/app/entities/reclamation/mesreclamations.component.html")
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        reclamation_service_1.ReclamationService,
        ng_jhipster_1.ParseLinks,
        ng_jhipster_1.AlertService,
        shared_1.Principal,
        router_1.ActivatedRoute,
        router_1.Router,
        ng_jhipster_1.EventManager,
        ng_jhipster_1.PaginationUtil,
        uib_pagination_config_1.PaginationConfig])
], MesreclamationsComponent);
exports.MesreclamationsComponent = MesreclamationsComponent;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3JlY2xhbWF0aW9uL21lc3JlY2xhbWF0aW9ucy5jb21wb25lbnQudHM/NDBiMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0NBQTZEO0FBRTdELHNDQUF5RDtBQUV6RCwyQ0FBeUc7QUFHekcscUhBQTJEO0FBQzNELDRFQUF5RDtBQUN6RCxrSEFBNkU7QUFNN0UsSUFBYSx3QkFBd0I7SUFtQmpDLGtDQUFvQixrQkFBc0MsRUFDdEMsa0JBQXNDLEVBQ3RDLFVBQXNCLEVBQ3RCLFlBQTBCLEVBQzFCLFNBQW9CLEVBQ3BCLGNBQThCLEVBQzlCLE1BQWMsRUFDZCxZQUEwQixFQUMxQixjQUE4QixFQUM5QixnQkFBa0M7UUFUdEQsaUJBa0JDO1FBbEJtQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEQsSUFBSSxDQUFDLFlBQVksR0FBRyx1QkFBYyxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQUk7WUFDcEQsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUks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QzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbEMsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkI7Ozs7Ozs7Ozs7YUFVSztJQUVULENBQUM7SUFHTCwrQkFBQztBQUFELENBQUM7QUE5Ulksd0JBQXdCO0lBSnBDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUscUJBQXFCO1FBQy9CLDZCQUFhLDRFQUFrQztLQUNsRCxDQUFDO3FDQW9CMEMsZ0NBQWtCO1FBQ2xCLHdDQUFrQjtRQUMxQix3QkFBVTtRQUNSLDBCQUFZO1FBQ2Ysa0JBQVM7UUFDSix1QkFBYztRQUN0QixlQUFNO1FBQ0EsMEJBQVk7UUFDViw0QkFBYztRQUNaLHdDQUFnQjtHQTVCN0Msd0JBQXdCLENBOFJwQztBQTlSWSw0REFBd0IiLCJmaWxlIjoiMC4yZTIyMDA4NjMxZDE3MjlhNWMyNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBFdmVudE1hbmFnZXIsIFBhcnNlTGlua3MsIFBhZ2luYXRpb25VdGlsLCBKaGlMYW5ndWFnZVNlcnZpY2UsIEFsZXJ0U2VydmljZSB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgUmVjbGFtYXRpb24gfSBmcm9tICcuL3JlY2xhbWF0aW9uLm1vZGVsJztcbmltcG9ydCB7IFJlY2xhbWF0aW9uU2VydmljZSB9IGZyb20gJy4vcmVjbGFtYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBJVEVNU19QRVJfUEFHRSwgUHJpbmNpcGFsIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IFBhZ2luYXRpb25Db25maWcgfSBmcm9tICcuLi8uLi9ibG9ja3MvY29uZmlnL3VpYi1wYWdpbmF0aW9uLmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLW1lc3JlY2xhbWF0aW9ucycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21lc3JlY2xhbWF0aW9ucy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTWVzcmVjbGFtYXRpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgY3VycmVudEFjY291bnQ6IGFueTtcbiAgICByZWNsYW1hdGlvbnM6IFJlY2xhbWF0aW9uW107XG4gICAgcmVjbGFtYXRpb246IFJlY2xhbWF0aW9uO1xuICAgIGVycm9yOiBhbnk7XG4gICAgc3VjY2VzczogYW55O1xuICAgIGV2ZW50U3Vic2NyaWJlcjogU3Vic2NyaXB0aW9uO1xuICAgIHJvdXRlRGF0YTogYW55O1xuICAgIGxpbmtzOiBhbnk7XG4gICAgdG90YWxJdGVtczogYW55O1xuICAgIHF1ZXJ5Q291bnQ6IGFueTtcbiAgICBpdGVtc1BlclBhZ2U6IGFueTtcbiAgICBwYWdlOiBhbnk7XG4gICAgcHJlZGljYXRlOiBhbnk7XG4gICAgcHJldmlvdXNQYWdlOiBhbnk7XG4gICAgcmV2ZXJzZTogYW55O1xuICAgIGlzU2F2aW5nOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBqaGlMYW5ndWFnZVNlcnZpY2U6IEpoaUxhbmd1YWdlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlY2xhbWF0aW9uU2VydmljZTogUmVjbGFtYXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFyc2VMaW5rczogUGFyc2VMaW5rcyxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWwsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFnaW5hdGlvblV0aWw6IFBhZ2luYXRpb25VdGlsLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFnaW5hdGlvbkNvbmZpZzogUGFnaW5hdGlvbkNvbmZpZykge1xuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IElURU1TX1BFUl9QQUdFO1xuICAgICAgICB0aGlzLnJvdXRlRGF0YSA9IHRoaXMuYWN0aXZhdGVkUm91dGUuZGF0YS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhZ2UgPSBkYXRhWydwYWdpbmdQYXJhbXMnXS5wYWdlO1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1BhZ2UgPSBkYXRhWydwYWdpbmdQYXJhbXMnXS5wYWdlO1xuICAgICAgICAgICAgdGhpcy5yZXZlcnNlID0gZGF0YVsncGFnaW5nUGFyYW1zJ10uYXNjZW5kaW5nO1xuICAgICAgICAgICAgdGhpcy5wcmVkaWNhdGUgPSBkYXRhWydwYWdpbmdQYXJhbXMnXS5wcmVkaWNhdGU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmpoaUxhbmd1YWdlU2VydmljZS5zZXRMb2NhdGlvbnMoWydyZWNsYW1hdGlvbiddKTtcbiAgICB9XG4gICAgbG9hZEFsbGxpa2UoKSB7XG4gICAgICAgIHRoaXMucmVjbGFtYXRpb25zLmZvckVhY2goKGl0ZW0saW5kZXgyKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMucmVjbGFtYXRpb25TZXJ2aWNlLmZpbmQoaXRlbS5pZClcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2xhbWF0aW9uPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY2xhbWF0aW9uLmV0YXQ9PVwiVHJhaXTDqWVcIiApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImtcIiArIGluZGV4Mikuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIixcImRpc2FibGVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia1wiICsgaW5kZXgyKS5zdHlsZS5vcGFjaXR5PVwiMC4zXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3N0eWxlLm9wYWNpdHk9XCIwLjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsLmRpc2FibGVkPXRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAvKiBsb2FkQWxsKCkge1xuICAgICAgIHRoaXMucmVjbGFtYXRpb25TZXJ2aWNlLmZpbmRCeXJlY3VzZXJuYW1lKHRoaXMuY3VycmVudEFjY291bnQpLlxuICAgICAgICAgICBzdWJzY3JpYmUocmVjbGFtYXRpb25zPT57dGhpcy5yZWNsYW1hdGlvbnM9cmVjbGFtYXRpb25zO1xuICAgICAgICAgICB0aGlzLnJlY2xhbWF0aW9ucy5mb3JFYWNoKChpdGVtLGluZGV4Mik9PntcbiAgICAgICAgICAgICAgICAgICB0aGlzLnJlY2xhbWF0aW9uU2VydmljZS5maW5kKGl0ZW0uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZWNsYW1hdGlvbj0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWNsYW1hdGlvbi5ldGF0PT1cIlRyYWl0w6llXCIgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrXCIgKyBpbmRleDIpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsXCJkaXNhYmxlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImtcIiArIGluZGV4Mikuc3R5bGUub3BhY2l0eT1cIjAuM1wiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zdHlsZS5vcGFjaXR5PVwiMC4zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbC5kaXNhYmxlZD10cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICApO1xuXG5cbiAgICAgICB9KVxuICAgIH1cbiAgICAqL1xuXG5cblxuXG5cblxuXG4gICAgbG9hZEFsbGxpa2VzKCkge1xuICAgICAgICB0aGlzLnJlY2xhbWF0aW9ucy5mb3JFYWNoKChpdGVtLGluZGV4KT0+e1xuICAgICAgICAgICAgICAgIHRoaXMucmVjbGFtYXRpb25TZXJ2aWNlLmZpbmQoaXRlbS5pZClcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2xhbWF0aW9uPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY2xhbWF0aW9uLmV0YXQ9PVwiVHJhaXTDqWVcIiApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxcIiArIGluZGV4KS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLFwiZGlzYWJsZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsXCIgKyBpbmRleCkuc3R5bGUub3BhY2l0eT1cIjAuM1wiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zdHlsZS5vcGFjaXR5PVwiMC4zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbC5kaXNhYmxlZD10cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAvKiAgbG9hZEFsbGxpa2UoKSB7XG4gICAgICAgIHRoaXMucmVjbGFtYXRpb25zLmZvckVhY2goKGl0ZW0saW5kZXgyKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMucmVjbGFtYXRpb25TZXJ2aWNlLmZpbmQoaXRlbS5pZClcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2xhbWF0aW9uPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY2xhbWF0aW9uLmV0YXQ9PVwiVHJhaXTDqWVcIiApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBcIiArIGluZGV4Mikuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIixcImRpc2FibGVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicFwiICsgaW5kZXgyKS5zdHlsZS5vcGFjaXR5PVwiMC4zXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3N0eWxlLm9wYWNpdHk9XCIwLjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsLmRpc2FibGVkPXRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuKi9cbiAgICBsb2FkUGFnZShwYWdlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHBhZ2UgIT09IHRoaXMucHJldmlvdXNQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzUGFnZSA9IHBhZ2U7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYW5zaXRpb24oKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3JlY2xhbWF0aW9uJ10sIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgcGFnZTogdGhpcy5wYWdlLFxuICAgICAgICAgICAgICAgIHNpemU6IHRoaXMuaXRlbXNQZXJQYWdlLFxuICAgICAgICAgICAgICAgIHNvcnQ6IHRoaXMucHJlZGljYXRlICsgJywnICsgKHRoaXMucmV2ZXJzZSA/ICdhc2MnIDogJ2Rlc2MnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sb2FkQWxsbGlrZXMoKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5wYWdlID0gMDtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcmVjbGFtYXRpb24nLCB7XG4gICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2UsXG4gICAgICAgICAgICBzb3J0OiB0aGlzLnByZWRpY2F0ZSArICcsJyArICh0aGlzLnJldmVyc2UgPyAnYXNjJyA6ICdkZXNjJylcbiAgICAgICAgfV0pO1xuICAgICAgICB0aGlzLmxvYWRBbGxsaWtlcygpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG5cblxuXG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudCA9IGFjY291bnQ7XG5cblxuICAgICAgICAgICAgdGhpcy5sb2FkQWxsbGlrZXMoKTtcbiAgICAgICAgICAgIHRoaXMubG9hZEFsbGxpa2UoKTtcblxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZUluUmVjbGFtYXRpb25zKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLmRlc3Ryb3kodGhpcy5ldmVudFN1YnNjcmliZXIpO1xuICAgIH1cblxuICAgIHRyYWNrSWQoaW5kZXg6IG51bWJlciwgaXRlbTogUmVjbGFtYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uaWQ7XG4gICAgfVxuXG5cbiAgICByZWdpc3RlckNoYW5nZUluUmVjbGFtYXRpb25zKCkge1xuICAgICAgICB0aGlzLmV2ZW50U3Vic2NyaWJlciA9IHRoaXMuZXZlbnRNYW5hZ2VyLnN1YnNjcmliZSgncmVjbGFtYXRpb25MaXN0TW9kaWZpY2F0aW9uJywgKHJlc3BvbnNlKSA9PiB0aGlzLmxvYWRBbGxsaWtlcygpKTtcbiAgICB9XG5cblxuICAgIC8qcmVjbGFtYXRpb25UcmFpdGVyKCl7XG4gICAgIHRoaXMubG9hZEFsbCgpO1xuICAgICB0aGlzLnJlY2xhbWF0aW9ucy5mb3JFYWNoKChpdGVtLGluZGV4KT0+e1xuXG4gICAgIGlmIChpdGVtLmV0YXQ9PVwiVHJhaXTDqWVcIiApXG4gICAgIHtcbiAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsXCIgKS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLFwiZGlzYWJsZWRcIilcbiAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsXCIgKyBpbmRleCkuc3R5bGUub3BhY2l0eT1cIjAuM1wiXG5cblxuICAgICB9XG4gICAgIH1cbiAgICAgKTtcblxuICAgICB9Ki9cbiAgICBUcmFpdGVyKCBSZWNsYW1hdGlvbiAgKSB7XG5cblxuICAgICAgICAvKiAgIHRoaXMucmVjbGFtYXRpb25zLmZvckVhY2goKGl0ZW0saW5kZXgpPT57XG5cbiAgICAgICAgIGlmIChpdGVtLmV0YXQ9PVwiVHJhaXTDqWVcIiApXG4gICAgICAgICB7XG4gICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxcIiArIGluZGV4KS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLFwiZGlzYWJsZWRcIilcbiAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibFwiICsgaW5kZXgpLnN0eWxlLm9wYWNpdHk9XCIwLjNcIjtcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiYXNzbGVtYVwiKTtcblxuICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgICAgKTtcbiAgICAgICAgICovXG4gICAgICAgIFJlY2xhbWF0aW9uLmV0YXQgPSBcIlRyYWl0w6llXCI7XG4gICAgICAgIHRoaXMucmVjbGFtYXRpb25TZXJ2aWNlLnVwZGF0ZShSZWNsYW1hdGlvbilcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlczogUmVjbGFtYXRpb24pID0+IHRoaXMub25TYXZlU3VjY2VzcyhyZXMpLFxuICAgICAgICAgICAgICAgIChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLm9uRXJyb3IocmVzLmpzb24oKSkpO1xuXG5cblxuXG4gICAgfVxuICAgIHByaXZhdGUgb25TYXZlU3VjY2VzcyhyZXN1bHQ6IFJlY2xhbWF0aW9uKSB7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLmJyb2FkY2FzdCh7bmFtZTogJ3JlY2xhbWF0aW9uTGlzdE1vZGlmaWNhdGlvbicsIGNvbnRlbnQ6ICdPSyd9KTtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt7b3V0bGV0czoge3BvcHVwOiBudWxsfX1dLCB7cmVwbGFjZVVybDogdHJ1ZX0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25FcnJvcihlcnJvcikge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcihlcnJvci5tZXNzYWdlLCBudWxsLCBudWxsKTtcbiAgICB9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICBzb3J0ICgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFt0aGlzLnByZWRpY2F0ZSArICcsJyArICh0aGlzLnJldmVyc2UgPyAnYXNjJyA6ICdkZXNjJyldO1xuICAgICAgICBpZiAodGhpcy5wcmVkaWNhdGUgIT09ICdpZCcpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKCdpZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblN1Y2Nlc3MgKGRhdGEsIGhlYWRlcnMpIHtcbiAgICAgICAgdGhpcy5saW5rcyA9IHRoaXMucGFyc2VMaW5rcy5wYXJzZShoZWFkZXJzLmdldCgnbGluaycpKTtcbiAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gaGVhZGVycy5nZXQoJ1gtVG90YWwtQ291bnQnKTtcbiAgICAgICAgdGhpcy5xdWVyeUNvdW50ID0gdGhpcy50b3RhbEl0ZW1zO1xuICAgICAgICAvLyB0aGlzLnBhZ2UgPSBwYWdpbmdQYXJhbXMucGFnZTtcbiAgICAgICAgdGhpcy5yZWNsYW1hdGlvbnMgPSBkYXRhO1xuICAgICAgICB0aGlzLmxvYWRBbGxsaWtlcygpO1xuICAgICAgICB0aGlzLmxvYWRBbGxsaWtlKCk7XG4gICAgICAgIC8qdGhpcy5yZWNsYW1hdGlvbnMuZm9yRWFjaCgoaXRlbSxpbmRleCk9PntcblxuICAgICAgICAgaWYgKGl0ZW0uZXRhdD09XCJUcmFpdMOpZVwiIClcbiAgICAgICAgIHtcbiAgICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibFwiICsgaW5kZXgpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsXCJkaXNhYmxlZFwiKVxuICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsXCIgKyBpbmRleCkuc3R5bGUub3BhY2l0eT1cIjAuM1wiO1xuICAgICAgICAgY29uc29sZS5sb2coXCJhc3NsZW1hXCIpO1xuXG4gICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgICApOyovXG5cbiAgICB9XG5cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9yZWNsYW1hdGlvbi9tZXNyZWNsYW1hdGlvbnMuY29tcG9uZW50LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==
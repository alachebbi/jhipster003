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
var ng_jhipster_1 = require("ng-jhipster");
var hello_component_1 = require("./hello.component");
var hello_detail_component_1 = require("./hello-detail.component");
var hello_dialog_component_1 = require("./hello-dialog.component");
var hello_delete_dialog_component_1 = require("./hello-delete-dialog.component");
var HelloResolvePagingParams = (function () {
    function HelloResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    HelloResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return HelloResolvePagingParams;
}());
HelloResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], HelloResolvePagingParams);
exports.HelloResolvePagingParams = HelloResolvePagingParams;
exports.helloRoute = [
    {
        path: 'hello',
        component: hello_component_1.HelloComponent,
        resolve: {
            'pagingParams': HelloResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.hello.home.title'
        }
    }, {
        path: 'hello/:id',
        component: hello_detail_component_1.HelloDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.hello.home.title'
        }
    }
];
exports.helloPopupRoute = [
    {
        path: 'hello-new',
        component: hello_dialog_component_1.HelloPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.hello.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'hello/:id/edit',
        component: hello_dialog_component_1.HelloPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.hello.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'hello/:id/delete',
        component: hello_delete_dialog_component_1.HelloDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.hello.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=hello.route.js.map
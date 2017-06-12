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
var participation_component_1 = require("./participation.component");
var participation_detail_component_1 = require("./participation-detail.component");
var participation_dialog_component_1 = require("./participation-dialog.component");
var participation_delete_dialog_component_1 = require("./participation-delete-dialog.component");
var ParticipationResolvePagingParams = (function () {
    function ParticipationResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    ParticipationResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return ParticipationResolvePagingParams;
}());
ParticipationResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], ParticipationResolvePagingParams);
exports.ParticipationResolvePagingParams = ParticipationResolvePagingParams;
exports.participationRoute = [
    {
        path: 'participation',
        component: participation_component_1.ParticipationComponent,
        resolve: {
            'pagingParams': ParticipationResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.participation.home.title'
        }
    }, {
        path: 'participation/:id',
        component: participation_detail_component_1.ParticipationDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.participation.home.title'
        }
    }
];
exports.participationPopupRoute = [
    {
        path: 'participation-new',
        component: participation_dialog_component_1.ParticipationPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.participation.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'participation/:id/edit',
        component: participation_dialog_component_1.ParticipationPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.participation.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'participation/:id/delete',
        component: participation_delete_dialog_component_1.ParticipationDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.participation.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=participation.route.js.map
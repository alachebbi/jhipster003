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
var evenement_component_1 = require("./evenement.component");
var evenements_component_1 = require("./evenements.component");
var evenement_detail_component_1 = require("./evenement-detail.component");
var evenements_detail_component_1 = require("./evenements-detail.component");
var evenement_dialog_component_1 = require("./evenement-dialog.component");
var evenement_delete_dialog_component_1 = require("./evenement-delete-dialog.component");
var EvenementResolvePagingParams = (function () {
    function EvenementResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    EvenementResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return EvenementResolvePagingParams;
}());
EvenementResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], EvenementResolvePagingParams);
exports.EvenementResolvePagingParams = EvenementResolvePagingParams;
exports.evenementRoute = [
    {
        path: 'evenement',
        component: evenement_component_1.EvenementComponent,
        resolve: {
            'pagingParams': EvenementResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.evenement.home.title'
        }
    },
    {
        path: 'evenements',
        component: evenements_component_1.EvenementsComponent,
        resolve: {
            'pagingParams': EvenementResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.evenement.home.title'
        }
    },
    {
        path: 'evenement/:id',
        component: evenement_detail_component_1.EvenementDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.evenement.home.title'
        }
    },
    {
        path: 'p/evenement/:id',
        component: evenements_detail_component_1.EvenementsDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.evenement.home.title'
        }
    }
];
exports.evenementPopupRoute = [
    {
        path: 'evenement-new',
        component: evenement_dialog_component_1.EvenementPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.evenement.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'evenement/:id/edit',
        component: evenement_dialog_component_1.EvenementPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.evenement.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'evenement/:id/delete',
        component: evenement_delete_dialog_component_1.EvenementDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.evenement.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=evenement.route.js.map
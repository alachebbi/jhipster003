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
var fichepatient_component_1 = require("./fichepatient.component");
var fichepatient_detail_component_1 = require("./fichepatient-detail.component");
var fichepatient_dialog_component_1 = require("./fichepatient-dialog.component");
var fichepatient_delete_dialog_component_1 = require("./fichepatient-delete-dialog.component");
var FichepatientResolvePagingParams = (function () {
    function FichepatientResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    FichepatientResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return FichepatientResolvePagingParams;
}());
FichepatientResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], FichepatientResolvePagingParams);
exports.FichepatientResolvePagingParams = FichepatientResolvePagingParams;
exports.fichepatientRoute = [
    {
        path: 'fichepatient',
        component: fichepatient_component_1.FichepatientComponent,
        resolve: {
            'pagingParams': FichepatientResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.fichepatient.home.title'
        }
    }, {
        path: 'fichepatient/:id',
        component: fichepatient_detail_component_1.FichepatientDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.fichepatient.home.title'
        }
    }
];
exports.fichepatientPopupRoute = [
    {
        path: 'fichepatient-new',
        component: fichepatient_dialog_component_1.FichepatientPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.fichepatient.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'fichepatient/:id/edit',
        component: fichepatient_dialog_component_1.FichepatientPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.fichepatient.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'fichepatient/:id/delete',
        component: fichepatient_delete_dialog_component_1.FichepatientDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.fichepatient.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=fichepatient.route.js.map
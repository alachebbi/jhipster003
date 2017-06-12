"use strict";
var traitement_component_1 = require("./traitement.component");
var traitement_detail_component_1 = require("./traitement-detail.component");
var traitement_dialog_component_1 = require("./traitement-dialog.component");
var traitement_delete_dialog_component_1 = require("./traitement-delete-dialog.component");
exports.traitementRoute = [
    {
        path: 'traitement',
        component: traitement_component_1.TraitementComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.traitement.home.title'
        }
    }, {
        path: 'traitement/:id',
        component: traitement_detail_component_1.TraitementDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.traitement.home.title'
        }
    }
];
exports.traitementPopupRoute = [
    {
        path: 'traitement-new',
        component: traitement_dialog_component_1.TraitementPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.traitement.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'traitement/:id/edit',
        component: traitement_dialog_component_1.TraitementPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.traitement.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'traitement/:id/delete',
        component: traitement_delete_dialog_component_1.TraitementDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.traitement.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=traitement.route.js.map
"use strict";
var dosier_component_1 = require("./dosier.component");
var dosier_detail_component_1 = require("./dosier-detail.component");
var dosier_dialog_component_1 = require("./dosier-dialog.component");
var dosier_delete_dialog_component_1 = require("./dosier-delete-dialog.component");
exports.dosierRoute = [
    {
        path: 'dosier',
        component: dosier_component_1.DosierComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.dosier.home.title'
        }
    }, {
        path: 'dosier/:id',
        component: dosier_detail_component_1.DosierDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.dosier.home.title'
        }
    }
];
exports.dosierPopupRoute = [
    {
        path: 'dosier-new',
        component: dosier_dialog_component_1.DosierPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.dosier.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'dosier/:id/edit',
        component: dosier_dialog_component_1.DosierPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.dosier.home.title'
        },
        outlet: 'popup'
    },
    {
        path: 'dosier/:id/delete',
        component: dosier_delete_dialog_component_1.DosierDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'avancementApp.dosier.home.title'
        },
        outlet: 'popup'
    }
];
//# sourceMappingURL=dosier.route.js.map
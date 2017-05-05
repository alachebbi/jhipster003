"use strict";
var shared_1 = require("../shared");
var _1 = require("./");
exports.CHARTMEDICAMENT_ROUTE = {
    path: 'chartmedicament',
    component: _1.ChartmedicamentComponent,
    data: {
        authorities: ['ROLE_ADMIN'],
        pageTitle: 'Welcome, Medicament Chart !'
    },
    canActivate: [shared_1.UserRouteAccessService]
};
//# sourceMappingURL=chartmedicament.route.js.map
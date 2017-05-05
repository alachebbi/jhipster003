"use strict";
var shared_1 = require("../shared");
var _1 = require("./");
exports.CHARTMEDICAMENT_ROUTE = {
    path: 'chart',
    component: _1.ChartMedicamentComponent,
    data: {
        authorities: ['ROLE_ADMIN'],
        pageTitle: 'Welcome, Medicament Chart !'
    },
    canActivate: [shared_1.UserRouteAccessService]
};
//# sourceMappingURL=chartMedicament.route.js.map
"use strict";
var shared_1 = require("../shared");
var _1 = require("./");
exports.CHART_ROUTE = {
    path: 'chart',
    component: _1.ChartComponent,
    data: {
        authorities: ['ROLE_ADMIN'],
        pageTitle: 'Welcome, Medecin Chart !'
    },
    canActivate: [shared_1.UserRouteAccessService]
};
//# sourceMappingURL=chart.route.js.map
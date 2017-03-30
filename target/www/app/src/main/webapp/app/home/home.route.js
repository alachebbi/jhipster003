"use strict";
var shared_1 = require("../shared");
var _1 = require("./");
exports.homeRoute = {
    path: '',
    component: _1.HomeComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title'
    },
    canActivate: [shared_1.UserRouteAccessService]
};
//# sourceMappingURL=home.route.js.map
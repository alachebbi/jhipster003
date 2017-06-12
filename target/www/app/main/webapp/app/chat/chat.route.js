"use strict";
var shared_1 = require("../shared");
var _1 = require("./");
exports.CHAT_ROUTE = {
    path: 'chat',
    component: _1.ChatComponent,
    data: {
        authorities: ['ROLE_USER', 'ROLE_ADMIN'],
        pageTitle: 'Welcome, Medecin Tchat !'
    },
    canActivate: [shared_1.UserRouteAccessService]
};
//# sourceMappingURL=chat.route.js.map
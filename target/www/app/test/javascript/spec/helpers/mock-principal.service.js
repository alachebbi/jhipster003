"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var spyobject_1 = require("./spyobject");
var principal_service_1 = require("../../../../main/webapp/app/shared/auth/principal.service");
var MockPrincipal = (function (_super) {
    __extends(MockPrincipal, _super);
    function MockPrincipal() {
        var _this = _super.call(this, principal_service_1.Principal) || this;
        _this.fakeResponse = {};
        _this.identitySpy = _this.spy('identity').andReturn(Promise.resolve(_this.fakeResponse));
        return _this;
    }
    MockPrincipal.prototype.setResponse = function (json) {
        this.fakeResponse = json;
    };
    return MockPrincipal;
}(spyobject_1.SpyObject));
exports.MockPrincipal = MockPrincipal;
//# sourceMappingURL=mock-principal.service.js.map
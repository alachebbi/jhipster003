"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var MockActivatedRoute = (function (_super) {
    __extends(MockActivatedRoute, _super);
    function MockActivatedRoute(parameters) {
        var _this = _super.call(this) || this;
        _this.queryParams = rxjs_1.Observable.of(parameters);
        _this.params = rxjs_1.Observable.of(parameters);
        return _this;
    }
    return MockActivatedRoute;
}(router_1.ActivatedRoute));
exports.MockActivatedRoute = MockActivatedRoute;
var MockRouter = (function () {
    function MockRouter() {
        this.navigate = jasmine.createSpy('navigate');
    }
    return MockRouter;
}());
exports.MockRouter = MockRouter;
//# sourceMappingURL=mock-route.service.js.map
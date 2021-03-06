"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var spyobject_1 = require("./spyobject");
var ng_jhipster_1 = require("ng-jhipster");
var MockLanguageService = (function (_super) {
    __extends(MockLanguageService, _super);
    function MockLanguageService() {
        var _this = _super.call(this, ng_jhipster_1.JhiLanguageService) || this;
        _this.fakeResponse = 'fr';
        _this.getCurrentSpy = _this.spy('getCurrent').andReturn(Promise.resolve(_this.fakeResponse));
        return _this;
    }
    MockLanguageService.prototype.init = function () { };
    MockLanguageService.prototype.changeLanguage = function (languageKey) { };
    MockLanguageService.prototype.setLocations = function (locations) { };
    MockLanguageService.prototype.addLocation = function (location) { };
    MockLanguageService.prototype.reload = function () { };
    return MockLanguageService;
}(spyobject_1.SpyObject));
exports.MockLanguageService = MockLanguageService;
//# sourceMappingURL=mock-language.service.js.map
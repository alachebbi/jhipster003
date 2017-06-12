"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//our root app component
var core_1 = require("@angular/core");
var Now = (function () {
    function Now(format) {
        var _this = this;
        this.format = format;
        this.date = new Date();
        setInterval(function () {
            _this.date = new Date();
        }, 1000);
    }
    return Now;
}());
Now = __decorate([
    core_1.Component({
        selector: 'now',
        template: "\n      <h2 (updateTime)=\"updateMyTime()\">{{date | date: format}}</h2>\n    "
    }),
    __param(0, core_1.Attribute("format")),
    __metadata("design:paramtypes", [Object])
], Now);
exports.Now = Now;
//# sourceMappingURL=now.js.map
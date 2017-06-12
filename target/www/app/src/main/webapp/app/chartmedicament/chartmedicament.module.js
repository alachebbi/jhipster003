"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_1 = require("../shared");
var _1 = require("./");
require('chart.js');
var ng2_charts_1 = require("ng2-charts/ng2-charts");
var AvancementChartmedicamentModule = (function () {
    function AvancementChartmedicamentModule() {
    }
    return AvancementChartmedicamentModule;
}());
AvancementChartmedicamentModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.AvancementSharedModule,
            router_1.RouterModule.forRoot([_1.CHARTMEDICAMENT_ROUTE], { useHash: true }),
            ng2_charts_1.ChartsModule
        ],
        declarations: [
            _1.ChartmedicamentComponent,
        ],
        entryComponents: [],
        providers: [],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], AvancementChartmedicamentModule);
exports.AvancementChartmedicamentModule = AvancementChartmedicamentModule;
//# sourceMappingURL=chartmedicament.module.js.map
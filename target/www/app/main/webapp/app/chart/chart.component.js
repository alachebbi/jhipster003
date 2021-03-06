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
var core_1 = require("@angular/core");
var doctor_service_1 = require("../entities/doctor/doctor.service");
var _ = require("lodash");
var ChartComponent = (function () {
    function ChartComponent(doctorservice) {
        this.doctorservice = doctorservice;
        this.barChartLabels = [];
        this.barChartType = 'polarArea';
        this.barChartLegend = true;
        /* public chartColors: Array<Color> = [{
             backgroundColor: 'dodgerblue',
             hoverBackgroundColor: 'cornflowerblue'
         }];*/
        this.barChartData = [
            { data: [], label: 'Doctor CHART BY SPECIALITEES' },
        ];
    }
    ChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        var titles = [];
        var values = [];
        this.doctorservice.getChartData()
            .subscribe(function (data) {
            _.forEach(data, function (item) {
                titles.push(item.title);
                values.push(item.value);
            });
            var clone = JSON.parse(JSON.stringify(_this.barChartData));
            clone[0].data = values;
            _this.barChartLabels = titles;
            _this.barChartData = clone;
        });
    };
    // events
    ChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ChartComponent.prototype.changeCharType = function () {
        if (this.barChartType == "radar") {
            this.barChartType = "bar";
        }
        if (this.barChartType == "polarArea") {
            this.barChartType = "bar";
        }
        if (this.barChartType == "pie") {
            this.barChartType = "bar";
        }
    };
    ChartComponent.prototype.piechart = function () {
        if (this.barChartType == "bar") {
            this.barChartType = "pie";
        }
        if (this.barChartType == "polarArea") {
            this.barChartType = "pie";
        }
        if (this.barChartType == "radar") {
            this.barChartType = "pie";
        }
        if (this.barChartType == "doughnut") {
            this.barChartType = "pie";
        }
    };
    ChartComponent.prototype.radarchart = function () {
        if (this.barChartType == "bar") {
            this.barChartType = "radar";
        }
        if (this.barChartType == "polarArea") {
            this.barChartType = "radar";
        }
        if (this.barChartType == "pie") {
            this.barChartType = "radar";
        }
        if (this.barChartType == "doughnut") {
            this.barChartType = "radar";
        }
    };
    ChartComponent.prototype.polarArea = function () {
        if (this.barChartType == "bar") {
            this.barChartType = "polarArea";
        }
        if (this.barChartType == "radar") {
            this.barChartType = "polarArea";
        }
        if (this.barChartType == "pie") {
            this.barChartType = "polarArea";
        }
        if (this.barChartType == "doughnut") {
            this.barChartType = "polarArea";
        }
    };
    ChartComponent.prototype.douArea = function () {
        if (this.barChartType == "bar") {
            this.barChartType = "doughnut";
        }
        if (this.barChartType == "radar") {
            this.barChartType = "doughnut";
        }
        if (this.barChartType == "pie") {
            this.barChartType = "doughnut";
        }
        if (this.barChartType == "polarArea") {
            this.barChartType = "doughnut";
        }
    };
    return ChartComponent;
}());
ChartComponent = __decorate([
    core_1.Component({
        selector: 'bar-chart-demo',
        templateUrl: './chart.component.html',
        styleUrls: [
            'chart.css'
        ]
    }),
    __metadata("design:paramtypes", [doctor_service_1.DoctorService])
], ChartComponent);
exports.ChartComponent = ChartComponent;
//# sourceMappingURL=chart.component.js.map
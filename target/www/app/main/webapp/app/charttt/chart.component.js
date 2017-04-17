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
    function ChartComponent(doctorService) {
        this.doctorService = doctorService;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 1
                        }
                    }]
            }
        };
        this.barChartLabels = [];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.chartColors = [{
                backgroundColor: 'dodgerblue',
                hoverBackgroundColor: 'cornflowerblue'
            }];
        this.barChartData = [
            { data: [], label: 'MEDECIN CHART BY SPECIALITEES' },
        ];
    }
    ChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        var titles = [];
        var values = [];
        this.doctorService.getChartData()
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
        if (this.barChartType == "bar") {
            this.barChartType = "line";
        }
        else {
            this.barChartType = "bar";
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
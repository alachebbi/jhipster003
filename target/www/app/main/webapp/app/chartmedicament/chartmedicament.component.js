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
var medicament_service_1 = require("../entities/medicament/medicament.service");
var _ = require("lodash");
var ChartmedicamentComponent = (function () {
    function ChartmedicamentComponent(medicamentservice) {
        this.medicamentservice = medicamentservice;
        this.barChartLabels = [];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.chartColors = [{
                backgroundColor: ['#ffaa45',
                    '#36a2eb',
                    '#cc65fe',
                    '#4228ff',
                    '#5dff1d',
                    '#8c3b4b',
                    '#4228ff',
                    '#fd99ff',
                    '#4cffc7',
                    '#2d8cff',
                    '#ff8ab7',
                    '#84c9ff',
                    '#ffaa45',
                    '#8c0f15',
                    '#34318c',
                    '#4b8c38',
                    '#8c1a56'
                ]
            }];
        this.barChartData = [
            { data: [], label: 'Statistiques des médicaments' },
        ];
    }
    ChartmedicamentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var titles = [];
        var values = [];
        this.medicamentservice.getAllMedicaments()
            .subscribe(function (data) {
            _.forEach(data, function (item) {
                titles.push(item.nom);
                values.push(item.quantity);
            });
            var clone = JSON.parse(JSON.stringify(_this.barChartData));
            clone[0].data = values;
            _this.barChartLabels = titles;
            _this.barChartData = clone;
            _this.chartColors;
        });
    };
    // events
    ChartmedicamentComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartmedicamentComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ChartmedicamentComponent.prototype.changeCharType = function () {
        if (this.barChartType == "radar") {
            this.barChartType = "bar";
        }
        if (this.barChartType == "line") {
            this.barChartType = "bar";
        }
        if (this.barChartType == "pie") {
            this.barChartType = "bar";
        }
    };
    ChartmedicamentComponent.prototype.linechart = function () {
        if (this.barChartType == "bar") {
            this.barChartType = "line";
        }
        if (this.barChartType == "polarArea") {
            this.barChartType = "pie";
        }
        if (this.barChartType == "radar") {
            this.barChartType = "line";
        }
        if (this.barChartType == "doughnut") {
            this.barChartType = "pie";
        }
    };
    ChartmedicamentComponent.prototype.radarchart = function () {
        if (this.barChartType == "bar") {
            this.barChartType = "radar";
        }
        if (this.barChartType == "line") {
            this.barChartType = "radar";
        }
        if (this.barChartType == "pie") {
            this.barChartType = "radar";
        }
        if (this.barChartType == "doughnut") {
            this.barChartType = "radar";
        }
    };
    ChartmedicamentComponent.prototype.polarArea = function () {
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
    ChartmedicamentComponent.prototype.douArea = function () {
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
    return ChartmedicamentComponent;
}());
ChartmedicamentComponent = __decorate([
    core_1.Component({
        selector: 'bar-chart-demo',
        templateUrl: './chartmedicament.component.html',
        styleUrls: [
            'chartmedicament.css'
        ]
    }),
    __metadata("design:paramtypes", [medicament_service_1.MedicamentService])
], ChartmedicamentComponent);
exports.ChartmedicamentComponent = ChartmedicamentComponent;
//# sourceMappingURL=chartmedicament.component.js.map
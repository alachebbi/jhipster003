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
var ChartMedicamentComponent = (function () {
    function ChartMedicamentComponent(medicamentservice) {
        this.medicamentservice = medicamentservice;
        this.barChartLabels = [];
        this.barChartType = 'radar';
        this.barChartLegend = true;
        /* public chartColors: Array<Color> = [{
             backgroundColor: 'dodgerblue',
             hoverBackgroundColor: 'cornflowerblue'
         }];*/
        this.barChartData = [
            { data: [], label: 'Statistiques des médicaments' },
        ];
    }
    ChartMedicamentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var titles = [];
        var values = [];
        this.medicamentservice.getChartData()
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
    ChartMedicamentComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartMedicamentComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ChartMedicamentComponent.prototype.changeCharType = function () {
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
    ChartMedicamentComponent.prototype.piechart = function () {
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
    ChartMedicamentComponent.prototype.radarchart = function () {
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
    ChartMedicamentComponent.prototype.polarArea = function () {
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
    ChartMedicamentComponent.prototype.douArea = function () {
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
    return ChartMedicamentComponent;
}());
ChartMedicamentComponent = __decorate([
    core_1.Component({
        selector: 'bar-chart-demo',
        templateUrl: './chartmedicament.component.html',
        styleUrls: [
            'chartmedicament.css'
        ]
    }),
    __metadata("design:paramtypes", [medicament_service_1.MedicamentService])
], ChartMedicamentComponent);
exports.ChartMedicamentComponent = ChartMedicamentComponent;
//# sourceMappingURL=chartmedicament.component.js.map
import { Component ,OnInit, OnDestroy} from '@angular/core';
import { Response } from  '@angular/http';
import { MedicamentService } from '../entities/medicament/medicament.service';
import { Color} from 'ng2-charts';
import  * as _ from 'lodash'
@Component({
    selector: 'bar-chart-demo',
    templateUrl: './chartmedicament.component.html',
    styleUrls: [
        'chartmedicament.css'
    ]
})
export class ChartmedicamentComponent implements OnInit{


    public barChartLabels:string[] = [];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;
    public chartColors: Array<Color> = [{
        backgroundColor:

            [ '#ffaa45',
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

    public barChartData:any[] = [
        {data: [], label: 'Statistiques des médicaments'},
    ];

    constructor(
        private medicamentservice : MedicamentService
    ) {
    }

    ngOnInit(){
        let titles = [] ;
        let values = [] ;
        this.medicamentservice.getAllMedicaments()
            .subscribe(data => {
                _.forEach(data, item => {
                       titles.push(item.nom) ;
                       values.push(item.quantity);
                });
                let clone = JSON.parse(JSON.stringify(this.barChartData));
                clone[0].data = values;
                this.barChartLabels = titles;
                this.barChartData = clone;
                this.chartColors;
            })
    }

    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }

    public changeCharType(){
        if(this.barChartType == "radar") {
            this.barChartType = "bar";
        }
        if(this.barChartType == "line"){
            this.barChartType ="bar" ;
        }
        if(this.barChartType == "pie"){
            this.barChartType ="bar" ;
        }

        }
    public linechart(){
        if(this.barChartType == "bar") {
            this.barChartType = "line";
        }
        if(this.barChartType == "polarArea"){
            this.barChartType ="pie" ;
        }
        if(this.barChartType == "radar"){
            this.barChartType ="line" ;
        }
        if (this.barChartType == "doughnut") {
            this.barChartType = "pie";
        }}

    public radarchart() {
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
    }

    public polarArea() {
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
    }


    public douArea() {
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
    }












}

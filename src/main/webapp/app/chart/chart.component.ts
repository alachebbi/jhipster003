import { Component ,OnInit, OnDestroy} from '@angular/core';
import { Response } from  '@angular/http';
import { DoctorService } from '../entities/doctor/doctor.service';
import { Color} from 'ng2-charts';
import  * as _ from 'lodash'
@Component({
    selector: 'bar-chart-demo',
    templateUrl: './chart.component.html',
    styleUrls: [
        'chart.css'
    ]
})
export class ChartComponent implements OnInit{


    public barChartLabels:string[] = [];
    public barChartType:string = 'polarArea';
    public barChartLegend:boolean = true;
   /* public chartColors: Array<Color> = [{
        backgroundColor: 'dodgerblue',
        hoverBackgroundColor: 'cornflowerblue'
    }];*/

    public barChartData:any[] = [
        {data: [], label: 'Doctor CHART BY SPECIALITEES'},
    ];

    constructor(
        private doctorservice : DoctorService
    ) {
    }

    ngOnInit(){
        let titles = [] ;
        let values = [] ;
        this.doctorservice.getChartData()
            .subscribe(data => {
                _.forEach(data, item => {
                       titles.push(item.title) ;
                       values.push(item.value);
                });
                let clone = JSON.parse(JSON.stringify(this.barChartData));
                clone[0].data = values;
                this.barChartLabels = titles;
                this.barChartData = clone;
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
        if(this.barChartType == "polarArea"){
            this.barChartType ="bar" ;
        }
        if(this.barChartType == "pie"){
            this.barChartType ="bar" ;
        }

        }
    public piechart(){
        if(this.barChartType == "bar") {
            this.barChartType = "pie";
        }
        if(this.barChartType == "polarArea"){
            this.barChartType ="pie" ;
        }
        if(this.barChartType == "radar"){
            this.barChartType ="pie" ;
        }
        if (this.barChartType == "doughnut") {
            this.barChartType = "pie";
        }}

    public radarchart() {
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

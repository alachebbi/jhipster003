import { Component ,OnInit, OnDestroy} from '@angular/core';
import { Response } from  '@angular/http';
import { DoctorService } from '../entities/doctor/doctor.service'
import { Color} from 'ng2-charts';

import  * as _ from 'lodash'
@Component({
    selector: 'bar-chart-demo',
    templateUrl: './chartmedicament.component.html',
    styleUrls: [
        'chart.css'
    ]
})
export class ChartComponent implements OnInit{
    public barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    stepSize:1
                }
            }]
        }
    };
    public barChartLabels:string[] = [];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;
    public chartColors: Array<Color> = [{
        backgroundColor: 'dodgerblue',
        hoverBackgroundColor: 'cornflowerblue'
    }];
    public barChartData:any[] = [
        {data: [], label: 'MEDECIN CHART BY SPECIALITEES'},
    ];


    constructor(
        private doctorService : DoctorService
    ) {
    }

    ngOnInit(){
        let titles = [] ;
        let values = [] ;
        this.doctorService.getChartData()
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
        if(this.barChartType == "bar"){
            this.barChartType = "line" ;
        }else{
            this.barChartType ="bar" ;
        }
    }
}

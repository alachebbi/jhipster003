webpackHotUpdate(0,{

/***/ "./src/main/webapp/app/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"content-wrapper\">\n\n    <section class=\"content\">\n\n        <div class='row'>\n            <div class='col-md-7'>\n        <canvas baseChart\n                [datasets]=\"barChartData\"\n                [labels]=\"barChartLabels\"\n                [options]=\"barChartOptions\"\n                [colors]=\"chartColors\"\n                [legend]=\"barChartLegend\"\n                [chartType]=\"barChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n    </div>\n    <button type=\"button\" class=\"btn btn-primary\"  (click)=\"changeCharType()\">change chart type</button>\n        </div></section></div>\n"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5odG1sPzk4ZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx1dEIiLCJmaWxlIjoiMC44OWEzOTBmYWMzN2RmM2Y5NjhiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIlxcbjxkaXYgY2xhc3M9XFxcImNvbnRlbnQtd3JhcHBlclxcXCI+XFxuXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9J3Jvdyc+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nY29sLW1kLTcnPlxcbiAgICAgICAgPGNhbnZhcyBiYXNlQ2hhcnRcXG4gICAgICAgICAgICAgICAgW2RhdGFzZXRzXT1cXFwiYmFyQ2hhcnREYXRhXFxcIlxcbiAgICAgICAgICAgICAgICBbbGFiZWxzXT1cXFwiYmFyQ2hhcnRMYWJlbHNcXFwiXFxuICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cXFwiYmFyQ2hhcnRPcHRpb25zXFxcIlxcbiAgICAgICAgICAgICAgICBbY29sb3JzXT1cXFwiY2hhcnRDb2xvcnNcXFwiXFxuICAgICAgICAgICAgICAgIFtsZWdlbmRdPVxcXCJiYXJDaGFydExlZ2VuZFxcXCJcXG4gICAgICAgICAgICAgICAgW2NoYXJ0VHlwZV09XFxcImJhckNoYXJ0VHlwZVxcXCJcXG4gICAgICAgICAgICAgICAgKGNoYXJ0SG92ZXIpPVxcXCJjaGFydEhvdmVyZWQoJGV2ZW50KVxcXCJcXG4gICAgICAgICAgICAgICAgKGNoYXJ0Q2xpY2spPVxcXCJjaGFydENsaWNrZWQoJGV2ZW50KVxcXCI+PC9jYW52YXM+XFxuICAgIDwvZGl2PlxcbiAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgIChjbGljayk9XFxcImNoYW5nZUNoYXJUeXBlKClcXFwiPmNoYW5nZSBjaGFydCB0eXBlPC9idXR0b24+XFxuICAgICAgICA8L2Rpdj48L3NlY3Rpb24+PC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvY2hhcnQvY2hhcnQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9jaGFydC9jaGFydC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
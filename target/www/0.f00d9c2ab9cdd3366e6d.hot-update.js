webpackHotUpdate(0,{

/***/ "./src/main/webapp/app/entities/reclamation/reclamation-detail.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<div class=\"content-wrapper\">\n\n    <section class=\"content\">\n\n        <div class='row'>\n<div *ngIf=\"reclamation\">\n    <h2> {{reclamation.titre}}</h2>\n    <hr>\n    <jhi-alert-error></jhi-alert-error>\n    <dl class=\"row\">\n        <dt><span jhiTranslate=\"avancementApp.reclamation.titre\">Titre</span></dt>\n        <dd>\n            <span>{{reclamation.titre}}</span>\n        </dd>\n        <dt><span jhiTranslate=\"avancementApp.reclamation.objet\">Objet</span></dt>\n        <dd>\n            <span>{{reclamation.objet}}</span>\n        </dd>\n    </dl>\n\n    <button type=\"submit\"\n            (click)=\"previousState()\"\n            class=\"btn btn-info\">\n        <span class=\"fa fa-arrow-left\"></span>&nbsp;<span jhiTranslate=\"entity.action.back\"> Back</span>\n    </button>\n\n    <button type=\"button\"\n            [routerLink]=\"['/', { outlets: { popup: 'reclamation/'+ reclamation.id + '/edit'} }]\"\n            replaceUrl=\"true\"\n            class=\"btn btn-primary\">\n        <span class=\"fa fa-pencil\"></span>&nbsp;<span jhiTranslate=\"entity.action.edit\"> Edit</span>\n    </button>\n</div>\n        </div></section></div>\n"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3JlY2xhbWF0aW9uL3JlY2xhbWF0aW9uLWRldGFpbC5jb21wb25lbnQuaHRtbD9hMjAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUtBQXFLLG1CQUFtQiwwTUFBME0sbUJBQW1CLGdKQUFnSixtQkFBbUIsc01BQXNNLHdJQUF3SSxXQUFXLGlEQUFpRCxFQUFFLGdJQUFnSSxnSCIsImZpbGUiOiIwLmYwMGQ5YzJhYjljZGQzMzY2ZTZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiXFxuXFxuXFxuXFxuXFxuPGRpdiBjbGFzcz1cXFwiY29udGVudC13cmFwcGVyXFxcIj5cXG5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcblxcbiAgICAgICAgPGRpdiBjbGFzcz0ncm93Jz5cXG48ZGl2ICpuZ0lmPVxcXCJyZWNsYW1hdGlvblxcXCI+XFxuICAgIDxoMj4ge3tyZWNsYW1hdGlvbi50aXRyZX19PC9oMj5cXG4gICAgPGhyPlxcbiAgICA8amhpLWFsZXJ0LWVycm9yPjwvamhpLWFsZXJ0LWVycm9yPlxcbiAgICA8ZGwgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJhdmFuY2VtZW50QXBwLnJlY2xhbWF0aW9uLnRpdHJlXFxcIj5UaXRyZTwvc3Bhbj48L2R0PlxcbiAgICAgICAgPGRkPlxcbiAgICAgICAgICAgIDxzcGFuPnt7cmVjbGFtYXRpb24udGl0cmV9fTwvc3Bhbj5cXG4gICAgICAgIDwvZGQ+XFxuICAgICAgICA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJhdmFuY2VtZW50QXBwLnJlY2xhbWF0aW9uLm9iamV0XFxcIj5PYmpldDwvc3Bhbj48L2R0PlxcbiAgICAgICAgPGRkPlxcbiAgICAgICAgICAgIDxzcGFuPnt7cmVjbGFtYXRpb24ub2JqZXR9fTwvc3Bhbj5cXG4gICAgICAgIDwvZGQ+XFxuICAgIDwvZGw+XFxuXFxuICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIlxcbiAgICAgICAgICAgIChjbGljayk9XFxcInByZXZpb3VzU3RhdGUoKVxcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1hcnJvdy1sZWZ0XFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkuYWN0aW9uLmJhY2tcXFwiPiBCYWNrPC9zcGFuPlxcbiAgICA8L2J1dHRvbj5cXG5cXG4gICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiXFxuICAgICAgICAgICAgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6ICdyZWNsYW1hdGlvbi8nKyByZWNsYW1hdGlvbi5pZCArICcvZWRpdCd9IH1dXFxcIlxcbiAgICAgICAgICAgIHJlcGxhY2VVcmw9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtcGVuY2lsXFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkuYWN0aW9uLmVkaXRcXFwiPiBFZGl0PC9zcGFuPlxcbiAgICA8L2J1dHRvbj5cXG48L2Rpdj5cXG4gICAgICAgIDwvZGl2Pjwvc2VjdGlvbj48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9yZWNsYW1hdGlvbi9yZWNsYW1hdGlvbi1kZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9yZWNsYW1hdGlvbi9yZWNsYW1hdGlvbi1kZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
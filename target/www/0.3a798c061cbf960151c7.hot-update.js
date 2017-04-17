webpackHotUpdate(0,{

/***/ "./src/main/webapp/app/entities/reclamation/reclamation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n\n    <section class=\"content\">\n\n        <div class='row'>\n\n\n<div>\n    <h2><span jhiTranslate=\"avancementApp.reclamation.home.title\">Reclamations</span>\n        <button class=\"btn btn-primary float-xs-right create-reclamation\" [routerLink]=\"['/', { outlets: { popup: ['reclamation-new'] } }]\">\n            <span class=\"fa fa-plus\"></span>\n            <span  jhiTranslate=\"avancementApp.reclamation.home.createLabel\">\n            Create new Reclamation\n            </span>\n        </button></h2>\n    <jhi-alert></jhi-alert>\n\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n        </div>\n    </div>\n    <br/>\n    <div class=\"table-responsive\" *ngIf=\"reclamations\">\n        <table class=\"table table-striped\">\n            <thead>\n            <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"transition.bind(this)\">\n\n            <th jhiSortBy=\"titre\"><span jhiTranslate=\"avancementApp.reclamation.titre\">Titre</span> </th>\n            <th jhiSortBy=\"objet\"><span jhiTranslate=\"avancementApp.reclamation.objet\">Objet</span> </th>\n            <th></th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let reclamation of reclamations ;trackBy: trackId\">\n\n                <td>{{reclamation.titre}}</td>\n                <td>{{reclamation.objet}}</td>\n                <td class=\"text-xs-right\">\n                    <div class=\"btn-group flex-btn-group-container\">\n                        <button type=\"submit\"\n                                [routerLink]=\"['../reclamation', reclamation.id ]\"\n                                class=\"btn btn-info btn-sm\">\n                            <span class=\"fa fa-eye\"></span>\n                            <span class=\"hidden-md-down\" jhiTranslate=\"entity.action.view\">View</span>\n                        </button>\n                        <button type=\"submit\"\n                                [routerLink]=\"['/', { outlets: { popup: 'reclamation/'+ reclamation.id + '/edit'} }]\"\n                                replaceUrl=\"true\"\n                                class=\"btn btn-primary btn-sm\">\n                            <span class=\"fa fa-pencil\"></span>\n                            <span class=\"hidden-md-down\" jhiTranslate=\"entity.action.edit\">Edit</span>\n                        </button>\n                        <button type=\"submit\"\n                                [routerLink]=\"['/', { outlets: { popup: 'reclamation/'+ reclamation.id + '/delete'} }]\"\n                                replaceUrl=\"true\"\n                                class=\"btn btn-danger btn-sm\">\n                            <span class=\"fa fa-remove\"></span>\n                            <span class=\"hidden-md-down\" jhiTranslate=\"entity.action.delete\">Delete</span>\n                        </button>\n                    </div>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n        <div class=\"text-xs-center\" *ngIf=\"reclamations && reclamations.length\">\n            <jhi-item-count [page]=\"page\" [total]=\"queryCount\" [itemsPerPage]=\"itemsPerPage\"></jhi-item-count>\n            <ngb-pagination [collectionSize]=\"totalItems\" [(page)]=\"page\" (pageChange)=\"loadPage(page)\"></ngb-pagination>\n        </div>\n</div>\n        </div></section></div>\n"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3JlY2xhbWF0aW9uL3JlY2xhbWF0aW9uLmNvbXBvbmVudC5odG1sP2QwNGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5VEFBeVQsV0FBVyw2QkFBNkIsRUFBRSxxOEJBQXE4Qiw2Q0FBNkMsbUJBQW1CLDZCQUE2QixtQkFBbUIseW5CQUF5bkIsV0FBVyxpREFBaUQsRUFBRSxxYkFBcWIsV0FBVyxtREFBbUQsRUFBRSxpMUIiLCJmaWxlIjoiMC4zYTc5OGMwNjFjYmY5NjAxNTFjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRlbnQtd3JhcHBlclxcXCI+XFxuXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9J3Jvdyc+XFxuXFxuXFxuPGRpdj5cXG4gICAgPGgyPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiYXZhbmNlbWVudEFwcC5yZWNsYW1hdGlvbi5ob21lLnRpdGxlXFxcIj5SZWNsYW1hdGlvbnM8L3NwYW4+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgZmxvYXQteHMtcmlnaHQgY3JlYXRlLXJlY2xhbWF0aW9uXFxcIiBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogWydyZWNsYW1hdGlvbi1uZXcnXSB9IH1dXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtcGx1c1xcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuICBqaGlUcmFuc2xhdGU9XFxcImF2YW5jZW1lbnRBcHAucmVjbGFtYXRpb24uaG9tZS5jcmVhdGVMYWJlbFxcXCI+XFxuICAgICAgICAgICAgQ3JlYXRlIG5ldyBSZWNsYW1hdGlvblxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgIDwvYnV0dG9uPjwvaDI+XFxuICAgIDxqaGktYWxlcnQ+PC9qaGktYWxlcnQ+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8YnIvPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIiAqbmdJZj1cXFwicmVjbGFtYXRpb25zXFxcIj5cXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+XFxuICAgICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgIDx0ciBqaGlTb3J0IFsocHJlZGljYXRlKV09XFxcInByZWRpY2F0ZVxcXCIgWyhhc2NlbmRpbmcpXT1cXFwicmV2ZXJzZVxcXCIgW2NhbGxiYWNrXT1cXFwidHJhbnNpdGlvbi5iaW5kKHRoaXMpXFxcIj5cXG5cXG4gICAgICAgICAgICA8dGggamhpU29ydEJ5PVxcXCJ0aXRyZVxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJhdmFuY2VtZW50QXBwLnJlY2xhbWF0aW9uLnRpdHJlXFxcIj5UaXRyZTwvc3Bhbj4gPC90aD5cXG4gICAgICAgICAgICA8dGggamhpU29ydEJ5PVxcXCJvYmpldFxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJhdmFuY2VtZW50QXBwLnJlY2xhbWF0aW9uLm9iamV0XFxcIj5PYmpldDwvc3Bhbj4gPC90aD5cXG4gICAgICAgICAgICA8dGg+PC90aD5cXG4gICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCByZWNsYW1hdGlvbiBvZiByZWNsYW1hdGlvbnMgO3RyYWNrQnk6IHRyYWNrSWRcXFwiPlxcblxcbiAgICAgICAgICAgICAgICA8dGQ+e3tyZWNsYW1hdGlvbi50aXRyZX19PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPnt7cmVjbGFtYXRpb24ub2JqZXR9fTwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAgZmxleC1idG4tZ3JvdXAtY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cXFwiWycuLi9yZWNsYW1hdGlvbicsIHJlY2xhbWF0aW9uLmlkIF1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvIGJ0bi1zbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1leWVcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhpZGRlbi1tZC1kb3duXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24udmlld1xcXCI+Vmlldzwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiAncmVjbGFtYXRpb24vJysgcmVjbGFtYXRpb24uaWQgKyAnL2VkaXQnfSB9XVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VVcmw9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1wZW5jaWxcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhpZGRlbi1tZC1kb3duXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24uZWRpdFxcXCI+RWRpdDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiAncmVjbGFtYXRpb24vJysgcmVjbGFtYXRpb24uaWQgKyAnL2RlbGV0ZSd9IH1dXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZVVybD1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlciBidG4tc21cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtcmVtb3ZlXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoaWRkZW4tbWQtZG93blxcXCIgamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkuYWN0aW9uLmRlbGV0ZVxcXCI+RGVsZXRlPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgPC90YWJsZT5cXG4gICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0LXhzLWNlbnRlclxcXCIgKm5nSWY9XFxcInJlY2xhbWF0aW9ucyAmJiByZWNsYW1hdGlvbnMubGVuZ3RoXFxcIj5cXG4gICAgICAgICAgICA8amhpLWl0ZW0tY291bnQgW3BhZ2VdPVxcXCJwYWdlXFxcIiBbdG90YWxdPVxcXCJxdWVyeUNvdW50XFxcIiBbaXRlbXNQZXJQYWdlXT1cXFwiaXRlbXNQZXJQYWdlXFxcIj48L2poaS1pdGVtLWNvdW50PlxcbiAgICAgICAgICAgIDxuZ2ItcGFnaW5hdGlvbiBbY29sbGVjdGlvblNpemVdPVxcXCJ0b3RhbEl0ZW1zXFxcIiBbKHBhZ2UpXT1cXFwicGFnZVxcXCIgKHBhZ2VDaGFuZ2UpPVxcXCJsb2FkUGFnZShwYWdlKVxcXCI+PC9uZ2ItcGFnaW5hdGlvbj5cXG4gICAgICAgIDwvZGl2PlxcbjwvZGl2PlxcbiAgICAgICAgPC9kaXY+PC9zZWN0aW9uPjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3JlY2xhbWF0aW9uL3JlY2xhbWF0aW9uLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvcmVjbGFtYXRpb24vcmVjbGFtYXRpb24uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
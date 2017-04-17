webpackHotUpdate(0,{

/***/ "./src/main/webapp/app/entities/doctor/doctor.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"content-wrapper\">\n\n    <section class=\"content\">\n\n        <div class='row'>\n<!--<div>\n    <h2>Medecins\n        <button class=\"btn btn-primary float-xs-right create-doctor\" [routerLink]=\"['/', { outlets: { popup: ['doctor-new'] } }]\">\n            <span class=\"fa fa-plus\"></span>\n\n            Create new Medecin\n        </button>\n\n        <button class=\"btn btn-primary float-xs-right create-doctor\"  (click)=\"print()\">\n            <span class=\"fa fa-print\"></span>\n            <span >Print</span>\n        </button>\n    </h2>\n    <jhi-alert></jhi-alert>\n\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n        </div>\n    </div>\n    <br/>\n    <label>Filtrer par spécialité: </label>\n    <select   class=\"form-control\" name=\"specialite\" [(ngModel)]=\"filter\">\n\n\n\n\n        <option *ngFor=\"let doctor of doctors \"  >{{doctor.specialite}}</option>\n\n\n\n\n    </select>\n    <div class=\"table-responsive\" *ngIf=\"doctors\">\n        <table class=\"table table-striped\">\n            <thead>\n            <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"transition.bind(this)\">\n                <th jhiSortBy=\"nometprenom\">Nom et prenom </th>\n\n                <th jhiSortBy=\"specialite\">Specialite </th>\n                <th jhiSortBy=\"photo\">Photo</th>\n                <th jhiSortBy=\"servicemedi\">Service medical </th>\n                <th jhiSortBy=\"email\">Email </th>\n                <th jhiSortBy=\"daten\">Date de naissance </th>\n            <th jhiSortBy=\"login\">Login <span class=\"fa fa-sort\"></span></th>\n\n                <th jhiSortBy=\"motdepasse\">Mot de passe <span class=\"fa fa-sort\"></span></th>\n\n\n            <th></th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let doctor of doctors | pureFilter:filter:'specialite'\">\n                <td>{{doctor.nometprenom}}</td>\n\n                <td>{{doctor.specialite}}</td>\n                <td>\n                    <a *ngIf=\"doctor.photo\" (click)=\"openFile(doctor.photoContentType, doctor.photo)\">\n                        <img [src]=\"'data:' + doctor.photoContentType + ';base64,' + doctor.photo\" style=\"max-height: 30px;\" alt=\"doctor image\"/>\n                    </a>\n\n                </td>\n                <td>{{doctor.servicemedi}}</td><td>{{doctor.email}}</td><td>{{doctor.date}}</td>\n\n                <td>{{doctor.login}}</td>\n\n\n\n\n                <td class=\"text-xs-right\">\n                    <div class=\"btn-group flex-btn-group-container\">\n                        <button type=\"submit\" (click)=\"print(doctor.id)\"\n                                class=\"btn btn-success btn-sm\">\n                            <span class=\"fa fa-print\" >Print</span>\n                        </button>\n\n                        <button type=\"submit\"\n                                [routerLink]=\"['../doctor', doctor.id ]\"\n                                class=\"btn btn-info btn-sm\">\n                            <span class=\"fa fa-eye\"></span>\n                            <span class=\"hidden-md-down\" jhiTranslate=\"entity.action.view\">View</span>\n                        </button>\n                        <button type=\"submit\"\n                                [routerLink]=\"['/', { outlets: { popup: 'doctor/'+ doctor.id + '/edit'} }]\"\n                                replaceUrl=\"true\"\n                                class=\"btn btn-primary btn-sm\">\n                            <span class=\"fa fa-pencil\"></span>\n                            <span class=\"hidden-md-down\" jhiTranslate=\"entity.action.edit\">Edit</span>\n                        </button>\n                        <button type=\"submit\"\n                                [routerLink]=\"['/', { outlets: { popup: 'doctor/'+ doctor.id + '/delete'} }]\"\n                                replaceUrl=\"true\"\n                                class=\"btn btn-danger btn-sm\">\n                            <span class=\"fa fa-remove\"></span>\n                            <span class=\"hidden-md-down\" jhiTranslate=\"entity.action.delete\">Delete</span>\n                        </button>\n                    </div>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n        <div class=\"text-xs-center\" *ngIf=\"doctors && doctors.length\">\n            <jhi-item-count [page]=\"page\" [total]=\"queryCount\" [itemsPerPage]=\"itemsPerPage\"></jhi-item-count>\n            <ngb-pagination [collectionSize]=\"totalItems\" [(page)]=\"page\" (pageChange)=\"loadPage(page)\"></ngb-pagination>\n        </div>\n</div>-->\n\n\n                <div class=\"box-header\">\n                    <h3 class=\"box-title\">Condensed Full Width Table</h3>\n                    <li *ngSwitchCase=\"true\" ngbDropdown class=\"nav-item dropdown pointer\">\n                        <a class=\"nav-link dropdown-toggle\" routerLinkActive=\"active\" ngbDropdownToggle href=\"javascript:void(0);\" >\n                    <span>\n                        <i class=\"fa fa-th-list\" aria-hidden=\"true\"></i>\n                        <span class=\"hidden-sm-down\">\n                            Action\n                        </span>\n                        <b class=\"caret\"></b>\n                    </span>\n                        </a>\n                        <ul class=\"dropdown-menu\" ngbDropdownMenu>\n                            <li uiSrefActive=\"active\">\n                                <a class=\"dropdown-item\" href=\"#\" (click)=\"collapseNavbar()\">\n                                    <i class=\"fa fa-fw fa-asterisk\" aria-hidden=\"true\"></i>\n                                    <span >File</span>\n                                </a>\n                            </li>\n\n                </div><!-- /.box-header -->\n                <div class=\"box-body no-padding\" *ngIf=\"doctors\">\n                    <table class=\"table table-condensed\">\n                        <tr >\n                            <th style=\"width: 33%\">Nom Complet</th>\n                            <th style=\"width: 33%\">Photo</th>\n                            <th style=\"width: 33%\">Service Medical</th>\n\n                        </tr>\n                        <tr *ngFor=\"let doctor of doctors \">\n                            <td>{{doctor.nometprenom}}</td>\n                            <td><a *ngIf=\"doctor.photo\" (click)=\"openFile(doctor.photoContentType, doctor.photo)\">\n                                <img [src]=\"'data:' + doctor.photoContentType + ';base64,' + doctor.photo\" style=\"border-radius: 50%;max-height: 50px;max-width: 50px;\" alt=\"doctor image\"/>\n                            </a></td>\n                            <td>\n                                {{doctor.servicemedi}}\n                            </td>\n\n                        </tr>\n\n                    </table>\n                </div><!-- /.box-body -->\n\n        </div></section></div>\n"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2RvY3Rvci9kb2N0b3IuY29tcG9uZW50Lmh0bWw/MDY3MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtPQUErTyxXQUFXLHdCQUF3QixFQUFFLGdvQkFBZ29CLG1CQUFtQixpZ0NBQWlnQyxvQkFBb0IsK0JBQStCLG1CQUFtQixvTkFBb04sbURBQW1ELG9HQUFvRyxvQkFBb0IsV0FBVyxjQUFjLFdBQVcsYUFBYSwrQkFBK0IsY0FBYyxvM0JBQW8zQixXQUFXLHVDQUF1QyxFQUFFLHFiQUFxYixXQUFXLHlDQUF5QyxFQUFFLDZvQ0FBNm9DLHkwQ0FBeTBDLG9CQUFvQixrTkFBa04scURBQXFELGlCQUFpQixnQkFBZ0Isc0lBQXNJLG9CQUFvQixvTCIsImZpbGUiOiIwLmFjMDk4OTk4N2RlNDgxOWQwMDA3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiXFxuPGRpdiBjbGFzcz1cXFwiY29udGVudC13cmFwcGVyXFxcIj5cXG5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcblxcbiAgICAgICAgPGRpdiBjbGFzcz0ncm93Jz5cXG48IS0tPGRpdj5cXG4gICAgPGgyPk1lZGVjaW5zXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgZmxvYXQteHMtcmlnaHQgY3JlYXRlLWRvY3RvclxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6IFsnZG9jdG9yLW5ldyddIH0gfV1cXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1wbHVzXFxcIj48L3NwYW4+XFxuXFxuICAgICAgICAgICAgQ3JlYXRlIG5ldyBNZWRlY2luXFxuICAgICAgICA8L2J1dHRvbj5cXG5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBmbG9hdC14cy1yaWdodCBjcmVhdGUtZG9jdG9yXFxcIiAgKGNsaWNrKT1cXFwicHJpbnQoKVxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLXByaW50XFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gPlByaW50PC9zcGFuPlxcbiAgICAgICAgPC9idXR0b24+XFxuICAgIDwvaDI+XFxuICAgIDxqaGktYWxlcnQ+PC9qaGktYWxlcnQ+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8YnIvPlxcbiAgICA8bGFiZWw+RmlsdHJlciBwYXIgc3DDqWNpYWxpdMOpOiA8L2xhYmVsPlxcbiAgICA8c2VsZWN0ICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwic3BlY2lhbGl0ZVxcXCIgWyhuZ01vZGVsKV09XFxcImZpbHRlclxcXCI+XFxuXFxuXFxuXFxuXFxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGRvY3RvciBvZiBkb2N0b3JzIFxcXCIgID57e2RvY3Rvci5zcGVjaWFsaXRlfX08L29wdGlvbj5cXG5cXG5cXG5cXG5cXG4gICAgPC9zZWxlY3Q+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiICpuZ0lmPVxcXCJkb2N0b3JzXFxcIj5cXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+XFxuICAgICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgIDx0ciBqaGlTb3J0IFsocHJlZGljYXRlKV09XFxcInByZWRpY2F0ZVxcXCIgWyhhc2NlbmRpbmcpXT1cXFwicmV2ZXJzZVxcXCIgW2NhbGxiYWNrXT1cXFwidHJhbnNpdGlvbi5iaW5kKHRoaXMpXFxcIj5cXG4gICAgICAgICAgICAgICAgPHRoIGpoaVNvcnRCeT1cXFwibm9tZXRwcmVub21cXFwiPk5vbSBldCBwcmVub20gPC90aD5cXG5cXG4gICAgICAgICAgICAgICAgPHRoIGpoaVNvcnRCeT1cXFwic3BlY2lhbGl0ZVxcXCI+U3BlY2lhbGl0ZSA8L3RoPlxcbiAgICAgICAgICAgICAgICA8dGggamhpU29ydEJ5PVxcXCJwaG90b1xcXCI+UGhvdG88L3RoPlxcbiAgICAgICAgICAgICAgICA8dGggamhpU29ydEJ5PVxcXCJzZXJ2aWNlbWVkaVxcXCI+U2VydmljZSBtZWRpY2FsIDwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aCBqaGlTb3J0Qnk9XFxcImVtYWlsXFxcIj5FbWFpbCA8L3RoPlxcbiAgICAgICAgICAgICAgICA8dGggamhpU29ydEJ5PVxcXCJkYXRlblxcXCI+RGF0ZSBkZSBuYWlzc2FuY2UgPC90aD5cXG4gICAgICAgICAgICA8dGggamhpU29ydEJ5PVxcXCJsb2dpblxcXCI+TG9naW4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPlxcblxcbiAgICAgICAgICAgICAgICA8dGggamhpU29ydEJ5PVxcXCJtb3RkZXBhc3NlXFxcIj5Nb3QgZGUgcGFzc2UgPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPlxcblxcblxcbiAgICAgICAgICAgIDx0aD48L3RoPlxcbiAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90aGVhZD5cXG4gICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGRvY3RvciBvZiBkb2N0b3JzIHwgcHVyZUZpbHRlcjpmaWx0ZXI6J3NwZWNpYWxpdGUnXFxcIj5cXG4gICAgICAgICAgICAgICAgPHRkPnt7ZG9jdG9yLm5vbWV0cHJlbm9tfX08L3RkPlxcblxcbiAgICAgICAgICAgICAgICA8dGQ+e3tkb2N0b3Iuc3BlY2lhbGl0ZX19PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XFxcImRvY3Rvci5waG90b1xcXCIgKGNsaWNrKT1cXFwib3BlbkZpbGUoZG9jdG9yLnBob3RvQ29udGVudFR5cGUsIGRvY3Rvci5waG90bylcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgW3NyY109XFxcIidkYXRhOicgKyBkb2N0b3IucGhvdG9Db250ZW50VHlwZSArICc7YmFzZTY0LCcgKyBkb2N0b3IucGhvdG9cXFwiIHN0eWxlPVxcXCJtYXgtaGVpZ2h0OiAzMHB4O1xcXCIgYWx0PVxcXCJkb2N0b3IgaW1hZ2VcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG5cXG4gICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPnt7ZG9jdG9yLnNlcnZpY2VtZWRpfX08L3RkPjx0ZD57e2RvY3Rvci5lbWFpbH19PC90ZD48dGQ+e3tkb2N0b3IuZGF0ZX19PC90ZD5cXG5cXG4gICAgICAgICAgICAgICAgPHRkPnt7ZG9jdG9yLmxvZ2lufX08L3RkPlxcblxcblxcblxcblxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIGZsZXgtYnRuLWdyb3VwLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcInByaW50KGRvY3Rvci5pZClcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1wcmludFxcXCIgPlByaW50PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JvdXRlckxpbmtdPVxcXCJbJy4uL2RvY3RvcicsIGRvY3Rvci5pZCBdXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0biBidG4taW5mbyBidG4tc21cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtZXllXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoaWRkZW4tbWQtZG93blxcXCIgamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkuYWN0aW9uLnZpZXdcXFwiPlZpZXc8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ2RvY3Rvci8nKyBkb2N0b3IuaWQgKyAnL2VkaXQnfSB9XVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VVcmw9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1wZW5jaWxcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhpZGRlbi1tZC1kb3duXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24uZWRpdFxcXCI+RWRpdDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiAnZG9jdG9yLycrIGRvY3Rvci5pZCArICcvZGVsZXRlJ30gfV1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlVXJsPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1yZW1vdmVcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhpZGRlbi1tZC1kb3duXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24uZGVsZXRlXFxcIj5EZWxldGU8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICA8L3RhYmxlPlxcbiAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHQteHMtY2VudGVyXFxcIiAqbmdJZj1cXFwiZG9jdG9ycyAmJiBkb2N0b3JzLmxlbmd0aFxcXCI+XFxuICAgICAgICAgICAgPGpoaS1pdGVtLWNvdW50IFtwYWdlXT1cXFwicGFnZVxcXCIgW3RvdGFsXT1cXFwicXVlcnlDb3VudFxcXCIgW2l0ZW1zUGVyUGFnZV09XFxcIml0ZW1zUGVyUGFnZVxcXCI+PC9qaGktaXRlbS1jb3VudD5cXG4gICAgICAgICAgICA8bmdiLXBhZ2luYXRpb24gW2NvbGxlY3Rpb25TaXplXT1cXFwidG90YWxJdGVtc1xcXCIgWyhwYWdlKV09XFxcInBhZ2VcXFwiIChwYWdlQ2hhbmdlKT1cXFwibG9hZFBhZ2UocGFnZSlcXFwiPjwvbmdiLXBhZ2luYXRpb24+XFxuICAgICAgICA8L2Rpdj5cXG48L2Rpdj4tLT5cXG5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94LWhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcImJveC10aXRsZVxcXCI+Q29uZGVuc2VkIEZ1bGwgV2lkdGggVGFibGU8L2gzPlxcbiAgICAgICAgICAgICAgICAgICAgPGxpICpuZ1N3aXRjaENhc2U9XFxcInRydWVcXFwiIG5nYkRyb3Bkb3duIGNsYXNzPVxcXCJuYXYtaXRlbSBkcm9wZG93biBwb2ludGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIG5nYkRyb3Bkb3duVG9nZ2xlIGhyZWY9XFxcImphdmFzY3JpcHQ6dm9pZCgwKTtcXFwiID5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10aC1saXN0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoaWRkZW4tc20tZG93blxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvYj5cXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiBuZ2JEcm9wZG93bk1lbnU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB1aVNyZWZBY3RpdmU9XFxcImFjdGl2ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgaHJlZj1cXFwiI1xcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLWFzdGVyaXNrXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuID5GaWxlPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcblxcbiAgICAgICAgICAgICAgICA8L2Rpdj48IS0tIC8uYm94LWhlYWRlciAtLT5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94LWJvZHkgbm8tcGFkZGluZ1xcXCIgKm5nSWY9XFxcImRvY3RvcnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1jb25kZW5zZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT1cXFwid2lkdGg6IDMzJVxcXCI+Tm9tIENvbXBsZXQ8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9XFxcIndpZHRoOiAzMyVcXFwiPlBob3RvPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPVxcXCJ3aWR0aDogMzMlXFxcIj5TZXJ2aWNlIE1lZGljYWw8L3RoPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGRvY3RvciBvZiBkb2N0b3JzIFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2RvY3Rvci5ub21ldHByZW5vbX19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhICpuZ0lmPVxcXCJkb2N0b3IucGhvdG9cXFwiIChjbGljayk9XFxcIm9wZW5GaWxlKGRvY3Rvci5waG90b0NvbnRlbnRUeXBlLCBkb2N0b3IucGhvdG8pXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgW3NyY109XFxcIidkYXRhOicgKyBkb2N0b3IucGhvdG9Db250ZW50VHlwZSArICc7YmFzZTY0LCcgKyBkb2N0b3IucGhvdG9cXFwiIHN0eWxlPVxcXCJib3JkZXItcmFkaXVzOiA1MCU7bWF4LWhlaWdodDogNTBweDttYXgtd2lkdGg6IDUwcHg7XFxcIiBhbHQ9XFxcImRvY3RvciBpbWFnZVxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tkb2N0b3Iuc2VydmljZW1lZGl9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj48IS0tIC8uYm94LWJvZHkgLS0+XFxuXFxuICAgICAgICA8L2Rpdj48L3NlY3Rpb24+PC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvZG9jdG9yL2RvY3Rvci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2RvY3Rvci9kb2N0b3IuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
webpackHotUpdate(0,{

/***/ "./src/main/webapp/app/entities/doctor/doctor.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"content-wrapper\">\n\n    <section class=\"content\">\n\n        <div class='row'>\n<!--<div>\n    <h2>Medecins\n        <button class=\"btn btn-primary float-xs-right create-doctor\" [routerLink]=\"['/', { outlets: { popup: ['doctor-new'] } }]\">\n            <span class=\"fa fa-plus\"></span>\n\n            Create new Medecin\n        </button>\n\n        <button class=\"btn btn-primary float-xs-right create-doctor\"  (click)=\"print()\">\n            <span class=\"fa fa-print\"></span>\n            <span >Print</span>\n        </button>\n    </h2>\n    <jhi-alert></jhi-alert>\n\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n        </div>\n    </div>\n    <br/>\n    <label>Filtrer par spécialité: </label>\n    <select   class=\"form-control\" name=\"specialite\" [(ngModel)]=\"filter\">\n\n\n\n\n        <option *ngFor=\"let doctor of doctors \"  >{{doctor.specialite}}</option>\n\n\n\n\n    </select>\n    <div class=\"table-responsive\" *ngIf=\"doctors\">\n        <table class=\"table table-striped\">\n            <thead>\n            <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"transition.bind(this)\">\n                <th jhiSortBy=\"nometprenom\">Nom et prenom </th>\n\n                <th jhiSortBy=\"specialite\">Specialite </th>\n                <th jhiSortBy=\"photo\">Photo</th>\n                <th jhiSortBy=\"servicemedi\">Service medical </th>\n                <th jhiSortBy=\"email\">Email </th>\n                <th jhiSortBy=\"daten\">Date de naissance </th>\n            <th jhiSortBy=\"login\">Login <span class=\"fa fa-sort\"></span></th>\n\n                <th jhiSortBy=\"motdepasse\">Mot de passe <span class=\"fa fa-sort\"></span></th>\n\n\n            <th></th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let doctor of doctors | pureFilter:filter:'specialite'\">\n                <td>{{doctor.nometprenom}}</td>\n\n                <td>{{doctor.specialite}}</td>\n                <td>\n                    <a *ngIf=\"doctor.photo\" (click)=\"openFile(doctor.photoContentType, doctor.photo)\">\n                        <img [src]=\"'data:' + doctor.photoContentType + ';base64,' + doctor.photo\" style=\"max-height: 30px;\" alt=\"doctor image\"/>\n                    </a>\n\n                </td>\n                <td>{{doctor.servicemedi}}</td><td>{{doctor.email}}</td><td>{{doctor.date}}</td>\n\n                <td>{{doctor.login}}</td>\n\n\n\n\n                <td class=\"text-xs-right\">\n                    <div class=\"btn-group flex-btn-group-container\">\n                        <button type=\"submit\" (click)=\"print(doctor.id)\"\n                                class=\"btn btn-success btn-sm\">\n                            <span class=\"fa fa-print\" >Print</span>\n                        </button>\n\n                        <button type=\"submit\"\n                                [routerLink]=\"['../doctor', doctor.id ]\"\n                                class=\"btn btn-info btn-sm\">\n                            <span class=\"fa fa-eye\"></span>\n                            <span class=\"hidden-md-down\" jhiTranslate=\"entity.action.view\">View</span>\n                        </button>\n                        <button type=\"submit\"\n                                [routerLink]=\"['/', { outlets: { popup: 'doctor/'+ doctor.id + '/edit'} }]\"\n                                replaceUrl=\"true\"\n                                class=\"btn btn-primary btn-sm\">\n                            <span class=\"fa fa-pencil\"></span>\n                            <span class=\"hidden-md-down\" jhiTranslate=\"entity.action.edit\">Edit</span>\n                        </button>\n                        <button type=\"submit\"\n                                [routerLink]=\"['/', { outlets: { popup: 'doctor/'+ doctor.id + '/delete'} }]\"\n                                replaceUrl=\"true\"\n                                class=\"btn btn-danger btn-sm\">\n                            <span class=\"fa fa-remove\"></span>\n                            <span class=\"hidden-md-down\" jhiTranslate=\"entity.action.delete\">Delete</span>\n                        </button>\n                    </div>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n        <div class=\"text-xs-center\" *ngIf=\"doctors && doctors.length\">\n            <jhi-item-count [page]=\"page\" [total]=\"queryCount\" [itemsPerPage]=\"itemsPerPage\"></jhi-item-count>\n            <ngb-pagination [collectionSize]=\"totalItems\" [(page)]=\"page\" (pageChange)=\"loadPage(page)\"></ngb-pagination>\n        </div>\n</div>-->\n\n\n                <div class=\"box-header\">\n                    <h3 class=\"box-title\">Liste des medecins</h3>\n                    <button class=\"btn btn-primary pull-right\" style=\"margin-right: 5px;\" (click)=\"print()\"><i class=\"fa fa-download\" ></i> Générer PDF</button>\n                    <button class=\"btn btn-info pull-right\" style=\"margin-right: 5px;\" [routerLink]=\"['/', { outlets: { popup: ['doctor-new'] } }]\"><i class=\"fa fa-download\" ></i> Ajouter un nouveau medecin</button>\n\n                </div><!-- /.box-header -->\n                <div class=\"box-body no-padding\" *ngIf=\"doctors\">\n                    <table class=\"table table-condensed\">\n                        <tr >\n                            <th style=\"width: 23%\">Nom Complet</th>\n                            <th style=\"width: 13%\">Photo</th>\n                            <th style=\"width: 33%\">Service Medical</th>\n                            <th style=\"width: 34%\">Action</th>\n                        </tr>\n                        <tr *ngFor=\"let doctor of doctors \">\n                            <td>{{doctor.nometprenom}}</td>\n                            <td><a *ngIf=\"doctor.photo\" (click)=\"openFile(doctor.photoContentType, doctor.photo)\">\n                                <img [src]=\"'data:' + doctor.photoContentType + ';base64,' + doctor.photo\" style=\"border-radius: 50%;max-height: 50px;max-width: 50px;\" alt=\"doctor image\"/>\n                            </a></td>\n                            <td>\n                                {{doctor.servicemedi}}\n                            </td>\n<td><button class=\"btn btn-success pull-right\" style=\"margin-right: 5px;\"><i class=\"fa fa-download\"></i> </button>\n    <button class=\"btn btn-primary pull-right\" style=\"margin-right: 5px;\" type=\"submit\"\n            [routerLink]=\"['/', { outlets: { popup: 'doctor/'+ doctor.id + '/edit'} }]\"\n            replaceUrl=\"true\"><i class=\"fa fa-edit\"></i> </button>\n    <button class=\"btn btn-warning pull-right\" style=\"margin-right: 5px;\"\n            type=\"submit\"\n            [routerLink]=\"['../doctor', doctor.id ]\"><i class=\"fa fa-eye\"></i> </button>\n    <button class=\"btn btn-danger pull-right\" style=\"margin-right: 5px;\" type=\"submit\"\n            [routerLink]=\"['/', { outlets: { popup: 'doctor/'+ doctor.id + '/delete'} }]\"\n            replaceUrl=\"true\"><i class=\"fa fa-trash-o\"></i> </button></td>\n                        </tr>\n\n                    </table>\n                </div><!-- /.box-body -->\n\n        </div></section></div>\n"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2RvY3Rvci9kb2N0b3IuY29tcG9uZW50Lmh0bWw/MDY3MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtPQUErTyxXQUFXLHdCQUF3QixFQUFFLGdvQkFBZ29CLG1CQUFtQixpZ0NBQWlnQyxvQkFBb0IsK0JBQStCLG1CQUFtQixvTkFBb04sbURBQW1ELG9HQUFvRyxvQkFBb0IsV0FBVyxjQUFjLFdBQVcsYUFBYSwrQkFBK0IsY0FBYyxvM0JBQW8zQixXQUFXLHVDQUF1QyxFQUFFLHFiQUFxYixXQUFXLHlDQUF5QyxFQUFFLHkvQkFBeS9CLHVLQUF1Syx5QkFBeUIsV0FBVyx3QkFBd0IsRUFBRSxtckJBQW1yQixvQkFBb0Isa05BQWtOLHFEQUFxRCxpQkFBaUIsZ0JBQWdCLHNJQUFzSSxvQkFBb0IsZ0hBQWdILDBIQUEwSCxzREFBc0QsV0FBVyx1Q0FBdUMsRUFBRSx3SkFBd0oseU1BQXlNLHNEQUFzRCxXQUFXLHlDQUF5QyxFQUFFLGtPIiwiZmlsZSI6IjAuYjBhYmRkOWNlZjQwNzcyZTdmZGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCJcXG48ZGl2IGNsYXNzPVxcXCJjb250ZW50LXdyYXBwZXJcXFwiPlxcblxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuXFxuICAgICAgICA8ZGl2IGNsYXNzPSdyb3cnPlxcbjwhLS08ZGl2PlxcbiAgICA8aDI+TWVkZWNpbnNcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBmbG9hdC14cy1yaWdodCBjcmVhdGUtZG9jdG9yXFxcIiBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogWydkb2N0b3ItbmV3J10gfSB9XVxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLXBsdXNcXFwiPjwvc3Bhbj5cXG5cXG4gICAgICAgICAgICBDcmVhdGUgbmV3IE1lZGVjaW5cXG4gICAgICAgIDwvYnV0dG9uPlxcblxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGZsb2F0LXhzLXJpZ2h0IGNyZWF0ZS1kb2N0b3JcXFwiICAoY2xpY2spPVxcXCJwcmludCgpXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtcHJpbnRcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhbiA+UHJpbnQ8L3NwYW4+XFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgPC9oMj5cXG4gICAgPGpoaS1hbGVydD48L2poaS1hbGVydD5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxici8+XFxuICAgIDxsYWJlbD5GaWx0cmVyIHBhciBzcMOpY2lhbGl0w6k6IDwvbGFiZWw+XFxuICAgIDxzZWxlY3QgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJzcGVjaWFsaXRlXFxcIiBbKG5nTW9kZWwpXT1cXFwiZmlsdGVyXFxcIj5cXG5cXG5cXG5cXG5cXG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgZG9jdG9yIG9mIGRvY3RvcnMgXFxcIiAgPnt7ZG9jdG9yLnNwZWNpYWxpdGV9fTwvb3B0aW9uPlxcblxcblxcblxcblxcbiAgICA8L3NlbGVjdD5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCIgKm5nSWY9XFxcImRvY3RvcnNcXFwiPlxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj5cXG4gICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgPHRyIGpoaVNvcnQgWyhwcmVkaWNhdGUpXT1cXFwicHJlZGljYXRlXFxcIiBbKGFzY2VuZGluZyldPVxcXCJyZXZlcnNlXFxcIiBbY2FsbGJhY2tdPVxcXCJ0cmFuc2l0aW9uLmJpbmQodGhpcylcXFwiPlxcbiAgICAgICAgICAgICAgICA8dGggamhpU29ydEJ5PVxcXCJub21ldHByZW5vbVxcXCI+Tm9tIGV0IHByZW5vbSA8L3RoPlxcblxcbiAgICAgICAgICAgICAgICA8dGggamhpU29ydEJ5PVxcXCJzcGVjaWFsaXRlXFxcIj5TcGVjaWFsaXRlIDwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aCBqaGlTb3J0Qnk9XFxcInBob3RvXFxcIj5QaG90bzwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aCBqaGlTb3J0Qnk9XFxcInNlcnZpY2VtZWRpXFxcIj5TZXJ2aWNlIG1lZGljYWwgPC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIGpoaVNvcnRCeT1cXFwiZW1haWxcXFwiPkVtYWlsIDwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aCBqaGlTb3J0Qnk9XFxcImRhdGVuXFxcIj5EYXRlIGRlIG5haXNzYW5jZSA8L3RoPlxcbiAgICAgICAgICAgIDx0aCBqaGlTb3J0Qnk9XFxcImxvZ2luXFxcIj5Mb2dpbiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+XFxuXFxuICAgICAgICAgICAgICAgIDx0aCBqaGlTb3J0Qnk9XFxcIm1vdGRlcGFzc2VcXFwiPk1vdCBkZSBwYXNzZSA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+XFxuXFxuXFxuICAgICAgICAgICAgPHRoPjwvdGg+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgZG9jdG9yIG9mIGRvY3RvcnMgfCBwdXJlRmlsdGVyOmZpbHRlcjonc3BlY2lhbGl0ZSdcXFwiPlxcbiAgICAgICAgICAgICAgICA8dGQ+e3tkb2N0b3Iubm9tZXRwcmVub219fTwvdGQ+XFxuXFxuICAgICAgICAgICAgICAgIDx0ZD57e2RvY3Rvci5zcGVjaWFsaXRlfX08L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cXFwiZG9jdG9yLnBob3RvXFxcIiAoY2xpY2spPVxcXCJvcGVuRmlsZShkb2N0b3IucGhvdG9Db250ZW50VHlwZSwgZG9jdG9yLnBob3RvKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cXFwiJ2RhdGE6JyArIGRvY3Rvci5waG90b0NvbnRlbnRUeXBlICsgJztiYXNlNjQsJyArIGRvY3Rvci5waG90b1xcXCIgc3R5bGU9XFxcIm1heC1oZWlnaHQ6IDMwcHg7XFxcIiBhbHQ9XFxcImRvY3RvciBpbWFnZVxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcblxcbiAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQ+e3tkb2N0b3Iuc2VydmljZW1lZGl9fTwvdGQ+PHRkPnt7ZG9jdG9yLmVtYWlsfX08L3RkPjx0ZD57e2RvY3Rvci5kYXRlfX08L3RkPlxcblxcbiAgICAgICAgICAgICAgICA8dGQ+e3tkb2N0b3IubG9naW59fTwvdGQ+XFxuXFxuXFxuXFxuXFxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAgZmxleC1idG4tZ3JvdXAtY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwicHJpbnQoZG9jdG9yLmlkKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLXByaW50XFxcIiA+UHJpbnQ8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm91dGVyTGlua109XFxcIlsnLi4vZG9jdG9yJywgZG9jdG9yLmlkIF1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvIGJ0bi1zbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1leWVcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhpZGRlbi1tZC1kb3duXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24udmlld1xcXCI+Vmlldzwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiAnZG9jdG9yLycrIGRvY3Rvci5pZCArICcvZWRpdCd9IH1dXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZVVybD1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLXBlbmNpbFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGlkZGVuLW1kLWRvd25cXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmFjdGlvbi5lZGl0XFxcIj5FZGl0PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6ICdkb2N0b3IvJysgZG9jdG9yLmlkICsgJy9kZWxldGUnfSB9XVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VVcmw9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLXJlbW92ZVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGlkZGVuLW1kLWRvd25cXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmFjdGlvbi5kZWxldGVcXFwiPkRlbGV0ZTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgIDwvdGFibGU+XFxuICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dC14cy1jZW50ZXJcXFwiICpuZ0lmPVxcXCJkb2N0b3JzICYmIGRvY3RvcnMubGVuZ3RoXFxcIj5cXG4gICAgICAgICAgICA8amhpLWl0ZW0tY291bnQgW3BhZ2VdPVxcXCJwYWdlXFxcIiBbdG90YWxdPVxcXCJxdWVyeUNvdW50XFxcIiBbaXRlbXNQZXJQYWdlXT1cXFwiaXRlbXNQZXJQYWdlXFxcIj48L2poaS1pdGVtLWNvdW50PlxcbiAgICAgICAgICAgIDxuZ2ItcGFnaW5hdGlvbiBbY29sbGVjdGlvblNpemVdPVxcXCJ0b3RhbEl0ZW1zXFxcIiBbKHBhZ2UpXT1cXFwicGFnZVxcXCIgKHBhZ2VDaGFuZ2UpPVxcXCJsb2FkUGFnZShwYWdlKVxcXCI+PC9uZ2ItcGFnaW5hdGlvbj5cXG4gICAgICAgIDwvZGl2PlxcbjwvZGl2Pi0tPlxcblxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3gtaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiYm94LXRpdGxlXFxcIj5MaXN0ZSBkZXMgbWVkZWNpbnM8L2gzPlxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IHB1bGwtcmlnaHRcXFwiIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDVweDtcXFwiIChjbGljayk9XFxcInByaW50KClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1kb3dubG9hZFxcXCIgPjwvaT4gR8OpbsOpcmVyIFBERjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvIHB1bGwtcmlnaHRcXFwiIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDVweDtcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiBbJ2RvY3Rvci1uZXcnXSB9IH1dXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtZG93bmxvYWRcXFwiID48L2k+IEFqb3V0ZXIgdW4gbm91dmVhdSBtZWRlY2luPC9idXR0b24+XFxuXFxuICAgICAgICAgICAgICAgIDwvZGl2PjwhLS0gLy5ib3gtaGVhZGVyIC0tPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3gtYm9keSBuby1wYWRkaW5nXFxcIiAqbmdJZj1cXFwiZG9jdG9yc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWNvbmRlbnNlZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyID5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPVxcXCJ3aWR0aDogMjMlXFxcIj5Ob20gQ29tcGxldDwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT1cXFwid2lkdGg6IDEzJVxcXCI+UGhvdG88L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9XFxcIndpZHRoOiAzMyVcXFwiPlNlcnZpY2UgTWVkaWNhbDwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT1cXFwid2lkdGg6IDM0JVxcXCI+QWN0aW9uPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBkb2N0b3Igb2YgZG9jdG9ycyBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tkb2N0b3Iubm9tZXRwcmVub219fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YSAqbmdJZj1cXFwiZG9jdG9yLnBob3RvXFxcIiAoY2xpY2spPVxcXCJvcGVuRmlsZShkb2N0b3IucGhvdG9Db250ZW50VHlwZSwgZG9jdG9yLnBob3RvKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVxcXCInZGF0YTonICsgZG9jdG9yLnBob3RvQ29udGVudFR5cGUgKyAnO2Jhc2U2NCwnICsgZG9jdG9yLnBob3RvXFxcIiBzdHlsZT1cXFwiYm9yZGVyLXJhZGl1czogNTAlO21heC1oZWlnaHQ6IDUwcHg7bWF4LXdpZHRoOiA1MHB4O1xcXCIgYWx0PVxcXCJkb2N0b3IgaW1hZ2VcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZG9jdG9yLnNlcnZpY2VtZWRpfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG48dGQ+PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIHB1bGwtcmlnaHRcXFwiIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDVweDtcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1kb3dubG9hZFxcXCI+PC9pPiA8L2J1dHRvbj5cXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IHB1bGwtcmlnaHRcXFwiIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDVweDtcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCJcXG4gICAgICAgICAgICBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ2RvY3Rvci8nKyBkb2N0b3IuaWQgKyAnL2VkaXQnfSB9XVxcXCJcXG4gICAgICAgICAgICByZXBsYWNlVXJsPVxcXCJ0cnVlXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtZWRpdFxcXCI+PC9pPiA8L2J1dHRvbj5cXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nIHB1bGwtcmlnaHRcXFwiIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDVweDtcXFwiXFxuICAgICAgICAgICAgdHlwZT1cXFwic3VibWl0XFxcIlxcbiAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cXFwiWycuLi9kb2N0b3InLCBkb2N0b3IuaWQgXVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWV5ZVxcXCI+PC9pPiA8L2J1dHRvbj5cXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXIgcHVsbC1yaWdodFxcXCIgc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogNXB4O1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIlxcbiAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiAnZG9jdG9yLycrIGRvY3Rvci5pZCArICcvZGVsZXRlJ30gfV1cXFwiXFxuICAgICAgICAgICAgcmVwbGFjZVVybD1cXFwidHJ1ZVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXRyYXNoLW9cXFwiPjwvaT4gPC9idXR0b24+PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcblxcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLmJveC1ib2R5IC0tPlxcblxcbiAgICAgICAgPC9kaXY+PC9zZWN0aW9uPjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2RvY3Rvci9kb2N0b3IuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9kb2N0b3IvZG9jdG9yLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
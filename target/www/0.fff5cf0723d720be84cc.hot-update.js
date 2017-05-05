webpackHotUpdate(0,{

/***/ "./src/main/webapp/app/layouts/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<body class=\"skin-blue\">\n<div class=\"wrapper\">\n\n    <header class=\"main-header\">\n        <!-- Logo -->\n        <a  class=\"logo\"><b>E-</b>Health</a>\n        <!-- Header Navbar: style can be found in header.less -->\n        <nav class=\"navbar navbar-static-top\" role=\"navigation\">\n            <!-- Sidebar toggle button-->\n\n            <div class=\"navbar-custom-menu\">\n                <ul class=\"nav navbar-nav\">\n\n\n                    <li class=\"dropdown tasks-menu\">\n\n                        <ul class=\"dropdown-menu\">\n\n\n                            <li class=\"footer\">\n                                <a href=\"#\">View all tasks</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <!-- User Account: style can be found in dropdown.less -->\n                    <span  *ngIf=\"isAuthenticated()\">\n                    <li class=\"dropdown user user-menu\">\n                        <a (click)=\"logout()\" id=\"logout\" data-toggle=\"dropdown\">\n\n                            <span class=\"hidden-xs\">Se Déconnecter</span>\n                        </a>\n                    </li></span>\n                </ul>\n            </div>\n        </nav>\n    </header>\n    <span  *ngIf=\"isAuthenticated()\">\n    <aside class=\"main-sidebar\">\n        <!-- sidebar: style can be found in sidebar.less -->\n        <section class=\"sidebar\">\n            <!-- Sidebar user panel -->\n                                     <div class=\"user-panel\">\n\n                                                   <div class=\"pull-left info\">\n                                                       <p>{{account?.firstName}} </p>\n\n                                                              <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n                                                   </div>\n                                     </div>\n\n            <!-- search form -->\n\n\n            <div  [ngSwitch]=\"isAuthenticated()\">\n\n\n                <a  class=\"dropdown-item\" jhiHasAuthority= \"ROLE_ADMIN\"  routerLink=\"reclamation\" (click)=\"collapseNavbar()\">\n\n                     Envoyer une reclamation\n                </a>\n\n\n\n\n\n                        <a  uiSrefActive=\"active\"  jhiHasAuthority= \"ROLE_ADMIN\"  class=\"dropdown-item\" routerLink=\"likes\" (click)=\"collapseNavbar()\">\n\n                            Likes\n                        </a>\n\n\n\n\n\n\n                        <a  uiSrefActive=\"active\"  jhiHasAuthority= \"ROLE_ADMIN\"  class=\"dropdown-item\" routerLink=\"chart\" (click)=\"collapseNavbar()\">\n\n                           Chart\n                        </a>\n                        <a  uiSrefActive=\"active\"  jhiHasAuthority= \"ROLE_ADMIN\"  class=\"dropdown-item\" routerLink=\"chat\" (click)=\"collapseNavbar()\">\n\n                            Chat\n                        </a>\n                        <a  uiSrefActive=\"active\"  jhiHasAuthority= \"ROLE_ADMIN\"  class=\"dropdown-item\" routerLink=\"doctor\" (click)=\"collapseNavbar()\">\n\n                             Gérer les medecins\n                        </a>\n                        <a  uiSrefActive=\"active\"  jhiHasAuthority= \"ROLE_MEDECIN\"  class=\"dropdown-item\" routerLink=\"dossier-medical-vf\" (click)=\"collapseNavbar()\">\n\n                             Dossier Medical\n                        </a>\n\n <a class=\"dropdown-item\" routerLink=\"demandemedicamentvff\"  (click)=\"collapseNavbar()\">\n\n                             Demande Medicaments\n                        </a>\n                <a class=\"dropdown-item\" routerLink=\"article\"  (click)=\"collapseNavbar()\">\n\n                         Avis Medical\n                        </a>\n\n <a class=\"dropdown-item\" routerLink=\"pharmacie\" jhiHasAuthority=\"ROLE_ADMIN\" (click)=\"collapseNavbar()\">\n\n                           Gestion des pharmaciens\n                        </a>\n\n                        <a class=\"dropdown-item\" routerLink=\"servicemedical\" jhiHasAuthority=\"ROLE_ADMIN\" (click)=\"collapseNavbar()\">\n\n                            Gestion des services medicals\n                        </a>\n\n\n                        <!--<a class=\"dropdown-item\" routerLink=\"fichemedicale\"  (click)=\"collapseNavbar()\">\n\n                           Gestion des fiches medicales\n                        </a>-->\n                       <!-- <a class=\"dropdown-item\" routerLink=\"fichepatient\"  (click)=\"collapseNavbar()\">\n\n                            Gestion des fiches patients\n                        </a>-->\n                      <!--  <a class=\"dropdown-item\" routerLink=\"patient\" jhiHasAuthority=\"ROLE_MEDECIN, ROLE_CHEF_SERVICE\"(click)=\"collapseNavbar()\">\n\n                            Gestion des Patients\n                        </a>-->\n                        <a class=\"dropdown-item\" routerLink=\"materiel\" jhiHasAuthority=\"ROLE_CHEF_SERVICE\" (click)=\"collapseNavbar()\">\n\n                       Gestion des Materiels\n                        </a>\n\n                        <a class=\"dropdown-item\"  jhiHasAuthority=\"ROLE_MEDECIN\"routerLink=\"hello\" (click)=\"collapseNavbar()\">\n\n                             Gestion des traitements\n                        </a>\n\n                        <a class=\"dropdown-item\" jhiHasAuthority=\"ROLE_MEDECIN\"routerLink=\"medicament\" (click)=\"collapseNavbar()\">\n\n                            Gestion des Medicaments\n                        </a>\n                       <!-- <a class=\"dropdown-item\" jhiHasAuthority=\"ROLE_MEDECIN\"routerLink=\"demande-medicament-vf\" (click)=\"collapseNavbar()\">\n\n                            <strong>    Demandes des medicaments</strong>\n                        </a>-->\n                        <a class=\"dropdown-item\" jhiHasAuthority=\"['ROLE_CHEF_SERVICE' , 'ROLE_MEDECIN','ROLE_GESTIONNAIREDEMATERIEL']\"routerLink=\"demandemateriel\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\">\n\n                      Demandes des materiels\n                        </a>\n                   <!-- <li class=\"dropdown-item\"  jhiHasAuthority=\"[ROLE_ADMIN,ROLE_MEDECIN]\"  class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                        <a class=\"nav-link\" routerLink=\"chart\" (click)=\"collapseNavbar()\">\n                            <i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i>\n                            <span class=\"hidden-sm-down\">Chart Medecin</span>\n                        </a>\n                        <a class=\"nav-link\" routerLink=\"chat\" (click)=\"collapseNavbar()\">\n                            <i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i>\n                            <span class=\"hidden-sm-down\">Chat Module</span>\n                        </a>\n                    </li>-->\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n        </section>\n        <!-- /.sidebar -->\n    </aside>\n    </span>\n\n\n</div><!-- ./wrapper -->\n\n\n</body>\n\n\n"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbD9lZmMzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseXJEQUF5ckQsb0JBQW9CLCtnSkFBK2dKLFlBQVksMnhCIiwiZmlsZSI6IjAuZmZmNWNmMDcyM2Q3MjBiZTg0Y2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCJcXG5cXG48Ym9keSBjbGFzcz1cXFwic2tpbi1ibHVlXFxcIj5cXG48ZGl2IGNsYXNzPVxcXCJ3cmFwcGVyXFxcIj5cXG5cXG4gICAgPGhlYWRlciBjbGFzcz1cXFwibWFpbi1oZWFkZXJcXFwiPlxcbiAgICAgICAgPCEtLSBMb2dvIC0tPlxcbiAgICAgICAgPGEgIGNsYXNzPVxcXCJsb2dvXFxcIj48Yj5FLTwvYj5IZWFsdGg8L2E+XFxuICAgICAgICA8IS0tIEhlYWRlciBOYXZiYXI6IHN0eWxlIGNhbiBiZSBmb3VuZCBpbiBoZWFkZXIubGVzcyAtLT5cXG4gICAgICAgIDxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItc3RhdGljLXRvcFxcXCIgcm9sZT1cXFwibmF2aWdhdGlvblxcXCI+XFxuICAgICAgICAgICAgPCEtLSBTaWRlYmFyIHRvZ2dsZSBidXR0b24tLT5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItY3VzdG9tLW1lbnVcXFwiPlxcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2XFxcIj5cXG5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZHJvcGRvd24gdGFza3MtbWVudVxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXG5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCI+VmlldyBhbGwgdGFza3M8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIFVzZXIgQWNjb3VudDogc3R5bGUgY2FuIGJlIGZvdW5kIGluIGRyb3Bkb3duLmxlc3MgLS0+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAgKm5nSWY9XFxcImlzQXV0aGVudGljYXRlZCgpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZHJvcGRvd24gdXNlciB1c2VyLW1lbnVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcImxvZ291dCgpXFxcIiBpZD1cXFwibG9nb3V0XFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGlkZGVuLXhzXFxcIj5TZSBEw6ljb25uZWN0ZXI8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9saT48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L25hdj5cXG4gICAgPC9oZWFkZXI+XFxuICAgIDxzcGFuICAqbmdJZj1cXFwiaXNBdXRoZW50aWNhdGVkKClcXFwiPlxcbiAgICA8YXNpZGUgY2xhc3M9XFxcIm1haW4tc2lkZWJhclxcXCI+XFxuICAgICAgICA8IS0tIHNpZGViYXI6IHN0eWxlIGNhbiBiZSBmb3VuZCBpbiBzaWRlYmFyLmxlc3MgLS0+XFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cXFwic2lkZWJhclxcXCI+XFxuICAgICAgICAgICAgPCEtLSBTaWRlYmFyIHVzZXIgcGFuZWwgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInVzZXItcGFuZWxcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInB1bGwtbGVmdCBpbmZvXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3thY2NvdW50Py5maXJzdE5hbWV9fSA8L3A+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtY2lyY2xlIHRleHQtc3VjY2Vzc1xcXCI+PC9pPiBPbmxpbmU8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDwhLS0gc2VhcmNoIGZvcm0gLS0+XFxuXFxuXFxuICAgICAgICAgICAgPGRpdiAgW25nU3dpdGNoXT1cXFwiaXNBdXRoZW50aWNhdGVkKClcXFwiPlxcblxcblxcbiAgICAgICAgICAgICAgICA8YSAgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIGpoaUhhc0F1dGhvcml0eT0gXFxcIlJPTEVfQURNSU5cXFwiICByb3V0ZXJMaW5rPVxcXCJyZWNsYW1hdGlvblxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgRW52b3llciB1bmUgcmVjbGFtYXRpb25cXG4gICAgICAgICAgICAgICAgPC9hPlxcblxcblxcblxcblxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhICB1aVNyZWZBY3RpdmU9XFxcImFjdGl2ZVxcXCIgIGpoaUhhc0F1dGhvcml0eT0gXFxcIlJPTEVfQURNSU5cXFwiICBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwibGlrZXNcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMaWtlc1xcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG5cXG5cXG5cXG5cXG5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSAgdWlTcmVmQWN0aXZlPVxcXCJhY3RpdmVcXFwiICBqaGlIYXNBdXRob3JpdHk9IFxcXCJST0xFX0FETUlOXFxcIiAgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcImNoYXJ0XFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBDaGFydFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSAgdWlTcmVmQWN0aXZlPVxcXCJhY3RpdmVcXFwiICBqaGlIYXNBdXRob3JpdHk9IFxcXCJST0xFX0FETUlOXFxcIiAgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcImNoYXRcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGF0XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhICB1aVNyZWZBY3RpdmU9XFxcImFjdGl2ZVxcXCIgIGpoaUhhc0F1dGhvcml0eT0gXFxcIlJPTEVfQURNSU5cXFwiICBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwiZG9jdG9yXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIEfDqXJlciBsZXMgbWVkZWNpbnNcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgIHVpU3JlZkFjdGl2ZT1cXFwiYWN0aXZlXFxcIiAgamhpSGFzQXV0aG9yaXR5PSBcXFwiUk9MRV9NRURFQ0lOXFxcIiAgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcImRvc3NpZXItbWVkaWNhbC12ZlxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb3NzaWVyIE1lZGljYWxcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuXFxuIDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJkZW1hbmRlbWVkaWNhbWVudHZmZlxcXCIgIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVtYW5kZSBNZWRpY2FtZW50c1xcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcImFydGljbGVcXFwiICAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgQXZpcyBNZWRpY2FsXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcblxcbiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwicGhhcm1hY2llXFxcIiBqaGlIYXNBdXRob3JpdHk9XFxcIlJPTEVfQURNSU5cXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlc3Rpb24gZGVzIHBoYXJtYWNpZW5zXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJzZXJ2aWNlbWVkaWNhbFxcXCIgamhpSGFzQXV0aG9yaXR5PVxcXCJST0xFX0FETUlOXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2VzdGlvbiBkZXMgc2VydmljZXMgbWVkaWNhbHNcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJmaWNoZW1lZGljYWxlXFxcIiAgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgR2VzdGlvbiBkZXMgZmljaGVzIG1lZGljYWxlc1xcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4tLT5cXG4gICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcImZpY2hlcGF0aWVudFxcXCIgIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXN0aW9uIGRlcyBmaWNoZXMgcGF0aWVudHNcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+LS0+XFxuICAgICAgICAgICAgICAgICAgICAgIDwhLS0gIDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJwYXRpZW50XFxcIiBqaGlIYXNBdXRob3JpdHk9XFxcIlJPTEVfTUVERUNJTiwgUk9MRV9DSEVGX1NFUlZJQ0VcXFwiKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlc3Rpb24gZGVzIFBhdGllbnRzXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPi0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJtYXRlcmllbFxcXCIgamhpSGFzQXV0aG9yaXR5PVxcXCJST0xFX0NIRUZfU0VSVklDRVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICBHZXN0aW9uIGRlcyBNYXRlcmllbHNcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiICBqaGlIYXNBdXRob3JpdHk9XFxcIlJPTEVfTUVERUNJTlxcXCJyb3V0ZXJMaW5rPVxcXCJoZWxsb1xcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXN0aW9uIGRlcyB0cmFpdGVtZW50c1xcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgamhpSGFzQXV0aG9yaXR5PVxcXCJST0xFX01FREVDSU5cXFwicm91dGVyTGluaz1cXFwibWVkaWNhbWVudFxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlc3Rpb24gZGVzIE1lZGljYW1lbnRzXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgamhpSGFzQXV0aG9yaXR5PVxcXCJST0xFX01FREVDSU5cXFwicm91dGVyTGluaz1cXFwiZGVtYW5kZS1tZWRpY2FtZW50LXZmXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz4gICAgRGVtYW5kZXMgZGVzIG1lZGljYW1lbnRzPC9zdHJvbmc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPi0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiBqaGlIYXNBdXRob3JpdHk9XFxcIlsnUk9MRV9DSEVGX1NFUlZJQ0UnICwgJ1JPTEVfTUVERUNJTicsJ1JPTEVfR0VTVElPTk5BSVJFREVNQVRFUklFTCddXFxcInJvdXRlckxpbms9XFxcImRlbWFuZGVtYXRlcmllbFxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgRGVtYW5kZXMgZGVzIG1hdGVyaWVsc1xcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgPCEtLSA8bGkgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiICBqaGlIYXNBdXRob3JpdHk9XFxcIltST0xFX0FETUlOLFJPTEVfTUVERUNJTl1cXFwiICBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cXFwie2V4YWN0OiB0cnVlfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcIm5hdi1saW5rXFxcIiByb3V0ZXJMaW5rPVxcXCJjaGFydFxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1iYXItY2hhcnRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoaWRkZW4tc20tZG93blxcXCI+Q2hhcnQgTWVkZWNpbjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcIm5hdi1saW5rXFxcIiByb3V0ZXJMaW5rPVxcXCJjaGF0XFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWJhci1jaGFydFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhpZGRlbi1zbS1kb3duXFxcIj5DaGF0IE1vZHVsZTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICA8L2xpPi0tPlxcbjwvZGl2PlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbiAgICAgICAgPC9zZWN0aW9uPlxcbiAgICAgICAgPCEtLSAvLnNpZGViYXIgLS0+XFxuICAgIDwvYXNpZGU+XFxuICAgIDwvc3Bhbj5cXG5cXG5cXG48L2Rpdj48IS0tIC4vd3JhcHBlciAtLT5cXG5cXG5cXG48L2JvZHk+XFxuXFxuXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
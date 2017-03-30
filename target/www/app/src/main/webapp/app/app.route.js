"use strict";
var layouts_1 = require("./layouts");
/* import { AuthService } from './shared';

@Injectable()
export class AuthorizeResolve implements Resolve<any> {

  constructor(private authService: AuthService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.authorize();
  }
} */
exports.navbarRoute = {
    path: '',
    component: layouts_1.NavbarComponent,
    // resolve: {
    //   'authorize': AuthorizeResolve
    // },
    outlet: 'navbar'
};
//# sourceMappingURL=app.route.js.map
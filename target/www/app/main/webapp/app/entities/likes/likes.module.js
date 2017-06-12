"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_1 = require("../../shared");
var _1 = require("./");
var ENTITY_STATES = _1.likesRoute.concat(_1.likesPopupRoute);
var AvancementLikesModule = (function () {
    function AvancementLikesModule() {
    }
    return AvancementLikesModule;
}());
AvancementLikesModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.AvancementSharedModule,
            router_1.RouterModule.forRoot(ENTITY_STATES, { useHash: true })
        ],
        declarations: [
            _1.LikesComponent,
            _1.LikesDetailComponent,
            _1.LikesDialogComponent,
            _1.LikesDeleteDialogComponent,
            _1.LikesPopupComponent,
            _1.LikesDeletePopupComponent,
        ],
        entryComponents: [
            _1.LikesComponent,
            _1.LikesDialogComponent,
            _1.LikesPopupComponent,
            _1.LikesDeleteDialogComponent,
            _1.LikesDeletePopupComponent,
        ],
        providers: [
            _1.LikesService,
            _1.LikesPopupService,
            _1.LikesResolvePagingParams,
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], AvancementLikesModule);
exports.AvancementLikesModule = AvancementLikesModule;
//# sourceMappingURL=likes.module.js.map
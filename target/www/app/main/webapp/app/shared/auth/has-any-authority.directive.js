"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var principal_service_1 = require("./principal.service");
var HasAnyAuthorityDirective = (function () {
    function HasAnyAuthorityDirective(principal, el, renderer) {
        this.principal = principal;
        this.el = el;
        this.renderer = renderer;
    }
    HasAnyAuthorityDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.authority = this.jhiHasAnyAuthority.replace(/\s+/g, '').split(',');
        if (this.authority.length > 0) {
            this.setVisibilitySync();
        }
        this.principal.getAuthenticationState().subscribe(function (identity) { return _this.setVisibilitySync(); });
    };
    HasAnyAuthorityDirective.prototype.setVisible = function () {
        this.renderer.setElementClass(this.el.nativeElement, 'hidden-xs-up', false);
    };
    HasAnyAuthorityDirective.prototype.setHidden = function () {
        this.renderer.setElementClass(this.el.nativeElement, 'hidden-xs-up', true);
    };
    HasAnyAuthorityDirective.prototype.setVisibilitySync = function () {
        var result = this.principal.hasAnyAuthority(this.authority);
        if (result) {
            this.setVisible();
        }
        else {
            this.setHidden();
        }
    };
    return HasAnyAuthorityDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], HasAnyAuthorityDirective.prototype, "jhiHasAnyAuthority", void 0);
HasAnyAuthorityDirective = __decorate([
    core_1.Directive({
        selector: '[jhiHasAnyAuthority]'
    }),
    __metadata("design:paramtypes", [principal_service_1.Principal, core_1.ElementRef, core_1.Renderer])
], HasAnyAuthorityDirective);
exports.HasAnyAuthorityDirective = HasAnyAuthorityDirective;
//# sourceMappingURL=has-any-authority.directive.js.map
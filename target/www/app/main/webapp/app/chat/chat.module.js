"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_1 = require("../shared");
var ngx_pipes_1 = require("ngx-pipes");
var _1 = require("./");
var chat_service_1 = require("./chat.service");
var AvancementChatModule = (function () {
    function AvancementChatModule() {
    }
    return AvancementChatModule;
}());
AvancementChatModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.AvancementSharedModule,
            router_1.RouterModule.forRoot([_1.CHAT_ROUTE], { useHash: true }),
            ngx_pipes_1.NgPipesModule
        ],
        declarations: [
            _1.ChatComponent, _1.Angular2AutoScroll
        ],
        entryComponents: [],
        providers: [
            chat_service_1.ChatService
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
    })
], AvancementChatModule);
exports.AvancementChatModule = AvancementChatModule;
//# sourceMappingURL=chat.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
require("./vendor.ts");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ng2_webstorage_1 = require("ng2-webstorage");
var shared_1 = require("./shared");
var admin_module_1 = require("./admin/admin.module");
var account_module_1 = require("./account/account.module");
var entity_module_1 = require("./entities/entity.module");
var chart_module_1 = require("./chart/chart.module");
var chat_module_1 = require("./chat/chat.module");
var layouts_1 = require("./layouts");
var home_1 = require("./home");
var http_provider_1 = require("./blocks/interceptor/http.provider");
var uib_pagination_config_1 = require("./blocks/config/uib-pagination.config");
var layouts_2 = require("./layouts");
var AvancementAppModule = (function () {
    function AvancementAppModule() {
    }
    return AvancementAppModule;
}());
AvancementAppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            layouts_1.LayoutRoutingModule,
            ng2_webstorage_1.Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
            shared_1.AvancementSharedModule,
            admin_module_1.AvancementAdminModule,
            account_module_1.AvancementAccountModule,
            entity_module_1.AvancementEntityModule,
            chart_module_1.AvancementChartModule,
            chat_module_1.AvancementChatModule
        ],
        declarations: [
            layouts_2.JhiMainComponent,
            home_1.HomeComponent,
            layouts_2.NavbarComponent,
            layouts_2.ErrorComponent,
            layouts_2.PageRibbonComponent,
            layouts_2.ActiveMenuDirective,
            layouts_2.FooterComponent
        ],
        providers: [
            layouts_2.ProfileService,
            { provide: Window, useValue: window },
            { provide: Document, useValue: document },
            http_provider_1.customHttpProvider(),
            uib_pagination_config_1.PaginationConfig,
            shared_1.UserRouteAccessService
        ],
        bootstrap: [layouts_2.JhiMainComponent]
    })
], AvancementAppModule);
exports.AvancementAppModule = AvancementAppModule;
//# sourceMappingURL=app.module.js.map
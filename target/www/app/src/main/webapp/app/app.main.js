"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var prod_config_1 = require("./blocks/config/prod.config");
var app_module_1 = require("./app.module");
prod_config_1.ProdConfig();
if (module['hot']) {
    module['hot'].accept();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AvancementAppModule);
//# sourceMappingURL=app.main.js.map
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
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var app_routes_1 = require("./app.routes");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var DaoFactory_1 = require("./datastructures/daos/impl/DaoFactory");
var LocalApiConfig_1 = require("./datastructures/config/impl/LocalApiConfig");
var login_component_1 = require("./components/login/login.component");
var ApiConfig_1 = require("./datastructures/config/impl/ApiConfig");
var register_component_1 = require("./components/register/register.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(app_routes_1.ROUTES, { useHash: true })
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.Login,
                register_component_1.Register
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                DaoFactory_1.DaoFactory,
                //{provide: IISDaoFactory, useClass: MockDaoFactory},
                { provide: ApiConfig_1.ApiConfig, useClass: LocalApiConfig_1.LocalApiConfig },
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
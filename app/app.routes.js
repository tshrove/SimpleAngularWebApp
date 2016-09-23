"use strict";
var login_component_1 = require("./components/login/login.component");
var register_component_1 = require("./components/register/register.component");
exports.ROUTES = [
    { path: "", redirectTo: 'login', pathMatch: 'full' },
    { path: "login", component: login_component_1.Login },
    { path: "register", component: register_component_1.Register },
    { path: "**", component: login_component_1.Login }
];
//# sourceMappingURL=app.routes.js.map
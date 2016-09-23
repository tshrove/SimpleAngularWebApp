import {Routes} from "@angular/router";
import {Login} from "./components/login/login.component";
import {Register} from "./components/register/register.component";

export const ROUTES: Routes = [
    {path: "", redirectTo: 'login', pathMatch: 'full'},
    {path: "login", component: Login},
    {path: "register", component: Register},
    {path: "**", component: Login}
];
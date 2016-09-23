import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {DaoFactory} from "./datastructures/daos/impl/DaoFactory";
import {LocalApiConfig} from "./datastructures/config/impl/LocalApiConfig";
import {Login} from "./components/login/login.component";
import {ApiConfig} from "./datastructures/config/impl/ApiConfig";
import {Register} from "./components/register/register.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  declarations: [
    AppComponent,
    Login,
    Register
  ],
  bootstrap: [AppComponent],
  providers: [
    DaoFactory,
    //{provide: IISDaoFactory, useClass: MockDaoFactory},
    {provide: ApiConfig, useClass: LocalApiConfig},
  ]
})
export class AppModule { }
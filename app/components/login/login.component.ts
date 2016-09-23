import {Component, OnInit, Inject, forwardRef} from "@angular/core";
import {AppComponent} from "../../app.component";

@Component({
    selector: 'login-view',
    providers:[AppComponent],
    templateUrl: 'app/components/login/login.template.html'
})

export class Login implements OnInit {
    private _appComp: AppComponent;
    /**
     * Default constructor
     */
    constructor(appComp:AppComponent) {
        this._appComp = appComp;
    }

    /**
     * Initialize after the constructor
     */
    ngOnInit(): void {
        this._appComp.showMenu = false;
    }
}

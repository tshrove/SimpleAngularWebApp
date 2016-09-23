import {Component, Injectable} from "@angular/core";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html'
})

@Injectable()
export class AppComponent {
    private _showMenu: boolean;

    /**
     * Default Constructor
     */
    constructor() {
        this._showMenu = true;
    }

    /**
     * Gets the whether the menu should be showing or not.
     * @returns {boolean}
     */
    public get showMenu(): boolean {
        return this._showMenu;
    }

    /**
     * Sets whether the menu is showing or not.
     * @param bShow
     */
    public set showMenu(bShow: boolean) {
        this._showMenu = bShow;
    }
}

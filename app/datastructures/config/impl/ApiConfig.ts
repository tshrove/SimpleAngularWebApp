import {Injectable} from "@angular/core";
import {IApiConfig} from "../interface/IApiConfig";

@Injectable()
export class ApiConfig implements IApiConfig {

    private _domain: string;

    constructor() {
        //@TODO change to match the actual server url
        this._domain = "http://something.at.msic";
    }

    public get domain(): string {
        return this._domain;
    }
}

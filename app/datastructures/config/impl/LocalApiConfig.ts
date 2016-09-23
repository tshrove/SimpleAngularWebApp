import {Injectable} from "@angular/core";
import {IApiConfig} from "../interface/IApiConfig";

@Injectable()
export class LocalApiConfig implements IApiConfig {
    protected _domain: string;

    constructor() {
        //@TODO change to match the actual server url
        this._domain = "http://localhost:3000";
    }

    public get domain(): string {
        return this._domain;
    }
}
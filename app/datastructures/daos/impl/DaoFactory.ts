import {IDaoFactory} from "../interface/IDaoFactory";
import {IUserDao} from "../interface/IUserDao";
import {UserDao} from "./UserDao";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {ApiConfig} from "../../config/impl/ApiConfig";

/**
 * Holds all the Dao implementations.
 */
@Injectable()
export class DaoFactory implements IDaoFactory {
    private _http: Http;
    private _apiConfig: ApiConfig;

    constructor(http: Http, apiConfig: ApiConfig) {
        this._http = http;
        this._apiConfig = apiConfig;
    }

    /**
     * Gets the Dao for the API
     */
    public getUserDao(): IUserDao {
        return new UserDao();
    }
}
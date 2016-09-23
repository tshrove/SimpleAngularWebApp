import {IUserDao} from "./IUserDao";

export interface IDaoFactory {
    /**
     * Gets the DAO for the api functions.
     */
    getUserDao(): IUserDao;
}

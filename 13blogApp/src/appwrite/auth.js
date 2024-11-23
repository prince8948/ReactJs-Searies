import config from "../config/config";
import { Client, Account, ID } from "appwrite";

// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('<PROJECT_ID>');                 // Your project ID

// const account = new Account(client);

// const promise = account.updatePrefs({darkTheme: true, language: 'en'});

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });


export class AuthService {   // this class is used to change different auth system you dont need to change all code
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(config.appwirteUrl)
            .setProject(config.appwirteProjectId);
        this.account = new Account(this.client);   //account create here
    }
    // wrapper for appwrite services
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                // return login method (call method)
                return this.login({ email, password })
            }
            else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }
// for login method
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Appwrite service :: logIn user :: error", error)
        }
    }

// get Current user to check we are login or not
    async getCurrentAccount({ }) {
        try {
            return this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentAccount :: error", error)
        }
        return null;
    }
// logout account or session delete from user
    async logOut({}){
        try {
          return await this.account.deleteSessions(this.client);
        } catch (error) {
            console.log("Appwrite service :: logOut User :: error", error)
        }
    }
}

const authService = new AuthService();

export default authService
import { observable, action, makeObservable } from "mobx";
import { observer } from "mobx-react-lite";
export default class TopPageStore{

    globalStore

    userType = 0

    email = ""

    password = ""

    constructor(globalStore) {
        makeObservable(this, {
            userType : observable, 
            email : observable,
            password : observable
        });
        this.globalStore = globalStore
    }
}
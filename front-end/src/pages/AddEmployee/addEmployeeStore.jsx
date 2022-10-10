import { observable, action, makeObservable } from "mobx";
export default class AddEmployeePageStore{

    globalStore

    name = ""

    mailID = ""

    contactNumber = ""

    department = ""

    joiningDate = ""
    
    password = ""

    constructor(globalStore) {
        makeObservable(this, {
            name : observable,
            mailID : observable,
            contactNumber : observable,
            department : observable,
            joiningDate : observable,
            password : observable,
            setName : action,
            setMailID : action,
            setContactNumber : action,
            setDepartment : action,
            setJoiningDate : action,
            setPassword : action
        });
        this.globalStore = globalStore
    }
    
    async setName(name){
      this.name = name;   
    }

    async setMailID(name){
      this.name = name;   
    }

    async setContactNumber(name){
      this.name = name;   
    }

    async setDepartment(name){
      this.name = name;   
    }

    async setJoiningDate(name){
      this.name = name;   
    }

    async setPassword(name){
      this.name = name;   
    }
}
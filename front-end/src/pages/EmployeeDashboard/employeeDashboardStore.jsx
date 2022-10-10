import { observable, action, makeObservable } from "mobx";
export default class EmployeeDashboardStore{

    globalStore

    description = ""

    type = ""

    start_date = ""

    time_taken = ""

    constructor(globalStore) {
        makeObservable(this, {
            description : observable,
            type : observable,
            start_date : observable,
            time_taken : observable,
            setDescription : action,
            setType : action,
            setStartDate : action,
            setTimeTaken : action
        });
        this.globalStore = globalStore
    }
    
    async setDescription(description){
      this.description = description;   
    }

    async setType(type){
      this.type = type;   
    }

    async setStartDate(start_date){
      this.start_date = start_date;   
    }

    async setTimeTaken(time_taken){
      this.time_taken = time_taken;   
    }
}
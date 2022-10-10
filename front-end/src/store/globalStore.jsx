import TopPageStore from "../pages/TopPage/topPageStore";
import AddEmployeePageStore from "../pages/AddEmployee/addEmployeeStore";
import EmployeeDashboardStore from "../pages/EmployeeDashboard/employeeDashboardStore";
export class GlobalStore{
  
    topPageStore
    addEmployeeStore
    employeeDashboardStore

    constructor(){
        this.topPageStore = new TopPageStore(this)
        this.addEmployeeStore = new AddEmployeePageStore(this)
        this.employeeDashboardStore = new EmployeeDashboardStore(this)
    }
}

export const StoreContext = new GlobalStore()
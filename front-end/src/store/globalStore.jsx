import { observable } from "mobx";
import { observer } from "mobx-react-lite";
import { createContext } from "react";
import TopPageStore from "../pages/TopPage/topPageStore";

export class GlobalStore{
  
    topPageStore
    
    constructor(){
        this.topPageStore = new TopPageStore(this)
    }
}

export const StoreContext = new GlobalStore()
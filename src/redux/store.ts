import { createStore } from "redux";

import reducer from './reducers';
import { ActionFunctionType } from './actions';
import Consts from "./consts";
import * as actions from './actions';

class Store {
  private readonly store = createStore(reducer);
  private readonly acrions = new Map<string, ActionFunctionType>();

  constructor() {
    this.acrions.set(Consts.SET_USER, actions.setUser);
  }

  dispatch(type: string, uuid: string, payload: any) {
    const action = this.acrions.get(type);

    this.store.dispatch(action(uuid, payload));
  }
  
  getState() {
    return this.store.getState();
  }

  get consts() {
    return Consts;
  }
}

export default new Store();

import { createStore } from "redux";

import reducer from './reducers';
import { ActionFunctionType, ActionFunctionType2 } from './actions';
import Consts from "./consts";
import * as actions from './actions';

class Store {
  private readonly store = createStore(reducer);
  private readonly actions = new Map<string, ActionFunctionType>();
  private readonly actionsType = new Map<string, any>();

  constructor() {
    this.actions.set(Consts.SET_USER, actions.setUser);
    this.actions.set(Consts.ADD_USER, actions.addUser);
  }

  dispatch(type: string, uuid: string, payload: any) {
    const action = this.actions.get(type);

    this.store.dispatch(action(uuid, payload));
  }

  dispatchType<T>(type: string, uuid: string, payload: T) {
    console.log("IN DISPATCHTYPER: payloadf", payload)
    const action = <ActionFunctionType>this.actions.get(type);
    
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

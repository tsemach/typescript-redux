import { createStore, StoreCreator, Store } from "redux";

// import reducer from './reducers';
import { ActionFunctionType, ActionFunctionType2, ActionType } from './actions';
// import Consts from "./consts";
// import * as actions from './actions';

type ReducerType = (state: any, action: ActionType) => any;

class StoreRemote {  
  private store: Store;  
  private readonly actions = new Map<string, ActionFunctionType>();
  private readonly actionsType = new Map<string, any>();

  constructor() {
    // this.actions.set(Consts.SET_USER, actions.setUser);
    // this.actions.set(Consts.ADD_USER, actions.addUser);
  }

  addReducer(reducer: ReducerType) {
    this.store = createStore(reducer);
  }

  addAction(name: string, action: ActionFunctionType) {
    this.actions.set(name, action);
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

  // get consts() {
  //   return Consts;
  // }
}

export default new StoreRemote();

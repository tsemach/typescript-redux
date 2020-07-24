import createLogger from 'logging';
const logger = createLogger('Store');

import { createStore, Store as ReduxStore} from "redux";

import { ActionType } from './action.type';
import { ActionFunctionType } from './action-function.type';
import reducer from '../../../dist/src/redux/reducers.d';

type ReducerType = (state: any, action: ActionType) => any;

export class Store {  
  private store: ReduxStore;  
  private readonly actions = new Map<string, ActionFunctionType>();
  private readonly reduces = new Map<string, ReducerType>();

  constructor() {
  }

  addReducer(reducer: ReducerType, scope: string = '') {
    if (scope === '') {
      this.store = createStore(reducer);

      return;
    }    

    this.reduces.set(scope, reducer)

    logger.info("[Store:addReducer] got add reducer, scope", scope)

    // const r = function(state: any = {}, action: ActionType) {
    //   const compose = {};

    //   for (let [key, value] of this.reducesp) {
    //     console.log("[Store:addReducer] adding key:", key, ", value", value);

    //     compose[scope] = reducer(state[scope], action)
    //   }      

    //   return compose;
    //   // return {
    //   //   trigger: reducer(state.trigger, action),
    //   //   progress: reducer(state.progress, action)
    //   // }
    // }    

    // this.store = createStore(r.bind(this));
  }

  doneAddReducers() {
    const reducer = function(state: any = {}, action: ActionType) {
      const compose = {};

      for (let [key, value] of this.reduces) {
        console.log("[Store:addReducer] adding key:", key, ", value", value);

        compose[key] = value(state[key], action);
      }      
      return compose;
      // return {
      //   trigger: reducer(state.trigger, action),
      //   progress: reducer(state.progress, action)
      // }
    }    

    this.store = createStore(reducer.bind(this));
  }

  addAction(name: string, action: ActionFunctionType) {
    this.actions.set(name, action);
  }
  
  dispatchType<T>(type: string, uuid: string, payload: T) {    
    const action = <ActionFunctionType>this.actions.get(type);
    logger.info(`[Store:dispatch<t>]: dispatch type: ${type}, payload: ${JSON.stringify(payload)}`);

    this.store.dispatch(action(uuid, payload));
  }

  getState() {
    return this.store.getState();
  }

}

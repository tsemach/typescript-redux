import createLogger from 'logging';
const logger = createLogger('Store');

import reducer from '../redux/reducers';
import Consts from "../redux/consts";
import * as actions from '../redux/actions';

import store from '../redux/store-remote';

function main() {
  logger.info('store.spec.ts: check simple dispatching');
  
  const uuid = '77199308-9b32-4d32-8e6e-10c8ee4ac59f';
  // store.dispatchType(store.consts.SET_USER, uuid, {name: 'tsemach'});\
  store.addReducer(reducer);
  store.addAction(Consts.SET_USER, actions.setUser);
  store.addAction(Consts.ADD_USER, actions.addUser);
  
  store.dispatchType<{name: string}>(Consts.SET_USER, uuid, { name: 'tsemach' });
  store.dispatchType<{firstname: string, lastname: string}>(Consts.ADD_USER, uuid, { firstname: 'moshe', lastname: 'levi' });

  const state = store.getState();
  
  logger.info("store.spec: state: ", JSON.stringify(state, undefined, 2));

  // expect(state.uuid).to.equal(uuid);
  // assert.deepEqual(state.user, {name: 'tsemach'}); 
}

main()
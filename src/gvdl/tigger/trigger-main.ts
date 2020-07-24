import createLogger from 'logging';
const logger = createLogger('Store');

import progressReducer from './prgress-reducers';
import reducer from './trigger-reducers';
import Consts from './trigger-consts';
import * as actions from './trigger-actions';

import { Store } from '../statelib';
import { UserInfo } from './trigger-userinfo';

function main() {
  logger.info('store.spec.ts: check simple dispatching');

  const store = new Store();
  
  const uuid = '77199308-9b32-4d32-8e6e-10c8ee4ac59f';

  store.addReducer(reducer, 'trigger');
  store.addReducer(progressReducer, 'progress');
  store.doneAddReducers();
  
  store.addAction(Consts.SET_TASK_ID, actions.setTaskId);  
  store.addAction(Consts.SET_USER, actions.setUserInfo);
  
  store.dispatchType<string>(Consts.SET_TASK_ID, uuid, '1234567890.taskId');    
  logger.info("[trigger-main] state: ", JSON.stringify(store.getState(), undefined, 2));

  store.dispatchType<UserInfo>(Consts.SET_USER, uuid, { username: "tsemach@someplace.com", accountId: "1234567890.act" });
  logger.info("[trigger-main] state: ", JSON.stringify(store.getState(), undefined, 2));
}

main()
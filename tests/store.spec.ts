import createLogger from 'logging';
const logger = createLogger('Store');

import 'mocha';
import {expect} from 'chai';
import {assert} from 'chai';

import Store from '../src/redux/store';
import store from '../src/redux/store';

describe('Job Class Execute Test', () => {

  it('store.spec.ts: check simple dispatching', () => {
    logger.info('store.spec.ts: check simple dispatching');
    
    const uuid = '77199308-9b32-4d32-8e6e-10c8ee4ac59f';
    store.dispatch(store.consts.SET_USER, uuid, {name: 'tsemach'});

    const state = store.getState();
    
    logger.info("store.spec: state: ", JSON.stringify(state, undefined, 2));

    expect(state.uuid).to.equal(uuid);
    assert.deepEqual(state.user, {name: 'tsemach'});
  });  

});
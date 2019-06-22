
import Consts from "./consts";
import { ActionType } from './actions';

const user = {
  uuid: '',
  user: {
    name: ''
  }
};

function reducer(state = user, action: ActionType) {
  if (action.type === Consts.SET_USER) {
    return Object.assign({}, state, {
      uuid: action.uuid,
      user: action.payload.name
    });
  }
  return state;
}

export default reducer;
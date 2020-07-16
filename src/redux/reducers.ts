
import Consts from "./consts";
import { ActionType } from './actions';

const user = {
  uuid: '',
  user: {
    name: ''
  },
  fullname: { firstname: '', lastname: '' } 
};

function reducer(state = user, action: ActionType) {
  if (action.type === Consts.SET_USER) {
    return Object.assign({}, state, {
      uuid: action.uuid,
      user: action.payload.name
    });
  }

  if (action.type === Consts.ADD_USER) {
    console.log("TTTTTT action:", action)
    console.log("SSSSSSSSSSSSSSSSSS State:", state)
    return Object.assign({}, state, {
      uuid: action.uuid,
      fullname: { firstname: action.payload.firstname, lastname: action.payload.lastname }
    });
  }

  return state;
}

export default reducer;
import createLogger from 'logging';
const logger = createLogger('reducer');

import { ActionType } from '../statelib';
import Consts from "./trigger-consts";

const progress = {  
};

function progressReducer(state = progress, action: ActionType) {
  logger.info("reducer: got action:", action, " state:", state);
  
  // if (action.type === Consts.SET_TASK_ID) {
  //   return Object.assign({}, state, {
  //     taskId: action.taskId
  //   });
  // }    

  if (action.type === Consts.SET_USER) {
    return Object.assign({}, state, {
      user: action.userInfo
    });
  }    
  
  return state;
}

export default progressReducer;
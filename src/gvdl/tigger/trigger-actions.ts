
import createLogger from 'logging';
const logger = createLogger('actions');

import { ActionType } from '../statelib';
import Consts from './trigger-consts';

import { UserInfo } from './trigger-userinfo';

export function setTaskId(uuid: string, taskId: string): ActionType {
  logger.info("action(setTaskId): taskId=", taskId);

  return {type: Consts.SET_TASK_ID, uuid, taskId };
}

export function setUserInfo(uuid: string, userInfo: UserInfo): ActionType {
  logger.info("action(setUserInfo): userInfo:", userInfo);

  return {type: Consts.SET_USER, uuid, userInfo };
}




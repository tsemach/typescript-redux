
import Consts from './consts';

export interface ActionType {
  type: string;
  uuid: string;
  [others: string]: any;
}

export interface ActionFunctionType {
  (uuid: string, payload: any): ActionType;
}

export function setUser(uuid: string, name: string): ActionType {
  return {type: Consts.SET_USER, uuid, payload: {name: name}};
}

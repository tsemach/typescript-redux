
import Consts from './consts';

export interface ActionType {
  type: string;
  uuid: string;
  [others: string]: any; 
}

export interface ActionFunctionType {
  (uuid: string, ...payload: any): ActionType;
}

export interface ActionFunctionType2<T> {
  (uuid: string, payload: T): ActionType;
}

export function setUser(uuid: string, name: string): ActionType {
  return {type: Consts.SET_USER, uuid, payload: { name }};
}

export function addUser(uuid: string, fullname: { firstname: string, lastname: string}): ActionType {
  console.log("PPPPPPPPPP PAYLOER:", fullname)
  return {type: Consts.ADD_USER, uuid, payload: fullname};
}

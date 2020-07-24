
import { ActionType } from './action.type'
// export interface ActionType {
//   type: string;
//   uuid: string;
//   [others: string]: any; 
// }

export interface ActionFunctionType {
  (uuid: string, ...payload: any): ActionType;
}

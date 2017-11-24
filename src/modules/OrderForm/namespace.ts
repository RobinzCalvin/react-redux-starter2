import { IFlatFormProperties, ILocationProperties, INormalizedLocation } from 'shared/types/models';
import { ICommunicationState, IAction } from 'shared/types/app';

export interface IReduxState {
  communications: {
    saving: ICommunicationState;
  };
  data: { message: string; } | null;
}

export interface ISaveFieldsRequest {
  dynamicValues: IFlatFormProperties;
  locationValues: ILocationProperties;
  location: INormalizedLocation;
}

export interface ISaveFieldsResponse {
  message: string;
}

export type ISaveFieldsAction = IAction<'ORDER_FORM_MODULE:SAVE_FIELDS', ISaveFieldsRequest>;
export type ISaveFieldsCompletedAction = IAction<'ORDER_FORM_MODULE:SAVE_FIELDS_COMPLETED', ISaveFieldsResponse>;
export type ISaveFieldsFailedAction = IAction<'ORDER_FORM_MODULE:SAVE_FIELDS_FAILED', string>;

export type OrderFormAction =
  | ISaveFieldsAction
  | ISaveFieldsCompletedAction
  | ISaveFieldsFailedAction;

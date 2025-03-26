import { Request, CreateRequest, EditRequest } from "./requestType";

export interface RequestState {
    requests: Request[];
    loading: boolean;
}

export enum RequestActionTypes {
    ADD_REQUEST = 'ADD_REQUEST',
    DELETE_REQUEST = 'DELETE_REQUEST',
    EDIT_REQUEST = 'EDIT_REQUEST',
    SET_IS_LOADING = 'SET_IS_LOADING'
}

export interface AddRequestAction {
    type: RequestActionTypes.ADD_REQUEST;
    payload: CreateRequest;
}

export interface DeleteRequestAction {
    type: RequestActionTypes.DELETE_REQUEST;
    payload: string;
}

export interface EditRequestAction {
    type: RequestActionTypes.EDIT_REQUEST;
    payload: EditRequest;
}

export interface SetIsLoadingAction {
    type: RequestActionTypes.SET_IS_LOADING;
    payload: boolean;
}

export type RequestAction = AddRequestAction | DeleteRequestAction | EditRequestAction | SetIsLoadingAction;

import { AddRequestAction, DeleteRequestAction, EditRequestAction, SetIsLoadingAction, RequestActionTypes } from "./stateTypes";
import { CreateRequest, EditRequest } from "./requestType";

export const addRequest: (formData: CreateRequest) => AddRequestAction = (newRequest) => (
    {type: RequestActionTypes.ADD_REQUEST, payload: newRequest}
);

export const deleteRequest: (id: string) => DeleteRequestAction = (id: string) => (
    {type: RequestActionTypes.DELETE_REQUEST, payload: id}
);

export const editRequest: (formData: EditRequest) => EditRequestAction = (changedRequest: EditRequest) => (
    {type: RequestActionTypes.EDIT_REQUEST, payload: changedRequest}
);

export const setIsLoading: (value: boolean) => SetIsLoadingAction = (value: boolean) => (
    {type: RequestActionTypes.SET_IS_LOADING, payload: value}
);

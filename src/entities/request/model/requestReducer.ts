import { v1 } from "uuid";
import { RequestState, RequestAction, RequestActionTypes } from "./stateTypes";

const initialState: RequestState = {
    requests: [
        {id: '1', title: 'Первая заявка', description: 'Описание заявки 1', createdAt: Date.now() - 1400 * 1000},
        {id: '2', title: 'Вторая заявка', description: 'Описание заявки 2', createdAt: Date.now() - 2400 * 1000},
        {id: '3', title: 'Третья заявка', description: 'Описание заявки 3', createdAt: Date.now() - 4400 * 1000}
    ],
    loading: false,
};

export const requestReducer = (state = initialState, action: RequestAction): RequestState => {
    switch (action.type) {
        case RequestActionTypes.ADD_REQUEST: {
            const newRequest = {
                id: v1(),
                title: action.payload.title,
                description: action.payload.description,
                createdAt: Date.now(),
            };
            return {
                ...state,
                requests: [...state.requests, newRequest],
            };
        }

        case RequestActionTypes.DELETE_REQUEST: 
            return {
                ...state,
                requests: state.requests.filter(r => r.id !== action.payload)
            }

        case RequestActionTypes.EDIT_REQUEST: 
            return {
                ...state, 
                requests: state.requests.map(
                    request => request.id === action.payload.id 
                    ? {...request, title: action.payload.title, description: action.payload.description} 
                    : request
                )
            }

        case RequestActionTypes.SET_IS_LOADING: 
            return {
                ...state,
                loading: action.payload
            }
        
        default: {
            return state;
        }
    }
}

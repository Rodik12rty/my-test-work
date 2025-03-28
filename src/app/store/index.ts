import { combineReducers } from "redux";
import { requestReducer } from "@/entities/request";

export const rootReducers = combineReducers({
    request: requestReducer,
});

export type RootState = ReturnType<typeof rootReducers>;

import { combineReducers } from "redux";
import { requestReducer } from "../../../entities/request/model/requestReducer";

export const rootReducers = combineReducers({
    request: requestReducer,
});

export type RootState = ReturnType<typeof rootReducers>;

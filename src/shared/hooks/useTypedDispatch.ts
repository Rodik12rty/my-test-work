import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { RequestAction } from "../../entities/request/model/stateTypes";

export const useTypedDispatch: () => Dispatch<RequestAction> = () => useDispatch();

import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { RequestAction } from "@/entities/request";

export const useTypedDispatch: () => Dispatch<RequestAction> = () => useDispatch();

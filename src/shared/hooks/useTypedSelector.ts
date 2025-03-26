import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../requests/model";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

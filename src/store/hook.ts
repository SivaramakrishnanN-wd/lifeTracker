import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Typed dispatch (so TS knows all actions)
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Typed selector (so TS knows entire state)
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

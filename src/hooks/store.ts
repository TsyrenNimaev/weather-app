import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '../store/store';

export const useCustomDispatch = () => useDispatch<Dispatch>();
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
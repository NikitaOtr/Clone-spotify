import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { searchReducerAction } from './../store/Reducers/searchReducer';
import { fetch } from './../store/Reducers/searchReducer';

const allActions = {
    fetch,
    ...searchReducerAction,
};

export const useAppActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActions, dispatch);
};

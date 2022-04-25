import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { fetchAll } from './../store/Reducers/searchReducer';
import { fetchCollection, fetchT } from './../store/Reducers/collectionReducer';
import { fetchPlaylist } from './../store/Reducers/playlistReducer';
import { fetchArtist } from '../store/Reducers/artistReducer';
import { fetchMainPage } from '../store/Reducers/mainPageReducer';

import { artistReducerActions } from '../store/Reducers/artistReducer';
import { collectionReducerActions } from './../store/Reducers/collectionReducer';
import { mainPageReducerActions } from '../store/Reducers/mainPageReducer';
import { playerReducerActions } from '../store/Reducers/playerReducer';
import { playlistReducerActions } from './../store/Reducers/playlistReducer';
import { searchReducerActions } from './../store/Reducers/searchReducer';

const allActions = {
    fetchMainPage,
    fetchAll,
    fetchCollection,
    fetchPlaylist,
    fetchArtist,
    fetchT,
    ...artistReducerActions,
    ...collectionReducerActions,
    ...mainPageReducerActions,
    ...playerReducerActions,
    ...playlistReducerActions,
    ...searchReducerActions,
};

export const useAppActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActions, dispatch);
};

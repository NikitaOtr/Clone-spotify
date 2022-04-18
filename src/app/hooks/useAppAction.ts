import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { fetchAll } from './../store/Reducers/searchReducer';
import { fetchCollection, fetchT } from './../store/Reducers/collectionReducer';
import { fetchPlaylist } from './../store/Reducers/playlistReducer';
import { fetchArtist } from '../store/Reducers/artistReducer';

import { playerReducerActions } from '../store/Reducers/playerReducer';

const allActions = {
    fetchAll,
    fetchCollection,
    fetchPlaylist,
    fetchArtist,
    fetchT,
    ...playerReducerActions,
};

export const useAppActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActions, dispatch);
};

import React, { useEffect } from 'react';
import s from './PlaylistPage.module.scss';

import btn from './greenBtn.svg';

import { EnumOfStatusFetching } from '../../../types/apiTypes';

import { useParams } from 'react-router-dom';
import { useAppSelector } from './../../../hooks/useAppSelector';
import { useAppActions } from '../../../hooks/useAppAction';

import { Playlist } from '../../../components/Playlist/Playlist';
import { Error } from '../../../components/Error/Error';
import { Loader } from '../../../components/Loader/Loader';
import { EnumOfPlaylistTypes } from '../../../types/commonTypes';

export const PlaylistPage = () => {
    const playlist = useAppSelector(state => state.playlistReducer.playlist);
    const status = useAppSelector(state => state.playlistReducer.status);

    const { fetchPlaylist } = useAppActions();

    const history = useParams<{type: EnumOfPlaylistTypes, id: string}>();

    useEffect(() => {
        window.scrollTo(0, 0);
        if (history.type && history.id) {
            fetchPlaylist({ id: history.id, type: history.type });
        }
    }, [history]);

    if (status === EnumOfStatusFetching.Error) {
        return <Error/>;
    }

    if (status === EnumOfStatusFetching.Loading || !playlist) {
        return <Loader/>;
    }

    return (
        <div>
            <div className={s.playListTitle}>
                <div className={s.playListTitle__boxImg}>
                    <img className={s.playListTitle__boxImg__img} src={playlist.images[0].url} alt=""/>
                </div>
                <div className={s.playListTitle__boxText}>
                    <h1 className={s.playListTitle__boxText__name}>{playlist.name}</h1>
                </div>
            </div>

            <div className={s.playListBtnPlay}>
                <button className={s.playListBtnPlay__btn}>
                    <img className={s.playListBtnPlay__btn__img} src={btn} alt=""/>
                </button>
            </div>

            <Playlist tracks={playlist.tracks}/>
        </div>
    );
};
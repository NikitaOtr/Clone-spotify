import React, { useEffect } from 'react';
import s from './PlaylistPage.module.scss';

import { useParams } from 'react-router-dom';
import { useAppSelector } from './../../../hooks/useAppSelector';
import { useAppActions } from '../../../hooks/useAppAction';

import { EnumOfStatusFetching } from '../../../types/apiTypes';
import { EnumOfPlaylistTypes } from '../../../types/commonTypes';

import { Playlist } from '../../../components/Playlist/Playlist';
import { Error } from '../../../components/Error/Error';
import { Loader } from '../../../components/Loader/Loader';

import btn from './img/greenBtn.svg';

export const PlaylistPage = () => {
    const history = useParams<{ type: EnumOfPlaylistTypes, id: string }>();
    const playlist = useAppSelector(state => state.playlistReducer.playlist);
    const status = useAppSelector(state => state.playlistReducer.status);

    const { fetchPlaylist, setStatusPlaylist } = useAppActions();

    useEffect(() => {
        window.scrollTo(0, 0);
        if (history.type && history.id) {
            fetchPlaylist({ id: history.id, type: history.type });
        } else {
            setStatusPlaylist(EnumOfStatusFetching.Error);
        }
        return () => {
            setStatusPlaylist(EnumOfStatusFetching.Loading);
        };
    }, [history]);

    if (status === EnumOfStatusFetching.Loading) {
        return <Loader/>;
    }

    if (status === EnumOfStatusFetching.Error
        || !playlist) {
        return <Error/>;
    }

    return (
        <div>
            <div className={s.playlistTitle}>
                <div className={s.boxImg}>
                    <div className={s.boxImg__container}>
                        <img className={s.boxImg__container__img} src={playlist.images[0].url}/>
                    </div>
                </div>
                <div className={s.playlistTitle__boxText}>
                    <h1 className={s.playlistTitle__boxText__text}>{playlist.name}</h1>
                </div>
            </div>

            <div className={s.playlistBtnPlay}>
                <button className={s.playlistBtnPlay__btn}>
                    <img className={s.playlistBtnPlay__btn__img} src={btn}/>
                </button>
            </div>

            <Playlist tracks={playlist.tracks}/>
        </div>
    );
};
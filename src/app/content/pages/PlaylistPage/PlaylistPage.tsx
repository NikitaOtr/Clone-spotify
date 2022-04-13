import React, { useEffect } from 'react';
import s from './PlaylistPage.module.scss';

import heart from './../../aside/img/heart.svg';
import btn from './greenBtn.svg';

import { fetchAlbum } from '../../../store/Reducers/playlistReducer';

import { Playlist } from '../../../components/Playlist/Playlist';
import { useAppSelector } from './../../../hooks/useAppSelector';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchPlayList } from '../../../store/Reducers/playlistReducer';

export const PlaylistPage = () => {

    const dispatch = useDispatch();

    const history = useParams<{type: string, id: string}>();

    useEffect(() => {
        if (history.type === 'album' && history.id) {
            console.log('new');
            dispatch(fetchAlbum(history.id));
        } else if (history.type === 'playlist' && history.id) {
            dispatch(fetchPlayList(history.id));
        }
    }, []);

    const album = useAppSelector(state => state.playListReducer.album);
    const status = useAppSelector(state => state.playListReducer.status);
    console.log(album);
    if (!album) {
        return <div>null</div>;
    }
    return (
        <>
            <div className={s.playListTitle}>
                <div className={s.playListTitle__boxImg}>
                    <img className={s.playListTitle__boxImg__img} src={album.images[0].url} alt=""/>
                </div>
                <div className={s.playListTitle__boxText}>
                    <h1 className={s.playListTitle__boxText__name}>{album.name}</h1>
                </div>
            </div>

            <div className={s.playListBtnPlay}>
                <button className={s.playListBtnPlay__btn}>
                    <img className={s.playListBtnPlay__btn__img} src={btn} alt=""/>
                </button>
            </div>

            <Playlist tracks={album.tracks.items}/>
        </>
    );
};
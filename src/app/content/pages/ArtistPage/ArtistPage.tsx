import React, { useEffect } from 'react';
import s from './ArtistPage.module.scss';

import { useAppActions } from '../../../hooks/useAppAction';
import { useAppSelector } from '../../../hooks/useAppSelector';

import { Error } from '../../../components/Error/Error';
import { Playlist } from './../../../components/Playlist/Playlist';
import { StatusEnum } from '../../../api/api';
import { Loader } from '../../../components/Loader/Loader';
import { useParams } from 'react-router-dom';
import { Recommendation } from './../../../components/Recommendation/Recommendation';
import { EnumSearchType } from '../../../types/typeSearch';

export const ArtistPage = () => {
    const status = useAppSelector(state => state.artistReducer.status);
    const artist = useAppSelector(state => state.artistReducer.artist);
    const relatedArtists = useAppSelector(state => state.artistReducer.relatedArtists);
    const albums = useAppSelector(state => state.artistReducer.albums);
    const tracks = useAppSelector(state => state.artistReducer.tracks);

    const { fetchArtist } = useAppActions();

    const history = useParams<{id: string}>();

    useEffect(() => {
        window.scrollTo(0, 0);
        if (history.id) {
            fetchArtist(history.id);
        }
    }, [history]);

    if (status === StatusEnum.Error) {
        return <Error/>;
    }

    if (status === StatusEnum.Loading || !artist) {
        return <Loader/>;
    }

    return (
        <div>
            <div className={s.playListTitle}>
                <div className={s.playListTitle__boxImg}>
                    <img className={s.playListTitle__boxImg__img} src={artist.images[0].url} alt=""/>
                </div>
                <div className={s.playListTitle__boxText}>
                    <h1 className={s.playListTitle__boxText__name}>{artist.name}</h1>
                </div>
            </div>

            <Recommendation releases={relatedArtists} title='Похожие исполнители'
                searchType={EnumSearchType.artist} id={artist.id}/>

            <Recommendation releases={albums} title='Альбомы'
                searchType={EnumSearchType.album} id={artist.id}/>

            <Playlist tracks={tracks}/>
        </div>
    );
};
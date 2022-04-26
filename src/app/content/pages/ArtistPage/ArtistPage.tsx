import React, { useEffect } from 'react';
import s from './ArtistPage.module.scss';

import question from './../../../img/question.svg';

import { useAppActions } from '../../../hooks/useAppAction';
import { useAppSelector } from '../../../hooks/useAppSelector';

import { Error } from '../../../components/Error/Error';
import { Playlist } from './../../../components/Playlist/Playlist';
import { EnumOfStatusFetching } from '../../../types/apiTypes';
import { Loader } from '../../../components/Loader/Loader';
import { useParams } from 'react-router-dom';
import { Recommendation } from './../../../components/Recommendation/Recommendation';

export const ArtistPage = () => {
    const status = useAppSelector(state => state.artistReducer.status);
    const artist = useAppSelector(state => state.artistReducer.artist);
    const relatedArtists = useAppSelector(state => state.artistReducer.relatedArtists);
    const albums = useAppSelector(state => state.artistReducer.albums);
    const tracks = useAppSelector(state => state.artistReducer.tracks);

    const { fetchArtist, setStatusArtistPage } = useAppActions();

    const history = useParams<{id: string}>();

    useEffect(() => {
        window.scrollTo(0, 0);
        if (history.id) {
            fetchArtist({ id: history.id });
        }
        return () => {
            setStatusArtistPage(EnumOfStatusFetching.Loading);
        };
    }, []);

    if (status === EnumOfStatusFetching.Error) {
        return <Error/>;
    }

    if (status === EnumOfStatusFetching.Loading || !relatedArtists || !artist || !albums || !tracks) {
        return <Loader/>;
    }

    return (
        <div>
            <div className={s.playListTitle}>
                <div className={s.playListTitle__boxImg}>
                    <img className={s.playListTitle__boxImg__img} src={artist.images[0]?.url || question } alt=""/>
                </div>
                <div className={s.playListTitle__boxText}>
                    <h1 className={s.playListTitle__boxText__name}>{artist.name}</h1>
                </div>
            </div>

            {relatedArtists.items.length
                ? <Recommendation releases={relatedArtists} title='Похожие исполнители'/>
                : null
            }

            {albums.items.length
                ? <Recommendation releases={albums} title='Альбомы'/>
                : null
            }

            {tracks.items.length
                ? <Playlist tracks={tracks}/>
                : null
            }
        </div>
    );
};
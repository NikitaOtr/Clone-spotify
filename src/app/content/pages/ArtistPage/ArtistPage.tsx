import React, { useEffect } from 'react';
import s from './ArtistPage.module.scss';

import { useParams } from 'react-router-dom';
import { useAppActions } from '../../../hooks/useAppAction';
import { useAppSelector } from '../../../hooks/useAppSelector';

import { EnumOfStatusFetching } from '../../../types/apiTypes';

import { Recommendation } from './../../../components/Recommendation/Recommendation';
import { Playlist } from './../../../components/Playlist/Playlist';
import { Loader } from '../../../components/Loader/Loader';
import { Error } from '../../../components/Error/Error';

import question from './../../../img/question.svg';

export const ArtistPage = () => {
    const history = useParams<{ id: string }>();
    const status = useAppSelector(state => state.artistReducer.status);
    const artist = useAppSelector(state => state.artistReducer.artist);
    const relatedArtists = useAppSelector(state => state.artistReducer.relatedArtists);
    const albums = useAppSelector(state => state.artistReducer.albums);
    const tracks = useAppSelector(state => state.artistReducer.tracks);

    const { fetchArtist, setStatusArtistPage } = useAppActions();

    useEffect(() => {
        window.scrollTo(0, 0);
        if (history.id) {
            fetchArtist({ id: history.id });
        } else {
            setStatusArtistPage(EnumOfStatusFetching.Error);
        }
        return () => {
            setStatusArtistPage(EnumOfStatusFetching.Loading);
        };
    }, [history]);

    if (status === EnumOfStatusFetching.Loading) {
        return <Loader/>;
    }

    if (status === EnumOfStatusFetching.Error ||
        !artist || !(relatedArtists || albums || tracks)) {
        return <Error/>;
    }

    return (
        <div>
            <div className={s.artistTitle}>
                <div className={s.boxImg}>
                    <div className={s.boxImg__container}>
                        <img className={s.boxImg__container__img} src={artist.images[0]?.url || question } alt=""/>
                    </div>
                </div>
                <div className={s.artistTitle__boxText}>
                    <h1 className={s.artistTitle__boxText__name}>{artist.name}</h1>
                </div>
            </div>

            {relatedArtists && relatedArtists.items.length
                ? <Recommendation releases={relatedArtists} title='Похожие исполнители'/>
                : null
            }

            {albums && albums.items.length
                ? <Recommendation releases={albums} title='Альбомы'/>
                : null
            }

            {tracks && tracks.items.length
                ? <Playlist tracks={tracks}/>
                : null
            }
        </div>
    );
};
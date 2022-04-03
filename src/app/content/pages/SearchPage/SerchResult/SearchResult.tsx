import React from 'react';

import { useAppSelector } from '../../../../hooks/useAppSelector';

import { StatusEnum } from '../../../../api/api';

import { Recommendation } from '../../../../components/Recommendation/Recommendation';
import { Playlist } from '../../../../components/Playlist/Playlist';
import { Loader } from '../../../../components/Loader/Loader';
import { Error } from '../../../../components/Error/Error';

export const SearchResult = () => {

    const { albums, artists, playlists, tracks, status } = useAppSelector(state => state.searchReducer);

    if (status === StatusEnum.Error) {
        return <Error />;
    }

    if (status === StatusEnum.Loading) {
        return <Loader />;
    }

    return (
        <section>
            { artists.length ? <Recommendation name={'Артисты'} href={'ad'} releases={artists} /> : null }
            { albums.length ? <Recommendation name={'Альбомы'} href={'ad'} releases={albums} /> : null }
            { playlists.length ? <Recommendation name={'Плейлисты'} href={'ad'} releases={playlists} /> : null }
            { tracks.length ? <Playlist tracks={tracks} /> : null }
        </section>
    );
};
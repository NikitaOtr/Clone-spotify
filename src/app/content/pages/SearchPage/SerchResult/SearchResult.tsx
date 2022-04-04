import React from 'react';

import { useAppSelector } from '../../../../hooks/useAppSelector';

import { StatusEnum } from '../../../../api/api';

import { Recommendation } from '../../../../components/Recommendation/Recommendation';
import { Playlist } from '../../../../components/Playlist/Playlist';
import { Loader } from '../../../../components/Loader/Loader';
import { Error } from '../../../../components/Error/Error';

export const SearchResult = () => {

    const { albums, artists, playlists, tracks, status, searchText } = useAppSelector(state => state.searchReducer);

    if (status === StatusEnum.Error) {
        return <Error />;
    }

    if (status === StatusEnum.Loading) {
        return <Loader />;
    }

    return (
        <section>
            {/* {artists.items.length ? <Recommendation name={'Артисты'}
                href={artists.href} releases={artists.items} /> : null } */}
            { albums.items.length ? <Recommendation name={'Альбомы'} q={searchText}
                href={albums.href} releases={albums.items} /> : null }
            {/* { playlists.items.length ? <Recommendation name={'Плейлисты'}
                href={playlists.href} releases={playlists.items} /> : null }
            { tracks.items.length ? <Playlist tracks={tracks.items} /> : null } */}
        </section>
    );
};
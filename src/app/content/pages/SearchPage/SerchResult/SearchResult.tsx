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
            { artists.items.length ? <Recommendation releases={artists} searchText={searchText}/> : null }
            { albums.items.length ? <Recommendation releases={albums} searchText={searchText}/> : null }
            { playlists.items.length ? <Recommendation releases={playlists} searchText={searchText}/> : null }
            { tracks.items.length ? <Playlist tracks={tracks.items}/> : null }
        </section>
    );
};
import React from 'react';

import { useAppSelector } from '../../../../hooks/useAppSelector';

import { EnumOfStatusFetching } from '../../../../types/apiTypes';

import { Recommendation } from '../../../../components/Recommendation/Recommendation';
import { Playlist } from '../../../../components/Playlist/Playlist';
import { Loader } from '../../../../components/Loader/Loader';
import { Error } from '../../../../components/Error/Error';

export const SearchResult = () => {
    const status = useAppSelector(state => state.searchReducer.status);
    const artists = useAppSelector(state => state.searchReducer.artists);
    const albums = useAppSelector(state => state.searchReducer.albums);
    const playlists = useAppSelector(state => state.searchReducer.playlists);
    const tracks = useAppSelector(state => state.searchReducer.tracks);

    if (status === EnumOfStatusFetching.Error) {
        return <Error/>;
    }

    if (status === EnumOfStatusFetching.Loading || !artists || !albums || !playlists || !tracks) {
        return <Loader/>;
    }

    if (!artists.items.length && !albums.items.length && !playlists.items.length && !tracks.items.length) {
        return <div>Увы, по вашему запросу ничего не найдено</div>;
    }

    return (
        <section>
            { artists.items.length
                ? <Recommendation title='Исполнители' releases={artists}/>
                : null
            }

            { albums.items.length
                ? <Recommendation title='Альбомы'  releases={albums}/>
                : null
            }

            { playlists.items.length
                ? <Recommendation title='Плейлисты' releases={playlists}/>
                : null
            }

            { tracks.items.length
                ? <Playlist tracks={tracks}/>
                : null
            }
        </section>
    );
};
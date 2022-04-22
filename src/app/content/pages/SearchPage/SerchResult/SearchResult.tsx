import React from 'react';

import { useAppSelector } from '../../../../hooks/useAppSelector';

import { StatusEnum } from '../../../../api/api';

import { Recommendation } from '../../../../components/Recommendation/Recommendation';
import { Playlist } from '../../../../components/Playlist/Playlist';
import { Loader } from '../../../../components/Loader/Loader';
import { Error } from '../../../../components/Error/Error';
import { EnumSearchType } from '../../../../types/typeSearch';

export const SearchResult = () => {
    const searchText = useAppSelector(state => state.searchReducer.searchText);
    const status = useAppSelector(state => state.searchReducer.status);
    const artists = useAppSelector(state => state.searchReducer.artists);
    const albums = useAppSelector(state => state.searchReducer.albums);
    const playlists = useAppSelector(state => state.searchReducer.playlists);
    const tracks = useAppSelector(state => state.searchReducer.tracks);

    if (status === StatusEnum.Error) {
        return <Error/>;
    }

    if (status === StatusEnum.Loading) {
        return <Loader/>;
    }

    if (!artists.length && !albums.length && !playlists.length && !tracks.length) {
        return <div>Увы, по вашему запросу ничего не найдено</div>;
    }

    return (
        <section>
            { artists.length
                ? <Recommendation title='Исполнители' searchType={EnumSearchType.artist} releases={artists}
                    searchText={searchText}/>
                : null
            }

            { albums.length
                ? <Recommendation title='Альбомы' searchType={EnumSearchType.album} releases={albums}
                    searchText={searchText}/>
                : null
            }

            { playlists.length
                ? <Recommendation title='Плейлисты' searchType={EnumSearchType.playlist} releases={playlists}
                    searchText={searchText}/>
                : null
            }

            { tracks.length
                ? <Playlist tracks={tracks}/>
                : null
            }
        </section>
    );
};
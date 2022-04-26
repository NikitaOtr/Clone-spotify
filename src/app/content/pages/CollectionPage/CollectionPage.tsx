import React, { useEffect } from 'react';
import s from './CollectionPage.module.scss';

import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppActions } from '../../../hooks/useAppAction';

import { EnumOfStatusFetching } from '../../../types/apiTypes';

import { ContainerWrap } from '../../../components/ContainerWrap/ContainerWrap';
import { Release } from '../../../components/Release/Release';
import { Loader } from '../../../components/Loader/Loader';
import { Error } from '../../../components/Error/Error';
import { EnumOfSearchTypes } from '../../../types/commonTypes';

export const CollectionReleasesPage = () => {
    const status = useAppSelector(state => state.collectionReducer.status);
    const collection = useAppSelector(state => state.collectionReducer.collection);

    const { fetchArtistCollection, fetchSearchCollection, setStatusCollection } = useAppActions();
    const history = useParams<{type: EnumOfSearchTypes, searchText: string, id: string}>();

    const TranslateSearchType = {
        'albums': 'Альбомы',
        'artists': 'Артисты',
        'playlists': 'Плейлисты',
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        if (history.type && history.searchText) {
            fetchSearchCollection({ searchText: history.searchText, type: history.type });
        } else if (history.id && history.type) {
            fetchArtistCollection({ id: history.id, type: history.type });
        }
        return () => {
            setStatusCollection(EnumOfStatusFetching.Loading);
        };
    }, []);

    if (status === EnumOfStatusFetching.Loading) {
        return <Loader/>;
    }

    if (status === EnumOfStatusFetching.Error || !collection) {
        return <Error/>;
    }

    return (
        <div>
            {history.type
                && <h1 className={s.headline}>{`${TranslateSearchType[history.type]}`}</h1>
            }
            <ContainerWrap>
                {collection.items.map(item => <Release key={item.id} item={item}/>)}
            </ContainerWrap>
        </div>
    );
};
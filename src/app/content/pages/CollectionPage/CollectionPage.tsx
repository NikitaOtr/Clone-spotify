import React, { useEffect } from 'react';
import s from './CollectionPage.module.scss';

import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppActions } from '../../../hooks/useAppAction';

import { StatusEnum } from '../../../api/api';

import { ContainerWrap } from '../../../components/ContainerWrap/ContainerWrap';
import { Release } from '../../../components/Release/Release';
import { Loader } from '../../../components/Loader/Loader';
import { Error } from '../../../components/Error/Error';
import { EnumSearchType } from '../../../types/typeSearch';

export const CollectionReleasesPage = () => {
    const status = useAppSelector(state => state.collectionReducer.status);
    const collection = useAppSelector(state => state.collectionReducer.collection);

    const { fetchCollection, fetchT } = useAppActions();
    const history = useParams<{type: EnumSearchType, searchText: string, id: string}>();

    const TranslateSearchType = {
        'album': 'Альбомы',
        'artist': 'Артисты',
        'playlist': 'Плейлисты'
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        console.log(history);
        if (history.type && history.searchText) {
            fetchCollection({ searchText: history.searchText, type: history.type });
        } else if (history.id && history.type) {
            fetchT({ id: history.id, type: history.type });
        }
    }, []);

    if (status === StatusEnum.Loading) {
        return <Loader/>;
    }

    if (status === StatusEnum.Error) {
        return <Error/>;
    }

    return (
        <div>
            {history.type && history.searchText
                && <h1 className={s.headline}>
                    {`${TranslateSearchType[history.type]} по запросу: ${history.searchText}`}
                </h1>
            }
            <ContainerWrap>
                {collection.map(item => <Release key={item.id} item={item}/>)}
            </ContainerWrap>
        </div>
    );
};
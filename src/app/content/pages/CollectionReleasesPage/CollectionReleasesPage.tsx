import React, { useEffect } from 'react';
import { ContainerWrap } from '../../../components/ContainerWrap/ContainerWrap';
import s from './CollectionReleasesPage.module.scss';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import { fetchCollection } from '../../../store/Reducers/collectionReducer';

import { Release } from '../../../components/Release/Release';
import { useAppSelector } from './../../../hooks/useAppSelector';
import { IHistory } from './../../../types/typeSearch';
import { StatusEnum } from '../../../api/api';

import { Loader } from '../../../components/Loader/Loader';
import { Error } from '../../../components/Error/Error';

export const CollectionReleasesPage = () => {

    const dispatch = useDispatch();

    const { collection, status } = useAppSelector(state => state.collectionReducer);

    const history = useParams<IHistory>();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(fetchCollection(history as IHistory));
    }, []);

    if (status === StatusEnum.Loading) {
        return <Loader/>;
    }

    if (status === StatusEnum.Error) {
        return <Error/>;
    }

    return (
        <>
            <h1 className={s.headline}>Конкретный раздел</h1>
            <ContainerWrap>
                {collection.map(item =>
                    <Release key={item.id} item={item}/>)}
            </ContainerWrap>
        </>
    );
};
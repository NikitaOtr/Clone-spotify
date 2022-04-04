import React, { useEffect } from 'react';
import { ContainerWrap } from '../../../components/ContainerWrap/ContainerWrap';
import s from './CollectionReleasesPage.module.scss';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import { fetchCollection } from '../../../store/Reducers/CollectionReducer';

import { Release } from '../../../components/Release/Release';
import { useAppSelector } from './../../../hooks/useAppSelector';

export const CollectionReleasesPage = () => {

    const dispatch = useDispatch();

    const collection = useAppSelector(state => state.collectionReducer.collection);

    const history = useParams<{type: string, q: string}>();

    useEffect(() => {
        console.log(history.type, history.q);
        dispatch(fetchCollection(history as { type: string, q: string }));
    }, []);

    console.log(collection);
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
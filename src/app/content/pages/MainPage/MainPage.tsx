import React, { useEffect } from 'react';
import s from './MainPage.module.scss';
import { Mixes } from './Mixes/Mixes';

import { Recommendation } from '../../../components/Recommendation/Recommendation';
import { Loader } from '../../../components/Loader/Loader';
import { Error } from '../../../components/Error/Error';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { EnumOfStatusFetching } from '../../../types/apiTypes';
import { useAppActions } from '../../../hooks/useAppAction';

export const MainPage = () => {
    const status = useAppSelector(state => state.mainPageReducer.status);
    const mixes = useAppSelector(state => state.mainPageReducer.mixes);
    const collectionOfPlaylists = useAppSelector(state => state.mainPageReducer.collectionOfPlaylists);

    const { fetchMainPage, setStatusMainPage } = useAppActions();

    useEffect(() => {
        fetchMainPage();
        return () => {
            setStatusMainPage(EnumOfStatusFetching.Loading);
        };
    }, []);

    if (status === EnumOfStatusFetching.Loading) {
        return <Loader />;
    }

    if (status === EnumOfStatusFetching.Error ||
        !(mixes || collectionOfPlaylists.length)) {
        return <Error/>;
    }

    return (
        <div>
            <h1 className={s.headline}>Добрый день</h1>
            {mixes && <Mixes mixes={mixes}/>}
            {collectionOfPlaylists.map(playlist => (
                <Recommendation releases={playlist} title='Рекомендации для вас' key={playlist.id}/>
            ))}
        </div>
    );
};
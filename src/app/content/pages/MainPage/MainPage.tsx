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

    const { fetchMainPage } = useAppActions();

    useEffect(() => {
        fetchMainPage();
    }, []);

    if (status === EnumOfStatusFetching.Error) {
        return <Error/>;
    }

    if (status === EnumOfStatusFetching.Loading || !mixes) {
        return <Loader/>;
    }

    return (
        <div>
            <h1 className={s.headline}>Добрый день</h1>
            <Mixes mixes={mixes}/>
            {collectionOfPlaylists.map(playlist => (
                <Recommendation id={playlist.id}
                    releases={playlist} title='Рекомендации для вас' key={playlist.id}/>
            ))}
        </div>
    );
};
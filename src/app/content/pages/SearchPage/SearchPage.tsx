import React, { useState } from 'react';
import { Recommendation } from '../../../components/Recommendation/Recommendation';
import { Song } from '../../../components/Song/Song';
import { fetch } from '../../../store/Reducers/searchReducer';

import s from './SearchPage.module.scss';
import img from './../../aside/img/heart.svg';
import { useDispatch } from 'react-redux';
import { useAppSelector } from './../../../hooks/useAppSelector';
import { Loader } from './../../../components/Loader/Loader';
import { Error } from '../../../components/Error/Error';
import { useAppActions } from './../../../hooks/useAppAction';
import { StatusEnum } from '../../../api/api';

export const SearchPage = () => {
    console.log('searchPage');
    const [text, setText] = useState('');

    const { albums, artists, playlists, tracks, status } = useAppSelector(state => state.searchReducer);
    const dispatch = useDispatch();

    if (status === StatusEnum.Error) {
        return <Error/>;
    }

    if (status === StatusEnum.Loading) {
        return <Loader/>;
    }
    return (
        <>
            <section>
                <input className={s.searchInput} value={text}
                    onChange={e => setText(e.target.value)} type="text" placeholder="Исполнитель, трек или подкаст"/>
                <button onClick={() => dispatch(fetch(text))}>search</button>
            </section>

            <Recommendation releases={artists}/>
            <Recommendation releases={albums}/>
            <Recommendation releases={playlists}/>
            <Recommendation releases={tracks}/>
        </>
    );
};
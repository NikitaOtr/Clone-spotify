import React, { useState } from 'react';
import s from './SearchForm.module.scss';
import { useAppActions } from '../../../../hooks/useAppAction';
import { useAppSelector } from './../../../../hooks/useAppSelector';

export const SearchForm = () => {
    const globalSearchText = useAppSelector(state => state.searchReducer.searchText);
    const [searchText, setSearchText] = useState(globalSearchText);
    const { fetch } = useAppActions();
    return (
        <section>
            <input className={s.searchInput} value={searchText} type='text'
                onChange={e => setSearchText(e.target.value)} placeholder='Исполнитель, трек или плейлист'/>
            <button onClick={() => fetch(searchText)}>search</button>
        </section>
    );
};
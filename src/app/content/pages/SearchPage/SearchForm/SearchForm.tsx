import React, { useState } from 'react';
import s from './SearchForm.module.scss';
import { useAppActions } from '../../../../hooks/useAppAction';

export const SearchForm = () => {
    const [searchText, setSearchText] = useState('');
    const { fetch } = useAppActions();
    return (
        <section>
            <input className={s.searchInput} value={searchText} type='text'
                onChange={e => setSearchText(e.target.value)} placeholder='Исполнитель, трек или плейлист'/>
            <button onClick={() => fetch(searchText)}>search</button>
        </section>
    );
};
import React, { FormEvent } from 'react';
import s from './SearchForm.module.scss';

import { useAppActions } from '../../../../hooks/useAppAction';
import { useAppSelector } from './../../../../hooks/useAppSelector';
import { useInput } from '../../../../hooks/useInput';

export const SearchForm = () => {
    const globalSearchText = useAppSelector(state => state.searchReducer.searchText);
    const [searchText, bind] = useInput(globalSearchText);
    const { fetchAll } = useAppActions();
    const Submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchAll(searchText);
    };
    return (
        <section>
            <form className={s.searchForm} onSubmit={Submit}>
                <input className={s.searchInput} {...bind} type='text' placeholder='Исполнитель, трек или плейлист'/>
                <button className={s.searchButton}>Поиск</button>
            </form>
        </section>
    );
};
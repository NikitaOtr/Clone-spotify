import React, { useEffect, FormEvent } from 'react';
import s from './SearchForm.module.scss';

import { EnumOfStatusFetching } from '../../../../types/apiTypes';
import { useAppActions } from '../../../../hooks/useAppAction';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useInput } from '../../../../hooks/useInput';

export const SearchForm = () => {
    const searchText = useAppSelector(state => state.searchReducer.searchText);
    const { setSearchText, fetchAll, setStatusSearchPage } = useAppActions();

    const [inputValue, bind] = useInput(searchText);

    const Submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearchText(inputValue);
    };

    useEffect(() => {
        fetchAll({ searchText });
        return () => {
            setStatusSearchPage(EnumOfStatusFetching.Loading);
        };
    }, [searchText]);

    return (
        <section>
            <form className={s.searchForm} onSubmit={Submit}>
                <input className={s.searchInput} {...bind} type='text' placeholder='Исполнитель, трек или плейлист'/>
                <button className={s.searchButton}>Поиск</button>
            </form>
        </section>
    );
};
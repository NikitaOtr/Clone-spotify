import React, { useEffect, FormEvent } from 'react';
import s from './SearchForm.module.scss';

import  { useSearchParams } from 'react-router-dom';
import { useAppActions } from '../../../../hooks/useAppAction';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useInput } from '../../../../hooks/useInput';

export const SearchForm = () => {
    const searchText = useAppSelector(state => state.searchReducer.searchText);
    const { setSearchText, fetchAll } = useAppActions();

    const [searchParams, setSearchParams] = useSearchParams();
    const urlSearchText = searchParams.get('searchText');

    const [inputValue, bind, setInputValue] = useInput(searchText);

    const Submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearchText({ searchText: inputValue });
    };

    useEffect(() => {
        if (urlSearchText) {
            setSearchText({ searchText: urlSearchText });
            setInputValue(urlSearchText);
        }
    }, []);

    useEffect(() => {
        fetchAll(searchText);
        setSearchParams({ searchText });
    }, [searchText]);

    return (
        <section>
            <form className={s.searchForm} onSubmit={Submit}>
                <input className={s.searchInput} {...bind} type='text'
                    placeholder='Исполнитель, трек или плейлист'/>
                <button className={s.searchButton}>Поиск</button>
            </form>
        </section>
    );
};
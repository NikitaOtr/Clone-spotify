import React from 'react';

import { SearchForm } from './SearchForm/SearchForm';
import { SearchResult } from './SerchResult/SearchResult';

export const SearchPage = () => {
    console.log('searchPage');
    return (
        <>
            <SearchForm/>
            <SearchResult/>
        </>
    );
};
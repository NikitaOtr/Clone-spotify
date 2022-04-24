import React from 'react';

import { SearchForm } from './SearchForm/SearchForm';
import { SearchResult } from './SearchResult/SearchResult';

export const SearchPage = () => {
    return (
        <div>
            <SearchForm/>
            <SearchResult/>
        </div>
    );
};
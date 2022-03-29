import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import { Aside } from './content/aside/Aside';
import { Footer } from './content/footer/Footer';
import { Header } from './content/header/Header';

import { MainPage } from './content/pages/MainPage/MainPage';
import { SearchPage } from './content/pages/SearchPage/SearchPage';
import { CollectionReleasesPage } from './content/pages/CollectionReleasesPage/CollectionReleasesPage';
import { PlaylistPage } from './content/pages/PlaylistPage/PlaylistPage';
import { NotFoundPage } from './content/pages/NotFoundPage/NotFoundPage';

export const App = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <Aside/>
            <main className='main'>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/Search' element={<SearchPage/>}/>
                    <Route path='/Playlist' element={<PlaylistPage/>}/>
                    <Route path='/CollectionItems' element={<CollectionReleasesPage/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
};
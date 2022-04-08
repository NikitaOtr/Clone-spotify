import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import { tokenInstance, userToken } from './api/tokenInstance';

import { Aside } from './content/aside/Aside';
import { Footer } from './content/footer/Footer';
import { Header } from './content/header/Header';

import { MainPage } from './content/pages/MainPage/MainPage';
import { SearchPage } from './content/pages/SearchPage/SearchPage';
import { CollectionReleasesPage } from './content/pages/CollectionReleasesPage/CollectionReleasesPage';
import { PlaylistPage } from './content/pages/PlaylistPage/PlaylistPage';
import { NotFoundPage } from './content/pages/NotFoundPage/NotFoundPage';

export const App = () => {

    useEffect(() => {
        tokenInstance.getToken();
        const hash = window.location.search;
        console.log('hash', hash);
        if (hash) {
            userToken.code = hash.split(/[?#&]/).find(elem => elem.startsWith('code='))?.slice(5) || null;
            userToken && userToken.getToken();
        }
    }, []);

    return (
        <div className='wrapper'>
            <Header/>
            <Aside/>
            <main className='main'>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/Search' element={<SearchPage/>}/>
                    <Route path='/Playlist/:type/:id' element={<PlaylistPage/>}/>
                    <Route path='/CollectionItems/:type/:searchText' element={<CollectionReleasesPage/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
};
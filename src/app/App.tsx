import React, { useEffect } from 'react';
import './App.scss';

import { Routes, Route } from 'react-router-dom';

import { tokenInstance, userToken } from './api/tokenInstance';

import { Aside } from './content/Aside/Aside';
import { Footer } from './content/Footer/Footer';
import { Header } from './content/Header/Header';

import { MainPage } from './content/pages/MainPage/MainPage';
import { SearchPage } from './content/pages/SearchPage/SearchPage';
import { CollectionReleasesPage } from './content/pages/CollectionPage/CollectionPage';
import { PlaylistPage } from './content/pages/PlaylistPage/PlaylistPage';
import { NotFoundPage } from './content/pages/NotFoundPage/NotFoundPage';
import { ArtistPage } from './content/pages/ArtistPage/ArtistPage';

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
                    <Route path='/'>
                        <Route index element={<MainPage/>}/>

                        <Route path='search/'>
                            <Route index element={<SearchPage/>}/>
                            <Route path='collection/:type/:searchText' element={<CollectionReleasesPage />} />
                        </Route>

                        <Route path='artist/'>
                            <Route path=':id' element={<ArtistPage/>}/>
                            <Route path='collection/:type/:id' element={<CollectionReleasesPage />} />
                        </Route>

                        <Route path='playlist/:type/:id' element={<PlaylistPage />} />
                        <Route path='*' element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
};
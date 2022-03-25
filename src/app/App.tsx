import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import { Aside } from './content/aside/Aside';
import { Footer } from './content/footer/Footer';
import { Header } from './content/header/Header';

import { Main } from './content/pages/Main/Main';
import { Search } from './content/pages/Search/Search';
import { CollectionItems } from './content/pages/CollectionItems/CollectionItems';
import { Playlist } from './content/pages/Playlist/Playlist';
import { NotFound } from './content/pages/NotFound/NotFound';

export const App = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <Aside/>
            <main className='main'>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/Search' element={<Search/>}/>
                    <Route path='/Playlist' element={<Playlist/>}/>
                    <Route path='/CollectionItems' element={<CollectionItems/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
};
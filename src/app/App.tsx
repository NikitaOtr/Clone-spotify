import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import { Aside } from './content/aside/Aside';
import { Footer } from './content/footer/Footer';
import { Header } from './content/header/Header';

import { Home } from './content/pages/Home/Home';
import { Search } from './content/pages/Search/Search';
import { CollectionItems } from './content/pages/CollectionItems/CollectionItems';
import { Playlist } from './content/pages/Playlist/Playlist';
import { NotFound } from './content/pages/NotFound/NotFound';

export const App = () => {
    return (
        <>
            <Header/>
            <div className='wrapper'>
                <Aside/>
                <div className='main'>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/Search' element={<Search/>}/>
                        <Route path='/Playlist' element={<Playlist/>}/>
                        <Route path='/CollectionItems' element={<CollectionItems/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
            <Footer/>
        </>
    );
};
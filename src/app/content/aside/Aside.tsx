import React from 'react';
import s from './Aside.module.scss';

import { NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from './img/LogoSpotify.svg';
import { ReactComponent as Home } from './img/home.svg';
import { ReactComponent as Heart } from './img/heart.svg';
import { ReactComponent as Book } from './img/book.svg';
import { ReactComponent as Search } from './img/search.svg';

export const Aside = () => {

    const setActiveClass = ({ isActive }: { isActive: boolean}): string => {
        return `${s.navigation__link} ${isActive ? s.active : ''}`;
    };

    return (
        <aside className={s.aside}>
            <div className={s.containerLink}>
                <NavLink className={s.logo} to='/'>
                    <Logo/>
                </NavLink>
            </div>

            <nav className={s.navigation}>

                <div className={s.containerLink}>
                    <NavLink className={setActiveClass} to='/'>
                        <Home className={s.navigation__img}/>
                        <span className={s.navigation__text}>Главная</span>
                    </NavLink>
                </div>

                <div className={s.containerLink}>
                    <NavLink className={setActiveClass} to='search'>
                        <Search className={s.navigation__img}/>
                        <span className={s.navigation__text}>Поиск</span>
                    </NavLink>
                </div>

                <div className={s.containerLink}>
                    <NavLink className={setActiveClass} to='collection/playlists/zara'>
                        <Book className={s.navigation__img}/>
                        <span className={s.navigation__text}>Подборка </span>
                    </NavLink>
                </div>

                <div className={s.containerLink}>
                    <NavLink className={setActiveClass} to='playlist/playlist/0n9vv15rU5Yh2SNCXzYdT6'>
                        <Heart className={s.navigation__img}/>
                        <span className={s.navigation__text}>Подборка треков</span>
                    </NavLink>
                </div>
            </nav>

            <div className={s.aside__line}></div>
        </aside>
    );
};

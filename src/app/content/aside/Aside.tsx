import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from './Aside.module.scss';

import logo from './img/LogoSpotify.svg';
import { ReactComponent as Home } from './img/home.svg';
import { ReactComponent as Heart } from './img/heart.svg';
import { ReactComponent as Book } from './img/book.svg';
import { ReactComponent as Add } from './img/add.svg';
import { ReactComponent as Search } from './img/search.svg';

export const Aside = () => {

    const setActiveClass = ({ isActive }: { isActive: boolean}): string => {
        return `${s.navigation__link} ${isActive ? s.active : ''}`;
    };

    return (
        <aside className={s.aside}>
            <div className={s.containerLink}>
                <Link className={s.logo} to='/'>
                    <img src={logo} alt="Логотип" />
                </Link>
            </div>

            <nav className={s.navigation}>
                <div className={s.containerLink}>
                    <NavLink className={setActiveClass} to='/'>
                        <Home className={s.navigation__img}/>
                        <span className={s.navigation__text}>Главная</span>
                    </NavLink>
                </div>

                <div className={s.containerLink}>
                    <NavLink className={setActiveClass} to='/search'>
                        <Search className={s.navigation__img}/>
                        <span className={s.navigation__text}>Поиск</span>
                    </NavLink>
                </div>

                <div className={s.containerLink}>
                    <NavLink className={setActiveClass} to='/collection'>
                        <Book className={s.navigation__img}/>
                        <span className={s.navigation__text}>Медиатека</span>
                    </NavLink>
                </div>

                <div className={s.containerLink}>
                    <NavLink className={setActiveClass} to='/adfsfad'>
                        <Add className={s.navigation__img}/>
                        <span className={s.navigation__text}>Поиск</span>
                    </NavLink>
                </div>

                <div className={s.containerLink}>
                    <NavLink className={setActiveClass} to='/sfasdfasdfa'>
                        <Heart className={s.navigation__img}/>
                        <span className={s.navigation__text}>Медиатека</span>
                    </NavLink>
                </div>
            </nav>

            <div className={s.aside__line}></div>
        </aside>
    );
};

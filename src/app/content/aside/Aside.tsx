import React from 'react';
import { Link } from 'react-router-dom';
import s from './Aside.module.scss';


import logo from './img/LogoSpotify.svg';
import home from './img/home.svg';
import heart from './img/book.svg';
import book from './img/book.svg';
import add from './img/add.svg';
import search from './img/search.svg';


export const Aside = () => {
    return (
        <aside className={s.aside}>
            <div className={s.containerLink}>
                <Link className={s.logo} to='/'>
                    <img src={logo} alt="Логотип" />
                </Link>
            </div>

            <nav className={s.navigation}>
                <div className={s.containerLink}>
                    <Link className={s.navigation__link} to='/'>
                        <img className={s.navigation__img} src={home} alt="Домик"/>
                        <span className={s.navigation__text}>Главная</span>
                    </Link>
                </div>

                <div className={s.containerLink}>
                    <Link className={s.navigation__link} to='/Search'>
                        <img className={s.navigation__img} src={search} alt="Лупа"/>
                        <span className={s.navigation__text}>Поиск</span>
                    </Link>
                </div>

                <div className={s.containerLink}>
                    <Link className={s.navigation__link} to='/CollectionItems'>
                        <img className={s.navigation__img} src={book} alt="Медиатека" />
                        <span className={s.navigation__text}>Медиатека</span>
                    </Link>
                </div>
            </nav>

            <div className={s.asideOptions}>
                <div className={s.containerLink}>
                    <Link className={s.asideOptions__link} to='/CollectionItems'>
                        <img className={s.asideOptions__img} src={add} alt="Плюсик" />
                        <span className={s.asideOptions__text}>Создать плейлист</span>
                    </Link>
                </div>

                <div className={s.containerLink}>
                    <Link className={s.asideOptions__link} to='/Playlist'>
                        <img className={s.asideOptions__img} src={heart} alt="Сердечко" />
                        <span className={s.asideOptions__text}>Любимые треки</span>
                    </Link>
                </div>
            </div>

            <div className={s.aside__line}></div>

            <div className={s.playlists}>
                <div className={s.containerLink}>
                    <Link className={s.playlists__link} to='/Playlist'>
                        <span className={s.playlists__text}>Плейлист для прослушивания длинный</span>
                    </Link>
                </div>

                <div className={s.containerLink}>
                    <Link className={s.playlists__link} to='/Playlist'>
                        <span className={s.playlists__text}>Плейлист №2</span>
                    </Link>
                </div>

                <div className={s.containerLink}>
                    <Link className={s.playlists__link} to='/Playlist'>
                        <span className={s.playlists__text}>Плейлист №2</span>
                    </Link>
                </div>
            </div>
        </aside>
    );
};

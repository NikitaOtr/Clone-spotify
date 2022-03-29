import React, { useState } from 'react';
import { Recommendation } from '../../../components/Recommendation/Recommendation';
import { Song } from '../../../components/Song/Song';
import { search } from './../../../api/api';

import s from './SearchPage.module.scss';
import img from './../../aside/img/heart.svg';

export const SearchPage = () => {
    const [text, setText] = useState('');
    const [releases, setReleases] = useState([]);

    const test = async () => {
        const data: any = await search(text);
        console.log(data.artists.items);
        setReleases(data.artists.items);
    };

    return (
        <>
            <section>
                <input className={s.searchInput} value={text}
                    onChange={e => setText(e.target.value)} type="text" placeholder="Исполнитель, трек или подкаст"/>
                <button onClick={test}>search</button>
            </section>

            <h1 className={s.headline}>Лучший результат</h1>

            <section className={s.theBest}>
                <a className={s.theBest__link} href="./playlist.html">
                    <div className={s.theBest__boxImg}>
                        <img className={s.theBest__boxImg__img} src={img} alt=""/>
                    </div>

                    <div className={s.theBest__boxText}>
                        <span className={s.theBest__boxText__name}>История</span>
                        <span className={s.theBest__boxText__autor}>Интонация</span>
                    </div>
                </a>

            </section>

            <Recommendation releases={releases}/>

            <section className={s.playList + ' ' + s.spaceTop}>
                <div className={s.playList__header + ' ' + s.box}>
                    <div className={s.playList__header__box + ' ' + s.box__item}>
                        <span className={s.playList__header__box__text}>№</span>
                    </div>

                    <div className={s.playList__header__box + ' ' + s.box__item}>
                        <span className={s.playList__header__box__text}>Название</span>
                    </div>

                    <div className={s.playList__header__box + ' ' + s.box__item}>
                        <span className={s.playList__header__box__text}>Альбом</span>
                    </div>

                    <div className={s.playList__header__box + ' ' + s.box__item}>
                        <img className={s.playList__header__box__img} src="./images/playlist/time.svg" alt=""/>
                    </div>
                </div>
                <Song/>
                <Song/>
                <Song/>
                <Song/>
                <Song/>
                <Song/>
                <Song/>
                <Song/>
            </section>
        </>
    );
};
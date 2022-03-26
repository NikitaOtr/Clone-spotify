import React, { useState, useEffect } from 'react';
import s from './Footer.module.scss';

import left from './img/control/left.svg';
import play from './img/control/play.svg';
import right from './img/control/right.svg';
import bigSound from './img/sound/big.svg';

export const Footer = () => {

    const m = [
        'https://s1.muzati.net/files/mp3/pablo_-_harlem_(feat._mr_lambo)_muzati.net_128.mp3',
        'https://s1.muzati.net/files/mp3/xcho_-_ty_i_ya_muzati.net_128.mp3',
        'https://s1.muzati.net/files/mp3/xcho_-_vorony_muzati.net_128.mp3'
    ];

    const [index, setIndex] = useState(0);
    const [audio] = useState(new Audio());
    const [playing, setPlaying] = useState(false);

    const next = () => {
        setIndex(prev => (prev + 1) % m.length);
    };

    const prev = () => {
        setIndex(prev => (prev + (m.length - 1)) % m.length);
    };

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
        console.log(playing);
    }, [playing]);

    useEffect(() => {
        audio.addEventListener('ended', next);
        return () => audio.removeEventListener('ended', next);
    }, []);

    useEffect(() => {
        audio.src = m[index];
        playing ? audio.play() : audio.pause();
        console.log(index, playing);
    }, [index]);

    return (
        <footer className={s.player}>
            <div className={s.musicTitle}>
                <img className={s.musicTitle__img} src={play} alt="Аватар трека"/>
                <div className={s.musicTitle__text}>
                    <span className={s.musicTitle__text__name}>Крепко влип</span>
                    <span className={s.musicTitle__text__autor}>LUCAS</span>
                </div>
            </div>

            <div className={s.playerControl}>
                <div className={s.playerControl__buttons}>
                    <button onClick={prev} className={s.playerControl__buttons__button}>
                        <img className={s.playerControl__buttons__button__img}
                            src={left} alt="Предыдущая"/>
                    </button>
                    <button onClick={toggle} className={s.playerControl__buttons__button}>
                        <img className={s.playerControl__buttons__button__imgBig}
                            src={play} alt="Играть"/>
                    </button>
                    <button onClick={next} className={s.playerControl__buttons__button}>
                        <img className={s.playerControl__buttons__button__img}
                            src={right} alt="Следующая"/>
                    </button>
                </div>

                <div className={s.playerControl__bar}>
                    <span className={s.playerControl__bar__time}>00:00</span>
                    <div className={s.progressBar}>
                        <div className={s.progressBar__progress}></div>
                    </div>
                    <span className={s.playerControl__bar__time}>00:00</span>
                </div>
            </div>

            <div className={s.sound}>
                <button className={s.sound__button}>
                    <img className={s.sound__button__img} src={bigSound} alt="Звук"/>
                </button>

                <div className={s.sound__progressBar}>
                    <div className={s.sound__progressBar__progress}></div>
                </div>
            </div>
        </footer>
    );
};
import React from 'react';
import s from './Footer.module.scss';

import left from './img/control/left.svg';
import play from './img/control/play.svg';
import right from './img/control/right.svg';
import bigSound from './img/sound/big.svg';


export const Footer = () => {
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
                    <button className={s.playerControl__buttons__button}>
                        <img className={s.playerControl__buttons__button__img}
                            src={left} alt="Предыдущая"/>
                    </button>
                    <button className={s.playerControl__buttons__button}>
                        <img className={s.playerControl__buttons__button__imgBig}
                            src={play} alt="Играть"/>
                    </button>
                    <button className={s.playerControl__buttons__button}>
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
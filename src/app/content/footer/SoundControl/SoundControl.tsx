import React, { MouseEvent, FC, useState, useEffect } from 'react';
import s from './SoundControl.module.scss';
import bigSound from './../img/sound/big.svg';

interface IProps {
    audio: HTMLAudioElement
}

export const SoundControl: FC<IProps> = ({ audio }) => {
    const [volume, setVolume] = useState(0.5);

    useEffect(() => {
        audio.volume = volume;
    }, [volume]);

    const setSound = (event: MouseEvent<HTMLDivElement>) => {
        const width = 100;
        const clickX = event.nativeEvent.offsetX;
        setVolume(clickX / width);
    };

    return (
        <div className={s.sound}>
            <button className={s.sound__button}>
                <img className={s.sound__button__img} src={bigSound} alt="Звук" />
            </button>

            <div onClick={setSound} className={s.sound__progressBar}>
                <div style={{ width: (volume * 100) + '%' }} className={s.sound__progressBar__progress}></div>
            </div>
        </div>
    );
};
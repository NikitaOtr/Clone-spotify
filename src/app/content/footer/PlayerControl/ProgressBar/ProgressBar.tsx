import React, { FC, MouseEvent, useEffect, useState } from 'react';
import s from './ProgressBar.module.scss';

import { timeFormat } from './../../../../utils/timeFormat';

interface IProps {
    audio: HTMLAudioElement
}

export const ProgressBar : FC<IProps> = ({ audio }) => {

    const [time, setTime] = useState(audio.currentTime);
    const [duration, setDuration] = useState(audio.duration);

    const setProgress = (event: MouseEvent<HTMLDivElement>) => {
        const width = 300;
        const clickX = event.nativeEvent.offsetX;
        audio.currentTime = (clickX / width) * duration;
    };

    useEffect(() => {
        const callback = () => {
            console.log(audio.currentTime, audio.duration);
            setTime(audio.currentTime);
            setDuration(audio.duration);
        };
        audio.addEventListener('timeupdate', callback);
        return () => audio.removeEventListener('timeupdate', callback);
    }, []);

    return (
        <div className={s.container}>
            <span className={s.container__time}>{timeFormat(time)}</span>
            <div onClick={setProgress} className={s.progressBar}>
                <div style={{ width: time / duration * 100 + '%' }} className={s.progressBar__progress}></div>
            </div>
            <span className={s.container__time}>{timeFormat(duration)}</span>
        </div>
    );
};
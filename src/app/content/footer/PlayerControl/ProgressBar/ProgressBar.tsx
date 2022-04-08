import React, { VFC, MouseEvent, useEffect } from 'react';
import s from './ProgressBar.module.scss';

import { timeFormatSeconds } from './../../../../utils/timeFormat';
import { useAppSelector } from './../../../../hooks/useAppSelector';
import { useAppActions } from './../../../../hooks/useAppAction';

interface IProps {
    audio: HTMLAudioElement
}

export const ProgressBar : VFC<IProps> = ({ audio }) => {
    const duration = useAppSelector(state => state.playerReducer.duration);
    const currentTime = useAppSelector(state => state.playerReducer.currentTime);
    const { setCurrentTime } = useAppActions();

    const setProgress = (event: MouseEvent<HTMLDivElement>) => {
        const width = 300;
        const clickX = event.nativeEvent.offsetX;
        audio.currentTime = (clickX / width) * duration;
    };

    useEffect(() => {
        const callback = () => setCurrentTime({ currentTime: audio.currentTime });
        audio.addEventListener('timeupdate', callback);
        return () => audio.removeEventListener('timeupdate', callback);
    }, []);

    return (
        <div className={s.container}>
            <span className={s.container__time}>{timeFormatSeconds(currentTime)}</span>
            <div onClick={setProgress} className={s.progressBar}>
                <div style={{ width: currentTime / duration * 100 + '%' }} className={s.progressBar__progress}></div>
            </div>
            <span className={s.container__time}>{timeFormatSeconds(duration)}</span>
        </div>
    );
};
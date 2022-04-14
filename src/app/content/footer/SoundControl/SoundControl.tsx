import React, { MouseEvent, VFC, useEffect, useMemo, useState } from 'react';
import s from './SoundControl.module.scss';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppActions } from '../../../hooks/useAppAction';

import loudVolume from './img/loudVolume.svg';
import mediumVolume from './img/mediumVolume.svg';
import quietVolume from './img/quietVolume.svg';
import noVolume from './img/noVolume.svg';

interface IProps {
    audio: HTMLAudioElement
}

export const SoundControl: VFC<IProps> = ({ audio }) => {
    const volume = useAppSelector(state => state.playerReducer.volume);
    const { setVolume, SaveVolume, setVolumeFromSaveVolume } = useAppActions();

    const [hover, setHover] = useState(false);

    useEffect(() => {
        audio.volume = volume;
    }, [volume]);

    const setProgressVolume = (event: MouseEvent<HTMLDivElement>) => {
        const width = 100;
        const clickX = event.nativeEvent.offsetX;
        setVolume({ volume: clickX / width });
    };

    const imgVolume = useMemo(() => {
        if (volume === 0) {
            return noVolume;
        } else if (volume < 0.33) {
            return quietVolume;
        } else if (volume < 0.66) {
            return mediumVolume;
        } else {
            return loudVolume;
        }
    }, [volume]);

    const onClickButton = () => {
        if (volume) {
            SaveVolume();
        } else {
            setVolumeFromSaveVolume();
        }
    };

    return (
        <div className={s.sound}>
            <button className={s.button} onClick={onClickButton}
                onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <img className={s.button__img} src={imgVolume} alt="Звук"/>
            </button>

            <div className={`${s.progressBar} ${hover ? s.hover : s.noHover}`} onClick={setProgressVolume}
                onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <div style={{ width: (volume * 100) + '%' }} className={s.progressBar__progress}></div>
            </div>
        </div>
    );
};
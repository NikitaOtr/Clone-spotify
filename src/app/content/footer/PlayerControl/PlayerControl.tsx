import React, { FC } from 'react';
import s from './PlayerControl.module.scss';
import left from './../img/control/left.svg';
import right from './../img/control/right.svg';

import { ButtonPlay } from './ButtonPlay/ButtonPlay';
import { ButtonMove } from './ButtonMove/ButtonMove';
import { ProgressBar } from './ProgressBar/ProgressBar';

interface IProps {
    audio : HTMLAudioElement
    playing: boolean
    prev(): void
    next(): void
    toggle(): void
}

export const PlayerControl: FC<IProps> = ({ prev, next, toggle, playing, audio }) => {
    return (
        <div className={s.playerControl}>
            <div className={s.playerControl__buttons}>
                <ButtonMove img={left} click={prev}/>
                <ButtonPlay toggle={toggle} playing={playing}/>
                <ButtonMove img={right} click={next}/>
            </div>
            <ProgressBar audio={audio}/>
        </div>
    );
};
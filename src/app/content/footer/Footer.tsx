import React, { useMemo } from 'react';
import s from './Footer.module.scss';
import { MusicTitle } from './MusicTitle/MusicTitle';
import { PlayerControl } from './PlayerControl/PlayerControl';
import { SoundControl } from './SoundControl/SoundControl';

export const Footer = () => {
    const audio = useMemo(() => new Audio(), []);
    return (
        <footer className={s.player}>
            <MusicTitle/>
            <PlayerControl audio={audio}/>
            <SoundControl audio={audio}/>
        </footer>
    );
};
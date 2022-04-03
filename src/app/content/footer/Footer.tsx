import React, { useEffect, useMemo } from 'react';
import s from './Footer.module.scss';
import { MusicTitle } from './MusicTitle/MusicTitle';
import { PlayerControl } from './PlayerControl/PlayerControl';
import { SoundControl } from './SoundControl/SoundControl';



export const Footer = () => {
    const audio = useMemo(() => new Audio(), []);
    const playing = false;
    const prev = () => {
        console.log(1);
    };
    const next = () => {
        console.log(1);
    };
    const toggle = () => {
        console.log(1);
    };
    return (
        <footer className={s.player}>
            <MusicTitle/>
            <PlayerControl audio={audio} playing={playing} prev={prev} next={next} toggle={toggle} />
            <SoundControl audio={audio}/>
        </footer>
    );
};
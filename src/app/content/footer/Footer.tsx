import React, { useState, useEffect, useMemo } from 'react';
import s from './Footer.module.scss';

import { MusicTitle } from './MusicTitle/MusicTitle';
import { PlayerControl } from './PlayerControl/PlayerControl';
import { SoundControl } from './SoundControl/SoundControl';

export const Footer = () => {
    const m = [
        'https://s1.muzati.net/files/mp3/pablo_-_harlem_(feat._mr_lambo)_muzati.net_128.mp3',
        'https://s1.muzati.net/files/mp3/xcho_-_ty_i_ya_muzati.net_128.mp3',
        'https://s1.muzati.net/files/mp3/xcho_-_vorony_muzati.net_128.mp3'
    ];

    const audio = useMemo(() => new Audio(), []);

    const [index, setIndex] = useState(0);
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);
    const next = () => setIndex(prev => (prev + 1) % m.length);
    const prev = () => setIndex(prev => (prev + (m.length - 1)) % m.length);

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
            <MusicTitle/>
            <PlayerControl prev={prev} next={next} toggle={toggle} playing={playing} audio={audio}/>
            <SoundControl audio={audio}/>
        </footer>
    );
};
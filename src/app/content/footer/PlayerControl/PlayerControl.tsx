import React, { VFC, useEffect } from 'react';
import s from './PlayerControl.module.scss';
import left from './img/left.svg';
import right from './img/right.svg';

import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppActions } from './../../../hooks/useAppAction';

import { ButtonPlay } from './ButtonPlay/ButtonPlay';
import { ButtonMove } from './ButtonMove/ButtonMove';
import { ProgressBar } from './ProgressBar/ProgressBar';

interface IProps {
    audio : HTMLAudioElement
}

export const PlayerControl: VFC<IProps> = ({ audio }) => {
    const { previousTrack, nextTrack, togglePlaying, setDuration, setPlayerStatus } = useAppActions();
    const isPlaying = useAppSelector(state => state.playerReducer.isPlaying);
    const track = useAppSelector(state => state.playerReducer.track);

    useEffect(() => {
        const callback = () => setDuration({ duration: audio.duration });
        audio.addEventListener('loadedmetadata', callback);
        return () => audio.removeEventListener('loadedmetadata', callback);
    }, []);

    useEffect(() => {
        audio.addEventListener('ended', () => nextTrack());
        return () => audio.removeEventListener('ended', () => nextTrack());
    }, []);

    useEffect(() => {
        if (track) {
            if (track.preview_url) {
                audio.src = track.preview_url;
                isPlaying ? audio.play() : audio.pause();
                setPlayerStatus({ status: 'success' });
            } else {
                audio.src = '';
                setPlayerStatus({ status: 'error' });
            }
        }
    }, [track]);

    useEffect(() => {
        if (track && track.preview_url) {
            isPlaying ? audio.play() : audio.pause();
        }
    }, [isPlaying]);

    return (
        <div className={s.playerControl}>
            <div className={s.playerControl__buttons}>
                <ButtonMove img={left} onClick={() => previousTrack()}/>
                <ButtonPlay isPlaying={isPlaying} toggle={() => togglePlaying()}/>
                <ButtonMove img={right} onClick={() => nextTrack()}/>
            </div>
            <ProgressBar audio={audio}/>
        </div>
    );
};
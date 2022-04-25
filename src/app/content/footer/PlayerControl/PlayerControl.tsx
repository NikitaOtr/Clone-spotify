import React, { VFC, useEffect } from 'react';
import s from './PlayerControl.module.scss';
import left from './img/left.svg';
import right from './img/right.svg';

import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppActions } from './../../../hooks/useAppAction';

import { ButtonPlay } from './ButtonPlay/ButtonPlay';
import { ButtonMove } from './ButtonMove/ButtonMove';
import { ProgressBar } from './ProgressBar/ProgressBar';
import { EnumOfStatusPlayer } from '../../../types/playerTypes';

interface IProps {
    audio : HTMLAudioElement
}

export const PlayerControl: VFC<IProps> = ({ audio }) => {
    const { previousTrack, nextTrack, togglePlaying, setDuration, setPlayerStatus } = useAppActions();
    const isPlaying = useAppSelector(state => state.playerReducer.isPlaying);
    const track = useAppSelector(state => state.playerReducer.track);

    useEffect(() => {
        const callback = () => setDuration(audio.duration);
        audio.addEventListener('loadedmetadata', callback);
        return () => audio.removeEventListener('loadedmetadata', callback);
    }, []);

    useEffect(() => {
        const callback = () => nextTrack();
        audio.addEventListener('ended', callback);
        return () => audio.removeEventListener('ended', callback);
    }, []);

    useEffect(() => {
        if (track) {
            if (track.preview_url) {
                audio.src = track.preview_url;
                isPlaying ? audio.play() : audio.pause();
                setPlayerStatus(EnumOfStatusPlayer.Success);
            } else {
                audio.src = '';
                setPlayerStatus(EnumOfStatusPlayer.Error);
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
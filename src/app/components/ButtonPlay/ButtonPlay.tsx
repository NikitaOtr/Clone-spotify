import React, { FC, MouseEvent } from 'react';
import s from './ButtonPlay.module.scss';

interface IProps {
    size: number,
    isPlaying: boolean,
    onClick?: (e: MouseEvent<HTMLElement>) => void,
}

export const ButtonPlay: FC<IProps> = ({ size, isPlaying, onClick }) => {
    const styleButton = {
        width: `${size}px`,
        height: `${size}px`,
        border: `${size / 8}px solid white`,
    };

    const sizeElement = size / 4;

    const stylePlay = {
        borderTop: `${sizeElement}px solid transparent`,
        borderBottom: `${sizeElement}px solid transparent`,
        borderLeft: `calc(${sizeElement}px * 1.72) solid white`,
        marginLeft: `${size / 15}px`,
    };

    const stylePause = {
        height: `calc(${sizeElement}px * 2)`,
        width: `calc(${sizeElement}px * 2 * 0.86)`,
    };

    const t = (e: MouseEvent<HTMLElement>) => {
        onClick && onClick(e);

    };

    return (
        <button className={s.button} style={styleButton} onClick={t}>
            <div style={isPlaying ? stylePause : stylePlay} className={isPlaying ? s.pause : s.play }></div>
        </button>
    );
};
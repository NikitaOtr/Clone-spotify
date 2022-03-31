import React from 'react';
import s from './Loader.module.scss';

export const Loader = () => {
    return (
        <div className={s.skFadingCircleWrap}>
            <div className={s.skFadingCircle}>
                <i className={s.skCircle1}></i>
                <i className={s.skCircle2}></i>
                <i className={s.skCircle3}></i>
                <i className={s.skCircle4}></i>
                <i className={s.skCircle5}></i>
                <i className={s.skCircle6}></i>
                <i className={s.skCircle7}></i>
                <i className={s.skCircle8}></i>
                <i className={s.skCircle9}></i>
                <i className={s.skCircle10}></i>
                <i className={s.skCircle11}></i>
                <i className={s.skCircle12}></i>
            </div>
        </div>
    );
};
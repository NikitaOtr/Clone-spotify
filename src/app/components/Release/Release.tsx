import React, { FC } from 'react';
import s from './Release.module.scss';

import question from './question.svg';
import { ISearchItem } from '../../types/typeSearch';

interface IProps {
    item: ISearchItem;
}

export const Release: FC<IProps> = ({ item }) => {
    return (
        <article className={s.release + ' ' + s.hoverEffect}>
            <a className={s.release__link} href="./playlist.html">
                <div className={s.release__boxImg}>
                    <div>
                        <img className={s.release__boxImg__img} src={item.images[0]?.url || question } alt="" />
                    </div>
                </div>
                <div className={s.release__boxText}>
                    <span className={s.release__boxText__name}>{item.name}</span>
                    <span className={s.release__boxText__name}>{item.name}</span>
                    <span className={s.release__boxText__name}>{item.name}</span>
                </div>
            </a>
        </article>
    );
};

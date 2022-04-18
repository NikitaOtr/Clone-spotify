import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import s from './Release.module.scss';

import question from './../../img/question.svg';
import { EnumSearchType, ISearchItem } from '../../types/typeSearch';

interface IProps {
    item: ISearchItem,
}

export const Release: FC<IProps> = ({ item }) => {
    const test = (type: EnumSearchType) => {
        if (type === EnumSearchType.artist) {
            return `/Artist/${item.id}`;
        }
        return `/Playlist/${item.type}/${item.id}`;
    };

    return (
        <article className={s.release + ' ' + s.hoverEffect}>
            <Link to={test(item.type)} className={s.release__link}>
                <div className={s.release__boxImg}>
                    <div>
                        <img className={s.release__boxImg__img} src={item.images[0]?.url || question } alt="" />
                    </div>
                </div>
                <div className={s.release__boxText}>
                    <span className={s.release__boxText__name}>{item.name}</span>
                </div>
            </Link>
        </article>
    );
};

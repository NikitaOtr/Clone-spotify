import React, { VFC } from 'react';
import { Link } from 'react-router-dom';
import s from './Release.module.scss';

import question from './../../img/question.svg';
import { EnumOfTargetTypes, IRelease } from '../../types/commonTypes';

interface IProps {
    item: IRelease,
}

export const Release: VFC<IProps> = ({ item }) => {
    const href = item.type === EnumOfTargetTypes.artist
        ? `/artist/${item.id}`
        : `/playlist/${item.type}/${item.id}`;

    return (
        <article className={s.release + ' ' + s.hoverEffect}>
            <Link to={href} className={s.release__link}>
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

import React, { FC } from 'react';
import s from './Recommendation.module.scss';
import { Link } from 'react-router-dom';

import { ContainerWrap } from '../ContainerWrap/ContainerWrap';
import { Release } from '../Release/Release';
import { IDefault } from '../../types/typeSearch';


interface IProps {
    releases: Array<IDefault>,
    name: string,
    href: string,
}

export const Recommendation: FC<IProps> = ({ releases, name, href }) => {
    return (
        <article className={s.recommendation}>
            <div className={s.recommendation__headline}>
                <h2 className={s.recommendation__headline__header + ' ' + s.hoverEffect}>
                    <Link to='/'>{name}</Link>
                </h2>
                <Link to='/' className={s.recommendation__headline__all + ' ' + s.hoverEffect}>все</Link>
            </div>

            <ContainerWrap>
                {releases.map((release, i) => <Release key={i} item={release}/>)}
            </ContainerWrap>
        </article>
    );
};
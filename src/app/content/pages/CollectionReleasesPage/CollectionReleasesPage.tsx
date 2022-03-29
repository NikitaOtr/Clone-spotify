import React from 'react';
import { ContainerWrap } from '../../../components/ContainerWrap/ContainerWrap';
import s from './CollectionReleasesPage.module.scss';

import img from './../../aside/img/heart.svg';
import { Release } from '../../../components/Release/Release';

export const CollectionReleasesPage = () => {
    const releases = [
        { name: 'My Release', description: 'description', img },
        { name: 'My Release', description: 'description', img },
        { name: 'My Release', description: 'description', img },
        { name: 'My Release', description: 'description', img },
        { name: 'My Release', description: 'description', img },
        { name: 'My Release', description: 'description', img },
    ];
    return (
        <>
            <h1 className={s.headline}>Конкретный раздел</h1>
            <ContainerWrap>
                {releases.map((release, i) =>
                    <Release key={i} name={release.name} description={release.description} images={[release.img]}/>)}
            </ContainerWrap>
        </>
    );
};
import React from 'react';
import s from './MainPage.module.scss';
import { Mixes } from './Mixes/Mixes';
import { Mix } from './Mix/Mix';

import img from './../../aside/img/heart.svg';
import { Recommendation } from '../../../components/Recommendation/Recommendation';

export const MainPage = () => {
    const mixes = [1, 2, 3, 4, 5, 6];
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
            <h1 className={s.headline}>Добрый день</h1>

            <Mixes>
                {mixes.map(mix => <Mix key={mix} number={mix} photo={img}/>)}
            </Mixes>

            <section className={s.recommendations}>
                {/* <Recommendation releases={releases}/>

                <Recommendation releases={releases}/>

                <Recommendation releases={releases}/> */}
            </section>
        </>
    );
};
import React, { FC, ReactNode } from 'react';
import s from './Mixes.module.scss';

interface IProps {
    children: ReactNode
}

export const Mixes: FC<IProps> = ({ children }) => {
    return (
        <section className={s.mixes}>
            {children}
        </section>
    );
};
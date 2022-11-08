import loader from 'assets/preloader.svg';
import React from 'react';
import style from './Preloader.module.less';

export const Preloader: React.FC = () => (
    <div className={style.preLoaderContainer}>
        <img className={style.preLoader} src={loader} alt='' />
    </div>
);

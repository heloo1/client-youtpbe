import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
interface Props {
    title: string;
    focus: boolean;
}
const HeaderItem = ({ title, focus }: Props) => {
    return (
        <div
            className={clsx(styles.container, {
                [styles.focus]: focus,
            })}
        >
            {title}
        </div>
    );
};

export default HeaderItem;

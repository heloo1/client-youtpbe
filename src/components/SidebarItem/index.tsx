import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import Avatar from '@mui/material/Avatar';
import { SvgIconProps, SvgIconTypeMap } from '@material-ui/core';
interface Props {
    Icon?: React.ReactNode;
    img?: string;
    active?: boolean;
    title: string;
}
const SidebarItem = ({ Icon, img, active, title }: Props) => {
    return (
        <div
            className={clsx(styles.container, {
                [styles.active]: active,
            })}
        >
            <div className={styles.icon}>
                {!img ? (
                    Icon
                ) : (
                    <Avatar
                        alt="Cindy Baker"
                        src={img}
                        sx={{ width: 24, height: 24 }}
                    />
                )}
            </div>
            <div
                className={clsx(styles.title, {
                    [styles.active]: active,
                })}
            >
                {title}
            </div>
        </div>
    );
};

export default SidebarItem;

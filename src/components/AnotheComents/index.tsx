import React from 'react';
import styles from './styles.module.css';
import { Avatar } from '@material-ui/core';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
interface Props {
    name?: any;
    desc: string;
    img?: string;
}
const AnotheComents = ({ name, desc, img }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Avatar alt="Cindy Baker" src={img} />
            </div>
            <div className={styles.right}>
                <h4 className={styles.name}>{name}</h4>
                <p className={styles.title}>{desc}</p>
                <div className={styles.action}>
                    <div className={styles.icon}>
                        <ThumbUpOutlinedIcon sx={{ fontSize: 14 }} />
                    </div>
                    <span className={styles.number}>45</span>
                    <div className={styles.icon}>
                        <ThumbDownOutlinedIcon sx={{ fontSize: 14 }} />
                    </div>
                    <span className={styles.rep}>PHẢN HỒI</span>
                </div>
            </div>
        </div>
    );
};

export default AnotheComents;

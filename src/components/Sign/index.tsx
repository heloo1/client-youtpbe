import React from 'react';
import styles from './styles.module.css';
import Avatar from '@mui/material/Avatar';
const Sign = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Avatar
                    alt="Cindy Baker"
                    src="https://yt3.ggpht.com/vwsoumZDdfzrKpEACoNdWEmEDwHsvzhtDGO5DXSz9oaM6RMHh_HIrOt9FR1IMcgPaCOsBgzD=s48-c-k-c0x00ffffff-no-rj"
                />
            </div>
            <div className={styles.mid}>
                <div className={styles.name}>trung tự</div>
                <div className={styles.sign}>222 N Người đăng ký</div>
            </div>
            <div className={styles.right}>Đăng ký</div>
        </div>
    );
};

export default Sign;

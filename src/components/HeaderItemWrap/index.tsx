import React from 'react';
import HeaderItem from '~/components/HeaderItem';
import styles from './styles.module.css';
const data = [
    {
        title: 'Tất cả',
        focus: true,
    },
    {
        title: 'Danh sách kết hợp',
        focus: false,
    },
    {
        title: 'Âm nhạc',
        focus: false,
    },
    {
        title: 'Trực tiếp',
        focus: false,
    },
    {
        title: 'Trò chơi',
        focus: false,
    },
    {
        title: 'Bóng đá',
        focus: false,
    },
    {
        title: 'Trực tiếp',
        focus: false,
    },
    {
        title: 'Trò chơi',
        focus: false,
    },
    {
        title: 'Bóng đá',
        focus: false,
    },
    {
        title: 'Bóng đá',
        focus: false,
    },
];
const HeaderItemWrap = () => {
    return (
        <div className={styles.container}>
            {data.map((item, index) => (
                <HeaderItem key={index} title={item.title} focus={item.focus} />
            ))}
        </div>
    );
};

export default HeaderItemWrap;

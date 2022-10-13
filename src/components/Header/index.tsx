import React from 'react';
import styles from './styles.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import useAuthStore from '~/store/useAuthStore';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Header = () => {
    const { user } = useAuthStore((state) => state);
    const [title, setTitle] = useState<string>('');
    const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.icon_left}>
                    <MenuIcon />
                </div>
                <div className={styles.logo}>
                    <Link to="/">
                        <img
                            className={styles.img_logo}
                            src="https://static.vecteezy.com/system/resources/thumbnails/003/206/623/small/youtube-editorial-app-icon-free-vector.jpg"
                            alt=""
                        />
                    </Link>
                </div>
            </div>
            <div className={styles.mid}>
                <div className={styles.wrap}>
                    <input
                        placeholder="Tìm kiếm"
                        className={styles.input}
                        onChange={handleOnchange}
                        value={title}
                    />
                    <div className={styles.icon_search}>
                        <SearchIcon sx={{ color: '#5e5d5d' }} />
                    </div>
                </div>
                <KeyboardVoiceIcon sx={{ marginLeft: 2 }} />
            </div>
            <div className={styles.right}>
                <div className={styles.icon_right_item}>
                    <VideoCallIcon />
                </div>
                <div className={styles.icon_right_item}>
                    <NotificationsIcon />
                </div>
                <div className={styles.wrap_logo}>
                    <Avatar
                        src="/broken-image.jpg"
                        sx={{ height: 30, width: 30 }}
                    />
                    <span className={styles.name_right}>{user?.name}</span>
                </div>
            </div>
        </div>
    );
};

export default Header;

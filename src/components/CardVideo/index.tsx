import React from 'react';
import Avatar from '@mui/material/Avatar';

import styles from './styles.module.css';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { video } from '~/types/video';
import { useDispatch } from 'react-redux';
import { watchVideo } from '~/app/videoSlice';
interface Props {
    pageWatch: boolean;
    imgUrl: string;
    title: string;
    videoUrl: string;
    desc: string;
    views: number;
    likes: string;
    dislikes: string;
    item: video;
}
const CardVideo = ({
    pageWatch,
    imgUrl,
    title,
    videoUrl,
    desc,
    views,
    likes,
    dislikes,
    item,
}: Props) => {
    const dispatch = useDispatch();
    const handleVideoWatch = () => {
        dispatch(watchVideo(item));
    };
    return (
        <div
            className={clsx(styles.container, {
                [styles.pageWatch]: pageWatch,
            })}
        >
            <div className={styles.top}>
                <div className={styles.wrap}>
                    <Link
                        to={`/watch/${videoUrl}`}
                        className={styles.link}
                        onClick={handleVideoWatch}
                    >
                        <img
                            className={clsx(styles.img, {
                                [styles.imgWatch]: pageWatch,
                            })}
                            alt="video"
                            src={imgUrl}
                        />
                    </Link>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.left}>
                    {!pageWatch && (
                        <Avatar
                            src="https://yt3.ggpht.com/ytc/AMLnZu9U1YR60O4hjCfJHtYSjlpRNJx07bOADEDb6X-d=s68-c-k-c0x00ffffff-no-rj"
                            sx={{ height: 30, width: 30 }}
                        />
                    )}
                </div>
                <div className={styles.right}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.author}>V/A Music Vietnam</div>
                    <div className={styles.desc}>
                        <span>{views} lượt xem - </span>
                        <span>2 tháng trước</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardVideo;

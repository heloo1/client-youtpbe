import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { videoState } from '~/app/videoSlice';
import Header from '~/components/Header';
import LeftWatch from '~/components/LeftWatch';
import ListVideo from '~/components/ListVideo';
import { getRandomVideo } from '~/service/video';

import styles from './styles.module.css';
const Watch = () => {
    const { listVideos } = useSelector((state: any) => state.video);
    const [listVideo, setListVideo] = useState([]);
    useEffect(() => {
        const getVideo = async () => {
            const res = await getRandomVideo();
            setListVideo(res.data);
            console.log('ress home', res);
        };
        getVideo();
    }, []);
    return (
        <div>
            <Header />
            <div className={styles.wrap}>
                <div className={styles.left}>
                    <LeftWatch />
                </div>
                <div className={styles.right}>
                    <ListVideo pageWatch={true} listVideo={listVideos} />
                </div>
            </div>
        </div>
    );
};

export default Watch;

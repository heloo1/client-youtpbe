import React from 'react';
import Header from '~/components/Header';
import HeaderItemWrap from '~/components/HeaderItemWrap';
import Sidebar from '~/components/Sidebar';
import ListVideo from '~/components/ListVideo';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { getRandomVideo } from '~/service/video';
import { useDispatch } from 'react-redux';
import { addListVideo } from '~/app/videoSlice';
const Home = () => {
    const dispatch = useDispatch();
    const [listVideo, setListVideo] = useState([]);
    useEffect(() => {
        const getVideo = async () => {
            const res = await getRandomVideo();
            setListVideo(res.data);
            console.log('ress home', res);
        };
        getVideo();
    }, []);
    useEffect(() => {
        dispatch(addListVideo(listVideo));
    }, [listVideo]);
    console.log('list video', listVideo);
    return (
        <div className={styles.container}>
            <Header />
            <Sidebar />
            <div className={styles.wrap}>
                <div className={styles.top_main}>
                    <HeaderItemWrap />
                </div>
                <div className={styles.main}>
                    <ListVideo pageWatch={false} listVideo={listVideo} />
                </div>
            </div>
        </div>
    );
};

export default Home;

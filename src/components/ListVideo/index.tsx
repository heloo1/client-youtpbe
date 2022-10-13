import React from 'react';
import styles from './styles.module.css';
import CardVideo from '~/components/CardVideo';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { video } from '~/types/video';
interface Props {
    pageWatch: boolean;
    listVideo: any[];
}
const ListVideo = ({ pageWatch, listVideo }: Props) => {
    return (
        <div
            className={clsx(styles.container, {
                [styles.watchPage]: pageWatch,
            })}
        >
            {listVideo &&
                listVideo.length > 0 &&
                listVideo.map((item) => (
                    <div
                        key={item._id}
                        className={clsx(styles.a, {
                            [styles.wrapVideo]: !pageWatch,
                        })}
                    >
                        <CardVideo
                            pageWatch={pageWatch}
                            title={item.title}
                            imgUrl={item.imgUrl}
                            videoUrl={item.videoUrl}
                            desc={item.desc}
                            views={item.views}
                            likes={item.likes.length}
                            dislikes={item.dislikes.length}
                            item={item}
                        />
                    </div>
                ))}
        </div>
    );
};

export default ListVideo;

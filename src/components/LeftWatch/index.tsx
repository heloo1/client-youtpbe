import React, { useEffect } from 'react';
import styles from './styles.module.css';
import CardVideo from '~/components/CardVideo';
import ActionWatch from '~/components/ActionWatch';
import Sign from '~/components/Sign';
import Comment from '~/components/Comment';
import AnotheComents from '~/components/AnotheComents';
import { useSelector } from 'react-redux';
import { createComment } from '~/service/comment';
import useComment from '~/hooks/useComment';
import useLike from '~/hooks/useLike';
const LeftWatch = () => {
    const { videoWatch } = useSelector((state: any) => state.video);
    const { listComment, setListComment, getComment, addComment } =
        useComment();
    const { likeAction, unlikeAction, likes, disLikes } = useLike();
    useEffect(() => {
        getComment(videoWatch._id);
    }, [videoWatch._id]);
    console.log('a', videoWatch);
    const a = `https://www.youtube.com/embed/${videoWatch.videoUrl}`;
    const handleComment = (data: string) => {
        const commentNews = addComment({
            desc: data,
            videoId: videoWatch._id,
        });
        console.log('res', commentNews);
    };
    const handleLike = () => {
        likeAction();
    };
    const handleDisLike = () => {
        unlikeAction();
    };
    console.log('list Comment', listComment);
    return (
        <div className={styles.container}>
            <div className={styles.video}>
                <iframe
                    width="960px"
                    height="540px"
                    src={a}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <h3 className={styles.title}>{videoWatch.title}</h3>
            <span className={styles.views}>{videoWatch.views} lượt xem</span>
            <span className={styles.created}>1 thg 12 2021</span>
            <ActionWatch
                likes={likes}
                dislikes={disLikes}
                handleLike={handleLike}
                handleDisLike={handleDisLike}
            />
            <Sign />
            <Comment handleComment={handleComment} />
            {listComment &&
                listComment.length > 0 &&
                listComment.map((item: any) => (
                    <AnotheComents
                        key={item._id}
                        name={item?.user[0].name}
                        desc={item.desc}
                        img={item?.user[0].img}
                    />
                ))}
        </div>
    );
};

export default LeftWatch;

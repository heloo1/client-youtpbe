import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import useAuthStore from '~/store/useAuthStore';
import { createComment, getAllComment } from '~/service/comment';
import { addLike, disLike } from '~/service/video';
import { commentForm } from '~/types/comment';

export default function useLike() {
    const { videoWatch } = useSelector((state: any) => state.video);
    const { user } = useAuthStore((state) => state);
    let checkLike = useRef(false);
    let checkDisLike = useRef(false);
    const [likes, setLikes] = useState<number>(0);
    const [disLikes, setDisLikes] = useState<number>(0);
    useEffect(() => {
        user &&
            videoWatch.likes.forEach((item: any) => {
                // console.log('item', item);
                if (item == user._id) {
                    checkLike.current = true;
                }
            });
        user &&
            videoWatch.dislikes.forEach((item: any) => {
                if (item === user._id) {
                    checkDisLike.current = true;
                }
            });
        setLikes(videoWatch.likes.length);
        setDisLikes(videoWatch.dislikes.length);
        console.log('checkLike', checkLike);
        console.log('checkType', user?._id);
    }, [videoWatch]);
    console.log('checkDisLike', checkDisLike);
    const likeAction = async () => {
        try {
            if (!checkLike.current) {
                await addLike(videoWatch._id);
                console.log('cjeclll', checkLike);
                setLikes((prev) => prev + 1);
                checkLike.current = true;
            }
            if (checkDisLike.current) {
                setDisLikes((prev) => prev - 1);
                checkDisLike.current = false;
            }
        } catch (err) {
            console.log(err);
        }
    };
    const unlikeAction = async () => {
        try {
            if (checkLike.current) {
                setLikes((prev) => prev - 1);
                checkLike.current = false;
            }
            if (!checkDisLike.current) {
                await disLike(videoWatch._id);
                setDisLikes((prev) => prev + 1);
                checkDisLike.current = true;
            }
        } catch (err) {
            console.log(err);
        }
    };
    return { likeAction, unlikeAction, likes, disLikes };
}

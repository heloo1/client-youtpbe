import { useState } from 'react';
import { createComment, getAllComment } from '~/service/comment';
import { commentForm } from '~/types/comment';

export default function useComment() {
    const [listComment, setListComment] = useState<string[]>([]);

    const getComment = async (videoId: string) => {
        const comments = await getAllComment(videoId);
        setListComment(comments.data);
    };
    const addComment = async (data: commentForm) => {
        const newComment = await createComment(data);
        console.log('data', data);
        setListComment((prev) => [...prev, ...newComment.data]);
        return newComment;
    };

    return {
        listComment,
        setListComment,
        getComment,
        addComment,
    };
}

import API from '~/network/API';
import { commentForm } from '~/types/comment';

export const createComment = (data: commentForm) => {
    return API.post('/api/comments', data);
};
export const getAllComment = (videoId: string) => {
    return API.get(`/api/comments/${videoId}`);
};
export const deleteComment = (id: string) => {
    return API.delete(`/api/comments/${id}`);
};

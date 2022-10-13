import API from '~/network/API';
import { videoForm } from '~/types/video';

export const createVideo = (data: videoForm) => {
    return API.post('/api/videos', data);
};
export const getAllVideo = () => {
    return API.get('/api/videos');
};
export const getRandomVideo = () => {
    return API.get('/api/videos/random');
};
export const addLike = (videoId: string) => {
    return API.put(`/api/users/like/${videoId}`);
};
export const disLike = (videoId: string) => {
    return API.put(`/api/users/dislike/${videoId}`);
};

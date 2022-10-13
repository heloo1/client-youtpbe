import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { video } from '~/types/video';
const videoInit = {
    title: '',
    desc: '',
    imgUrl: '',
    videoUrl: '',
    views: 0,
    tags: [],
    likes: [],
    dislikes: [],
};
// Define a type for the slice state
export interface videoState {
    value: number;
    listVideos: video[];
    videoAdd: video;
    videoWatch: video;
}

// Define the initial state using that type
const initialState: videoState = {
    value: 0,
    listVideos: [],
    videoAdd: videoInit,
    videoWatch: videoInit,
};

export const videoSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addVideo: (state, { payload }) => {
            state.listVideos.push(payload);
        },
        watchVideo: (state, { payload }) => {
            state.videoWatch = payload;
        },
        addListVideo: (state, { payload }) => {
            state.listVideos = payload;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
    },
});
export const { addVideo, watchVideo, addListVideo } = videoSlice.actions;
export default videoSlice.reducer;

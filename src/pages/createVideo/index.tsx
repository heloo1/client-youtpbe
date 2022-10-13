import React from 'react';
import Box from '@mui/material/Box';
import styles from './styles.module.css';
import TextField from '@mui/material/TextField';
import { Button } from '@material-ui/core';
import { videoForm, videoResponse } from '~/types/video';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { ResponseAPI } from '~/app/response';
import { AxiosError } from 'axios';
import API from '~/network/API';
import { useNavigate } from 'react-router-dom';
import { createVideo } from '~/service/video';
const CreateVideo = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<videoForm>();
    const onSubmit = async (data: videoForm) => {
        const res = await createVideo(data);
        if (res) {
            reset({
                title: '',
                desc: '',
                imgUrl: '',
                videoUrl: '',
            });
            navigate('/');
        }
        console.log('data', data);
        console.log('res', res);
        // mutate(data);
    };
    return (
        <div className={styles.container}>
            <h3 className={styles.header}>Create Video</h3>
            <Box
                component="form"
                sx={{
                    width: '100%',
                    height: 300,
                }}
                onSubmit={handleSubmit(onSubmit)}
            >
                <TextField
                    sx={{ marginBottom: 1 }}
                    id="outlined-basic"
                    label="title"
                    variant="outlined"
                    fullWidth
                    {...register('title', {
                        required: 'Please enter your title.',
                    })}
                />
                {errors.title && (
                    <p style={{ color: 'red', margin: 3 }}>
                        {errors.title.message}
                    </p>
                )}
                <TextField
                    sx={{ marginBottom: 1 }}
                    id="outlined-basic"
                    label="desc"
                    variant="outlined"
                    fullWidth
                    {...register('desc', {
                        required: 'Please enter your desc.',
                    })}
                />{' '}
                {errors.desc && (
                    <p style={{ color: 'red', margin: 3 }}>
                        {errors.desc.message}
                    </p>
                )}
                <TextField
                    sx={{ marginBottom: 1 }}
                    id="outlined-basic"
                    label="imgUrl"
                    variant="outlined"
                    fullWidth
                    {...register('imgUrl', {
                        required: 'Please enter your imgUrl.',
                    })}
                />
                {errors.imgUrl && (
                    <p style={{ color: 'red', margin: 3 }}>
                        {errors.imgUrl.message}
                    </p>
                )}
                <TextField
                    sx={{ marginBottom: 1 }}
                    id="outlined-basic"
                    label="videoUrl"
                    variant="outlined"
                    fullWidth
                    {...register('videoUrl', {
                        required: 'Please enter your videoUrl.',
                    })}
                />
                {errors.videoUrl && (
                    <p style={{ color: 'red', margin: 3 }}>
                        {errors.videoUrl.message}
                    </p>
                )}
                <Button type="submit" color="primary" variant="contained">
                    Create
                </Button>
            </Box>
        </div>
    );
};

export default CreateVideo;

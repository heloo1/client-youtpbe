import React, { useState } from 'react';
import styles from './styles.module.css';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import TextField from '@mui/material/TextField';
import { Avatar } from '@material-ui/core';
import TagFacesOutlinedIcon from '@mui/icons-material/TagFacesOutlined';
import { Button } from '@mui/material';
interface Props {
    handleComment: (data: string) => void;
}
const MyComent = ({ handleComment }: Props) => {
    const [comment, setComment] = useState('');
    const handleOnchange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setComment(e.target.value);
    };
    const handleOnClick = () => {
        handleComment(comment);
        setComment('');
    };
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Avatar
                    alt="Cindy Baker"
                    src="https://mui.com/static/images/avatar/2.jpg"
                />
            </div>
            <div className={styles.right}>
                <TextField
                    fullWidth
                    id="standard-basic"
                    label="Viết bình luận"
                    variant="standard"
                    onChange={handleOnchange}
                    value={comment}
                />
                <div className={styles.action}>
                    <div className={styles.icon}>
                        <TagFacesOutlinedIcon />
                    </div>
                    <Button>Hủy</Button>
                    <Button variant="contained" onClick={handleOnClick}>
                        Bình luận
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MyComent;

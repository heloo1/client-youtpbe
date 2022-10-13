import React from 'react';
import styles from './styles.module.css';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import MyComent from '~/components/MyComent';
interface Props {
    handleComment: (data: string) => void;
}
const Comment = ({ handleComment }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.number}>4.942 bình luận</span>
                <div className={styles.sort}>
                    <SortOutlinedIcon />
                    <span className={styles.title}>Sắp xếp theo</span>
                </div>
            </div>
            <div className={styles.content}>
                <MyComent handleComment={handleComment} />
            </div>
        </div>
    );
};

export default Comment;

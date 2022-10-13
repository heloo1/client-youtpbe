import React from 'react';
import styles from './styles.module.css';
import CardVideo from '~/components/CardVideo';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
interface Props {
    likes: number;
    dislikes: number;
    handleLike: () => void;
    handleDisLike: () => void;
}
const ActionWatch = ({ likes, dislikes, handleLike, handleDisLike }: Props) => {
    return (
        <div className={styles.action}>
            <div className={styles.action_item} onClick={handleLike}>
                <ThumbUpOutlinedIcon />
                <span className={styles.action_title}>{likes}</span>
            </div>
            <div className={styles.action_item} onClick={handleDisLike}>
                <span
                    style={{ marginRight: 6 }}
                    className={styles.action_title}
                >
                    {dislikes}
                </span>
                <ThumbDownAltOutlinedIcon />
                <span className={styles.action_title}>Không thích</span>
            </div>
            <div className={styles.action_item}>
                <ShareOutlinedIcon />
                <span className={styles.action_title}>Chia sẻ</span>
            </div>
            <div className={styles.action_item}>
                <ContentCutOutlinedIcon />
                <span className={styles.action_title}>Tạo đoạn video</span>
            </div>
            <div className={styles.action_item}>
                <LibraryAddOutlinedIcon />
                <span className={styles.action_title}>Lưu</span>
            </div>
            <div className={styles.action_item}>
                <MoreHorizOutlinedIcon />
            </div>
        </div>
    );
};

export default ActionWatch;

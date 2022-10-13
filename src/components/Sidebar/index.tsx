import React from 'react';
import SidebarItem from '~/components/SidebarItem';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import HomeIcon from '@mui/icons-material/Home';
import NotStartedOutlinedIcon from '@mui/icons-material/NotStartedOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import SpeakerGroupIcon from '@mui/icons-material/SpeakerGroup';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import PersonalVideoOutlinedIcon from '@mui/icons-material/PersonalVideoOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import EmojiFlagsOutlinedIcon from '@mui/icons-material/EmojiFlagsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className={styles.container}>
            <SidebarItem
                active={true}
                Icon={<HomeIcon />}
                title={'Trang chủ'}
            />
            <SidebarItem Icon={<ExploreOutlinedIcon />} title={'Khám phá'} />
            <SidebarItem Icon={<NotStartedOutlinedIcon />} title={'Shorts'} />
            <SidebarItem
                Icon={<SlideshowOutlinedIcon />}
                title={'Kênh đăng ký'}
            />
            <div className={styles.street}></div>
            <SidebarItem
                Icon={<VideoLibraryOutlinedIcon />}
                title={'Thư viện'}
            />
            <SidebarItem Icon={<AlarmOnIcon />} title={'Video đã xem'} />
            <Link to="/create" className={styles.link}>
                <SidebarItem
                    Icon={<PersonalVideoOutlinedIcon />}
                    title={'Tạo video'}
                />
            </Link>
            <SidebarItem Icon={<WatchLaterOutlinedIcon />} title={'Xem sau'} />
            <SidebarItem
                Icon={<VideoLibraryOutlinedIcon />}
                title={'Kênh đăng ký'}
            />
            <div className={styles.street}></div>
            <div className={styles.name}>Kênh đăng ký</div>
            <SidebarItem
                img="https://yt3.ggpht.com/pls5fU0e4FpfN4FT5o3hNPiDiozjPQc9Ri7acxZpElYmjIz4HvxVFBTD4g8WRR3F7Dvbj1WY=s88-c-k-c0x00ffffff-no-rj"
                title={'Võ Mạnh Cường'}
            />
            <SidebarItem
                img="https://yt3.ggpht.com/pls5fU0e4FpfN4FT5o3hNPiDiozjPQc9Ri7acxZpElYmjIz4HvxVFBTD4g8WRR3F7Dvbj1WY=s88-c-k-c0x00ffffff-no-rj"
                title={'Võ Mạnh Cường'}
            />
            <SidebarItem
                img="https://yt3.ggpht.com/pls5fU0e4FpfN4FT5o3hNPiDiozjPQc9Ri7acxZpElYmjIz4HvxVFBTD4g8WRR3F7Dvbj1WY=s88-c-k-c0x00ffffff-no-rj"
                title={'Võ Mạnh Cường'}
            />
            <SidebarItem
                img="https://yt3.ggpht.com/pls5fU0e4FpfN4FT5o3hNPiDiozjPQc9Ri7acxZpElYmjIz4HvxVFBTD4g8WRR3F7Dvbj1WY=s88-c-k-c0x00ffffff-no-rj"
                title={'Võ Mạnh Cường'}
            />
            <div className={styles.street}></div>
            <SidebarItem Icon={<SettingsOutlinedIcon />} title={'Cài đặt'} />
            <SidebarItem
                Icon={<EmojiFlagsOutlinedIcon />}
                title={'Nhật ký báo cáo'}
            />
            <SidebarItem
                Icon={<HelpOutlineOutlinedIcon />}
                title={'Trợ giúp'}
            />
            <SidebarItem
                Icon={<ForwardToInboxOutlinedIcon />}
                title={'Gửi phản hồi'}
            />
        </div>
    );
};

export default Sidebar;

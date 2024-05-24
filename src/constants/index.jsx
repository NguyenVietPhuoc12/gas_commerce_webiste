import { LiaLanguageSolid } from 'react-icons/lia';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { TbLogout } from 'react-icons/tb';

export const MENU_ITEMS = [
    {
        icon: <LiaLanguageSolid />,
        title: 'Tiếng Việt',
        subMenu: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
            ],
        },
    },
    {
        icon: <MdOutlineSupportAgent />,
        title: 'Hỗ trợ 24/7',
        to: '/help',
    },
    {
        icon: <IoIosNotificationsOutline />,
        title: 'Thông báo',
    },
];

export const USER_MENU = [...MENU_ITEMS, { icon: <TbLogout />, title: 'Đăng xuất', separated: true }];

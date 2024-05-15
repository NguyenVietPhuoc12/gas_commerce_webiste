import { LiaLanguageSolid } from 'react-icons/lia';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { IoIosNotificationsOutline } from 'react-icons/io';

export const MENU_ITEMS = [
    {
        icon: <LiaLanguageSolid />,
        title: 'Tiếng Việt',
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

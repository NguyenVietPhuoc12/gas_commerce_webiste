import { IoIosArrowBack } from 'react-icons/io';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const Header = ({ title, onBack }) => {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <IoIosArrowBack className={cx('icon')} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
};

export default Header;

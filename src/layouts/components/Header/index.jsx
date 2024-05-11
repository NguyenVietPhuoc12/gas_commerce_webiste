import { Link } from 'react-router-dom';

import { IoIosCloseCircle } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx('header-wrapper')}>
            <div className={cx('header-content')}>
                {/*------------------------ Logo container jsx--------------------- */}
                <Link to={'/'}>
                    <div className={cx('header__content-logo')}>
                        <img src={require('~/assets/images/logo.png')} alt="logo" />
                        <div className={cx('header__content-title')}>
                            <p>Cửa hàng dầu khí hoá lỏng</p>
                            <h3>Phước Thịnh</h3>
                        </div>
                    </div>
                </Link>
                {/*-------------X---------- Logo container jsx-----------X--------- */}

                {/*------------------------ Search container jsx--------------------- */}
                <div className={cx('header-search')}>
                    <input type="text" placeholder="Tìm kiếm sản phẩm..." spellCheck={false} />
                    <button className={cx('header-search-clear')}>
                        <IoIosCloseCircle className={cx('icon')} />
                    </button>
                    <button className={cx('header-search-btn')}>
                        <IoSearch className={cx('icon')} />
                    </button>
                </div>
                {/*-------------X---------- Search container jsx------------X-------- */}

                {/*------------------------ Actions container jsx--------------------- */}
                <div className={cx('header-actions')}>
                    <h2>Actions container</h2>
                </div>
                {/*-------------X---------- Actions container jsx------------X-------- */}
            </div>
        </header>
    );
};

export default Header;

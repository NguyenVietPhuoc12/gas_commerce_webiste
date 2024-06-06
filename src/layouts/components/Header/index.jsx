/* Import libraries from React Js */
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';

/* Import Tippy Library */
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

/* Import React Icons */
import { PhoneIcon, MenuIcon, HasUserPhoneIcon, SendIcon, CartIcon } from '~/components/Icons';

/* Import CSS Private Component */
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

/* Import components */
import Buttons from '~/components/Buttons';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';

/* Import constants */
import { MENU_ITEMS, USER_MENU } from '~/constants';

const cx = classNames.bind(styles);

const Header = () => {
    const hasUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;

            default:
        }
    };

    return (
        <header className={cx('header-wrapper')}>
            <div className={cx('header-content')}>
                {/*------------------------ Logo container jsx--------------------- */}
                <Link to={routesConfig.home}>
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
                <Search />
                {/*-------------X---------- Search container jsx------------X-------- */}

                {/*------------------------ Actions container jsx--------------------- */}
                <div className={cx('header-actions')}>
                    {hasUser ? (
                        <>
                            <Tippy delay={[0, 300]} content="Hotline: 0702407702" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <HasUserPhoneIcon className={cx('icon')} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 300]} content="Nhắn tin" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <SendIcon className={cx('icon')} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 300]} content="Giỏ hàng" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <CartIcon className={cx('icon')} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <div className={cx('header-actions-hotline')}>
                                <PhoneIcon className={cx('icon')} />
                                <a href="tel: 0702407702">
                                    <span>Hotline:</span> 0702407702
                                </a>
                            </div>

                            <Buttons outline rounded to={routesConfig.login}>
                                Đăng nhập
                            </Buttons>
                        </>
                    )}
                    <Menu items={hasUser ? USER_MENU : MENU_ITEMS} onChange={handleMenuChange}>
                        {hasUser ? (
                            <div className={cx('image-box')}>
                                <img
                                    src={require('~/assets/images/avatar.png')}
                                    className={cx('user-avatar')}
                                    alt="user"
                                />
                            </div>
                        ) : (
                            <div className={cx('header-actions-menu')}>
                                <MenuIcon className={cx('icon')} />
                            </div>
                        )}
                    </Menu>
                </div>
                {/*-------------X---------- Actions container jsx------------X-------- */}
            </div>
        </header>
    );
};

export default Header;

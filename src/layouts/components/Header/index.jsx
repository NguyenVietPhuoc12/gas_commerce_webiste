/* Import libraries from React Js */
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/* Import Tippy Library */
import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

/* Import React Icons */
import { CloseIcon, PhoneIcon, SearchIcon, MenuIcon } from '~/components/Icons';
import { FiPhoneCall } from 'react-icons/fi';
import { LuSend } from 'react-icons/lu';
import { LuMailbox } from 'react-icons/lu';

/* Import CSS Private Component */
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

/* Import components */
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SearchProductItem from '~/components/SearchProductItem';
import Buttons from '~/components/Buttons';
import Menu from '~/components/Popper/Menu';

/* Import constants */
import { MENU_ITEMS, USER_MENU } from '~/constants';

/* Import API from DB */
import { products } from '~/db/ProductItemDB';

const cx = classNames.bind(styles);

const Header = () => {
    const [searchResult, setSearchResult] = useState([]);
    const timerId = useRef();

    const hasUser = true;

    useEffect(() => {
        timerId.current = setTimeout(() => {
            setSearchResult([1, 2]);
        }, 1000);

        return () => {
            clearTimeout(timerId.current);
        };
    }, []);

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
                <div>
                    <TippyHeadless
                        interactive={true}
                        visible={searchResult.length > 0}
                        render={(attrs) => {
                            return (
                                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <h4 className={cx('search-result-title')}>Tìm kiếm</h4>
                                        {products.map((product) => {
                                            return <SearchProductItem data={product} key={product.id} />;
                                        })}
                                    </PopperWrapper>
                                </div>
                            );
                        }}
                    >
                        <div className={cx('header-search')}>
                            <input type="text" placeholder="Tìm kiếm sản phẩm..." spellCheck={false} />
                            <button className={cx('header-search-clear')}>
                                <CloseIcon className={cx('icon')} />
                            </button>
                            <Tippy content="Tìm kiếm" placement="bottom">
                                <button className={cx('header-search-btn')}>
                                    <SearchIcon className={cx('icon')} />
                                </button>
                            </Tippy>
                        </div>
                    </TippyHeadless>
                </div>
                {/*-------------X---------- Search container jsx------------X-------- */}

                {/*------------------------ Actions container jsx--------------------- */}
                <div className={cx('header-actions')}>
                    {hasUser ? (
                        <>
                            <Tippy delay={[0, 300]} content="Hotline: 0702407702" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FiPhoneCall className={cx('icon')} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 300]} content="Nhắn tin" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <LuSend className={cx('icon')} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 300]} content="Hòm thư" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <LuMailbox className={cx('icon')} />
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

                            <Buttons outline rounded to="/login">
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

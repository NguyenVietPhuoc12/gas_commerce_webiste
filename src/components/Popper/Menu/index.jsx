import { useState } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Header from './Header';

const cx = classNames.bind(styles);

const Menu = ({ items = [], children, onChange = () => {} }) => {
    const [history, setHistory] = useState([{ data: items }]);

    const currentMenu = history[history.length - 1];

    const handleRenderSubMenu = (item, isParent) => {
        if (isParent) {
            setHistory((prev) => [...prev, item.subMenu]);
        } else {
            onChange(item);
        }
    };

    const handleBackMenu = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    return (
        <div className={cx('wrapper')}>
            <TippyHeadless
                delay={[0, 500]}
                offset={[16, 8]}
                interactive
                placement="bottom-end"
                onHide={() => setHistory((prev) => prev.slice(0, 1))}
                hideOnClick="false"
                render={(attrs) => {
                    return (
                        <div className={cx('menu-list')} {...attrs} tabIndex="-1">
                            <PopperWrapper>
                                {history.length > 1 && <Header title={'Ngôn ngữ'} onBack={handleBackMenu} />}
                                <div className={cx('menu-body')}>
                                    {currentMenu.data.map((item, index) => {
                                        const isParent = !!item.subMenu;

                                        return (
                                            <MenuItem
                                                key={index}
                                                data={item}
                                                onClick={() => handleRenderSubMenu(item, isParent)}
                                            />
                                        );
                                    })}
                                </div>
                            </PopperWrapper>
                        </div>
                    );
                }}
            >
                {children}
            </TippyHeadless>
        </div>
    );
};

export default Menu;

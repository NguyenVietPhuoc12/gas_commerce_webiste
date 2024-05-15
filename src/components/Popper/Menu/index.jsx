import TippyHeadless from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const Menu = ({ items = [], children }) => {
    return (
        <div className={cx('wrapper')}>
            <TippyHeadless
                delay={[0, 500]}
                interactive
                placement="bottom-end"
                render={(attrs) => {
                    return (
                        <div className={cx('menu-list')} {...attrs} tabIndex="-1">
                            <PopperWrapper>
                                {items.map((item, index) => {
                                    return <MenuItem key={index} data={item} />;
                                })}
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

import Buttons from '~/components/Buttons';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const MenuItem = ({ data }) => {
    return (
        <div className={cx('wrapper')}>
            <Buttons className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
                {data.title}
            </Buttons>
        </div>
    );
};
export default MenuItem;

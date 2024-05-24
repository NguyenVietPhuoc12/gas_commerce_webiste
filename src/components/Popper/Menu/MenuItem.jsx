import Buttons from '~/components/Buttons';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const MenuItem = ({ data, onClick }) => {
    const classes = cx('menu-item', {
        separated: data.separated,
    });

    return (
        <div className={cx('wrapper')}>
            <Buttons className={classes} onClick={onClick} leftIcon={data.icon} to={data.to}>
                {data.title}
            </Buttons>
        </div>
    );
};
export default MenuItem;

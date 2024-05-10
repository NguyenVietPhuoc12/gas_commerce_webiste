import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

const Sidebar = () => {
    return (
        <div className={cx('sidebar-wrapper')}>
            <h2>Sidebar content</h2>
        </div>
    );
};

export default Sidebar;

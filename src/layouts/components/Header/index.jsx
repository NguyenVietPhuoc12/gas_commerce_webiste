import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx('header-wrapper')}>
            <div className={cx('header-content')}>
                <h2>Header content</h2>
            </div>
        </header>
    );
};

export default Header;

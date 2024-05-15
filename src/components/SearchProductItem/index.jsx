import classNames from 'classnames/bind';
import styles from './SearchProductItem.module.scss';

const cx = classNames.bind(styles);

const SearchProductItem = ({ data }) => {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('product-image')} src={data.image} alt={data.title} />
            <div className={cx('product-detail')}>
                <h4 className={cx('product-detail-name')}>{data.title}</h4>
                <p className={cx('product-detail-desc')}>{data.desc}</p>
            </div>
        </div>
    );
};

export default SearchProductItem;

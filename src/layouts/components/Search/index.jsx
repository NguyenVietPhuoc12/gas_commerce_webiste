/* Import libraries from react */
import { useState, useEffect, useRef } from 'react';

/* Import Tippy library core */
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

/* Import Popper Wrapper component */
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SearchProductItem from '~/components/SearchProductItem';

/* Import CSS Private Component */
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

/* Import API from DB */
import { products } from '~/db/ProductItemDB';

/* Import icons from Icon component */
import { CloseIcon, SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const Search = () => {
    /* useState for handle two-way binding to get value input of user */
    const [searchValue, setSearchValue] = useState('');
    /* useState for set state to render search product item */
    const [searchResult, setSearchResult] = useState([]);
    const [showSearchResult, setShowSearchResult] = useState(false);

    const timerId = useRef();
    const inputRef = useRef();

    /* Call API to search with fetch method and using useEffect */
    useEffect(() => {
        timerId.current = setTimeout(() => {
            setSearchResult([1, 2]);
        }, 1000);

        return () => {
            clearTimeout(timerId.current);
        };
    }, []);

    /* Defined a function to handle clear search's value */
    const handleClearSearchValue = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    };

    /* Defined a function to handle hide search result */
    const handleHideSearchResult = () => {
        setShowSearchResult(false);
    };

    /* Defined a function to handle show search result */
    const handleShowSearchResult = () => {
        setShowSearchResult(true);
    };

    return (
        <div>
            <TippyHeadless
                interactive={true}
                visible={showSearchResult && searchResult.length > 0}
                onClickOutside={handleHideSearchResult}
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
                    <input
                        ref={inputRef}
                        value={searchValue}
                        type="text"
                        placeholder="Tìm kiếm sản phẩm..."
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={handleShowSearchResult}
                    />
                    {!!searchValue && (
                        <button className={cx('header-search-clear')} onClick={handleClearSearchValue}>
                            <CloseIcon className={cx('icon')} />
                        </button>
                    )}
                    <Tippy content="Tìm kiếm" placement="bottom">
                        <button className={cx('header-search-btn')}>
                            <SearchIcon className={cx('icon')} />
                        </button>
                    </Tippy>
                </div>
            </TippyHeadless>
        </div>
    );
};

export default Search;

import style from '~/components/Layout/DefaultLayout/Header/Header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                Header
            </div>
        </header>
    );
}

export default Header;

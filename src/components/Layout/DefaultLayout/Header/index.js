import style from '~/components/Layout/DefaultLayout/Header/Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
const cx = classNames.bind(style);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} className={cx('logo')} alt="TikTok" />
            </div>
        </header>
    );
}

export default Header;

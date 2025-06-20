import Header from './Header';
import Sidebar from './Sidebar';
import style from '~/components/Layout/DefaultLayout/DefaultLayout.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;

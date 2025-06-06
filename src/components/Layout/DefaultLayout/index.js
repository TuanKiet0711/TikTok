import Header from './Header';
import Sidebar from './Sidebar';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container"></div>
            <Sidebar />
            <div className="content"></div>
            {children}
        </div>
    );
}

export default DefaultLayout;

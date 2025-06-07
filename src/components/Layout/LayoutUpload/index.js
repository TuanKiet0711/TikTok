import Header from './HeaderUp';
function LayoutUpload({ children }) {
    return (
        <div>
            <Header />
            <div className="container"></div>
            {children}
        </div>
    );
}

export default LayoutUpload;

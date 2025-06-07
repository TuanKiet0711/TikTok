// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//Layout
import LayoutUpload from '~/components/Layout/LayoutUpload';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: LayoutUpload },
    { path: '/search', component: Search, layout: null },
    // Add more public routes here
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };

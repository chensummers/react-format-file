const Count = () => import('@pages/count');
const Home = () => import('@pages/home');
const Admin = () => import('@pages/admin');
const File = () => import('@pages/file');
const Page404 = () => import('@pages/404');
const Page403 = () => import('@pages/403');

const route = [
    {
        path:'/404',
        exact: false,
        component: Page404
    },
    {
        path:'/403',
        exact: false,
        component: Page403
    },
    {
        path: '/',
        // models: () => [
        //     import('../models/home'),
        // ],
        exact: true,
        component: Home
    },
    {
        path: '/home',
        exact: true,
        component: Home
    },
    {
        path: '/count',
        exact: true,
        component: Count
    },
    {
        path: '/admin',
        exact: true,
        component: Admin
    },
    {
        path: '/file',
        exact: true,
        component: File
    },
    {
        path: '/file/cssReg',
        exact: true,
        component: ()=>import('@pages/file/cssReg')
    },
    {
        path: '/file/viewReg',
        exact: true,
        component: ()=>import('@pages/file/viewReg')
    }

]

export default route;
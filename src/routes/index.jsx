import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import News from '~/pages/News';
import Product from '~/pages/Product';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/product', component: Product },
    { path: '/news', component: News, layout: HeaderOnly },
    { path: '/login', component: Login, layout: null },
];

export const privateRoutes = [];

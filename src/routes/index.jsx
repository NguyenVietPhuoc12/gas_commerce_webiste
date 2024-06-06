import routesConfig from '~/config/routes';

import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import News from '~/pages/News';
import Product from '~/pages/Product';

export const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.product, component: Product },
    { path: routesConfig.news, component: News, layout: HeaderOnly },
    { path: routesConfig.login, component: Login, layout: null },
];

export const privateRoutes = [];

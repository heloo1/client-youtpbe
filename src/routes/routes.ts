import React, { ExoticComponent, Fragment, lazy, ReactNode } from 'react';
import DefaultLayout from '~/layout/Default';

const Home = lazy(() => import('~/pages/home'));
const Login = lazy(() => import('~/pages/Login'));
const Register = lazy(() => import('~/pages/Register'));
const Watch = lazy(() => import('~/pages/watch'));
const CreateVideo = lazy(() => import('~/pages/createVideo'));
interface Route {
    path: string;
    component: React.LazyExoticComponent<any>;
    layout?: any;
    private?: boolean;
    children?: RouteChildren[];
}

interface RouteChildren {
    path: string;
    component: React.LazyExoticComponent<any>;
}

const routes: Route[] = [
    {
        path: '/',
        component: Home,
        // layout: DefaultLayout,
    },
    {
        path: '/login',
        component: Login,
        // layout: DefaultLayout,
    },
    {
        path: '/register',
        component: Register,
        // layout: DefaultLayout,
    },
    {
        path: '/watch/:id',
        component: Watch,
        // layout: DefaultLayout,
    },
    {
        path: '/create',
        component: CreateVideo,
        layout: DefaultLayout,
    },
];

export default routes;

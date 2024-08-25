import { Articles, Document, Home, Recruitment, } from '../views';

const config = {
    home: '/',
    post: '/articles',
    document: '/document',
    recruit: '/recruitment',
};

type Route = {
    path: string;
    component: React.ComponentType<any>;
    children?: Route[];
};

const publicRoutes: Route[] = [
    { path: config.home, component: Home },
    { path: config.post, component: Articles },
    { path: config.document, component: Document },
    { path: config.recruit, component: Recruitment },
];

const privateRoutes: Route[] = [];

export { publicRoutes, privateRoutes };

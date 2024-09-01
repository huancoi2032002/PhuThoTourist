import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Articles, Document, Home, Recruitment } from '../views';
import ArticleDetails from '../views/Articles/ArticleDetails/ArticleDetails';
import RecruitmentDetail from '../views/Recruitment/RecruitmentDetail/RecruitmentDetail';

const config = {
    home: '/',
    articles: '/articles',
    articleDetails: '/articles/:id', // Giả sử bạn có param :id cho article details
    document: '/document',
    recruit: '/recruitment',
    recruitDetails: '/recruitment/:id',
};

type Route = {
    path: string;
    component: React.ComponentType<any>;
    children?: Route[];
};

const publicRoutes: Route[] = [
    { path: config.home, component: Home },
    {
        path: config.articles, component: Articles, children: [
            { path: config.articleDetails, component: ArticleDetails }
        ]
    },
    { path: config.document, component: Document },
    { 
        path: config.recruit, component: Recruitment, children: [
            { path: config.recruitDetails, component: RecruitmentDetail}
        ]
    },
];

const privateRoutes: Route[] = [];

export { publicRoutes, privateRoutes };

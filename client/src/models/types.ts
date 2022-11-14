/* eslint-disable no-use-before-define */
import { State } from './utilsTypes';

export interface ICategory {
    categoryName: string;
    id: string;
}

export interface IArticle {
    id: string;
    title: string;
    content: string;
    author: {
        _id: IUser['_id'];
        username: IUser['username'];
    };
    tags: string[];
    likes: number;
    likedBy: string[];
    comments: IComment[];
    category: ICategory;
    created: Date;
}

export interface IComment {
    id: string;
    content: string;
    author: {
        _id: IUser['_id'];
        username: IUser['username'];
    };
    likes: number;
    likedBy: string[];
    created: Date;
}

export interface IUser {
    _id: string;
    username: string;
    articles: IArticle[];
    likedArticles: IArticle[];
    comments: IComment[];
    likedComments: IComment[];
}

export interface UserState extends State {
    user: IUser | null;
    isAuth: boolean;
}

export interface CategoryState extends State {
    categories: ICategory[] | null;
}

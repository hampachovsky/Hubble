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
        id: IUser['id'];
        usernmae: IUser['username'];
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
        id: IUser['id'];
        usernmae: IUser['username'];
    };
    likes: number;
    likedBy: string[];
    created: Date;
}

export interface IUser {
    id: string;
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

export enum RoutesPath {
    LOGIN = '/login',
    REGISTER = '/register',
    PROFILE = '/profile/',
    ARTICLES = '/articles',
    COMMENTS = '/profile/:id/comments',
    RATED = '/profile/:id/rated',
    ARTICLE = '/article/:id',
    SEARCH = '/search',
}

export enum ProfileRoutesPath {
    ARTICLES = '/profile/',
    RATED = '/profile/rated',
}

export enum AuthApiRoutes {
    LOGIN = '/auth/login',
    REGISTER = '/auth/register',
    AUTH_ME = '/auth/me',
}
export enum CategoryApiRoutes {
    GET_ALL = '/category/all',
    GET_BY_ID = '/category/',
}

export enum ArticlesApiRoutes {
    GET_ALL = '/articles/all',
    GET_OWN_ARTICLES = '/articles/own',
    GET_LIKED_ARTICLES = '/articles/liked',
    ADD_ARTICLE = '/articles/',
    CHANGE_LIKE = '/articles/',
}
export enum CommentApiRoutes {
    ADD_COMENT = '/articles/',
    GET_BY_ARTICLE = '/comments/getBy/',
    CHANGE_LIKE = '/comments/',
}

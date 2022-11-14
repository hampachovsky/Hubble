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
    CHANGE_LIKE = '/articles/',
}

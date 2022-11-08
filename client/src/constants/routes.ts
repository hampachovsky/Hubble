export enum RoutesPath {
    LOGIN = '/login',
    REGISTER = '/register',
    PROFILE = '/profile',
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

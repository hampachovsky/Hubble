import { instance } from 'api';
import { ArticlesApiRoutes } from 'constants/routes';
import { IArticle, ICategory } from 'models/types';

export interface ChangeLikeRequest {
    articleId: IArticle['id'];
    type: 'addLike' | 'removeLike';
}

export interface ArticlePayloadType {
    title: IArticle['title'];
    content: IArticle['content'];
    categoryId: ICategory['id'];
    tags: IArticle['tags'];
}

export const articleAPI = {
    async getAll(): Promise<IArticle[]> {
        const response = await instance.get(ArticlesApiRoutes.GET_ALL);
        return response.data;
    },
    async getOwnArticles(): Promise<IArticle[]> {
        const response = await instance.get(ArticlesApiRoutes.GET_OWN_ARTICLES);
        return response.data;
    },
    async getLikedArticles(): Promise<IArticle[]> {
        const response = await instance.get(ArticlesApiRoutes.GET_LIKED_ARTICLES);
        return response.data;
    },
    async create(article: ArticlePayloadType): Promise<IArticle> {
        const response = await instance.post(ArticlesApiRoutes.ADD_ARTICLE, article);
        return response.data;
    },
    async changeLike(payload: ChangeLikeRequest): Promise<IArticle> {
        const response = await instance.put(
            `${ArticlesApiRoutes.CHANGE_LIKE}${payload.articleId}/like`,
            { type: payload.type },
        );
        return response.data;
    },
};

import { instance } from 'api';
import { ArticlesApiRoutes } from 'constants/routes';
import { IArticle } from 'models/types';

export interface ChangeLikeRequest {
    articleId: IArticle['id'];
    type: 'addLike' | 'removeLike';
}

export const articleAPI = {
    async getAll(): Promise<IArticle[]> {
        const response = await instance.get(ArticlesApiRoutes.GET_ALL);
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

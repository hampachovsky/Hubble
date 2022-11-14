import { instance } from 'api';
import { ArticlesApiRoutes } from 'constants/routes';
import { IArticle } from 'models/types';

export const articleAPI = {
    async getAll(): Promise<IArticle[]> {
        const response = await instance.get(ArticlesApiRoutes.GET_ALL);
        return response.data;
    },
    // TODO: CHANGE params
    async changeLike(articleId: string): Promise<IArticle[]> {
        const response = await instance.put(`${ArticlesApiRoutes.CHANGE_LIKE}${articleId}/like`);
        return response.data;
    },
};

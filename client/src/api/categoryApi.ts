import { instance } from 'api';
import { CategoryApiRoutes } from 'constants/routes';
import { IArticle, ICategory } from 'models/types';

export interface CategoryGetByResponse extends ICategory {
    articles: IArticle[];
}

export const categoryAPI = {
    async getAll(): Promise<ICategory[]> {
        const response = await instance.get(CategoryApiRoutes.GET_ALL);
        return response.data;
    },
    async getById(category: ICategory): Promise<CategoryGetByResponse> {
        const response = await instance.get(`${CategoryApiRoutes.GET_BY_ID}/${category.id}`);
        return response.data;
    },
};

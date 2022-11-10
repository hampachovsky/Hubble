import { instance } from 'api';
import { CategoryApiRoutes } from 'constants/routes';
import { ICategory } from 'models/types';

export const categoryAPI = {
    async getAll(): Promise<ICategory[]> {
        const response = await instance.get(CategoryApiRoutes.GET_ALL);
        return response.data;
    },
};

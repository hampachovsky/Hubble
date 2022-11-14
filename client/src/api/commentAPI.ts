import { instance } from 'api';
import { CommentApiRoutes } from 'constants/routes';
import { IArticle, IComment } from 'models/types';

export interface CommentRequestPayload {
    content: string;
    articleId: IArticle['id'];
}

export interface ChangeCommentLikeRequest {
    commentId: IComment['id'];
    type: 'addLike' | 'removeLike';
}

export const commentAPI = {
    async addComment({ content, articleId }: CommentRequestPayload): Promise<IArticle> {
        const response = await instance.post(`${CommentApiRoutes.ADD_COMENT}${articleId}/comment`, {
            content,
        });
        return response.data;
    },
    async getByArticle(articleId: string): Promise<IComment[]> {
        const response = await instance.get(`${CommentApiRoutes.GET_BY_ARTICLE}${articleId}`);
        return response.data;
    },
    async changeLike(payload: ChangeCommentLikeRequest): Promise<IComment> {
        const response = await instance.put(
            `${CommentApiRoutes.CHANGE_LIKE}${payload.commentId}/like`,
            { type: payload.type },
        );
        return response.data;
    },
};

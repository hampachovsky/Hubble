import { Button, Result, Space, Spin } from 'antd';
import { BackToTop } from 'components/common/BackToTop';
import { PrivateLayout } from 'components/Layout/PrivateLayout';
import { RoutesPath } from 'constants/routes';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { selectArticleById, selectArticlesIsLoading } from 'store/slices/articlesSlice/selectors';
import { selectAllComments, selectCommentsIsLoading } from 'store/slices/commentSlice/selectors';
import { fetchComments } from 'store/slices/commentSlice/thunk';
import { ArticleComponent } from './components/ArticleComponent';
import { Comments } from './components/Comments';

export const Article: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const isArticleLoading = useAppSelector(selectArticlesIsLoading);
    const isCommentsLoading = useAppSelector(selectCommentsIsLoading);
    const article = useAppSelector((state) => selectArticleById(state, id!));
    useEffect(() => {
        dispatch(fetchComments(article?.id!));
    }, [dispatch, article?.id]);
    const comments = useAppSelector(selectAllComments);

    if (!article)
        return (
            <Result
                status='404'
                title='404'
                subTitle='Sorry, the page you visited does not exist.'
                extra={
                    <Button
                        type='primary'
                        onClick={() => navigate(RoutesPath.ARTICLES, { replace: true })}
                    >
                        Back Home
                    </Button>
                }
            />
        );
    return (
        <PrivateLayout>
            <>
                <Space direction='vertical' align='center'>
                    <Spin spinning={isArticleLoading}>
                        <ArticleComponent
                            id={article.id}
                            title={article.title}
                            content={article.content}
                            author={article.author}
                            tags={article.tags}
                            likes={article.likes}
                            likedBy={article.likedBy}
                            comments={article.comments}
                            category={article.category}
                            created={article.created}
                        />
                    </Spin>
                    <Spin spinning={isCommentsLoading}>
                        <Comments comments={comments} articleId={article.id} />
                    </Spin>
                </Space>
                <BackToTop />
            </>
        </PrivateLayout>
    );
};

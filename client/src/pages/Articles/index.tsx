import { Space, Spin, Typography } from 'antd';
import { BackToTop } from 'components/common/BackToTop';
import { PrivateLayout } from 'components/Layout/PrivateLayout';
import { useAppSelector } from 'hooks/redux';
import React from 'react';
import { selectAllArticles, selectArticlesIsLoading } from 'store/slices/articlesSlice/selectors';
import { ArticleCard } from './components/ArticleCard';
import { ArticlesFilter } from './components/ArticlesFIlter';

export const Articles: React.FC = () => {
    const articles = useAppSelector(selectAllArticles);
    const isLoading = useAppSelector(selectArticlesIsLoading);

    return (
        <PrivateLayout>
            <Spin spinning={isLoading}>
                <Space direction='vertical' align='center'>
                    <ArticlesFilter />
                    {articles.map((article) => (
                        <ArticleCard
                            id={article.id}
                            title={article.title}
                            content={article.content}
                            key={article.id}
                            tags={article.tags}
                            created={article.created}
                            comments={article.comments}
                            author={article.author}
                            likes={article.likes}
                            likedBy={article.likedBy}
                            category={article.category}
                        />
                    ))}
                </Space>
                <BackToTop />
            </Spin>
        </PrivateLayout>
    );
};
